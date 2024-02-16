import Footer from "../components/Footer";

export default function SignUp4() {
  return (
    <>
      {/* main container */}
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        {/* Heading */}

        <div className="grid grid-rows-6 grid-flow-col justify-center">
          {/* 0 */}
          <div className="w-full col-span-3 mt-10">
            <div className="label grid grid-cols-5 gap-52 justify-items-start">
              <span className="label-text flex flex-row font-bold text-lg text-start col-span-3">
                SME Checklist&nbsp;<h1 className="text-error">*</h1>
              </span>
              <div className="flex flex-row items-center">
                <h1 className="font-bold">ใช่</h1>
              </div>
              <div className="flex flex-row items-center">
                <h1 className="font-bold">ไม่ใช่</h1>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div className="w-full col-span-3">
            <form action="">
              <div className="label grid grid-cols-5 gap-52 justify-items-start">
                <span className="label-text flex flex-row font-bold text-start col-span-3">
                  เป็นบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีทุนจดทะเบียนชำระแล้ว
                  <br></br>ในวันสุดท้ายของ รอบระยะเวลาบัญชีไม่เกิน 5 ล้านบาท
                </span>
                <div className="flex flex-row items-center">
                  <input
                    id="draft1"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <input
                    id="draft1"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* 2 */}
          <div className="w-full col-span-3">
            <form action="">
              <div className="label grid grid-cols-5 gap-52 justify-items-start">
                <span className="label-text flex flex-row font-bold text-start col-span-3">
                  เป็นบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีสินทรัพย์ถาวรไม่รวม
                  <br></br>ที่ดิน ไม่เกิน 200 ล้านบาท และจ้างแรงงานไม่เกิน 200
                  คน
                </span>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* 3 */}
          <div className="w-full col-span-3">
            <form action="">
              <div className="label grid grid-cols-5 gap-52 justify-items-start">
                <span className="label-text flex flex-row font-bold text-start col-span-3">
                  เป็นบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่นำหลักทรัพย์มาจดทะเบียน
                  <br></br>ในตลาดหลักทรัพย์ MAI
                </span>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* 4 */}
          <div className="w-full col-span-3">
            <form action="">
              <div className="label grid grid-cols-5 gap-52 justify-items-start">
                <span className="label-text flex flex-row font-bold text-start col-span-3">
                  เป็นVC(Venture Capital)ที่ถือหุ้นในบริษัทหรือห้างหุ้นส่วนนิติ
                  <br></br>บุคคลที่มีสินทรัพย์ถาวร ไม่รวมที่ดินไม่เกิน 200
                  ล้านบาทและจ้าง
                  <br></br>แรงงานไม่เกิน 200 คน
                </span>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* 5 */}
          <div className="w-full col-span-3">
            <form action="">
              <div className="label grid grid-cols-5 gap-52 justify-items-start">
                <span className="label-text flex flex-row font-bold text-start col-span-3">
                  เป็นกิจการขายสินค้าหรือให้บริการที่อยู่ในบังคับภาษีมูลค่าเพิ่ม
                  <br></br>ที่มีรายรับไม่เกิน 1.8 ล้านบาทต่อปี
                  หรือต่อรอบระยะเวลาบัญชี
                  <br></br>ไม่ต้องจดทะเบียนภาษีมูลค่าเพิ่ม
                </span>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <input
                    id="draft"
                    className="mr-2"
                    type="radio"
                    name="status"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10 mx-80">
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup3", "_parent")}
          >
            Previous
          </button>
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup5", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

