import ftBg from "../assets/ft_bg.png";


export default function Pricing() {
    return (
      <div style={{ backgroundRepeat:'no-repeat' , backgroundColor:"#F0F4F5"}}>
        {/* Heading */}
        <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10">Pricing</h2>
        {/* divider */}
        <div class="relative flex py-5 items-center">
          <div class=" flex-grow  border-black border  mx-[4%]"></div>
        </div>
        <div class="grid grid-rows-4 grid-flow-col gap-4 ml-[3%]">
          {/* Bronze Card*/}
          <div class="row-span-2 col-span-1 ml-[4%]">
            
            {/* Header */}
            <div className="rounded-t-3xl bg-[#D47030] text-start">
              <h1 className="text-white text-3xl font-medium py-3 pl-5">Bronze</h1>
              <h1 className="text-white text-xl font-normal pl-5 pb-3">Free</h1>
            </div>
            {/* Content */}
            <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
            <ul className="mt-7 space-y-4">
                <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
                </li>
                <li className="flex items-center">
                <span class="invisible">a</span>
              </li>
              </ul>
              
              <button className="bg-[#D47030] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Register Now</button>
              <button className="border-2 border-[#D47030] text-[#D47030] font-bold w-[80%] py-2 rounded-2xl mb-2">More Info</button>
            </div>
            
          </div>

          {/* Optional */}
          <div class="row-span-2 col-span-2 mt-3 ml-[2%]">
            {/* Header */}
            <div className="rounded-3xl bg-[#3DC0C9] text-start">
              <h1 className="text-white text-3xl font-medium py-3 pl-5">Optional</h1>
              <h1 className="text-white text-xl font-normal pl-5 pb-3">9990 ฿ / time</h1>
              {/* Content */}
            <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
            <ul className="mt-7">
              <li>
                <span class="text-base font-normal leading-tight ms-3">บริการช่วยจดทะเบียนบริษัทให้เป็นบริษัทจำกัด</span>
              </li>
              </ul>
              
              <div class="flex mt-4 md:mt-6 space-x-9 mb-6">
                <a class="inline-flex items-center px-14 py-2 font-medium text-center text-white bg-[#3DC0C9] rounded-2xl">Buy Now</a>
                <a class="inline-flex items-center px-14 py-2 font-medium text-center text-[#3DC0C9] border-[#3DC0C9] border-2 rounded-2xl ">More Info</a>
              </div>
              
            </div>
            </div>
          </div>

          {/* Silver */}
          <div class="row-span-2 col-span-1">
            {/* Header */}
            <div className="rounded-t-3xl bg-[#626262] text-start">
              <h1 className="text-white text-3xl font-medium py-3 pl-5">Silver</h1>
              <h1 className="text-white text-xl font-normal pl-5 pb-3">790 ฿ / year</h1>
            </div>
            {/* Content */}
            <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
            <ul className="mt-7 space-y-4">
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- เก็บไฟล์เอกสาร 2 TB</span>
              </li>
              </ul>
              
              <button className="bg-[#626262] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Buy Now</button>
              <button className="border-2 border-[#626262] text-[#626262] font-bold w-[80%] py-2 rounded-2xl">More Info</button>
            </div>
          </div>
          {/* Gold */}
          <div class="row-span-4 col-span-1">
            {/* Header */}
            <div className="rounded-t-3xl bg-[#FFCB44] text-start">
              <h1 className="text-white text-3xl font-medium py-3 pl-5">Gold</h1>
              <h1 className="text-white text-xl font-normal pl-5 pb-3">4980 ฿ / year</h1>
            </div>
            {/* Content */}
            <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
            <ul className="mt-7 space-y-4 ml-3">
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- เก็บไฟล์เอกสาร 2 TB</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- สแกนและช่วยกรอกงบการเงิน</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- บริการ wealth management</span>
              </li>
              <li className="flex items-center">
                <span class="invisible">- AI ให้คำปรึกษาด้านภาษีและการปรับปรุงโครงสร้างองค์กร</span>
              </li>
              <li className="flex items-center">
                <span class="invisible">- เซ็นงบการเงิน (1 time/year)</span>
              </li>
              <li className="flex items-center">
                <span class="invisible">a</span>
              </li>
              <li className="flex items-center">
                <span class="invisible">a</span>
              </li>
            </ul>
              
              <button className="bg-[#FFCB44] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Buy Now</button>
              <button className="border-2 border-[#FFCB44] text-[#FFCB44] font-bold w-[80%] py-2 rounded-2xl">More Info</button>
            </div>
          </div>
          {/* Platinum */}
          <div class="row-span-4 col-span-1">
            {/* Header */}
            <div className="rounded-t-3xl bg-[#39ACFF] text-start">
              <h1 className="text-white text-3xl font-medium py-3 pl-5">Platinum</h1>
              <h1 className="text-white text-xl font-normal pl-5 pb-3">8990 ฿ / year</h1>
            </div>
            {/* Content */}
            <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
            <ul className="mt-7 space-y-4 text-center md:text-left ml-3">
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- เก็บไฟล์เอกสาร 200 GB</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- สแกนและช่วยกรอกงบการเงิน</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- บริการ wealth management</span>
              </li>
              <li className="">
                <span class="text-base text-left font-normal ms-3">- AI ให้คำปรึกษาด้านภาษีและการปรับปรุงโครงสร้างองค์กร</span>
              </li>
              <li className="flex items-center">
                <span class="text-base font-normal leading-tight ms-3">- เซ็นงบการเงิน (1 time/year)</span>
              </li>
              <li className="flex items-center">
                <span class="invisible">a</span>
              </li>
              <li className="flex items-center">
                <span class="invisible">a</span>
              </li>
            </ul>
              
              <button className="bg-[#39ACFF] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Buy Now</button>
              <button className="border-2 border-[#39ACFF] text-[#39ACFF] font-bold w-[80%] py-2 rounded-2xl">More Info</button>
            </div>
          </div>
        </div>
        
      </div>
    );
}