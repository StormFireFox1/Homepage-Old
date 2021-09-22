import { DateTime } from "luxon";
import { Ref } from "react";
import Link from 'next/link';

import Header from 'components/Header';
import SkillCardGallery from 'components/SkillCardGallery';
import ProjectCardGallery from 'components/ProjectCardGallery';
interface AboutMeProps {
  aboutMeRef: Ref<HTMLElement>;
}

const AboutMe = (props: AboutMeProps) => {
  const { aboutMeRef } = props;
  const birthday = DateTime.fromISO('2001-02-27T09:00:00.000');
  // toFixed truncates decimal digits from number.
  const age = Math.floor(birthday.until(DateTime.now()).length('years'));
  return (
    <>
      <main ref={aboutMeRef} className="w-screen max-w-4xl min-h-screen mx-auto my-auto p-8 pb-24 font-exo">
        <p className="pt-5">I&apos;m a {age}-year-old student at UC San Diego, and I <i>really</i> like computers. Maybe too much.</p>
        <p className="py-2">It started with video games, but evolved into spending time tinkering with computers, exploding
          transistors, and messing with Vim configs. Now I mostly spend time on actual productive side-projects
          and testing my mettle on the nearly 7 years worth of studying and reading about everything related to
          computers I could find online or not.</p>
        <p className="py-2">Excluding computers, there are many other things I do as well, all while funneling life through my unique prism of humour and optimism.</p>
        <Header text="What I know" />
        <SkillCardGallery />
        <Header text="What I've made" />
        <ProjectCardGallery />
        <Header text="What I enjoy" />
        <div className="flex flex-col flex-wrap justify-around">
          <ul className="list-disc list-inside my-0 mx-auto">
            <li>Making other people enjoy life like I do</li>
            <li>Seeing what makes things work</li>
            <li>Breaking old things to bring life to new ones</li>
          </ul>
        </div>
        <Header text="I have a blog" />
        <p>I know, I know! Not a big surprise, but it turns out dumping your thoughts somewhere is a great cathartic experience.
          You can check it out <Link href="https://blog.stormhub.io"><a className="text-blue-500">here</a></Link>.</p>
      </main>
    </>
  );
};

export default AboutMe;