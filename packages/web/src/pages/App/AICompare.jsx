import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function AICompare() {
    return (
      <>
      {/* main container */}
        <div className="rounded-lg bg-white my-10 mx-[2%]">

            <div className="flex flex-row text-center items-center justify-center mb-10 py-10">
                <FontAwesomeIcon className="mr-3" icon={faCircleExclamation} size="2xl" color="#f14d50" />
                <h1 className="text-4xl font-medium text-error">คุณควรจดทะเบียนนิติบุคคล</h1>
            </div>
            <div className="flex flex-row mx-10 justify-center items-center gap-4">
                <div className="bg-secondary w-1/2 rounded-xl text-white mb-10">
                    <h1 className="text-4xl my-5 font-bold text-accent">บุคคลธรรมดา</h1>
                    <div className="text-start flex flex-col items-center mb-10 text-xl">
                        <h1>- กำไรก่อนค่าใช้จ่าย (รายได้) ภาษีเงินได้
                        <br />- ภาษีที่คุณต้องจ่าย
                        <br />- กำไรหลังจ่ายภาษีแล้ว 10,000
                        <br />- คุณลดหย่อนภาษีไปได้ทั้งหมด 10% ของกำไร
                        </h1>
                    <h1 className="text-6xl text-accent text-center mt-10"><u>70,000 ฿</u></h1>
                    </div>
                    </div>
                <div className="bg-secondary w-1/2 rounded-xl text-white mb-10">
                <div className="text-start flex flex-col items-center mb-10">
                        <h1 className="text-4xl my-5 font-bold text-accent">นิติบุคคล</h1>
                        <h1 className="text-xl">- กำไรก่อนค่าใช้จ่าย (รายได้) ภาษีเงินได้
                        <br />- ภาษีที่คุณต้องจ่าย
                        <br />- กำไรหลังจ่ายภาษีแล้ว 10,000
                        <br />- คุณลดหย่อนภาษีไปได้ทั้งหมด 10% ของกำไร
                        </h1>
                    <h1 className="text-6xl text-accent text-center mt-10"><u>40,000 ฿</u></h1>
                    </div>
                </div>

                

            </div>

            <div className="flex flex-row justify-center gap-10 mx-80">
                    <button className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl" onClick={()=> window.open("/app/tax-reduction-6", '_parent')}>Previous</button>
                    <button className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl" onClick={()=> window.open("/app/summary", '_parent')}>Next</button>
                </div>
        </div>
        <Footer/>
      </>
    );
}