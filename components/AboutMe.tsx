import { DateTime } from "luxon";
import { Ref } from "react";

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
  const age = birthday.until(DateTime.now()).length('years').toFixed(0);
  return (
    <>
      <main ref={aboutMeRef} className="w-screen max-w-4xl min-h-screen h-24 mx-auto my-auto pt-8 max-h-96 font-exo">
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
      </main>
    </>
  );
};

export default AboutMe;