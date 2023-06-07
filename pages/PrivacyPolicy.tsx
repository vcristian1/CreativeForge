import React from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";
import { useState } from "react";
import Image from "next/image"
import author from "../public/author.svg"
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Blog);

  return (
    <div className='bg-slate-50 w-full'>
      <Layout setSelectedPage={setSelectedPage}>
        <Head>
            <title>
                Privacy Policy | Creative Forge
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
          <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px]">Privacy Policy</h2>
          </div>
          <div className="dark:text-gray-100">
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">This Privacy Policy governs the manner in which Creative Forge collects, uses, maintains and discloses information collected from users (each, a {"'"}User{"'"}) of the Creative Forge website ({"'"}Site{"'"}). This privacy policy applies to the Site and all products and services offered by Creative Forge.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Personal identification information</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Non-personal identification information</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Web browser cookies</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Our Site may use {"'"}cookie{"'"} to enhance User experience. User{"'"}s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies or alert you when cookies are being sent. If they do so then note that some parts of the Site may not function properly.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">How we use collected information</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]"> Creative Forge collects and uses Users personal information for the following purposes:</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">- To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently;</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">- To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site;</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">- To improve our Site: We continually strive to improve our website offerings based on the information and feedback we receive from you;</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">- To process payments: We may use the information users provide about themselves when placing an order only to provide service to that order; we do not share this information with outside parties except to the extent necessary to provide service;</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">- To send periodic emails: We may use email addresses provided by users who have opted into receiving emails from us for promotional purposes or other notifications related directly or indirectly with Creative Forge. If at any time a user would like unsubscribe from receiving future emails they can contact us via email at support@creativeforge or follow instructions included in each email message sent out by us.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">How we protect your Information</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">We adopt appropriate data collection storage practices and security measures designed protect against unauthorized access alteration destruction or disclosure of your personal data stored on our systems.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Sharing your personal Information</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">We do not sell trade rent or otherwise transfer your personally identifiable data without your consent except as described herein. We may share generic aggregated demographic data not linked any personal identification data regarding visitors users with business partners affiliates advertisers for marketing promotional purposes.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Third party websites</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Users may find advertising content on our site that link third party sites websites Thes sites have separate independent privacy policies understand therefore we have no responsibility liability for content activities these linked sites Even though we seek protect integrity of site cannot guarantee completeness accuracy external links Therefore encourage review terms conditions policies each site visit.</p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Changes to this privacy policy</p>
            <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Creative Forge has right update modify this privacy policy any time without prior notice when changes made post new revised version here along effective date bottom page continued use site after changes made constitutes acceptance those changes  </p>
            <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Effective Date: June 1st 2023</p>

          </div>
        </article>
      </Layout>
    </div>
  )
}

export default PrivacyPolicy;