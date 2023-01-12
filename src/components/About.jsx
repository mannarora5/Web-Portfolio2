import React from 'react'

const about = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'> I am currently a penultimate student studying a Bachelor of Computer Science and Finance  at the University of New South Wales. 
                After delving in some computer science courses I discovered the power of computers
                 and furthermore developed a love to code and be part of projects. 
                I have completed a wide range of courses offered in the computer 
                science program and am aiming to major in Artificial Intelligence.</p>

             <br />

             <p className='text-xl'> As part of my degree, I have worked in various coding projects in a team environment. As an individual who loves to work with others,
                 I thouroughly enjoy the group-work environment alongside the 
                challenges that come with it. I love to take self initiative through my extra-cirrcular involvements and my own personal projects. 
                I am always learning and feeding myself with new valuable skills and information. Overall, I want to be part of a strong technological 
                movement that helps the world and the peopple in it.</p>   
        </div>
    </div>
  )
}

export default about