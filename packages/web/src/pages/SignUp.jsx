import Footer from "../components/Footer";

export default function SignUp() {
  return (
    <>
      {/* main container */}
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        <h1 className="font-medium text-3xl pt-10">Sign Up</h1>
        <h1 className="text-[#7C7C7C] pb-10">Let us be your Tax Manager.</h1>

        {/* form selector */}
        <div className="grid grid-cols-5 gap-5 mx-5">
          <div className="bg-secondary rounded-xl text-white py-2 font-bold text-sm flex justify-center items-center">
            Your Information
          </div>
          <div className="bg-[#CBCBCB] rounded-xl text-black py-2 font-medium text-sm flex justify-center items-center">
            Contact
          </div>
          <div className="bg-[#CBCBCB] rounded-xl text-black py-2 font-medium text-sm flex justify-center items-center">
            Company
          </div>
          <div className="bg-[#CBCBCB] rounded-xl text-black py-2 font-medium text-sm flex justify-center items-center">
            Checklist
          </div>
          <div className="bg-[#CBCBCB] rounded-xl text-black py-2 font-medium text-sm flex justify-center items-center">
            Final
          </div>
        </div>
        {/* form */}
        <div className="grid grid-rows-4 grid-flow-col gap-4 justify-items-center mt-10">
          {/* -- first column --- */}
          {/* name title */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text font-bold">Name Title</span>
              </div>
              <form className="border rounded-lg border-[#7C7C7C] text-start py-3 flex items-center justify-center">
                <select
                  className="w-[90%] hover:border-white focus:border-white active:border-white "
                  id="name_title"
                  name="name_title"
                >
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="ms">Ms.</option>
                  <option value="miss">Miss</option>
                </select>
              </form>
            </label>
          </div>
          {/* First Name */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  First Name&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Date of Birth */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Date of Birth&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Nationality */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Nationality&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Nationality"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* --- second column --- */}
          <div></div>
          {/* Surname */}
          <div className="w-full max-w-xs">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Surname&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Surname"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Gender */}
          <div className="w-full max-w-xs">
            <div className="label">
              <span className="label-text flex flex-row font-bold">
                Gender&nbsp;<h1 className="text-error">*</h1>
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row items-center">
                <input
                  id="draft"
                  className="mr-2"
                  type="radio"
                  name="status"
                  checked
                />
                <label for="draft">Male</label>
              </div>
              <div className="flex flex-row items-center">
                <input id="draft" className="mr-2" type="radio" name="status" />
                <label for="draft">Female</label>
              </div>
            </div>
          </div>
        </div>
        {/* input field */}
        {/* <div className="flex justify-center">
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
          </div> */}
        {/* <div className="flex justify-center md:text-left mt-10">
            <ul className="space-y-2">
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>6 characters minimum</li>
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>One uppercase letter</li>
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>One number</li>
              <li><FontAwesomeIcon icon={faXmark} size='lg' color='#960012' className='mr-2'/>One special character ‘!@#$%^&*’</li>
            </ul>
          </div> */}

        <div></div>
        <div className="mx-80">
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup2", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
