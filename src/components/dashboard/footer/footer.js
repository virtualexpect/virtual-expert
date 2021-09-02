import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminFooter = () => {
  const [footerData, setFooterData] = useState({});
  const [footerLink, setFooterLink] = useState({});
  const [number, setNumber] = useState(0);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("https://sleepy-mesa-08037.herokuapp.com/footer")
      .then((res) => res.json())
      .then((data) => setFooterData(data[0]));

    fetch("https://sleepy-mesa-08037.herokuapp.com/footerLink")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]));
  }, [number]);

  const handleUpdateFooterInfo = (data) => {
    const description = data.description || footerData.description;
    const email = data.email || footerData.email;
    const skypeTitle = data.skypeTitle || footerData.skypeTitle;
    const skype = data.skype || footerData.skype;
    const whatsAppTitle = data.whatsAppTitle || footerData.whatsAppTitle;
    const whatsApp = data.whatsApp || footerData.whatsApp;
    const copyRightText = data.copyRightText || footerData.copyRightText;
    const _id = footerData._id;
    const address = data.address || footerData.address;

    fetch("https://sleepy-mesa-08037.herokuapp.com/footer/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        description,
        email,
        skypeTitle,
        skype,
        whatsAppTitle,
        whatsApp,
        _id,
        copyRightText,
        address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated Successful");
        setNumber(number + 1);
      });
  };

  const handleUpdateFooterLink = (data) => {
    const _id = footerLink._id;
    const facebook = data.facebook || footerLink.facebook;
    const instagram = data.instagram || footerLink.instagram;
    const telegram = data.telegram || footerLink.telegram;
    const twitter = data.twitter || footerLink.twitter;
    const youTube = data.youTube || footerLink.youTube;

    fetch("https://sleepy-mesa-08037.herokuapp.com/footerLink/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        _id,
        facebook,
        instagram,
        telegram,
        twitter,
        youTube,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated Successful");
        setNumber(number + 1);
      });
  };

  return (
    <>
      <div className="p-3 boxShadow me-3 my-2">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Edit Footer Here</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#footerPart1"
          />
        </div>
        <h6 className="mt-3 fs-18">Footer Description</h6>
        <p className="fs-14">{footerData.description}</p>
        <h6 className="mt-3 fs-18">Copy Right Text</h6>
        <p className="fs-14">{footerData?.copyRightText}</p>
        <h6 className="fs-18 mt-3">Contact Info</h6>
        <label htmlFor="email" className="d-block my-2">
          Email
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="email"
          value={footerData.email}
        />
        <label htmlFor="skype" className="d-block my-2">
          Skype Title
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="skypeTitle"
          value={footerData.skypeTitle}
        />
        <label htmlFor="skype" className="d-block my-2">
          Skype
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="skype"
          value={footerData.skype}
        />
        <label htmlFor="whatsApp" className="d-block my-2">
          WhatsApp Title
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="whatsAppTitle"
          value={footerData.whatsAppTitle}
        />
        <label htmlFor="whatsApp" className="d-block my-2">
          WhatsApp
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="whatsApp"
          value={footerData.whatsApp}
        />
        <label htmlFor="address" className="d-block my-2">
          Address
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="address"
          value={footerData?.address}
        />
        <div className="d-flex justify-content-between my-4">
          <h6 className="fs-18">Update Social Link</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#footerPart2"
          />
        </div>
        <label htmlFor="facebook" className="d-block my-2">
          Facebook
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="facebook"
          value={footerLink.facebook}
        />
        <label htmlFor="instagram" className="d-block my-2">
          Instagram
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="instagram"
          value={footerLink.instagram}
        />
        <label htmlFor="telegram" className="d-block my-2">
          Telegram
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="telegram"
          value={footerLink.telegram}
        />
        <label htmlFor="twitter" className="d-block my-2">
          Twitter
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="twitter"
          value={footerLink.twitter}
        />
        <label htmlFor="youTube" className="d-block my-2">
          YouTube
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="youTube"
          value={footerLink?.youTube}
        />
      </div>

      {/* modal 1 start here */}
      <div
        className="modal fade"
        id="footerPart1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Footer Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateFooterInfo)}>
                <label htmlFor="description">Description</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.description}
                  {...register("description")}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="copyRightText">Copy Right Text</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData?.copyRightText}
                  {...register("copyRightText")}
                  name="copyRightText"
                  id="copyRightText"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="email">Email</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.email}
                  {...register("email")}
                  name="email"
                  id="email"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="skypeTitle">Skype Title</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.skypeTitle}
                  {...register("skypeTitle")}
                  name="skypeTitle"
                  id="skypeTitle"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="skype">Skype</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.skype}
                  {...register("skype")}
                  name="skype"
                  id="skype"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="whatsAppTitle">WhatsApp Title</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.whatsAppTitle}
                  {...register("whatsAppTitle")}
                  name="whatsAppTitle"
                  id="whatsAppTitle"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="whatsApp">WhatsApp</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.whatsApp}
                  {...register("whatsApp")}
                  name="whatsApp"
                  id="whatsApp"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="address">Address</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData?.address}
                  {...register("address")}
                  name="address"
                  id="address"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* modal 2 start here */}

      <div
        className="modal fade"
        id="footerPart2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Footer Link
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateFooterLink)}>
                <label htmlFor="facebook">Facebook</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.facebook}
                  {...register("facebook")}
                  name="facebook"
                  id="facebook"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="instagram">Instagram</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.instagram}
                  {...register("instagram")}
                  name="instagram"
                  id="instagram"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="telegram">Telegram</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.telegram}
                  {...register("telegram")}
                  name="telegram"
                  id="telegram"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="twitter">Twitter</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.twitter}
                  {...register("twitter")}
                  name="twitter"
                  id="twitter"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="twitter">YouTube</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.youTube}
                  {...register("youTube")}
                  name="youTube"
                  id="youTube"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFooter;
