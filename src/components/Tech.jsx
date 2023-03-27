import React from 'react';
import { styles } from '../styles';
import { BallCanvas } from './canvas';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> What I have learnt </p>
          <h2 className={styles.sectionHeadText}> Skills </h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h3 className='flex justify-center'>{technology.name}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")