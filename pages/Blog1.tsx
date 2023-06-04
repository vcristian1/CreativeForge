import React from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";
import { useState } from "react";
import Image from "next/image"
import author from "../public/author.svg"
import Head from 'next/head';
import Link from 'next/link';

const Blog1 = () => {
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
        <article className="w-full mx-auto md:w-5/6 lg:w-5/6 px-6 py-36 md:mt-[10px]">
          <Link className="text-[26px] md:text-[32px] lg:text-[38px] hover:opacity-50 transition duration-500" href="/Blog">↵</Link>
          <div className="mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">How to Identify Signs of Pelvic Pain</h1>
            <p className="text-sm dark:text-gray-400">
              <a rel="noopener noreferrer" href="/About" target="_blank" className="underline mt-2 md:mt-6 lg:mt-10 font-thin text-gray-900 text-sm md:text-[16px] lg:text-[20px]">
                <span>by Natalia Avelar on</span>
              </a>
              <time className="mt-2 md:mt-6 lg:mt-10 font-thin text-gray-900 text-sm md:text-[16px] lg:text-[20px]"> Apr 14th 2023</time>
            </p>
          </div>
          <div className="dark:text-gray-100">
            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Pelvic pain is a common and often debilitating condition that affects many women. It can range from mild to severe and can be caused by a variety of factors, including endometriosis, ovarian cysts, pelvic inflammatory disease, and other gynecological conditions. While it’s important to seek medical attention if you experience any of the following symptoms, it’s also important to be aware of the early signs of pelvic pain so that you can take steps to address the issue before it becomes more serious.</p>
            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">One of the earliest signs of pelvic pain is a dull ache or cramping in the lower abdomen or pelvis. This type of pain may come and go or may be constant. It may also be accompanied by bloating or pressure in the abdomen. Other early signs include pain during intercourse, frequent urination, and difficulty emptying your bladder completely.</p>
            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">If you experience any of these symptoms, it’s important to make an appointment with your doctor as soon as possible. Your doctor will likely perform a physical exam and order tests such as an ultrasound or CT scan to determine the cause of your pelvic pain. Treatment options vary depending on the underlying cause but may include medications, physical therapy, lifestyle changes, or surgery.</p>
            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">No matter what type of pelvic pain you are experiencing, it’s important to take action as soon as possible in order to prevent further complications and ensure that you get relief from your symptoms. If you have any questions or concerns about your pelvic pain, don’t hesitate to speak with your doctor for more information and guidance on how best to manage your condition.</p>
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

export default Blog1