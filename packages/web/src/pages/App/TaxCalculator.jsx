import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function TaxCalculator() {
  return (
    <>
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">
            Tax Calculator
          </h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>
        <div className="mt-10 mx-10 p-10 border-dashed border rounded-xl flex flex-col items-center justify-center border-[#7C7C7C] text-xl text-[#7C7C7C]">
          <div className="mb-3">
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              size="2xl"
              color="#7C7C7C"
            />
          </div>
          <div>
            Click To Browse<br></br>Or<br></br>Drag & Drop Your Files
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center justify-items-start mt-10">
          <div className="flex flex-row items-center">
            <div className="flex flex-row space-x-4">
              <div className="dropdown dropdown-hover">
                <div className="flex flex-row items-center ml-14">
                  <h1 className="text-start text-secondary font-bold mr-4">
                    รายได้
                  </h1>
                  <FontAwesomeIcon icon={faPlus} size="xl" color="#740087" />
                </div>
                {/* optional options */}
                <ul
                  tabIndex={0}
                  className="z-[1] dropdown-content menu p-2 bg-white rounded-box w-80 text-black"
                >
                  <li>
                    <div className="flex flex-row">รายได้ดอกเบี้ย</div>
                  </li>
                  <li>
                    <div className="flex flex-row">เงินปันผลรับ</div>
                  </li>
                  <li>
                    <div className="flex flex-row">
                      กำไรจากอัตราแลกแปลี่ยนสุทธิ
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row">
                      กำไรจากการขายเงินลงทุนในบริษัทย่อย
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div className="flex flex-row">
            <div className="label">
              <span className="label-text flex flex-row mr-5 text-secondary font-bold">
                ปี
              </span>
            </div>
            <input
              type="text"
              placeholder="2566"
              className=" input input-bordered w-20 text-center bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          {/* row 0 */}
          <div className="text-start">รายได้จากการขายสินค้าและการให้บริการ</div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>
          {/* row 1 */}
          <div className="text-start">รายได้จากการขายสินค้าและการให้บริการ</div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>

          {/* row 2 */}
          <div className="text-start">รายได้อื่น</div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div>บาท</div>
        </div>
        {/* row 3 */}
        <div className=" bg-[#D9D9D9]">
          <div className="grid grid-cols-3 gap-4 items-center mt-10 justify-items-center py-3">
            <div className="text-start text-secondary font-bold">รวมรายได้</div>
            <div className="w-full max-w-xs">
              <input
                type="text"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </div>
            <div className="font-bold">บาท</div>
          </div>
        </div>

        {/* funding heading */}
        <div className="flex flex-row space-x-4 ml-14 mt-10">
          <div className="dropdown dropdown-hover">
            <div className="flex flex-row items-center">
              <h1 className="text-start text-secondary font-bold mr-4">
                ค่าใช้จ่าย
              </h1>
              <FontAwesomeIcon icon={faPlus} size="xl" color="#740087" />
            </div>
            {/* optional options */}
            <ul
              tabIndex={0}
              className="z-[1] dropdown-content menu p-2 bg-white rounded-box w-80 text-black"
            >
              <li>
                <div className="flex flex-row">ต้นทุนในการจัดจำหน่าย</div>
              </li>
              <li>
                <div className="flex flex-row">ค่าใช้จ่ายในการบริหาร</div>
              </li>
              <li>
                <div className="flex flex-row">
                  ขาดทุนจากอัตราแลกเปลี่ยนสุทธิ
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  ผลขาดทุนจากการด้อยค่าของสินทรัพย์ไม่มีตัวตนอื่นนอกจากค่าความนิยม
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          {/* row 1 */}
          <div className="text-start">ต้นทุนขายสินค้าและต้นทุนการให้บริการ</div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>
        </div>
        {/* row 3 */}
        <div className=" bg-[#D9D9D9]">
          <div className="grid grid-cols-3 gap-4 items-center my-10 justify-items-center py-3">
            <div className="text-start text-secondary font-bold">
              รวมค่าใช้จ่าย
            </div>
            <div className="w-full max-w-xs">
              <input
                type="text"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </div>
            <div className="font-bold">บาท</div>
          </div>
        </div>

        {/* profit1 */}
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center mt-5">
          <div className="text-start text-secondary font-bold">
            กำไรจากกิจกรรมดำเนินงาน
          </div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>
          {/* row 1 */}
          <div className="text-start">กำไรจากการรวมธุรกิจแบบขั้น</div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>

          <div className="text-start">
            ส่วนแบ่งกำไร(ขาดทุน)ของบริษัทร่วมและ<br></br>
            การร่วมค้าตามวิธีส่วนได้เสีย
          </div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>
        </div>
        {/* row 3 */}
        <div className=" bg-[#D9D9D9]">
          <div className="grid grid-cols-3 gap-4 items-center my-10 justify-items-center py-3 ">
            <div className="text-start text-secondary font-bold ">
              รวมค่าใช้จ่าย
            </div>
            <div className="w-full max-w-xs">
              <input
                type="text"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </div>
            <div className="font-bold">บาท</div>
          </div>
        </div>

        {/* profit2 */}
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center mt-5">
          <div className="text-start text-secondary font-bold ">
            กำไรก่อนต้นทุนทางการเงิน<br></br>และค่าใช้จ่าย(รายได้) ภาษีเงินได้
          </div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>
          {/* row 1 */}
          <div className="text-start">ต้นทุนทางการเงิน</div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>

          <div className="text-start text-secondary font-bold ">
            กำไรก่อนค่าใช้จ่าย(รายได้)ภาษีเงินได้
          </div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>

          {/* row 1 */}
          <div className="text-start">ค่าใช้จ่าย (รายได้) ภาษีเงินได้</div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
            />
          </div>
          <div className="text-center">บาท</div>
        </div>
        {/* row 3 */}
        <div className=" bg-[#D9D9D9]">
          <div className="grid grid-cols-3 gap-4 items-center mt-10 justify-items-center py-3">
            <div className="text-start text-secondary font-bold ">
              กำไรสำหรับปี
            </div>
            <div className="w-full max-w-xs">
              <input
                type="text"
                className="input input-bordered w-full max-w-xs bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary"
              />
            </div>
            <div className="font-bold">บาท</div>
          </div>
        </div>

        <div>
          <button
            className="bg-[#979797] text-white font-bold w-32 py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-reduction", "_parent")}
          >
            Next
          </button>
        </div>
        {/* <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>กิจการที่ได้รับการยกเว้นภาษีเงินได้</th>
              <th>กิจการที่ต้องเสียภาษีเงินได้</th>
              <th>รวม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ภาษีเงินได้บริษัทหรือห้างหุ้นส่วนนิติบุคคล</td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>ค่ารับรอง</td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>หนี้สูญ</td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>เงินสำรอง</td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>รายจ่ายตามรายการที่ 8 15 ถึง 23</td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>รายจ่ายที่ไม่ให้ถือเป็นรายจ่าย อื่น ๆ</td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>รวม</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div> */}
      </div>
    </>
  );
}
