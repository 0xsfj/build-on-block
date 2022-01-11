import Head from 'next/head';
import Link from 'next/link';

import { supabase } from '../utils/supabase';

export default function Home({ lessons }) {
  console.log(lessons);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Build on Block</h1>

        <p className="mt-3 text-2xl">Learn to build crypto projects fast</p>
        <div className="w-full max">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="mt-3 max-w-3xl mx-auto my-16 px-2">
              <Link href={`/${lesson.id}`}>
                <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{lesson.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from('lesson').select('*');
  return {
    props: {
      lessons,
    },
  };
};
