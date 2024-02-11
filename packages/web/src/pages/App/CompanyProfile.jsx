export default function CompanyProfile() {
    return (
        <>
            <div className="card bg-base-100 shadow-xl p-6">
                <h1 className="font-bold">BLUEBRIDGE</h1>
                <div className="flex">
                    <p className="text-left font-bold">เลขประจำตัวผู้เสียภาษี</p>
                    <p className="text-right">111888444556</p>
                </div>
                <div>
                    <p className="text-left font-bold">วันครบรอบปิดบัญชี</p>
                    <p>01/01/2024</p>
                </div>
                <div>
                    <p className="text-left font-bold">ประเภทธุรกิจ</p>
                    <p>SME</p>
                </div>
                <div>
                    <p className="text-left font-bold">รูปแบบการเสียภาษี</p>
                    <p>นิติบุคคล</p>
                </div>
                <div>
                    <p className="text-left font-bold">ระยะเวลายื่นภาษีประจำปี</p>
                    <p>01/01/2024 - 30/05/2024</p>
                </div>
                <div>
                    <p className="text-left font-bold">ระยะเวลายื่นภาษีครึ่งปี</p>
                    <p>30/06/2024 - 30/08/2024</p>
                </div>
                <div>
                    <button className="btn btn-active ">แก้ไข</button>
                </div>
            </div>
        </>
    )
}