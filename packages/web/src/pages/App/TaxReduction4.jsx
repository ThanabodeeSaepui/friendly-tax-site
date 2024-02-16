import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function TaxReduction4() {
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
        <div className="mr-1 text-secondary font-medium text-3xl mb-10">
          ค่าลดหย่อน
        </div>
        <div className="grid grid-cols-3 ml-32 justify-items-center">
          {/* row 1 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full mb-10">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                ค่าซื้อกองทุนเพื่อการออม SSF
              </h1>
              <h1 className="text-[#7C7C7C]">
                ตามที่จ่ายจริงแต่ไม่เกิน 30% ของเงินได้ที่ต้องเสียภาษีและไม่เกิน
                200,000 บาทและเมื่อรวมกับ 10. และ RMF
                และเบี้ยประกันชีวิตแบบบำนาญและ กอช. แล้วต้องไม่เกิน 500,000 บาท
                <br />
                <br />
                ** กำไรจากการขายกองทุน SSF
                ที่ถือไว้จนครบเงื่อนไขจะได้รับยกเว้นภาษี
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold ">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>
          {/* row 2 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                เงินบริจาคพรรคการเมือง
              </h1>
              <h1 className="text-[#7C7C7C]">
                ตามที่จ่ายจริงแต่ไม่เกิน 10,000 บาท
                <br />
                <br />
                **หากบริจาคด้วยทรัพย์สินหรือผลประโยชน์อื่นๆที่ไม่ใช่เงินจะต้องบริจาคสนับสนุนเฉพาะในช่วงระยะเวลาที่มีการจัดกิจกรรมระดมทุนเท่านั้น
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold ">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>

          {/* row 3 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full my-10">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5 ">
              <h1 className="text-secondary font-bold">
                เงินลงทุนธุรกิจ Social Enterprise (วิสาหกิจเพื่อสังคม)
              </h1>
              <h1 className="text-[#7C7C7C]">
                ตามที่จ่ายจริงแต่ไม่เกิน 100,000 บาท
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold  my-10">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>

          {/* row 4 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                ค่าลดหย่อน Easy E-Receipt 2567
              </h1>
              <h1 className="text-[#7C7C7C]">
                ตามที่จ่ายจริงแต่ไม่เกิน 50,000 บาท
                <br />
                <br />
                ** ต้องเป็นการซื้อสินค้าหรือบริการที่เกิดขึ้นระหว่าง 1 มกราคม -
                15 กุมภาพันธ์ 2567
                <br />
                <br />
                ** บุคคลต่างชาติก็ใช้สิทธิ์ลดหย่อนได้
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold ">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>

          {/* row 5 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full my-10">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold ">
                ค่าซื้อกองทุนไทยเพื่อความยั่งยืน (Thai ESG)
              </h1>
              <h1 className="text-[#7C7C7C]">
                ตามที่จ่ายจริงแต่ไม่เกิน 30% ของเงินได้ที่ต้องเสียภาษีและไม่เกิน
                100,000 บาท
                <br />
                <br />
                ** ต้องถือครบ 8 ปีนับจากวันที่ซื้อ
                <br />
                <br />
                ** กำไรจากการขายกองทุน Thai ESG
                ที่ถือไว้จนครบเงื่อนไขจะได้รับยกเว้นภาษี
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold  my-10">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>

          {/* row 5 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold ">
                เงินบริจาคเพื่อการศึกษา การกีฬา การพัฒนาสังคม และโรงพยาบาลรัฐ
              </h1>
              <h1 className="text-[#7C7C7C]">
                สองเท่าของเงินบริจาคตามที่จ่ายจริงแต่ไม่เกิน 10%
                ของเงินได้หลังหักค่าลดหย่อนตั้งแต่ข้อ 1 ถึงข้อ 18
                <br />
                <br />
                ** หย่อนได้ 2 เท่าของที่บริจาคจริง
                <br />
                <br />
                ** ต้องเป็นการบริจาค ผ่านระบบ e-Donation เท่านั้น
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold  ">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>

          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full my-10">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold ">เงินบริจาคทั่วไป</h1>
              <h1 className="text-[#7C7C7C]">
                ตามที่จ่ายจริงแต่ไม่เกิน 10%
                ของเงินได้หลังหักค่าลดหย่อนตั้งแต่ข้อ 1 ถึงข้อ 19
                <br />
                <br />
                **
                ใบอนุโมทนาบุญหรือใบเสร็จรับเงินต้องระบุชื่อคุณเป็นผู้บริจาคใช้เป็นหลักฐานการยืนยันสิทธิ์
                <br />
                <br />
                ** กรณีบริจาคผ่านระบบอิเล็กทรอนิกส์จะไม่ต้องใช้หลักฐานการบริจาค
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold my-10">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>
        </div>
        <h1 className="text-error">คุณยังสามารถลดหย่อนภาษีได้อีก 60 วัน</h1>

        <div className="flex flex-row justify-center gap-10">
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-reduction-3", "_parent")}
          >
            Previous
          </button>
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-reduction-5", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

