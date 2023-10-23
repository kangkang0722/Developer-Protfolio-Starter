import React, { useRef } from 'react'
import {  motion, spring, useScroll } from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:spring}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium font-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
   );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div
style={{scaleY: scrollYProgress}}
className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
md:w-[2px] md:left-[30px] xs:left-[20px]
'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
        <Details 
            type="Bachelor Of Arts In Chinese Language And Literature"
            time="2012-2016"
            place="Renmin University of China"
            info="Relevant courses included language and literature, such as Chinese literary theory, linguistic theory, classical Chinese literature, modern Chinese literature, as well as Western literary theory and literary history."
        />
        <Details 
            type="Research Students studying Studies of Culture and Representation"
            time="2016-2018"
            place="The University of Tokyo"
            info="The intellectual, literary and political histories in the East Asian Sinitic sphere (China and Japan) from the early modern period onward;The late Qing Chinese intellectual history from both a global and, more specifically, an East Asian perspective；The history of historiography in modern China and Japan；Sino-Japanese exchanges；Comparative literature, and Critical Theory."
        />
            </ul>
        </div>
    </div>
  )
}

export default Education