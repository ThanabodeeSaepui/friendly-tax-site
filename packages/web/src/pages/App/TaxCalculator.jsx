export default function TaxCalculator() {
  return (
    <>
      <h1 className="font-bold text-2xl">Tax Calculator</h1>
      <div className="overflow-x-auto">
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
      </div>
    </>
  );
}
