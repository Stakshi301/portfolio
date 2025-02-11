import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { RiCodeSSlashFill } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";


function Footer() {
  return (
    <div className="flex flex-row justify-center mt-8">
      
<div
  className={`icons gap-4
    flex justify-center lg:items-end absolute right-5"}`}
>
        <a href="./Stakshi_Resume.pdf" 
          download="Stakshi_Resume.pdf" 
          className="text-xl text-blue-200 hover:text-blue-400">
          <AiOutlineFileText />
        </a>
                
          <a href="https://github.com/Stakshi301">
            <AiFillGithub className="text-xl text-blue-200" />
          </a>
          <a href="https://www.linkedin.com/in/stakshi-semwal-832226270/">
            <AiFillLinkedin className="text-xl text-blue-200" />
          </a>
          <a href="mailto:semwaleishta6@gmail.com">
            <AiFillMail className="text-xl text-blue-200" />
          </a>
          <a href="https://leetcode.com/u/eishi/">
            <SiLeetcode className="text-xl text-blue-200" />
          </a>
          <a href="https://www.naukri.com/code360/profile/Eishta">
            <RiCodeSSlashFill className="text-xl text-blue-200" />
          </a>
        </div>
      <p className="text-center m-5 p-5">Made with ❤️ by Stakshi Semwal</p>
      
    </div>
  )
}

export default Footer
