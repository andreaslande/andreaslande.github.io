import './app.css'
import AboutMe from './Components/AboutMe'
import NavBar from './Components/NavBar';
import UiOproject from './Components/UiOproject';
import WhatIsNeuralComputation from './Components/WhatIsNeuralComputation';
import ProjectDivider from './Components/ProjectDivider';
import UiTproject from './Components/UiTproject';
import NTNUproject from './Components/NTNUproject';
import stars from './media/stars.svg'
import { motion } from 'framer-motion';
import CV from './Components/CV';

function App() {
  return (  

    <div className = "w-full bg-zinc-900">

          <NavBar/>

        <div className = "flex flex-col h-full items-center pb-96 px-8 sm:px-5 z-10 relative">
          
          {/* Star background */}
          <img className = "absolute top-0 z-0" src = {stars}></img>
          <img className = "absolute bottom-0 z-0" src = {stars}></img>

          <AboutMe/>        

          <motion.div initial = {{opacity:0}} animate = {{opacity:1}} transition = {{delay:0.2, duration:0.1}}
          className = "flex flex-col items-center">

            <WhatIsNeuralComputation/>

            <UiOproject/>

            <ProjectDivider/>

            <UiTproject/>

            <ProjectDivider/>

            <NTNUproject/>
            
            <ProjectDivider/>

          </motion.div>

        </div>

        
    
    </div>

  );
}

export default App;
