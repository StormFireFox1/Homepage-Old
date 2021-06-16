import Head from 'next/head';
import Link from 'next/link';
import { useRef } from 'react';

import Header from 'components/Header';

export default function Calendar() {

  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <div className="w-screen max-w-4xl min-h-screen mx-auto my-auto p-8 pb-24 font-exo">
        <Header text="This is my calendar." />
        <p>If you want to schedule a meet-up or video chat, check this calendar for free times and
            <Link href="mailto:matei@gard.us"><a className="text-blue-500"> hit me up on email </a></Link>
            about whatever it is you want to do.</p>
            <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=N2lrdm9saXFia2I1YTk4NGxnMTdzYXQyM3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmE1a2gwcjc0OTk4YXBhbnV1M3ZrOGlvdGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dWZ0YW0yamJoZDhqb2Fnamd1ZDVyZXZxM2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%2333B679&amp;color=%238E24AA&amp;color=%23AD1457&amp;title=Personal%20Calendar&amp;mode=WEEK" className="mx-auto pt-10" style={{ borderWidth: 0, width: 800, height: 600}} frameBorder="0" scrolling="no"></iframe>
      </div>
    </>
  );
}
