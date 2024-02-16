import CompanyLogo from "../../assets/bluebridge_icon.png";

export default function CompanyProfile() {
  return (
    <>
      <div className="card bg-neutral shadow-xl p-6 space-y-5 my-10">
        <div className="w-full flex items-center justify-center">
          <img src={CompanyLogo} className="w-32" />
        </div>
        <h1 className="font-bold text-lg">BLUEBRIDGE</h1>
        <div className="flex justify-between">
          <p className="text-left font-bold">เลขประจำตัวผู้เสียภาษี</p>
          <p className="text-right">111888444556</p>
        </div>
        <div className="flex justify-between">
          <p className="text-left font-bold">วันครบรอบปิดบัญชี</p>
          <p className="text-right">01/01/2024</p>
        </div>
        <div className="flex justify-between">
          <p className="text-left font-bold">ประเภทธุรกิจ</p>
          <p className="text-right">SME</p>
        </div>
        <div className="flex justify-between">
          <p className="text-left font-bold">รูปแบบการเสียภาษี</p>
          <p className="text-right">นิติบุคคล</p>
        </div>
        <div className="flex justify-between">
          <p className="text-left font-bold">ระยะเวลายื่นภาษีประจำปี</p>
          <p className="text-right">01/01/2024 - 30/05/2024</p>
        </div>
        <div className="flex justify-between">
          <p className="text-left font-bold">ระยะเวลายื่นภาษีครึ่งปี</p>
          <p className="text-right">30/06/2024 - 30/08/2024</p>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <button
            className="border-secondary text-secondary border font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/signup5", "_parent")}
          >
            แก้ไข
          </button>
          <button
            className="bg-secondary text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-calculator", "_parent")}
          >
            บันทึก
          </button>
        </div>
      </div>
    </>
  );
}
