import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import jackpot from "../../../public/call-image.svg"

const CTA = () => {
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
        <div className="md:px-24 md:pb-0 md:flex relative isolate overflow-hidden bg-[#56AEFF] px-6 pt-16 sm:px-16 md:pt-8 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mb-14 md:mt-[120px] mx-auto max-w-md text-center lg:mt-[90px] lg:text-center">
                <h2 className="font-bold tracking-tight text-[#160F29] text-[28px] md:text-[30px] lg:text-[48px]">Schedule Your Free Consultation Today</h2>
                <p className="font-thin text-[20px] md:text-[22px] lg:text-[30px] mt-6 tracking-tight text-[#160F29]">A business’ online presence has a massive impact on its success. Some businesses don’t realize that a majority of their customers will visit their website prior to making a purchase.</p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <AnchorLink href='#Contact' className="rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1">Contact Us</AnchorLink>
                </div>
            </div>
            <div>
              <Image src={jackpot} className="md:h-22 md:w-22 mb-[75px]" alt="image" />
            </div>
        </div>
    </motion.div>
  )
}

export default CTA;