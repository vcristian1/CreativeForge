import React from 'react'
import Layout from "./scenes/layout"
import { useEffect, useState } from "react";
import { SelectedPage } from "../shared/types";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head  from 'next/head';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const FAQ = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.FAQ);

  return (
    <div className='bg-[#fffcf2]'>
        <Head>
            <title>
            FAQ | Peace Pelvic Health
            </title>
            <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
            <meta
            name="description"
            content="View Peace Pelvic Health's most frequently asked questions to answer any of your concerns."
            key="desc"
            />
      </Head>
      <Layout setSelectedPage={setSelectedPage}>
          <section className="mx-4 py-[110px] md:mx-[105px] md:py-[100px] lg:mt-[30px]">
            <motion.div 
              className="py-8 px-4 lg:mx-12 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
              initial="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                  hidden: { opacity:0, x:-50},
                  visible: { opacity: 1, x: 0},
              }}
             >
                <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-6xl lg:mb-[100px]">Frequently Asked Questions</h2>
                <p className="w-full text-[#160F29] mb-[40px] mt-[40px] md:mb-[40px] md:mt-[25px] lg:mb-[50px] lg:mt-[-50px] font-thin text-[18px] md:text-[18px] lg:text-[30px]">Click on our most frequently asked questions below to learn more about Peace Pelvic Health.</p>
                <div className="grid pt-8 text-left border-t border-[#065a60] md:gap-16 md:grid-cols-1">
                    <div className='lg:mt-[100px]'>
                        <Accordion allowMultiple>
                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            What is Pelvic Floor PT?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    Pelvic floor physical therapy (PFPT) is a specialty within the PT profession that treats pain and dysfunction in or near the pelvis. PFPT specializes in the treatment of patients suffering from bladder, bowel, or sexual dysfunctions as well as spinal/hip pain as this is a common source contributing to these dysfunctions. Effective treatments for patients suffering from these issues include: exercise, manual therapy, breath work, biofeedback, muscular re-training, specialized education on the {"'"}why{"'"} behind their symptoms and helpful resources in conjunction with physical therapy, and much more.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            Who do you treat?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    Peace Pelvic Health practitioners treat female and male patients across the lifespan for a range of pelvic floor, orthopedic, and chronic pain conditions. We particularly specialize in treating pregnant and postpartum patients since the perinatal period is a time of significant change in a woman{"'"}s body, mind, and function.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                                {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            Do I need a doctor{"'"}s referral to attend PT?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    No, Illinois is a direct access state. An exception to the rule is if you are a female and never had a gynecologic exam performed; we ask that you consult with a medical provider prior to starting pelvic floor physical therapy.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            If I have insurance, can I get reimbursed for Out of Network (OON) benefits?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    It is recommended you contact your insurance company and ask about your Out of Network benefits if you are considering reimbursement. Upon request, we can provide a superbill that you can submit to your insurance and depending on your OON benefits, insurance will reimburse you directly after receiving your Superbill. We do not interact with insurance companies directly. At the start of care, you will receive a <a className="underline" href='#'>Good Faith Estimate</a> for services as part of the No Surprises Act.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            I am a male, would pelvic floor PT work for me?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    Absolutely, men have a pelvis and pelvic floor too! PFPT can help address the following conditions for male patients: chronic pelvic pain, bladder or bowel incontinence, post-prostatectomy pain and bladder issues, painful intercourse and ejaculation, testicular or scrotal pain, hernia repair pain, etc. If you are not sure if PFPT is right for you and your condition, please call or email to schedule a complimentary screening call.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                        </Accordion>

                        <Accordion allowMultiple>
                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            Do you treat conditions that are not pelvic floor related?                                      </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    Yes! With over 10 years of experience in orthopedics, we welcome a spectrum of orthopedic and musculoskeletal concerns. At Peace Pelvic Health (PPH), we treat all genders for pelvic floor, orthopedic, and chronic pain issues. Many patients find that once they have found a therapist they are comfortable with, they consistently like to see the same therapist for other concerns ranging from spinal pain to extremity (arm/leg) pain.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            What should I expect at my first mobile physical therapy appointment?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    Mobile physical therapy services are brought to YOU! Your therapist will contact you prior to arriving for your initial consultation. We request that you have some private space in your home to set up a table and supplies (which we bring along). Your therapist will typically request a few pillows and access to a sink. With your free 15 minute consultation call, we can answer any other questions you have! If you are a first time patient, we will review your intake paperwork for a thorough understanding of your history and current condition. The initial session includes a detailed physical examination and assessment, followed by recommendations for your plan of care. Internal assessment and treatment are likely recommended for any bladder, bowel, or sexual health concerns and will be explained in detail with full consent by you, the patient, prior to performance. If you wish to receive pelvic floor physical therapy services but are apprehensive about this process, please rest assured you are not alone and we can answer your questions and concerns with a complimentary call. For patients attending PPH for orthopedic concerns, all of the above is performed except for a pelvic floor (internal) assessment.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                                {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            Do you take insurance?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]"pb={4}>
                                    At Peace Pelvic Health, we believe in providing the best care without compromise. We are a fee-for-service provider, meaning we are out of network with all insurance plans and accept payment at time of service. This allows us to set a realistic price for our services and does not allow insurance companies to dictate what services they will cover/we can provide. There are no hidden fees or need for negotiated rates, which allows us to provide the care you deserve. Many patients have high deductibles or may be uninsured which limits access to care. It is important to point out that Health Insurance is not the same as Health Care.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[35px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#065a60]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            How do I schedule an appointment?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px]" pb={4}>
                                    Please fill out your information on the contact form and we will be in touch with you within 24-48 hours. You will be contacted via phone to set up your appointment time.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </div>   
                </div>
            </motion.div>
          </section>
      </Layout>
    </div>
  )
}

export default FAQ