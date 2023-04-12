import type {NextPage} from 'next';
import {MainLayout} from '../components/MainLayout';
import {Hero} from '../components/Hero';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
};

export default Home;
