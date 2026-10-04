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

      <ReflectionText side="from-left">
        <h2>Choice of format</h2>
        <p>For this assignment, I chose to present my reflection as a representation of myself; a bit of everything and a bit outside of the box.
          Therefor I'm using both a website, text, as well as videos and images to show my reflection of this course.
        </p>
      </ReflectionText>
      
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
        <p>The course itself started at a quick pace and was different from what I had anticipated. While the communications course initially was 
          theoretical through reading and writing about the subject, it quickly turned towards a more practical approach.
          We started to apply the concepts in real-world scenarios, which made the learning experience more engaging and fun.
          We utilized both verbal and non-verbal tools, we learn to communicate and express ourselves to a better degree than before.

          Starting with the communications course allowed us to create a foundantion and connections by creating friends, 
          getting to know the education and the style the teachers have.
          The content in the communications course is useful for both academic and personal use. 
          Looking specifically at the importance and impact of verbal and non-verbal communication,
          I can see how this knowledge will be useful to apply in my future career, as well as in my everyday life. 

          As a student, I was particularily fond of being put under pressure in order to transform and to improve myself. 
          These controlled situations such as presenting when the projector can't display the students powerpoint,
          is sometimes needed, and for me personally, it was very fun and engaging.
          This course and these assignments in particular builds confidence and experience in us all to stand up for ourselves when we’re presenting,
          or any other situation where we need to express ourselves.
          </p>
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
        <p>As I continue through the course, I am finding it increasingly valuable. 
          The concepts are building upon each other, and I am starting to see the bigger picture.
          I'm grateful towards the teachers for being supportive and creating a great environment for learning.
          I'm also very appreciative towards my classmates for being such good sports and encouraging each others to further develop and challenge ourselves.
          </p>
      </ReflectionText>
            <ReflectionText side="from-right">
        <h2>References</h2>
        <p>1. Communication in the real world: an introduction to communication studies (2016). Minneapolis: 
          University of Minnesota Libraries Publishing. Available at: 
          https://socialsci.libretexts.org/Bookshelves/Communication/Introduction_to_Communication/
          Communication_in_the_Real_World_-_An_Introduction_to_Communication_Studies 
          (10 September 2026).
          </p>
        <br />
        <p>2. Kozak, M. (2020) 'Academic writing, and how to learn how to write', Journal of Graduate Medical Education,
          12(3), pp. 373–374. Available at: https://doi.org/10.4300/JGME-D-20-00154.1</p>
        <br />
        <p>3. Bennett, S., Maton, K. and Kervin, L. (2008) 'The 'digital natives' debate: a critical review of the evidence',
          British Journal of Educational Technology, 39(5), pp. 775–786. Available at: https://doi.org/10.1111/j.1467-8535.2007.00793.x</p>
      </ReflectionText>
    </main>
  );
}

export default Reflections;
