import React from 'react'

type Props = {
    children: React.ReactNode;
}

const HText = ( { children }: Props) => {
  return (
    <h1 className='basis-3/5 font-josefinsans text-3xl md:text-[48px] lg:text-5xl font-bold text-[#413C58]'>{children}</h1>
  )
}

export default HText