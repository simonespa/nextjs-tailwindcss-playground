import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js &amp; TailwindCSS Playground</title>
        <meta
          name="description"
          content="A playground for TailwindCSS components in Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-10">
        <div className="bg-sky-50 aspect-square"></div>
        <div className="bg-sky-100 aspect-square"></div>
        <div className="bg-sky-200 aspect-square"></div>
        <div className="bg-sky-300 aspect-square"></div>
        <div className="bg-sky-400 aspect-square"></div>
        <div className="bg-sky-500 aspect-square"></div>
        <div className="bg-sky-600 aspect-square"></div>
        <div className="bg-sky-700 aspect-square"></div>
        <div className="bg-sky-800 aspect-square"></div>
        <div className="bg-sky-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10">
        <div className="bg-blue-50 aspect-square"></div>
        <div className="bg-blue-100 aspect-square"></div>
        <div className="bg-blue-200 aspect-square"></div>
        <div className="bg-blue-300 aspect-square"></div>
        <div className="bg-blue-400 aspect-square"></div>
        <div className="bg-blue-500 aspect-square"></div>
        <div className="bg-blue-600 aspect-square"></div>
        <div className="bg-blue-700 aspect-square"></div>
        <div className="bg-blue-800 aspect-square"></div>
        <div className="bg-blue-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10">
        <div className="bg-indigo-50 aspect-square"></div>
        <div className="bg-indigo-100 aspect-square"></div>
        <div className="bg-indigo-200 aspect-square"></div>
        <div className="bg-indigo-300 aspect-square"></div>
        <div className="bg-indigo-400 aspect-square"></div>
        <div className="bg-indigo-500 aspect-square"></div>
        <div className="bg-indigo-600 aspect-square"></div>
        <div className="bg-indigo-700 aspect-square"></div>
        <div className="bg-indigo-800 aspect-square"></div>
        <div className="bg-indigo-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10">
        <div className="bg-violet-50 aspect-square"></div>
        <div className="bg-violet-100 aspect-square"></div>
        <div className="bg-violet-200 aspect-square"></div>
        <div className="bg-violet-300 aspect-square"></div>
        <div className="bg-violet-400 aspect-square"></div>
        <div className="bg-violet-500 aspect-square"></div>
        <div className="bg-violet-600 aspect-square"></div>
        <div className="bg-violet-700 aspect-square"></div>
        <div className="bg-violet-800 aspect-square"></div>
        <div className="bg-violet-900 aspect-square"></div>
      </div>
    </>
  );
};

export default Home;
