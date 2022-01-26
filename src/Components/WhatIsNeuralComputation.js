import React from "react";
import { useEffect } from "react";
import Neuron from "../media/neuron.svg";
import ProjectDivider from "./ProjectDivider";
import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"


function WhatIsNeuralComputation() {

  const {ref, inView} = useInView({threshold:0.9});
  const neuroIntroCardAnimation = useAnimation();

  useEffect(() => {
    if(inView){
      neuroIntroCardAnimation.start({
        opacity: 1,
        y:-14
      })
    }
    if(!inView){
       neuroIntroCardAnimation.start({
        opacity:0,
        y:0
      }) 
    }

  },[inView])

  return (
    <div className="flex flex-col w-full max-w-4xl items-center">
      <div className="flex flex-col items-center w-full mt-0 sm:mt-20 2xl:mt-72 relative  max-w-4xl">

        <motion.div className = "w-full" initial = {{opacity:0, y:10}} animate = {{opacity:1, y:0}} transition = {{delay:1, duration:2}} className = "flex flex-row mx-auto justify-center max-w-4xl w-full  ">
          <img className = "w-full" src={Neuron} alt = "Bilde av et nevron"></img>
        </motion.div>

        {/* Big screens - Hva er nevrale beregninger */}
         <div ref = {ref} className = "hidden sm:flex flex-col absolute sm:left-20 top-60 w-full">
           <motion.div initial = {{opacity:0}} animate = {neuroIntroCardAnimation} className ="w-full flex" transition = {{delay:0, duration:0.4}}  className = "bg-zinc-800 bg-opacity-90 p-4 rounded-xl self-start">  
              <p className = "text-zinc-100 font-bold">
                En rask innføring i nevrovitenskap
              </p>
              <p className = "text-zinc-200 text-sm max-w-sm">
                Nevroner er celler i hjernen som fungerer som små
                beregningsmaskiner. De mottar elektriske impulser fra andre
                nerveceller, koblet sammen i store nettverk. Ut fra
                cellekroppen (også kalt soma) sprer det seg tynne tråder
                som kalles dendritter, hvor nevronet kan motta input fra andre celler i
                nettverket. Basert på disse inputene gjør nevronet en beregning.
                Det kan være så enkelt som "hvis jeg mottar input på 400 av disse
                3000 inputene, så skal jeg sende et signal videre". Dette signales sendes ut fra
                nevronet i det som kalles et akson, som sprer seg videre utover i hjernen og treffer 
                tusenvis av andre nerveceller.
              </p>
          </motion.div>

          <motion.div initial = {{opacity:0}} animate = {neuroIntroCardAnimation} className ="w-full flex flex-col" transition = {{delay:0.4, duration:0.4}} className = "bg-zinc-800 bg-opacity-90 p-4 rounded-xl mt-20 self-end">
            <p className="text-zinc-100 font-bold">Nevrale beregninger</p>
            <p className="text-zinc-200 text-sm max-w-xs">
              Jeg har i hovedsak studert hvordan nerveceller responderer på
              forskjellige sanseinntrykk og forsøkt å forstå hvordan de kan
              gjøre disse beregningen som en populasjon.
            </p>
          </motion.div>

        </div> 

        {/* Akson */}
        {/* <div className="relative sm:absolute sm:right-80 bottom-32 sm:bottom-96 sm:pb-40">
          <p className=" text-sm text-red-600">
            Akson
          </p>
        </div> */}

        {/* Small screens - Hva er nevrale beregninger */}
        <div className="flex sm:hidden flex-col w-full">
          <div className="bg-zinc-800 bg-opacity-90 p-4 rounded-xl self-start">
            <p className="text-zinc-100 font-bold">
              En rask innføring i nevrovitenskap
            </p>
            <p className="text-zinc-200 text-sm max-w-sm text-justify">
              Nevroner er celler i hjernen som fungerer som små
              datamaskiner. De mottar elektriske impulser fra andre
              nerveceller som koblet sammen i store nettverk. Ut fra
              cellekroppen (også kalt soma) sprer det seg tynne tråder
              (dendritter) hvor nevronet kan motta input fra andre celler i
              nettverket. Basert på disse inputene gjør nevronet en beregning.
              Det kan være så enkelt som "hvis jeg mottar input på 400 av disse
              3000 inputene, så skal jeg sende et signal videre". Denne
              avgjørelsen tas kort forklart i soma. Derifra sendes den
              elektriske impulsen langs en forgrening som strekker seg utover i
              hjernen og treffer andre nevroner (output trådene kalles aksoner).
            </p>
          </div>

          <div className="bg-zinc-800 bg-opacity-90 p-4 rounded-xl mt-5 sm:mt-20 self-end">
            <p className="text-zinc-100 font-bold">Nevrale beregninger</p>
            <p className="text-zinc-200 text-sm max-w-xs text-justify">
              Jeg har i hovedsak studert hvordan nerveceller responderer på
              forskjellige sanseinntrykk og forsøkt å forstå hvordan de kan
              gjøre disse beregningen.
            </p>
          </div>
        </div>

        
        <div className = "block sm:hidden">
            <ProjectDivider/>
        </div>

        {/* En visuell guide */}
        {/* <div class="absolute bottom-28 flex flex-col items-center">
          <p className="text-white font-bold text-4xl sm:text-6xl mr-5 sm:mr-20">
            En visuell guide
          </p>
          <p className="text-white font-bold text-4xl sm:text-6xl ml-10 sm:ml-20">
            til min forskning
          </p>
        </div> */}

        <div class="flex flex-col items-center mt-4 mb-5">
          <p className="text-white font-bold text-4xl sm:text-7xl sm:mr-5 sm:mr-20">
            En visuell guide
          </p>
          <p className="text-white font-bold text-4xl sm:text-7xl sm:ml-5 sm:ml-10 sm:ml-20">
            til min forskning
          </p>
        </div> 
        <div className="h-32 mb-6 border-r-2 border-axon ml-0"></div>
      </div>

{/*       <div className="h-72 border-r-2 border-red-600 ml-0"></div>
 */}    </div>
  );
}

export default WhatIsNeuralComputation;
