import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ inview,index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden" 
      animate={inview ? "show" : "hidden"}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] w-full py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the component enters the viewport
  });
  return (
    <motion.section 
            ref={ref}
             initial="hidden"
             whileInView="show"
             viewport={{once:true,amount:0.25}}
             className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
             id="about"
            >
        <motion.div animate={inView ? "show" : "hidden"} variants={textVariant()} className="w-full">
        <p className={`${styles.sectionSubText}`}>A Brief Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Dynamic and accomplished, I am an individual driven by a passion for software development and a relentless pursuit of excellence.
          With a solid foundation in Data Structures and Algorithms, I have successfully tackled
          over 600 <a className="codingprofiles" href="https://leetcode.com/varunsangai11/" target='_blank'>LeetCode</a> problems and earned <a href="https://www.codechef.com/users/varunsangai" className='codingprofiles' target="_blank">CodeChef</a> 3-star rating. Currently studying at the esteemed University of Delhi, I have consistently excelled academically, securing the third position in my first year.
          As a full stack developer, I possess expertise in integrating diverse frameworks, languages, and databases. Demonstrating my competitive coding prowess, I proudly achieved third place in two coding competitions.
          With an insatiable thirst for knowledge and growth, I keep pace with the latest industry trends. Join me on this extraordinary journey as I make a significant impact in the world of software development.
        </motion.p>
      </div>
      <motion.div className="techiknow w-full" initial="hidden" animate={inView ? "show" : "hidden"} variants={textVariant()}>
        <p className={styles.sectionSubText}>Techs I know So Far</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="mt-20 w-full flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard inview={inView} key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default About;