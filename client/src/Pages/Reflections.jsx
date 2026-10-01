import { useEffect, useRef } from 'react';
import '../Styles/reflections.css';
import trainVideo from '../assets/train1.MOV';

const videos = [
  { side: 'from-left' },
  { side: 'from-right' },
  { side: 'from-left' },
  { side: 'from-right' },
];

function ReflectionItem({ side, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reflection-item ${side}`}>
      <div className="reflection-video-wrapper">
        {children}
      </div>
    </div>
  );
}

function ReflectionText({ side, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reflection-text ${side}`}>
      {children}
    </div>
  );
}

function Reflections() {
  return (
    <main className="reflections-page">
      <h1>Reflections</h1>

      <ReflectionItem side="from-left">
        <video src={trainVideo} autoPlay muted loop playsInline />
      </ReflectionItem>

      <ReflectionText side="from-right">
        <h2>Expectations</h2>
        <p>Going into this education, I was not sure of what to expect. My previous experience was quite different, and I wasn't sure how the material would be presented or how it would apply to my future career.</p>
      </ReflectionText>

      <ReflectionItem side="from-right">
        <video src={trainVideo} autoPlay muted loop playsInline />
      </ReflectionItem>

      <ReflectionText side="from-left">
        <h2>The course</h2>
        <p>The course itself was different from what I had anticipated. </p>
      </ReflectionText>

      <ReflectionItem side="from-left">
        <video src={trainVideo} autoPlay muted loop playsInline />
      </ReflectionItem>

      <ReflectionText side="from-right">
        <h2>Reflection</h2>
        <p>As I continue through the course, I am finding it increasingly valuable. The concepts are building upon each other, and I am starting to see the bigger picture.</p>
      </ReflectionText>

      <ReflectionItem side="from-right">
        <video src={trainVideo} autoPlay muted loop playsInline />
      </ReflectionItem>
    </main>
  );
}

export default Reflections;
