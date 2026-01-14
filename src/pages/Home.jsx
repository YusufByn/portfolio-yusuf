import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Workflows from '../components/home/Workflows';
import Profile from '../components/home/Profile';
import Stacks from '../components/home/Stacks';

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <Projects />
      <Workflows />
      <Stacks />
    </main>
  );
}
