import React from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";
import { useState } from "react";
import Image from "next/image"
import author from "../public/author.svg"
import Head from 'next/head';
import Link from 'next/link';

const TermsAndConditions = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Blog);

  return (
    <div className='bg-slate-50 w-full'>
      <Layout setSelectedPage={setSelectedPage}>
        <Head>
            <title>
                Terms & Conditions | Creative Forge
            </title>
            <link rel="icon" type="image/svg+xml" href="/HomePageGraphic.svg" />
            <meta
                name="description"
                content="Creative Forge is a full service web design and development studio specializing in designing and developing custom and effective web applications for businesses and individuals that drive growth"
                key="desc"
            />
        </Head>
        <article className="w-full mx-auto md:w-5/6 lg:w-5/6 px-6 py-36 md:mt-[-50px]">
          <Link className="text-[26px] md:text-[32px] lg:text-[38px] hover:opacity-50 transition duration-500" href="/">↵</Link>
          <div className="mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
          <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px]">Terms & Conditions</h2>
          </div>
          <div className="dark:text-gray-100">
            <p className="uppercase text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">1. Introduction</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">These Terms and Conditions (“Terms”) govern the relationship between [Your Business Name] (“we”, “us”, “our”) and the customer (“you”, “your”) in relation to the website development services we provide. By engaging us to provide website development services, you agree to be bound by these Terms.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">2. Services</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">We will provide website development services as agreed between us and you in writing. We will use reasonable skill and care in providing our services but do not guarantee that our services will meet your requirements or that they will be uninterrupted or error-free.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">3. Fees</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">You agree to pay us the fees for our services as set out in our written agreement with you. All fees are exclusive of any applicable taxes or duties, which shall be payable by you in addition when due. We may increase our fees at any time upon giving you 30 days{"'"} notice in writing of such increase.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">4. Payment</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Payment is due after the service agreement has been signed unless otherwise agreed between Creative Forge and you in writing. If payment is not received within this period, we reserve the right to suspend or terminate our services until payment is received in full. We may also charge interest on overdue payments at a rate of 5% per annum above the base rate from time to time of Chase.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">5. Intellectual Property Rights</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">We retain all intellectual property rights relating to any work we produce for you as part of our website development services including all copyright and other proprietary rights subsisting therein (the “IP Rights”). You acknowledge that all IP Rights remain vested with us and that we are free to use such IP Rights for other purposes without restriction or limitation unless otherwise agreed between us and you in writing.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">6. Confidentiality</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">You agree not to disclose any confidential information relating to our business or any information provided by us during the course of providing our website development services without prior written consent from us except where required by law or regulation or where disclosure is necessary for the purpose of obtaining professional advice from a third party adviser who is bound by confidentiality obligations no less onerous than those contained herein.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">7. Termination</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Either party may terminate this agreement at any time upon giving 30 days{"'"} notice in writing to the other party provided that no fees are outstanding at such time of termination and all work completed up until termination has been paid for in full by you within 14 days after termination date unless otherwise agreed between us and you in writing prior to termination date.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">8. Limitation of Liability</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">We shall not be liable for any indirect, special, incidental or consequential damages arising out of this agreement including but not limited to loss of profits, loss of data or loss of business opportunities even if we have been advised of such potential losses beforehand . Our total liability under this agreement shall not exceed an amount equal to the total fees paid by you under this agreement.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">9. Governing Law & Jurisdiction</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">This agreement shall be governed by English law and both parties hereby submit themselves exclusively to the jurisdiction of English courts.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">10. Entire Agreement</p>
            <p className="font-thin text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">This document constitutes the entire agreement between us and supersedes all prior agreements whether written or oral relating thereto . No amendment hereto shall be valid unless made in writing signed by both parties.</p>
            <p className="uppercase mt-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Effective Date: June 1st 2023</p>
          </div>
        </article>
      </Layout>
    </div>
  )
}

export default TermsAndConditions;