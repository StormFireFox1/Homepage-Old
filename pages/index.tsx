import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import Link from 'next/link';
import { faCalendar, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import SplashLink from 'components/SplashLink';
import CommandLineBox from 'components/CommandLineBox';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ツ</title>
        <meta name="description" content="A personal webpage. Now in Next.js, because why not." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet" />
      </Head>
      <div className="w-screen h-screen overflow-hidden relative flex justify-center items-center bg-gradient-to-t from-blue-500 to-green-400 text-white font-exo">
        <div className="text-lg">
          <h1 className="text-4xl font-semibold"> Hi, I&apos;m Matei.</h1>
          <p className="text-lg py-5">
            I&apos;m a developer.
            {' '}
            <Link href="Resume.pdf"><a>Here&apos;s my resume.</a></Link>
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
            url="Storm_FireFox1.asc"
            entry="GPG key for the win"
          />
          <SplashLink
            icon={faCalendar}
            url="/calendar"
            entry="Want to meet up? Check the calendar"
          />
        </div>
      </div>
      <div className="w-screen h-24 overflow-hidden relative flex" />
    </div>
  );
}
