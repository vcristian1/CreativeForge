import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../../shared/types";
import Link from 'next/link'

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: ( value: SelectedPage) => void;
};

const LinkComponent = ({ page, selectedPage, setSelectedPage }: Props) => {
// lowerCasePage is equal to the name of the page prop passed in but its lower cased with all spaces removed so the id is #pagename for the anchor link to work
// Typescript doesnt know we lower cased this and replaced so we need to write the keyword as SelectedPage, which tells typescript to treat this as the SelectedPage.
const lowerCasePage = page as SelectedPage

  return (
    <Link
      className={`${selectedPage === lowerCasePage ? "font-josefinsans" : ""}
        transition duration-500 md:text-[16px] lg:text-[24px] hover:text-[#56AEFF] text-[#011C43]
      `}
      href={`/${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

export default LinkComponent;