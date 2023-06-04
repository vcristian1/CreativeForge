import React from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";
import { useState } from "react";
import Image from "next/image"
import author from "../public/author.svg"
import Head from 'next/head';
import Link from 'next/link';


const Blog2 = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Blog);

  return (
  <div className='bg-[#fffcf2] w-full'>
    <Layout setSelectedPage={setSelectedPage}>
      <Head>
          <title>
              Blog Post | Peace Pelvic Health
          </title>
          <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
          <meta
              name="description"
              content="Stay up to date with all of the early signs of pelvic and orthopedic dysfunction, treatments, and more with the Peace Pelvic Health blog."
              key="desc"
          />
      </Head>
      <article className="w-full md:w-5/6 lg:w-5/6 mx-auto px-6 py-36 md:mt-[10px]">
        <Link className="text-[26px] md:text-[32px] lg:text-[38px] hover:opacity-50 transition duration-500" href="/Blog">↵</Link>
        <div className="mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Postpartum and Pregnancy Pelvic Pain</h1>
          <p className="text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" href="/About" target="_blank" className="underline mt-2 md:mt-6 lg:mt-10 font-thin text-gray-900 text-sm md:text-[16px] lg:text-[20px]">
              <span>by Natalia Avelar on</span>
            </a>
            <time className="mt-2 md:mt-6 lg:mt-10 font-thin text-gray-900 text-sm md:text-[16px] lg:text-[20px]"> Apr 7th 2023</time>
          </p>
        </div>
        <div className="dark:text-gray-100">
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">No matter what type of pelvic pain you are experiencing, it’s important to take action as soon as possible in order to prevent further complications and ensure that you get relief from your symptoms. If you have any questions or concerns about your pelvic pain, don’t hesitate to speak with your doctor for more information and guidance on how best to manage your condition.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">During pregnancy, the body undergoes many changes that can affect the pelvic floor muscles. The increased weight of the baby can put extra strain on the muscles, leading to weakened muscles and ligaments. This can lead to urinary incontinence, which is when urine leaks out unexpectedly. Pelvic organ prolapse is another common issue during pregnancy; this occurs when the organs in the pelvis drop down due to weakened muscles and ligaments. This can cause discomfort or pain in the lower abdomen or back.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Postpartum pelvic floor dysfunctions are also common after childbirth. The body has gone through a lot of changes during pregnancy and delivery, which can lead to weakened muscles and ligaments in the pelvic area. This can cause urinary incontinence, pelvic organ prolapse, or even pain during intercourse.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Fortunately, there are treatments available for both pregnancy and postpartum pelvic floor dysfunctions. Pelvic floor physical therapy is one option; this type of therapy focuses on strengthening the muscles in the pelvic area to improve bladder control and reduce pain or discomfort during intercourse. Kegel exercises are another option; these exercises involve contracting and releasing the muscles in the pelvic area to strengthen them over time. Other treatments include medications such as estrogen replacement therapy or biofeedback devices that help you become aware of your body’s signals so you can better control your bladder function.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Pregnancy and postpartum pelvic floor dysfunctions can be uncomfortable and inconvenient but there are treatments available that can help manage these conditions and improve quality of life for women who experience them. If you’re experiencing any symptoms related to these conditions, it’s important to talk to your doctor about treatment options so you can get back on track with your health goals!</p>
        </div>
        <div className="pt-12 border-t dark:border-gray-700">
          <div className="text-center md:text-left lg:text-left flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <Image width={40} height={40} src={author} alt="" className="self-center flex-shrink-0 w-24 h-24 md:justify-self-start" />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mt-2 md:mt-4 text-gray-900 md:text-[16px] lg:text-[20px]">Natalia Avelar</h4>
              <p className="mt-2 md:mt-3 lg:mt-4 font-thin text-gray-900 text-sm md:text-[16px] lg:text-[20px]">Natalia is an orthopedic and spine specialist, having earned her certification in Mechanical Diagnosis and Treatment (MDT) from the Mckenzie Institute in 2017. In addition to her expertise in physical therapy, Natalia is trilingual, speaking English, Polish, and Spanish fluently. This has been an important asset throughout her career, allowing her to connect with a diverse range of patients and provide individualized care that meets their unique needs.</p>
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
          <a href="mailto:n.avelar17@gmail.com" className="underline-none transition duration-500 hover:text-[#246A73]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:h-8 lg:w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
          </div>
        </div>
      </article>
    </Layout>
  </div>
  )
}

export default Blog2