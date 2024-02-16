import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";


export default function TaxReduction3() {
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
          <div className="w-5 h-5">
          <div className="w-5 h-5">
          <input className="" type="checkbox" />
          </div>
          </div>
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold">ค่าซื้อกองทุนรวมเพื่อการเลี้ยงชีพ RMF</h1>
            <h1 className="text-[#7C7C7C]">
            ตามที่จ่ายจริงแต่ไม่เกิน 30% 
            <br />ของเงินได้ที่ต้องเสียภาษีและเมื่อเมื่อรวมกับ 10. แล้ว ต้องไม่เกิน 500,000 บาท
            <br /><br />มีเงื่อนไขดังนี้
            <br />&emsp;- ต้องซื้อต่อเนื่องทุกปีหรืออย่างน้อยปีเว้นปี แต่ถ้าอายุครบ 55 ปีแล้วหรือทุพพลภาพจะซื้อต่อเนื่องทุกปีหรือหยุดซื้อปีใดไปเลยก็ได้
            <br />&emsp;- ถือหน่วยลงทุนไว้อย่างน้อย 5 ปี
            <br />&emsp;- จะซื้อกองทุนรวมกองเดียวหรือหลายกองก็ได้
            <br />&emsp;- ได้รับเงินปันผลจากการถือกองทุนรวมและไม่กู้ยืมหรือเบิกเงินจากกองทุนรวมระหว่างที่ถือ
              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold  my-10"><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>

        {/* row 2 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full mb-10">
          <div className="w-5 h-5">
            <input className="" type="checkbox" />
          </div>
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold">เบี้ยประกันชีวิตบำนาญ</h1>
            <h1 className="text-[#7C7C7C]">
            ตามที่จ่ายจริงแต่ไม่เกิน 15% ของเงินได้ที่ต้องเสียภาษีไม่เกิน
            <br />200,000 บาทและเมื่อรวมกับ 10. และ RMF แล้วต้องไม่เกิน
            <br />500,000 บาท
            <br /><br />** ถ้ายังใช้สิทธิ์ลดหย่อนเบี้ยประกันชีวิตทั่วไปไม่ครบ 100,000 บาทมีสิทธิ์นำเบี้ยประกันชีวิตแบบบำนาญบางส่วนไปหักลดหย่อน ในฐานะเบี้ยประกันชีวิตแบบทั่วไปก่อนได้
            <br /><br />มีเงื่อนไขดังนี้
            <br />&emsp;- กรมธรรม์ประกันชีวิตมีระยะเวลาคุ้มครอง 10 ปีขึ้นไป
            <br />&emsp;- ทำกับบริษัทประกันชีวิตในไทย
            <br />&emsp;- จ่ายผลประโยชน์เป็นรายงวดอย่างสม่ำเสมอ
            <br />&emsp;- ต้องจ่ายเบี้ยประกันครบก่อนได้รับผลประโยชน์
            <br />&emsp;- กำหนดช่วงอายุของการจ่ายผลประโยชน์ตั้งแต่ 55-85 ปี
              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold "><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>
        
        {/* row 3 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full mb-10">
          <div className="w-5 h-5">
          <input className="" type="checkbox" />
          </div>
          <div className="flex flex-col items-start justify-center ml-5 ">
            <h1 className="text-secondary font-bold">
            เงินประกันสังคม
            </h1>
            <h1 className="text-[#7C7C7C]">
            จ่ายตามจริงแต่ไม่เกิน 9,000 บาท
              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold "><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>

        {/* row 4 */}        
        <div className="flex flex-row text-start items-start justify-start col-span-2 w-full mb-10">
          <div className="w-5 h-5">
          <input className="" type="checkbox" />
          </div>
          <div className="flex flex-col items-start justify-center ml-5">
            <h1 className="text-secondary font-bold">กองทุนการออมแห่งชาติ</h1>
            <h1 className="text-[#7C7C7C]">
            จ่ายตามจริงแต่ไม่เกิน 30,000 บาทและเมื่อรวมกับ 10. และ RMF และเบี้ยประกันชีวิตแบบบำนาญ แล้วต้องไม่เกิน 500,000 บาท
            <br /><br />ผู้เป็นสมาชิกกองทุนต้องมีคุณสมบัติดังต่อไปนี้           
            <br />&emsp;- มีสัญชาติไทย
            <br />&emsp;- อายุ 15 - 60 ปี
            <br />&emsp;- ไม่เป็นผู้ประกันตนตามกฏหมายประกันสังคม
            <br />&emsp;- ไม่เป็นข้าราชการ
            <br />&emsp;- ไม่เป็นสมาชิกกองทุนสำรองเลี้ยงชีพ
            <br />&emsp;- ไม่เป็นสมาชิกกองทุนสงเคราะห์ครูโรงเรียนเอกชน
            <br />&emsp;- ไม่ได้ทำงานประจำหรือไม่มีอาชีพ
            <br />&emsp;- จ่ายเงินสะสมเข้ากองทุนไม่น้อยกว่าเดือนละ 50 บาท
              </h1>
          </div>
        </div>
          <div className="text-secondary font-bold"><FontAwesomeIcon className="mr-3" icon={faArrowUpFromBracket} size="lg" color="#740087" />แนบไฟล์</div>
        </div>

        <h1 className="text-error mt-10">คุณยังสามารถลดหย่อนภาษีได้อีก 60 วัน</h1>
        
        <div className="flex flex-row justify-center gap-10 mx-80">
        <button className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl" onClick={()=> window.open("/app/tax-reduction-2", '_parent')}>Previous</button>
          <button className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl" onClick={()=> window.open("/app/tax-reduction-4", '_parent')}>Next</button>
        </div>
      </div>
    </>
  );
}















