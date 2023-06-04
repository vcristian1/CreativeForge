import { ClassType, SelectedPage } from "../../../shared/types";
import image1 from "../../../public/image1.png";
import image2 from "../../../public/image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
import image5 from "../../../public/image5.png";
import image6 from "../../../public/image6.png";
import image7 from "../../../public/image7.png";
import { motion } from "framer-motion";
import HText from "../../../shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Pregnancy & Postpartum",
    image: image1.src,
  },
  {
    name: "Sexual Dysfunction",
    image: image2.src,
  },
  {
    name: "Pelvic Pain",
    image: image3.src,
  },
  {
    name: "Men's Health",
    image: image4.src,
  },
  {
    name: "Bowel Dysfunction",
    image: image5.src,
  },
  {
    name: "Bladder Dysfunction",
    image: image6.src,
  },
  {
    name: "Orthopedic Concerns",
    image: image7.src,
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (

  <section id="Projects" className="mx-0 w-full bg-[#246a73] py-40 md:py-20">
    <motion.div
     className="relative"
    >
      <motion.div
       className="mx-auto w-5/6 before:w-[]before:-top-20 before:-left-20 before:z-[-1] md:before:mt-[100px] sm:before:content-renovationtext md:before:content-renovationtext lg:before:content-renovationtext"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
       hidden: { opacity:0, x:-90},
       visible: { opacity: 1, x: 0},
       }}
      >
        <h2 className="text-4xl tracking-tight text-[#dbb42c] md:text-4xl lg:text-6xl lg:mt-10">Conditions <span className="text-[#F3DFC1]">We</span>{" "}Treat</h2>
        <p className="text-[#f3dfc1] font-thin mb-10 md:mb-[-30px] my-10 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[60px]">
        We are dedicated to helping both women and men move toward wellness. Pelvic floor physical therapy can provide a solution for pain and dysfunction associated with these conditions.</p>
        
      </motion.div>

      {/* Side Scroll Here */}
      <motion.div 
       className="mt-10 mx-3 md:mt-10 lg:mx-10 lg:mt-[80px] h-[550px] md:h-[625px] lg:h-[715px] w-full overflow-x-auto overflow-y-hidden"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ delay: 0.75, duration: .5 }}
       variants={{
         hidden: { opacity: 0, x: -90 },
         visible: { opacity: 1, x: 0 },
       }}
      >
        <ul className="gap-2 lg:gap-4 mx-5 md:mt-[80px] md:mx-[60px] lg:mx-[100px] w-[3100px] md:w-[3125px] lg:w-[3400px]">
          {classes.map((item: ClassType, index) => (
            <Class 
            key={`${item.name}-${index}`}
            name={item.name}
            image={item.image}
            />
          ))}
        </ul>
      </motion.div>
      <p className="text-[#dbb42c] text-[18px] md:text-[20px] lg:text-[30px] mt-6 md:mt-10 text-center font-semibold">Scroll → </p>
    </motion.div>
  </section>  
)
}

export default OurClasses