import Head from 'next/head';
import { useRef } from 'react';

import AboutMe from 'components/AboutMe';
import HeroSection from 'components/HeroSection';

export default function Home() {
  const aboutMeRef = useRef(null);
  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
  return (
    <>
      <Head>
        <title>ツ</title>
      </Head>
      <HeroSection scrollFunc={scrollToAboutMe}/>
      <AboutMe aboutMeRef={aboutMeRef}/>
    </>
  );
}
