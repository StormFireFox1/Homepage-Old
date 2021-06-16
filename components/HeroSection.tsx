import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { ArrowDownIcon } from '@heroicons/react/solid';

import SplashLink from 'components/SplashLink';
import CommandLineBox from 'components/CommandLineBox';
import { MouseEventHandler } from 'react';

interface HeroSectionProps {
    scrollFunc: MouseEventHandler<SVGSVGElement>;
}

const HeroSection = (props: HeroSectionProps) => {
    const { scrollFunc } = props;
    return (
    <header className="w-screen h-screen overflow-hidden relative flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-green-400 text-white font-exo p-8">
        <div className="text-lg">
            <h1 className="text-4xl font-semibold"> Hi, I&apos;m Matei.</h1>
            <p className="text-lg py-5">
              I&apos;m a developer.
              {' '}
              <Link href="/Resume.pdf"><a>Here&apos;s my resume.</a></Link>
            </p>
            <p>
              I&apos;m also pretty good at
              {' '}
              <CommandLineBox />
            </p>
            <SplashLink
              icon={faGithub}
              url="https://github.com/StormFireFox1"
              entry="My GitHub (there's also my own Git server)"
            />
            <SplashLink
              icon={faEnvelope}
              url="mailto:matei@gard.us"
              entry="Hit me up on e-mail"
            />
            <SplashLink
              icon={faKey}
              url="/Storm_FireFox1.asc"
              entry="GPG key for the win"
            />
            <SplashLink
              icon={faCalendar}
              url="/calendar"
              entry="Want to meet up? Check the calendar"
            />
        </div>
        <ArrowDownIcon className="animate-bounce w-6 h-6 relative mt-4 mb-0 cursor-pointer" onClick={scrollFunc}/>
    </header>
    )
};

export default HeroSection;