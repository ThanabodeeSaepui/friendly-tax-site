import Footer from "../components/Footer";

export default function SignUp3() {
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
          <div className="bg-[#CBCBCB] rounded-xl text-black py-2 font-medium text-sm flex justify-center items-center">
            Contact
          </div>
          <div className="bg-secondary rounded-xl text-white py-2 font-bold text-sm flex justify-center items-center">
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
        <div className="grid grid-rows-10 grid-flow-col justify-items-center mt-10">
          {/* -- first column --- */}
          {/* Company Name */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Company Name&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          <div></div>
          {/* Annual tax filling period */}
          <div className="w-full max-w-xs row-span-1 col-span-1">
            <span className="label-text flex flex-row font-bold text-lg">
              Annual Tax Filling Period&nbsp;<h1 className="text-error">*</h1>
            </span>
            {/* Start Date */}
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Start Date&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Half-year */}
          <div className="w-full max-w-xs row-span-1 col-span-1">
            <span className="label-text flex flex-row font-bold text-lg">
              Half-Year Tax Filling Period&nbsp;
              <h1 className="text-error">*</h1>
            </span>
            {/* Start Date */}
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Start Date&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Company Address */}
          <div className="w-full max-w-xs row-span-2 col-span-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Company Address&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <textarea
                className="resize rounded-md border border-[#7C7C7C] text-start p-3 focus:outline-none focus:border-secondary focus:ring-secondary row-20"
                placeholder="Company Address"
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
          {/* Company Logo */}
          <div className="w-full max-w-xs row-span-2">
            <div className="label">
              <span className="label-text flex flex-row font-bold">
                Company Logo&nbsp;<h1 className="text-error">*</h1>
              </span>
            </div>
            <div className="p-10 border-dashed border rounded-xl flex items-center justify-center border-[#7C7C7C] text-xl text-[#7C7C7C]">
              Click To Browse<br></br>Or<br></br>Drag & Drop Your Files
            </div>
          </div>

          {/* --- second column --- */}
          {/* Tax ID */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Tax Identification Number&nbsp;
                  <h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Tax Identification Number"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Fascal Anniversary Date */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Fascal Anniversary Date&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Fascal Anniversary Date"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Annual tax filling period */}
          <div className="w-full max-w-xs row-span-1 col-span-1">
            <span className="label-text flex flex-row font-bold text-lg text-white select-none">
              Annual Tax Filling Period
            </span>
            {/* End Date */}
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  End Date&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
          {/* Half Year tax filling period */}
          <div className="w-full max-w-xs row-span-1 col-span-1">
            <span className="label-text flex flex-row font-bold text-lg text-white select-none">
              Half-Year Tax Filling Period
            </span>
            {/* End Date */}
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  End Date&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="DD / MM / YY"
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
          {/* Company Phone Number */}
          <div className="w-full max-w-xs">
            <label className="form-control">
              <div className="label">
                <span className="label-text flex flex-row font-bold">
                  Company Phone Number&nbsp;<h1 className="text-error">*</h1>
                </span>
              </div>
              <input
                type="text"
                placeholder="Company Phone Number"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup2", "_parent")}
          >
            Previous
          </button>
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup4", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

