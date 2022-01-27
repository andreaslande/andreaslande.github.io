import React from 'react'
import {motion} from 'framer-motion'

function NavBar() {

    const handleGitHubClick = () => {
        window.open("https://github.com/andreaslande",'_blank');
    }

    return (

        <div className = "absolute top-0 bg-zinc-900 flex flex-col px-2 w-full py-4 pt-6 items-center text-md mx-auto z-30 select-none">
            <motion.div className = "flex flex-row w-full max-w-4xl items-center justify-between " initial = {{opacity:0, y: -4}} animate = {{opacity:1, y:0}} transition = {{delay:1, duration:0.5}} >
                <div className = "flex flex-row mx-5">
                    <p className = "text-white font-semibold"> </p>
                </div>
                <div className = "flex flex-row ml-5 text-gray-400">
                    <button className = "mx-4 hover:text-white transition font-semibold" onClick = {handleGitHubClick}>GitHub</button>
                </div>
            </motion.div>
        </div>
    )
}

export default NavBar
