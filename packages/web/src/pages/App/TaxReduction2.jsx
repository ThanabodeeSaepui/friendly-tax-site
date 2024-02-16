import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";


export default function TaxReduction2() {
  return (
    <>
      <div className="rounded-lg bg-white my-10 mx-[2%]">

        {/* heading */}
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">
            Tax Reduction
          </h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>

        {/* sub heading */}
        <div className="mr-1 text-secondary font-medium text-3xl">ค่าลดหย่อน</div> 

      <div className="grid grid-cols-3 ml-32 justify-items-center">

        {/* row 1 */}
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full my-10">
          <input className="w-5 h-5" type="checkbox" />
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold">ค่าลดหย่อนส่วนตัว</h1>
            <h1 className="text-[#7C7C7C]">60,000 บาท</h1>
          </div>
        </div>
          <div className="text-secondary font-bold  my-10"><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>

        {/* row 2 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full ">
          <input className="w-5 h-5" type="checkbox" />
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold">
            ค่าลดหย่อนคู่สมรส
            </h1>
            <h1 className="text-[#7C7C7C]">
              1. คนละ 60,000 บาท จำกัด 1 คน
              <br />2. คู่สมรสต้องไม่มีรายได้เลย
              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold "><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>
        
        {/* row 3 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full my-10">
          <input className="w-5 h-5" type="checkbox" />
          <div className="flex flex-col items-start justify-center ml-5 ">
            <h1 className="text-secondary font-bold">
            ค่าลดหย่อนบุตร
            </h1>
            <h1 className="text-[#7C7C7C]">
            1. ลูกคนแรกแบบเหมา 30,000 บาทต่อปี
            <br />2. ลูกคนที่ 2 เป็นต้นไป (เกิดหลัง 2561) คนละ 60,000 บาท
            <br />3. บุตรบุญธรรมก็ใช้สิทธิได้ 30,000 บาท จำกัด 3 คน (จดทะเบียนตามกฎหมายเท่านั้น)
            <br />4. ลูกต้องผ่านเกณฑ์อายุดังนี้
            <br />&emsp;- อายุไม่ถึง 20 ปีหรือยังไม่บรรลุนิติภาวะ
            <br />&emsp;- 20-25 ปี แต่ต้องเรียนอยู่ระดับปวส. หรือ ปวท. หรือปริญญาตรีขึ้นไป
            <br />&emsp;- อายุเท่าไหร่ก็ได้แต่ต้องถูกศาลสั่งให้เป็นคนไร้ความสามารถ
หรือเสมือนไร้ความสามารถ
            <br /><br />&emsp;***เสียชีวิตระหว่างปีก็ยังลดได้
              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold  my-10"><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>

        {/* row 4 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full">
          <input className="w-5 h-5" type="checkbox" />
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold">
            ค่าลดหย่อนบิดามารดา
            </h1>
            <h1 className="text-[#7C7C7C]">
            คนละ 30,000 บาท
            <br />&emsp;1. เราต้องเป็นลูกแท้ๆเท่านั้น(ลูกบุญธรรมไม่ได้)
            <br />&emsp;2. พ่อแม่คู่สมรสได้ (คู่สมรสต้องไม่มีรายได้ตลอดปีภาษี)
            <br />&emsp;3. ต้องอายุอย่างน้อย 60 ปีแล้ว
            <br />&emsp;4. พ่อแม่ 1 คนเท่ากับ 1 สิทธิ์ตกลงกับพี่น้องดีๆ
            <br />&emsp;5.  พ่อแม่มีรายได้ที่ต้องเสียภาษีตลอดทั้งปีภาษีไม่เกิน 30,000 บาท
              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold "><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>

        {/* row 5 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full my-10">
          <input className="w-5 h-5" type="checkbox" />
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold ">
            ค่าลดหย่อนผู้พิการ ทุพพลภาพ
            </h1>
            <h1 className="text-[#7C7C7C]">
            คนละ 60,000 บาท
            <br />&emsp; 1. ผู้พิการมีรายได้ทั้งปีไม่เกิน 30,000 บาท
            <br />&emsp; 2.  มีบัตรประจำตัวคนพิการ
            <br />&emsp; 3.  ต้องมีหลักฐานยืนยัน (ล.ย.04)

              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold  my-10"><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>

        {/* row 5 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full">
          <input className="w-5 h-5" type="checkbox" />
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold ">
            ค่าฝากครรภ์ ทำคลอด
            </h1>
            <h1 className="text-[#7C7C7C]">
            ตามที่จ่ายจริงแต่รวมกันต้องไม่เกินท้องละ 60,000 บาท
            <br />ค่าที่นำไปลดหย่อนได้มีดังนี้
            <br />&emsp; 1. ค่าตรวจและรับฝากครรภ
            <br />&emsp; 2. ค่าบำบัดทางการแพทย์
            <br />&emsp; 3. ค่ายาและเวชภัณฑ์
            <br />&emsp; 4. ค่าทำคลอด
            <br />&emsp; 5. ค่ากินอยู่ในสถานพยาบาล

              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold  my-10"><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>

        </div>
        
        <h1 className="text-error mt-10">คุณยังสามารถลดหย่อนภาษีได้อีก 60 วัน</h1>

        <div className="flex flex-row justify-center gap-10 mx-80">
        <button className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl" onClick={()=> window.open("/app/tax-reduction", '_parent')}>Previous</button>
          <button className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl" onClick={()=> window.open("/app/tax-reduction-3", '_parent')}>Next</button>
        </div>
      </div>
    </>
  );
}















