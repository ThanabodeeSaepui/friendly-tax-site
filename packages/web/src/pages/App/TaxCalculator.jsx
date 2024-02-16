import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faPlus, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function TaxCalculator() {
  return (
    <>
    <div className="rounded-lg bg-white my-10 mx-[2%]">
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">Tax Calculator</h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>
      <div className='mt-10 mx-10 p-10 border-dashed border rounded-xl flex flex-col items-center justify-center border-[#7C7C7C] text-xl text-[#7C7C7C]'>
        <div className='mb-3'><FontAwesomeIcon icon={faArrowUpFromBracket} size='2xl' color='#7C7C7C'/></div>
        <div>Click To Browse<br></br>Or<br></br>Drag & Drop Your Files</div>
        </div>
      <div className='w-full flex justify-end'>
        {/* Company Name */}
        <div class="label">
          <span class="label-text flex flex-row font-bold mr-5 text-secondary font-bold">ปี</span>
        </div>
          <input type="text" placeholder='2566' class="input input-bordered w-20 text-center bg-neutral border-[#7C7C7C] focus:outline-none focus:border-secondary focus:ring-secondary" />
      </div>
      <div className='flex flex-row space-x-4'>
        
          <div className="dropdown dropdown-hover">
            <div className='flex flex-row items-center'>
            <h1 className='text-start text-secondary font-bold mr-4'>รายได้</h1>
              <FontAwesomeIcon icon={faPlus} size='xl' color='#740087'/>
            </div>
            {/* optional options */}
            <ul tabIndex={0} className="z-[1] dropdown-content menu p-2 bg-white rounded-box w-80 text-black">
              <li>
                <div className='flex flex-row'>
                  รายได้ดอกเบี้ย
                </div>
              </li>
              <li>
                <div className='flex flex-row'>
                  เงินปันผลรับ
                </div>
              </li>
              <li>
                <div className='flex flex-row'>
                  กำไรจากอัตราแลกแปลี่ยนสุทธิ
                </div>
              </li>
              <li>
                <div className='flex flex-row'>
                  กำไรจากการขายเงินลงทุนในบริษัทย่อย
                </div>
              </li>
            </ul>
          </div>
          
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
