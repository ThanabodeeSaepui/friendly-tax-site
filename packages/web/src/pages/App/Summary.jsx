export default function Summary() {
  return (
    <>
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">
            Summary
          </h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>
        <h2 className="font-bold text-2xl">ค่าลดหย่อน</h2>
        <div className="ml-[4%] my-5">
          <div className="text-left">
            <h4 className="font-bold text-xl">ค่าลดหย่อนส่วนตัว</h4>
            <p>60,000 บาท</p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">ค่าลดหย่อนบิดามารดา</h4>
            <p>คนละ 30,000 บาท</p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">ค่าลดหย่อนบุตร</h4>
            <p>
              ลูกคนแรกแบบเหมา 30,000 บาทต่อปี <br />
              ลูกคนที่ 2 เป็นต้นไป (เกิดหลัง 2561) คนละ 60,000 บาท
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">เงินประกันสังคม</h4>
            <p>จ่ายตามจริงแต่ไม่เกิน 9,000 บาท</p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">กองทุนการออมแห่งชาติ</h4>
            <p>
              จ่ายตามจริงแต่ไม่เกิน 30,000 บาทและเมื่อรวมกับ 10. และ RMF <br />
              และเบี้ยประกันชีวิตแบบบำนาญ แล้วต้องไม่เกิน 500,000 บาท
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">เงินประกันสังคม</h4>
            <p>จ่ายตามจริงแต่ไม่เกิน 9,000 บาท</p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">กองทุนการออมแห่งชาติ</h4>
            <p>
              จ่ายตามจริงแต่ไม่เกิน 30,000 บาทและเมื่อรวมกับ 10. และ RMF
              <br />
              และเบี้ยประกันชีวิตแบบบำนาญ แล้วต้องไม่เกิน 500,000 บาท
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">กองทุนการออมแห่งชาติ</h4>
            <p>
              จ่ายตามจริงแต่ไม่เกิน 30,000 บาทและเมื่อรวมกับ 10. และ RMF
              <br />
              และเบี้ยประกันชีวิตแบบบำนาญ แล้วต้องไม่เกิน 500,000 บาท
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl">ค่าซื้อกองทุนเพื่อการออม SSF</h4>
            <p>
              ตามที่จ่ายจริงแต่ไม่เกิน 30% ของเงินได้ที่ต้องเสียภาษีและไม่เกิน
              200,000 <br />
              บาทและเมื่อรวมกับ 10. และ RMF และเบี้ยประกันชีวิตแบบบำนาญและ
              <br />
              กอช. แล้วต้องไม่เกิน 500,000 บาท
            </p>
          </div>
        </div>
        <h2 className="font-bold text-2xl">รายการยกเว้นภาษีแบบพิเศษ</h2>
        <div className="ml-[4%] my-5">
          <div className="text-left my-3">
            <h4 className="font-bold text-xl">
              ค่าเสื่อมคอมพิวเตอร์ อุปกรณ์ <br />
              และโปรแกรมคอมพิวเตอร์คอมพิวเตอร์
            </h4>
            <p>เอามาคิดได้ในอัตรา 40% ของมูลค่าทรัพย์สินส่วนที่เหลือ</p>
          </div>
          <div className="text-left my-3">
            <h4 className="font-bold text-xl">
              ค่าระบบและอุปกรณ์ที่สนับสนุนระบบภาษีอิเล็กทรอนิกส์
            </h4>
            <p>
              หักเป็นรายจ่ายได้ 2 เท่า แต่ไม่เกิน 100,000 บาท
              <br />
            </p>
            <p>มีหลักเกณฑ์ดังนี้</p>
            <ul className="list-disc">
              <li>ร้านค้านิติบุคคลที่ใช้ระบบ POS ในการคิดค่าสินค้าและบริการ</li>
              <li>บริการระบบคลาวด์</li>
              <li>ค่าพัฒนาระบบ Withholding Tax</li>
              <li>E-tax invoices/ E-receipts</li>
            </ul>
          </div>
          <div className="text-left my-3">
            <h4 className="font-bold text-xl">
              เงินบริจาค (บริจาคในนามของนิติบุคคล)
            </h4>
            <p>บริจาคให้กับกองทุนส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ</p>
            <ul className="list-disc">
              <li>
                หักรายจ่ายได้เท่ากับจำนวนเงินหรือมูลค่าที่บริจาคแต่ต้องไม่เกิน
                2% ของกำไรสุทธิก่อนหักรายจ่าย
              </li>
            </ul>
            <p>บริจาคให้กับสถาบันการศึกษา</p>
            <ul className="list-disc">
              <li>ได้ทางภาครัฐเอกชนและอุดมศึกษา</li>
              <ul className="list-disc">
                <li>
                  หักรายจ่ายได้สองเท่าแต่ต้องไม่เกิน 10%
                  <br />
                  ของกำไรสุทธิก่อนหักรายจ่ายเพื่อการกุศล
                </li>
              </ul>
            </ul>
            <p>บริจาคให้กับกองทุนวิจัย พัฒนา และนวัตกรรม</p>
            <ul className="list-disc">
              <li>
                หักรายจ่ายได้สองเท่าของจำนวนเงินที่บริจาคเมื่อรวม
                <br />
                กับรายจ่ายที่เป็นค่าใช้จ่ายเพื่อการศึกษา
                <br />
                และรายจ่ายที่กำหนดแล้วต้องไม่เกิน 10%
                <br />
                ของกำไรสุทธิก่อนหักรายจ่าย
              </li>
            </ul>
          </div>
          <div className="text-left my-3">
            <h4 className="font-bold text-xl">
              ค่าระบบและอุปกรณ์ที่สนับสนุนระบบภาษีอิเล็กทรอนิกส์
            </h4>
            <p>
              หักเป็นรายจ่ายได้ 2 เท่า แต่ไม่เกิน 100,000 บาท
              <br />
            </p>
            <p>มีหลักเกณฑ์ดังนี้</p>
            <ul className="list-disc">
              <li>ร้านค้านิติบุคคลที่ใช้ระบบ POS ในการคิดค่าสินค้าและบริการ</li>
              <li>บริการระบบคลาวด์</li>
              <li>ค่าพัฒนาระบบ Withholding Tax</li>
              <li>E-tax invoices/ E-receipts</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
