import Head from 'next/head';
import NextLink from 'next/link';
import { FC } from 'react';
import { Box, Heading, Text, Link, Container } from '@chakra-ui/react';
import { useUser } from '../contex/user';

import { supabase } from '../utils/supabase';
import Layout from '../components/Layout';

interface Props {
  lessons?: any[];
}

const Home: FC<Props> = ({ lessons }) => {
  const { user } = useUser();
  console.log('user', user);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="lg">
        <Box>
          <Heading>Build on Block</Heading>
          <Text>Learn to build crypto projects fast</Text>
        </Box>
      </Container>

      {lessons.map((lesson) => (
        <Box key={lesson.id}>
          <NextLink href={`/${lesson.id}`} passHref>
            <Link>{lesson.title}</Link>
          </NextLink>
        </Box>
      ))}
    </Layout>
  );
};

type Lesson = {
  id: string;
  title?: string;
  description?: string;
};

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from<Lesson>('lesson').select('*');
  return {
    props: {
      lessons,
    },
  };
};

export default Home;
