import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FolderIcon from "../../assets/pngwing-52.webp";
import AddFolder from "../../assets/add-folder.webp";
import Footer from "../../components/Footer";

export default function FinancialRecord2020() {
  return (
    <>
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">
            Financial Record
          </h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>

        <div className="flex flex-row justify-start items-center ml-[4%] my-10">
          {/* Home */}
          <div
            className="cursor-pointer flex flex-row"
            onClick={() => window.open("/app/financial-record", "_parent")}
          >
            <FontAwesomeIcon icon={faFolder} size="lg" color="#7C7C7C" />
            <div className="ml-1 mr-3 text-[#7C7C7C] font-medium">Home</div>
          </div>

          <FontAwesomeIcon icon={faChevronRight} size="lg" color="#7C7C7C" />

          {/* 2024 */}
          <FontAwesomeIcon
            className="ml-3"
            icon={faFolder}
            size="lg"
            color="#740087"
          />
          <div className="ml-1 mr-3 text-secondary font-medium">2020</div>
        </div>

        <div className="grid grid-cols-3  justify-items-center space-y-10">
          {/* row 1 */}
          <div className="mt-10">
            <img
              src={FolderIcon}
              className="w-32 cursor-pointer"
              onClick={() =>
                window.open("/app/financial-record-tax-reduction-20", "_parent")
              }
            />
            <h1 className="font-medium">ลดหย่อนภาษี</h1>
          </div>
          <div>
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">เอกสารการเงิน</h1>
          </div>
          <div>
            <img src={AddFolder} className="w-32" />
            <h1 className="font-medium text-[#B3B3B3] mb-10">Add folder</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

