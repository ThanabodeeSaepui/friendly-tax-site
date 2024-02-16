import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import FolderIcon from "../../assets/pngwing-52.png";
import AddFolder from "../../assets/add-folder.png";
import Footer from "../../components/Footer";

export default function FinancialRecord() {
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
          <FontAwesomeIcon icon={faFolder} size="lg" color="#740087" />
          <div className="ml-1 mr-3 text-secondary font-medium">Home</div>
        </div>

        <div className="grid grid-cols-3 items-center justify-items-center space-y-10">
          {/* row 1 */}
          <div className="mt-10">
            <img
              src={FolderIcon}
              className="w-32 cursor-pointer"
              onClick={() =>
                window.open("/app/financial-record-2024", "_parent")
              }
            />
            <h1 className="font-medium">2024</h1>
          </div>
          <div>
            <img
              src={FolderIcon}
              className="w-32 cursor-pointer"
              onClick={() =>
                window.open("/app/financial-record-2023", "_parent")
              }
            />
            <h1 className="font-medium">2023</h1>
          </div>
          <div>
            <img
              src={FolderIcon}
              className="w-32 cursor-pointer"
              onClick={() =>
                window.open("/app/financial-record-2022", "_parent")
              }
            />
            <h1 className="font-medium">2022</h1>
          </div>

          {/* row 2 */}
          <div>
            <img
              src={FolderIcon}
              className="w-32 cursor-pointer"
              onClick={() =>
                window.open("/app/financial-record-2021", "_parent")
              }
            />
            <h1 className="font-medium">2021</h1>
          </div>
          <div>
            <img
              src={FolderIcon}
              className="w-32 cursor-pointer"
              onClick={() =>
                window.open("/app/financial-record-2020", "_parent")
              }
            />
            <h1 className="font-medium">2020</h1>
          </div>
          <div>
            <img src={FolderIcon} className="w-32 cursor-pointer" />
            <h1 className="font-medium">Shared</h1>
          </div>

          {/* row 3 */}
          <div>
            <img src={AddFolder} className="w-32" />
            <h1 className="font-medium text-[#B3B3B3] mb-10">Add folder</h1>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
