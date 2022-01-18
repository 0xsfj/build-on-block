import { supabase } from '../utils/supabase';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Video from 'react-player';

const LessonDetails = ({ lesson }) => {
  const [videoUrl, setVideoUrl] = useState();
  console.log(videoUrl);

  const getPremiumContent = async () => {
    const { data } = await supabase.from('premium_content').select('video_url').eq('id', lesson.id).single();
    setVideoUrl(data?.video_url);
  };

  useEffect(() => {
    getPremiumContent();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{lesson.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <h1 className="text-6xl font-bold">{lesson.title}</h1>
        <p className="mt-3 text-2xl">{lesson.description}</p>
        <p className="mt-3">{videoUrl}</p>
        <Video url={videoUrl} controls={true} />
      </Box>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { data: lessons } = await supabase.from('lesson').select('id');
  const paths =
    lessons &&
    lessons.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: lesson } = await supabase.from('lesson').select('*').eq('id', id).single();
  return {
    props: {
      lesson,
    },
  };
};

export default LessonDetails;
