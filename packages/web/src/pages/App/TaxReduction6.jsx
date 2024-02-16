import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function TaxReduction6() {
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
                ค่าใช้จ่ายในการฝึกอบรมลูกจ้าง
              </h1>
              <h1 className="text-[#7C7C7C]">
                <br />
                กรณีส่งลูกจ้างเข้ารับการศึกษาหรือฝึกอบรม
                <br />
                &emsp;- ค่าใช้จ่ายในการศึกษา รวมถึงค่าหาร ค่าที่พัก ค่าเดินทาง
                <br />
                &emsp;- มีใบเสร็จรับเงินของสถานศึกษาหรือสถานสถานฝึกอบรม
                <br />
                &emsp;- มีกำหนดเงื่อนไขให้เข้าทำงานหลังศึกษาหรือฝึกอบรมเสร็จ
                <br />
                &emsp;- จัดทำรายงานหรือค่าใช้จ่ายดังกล่าว
                <br />
                <br />
                กรณีฝึกอบรมให้ลูกจ้างของตนเอง
                <br />
                &emsp;-
                เป็นหลักสูตรที่จัดขึ้นเพื่อพัฒนาพัฒนาแรงงานหรือฝีมือของลูกจ้าง
                ซึ่งได้รับการรับรองจากกระทรวงแรงงาน
                และค่าใช้จ่ายเป็นไปตามที่ได้รับอนุมัติจากกระทรวงแรงงาน
                <br />
                &emsp;- ต้องเป็นไปเพื่อประโยชน์ของกิจการ
                <br />
                &emsp;- ต้องจัดทำทะเบียนลูกจ้างเพื่อเป็นหลักฐานการทำงาน
                <br />
                &emsp;- กำหนดเงื่อนไขให้เข้าทำงาน
                <br />
                &emsp;-
                อุปกรณ์ที่ใช้ในการฝึกอบรมต้องกำหนดขนาดและคุณสมบัติเพื่อมีให้ปะปนกับที่ใช้ในการประกอบกิจการตามปกติของบริษัท
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
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full mb-10">
            <div className="w-5 h-5">
              <input className="" type="checkbox" />
            </div>
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                เงินบริจาค (บริจาคในนามของนิติบุคคล)
              </h1>
              <h1 className="text-[#7C7C7C]">
                <br />
                บริจาคให้กับกองทุนส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ
                <br />
                &emsp;-
                หักรายจ่ายได้เท่ากับจำนวนเงินหรือมูลค่าที่บริจาคแต่ต้องไม่เกิน
                2% ของกำไรสุทธิก่อนหักรายจ่าย
                <br />
                <br />
                บริจาคให้กับสถาบันการศึกษา
                <br />
                &emsp;- ได้ทางภาครัฐเอกชนและอุดมศึกษา
                <br />
                &emsp;- หักรายจ่ายได้สองเท่าแต่ต้องไม่เกิน 10%
                ของกำไรสุทธิก่อนหักรายจ่ายเพื่อการกุศล
                <br />
                <br />
                บริจาคให้กับกองทุนวิจัย พัฒนา และนวัตกรรม
                <br />
                &emsp;-
                หักรายจ่ายได้สองเท่าของจำนวนเงินที่บริจาคเมื่อรวมกับรายจ่ายที่เป็นค่าใช้จ่ายเพื่อการศึกษา
                และรายจ่ายที่กำหนดแล้วต้องไม่เกิน 10% ของกำไรสุทธิก่อนหักรายจ่าย
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
        </div>
        <h1 className="text-error">คุณยังสามารถลดหย่อนภาษีได้อีก 60 วัน</h1>

        <div className="flex flex-row justify-center gap-10">
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-reduction-5", "_parent")}
          >
            Previous
          </button>
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-compare", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

