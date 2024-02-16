import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faPlus,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function TaxReduction() {
  return (
    <>
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">
            Tax Reduction
          </h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>

        <div className="flex flex-row justify-center items-center ml-[4%] my-10">
          {/* funding heading */}
          <div className="flex flex-row space-x-4">
            <div className="dropdown dropdown-hover">
              <div className="flex flex-row items-center">
                <div className="mr-1 text-secondary font-medium text-3xl">
                  ค่าใช้จ่าย
                </div>
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  size="xl"
                  color="#740087"
                />
              </div>
              {/* optional options */}
              <ul
                tabIndex={0}
                className="z-[1] dropdown-content menu p-2 bg-white rounded-box w-96 text-black"
              >
                <li>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-secondary">
                      รายการที่ไม่ถือเป็นรายจ่าย ตามประมวลกฎหมายรัษฎากร มาตรา 65
                      ตรี
                    </h1>
                    <br />
                    1. รายจ่ายส่วนตัวของผู้บริหารที่อยู่นอกระเบียบบริษัท
                    <br />
                    2. รายจ่ายเพื่อรับรองลูกค้าที่เกินโควตา (ต้องไม่เกิน 0.3%
                    ของรายได้บริษัท)
                    <br />
                    3. รายจ่ายที่ไม่มีผู้รับ
                    <br />
                    4. รายจ่ายภาษีมูลค่าเพิ่ม
                    <br />
                    5. รายจ่ายให้กับบริษัทแม่หรือบริษัทลูก
                    <br />
                    6. รายจ่ายค่าอสังหาริมทรัพย์ที่ลดลง
                    <br />
                    7. รายจ่ายทรัพยากรธรรมชาติที่เสียไป
                    <br />
                    8. รายจ่ายค่าปรับ
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 ml-32 justify-items-center">
          {/* row 1 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full my-10">
            <input className="w-5 h-5" type="checkbox" />
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                เงินเดือน OT โบนัส (มาตรา 40(1))
                <br />
                ค่าคอมฯ ค่านายหน้า ค่ารีวิว (มาตรา 40(2))
              </h1>
              <h1 className="text-[#7C7C7C]">
                หักแบบเหมา 50% ของเงินได้ แต่รวมกันต้อง
                <br />
                ไม่เกิน 100,000 บาท
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

          {/* row 2 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full ">
            <input className="w-5 h-5" type="checkbox" />
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                ค่าลิขสิทธิ์ ทรัพย์สินทางปัญญา (มาตรา 40(3))
              </h1>
              <h1 className="text-[#7C7C7C]">
                1. หักตามจริง
                <br />
                2. หักแบบเหมา 50% แต่ไม่เกิน 100,000 บาท
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
            <input className="w-5 h-5" type="checkbox" />
            <div className="flex flex-col items-start justify-center ml-5 ">
              <h1 className="text-secondary font-bold">
                ค่าเช่า (มาตรา 40(5))
              </h1>
              <h1 className="text-[#7C7C7C]">
                1. หักตามจริง
                <br />
                2. หักแบบเหมา 10-30%
                <br />
                &emsp;(ก) บ้าน โรงเรือนหรือแพ 30%
                <br />
                &emsp;(ข) ที่ดินใช้ในการเกษตร 20%
                <br />
                &emsp;(ค) ที่ดินที่ไม่ได้ใช้ในการเกษตร 15%
                <br />
                &emsp;(ง) ยานพาหนะ 30%
                <br />
                &emsp;(จ) ทรัพย์สินอื่น 10%
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
            <input className="w-5 h-5" type="checkbox" />
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                ค่าวิชาชีพอิสระ (มาตรา 40(6))
              </h1>
              <h1 className="text-[#7C7C7C]">
                1. หักตามจริง
                <br />
                2. หักแบบเหมา
                <br />
                &emsp;(ก) ประกอบโรคศิลปะ 60%
                <br />
                &emsp;(ข) วิชาชีพอิสระอื่นๆ 30%
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
            <input className="w-5 h-5" type="checkbox" />
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold ">
                ค่ารับเหมาก่อสร้าง ผลิตตามแบบ (มาตรา 40(7))
              </h1>
              <h1 className="text-[#7C7C7C]">
                1. หักตามจริง
                <br />
                2. หักแบบเหมา 60%
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

          {/* row 6 */}
          <div className="flex flex-row text-start items-start justify-start col-span-2 w-full">
            <input className="w-5 h-5" type="checkbox" />
            <div className="flex flex-col items-start justify-center ml-5">
              <h1 className="text-secondary font-bold">
                เงินได้อื่น ๆ (มาตรา 40(8))
              </h1>
              <h1 className="text-[#7C7C7C] ">
                1. หักตามจริง
                <br />
                2. หักแบบเหมา 60%
              </h1>
            </div>
          </div>
          <div className="text-secondary font-bold  row-span-1">
            <FontAwesomeIcon
              className="mr-3"
              icon={faArrowUpFromBracket}
              size="lg"
              color="#740087"
            />
            แนบไฟล์
          </div>
          <div className="text-start col-span-1">
            <h1 className="text-[#7C7C7C]">
              &emsp;&emsp;(1) นักแสดง ภาพยนตร์ นักร้อง
              <br />
              &emsp;&emsp;(2) ขายที่ดินเงินผ่อน
              <br />
              &emsp;&emsp;(3) ค่าเกมจากการพนัน การแข่งขันต่างๆ
              <br />
              &emsp;&emsp;(4) ล้าง อัด ขยาย รูป การขายส่วนประกอบ
              <br />
              &emsp;&emsp;(5) อู่เรือ ซ่อมเรือ
              <br />
              &emsp;&emsp;(6) ทำรองเท้า เครื่องหนังแท้หรือหนังเทียม
              <br />
              &emsp;&emsp;(7) ตัด เย็บ ปักเสื้อผ้า
              <br />
              &emsp;&emsp;(8) ตกแต่ง ซ่อมแซมเครื่องเรือน
              <br />
              &emsp;&emsp;(9) กิจการโรงแรม ภัตตาคาร ปรุงอาหาร
              <br />
              &emsp;&emsp;(10) ดัด ตัด แต่งผม
              <br />
              &emsp;&emsp;(11) ทำสบู่ แชมพู เครื่องสำอาง
              <br />
              &emsp;&emsp;(12) ทำวรรณกรรม
              <br />
              &emsp;&emsp;(13) ค้าเครื่องเงิน ทอง พลอย อัญมณี
              <br />
              &emsp;&emsp;(14) สถานพยาบาล การจำหน่ายยา
              <br />
              &emsp;&emsp;(15) การโม่หรือย้อยหิน
              <br />
              &emsp;&emsp;(16) ทำป่าไม้ สวนยาง ไม้ยืนต้น
              <br />
              &emsp;&emsp;(17) การขนส่งหรือรับจ้างด้วยยานพาหนะ
              <br />
              &emsp;&emsp;(18) การทำบล็อก รับพิมพ์ ตราเอกสาร
              <br />
              &emsp;&emsp;(19) การทำเหมืองแร่
              <br />
              &emsp;&emsp;(20) เครื่องดื่มแอลกฮอล์
              <br />
              &emsp;&emsp;(21) การทำเครื่องกระเบื้อง เครื่องเคลือบ
              <br />
              &emsp;&emsp;(22) ทำหรือจำหน่ายกระแสไฟฟ้า
              <br />
              &emsp;&emsp;(23) การทำน้ำแข็ง
            </h1>
          </div>
          <div className="text-start col-span-2">
            <h1 className="mb-10 text-[#7C7C7C]">
              &emsp;&emsp;(24) การทำกาว แป้งเปียก
              <br />
              &emsp;&emsp;(25) การทำลูกโป่ง เครื่องแก้ว พลาสติก
              <br />
              &emsp;&emsp;(26) ซักรีด ย้อมสี
              <br />
              &emsp;&emsp;(27) การขายของที่ผู้ขายมิได้เป็นผู้ผลิต
              <br />
              &emsp;&emsp;(28) การส่งม้าเข้าแข่ง
              <br />
              &emsp;&emsp;(29) การรับสินไถ่ทรัพย์ที่ขายฝาก
              <br />
              &emsp;&emsp;(30) การรมยาง ยางแผ่น
              <br />
              &emsp;&emsp;(31) การฟอกหนัง
              <br />
              &emsp;&emsp;(32) การทำน้ำตาล
              <br />
              &emsp;&emsp;(33) การจับสัตว์น้ำ
              <br />
              &emsp;&emsp;(34) กิจการโรงเลื่อย
              <br />
              &emsp;&emsp;(35) การกลั่นหรือหีบน้ำมัน
              <br />
              &emsp;&emsp;(36) การใช้เช่าซื้อสังหาริมทรัพย์
              <br />
              &emsp;&emsp;(37) กิจการโรงสีข้าว
              <br />
              &emsp;&emsp;(38) เกษตรกรรมไม้ล้มลุกและธัญพืช
              <br />
              &emsp;&emsp;(39) การอบหรือบ่มยาสูบ
              <br />
              &emsp;&emsp;(40) การเลี้ยงสัตว์ทุกชนิด
              <br />
              &emsp;&emsp;(41) การฆ่าสัตว์จำหน่าย
              <br />
              &emsp;&emsp;(42) การทำนาเกลือ
              <br />
              &emsp;&emsp;(43) การขายเรือกำปั่นหรือเรือที่มีระวาง 6 ตันขึ้นไป{" "}
              <br />
              &emsp;&emsp;&emsp;เรือกลไฟ เรือยนต์
              <br />
              &emsp;&emsp;(44) เงินได้ประเภทที่มิได้ระบุใน (1) ถึง (43) <br />
              &emsp;&emsp;&emsp;ให้หักค่าใช้จ่ายตามความจำเป็นและสมควร
            </h1>
          </div>
        </div>

        <h1 className="text-error mt-10">
          คุณยังสามารถลดหย่อนภาษีได้อีก 60 วัน
        </h1>

        <div className="flex flex-row justify-center gap-10 mx-80">
          <button
            className="bg-[#979797] text-white font-bold w-[45%] py-2.5 my-10 rounded-2xl"
            onClick={() => window.open("/app/tax-reduction-2", "_parent")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
