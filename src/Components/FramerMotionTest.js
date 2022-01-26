import React from 'react'
import { motion } from 'framer-motion'

function FramerMotionTest(){

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    return(

        <motion.div 
            initial =  "hidden"
            animate = "visible"
            variants = {variants}
            transition = {{delay: 1,
            duration: 2}}>
            <div className = "flex flex-col items-center">
                <p className = "text-lg font-bold text-white">My site!</p>
            </div>
        </motion.div>
    )
}

export default FramerMotionTest

