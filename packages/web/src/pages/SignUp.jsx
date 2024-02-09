import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEye } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
    return (
      <>
      {/* main container */}
        <div className="rounded-lg bg-white my-10 mx-[25%]">
          <div className="grid grid-cols-5 mx-[15%] gap-1">
            <div className="bg-[#FFD944] h-2 rounded-full my-10"></div>
            <div className="bg-[#FFF1BA] h-2 rounded-full my-10"></div>
            <div className="bg-[#FFF1BA] h-2 rounded-full my-10"></div>
            <div className="bg-[#FFF1BA] h-2 rounded-full my-10"></div>
            <div className="bg-[#FFF1BA] h-2 rounded-full my-10"></div>
          </div>
          <h1 className="font-medium text-3xl">Sign Up</h1>
          <h1 className="text-[#7C7C7C] pb-16">Let us be your Tax Manager.</h1>
          {/* input field */}
          <div className="flex justify-center">
            <form className="w-full max-w-sm">
              <div className="border-b border-[#7C7C7C] md:items-center  py-2">
                <input className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Email">
                </input>
              </div>
              <div className="pb-6"></div>
              <div className="border-b border-[#7C7C7C] py-2 flex flex-row items-center">
                <input className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Password" aria-label="Email">
                </input>
                <FontAwesomeIcon icon={faEye} color='#7C7C7C' className='cursor-pointer'/>
              </div>
              <div className="pb-6"></div>
              <div className="border-b border-[#7C7C7C] py-2 flex flex-row items-center">
                <input className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Confirm Password" aria-label="Confirm Email">
                </input>
                <FontAwesomeIcon icon={faEye} color='#7C7C7C' className='cursor-pointer'/>
              </div>
            </form>
          </div>
          <div className="flex justify-center md:text-left mt-10">
            <ul className="space-y-2">
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>6 characters minimum</li>
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>One uppercase letter</li>
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>One number</li>
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>One special character ‘!@#$%^&*’</li>
            </ul>
          </div>
          

          <div>
  </div>

            <button className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-12 rounded-2xl">Next</button>
            
        </div>
      </>
    );
}