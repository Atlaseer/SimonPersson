import { useEffect, useRef } from 'react';
import '../Styles/reflections.css';
import trainVideo1 from '../assets/train1.MOV';
import trainVideo2 from '../assets/train2.MOV';
import trainVideo3 from '../assets/train3.MOV';
import classComment from '../assets/classComment.png';
import thankful from '../assets/thankful.mp4';

const videos = [
  { side: 'from-left' },
  { side: 'from-right' },
  { side: 'from-left' },
  { side: 'from-right' },
];

function ReflectionItem({ side, children, className = '' }) {
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
    <div ref={ref} className={`reflection-item ${side} ${className}`}>
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
      <h1 className="reflection-title">Reflections</h1>

      <ReflectionItem side="from-left">
        <video src={trainVideo1} autoPlay muted loop playsInline />
      </ReflectionItem>

      <ReflectionText side="from-right">
        <h2>Expectations</h2>
        <p>Going into this education, I was not sure what to expect. My previous experience was quite different, on a more technical level, 
          and I was unsure if this education would be on the same level or different. I was also curious on how the material would be presented to us as well, 
          and if it would be applicable in my future career as a software developer. What will the teachers be like? And what about my classmates? Will we all get along, 
          or will each student fight for themself to survive this course? I have so many thoughts and wish for them all to be answered in this course!</p>
      </ReflectionText>

      <ReflectionItem side="from-right">
        <video src={trainVideo3} autoPlay muted loop playsInline />
      </ReflectionItem>

      <ReflectionText side="from-left">
        <h2>The Course Content</h2>
        <p>The course itself was different from what I had anticipated. </p>
      </ReflectionText>

      <ReflectionItem side="from-left" className="large">
        <img src={classComment} alt="Class comment" />
      </ReflectionItem>

      <ReflectionText side="from-right">
        <h2>Activities</h2>
        <p>This course pushed me to move outside of my comfort zone. Already the first week when we had an upcoming exam, 
          I decided to create an application that uses <a href="https://atlaseer.github.io/SimonPersson/flashcards" target="_blank" rel="noopener noreferrer">
          FLASHCARDS</a> to easier train on the questions from the literature. 
          I wanted to help my classmates who’d been most delightful to study with, 
          but also keep my own knowledge of programming active while doing something actually useful.
          I believe this created a spark in me, to continue pushing myself even further.
          During the week with the presentations I got excited to talk about a subject I was passionate about, 
          and on just 4 hours of sleep, I volunteered to be first in line to present, and I did so not because I was the best at it, 
          but because it was a fun experience and I wanted to grow and develop my skills further.
          During my presentation, I tried to be engaging and interactive with the audience, and I believe I succeeded in that.
          I also created a small <a href="https://atlaseer.github.io/SimonPersson/isthisai" target="_blank" rel="noopener noreferrer">
          APPLICATION</a> to challenge my classmates and teachers view on what AI and machinelearning truly means.</p>
         </ReflectionText>

      <ReflectionItem side="from-right" className="large">
        <video src={thankful} loop playsInline controls />
      </ReflectionItem>

      <ReflectionText side="from-right">
        <h2>Final Thoughts</h2>
        <p>As I continue through the course, I am finding it increasingly valuable. The concepts are building upon each other, and I am starting to see the bigger picture.</p>
      </ReflectionText>
    </main>
  );
}

export default Reflections;
