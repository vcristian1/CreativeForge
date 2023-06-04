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
    <div id="Contact" className='bg-[#fffcf2] h-full w-full'>
        <section className='w-full mb-[100px] mt-[90px] md:mt-[100px] md:mb-[125px] lg:mt-[100px]'>
            <div className='w-5/6 mx-auto'>
                <motion.div
                >
                    {/* HEADER HERE */}
                    <motion.div
                    className="mt-4 md:w-4/5 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -90 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">
                            Book an <span className="text-[#246a73]">Appointment</span>
                        </h2>
                        <p className="font-thin mb-10 md:mb-[-15px] my-10 text-[18px] md:text-[22px] lg:text-[30px] lg:mt-[80px]">
                        With over 10 years of experience, let Peace Pelvic Health guide you on your healing journey. Contact us today to schedule an evaluation and please specify preferred availability.
                        </p>
                    </motion.div>

                    {/* FORM AND IMAGE HERE */}
                    <div className="mt-10 justify-between gap-8 md:flex">
                        <motion.div
                        className='mt-10 basis-3/5 md:mt-0 '
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -90 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        >
                            <form 
                            action="https://formsubmit.co/email@email.com"
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            
                            >
                                <input className={inputStyles} type="text" placeholder='Name' required {...register ("name", {
                                    required: true, maxLength: 100,
                                })}/>
                                {errors.name && (
                                    <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max Length is 100 characters."}
                                    </p>
                                )}

                                <input className={inputStyles} type="text" placeholder='Email' required {...register ("email", {
                                    required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}/>
                                {errors.email && (
                                    <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                    </p>
                                )}

                                <input className={inputStyles} type="text" placeholder='Phone Number' required {...register ("phone", {
                                    required: true
                                })}/>
                                {errors.phone && (
                                    <p className="mt-1 text-primary-500">
                                    {errors.phone.type === "required" && "This field is required."}
                                    </p>
                                )}

                                <textarea
                                    className={inputStyles}
                                    placeholder="What brings you in?"
                                    rows={4}
                                    cols={50}
                                    {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                    })}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" &&
                                        "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="rounded-md bg-[#246a73] px-10 py-2 md:px-12 md:py-3 lg:px-12 lg:py-4 lg:text-[26px] font-semibold text-[#FFFFFF] hover:bg-[#dea54b] hover:text-[#160F29] transition duration-500 mt-10"
                                >
                                    Submit
                                </button>                        
                            </form>
                        </motion.div>

                        <motion.div
                            className="relative mt-16 basis-2/5 md:mt-0 "
                            initial="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .5 }}
                            variants={{
                            hidden: { opacity: 0, y: 90 },
                            visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <motion.div 
                             className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]"
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ delay: .25, duration: 0.5 }}
                             variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                             }}
                            >
                                <Image
                                    className="w-full rounded-[20px] hover:saturate-150 transition duration-500"
                                    alt="contact-us-page-graphic"
                                    src={ContactUsPageGraphic}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default ContactForm