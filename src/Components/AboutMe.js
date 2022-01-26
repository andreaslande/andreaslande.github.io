import React from 'react'
import {motion} from 'framer-motion'

function AboutMe() {

  const animationDuration = 2;
  const textDelay = 0.5; // seconds
  const textDelayIntervals = 0.2; 
  const springStiffness = 80;

    return (
        <div className = "flex flex-col items-center mt-20 sm:mt-40 z-20 ">
          
          <div className = "flex flex-col sm:flex-row items-center py-14 w-full">

            {/* About me */}
            <div className="flex flex-col mx-4 sm:mx-10 items-start max-w-3xl text-white  text-md sm:text-lg"> 


              {/* Big screen line */}
              <div className = "relative mb-2 hidden sm:block">
            
                <motion.div initial = {{y:0, opacity:0}} animate = {{y:0, opacity:1}} transition = {{delay:0, duration:animationDuration, type:"spring", stiffness:springStiffness}}>
                  <p className = "bg-gradient-to-r from-axon via-indigo-600 to-indigo-600 text-transparent bg-clip-text text-5xl font-extrabold">_________________</p>
                </motion.div>  
            
                <motion.div intial = {{display: 'block'}} animate ={{display:'none'}} transition = {{delay:1.01}}>
                  <motion.p initial = {{x:0, opacity:1}} animate = {{x:440}} transition = {{delay:0, duration:1, type:"spring", stiffness:50}}
                    className = "text-zinc-900 bg-zinc-900 text-5xl  font-extrabold absolute top-0">________________
                  </motion.p>
                </motion.div>

                <motion.p initial = {{display: 'none', x:440}} animate ={{display:'block', x:440}} transition = {{delay:1, duration:0.1}} 
                    className = "text-zinc-900 bg-zinc-900 text-5xl font-extrabold absolute top-0">__
                </motion.p>
                
              </div>

              {/* Small screen line */}
              <div className = "relative mb-2 sm:hidden">
                <motion.div initial = {{y:8, opacity:0}} animate = {{y:0, opacity:1}} transition = {{delay:0, duration:0.5}}>
                  <p className="bg-gradient-to-r from-axon via-indigo-600 to-indigo-600 text-transparent bg-clip-text text-2xl font-extrabold">_____________</p>
                </motion.div>  

              </div>


              <motion.div initial = {{y:5, opacity:0}} animate = {{y:0, opacity:1}} transition = {{delay:0.5, duration:animationDuration, type:"spring", stiffness:springStiffness}}>
                <p className="font-bold text-4xl md:text-5xl">Hei! Jeg er Andreas.</p>
              </motion.div> 

              {/* <AnimatedHello/> */}
              <motion.p initial = {{y:4, opacity:0}} animate = {{y:0, opacity:1}}  transition = {{delay:0.4, duration:animationDuration, type:"spring", stiffness:springStiffness}} className = "max-w-3xl sm:text-justify pt-2">
                  Jeg er en 32 år gammel hjerneforsker, teknologientusiast og hobby-botaniker med lidenskapelig interesse for alt jeg ikke kan forstå.
                  De siste 8 årene har jeg forsøkt å finne ut hvordan hjernen fungerer. Det har jeg gjort ved å bruke 'state-of-the-art' teknikker for å lytte til hundrevis av nerveceller i biologiske nevrale nettverk.
              </motion.p>
              
              <motion.div className = "items-center mt-5 " initial = {{y:2, opacity:0}} animate = {{y:0, opacity:1}}  transition = {{delay:textDelay, duration:0.2, type:"spring", stiffness:springStiffness}}>
                  Jeg har fått
                  <solid className="font-medium text-indigo-300 ml-1.5">mus til å løpe i en virtuell virkelighet</solid>.
              </motion.div>

              <motion.div className = "items-center" initial = {{y:2, opacity:0}} animate = {{y:0, opacity:1}}  transition = {{delay:textDelay+textDelayIntervals, duration:0.2, type:"spring", stiffness:springStiffness}}>
                  Jeg har trent 
                  <solid className=" font-medium text-indigo-300 ml-1.5">rotter til å navigere labyrinter</solid>.
              </motion.div>

              <motion.div className = "items-center sm:text-justify" initial = {{y:2, opacity:0}} animate = {{y:0, opacity:1}}  transition = {{delay:textDelay+(textDelayIntervals*2), duration:0.2, type:"spring", stiffness:springStiffness}}>
                Jeg har studert<solid className=" font-medium text-indigo-300 ml-1.5">nervebaner i luktesystemet til nattsvermere</solid>.
              </motion.div>


            </div> 
          </div>
        </div>
    )
}

export default AboutMe
