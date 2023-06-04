import { StaticImageData } from "next/image";

export enum SelectedPage {
    Home= "Home",
    About = "About",
    Conditions = "Conditions",
    Treatments ="Treatments",
    Patients = "Patients",
    Blog = "Blog",
    Diversity = "Diversity",
    FAQ = "FAQ",
    Contact = "Contact",
  }

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

export interface FeedbackType {
  id: string;
  content: string;
  name: string;
  title: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string | StaticImageData;
    
  }