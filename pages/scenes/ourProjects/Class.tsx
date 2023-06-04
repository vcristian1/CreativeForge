import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';


type Props = {
    name: string;
    description?: string;
    image: string | StaticImageData;
}

const Class = ({ name, image}: Props) => {
  return (
    <li className='relative mx-[-10px] inline-block h-[500px] w-[450px] lg:mx-[-10px]'>
        {/* <div className={overlayStyles}>
            <p className="text-2xl font-semibold lg:text-[24px]">{name}</p>
            <p className="font-thin mt-5 md:text-[20px] lg:text-[22px]">{description}</p>
            <Link href='/Conditions' className="mt-5 rounded-md bg-[#F3DFC1] px-10 py-2 lg:px-12 lg:py-4 lg:text-[24px] font-semibold text-[#160F29] hover:bg-[#160F29] hover:text-[#F3DFC1] transition duration-500 ml-1">Learn More</Link>
        </div>
        <Image width={500} height={550} src={image} alt={`${image}`} className="rounded-[20px]" /> */}
        <div className="w-full rounded overflow-hidden lg:ml-[-15px]">
          <div className='w-full ml-1'>
            <Image width={400} height={400} src={image} alt={`${image}`} className="rounded-[20px] md:ml-6" />
          </div>
          <div className="text-center ml-[-10px] mt-4 md:mt-4 p-4 md:ml-[60px] items-center justify-center rounded-[20px] lg:ml-[10px]">
            <p className="sm:w-5/6 mt-1 text-[#f3dfc1] text-[20px] md:text-[24px] lg:text-[30px] font-semibold lg:ml-[30px]">{name}</p>
            <div className='text-center ml-[-5px] mt-5 md:mt-[30px] md:ml-[-70px] md:mb-[5px] lg:mt-6 lg:ml-[0px]'>
              <Link href='/Conditions' className="mt-7 rounded-md bg-[#ddb42c] px-10 py-3 md:py-3 lg:px-12 lg:py-4 lg:text-[24px] font-semibold text-[#160F29] hover:bg-[#F3DFC1] hover:text-[#160F29] transition duration-500 ml-1">View Condition</Link>
            </div>
          </div>
        </div>
    </li>
  )
}

export default Class;