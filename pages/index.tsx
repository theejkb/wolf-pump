import type {NextPage} from 'next';
import {MainLayout} from '../components/MainLayout';
import {HeaderMenu} from '../components/HeaderMenu';
import {Hero} from '../components/Hero';
import {HeaderMenuButtons} from '../components/HeaderMenuButtons';
import {About} from '../components/About';
import {Roadmap} from '../components/Roadmap';
import {Team} from '../components/Team';
import {Community} from "../components/Community";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'mint', 'evolve']} />
      </HeaderMenu>
      <Hero />
      <About />
      <Roadmap />
      <Team />
      <Community />
    </MainLayout>
  );
};

export default Home;
