import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert'
import { TopNavBar } from './component/navbar/Navbar';
import {TopHero} from './component/hero/Hero';
import {TopSkill} from './component/skill/Skill';
import {TopProject} from './component/project/Project';
function App() {
  return (
   <div>
 <TopNavBar />
 <TopHero />
 <TopSkill />
<TopProject />
   </div>
  
  );
}

export default App;
