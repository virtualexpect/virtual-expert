import Image from "next/image";
import angle from "../../../images/Rectangle 266.svg";
import ring from "../../../images/service/Ellipse 261.svg";

const SectionTitle = ({ title, isBgWhite }) => {
  return (
    <div className="position-relative col-11 col-md-5 mx-auto">
      <div
        className={`border border-warning my-5 ring-title ${
          isBgWhite ? "bg-white" : "background-color-skyblue"
        }`}
      >
        <h2 className="text-center fs-28 lh-44 p-3 textCenterAfterEffect font-family-roboto">
          {title}
        </h2>
      </div>

      <div className="ring d-none d-md-block">
        <Image src={ring} alt="angle" />
      </div>

      <div className="angle d-none d-md-block">
        <Image src={angle} alt="angle" />
      </div>

      <div className="ring-mobile-size d-md-none d-block">
        <Image src={ring} height={50} width={50} alt="ring" />
      </div>

      <div className="angle-mobile-size d-md-none d-block">
        <Image src={angle} height={50} width={50} alt="ring" />
      </div>
    </div>
  );
};

export default SectionTitle;
