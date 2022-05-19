import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function YourAccount() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setformData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const { currentPassword, newPassword, confirmNewPassword } = formData;
  const onChangePassMoi = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const UpdateAccountPass = async (e) => {
    e.preventDefault();
    if (newPassword === confirmNewPassword) {
      try {
        await axios.post(
          `http://localhost:5000/users/${user?.user?._id}/ChangePassword`,
          formData
        );
        toast("Change password success");
      } catch (error) {
        toast("Change password fail");
        console.log(error);
      }
    }
    else{
      toast.error("Password và Password confirm chưa đúng");
    }
  };
  return (
    <div
      className="col-start-2 col-span-3 border-[1px] border-gray-300
     rounded-xl text-center md:mt-[0px] mt-[15px] h-[300px] px-[20px]"
    >
      <p className="text-[15px] md:text-[25px] mx-auto text-red-600">
        Xin chào
      </p>
      <h2 className="font-semibold text-red-600 text-sm md:text-3xl">
        {user?.user ? user?.user?.name : ""}
      </h2>
      {user?.user ? (
        <div className="w-full flex flex-col justify-between items-center">
          <div className="w-full flex flex-row justify-around items-center">
            <div className="w-[250px]">
              <p className="text-sm lg:text-lg md:text-md">Email</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="font-semibold text-[12px] lg:text-lg md:text-[14px] sm:text-[13px] break-words">
                {user.user.email}
              </p>
            </div>
            <div className="w-[250px]">
              <p className="text-sm lg:text-lg md:text-md">Phone</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p className="font-semibold text-[12px] lg:text-lg md:text-[14px] sm:text-[13px]">
                {user.user.phone}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-around items-center mt-[20px] h-[100px]">
            <form
              onSubmit={UpdateAccountPass}
              className="w-full flex flex-col md:flex-row justify-center items-center
           md:items-center text-[12px] md:text-[17px] font-[400] md:font-[500]"
            >
              <div className="mt-[40px] md:mt-[0px] mb-[20px]">
                <label className="w-[150px]">Old Password</label>
                <input
                  type="password"
                  className="pl-[8px] border outline-none rounded-xl"
                  name="currentPassword"
                  value={currentPassword}
                  required
                  minLength={6}
                  pattern='^(?=\D*\d)(?=[^A-Z]*[A-Z])\S{6,15}$'
                  onChange={onChangePassMoi}
                />
              </div>
              <div className="mb-[20px]">
                <label className="w-[150px]">New Password</label>
                <input
                  type="password"
                  className="pl-[8px] border outline-none rounded-xl"
                  name="newPassword"
                  value={newPassword}
                  required
                  minLength={6}
                  pattern='^(?=\D*\d)(?=[^A-Z]*[A-Z])\S{6,15}$'
                  onChange={onChangePassMoi}
                />
              </div>
              <div className="mb-[20px]">
                <label className="w-[150px]">Confirm Password</label>
                <input
                  type="password"
                  className="pl-[8px] border outline-none rounded-xl"
                  name="confirmNewPassword"
                  value={confirmNewPassword}
                  required
                  minLength={6}
                  pattern='^(?=\D*\d)(?=[^A-Z]*[A-Z])\S{6,15}$'
                  onChange={onChangePassMoi}
                />
              </div>
              <input
                type="submit"
                className="btn btn-success text-[#050505] text-[12px] md:text-[17px]"
                value="Change Password"
              />
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
