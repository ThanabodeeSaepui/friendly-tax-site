import Footer from "../components/Footer";

export default function SignUp2() {
  return (
    <>
      {/* main container */}
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        <h1 className="font-medium text-3xl pt-10">Sign Up</h1>
        <h1 className="text-[#7C7C7C] pb-10">Let us be your Tax Manager.</h1>

        {/* form selector */}
        <div className="grid grid-cols-5 gap-5 mx-5">
          <div className="bg-[#CBCBCB] rounded-xl text-black py-2 font-medium text-sm flex justify-center items-center">
            Your Information
          </div>
          <div className="bg-secondary rounded-xl text-white py-2 font-bold text-sm flex justify-center items-center">
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
        <div className="grid grid-rows-6 grid-flow-col gap-4 justify-items-center mt-10">
          {/* -- first column --- */}
          {/* Email */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Email&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Password */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Password&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Address */}
          <div className="w-full max-w-xs row-span-2 col-span-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Address&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <textarea
                className="resize rounded-md border border-[#7C7C7C] text-start p-3 focus:outline-none focus:border-secondary focus:ring-secondary"
                placeholder="Address"
              ></textarea>
            </label>
          </div>
          {/* Country */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Country&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <form className="border rounded-lg border-[#7C7C7C] text-start py-3 flex items-center justify-center">
                <select
                  className="w-[90%] hover:border-white focus:border-white active:border-white "
                  id="name_title"
                  name="name_title"
                >
                  <option value="mr">Thailand</option>
                  <option value="mrs">Hongkong</option>
                  <option value="ms">China</option>
                  <option value="miss">Taiwan</option>
                </select>
              </form>
            </label>
          </div>
          {/* Postal Code */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Postal Code&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Postal Code"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>

          {/* --- second column --- */}
          <div></div>
          {/* Confirm Password */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Confirm Password&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          <div></div>
          <div></div>
          {/* City */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  City&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <form className="border rounded-lg border-[#7C7C7C] text-start py-3 flex items-center justify-center">
                <select
                  className="w-[90%] hover:border-white focus:border-white active:border-white "
                  id="name_title"
                  name="name_title"
                >
                  <option value="mr">Bangkok</option>
                  <option value="mrs">Kamphaeng Phet</option>
                  <option value="ms">Chai Nat</option>
                  <option value="miss">Lopburi</option>
                </select>
              </form>
            </label>
          </div>
          {/* Phone Number */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Phone Number&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
        </div>
        <div></div>
        <div className="flex flex-row justify-center gap-10 mx-80">
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup", "_parent")}
          >
            Previous
          </button>
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup3", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
