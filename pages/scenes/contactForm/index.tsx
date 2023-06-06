import { motion } from 'framer-motion'
import { SelectedPage } from "../../../shared/types"
import React from 'react'
import { useForm } from 'react-hook-form';
import Image from "next/image";
import ContactUsPageGraphic from "../../../public/ContactUsPageGraphic.svg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactForm = ({ setSelectedPage }: Props) => {
    const inputStyles = `w-full md:w-5/6 rounded-lg bg-[#246a73] px-5 py-3 placeholder-white mt-5 text-white lg:text-[26px] font-thin`

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

    return (
    <div id="Contact" className='bg-slate-100 h-full w-full'>
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 md:mt-[50px]">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Contact Us</h2>
                    <p className="mt-5 text-center text-[20px] md:text-[20px] lg:text-[31px] md:mt-[50px]">Are you looking to start a website development and design project?.</p>
                </div>
                <form action="https://formsubmit.co/cristian.v0223@gmail.com" className="space-y-8 md:mb-[50px]">
                    <div>
                        <label className="block mb-2 text-sm font-thin text-gray-900">Email</label>
                        <input type="email" id="email" className="shadow-sm bg-white text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 placeholder-gray-400 focus:border-primary-500 shadow-sm-light" placeholder="name@creativeforge.com" required />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-thin text-gray-900">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 border-slate-100 placeholder-gray-400 shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-thin text-gray-900">Your Message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-slate-100 focus:ring-primary-500 placeholder-gray-400 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1">Send Message</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default ContactForm