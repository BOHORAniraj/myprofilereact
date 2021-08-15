import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert'
import { TopNavBar } from './component/navbar/Navbar';
import {TopHero} from './component/hero/Hero';
import {TopSkill} from './component/skill/Skill';
import {TopProject} from './component/project/Project';
import {TopAbout} from './component/about/About'
import {TopFooter} from './component/footer/Footer'
function App() {
  return (
   <div>
 <TopNavBar />
 <TopHero />
 <TopSkill />
<TopProject />
<TopAbout />
<TopFooter />
   </div>
  
  );
}

export default App;
