import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
    return (
        <>
        <Head>
          <title>Oh, buddy.</title>
        </Head>
        <div className="w-screen max-w-4xl min-h-screen mx-auto my-auto p-8 pb-24 font-exo">
        <h1 className="flex justify-center font-bold text-3xl mt-24 mb-4">
            Yo, <span className="mx-2 text-red-500">wrong</span>page!
        </h1>
        <p className="text-center">You might want to go <Link href="/"><a className="text-blue-500">back.</a></Link></p>
        </div>
      </>
    );
}