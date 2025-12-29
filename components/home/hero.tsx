import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { BiDonateHeart } from "react-icons/bi";




const Hero = () => {
    return (
        <>
        <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          {siteConfig.banglaName}
        </span>
        <div className={subtitle({ class: "mt-4" })}>
         {siteConfig.description}
        </div>
       
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={`${buttonStyles({ variant: "bordered", radius: "full" })} p-4, md:p-6 border-success hover:bg-success/10 `}
          href={siteConfig.links.github}
        >
          আমাদের সম্পর্কে জানুন
        </Link>
        
        <Link
          isExternal
          className={`${buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
          })} py-5 md:py-7`}
          href={siteConfig.links.docs}
        >
          <BiDonateHeart className="group-hover:animate-bounce text-2xl md:text-5xl text-white " /> <span className="text-md md:text-lg text-white" >মাসিক দাতা হোন</span>
        </Link>
        
      </div>
    </>
    );
};

export default Hero;