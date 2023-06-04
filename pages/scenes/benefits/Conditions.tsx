import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
    name: string;
    image: string | StaticImageData;
}

const Class = ({ name,  image}: Props) => {
  // const overlayStyles = `p-5 absolute z-30 flex h-[265px] w-[350px] md:h-[338px] md:w-[450px] flex-col items-center justify-center whitespace-normal bg-[#ffffff] text-center text-[#413C58] opacity-0 transition duration-500 hover:opacity-90 rounded-[20px]`
  return (
    <li className='relative mx-[-20px] md:mx-[0px] md:ml-[-50px] inline-block h-[500px] md:h-[550px] w-[450px] md:w-[650px] lg:mx-[-10px]'>
        {/* <div className={overlayStyles}>
            <p className="text-2xl font-semibold lg:text-[24px]">{name}</p>
            <p className="font-thin mt-5 md:text-[20px] lg:text-[22px]">{description}</p>
            <Link href='/Conditions' className="mt-5 rounded-md bg-[#F3DFC1] px-10 py-2 lg:px-12 lg:py-4 lg:text-[24px] font-semibold text-[#160F29] hover:bg-[#160F29] hover:text-[#F3DFC1] transition duration-500 ml-1">Learn More</Link>
        </div>
        <Image width={500} height={550} src={image} alt={`${image}`} className="rounded-[20px]" /> */}
        <div className="w-full rounded overflow-hidden lg:ml-[-15px]">
          <div className='w-full'>
            <Image width={400} height={400} src={image} alt={`${image}`} className="w-[350px] h-[275px] md:w-[475px] md:h-[350px] lg:w-[475px] lg:h-[350px] rounded-[20px] md:ml-6 hover:saturate-150 transition duration-500" />
          </div>
          <div className="text-center ml-[-10px] mt-4 md:mt-4 p-4 md:ml-[-50px] items-center justify-center rounded-[20px] lg:ml-[10px]">
            <p className="sm:w-5/6 mt-1 ml-[-95px] md:ml-[10px] text-[#f3dfc1] text-[20px] md:text-[24px] lg:text-[30px] font-semibold lg:ml-[-20px]">{name}</p>
            <div className='text-center ml-[-95px] mt-5 md:mt-[30px] md:ml-[-85px] md:mb-[5px] lg:mt-6 lg:ml-[35px]'>
              <Link href='/Conditions' className="mt-7 rounded-md bg-[#dea54b] px-10 py-3 md:py-3 lg:px-12 lg:py-4 lg:text-[24px] text-[#160F29] hover:bg-[#F3DFC1] hover:text-[#160F29] transition duration-500 ml-1 lg:ml-[-175px]">View Condition</Link>
            </div>
          </div>
        </div>
    </li>
  )
}

export default Class;