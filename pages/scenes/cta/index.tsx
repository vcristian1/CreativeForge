import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import React from 'react'

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
        <div className="relative isolate overflow-hidden bg-[#56AEFF] px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mb-14 md:mb-[80px] mx-auto max-w-md text-center lg:mt-[90px] lg:text-center">
              <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-16 lg:px-6">
                  <dl className="grid max-w-screen-md gap-8 lg:gap-32 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                      <div className="flex flex-col items-center justify-center">
                          <dt className="mb-2 text-3xl text-[#011C43] md:text-4xl lg:text-5xl font-extrabold">73M+</dt>
                          <dd className="font-light lg:text-[24px] text-[#011C43]">developers</dd>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                          <dt className="mb-2 text-3xl text-[#011C43] md:text-4xl lg:text-5xl font-extrabold">1B+</dt>
                          <dd className="font-light lg:text-[24px] text-[#011C43]">contributors</dd>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                          <dt className="mb-2 text-3xl text-[#011C43] md:text-4xl lg:text-5xl font-extrabold">4M+</dt>
                          <dd className="font-light lg:text-[24px] text-[#011C43]">organizations</dd>
                      </div>
                  </dl>
              </div>
            </div>
        </div>
    </motion.div>
  )
}

export default CTA;