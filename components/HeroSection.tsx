import Link from 'next/link';
import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <header className="h-screen overflow-hidden relative flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-green-400 text-white font-exo p-8">
        <div className="text-lg">
            <h1 className="text-4xl font-semibold"> Hi, I&apos;m Matei.</h1>
            <p className="text-lg py-5">
              I&apos;m a developer.
              {' '}
              <Link href="/Resume.pdf"><a className="italic">Here&apos;s my resume.</a></Link>
            </p>
            <p>
              I&apos;m also pretty good at
            </p>
            <CommandLineBox />
            <p className="block my-3"><Link href="https://github.com/StormFireFox1">
              <a>
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                My GitHub <Link href="https://git.stormhub.io/Storm_FireFox1"><a className="italic">(there&apos;s also my own Git server)</a></Link>
              </a>
            </Link>
            </p>
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