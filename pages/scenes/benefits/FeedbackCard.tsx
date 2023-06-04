import quotes from "../../../public/quotes.svg";
import Image, { StaticImageData } from "next/image"

type Props = {
    content: string;
    name: string;
    title: string;
  };

const FeedbackCard = ({ content, name, title,  }: Props) => (
  <div className="bg-[#246a73] justify-between px-10 py-12 rounded-[20px] max-w-[485px] md:mr-10 sm:mr-5 mr-0 mt-5 md:mt-5">
    <Image src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> 
    <p className="font-thin text-[18px] md:text-[21px] lg:text-[30px] leading-[32.4px] text-[#F3DFC1] my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col">
        <h4 className="text-[20px] leading-[32px] text-[#F3DFC1] lg:text-[30px]">
          {name}
        </h4>
        <p className="text-[16px] md:text-[16px] lg:mt-[5px] lg:text-[21px] leading-[24px] text-[#dea54b]">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;