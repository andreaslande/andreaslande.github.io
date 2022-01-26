import React from 'react'

function StarBackground() {


    // Get screen height and weight
    // A star can be rendered on any point that is from page top to 

    const max_height = 1000;
    const max_width = 1000;
    const num_stars = 5;

    var x_position = 0;
    var y_position = 0;
    var cn = [];
    for(let i = 0; i<num_stars; i++){
        x_position = Math.floor(Math.random()*max_width)
        y_position = Math.floor(Math.random()*max_height)
        
        cn.push("absolute text-4xl text-white top-[" + y_position + "px] left-[" + x_position + "px]")
    }

    return (
        <div className ="relative left-0 z-0">            

            {cn.map((c,ind) => (
                console.log(c)
            ))}            

            
        </div>
    )
}

export default StarBackground
