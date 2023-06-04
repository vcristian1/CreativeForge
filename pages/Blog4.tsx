import React from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";
import { useState } from "react";
import Image from "next/image"
import author from "../public/author.svg"
import Head from 'next/head';
import Link from 'next/link';

const Blog4 = () => {
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
        <div className="w-full text-left">
          <h1 className="mt-[50px] md:mt-[75px] lg:mt-[100px] text-4xl font-bold leading-tight md:text-5xl">The Benefits of Pelvic Floor PT in Elderly Men</h1>
          <p className="text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" href="/About" target="_blank" className="underline mt-2 md:mt-6 lg:mt-10 font-thin text-gray-900 text-sm md:text-[16px] lg:text-[20px] hover:opacity-60 transition duration-500">
              <span>by Natalia Avelar on</span>
            </a>
            <time className="mt-2 md:mt-6 lg:mt-10 font-thin text-gray-900 text-sm md:text-[16px] lg:text-[20px]"> Mar 24th 2023</time>
          </p>
        </div>
        <div className="dark:text-gray-100">
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">If you are experiencing any issues related to your pelvic floor health or if you would like to learn more about how this type of physical therapy can benefit you, it is important that you speak with your doctor or healthcare provider about your options. Pelvic floor physical therapy is an effective treatment option for many individuals who are looking for relief from their symptoms or who want to improve their overall quality of life.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Pelvic floor therapy is a type of physical therapy that focuses on strengthening the muscles of the pelvic floor. This can help to improve bladder and bowel control, reduce pain in the pelvic area, and improve sexual function. It can also help to reduce the risk of developing other health problems such as hernias or prolapse.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">For older men, pelvic floor therapy can be especially beneficial. As men age, their muscles become weaker and less flexible due to decreased testosterone levels and other hormonal changes. This can lead to a decrease in bladder control and an increase in urinary incontinence. Pelvic floor therapy helps to strengthen these weakened muscles so that they are better able to support the bladder and rectum. This can help to reduce incontinence episodes as well as improve sexual performance by increasing blood flow to the penis.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">In addition to improving bladder control and sexual performance, pelvic floor therapy can also help with other issues such as chronic pain or constipation. By strengthening the muscles of the pelvic floor, it can help to reduce pain in the lower back or abdomen as well as improve bowel movements by increasing muscle tone in the rectum.</p>
          <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Overall, pelvic floor therapy is an effective treatment for older men who are experiencing urinary or fecal incontinence, erectile dysfunction, chronic pain or constipation due to weakened muscles in the pelvic area. It is important for men over 50 years old to discuss this treatment option with their doctor if they are experiencing any of these symptoms so that they can get back on track with their health goals!</p>
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

export default Blog4