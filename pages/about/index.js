import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Analytic Thinking',
        // icons: [
        //   <FaHtml5 />,
        //   <FaCss3 />,
        //   <FaJs />,
        //   <FaReact />,
        //   <SiNextdotjs />,
        //   <SiFramer />,
        //   <FaWordpress />,
        // ],
      },
      {
        title: 'Leadership and Teamwork',
        // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {title: 'Threat Hunting',},
      {title: 'Risk Management',},
      {title: 'Vulnerability Assessment',},
      {title: 'Incident Handling',},
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Production Team - Hillsong Church',
        stage: '2017 - 2020',
      },
      {
        title: 'Software Developer - UCT GSB',
        stage: '2022 - 2022',
      },
      {
        title: 'Cybersecurity Intern - Younglings Africa',
        stage: '2023 - 2023',
      },
      {
        title: 'Cybersecurity Learning Specialist -  2U',
        stage: '2023 - Present',
      },
    ],
  },
  {
    title: 'Certificates',
    info: [
      {
        title: 'Systems Security Certified Practitioner',
        stage: '10/2023',
      },
      {
        title: 'ISC2 Certified Cybersecurity',
        stage: '03/2023',
      },
      {
        title: 'Threats Management and Governance',
        stage: '04/2023',
      },
      {
        title: 'Endpoint Security',
        stage: '05/2023',
      },
      {
        title: 'GIAC Security',
        stage: '08/2023',
      },
      {
        title: 'Digital Forensics',
        stage: '03/2024',
      },
      {
        title: 'Network Defense',
        stage: '05/2024',
      },

    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Certified Cybersecurity - ISC2',
  //       stage: '2023',
  //     },{
  //       title: 'Software Development - UCT GSB',
  //       stage: '2022',
  //     },
  //     {
  //       title: 'Computer Science Degree - UCT',
  //       stage: '2021',
  //     },
      
  //   ],
  // },
];

// Components

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Motion

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";


const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  

  return (
    <div className="h-full bg-primary/30 py-36 text-center xl:text-left xl:pl-20">
      <Circles />
      {/* Avatar Image */}
      {/* <motion.div 
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="hidden xl:flex absolute bottom-0 -left-[390px]">
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mb-10">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-10">
          <motion.h2
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2">With great  <span className=" text-accent">power</span> comes great <span className=" text-accent">responsibilities</span></motion.h2>
          <motion.p 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I am proactive Junior Cybersecurity Specialist with over 3 years of hands-on experience in cyber attack and defense activities. Adept in security assessments, penetration testing, and risk mitigation, with a proven track record of leading critical security projects. Demonstrates strong leadership and technical skills, eager to apply expertise to enhance organizational security posture and protect critical infrastructure.
          </motion.p>
          {/* counters */}
          <motion.div 
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className=" flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Years of experience</div>
              </div>
              {/* client */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={5} duration={5} />+
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Satisfied clients</div>
              </div>
              {/* projects */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={56} duration={5} />+
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Finished projects</div>
              </div>
              {/* awards */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* information */}
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]
        xl:pl-5">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                key={itemIndex} 
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                cursor-pointer capitalize 
                xl:text-lg relative after:w-8 after:h-[2px]
              after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title} </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className=" font-light mb-2 md:mb-0">{item.title}</div>
                  {/* <div className="hidden md:flex">-</div> */}
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white">{icon}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
