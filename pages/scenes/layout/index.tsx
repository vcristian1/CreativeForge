import React from 'react'
import Footer from "../footer"
import Navbar from '../navbar'
import { SelectedPage } from "../../../shared/types";
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const Layout = ({ children }: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <div className='bg-[#fffcf2] h-full w-full'>
        <Navbar 
         isTopOfPage={isTopOfPage}
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
        />
            {children}
        <Footer setSelectedPage={setSelectedPage}/>
    </div>
    
  )
}

export default Layout