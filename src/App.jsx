import './App.css'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Social from './Components/Social'
import Projects from './Components/Projects'

export default function App() {
  return (
    <main>
        <Navbar />
        <Content />
        <Projects />
        <Social />
    </main>

  );
}