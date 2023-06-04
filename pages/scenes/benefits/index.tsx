import React from 'react'
import {  ClassType, FeedbackType, SelectedPage } from '../../../shared/types';
import { motion } from 'framer-motion';
import WelcomeGraphic from "../../../public/Welcome.svg"
import Image from 'next/image'
import FeedbackCard from "./FeedbackCard";
import image1 from "../../../public/image1.png";
import image2 from "../../../public/image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
import image5 from "../../../public/image5.png";
import image6 from "../../../public/image6.png";
import image7 from "../../../public/image7.png";
import Conditions from './Conditions';


const feedback: Array<FeedbackType>= [
    {
      id: "feedback-1",
      content:
        "I came to see Natalia because I was struggling with frequent urination, as well as urinary retention. Although I was incredibly nervous to go to my first session, Natalia immediately put me at ease. She has such a warm and reassuring demeanor, and she explains things with such detail and accuracy!",
      name: "A.S",
      title: "Female, Age: 47",
    },
    {
      id: "feedback-2",
      content:
        "I didn't know that there are ways to strengthen and stretch your pelvic floor so that you don't have to resort to surgery... My advice for all new moms, soon-to-be moms, and moms who have been moms for awhile -- go to pelvic floor PT! And if you want to meet with one of the best therapists around, go see Natalia!",
      name: "Meaghan",
      title: "Female, Age: 38",
    },
    {
      id: "feedback-3",
      content:
        "Without Natalia, I'd be continually living in pain, with embarrassment and missing out on some of the most basics parts of my life. I cannot praise the professionalism and compassion that Natalia brings to her work enough. She gave me my life back.",
      name: "Anonymous",
      title: "Female, Age: 42",
    },
    {
      id: "feedback-4",
      content:
        "I appreciate the approachability and transparency you exhibited with such a delicate issue and how much care and work you put into the sessions. I am truly grateful for your help. I also enjoyed our conversations.",
      name: "S.D",
      title: "Male, Age: 52",
    },
    {
      id: "feedback-5",
      content:
        "I had been having sciatica in my right leg that was all but unbearable.(Couldn’t remain sitting for any length of time. Got used to doing lots of tasks standing up because it was the only option.) Natalia introduced me to some movements that made a huge difference, and life became normal again. Her caring for her patients is genuine... there is no substitute for a supremely well-qualified PT who knows you and whom you have developed a therapeutic relationship with.",
      name: "Ted",
      title: "Male, Age: 73",
    },
    {
      id: "feedback-6",
      content:
        "I met Natalia when I was roughly 10 weeks pregnant to be proactive in educating myself on what to expect but also understand how I could modify as I progressed through pregnancy. She is so approachable, friendly, kind and her personality immediately put me at ease in a very unfamiliar world as a first-time mom.",
      name: "Luciana",
      title: "Female, Age: 31",
    },
    {
      id: "feedback-7",
      content:
        "I feel so lucky to have gotten the chance to work with and learn from Natalia. Her knowledge and education was so valuable to me. I really feel like I have an increased understanding of how my body, specifically my pelvic floor and core, work and support my health. I additionally learned about healthy voiding habits. I really appreciated Natalia's wealth of knowledge because these are often taboo topics and her ability to be calm, compassionate, empathic, and friendly during our sessions made it all the more enjoyable!",
      name: "Mandi",
      title: "Female, Age: 31",
    },
    {
      id: "feedback-8",
      content:
        "Natalia not only helped cure my cystocele through several months of treatment, but she made me feel so incredibly comfortable during each session. While pelvic floor PT can be intense, I always put complete trust in Natalia and I knew she would always be honest and upfront with me about potential outcomes after treatment. A postpartum body can be a difficult thing to adjust to and I am beyond grateful that I started my PT journey with Natalia during pregnancy so that we had a relationship built postpartum when I needed her most.",
      name: "Anna",
      title: "Female, Age: 36",
    },
    {
      id: "feedback-9",
      content:
        "I learned so much about pelvic floor function, the effects of labor and delivery and truly and how important it is to have a physical therapist like Natalia to trust and work with during these difficult phases. As a fitness instructor, I see women all too often dealing with the effects of postpartum (diastasis, prolapse, leaking, etc.) without any knowledge of an industry professional who could help them. I would send them all to Natalia!! She is kind, thoughtful, smart and so talented.",
      name: "Lyndsey",
      title: "Female, Age: 39",
    },
  ];

  const conditions: Array<ClassType> = [
    {
      name: "Pregnancy & Postpartum",
      image: image1.src,
    },
    {
      name: "Bladder Health",
      image: image5.src,
    },
    {
      name: "Female Pelvic Pain",
      image: image3.src,
    },
    {
      name: "Bowel Health",
      image: image6.src,
    },
    {
      name: "Sexual Health",
      image: image2.src,
    },
    {
      name: "Orthopedic Conditions",
      image: image7.src,
    },
    {
      name: "Men's Health",
      image: image4.src,
    },
  ];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {

  return (
    <section
     className='bg-[#ffffff] mx-auto min-h-full w-full py-10 md:py-20'
    >
        <motion.div 
        >
          {/* Image and Main Header Here */}
          <motion.div 
          className="mx-auto md:flex w-5/6 items-center justify-center md:h-5/6 md:mb-[50px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
          hidden: { opacity:0, x:-50},
          visible: { opacity: 1, x: 0},
          }}
          >
              {/* Main Header Here */}
              <div className="z-10 md:mt-36 mt-[50px] md:basis-5/6">
                  {/* Headings Here */}
                  <motion.div 
                  className="md:mt-[-100px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  variants={{
                      hidden: { opacity:0, x:-50},
                      visible: { opacity: 1, x: 0},
                  }}
                  >
                      <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">Services</h2>
                      <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                      Peace Pelvic Health is a specialty physical therapy clinic with 10+ years of experience serving northwest Chicagoland and suburbs. Holistic one-on-one treatments with a pelvic floor and orthopedic specialist, encompassing mind and body when working towards solutions for pain and physical dysfunction.                      </p>
                      <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                      Founded by lead physical therapist Natalia Avelar, DPT, PRPC, Peace Pelvic Health strives to help you find your Peace so that you can feel your best and let the rest fall into place.                      </p>
                  </motion.div>
                </div>
                {/* Image Here */}
              <div className="flex basis-3/5 justify-center mb-[50px] md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[170px]">
                <Image src={WelcomeGraphic} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
              </div>
            </motion.div>

            <section id="Projects" className="w-full bg-[#F9FBFD] py-20 md:py-20">
              <motion.div
              className="relative"
              >
                <motion.div
                className="mx-auto w-5/6 md:mt-[50px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity:0, x:-90},
                visible: { opacity: 1, x: 0},
                }}
                >
                  <h2 className="text-4xl tracking-tight text-[#dea54b] md:text-4xl lg:text-6xl lg:mt-10">Pricing</h2>
                  <p className="text-[#f3dfc1] font-thin mb-10 md:mb-[-30px] my-10 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[60px]">
                  We are dedicated to helping both women and men move toward wellness. Pelvic floor physical therapy can provide a solution for pain and dysfunction associated with these conditions.</p>
                  
                </motion.div>

                {/* Condition Cards Here */}
                <motion.div 
                className="w-full text-center mx-[40px] md:mx-[80px] md:mt-[80px]"
                initial="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0, duration: .5 }}
                variants={{
                  hidden: { opacity: 0, x: -90 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
                  <ul className="mb-[-80px]">
                    {conditions.map((item: ClassType, index) => (
                      <Conditions 
                      key={`${item.name}-${index}`}
                      name={item.name}
                      image={item.image}
                      />
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </section> 

            {/* BENEFITS GRAPHICS AND DESCRIPTION HERE */}
            <motion.div 
             className='mt-[100px] mx-8 items-center justify-between gap-20 md:mt-[100px] md:flex'
             initial="visible"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
              hidden: { opacity: 0, x: 90 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                {/* DESCRIPTION HERE */}
                <div className='mb-[60px] md:mb-[60px] lg:mb-16 md:mx-[75px] lg:mx-[135px]'>
                    {/* TITLE HERE */}
                    <div className='relative'>
                        <div className='mt-[100px] md:mt-[20px] lg:mb-[80px]'>
                            <motion.div
                             className='text-left'
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ delay: 0.5, duration: 0.5 }}
                             variants={{
                               hidden: { opacity: 0, x: 90 },
                               visible: { opacity: 1, x: 0 },
                             }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">Testimonials
                                </h2>
                                <p className="font-thin mb-10 md:mb-[-15px] my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                                Read what our patients have to say about their experiences with our treatments and services. We are proud to have earned their trust and loyalty. We hope that their stories will help you make an informed decision when choosing us for your pelvic or orthopedic needs.</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION PT2 HERE */}
                    <motion.div
                        className=''
                        initial="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: .5 }}
                        variants={{
                        hidden: { opacity: 0, x: 90 },
                        visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <section id="clients" className={`sm:py-16 flex justify-center items-center`}>
                            <motion.div 
                            className="flex w-full relative flex-wrap z-[1]"
                            initial="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: .75, duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                            }} 
                            >
                            {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}    
                            </motion.div>
                        </section>
                    </motion.div>
                </div>                
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Benefits