import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const CTA = ({ setSelectedPage }: Props) => {
  return (
    <motion.div 
      className='w-full'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        hidden: { opacity:0, x:-50},
        visible: { opacity: 1, x: 0},
      }}
    >
        <div className="relative isolate overflow-hidden bg-[#011C43] px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mb-14 md:mb-[80px] mx-auto max-w-md text-center lg:mt-[90px] lg:text-center">
                <h2 className="font-bold tracking-tight text-[#F3DFC1] text-[28px] md:text-[30px] lg:text-[48px]">Schedule Your Evaluation Today</h2>
                <p className="font-thin text-[20px] md:text-[22px] lg:text-[30px] mt-6 tracking-tight text-[#F3DFC1]">Patients can schedule a free 15 minute consultation. Let us at Peace Pelvic Health guide you on your healing journey!</p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <Link href='/Contact' className="mt-2 rounded-md bg-[#dea54b] px-10 py-3 lg:px-12 lg:py-4 lg:text-[24px] font-semibold text-[#160F29] hover:bg-[#F3DFC1] hover:text-[#160F29] transition duration-500 ml-1">Book Appointment</Link>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default CTA;