import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        More than 15 years working in different large companies with roles like Application Manager, 
        Release Manager, Developer and lastly as a Devops Engineer and Cloud Engineer, using operative 
        systems like Windows, Linux, Unix, with different programming languages like JavaScript, Python, Java, C#,
        Bash Scripting, and with experience applying Devops pipelines using Azure Devops and AWS pipelines, all this with
        different tools like Travis CI, Jenkins, Git, GitHub, GitHub Actions, Ansible and Terraform and with 
        Cloud Techonolgies like AWS and Azure, I used conteiner technologies like Docker and Kubernetes.
        I have learnings about web development using React, React JS, NodeJs, Express, postgres, mostly for the creation of
        monitoring dashboards. 
        And As a hobbies I have skills in Augmented reallity development using Unity as a engine.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper (About, "about")