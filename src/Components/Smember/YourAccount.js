import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Features/AuthSlice";

export default function YourAccount() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [formData, setformData] = useState({
    password: ""
  });
  const [oldPass, setOldPass] = useState({passCu:""})
  const {password} = formData
  const {passCu} = oldPass
  const init = {
    id:user?.user?._id
  }
  const dispatch = useDispatch()
  const onChangePassMoi = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };console.log(password);
  const onChangePassCu = (e) => {
    setOldPass({
      ...oldPass,
      [e.target.name]: e.target.value,
    });
  };
  const UpdateAccountPass = async (e) => {
    e.preventDefault();
    if(user?.user)
    {
      dispatch(updateUser({init, formData}))
    }
    
  };
  return (
    <div className="col-start-2 col-span-3 border-[1px] border-gray-300 rounded-xl text-center md:mt-[0px] mt-[15px]">
      <p className="text-[25px] mx-auto text-red-600">Xin chào</p>
      <h2 className="font-semibold text-red-600 text-3xl">{user?.user ? user?.user?.name : ""}</h2>
      {user?.user ? 
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex flex-row justify-start items-center">
          <div className="w-[300px]">
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
          <div className="w-[300px]">
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
        <div className="h-[50px]"></div>
        {/* <form className="form w-full flex flex-row justify-start items-end mb-[50px]" onSubmit={UpdateAccountPass}>
          <div className="w-[300px] flex flex-col justify-around items-center">
            <label
              htmlFor="inputPassword"
              className="text-sm lg:text-lg md:text-md"
            >
              Password
            </label>
            <i className="fa-solid fa-key text-[50px] h-12 w-12 my-[5px] text-red-600"></i>
            <input
              type="password"
              className="form-control w-[80%]"
              name="passCu"
              placeholder="Password Old"
              value={passCu}
              onChange={onChangePassCu}
              required
            />
          </div>
          <div className="w-[300px] flex flex-col justify-around items-center">
            <label
              htmlFor="inputPasswordMoi"
              className="text-sm lg:text-lg md:text-md"
            >
              Password Moi
            </label>
            <i className="fa-brands fa-keycdn  text-[50px] h-12 w-12 my-[5px] text-red-600"></i>
            <input
              type="password"
              className="form-control w-[80%]"
              name="password"
              value={password}
              placeholder="Password new"
              required
              onChange={onChangePassMoi}
              pattern="[0-9a-zA-Z]{6}"
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary text-[#f53939]"
            value="Đổi mật khẩu"
          />
        </form> */}
      </div>
      : ""}
     
    </div>
  );
}
