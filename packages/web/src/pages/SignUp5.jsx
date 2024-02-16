import Footer from "../components/Footer";

export default function SignUp5() {
  return (
    <>
      {/* main container */}
      <div className="rounded-lg bg-white my-10 mx-[2] flex flex-col content-start">
        {/* form selector */}
        <div className="grid grid-cols-5 gap-5 mx-5 mt-10">
          <div className="bg-[#CBCBCB] rounded-xl text-black py-2 font-medium text-sm flex justify-center items-center">
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
          <div className="bg-secondary rounded-xl text-white py-2 font-bold text-sm flex justify-center items-center">
            Final
          </div>
        </div>
        <h1 className="font-medium text-3xl pt-10 mt-20">
          ธุรกิจของคุณได้จดทะเบียนนิติบุคคลหรือไม่
        </h1>
        <div className="flex flex-row justify-center gap-10 mx-80 mb-20">
          <button
            className="bg-secondary text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/profile", "_parent")}
          >
            จด
          </button>
          <button
            className="border border-secondary text-secondary font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/profile", "_parent")}
          >
            ไม่จด
          </button>
        </div>
        <div className="flex flex-row justify-center gap-10 mx-80">
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup4", "_parent")}
          >
            Previous
          </button>
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/profile", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
