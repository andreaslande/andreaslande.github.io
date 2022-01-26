import React from 'react'
import {motion} from 'framer-motion'


function AnimatedHello() {

    const startDelay = 2;
    const typeDelay = 0.15;

    var sentence = "Hei!:Jeg:er:Andreas."

    // Replace all whitespace with ,
    //sentence = sentence.replace(/[ ,]+/g, "  ")
    var splittedSentence = sentence.split("");    

    const textVariants = {
        visible: i => ({
          display: 'block',
          transition: {
            delay: startDelay + i * typeDelay + (Math.random()*0.1),
            duration:0
          },
        }),
        hidden: { display: 'none' },
      }


    return( 
        <div className = "flex flex-row text-4xl font-bold text-zinc-50">
        {splittedSentence.map((item,i) => (
            
            <div className = "flex flex-row relative px-0">
                {item == ":" ? 
                <motion.p
                className = "opacity-0 px-0"
                custom = {i}
                initial = {{display: 'none'}}
                animate = "visible"
                variants = {textVariants}>
                    {item}
                </motion.p>
                : 
                <motion.p
                    className = ""
                    custom = {i}
                    initial = {{display: 'none'}}
                    animate = "visible"
                    variants = {textVariants}>
                        {item}
                </motion.p>
                }
            
            </div>
            ))
            }


            {/* Early blinker */}
            <motion.p
                className = "animate-blink text-red-600"
                initial = {{display: 'block'}}
                animate = {{display: 'none'}}
                transition = {{delay:startDelay+0.02, duration:0}}
            >|</motion.p>

            {/* Moving line */}
            <motion.div
                initial = {{display:'block'}}
                animate = {{display:'none'}}
                transition={{delay:startDelay+2.8,duration:0}}>
                <motion.p
                    className = "text-red-600"
                    initial = {{display: 'none'}}
                    animate = {{display: 'block'}}
                    transition = {{delay:startDelay, duration:0}}
                >|</motion.p>
            </motion.div>

            {/* Late blinker */}
            <motion.p
                className = "animate-blink text-red-600"
                initial = {{display: 'none'}}
                animate = {{display: 'block'}}
                transition = {{delay:startDelay+2.8, duration:0}}
            >|</motion.p>
            {/* <p className = "animate-blink text-red-600">|</p> */}
        </div>
        )
    
        }

export default AnimatedHello