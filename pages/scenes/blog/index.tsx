import { motion } from 'framer-motion';
import { SelectedPage } from '../../../shared/types';
import { useForm } from 'react-hook-form';
import Image from 'next/image'
import author from "../../../public/author.svg"
import blog1image from "../../../public/blog1image.svg"
import blog2image from "../../../public/blog2image.svg"
import Link from 'next/link';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Blog = ({ setSelectedPage }: Props) => {

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
  }

  const posts = [
    {
      id: 1,
      title: 'How To Identify Signs Of Pelvic Pain ',
      href: '/Blog1',
      description:
      'Learn about how pelvic pain is a common symptom that can be caused by a variety of conditions. Early signs of pelvic pain may include cramping, pressure, or aching in the lower abdomen or pelvis.',
      date: 'Apr 14, 2023',
      datetime: '2020-03-16',
      category: { title: 'Pelvic Pain', href: '/Blog' },
      author: {
        name: 'Natalia Avelar',
        role: 'DPT, Cert MDT',
        href: '/About',
        image:
          author,
          backgroundImage: blog1image
      },
    },
    // {
    //   id: 2,
    //   title: 'Post Partum and Pregnancy Pelvic Pain',
    //   href: '/Blog2',
    //   description:
    //     'Learn about how Postpartum pelvic pain is a common condition experienced by many women after giving birth. It is caused by the stretching and tearing of the pelvic floor muscles during childbirth,',
    //   date: 'Apr 7, 2023',
    //   datetime: '2020-03-16',
    //   category: { title: 'Post Partum', href: '/Blog' },
    //   author: {
    //     name: 'Natalia Avelar',
    //     role: 'DPT, Cert MDT',
    //     href: '/About',
    //     image:
    //     author,
    //     backgroundImage: blog2image
    //   },
    // },
    
    // More posts...
  ]

  return (
    <section className='mx-auto w-5/6 pt-10 md:mt-[-50px] md:pb-32 mt-[50px] lg:mt-[80px'>
        <motion.div
            className='md:flex md:border-b-2 md:border-[#246a73]'
        >
          <motion.div
           className='md:py-[230px] md:w-full md:mr-[195px]'
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0, duration: 0.5 }}
           variants={{
             hidden: { opacity:0, x:-50},
             visible: { opacity: 1, x: 0},
           }}
          >
            <h2 className="text-4xl tracking-tight text-[#413C58] md:text-4xl lg:text-6xl">Peace Pelvic Health{" "}<span className='text-[#246a73]'>Blog</span></h2>
            <p className="w-full font-thin mb-10 md:mb-[-15px] my-10 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px] text-[#413C58]">
                Stay up to date with all there is to know about pelvic and orthopedic health with our expert advice. View our most recent blog post of the week, or view all previous blog posts.
            </p>
            <p className="w-full font-thin mb-10 md:mb-[-15px] my-10 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px] text-[#413C58]">
              P.E.A.C.E, in Peace Pelvic Health, stands for Pelvic Education and Care for Everyone. We believe in accessibility of quality pelvic floor or orthopedic education for everyone.
            </p>
          </motion.div>
        
          <motion.div 
           className="flex grid-cols-2 mt-10 w-full gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 flex-wrap"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0, duration: 0.5 }}
           variants={{
             hidden: { opacity:0, x:-50},
             visible: { opacity: 1, x: 0},
           }}
          >
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-[500px] lg:max-w-[775px] flex-col items-start justify-between">
              <div className="flex basis-3/5 justify-center md:z-10 md:justify-items-end">
                <Image src={post.author.backgroundImage} alt="patient-talking-to-therapist" className='rounded-[20px] hover:saturate-150 transition duration-500 mb-2 md:mb-6 lg:mb-6 md:mt-[-50px]'/>
              </div>
              <div className="mt-4 flex items-center gap-x-4 lg:mt-8">
                  <time dateTime={post.datetime} className="text-[#413C58] text-[16px] md:text-[17px] lg:text-[24px]">
                  {post.date}
                  </time>
                  <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-[#F3DFC1] px-3 py-1.5 lg:px-6 lg:py-3 text-[12px] md:text-[14px] lg:text-[22px] font-medium text-[#413C58] hover:bg-[#160F29] hover:text-[#F3DFC1] transition duration-500"
                  >
                  {post.category.title}
                  </a>
              </div>
              <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-[16px] md:text-[16px] lg:text-[28px] lg:mt-6">
                  <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                  </a>
                  </h3>
                  <p className="mt-5 text-[16px] font-thin md:text-[18px] md:font-thin lg:text-[28px] lg:font-thin leading-7 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-6 mb-5 md:mb-20 lg:mb-16">
                <Image width="40" height="40" src={post.author.image} alt="" className="h-10 w-10 md:w-12 md:h-12 rounded-full bg-gray-50 lg:h-14 lg:w-14" />
                <div className="text-sm leading-6 lg:mt-6">
                  <p className="font-semibold text-gray-900 text-sm md:text-[16px] lg:text-[26px]">
                      <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                      </a>
                  </p>
                  <p className="mt-1 text-gray-600 text-sm md:text-[16px] lg:text-[24px] lg:mt-3">{post.author.role}</p>
                </div>  
                <button className='relative z-10 rounded-[10px] bg-[#246a73] px-3 py-2 md:py-2.5 lg:px-6 lg:py-4 text-sm md:text-[16px] lg:text-[20px] font-medium text-[#f3dfc1] hover:bg-[#dea54b] hover:text-[#160f29]  transition duration-500'>
                  <Link className="lg:text-[22px]" href="/Blog">View All Posts</Link>
                </button>
              </div>
            </article>
          ))}
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Blog