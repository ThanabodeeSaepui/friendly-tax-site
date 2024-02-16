import ftBg from "../assets/ft_bg.webp";
import PricingLite from "../assets/p_lite.webp";
import PricingBasic from "../assets/p_basic.webp";
import PricingFull from "../assets/p_full.webp";
import PricingPremium from "../assets/p_premium.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";


export default function Pricing() {
<<<<<<< HEAD
  return (
    <div className="rounded-lg bg-white my-10 mx-[2%]">
      {/* Header */}
      <div>
        <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">
          Membership
        </h2>
        <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
      </div>
      {/* Pricing Headers */}
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th className="font-bold text-lg">ราคาต่อปี</th>
              <th className="font-bold text-lg">
                <div className="h-auto flex justify-center items-center">
                  <div className="text-center">
                    <img className="rounded-full" src={PricingLite} />
                    <p className="text-lg">Free</p>
                    <button className="btn btn-primary">Register now</button>
                  </div>
                </div>
              </th>
              <th className="font-bold text-lg">
                <div className="h-auto flex justify-center items-center">
                  <div className="text-center">
                    <img className="rounded-full" src={PricingBasic} />
                    <p className="text-lg">฿ 790 /ปี</p>
                    <button className="btn btn-primary">Buy now</button>
                  </div>
                </div>
              </th>
              <th className="font-bold text-lg">
                <div className="h-auto flex justify-center items-center">
                  <div className="text-center">
                    <img className="rounded-full" src={PricingFull} />
                    <p className="text-lg">฿ 4980 /ปี</p>
                    <button className="btn btn-primary">Buy now</button>
                  </div>
                </div>
              </th>
              <th className="font-bold text-lg">
                <div className="h-auto flex justify-center items-center">
                  <div className="text-center">
                    <img className="rounded-full" src={PricingPremium} />
                    <p className="text-lg"> ฿ 8990 /ปี</p>
                    <button className="btn btn-primary">Buy now</button>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>ตรวจสอบว่าเป็น SME หรือไม่</th>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
            </tr>
            <tr>
              <th>เก็บไฟล์เอกสาร</th>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td className="text-center">200 GB</td>
              <td className="text-center">2 Tb</td>
              <td className="text-center">2 Tb</td>
            </tr>
            <tr>
              <th>สแกนและช่วยกรอกงบการเงิน</th>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
            </tr>
            <tr>
              <th>บริการ wealth management</th>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
            </tr>
            <tr>
              <th>
                AI ให้คำปรึกษาด้านภาษีและ
                <br />
                การปรับปรุงโครงสร้างองค์กร
              </th>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
            </tr>
            <tr>
              <th>เซ็นงบการเงิน (1 ครั้ง/ปี)</th>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faMinus} size="lg" color="black" />
              </td>
              <td>
                <FontAwesomeIcon icon={faCheck} size="lg" color="black" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Optional */}
      <div class="row-span-2 col-span-2 mt-3 ml-[2%] mb-10">
=======
    return (
      <>
      <div className="rounded-lg bg-white mx-[2%] my-10">
>>>>>>> 6b2fdb9d2d6a4c093642fc4f2e724bc6562c5dda
        {/* Header */}
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">Membership</h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>
        {/* Pricing Headers */}
        <div className="grid grid-cols-5 gap-4 items-center ml-10">
          <div></div>
          <div className="w-full flex items-center justify-center">
            <img className="h-32 rounded-xl" src={PricingLite} />
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="h-32 rounded-xl" src={PricingBasic} />
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="h-32 rounded-xl" src={PricingFull} />
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="h-32 rounded-xl" src={PricingPremium} />
          </div>

          {/* price */}
          <div></div>
          <div>
            <h1 className="font-bold text-lg mb-3 ">Free</h1>
            <button className="bg-secondary text-white font-bold w-32 py-2 mb-3 rounded-2xl" onClick={()=> window.open("/signup", '_parent')}>สมัครเลย</button>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-3">฿ 790 /ปี</h1>
            <button className="bg-secondary text-white font-bold w-32 py-2 mb-3 rounded-2xl">ซื้อเลย</button>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-3">฿ 4980 /ปี</h1>
            <button className="bg-secondary text-white font-bold w-32 py-2 mb-3 rounded-2xl">ซื้อเลย</button>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-3">฿ 8990 /ปี</h1>
            <button className="bg-secondary text-white font-bold w-32 py-2 mb-3 rounded-2xl">ซื้อเลย</button>
          </div>
          
          {/* row 1 */}
          <div className="font-bold mb-10 text-start">ตรวจสอบว่าเป็น SME หรือไม่</div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>

          {/* row 2 */}
          <div className="font-bold mb-10 text-start">เก็บไฟล์เอกสาร</div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div>200 GB</div>
          <div>2 TB</div>
          <div>2 TB</div>

          {/* row 3 */}
          <div className="font-bold mb-10 text-start">สแกนและช่วยกรอกงบการเงิน</div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>

          {/* row 4 */}
          <div className="font-bold mb-10 text-start">บริการ wealth management</div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>
          
          {/* row 5 */}
          <div className="font-bold mb-10 text-start">AI ให้คำปรึกษาด้านภาษีและ<br></br>การปรับปรุงโครงสร้างองค์กร</div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>

          {/* row 6 */}
          <div className="font-bold mb-10 text-start">เซ็นงบการเงิน (1 ครั้ง/ปี)</div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faMinus} size='lg' color='black'/></div>
          <div><FontAwesomeIcon icon={faCheck} size='lg' color='black'/></div>

        </div>
        {/* Optional */}
        <div class="row-span-2 col-span-2 my-10 ml-[2%] p-10">
          {/* Header */}
          <div className="rounded-3xl bg-secondary text-start">
            <h1 className="text-white text-3xl font-medium py-3 pl-5">Optional</h1>
            <h1 className="text-white text-xl font-normal pl-5 pb-3">9990 ฿ / ครั้ง</h1>
            {/* Content */}
            <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%] shadow-lg">
              <ul className="mt-7">
                <li>
                <span class="text-base font-normal leading-tight ms-3">บริการช่วยจดทะเบียนบริษัทให้เป็นบริษัทจำกัด</span>
                </li>
              </ul>
              <div class="flex mt-4 md:mt-6 space-x-9 mb-6">
                <a class="inline-flex items-center px-14 py-2 font-medium text-center text-white bg-secondary rounded-2xl">ซื้อเลย</a>
                <a class="inline-flex items-center px-14 py-2 font-medium text-center text-secondary border-secondary border-2 rounded-2xl ">ข้อมูลเพิ่มเติม</a>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
      
      
      // <div style={{ backgroundRepeat:'no-repeat' , backgroundColor:"#F0F4F5"}}>
      //   {/* Heading */}
      //   <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10">Pricing</h2>
      //   {/* divider */}
      //   <div class="relative flex py-5 items-center">
      //     <div class=" flex-grow  border-black border  mx-[4%]"></div>
      //   </div>
      //   <div class="grid grid-rows-4 grid-flow-col gap-4 ml-[3%]">
      //     {/* Bronze Card*/}
      //     <div class="row-span-2 col-span-1 ml-[4%]">
            
      //       {/* Header */}
      //       <div className="rounded-t-3xl bg-[#D47030] text-start">
      //         <h1 className="text-white text-3xl font-medium py-3 pl-5">Bronze</h1>
      //         <h1 className="text-white text-xl font-normal pl-5 pb-3">Free</h1>
      //       </div>
      //       {/* Content */}
      //       <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
      //       <ul className="mt-7 space-y-4">
      //           <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
      //           </li>
      //           <li className="flex items-center">
      //           <span class="invisible">a</span>
      //         </li>
      //         </ul>
              
      //         <button className="bg-[#D47030] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Register Now</button>
      //         <button className="border-2 border-[#D47030] text-[#D47030] font-bold w-[80%] py-2 rounded-2xl mb-2">More Info</button>
      //       </div>
            
      //     </div>

      //     {/* Optional */}
      //     <div class="row-span-2 col-span-2 mt-3 ml-[2%]">
      //       {/* Header */}
      //       <div className="rounded-3xl bg-[#3DC0C9] text-start">
      //         <h1 className="text-white text-3xl font-medium py-3 pl-5">Optional</h1>
      //         <h1 className="text-white text-xl font-normal pl-5 pb-3">9990 ฿ / time</h1>
      //         {/* Content */}
      //       <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
      //       <ul className="mt-7">
      //         <li>
      //           <span class="text-base font-normal leading-tight ms-3">บริการช่วยจดทะเบียนบริษัทให้เป็นบริษัทจำกัด</span>
      //         </li>
      //         </ul>
              
      //         <div class="flex mt-4 md:mt-6 space-x-9 mb-6">
      //           <a class="inline-flex items-center px-14 py-2 font-medium text-center text-white bg-[#3DC0C9] rounded-2xl">Buy Now</a>
      //           <a class="inline-flex items-center px-14 py-2 font-medium text-center text-[#3DC0C9] border-[#3DC0C9] border-2 rounded-2xl ">More Info</a>
      //         </div>
              
      //       </div>
      //       </div>
      //     </div>

      //     {/* Silver */}
      //     <div class="row-span-2 col-span-1">
      //       {/* Header */}
      //       <div className="rounded-t-3xl bg-[#626262] text-start">
      //         <h1 className="text-white text-3xl font-medium py-3 pl-5">Silver</h1>
      //         <h1 className="text-white text-xl font-normal pl-5 pb-3">790 ฿ / year</h1>
      //       </div>
      //       {/* Content */}
      //       <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
      //       <ul className="mt-7 space-y-4">
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- เก็บไฟล์เอกสาร 2 TB</span>
      //         </li>
      //         </ul>
              
      //         <button className="bg-[#626262] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Buy Now</button>
      //         <button className="border-2 border-[#626262] text-[#626262] font-bold w-[80%] py-2 rounded-2xl">More Info</button>
      //       </div>
      //     </div>
      //     {/* Gold */}
      //     <div class="row-span-4 col-span-1">
      //       {/* Header */}
      //       <div className="rounded-t-3xl bg-[#FFCB44] text-start">
      //         <h1 className="text-white text-3xl font-medium py-3 pl-5">Gold</h1>
      //         <h1 className="text-white text-xl font-normal pl-5 pb-3">4980 ฿ / year</h1>
      //       </div>
      //       {/* Content */}
      //       <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
      //       <ul className="mt-7 space-y-4 ml-3">
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- เก็บไฟล์เอกสาร 2 TB</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- สแกนและช่วยกรอกงบการเงิน</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- บริการ wealth management</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="invisible">- AI ให้คำปรึกษาด้านภาษีและการปรับปรุงโครงสร้างองค์กร</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="invisible">- เซ็นงบการเงิน (1 time/year)</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="invisible">a</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="invisible">a</span>
      //         </li>
      //       </ul>
              
      //         <button className="bg-[#FFCB44] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Buy Now</button>
      //         <button className="border-2 border-[#FFCB44] text-[#FFCB44] font-bold w-[80%] py-2 rounded-2xl">More Info</button>
      //       </div>
      //     </div>
      //     {/* Platinum */}
      //     <div class="row-span-4 col-span-1">
      //       {/* Header */}
      //       <div className="rounded-t-3xl bg-[#39ACFF] text-start">
      //         <h1 className="text-white text-3xl font-medium py-3 pl-5">Platinum</h1>
      //         <h1 className="text-white text-xl font-normal pl-5 pb-3">8990 ฿ / year</h1>
      //       </div>
      //       {/* Content */}
      //       <div className="row-3 rounded-b-3xl bg-white text-center flex flex-col items-center h-[75%]">
      //       <ul className="mt-7 space-y-4 text-center md:text-left ml-3">
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- ตรวจสอบว่าเป็น SME หรือไม่</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- เก็บไฟล์เอกสาร 200 GB</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- สแกนและช่วยกรอกงบการเงิน</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- บริการ wealth management</span>
      //         </li>
      //         <li className="">
      //           <span class="text-base text-left font-normal ms-3">- AI ให้คำปรึกษาด้านภาษีและการปรับปรุงโครงสร้างองค์กร</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="text-base font-normal leading-tight ms-3">- เซ็นงบการเงิน (1 time/year)</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="invisible">a</span>
      //         </li>
      //         <li className="flex items-center">
      //           <span class="invisible">a</span>
      //         </li>
      //       </ul>
              
      //         <button className="bg-[#39ACFF] text-white font-bold w-[80%] py-2.5 mt-[15%] mb-3 rounded-2xl">Buy Now</button>
      //         <button className="border-2 border-[#39ACFF] text-[#39ACFF] font-bold w-[80%] py-2 rounded-2xl">More Info</button>
      //       </div>
      //     </div>
      //   </div>
        
      // </div>
    );
}