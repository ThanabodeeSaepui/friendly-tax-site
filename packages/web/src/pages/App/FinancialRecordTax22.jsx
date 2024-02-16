import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FolderIcon from "../../assets/pngwing-52.png";
import AddFolder from "../../assets/add-folder.png";
import Footer from "../../components/Footer";

export default function FinancialRecordTax22() {
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

          {/* 2022 */}
          <div
            className="cursor-pointer flex flex-row ml-3"
            onClick={() => window.open("/app/financial-record-2022", "_parent")}
          >
            <FontAwesomeIcon icon={faFolder} size="lg" color="#7C7C7C" />
            <div className="ml-1 mr-3 text-[#7C7C7C] font-medium">2022</div>
          </div>

          <FontAwesomeIcon icon={faChevronRight} size="lg" color="#7C7C7C" />

          {/* tax reduction */}
          <FontAwesomeIcon
            className="ml-3"
            icon={faFolder}
            size="lg"
            color="#740087"
          />
          <div className="ml-1 mr-3 text-secondary font-medium">
            ลดหย่อนภาษี
          </div>
        </div>

        <div className="grid grid-cols-3  justify-items-center space-y-10">
          {/* row 1 */}
          <div className="mt-10">
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">40-1</h1>
          </div>
          <div>
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">40-2</h1>
          </div>
          <div>
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">40-3</h1>
          </div>

          {/* row 2 */}
          <div className="mt-10">
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">40-4</h1>
          </div>
          <div>
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">40-5</h1>
          </div>
          <div>
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">40-6</h1>
          </div>

          {/* row 3 */}
          <div className="mt-10">
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">40-7</h1>
          </div>
          <div>
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium mb-10">40-8</h1>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

