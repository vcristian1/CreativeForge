import React from 'react'
import Layout from "./scenes/layout"
import { useEffect, useState } from "react";
import { SelectedPage } from "../shared/types";
import author from "../public/author.svg"
import blog1image from "../public/blog1image.svg"
import blog2image from "../public/blog2image.svg"
import blog3image from "../public/blog3image.svg"
import blog4image from "../public/blog4image.svg"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

const posts = [
  {
    id: 1,
    title: 'How To Identify Signs Of Pelvic Pain ',
    href: '/Blog1',
    description:
    'Learn about how pelvic pain is a common symptom that can be caused by a variety of conditions. Early signs of pelvic pain may include cramping, pressure, or aching in the lower abdomen or pelvis.',
    date: 'Apr 14, 2023',
    datetime: '2020-03-16',
    category: { title: 'Pelvic Pain', href: '/Blog1' },
    author: {
      name: 'Natalia Avelar',
      role: 'DPT, Cert MDT',
      href: '/Blog1',
      image:
        author,
        backgroundImage: blog1image
    },
  },
  {
    id: 2,
    title: 'Post Partum and Pregnancy Pelvic Pain',
    href: '/Blog2',
    description:
      'Learn about how Postpartum pelvic pain is a common condition experienced by many women after giving birth. It is caused by the stretching and tearing of the pelvic floor muscles during childbirth,',
    date: 'Apr 7, 2023',
    datetime: '2020-03-16',
    category: { title: 'Post Partum', href: '/Blog2' },
    author: {
      name: 'Natalia Avelar',
      role: 'DPT, Cert MDT',
      href: '/Blog2',
      image:
      author,
      backgroundImage: blog2image
    },
  },
  {
    id: 3,
    title: 'What is Pelvic Floor PT?',
    href: '/Blog3',
    description:
      'Learn about what Pelvic Floor PT is, and how this is beneficial for all genders and ages.',
    date: 'Mar 31, 2023',
    datetime: '2020-03-16',
    category: { title: 'Pelvic Pain', href: '/Blog3' },
    author: {
      name: 'Natalia Avelar',
      role: 'DPT, Cert MDT',
      href: '/Blog3',
      image:
      author,
      backgroundImage: blog3image
    },
  },
  {
    id: 4,
    title: 'Pelvic Floor PT for elderly men',
    href: '/Blog4',
    description:
      'Learn about the benefits of Pelvic Floor PT in elderly men, and the effective treatments used',
    date: 'Mar 24, 2023',
    datetime: '2020-03-16',
    category: { title: 'Pelvic Pain', href: '/Blog4' },
    author: {
      name: 'Natalia Avelar',
      role: 'DPT, Cert MDT',
      href: '/Blog4',
      image:
      author,
      backgroundImage: blog4image
    },
  },
]

const Blog = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Blog);

  return (
    <Layout setSelectedPage={setSelectedPage}>
        <Head>
            <title>
                Blog | Peace Pelvic Health
            </title>
            <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
            <meta
                name="description"
                content="Stay up to date with all of the early signs of pelvic and orthopedic dysfunction, treatments, and more with the Peace Pelvic Health blog."
                key="desc"
            />
        </Head>
        <div 
          className="bg-[#fffcf2] py-[150px] md:py-[115px]"
         >
          <div 
            className="mx-auto lg:mx-[135px] w-full md:w-5/6 lg:w-5/6 lg:px-8"
           >
            
            <motion.div 
              className="mx-auto mt-[-10px] md:mt-[45px] w-5/6 md:w-full lg:mx-0 lg:mt-[80px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                  hidden: { opacity:0, x:-50},
                  visible: { opacity: 1, x: 0},
              }}
             >
              <h2 className="mb-10 text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">From the{" "}<span className='text-[#065a60]'>Peace Pelvic Health Blog</span></h2>
              <p className="mt-2 md:mt-6 lg:mt-10 font-thin text-gray-900 text-[18px] md:text-[21px] lg:text-[30px]">
                Stay up to date with all of the early signs of pelvic and orthopedic dysfunction, treatments, and more. We blog weekly to ensure our patients have access to educational resources on pelvic and orthopedic dysfunction, treatments, and more.
              </p>
            </motion.div>
            <motion.div 
              className="px-[30px] w-full mx-auto mt-10 md:mt-4 grid grid-cols-1 md:grid-cols-2 md:ml-[-30px] gap-x-8 gap-y-16 lg:gap-x-24 lg:gap-y-24 pt-10 sm:mt-16 sm:pt-16 lg:mx-[-30px] lg:w-full lg:grid-cols-3"
              initial="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                  hidden: { opacity:0, x:-50},
                  visible: { opacity: 1, x: 0},
              }}
             >
              {posts.map((post) => (
                <article key={post.id} className="max-w-xl flex-col items-start justify-between flex">
                  <div className="flex basis-3/5 lg:w-full justify-center md:z-10 md:mr-40 md:mt-6 md:justify-items-end">
                    <Image src={post.author.backgroundImage} alt="patient-talking-to-therapist" className='rounded-[20px] hover:saturate-150 transition duration-500 mb-2 md:mb-6 '/>
                  </div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-[#413C58] text-[16px] md:text-[16px] lg:text-[26px]">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-[#F3DFC1] px-3 py-1.5 lg:px-6 lg:py-4 text-sm md:text-[16px] lg:text-[26px] font-medium text-[#413C58] hover:bg-[#160F29] hover:text-[#F3DFC1] transition duration-500"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-[16px] md:text-[16px] lg:text-[28px]">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-[16px] font-thin md:text-[18px] md:font-thin lg:text-[26px] lg:font-thin leading-6 lg:leading-8 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4 ">
                    <Image width="40" height="40" src={post.author.image} alt="" className="h-10 w-10 rounded-full bg-gray-50 lg:h-14 lg:w-14" />
                    <div className="text-sm leading-6 lg:text-[22px]">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="font-semibold text-gray-900 text-sm md:text-[16px] lg:text-[22px]">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
    </Layout>
  )
}

export default Blog