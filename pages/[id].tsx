import { supabase } from '../utils/supabase';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/react';

const LessonDetails = ({ lesson }) => {
  return (
    <Layout>
      <Head>
        <title>{lesson.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <h1 className="text-6xl font-bold">{lesson.title}</h1>
        <p className="mt-3 text-2xl">{lesson.description}</p>
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
