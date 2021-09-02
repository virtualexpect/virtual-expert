import Image from "next/image";
import React from "react";
import amazonImg from "../../../../images/home/amazon-marketing-service-virtual-experts-limited.svg";
import styles from "./amazon.module.css";

const Amazon = ({ amazonData }) => {
  return (
    <>
      <div className={`${styles.amazonContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 pb-5 pb-md-0 px-5">
              <Image
                src={amazonImg}
                alt="amazon-marketing-service-virtual-experts-limited"
                title="amazon-marketing-service-virtual-experts-limited"
              />
            </div>
            <div className="col-md-6 mt-md-2">
              <h2 className="fs-28 textLeftAfterEffect font-family-roboto lh-44">
                {amazonData.title}
              </h2>
              <p className="fs-15 mt-4 lh-30 text-justify">
                {amazonData.description_part_1}
              </p>
              <p className="fs-15 mt-4 lh-30 text-justify">
                {amazonData.description_part_2}
              </p>
              <p className="fs-15 mt-4 lh-30 text-justify">
                {amazonData.description_part_3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amazon;
