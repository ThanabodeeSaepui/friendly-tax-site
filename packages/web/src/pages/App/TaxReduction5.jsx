import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function TaxReduction5() {
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
          รายการยกเว้นภาษีแบบพิเศษ
        </div>
        <div className="grid grid-cols-3 ml-32 justify-items-center">
          {/* row 1 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full mb-10">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                ค่าจดทะเบียนบริษัท ค่าทำบัญชีและค่าสอบบัญชี
              </h1>
              <h1 className="text-[#7C7C7C]">
                หักเป็นค่าใช้จ่ายได้ 2 เท่า
                <br />
                <br />
                เงื่อนไขมีดังนี้
                <br />
                &emsp;- จดทะเบียนเป็นนิติบุคคลแล้ว
                <br />
                &emsp;- มีทุนจดทะเบียนชำระไม่เกิน 5 ล้านบาท
                <br />
                &emsp;-
                มีรายได้จากการขายสินค้าและบริการในรอบระยะเวลาบัญชีไม่เกิน 30
                ล้านบาท
                <br />
                &emsp;- เป็นระยะเวลา 5 รอบปีบัญชีต่อเนื่องกัน
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
                ค่าเสื่อมคอมพิวเตอร์ อุปกรณ์ และโปรแกรมคอมพิวเตอร์คอมพิวเตอร์
              </h1>
              <h1 className="text-[#7C7C7C]">
                เอามาคิดได้ในอัตรา 40% ของมูลค่าทรัพย์สินส่วนที่เหลือ
                <br />
                <br />
                ** ทยอยหักภายใน 3 รอบระยะเวลาบัญชี
                <br />
                <br />
                ** ธุรกิจนั้นต้องมี สินทรัพย์ถาวรไม่เกิน 200
                ล้านบาทและจ้างแรงงานไม่เกิน 200 คน
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
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                ค่าระบบและอุปกรณ์ที่สนับสนุนระบบภาษีอิเล็กทรอนิกส
              </h1>
              <h1 className="text-[#7C7C7C]">
                หักเป็นรายจ่ายได้ 2 เท่า แต่ไม่เกิน 100,000 บาท
                <br />
                <br />
                มีหลักเกณฑ์ดังนี้
                <br />
                &emsp;- ร้านค้านิติบุคคลที่ใช้ระบบ POS
                ในการคิดค่าสินค้าและบริการ
                <br />
                &emsp;- บริการระบบคลาวด์
                <br />
                &emsp;- ค่าพัฒนาระบบ Withholding Tax
                <br />
                &emsp;- E-tax invoices/ E-receipts
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
                ค่าเสื่อมเครื่องจักรและอุปกรณ์ของเครื่องจักร
              </h1>
              <h1 className="text-[#7C7C7C]">
                นำมาคิดได้ในอัตรา 40% ของมูลค่าต้นทุน
                ส่วนมูลค่าต้นทุนส่วนที่เหลือให้หักได้ในแต่ละรอบระยะเวลาบัญชีไม่เกินร้อยละ
                20 ต่อปี นับแต่วันที่ได้ทรัพย์สินนั้นมา
                <br />
                <br />
                ** ธุรกิจนั้นต้องมีสินทรัพย์ถาวรไม่เกิน 200 ล้านบาท
                และจ้างแรงงานไม่เกิน 200 คน
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
                ค่าจ้างงานผู้สูงอายุ
              </h1>
              <h1 className="text-[#7C7C7C]">
                หักเป็นรายจ่ายได้ 2 เท่า
                <br />
                <br />
                โดยมีเงื่อนไขดังน
                <br />
                &emsp;- มีอายุ 60 ปีขึ้นไป
                <br />
                &emsp;-
                เป็นลูกจ้างบริษัทอยู่ก่อนแล้วหรือขึ้นทะเบียนกับกรมการหางาน
                <br />
                &emsp;- ค่าจ้างจะต้องไม่เกินเดือนละ 15,000 บาท
                <br />
                &emsp;- มีการจ้างงานผู้สูงอายุไม่เกิน 10% ของจำนวนลูกจ้างทั้งหมด
                <br />
                &emsp;-
                ผู้สูงอายุต้องไม่เป็นและไม่เคยเป็นกรรมการหรือผู้ถือหุ้นของบริษัทที่จ้างหรือบริษัทในเครือ
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
        </div>
        <h1 className="text-error">คุณยังสามารถลดหย่อนภาษีได้อีก 60 วัน</h1>

        <div className="flex flex-row justify-center gap-10">
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-reduction-4", "_parent")}
          >
            Previous
          </button>
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-reduction-6", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

