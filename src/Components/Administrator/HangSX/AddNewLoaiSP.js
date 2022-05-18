/** @format */

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AddNewLoai } from "../../../Features/MenuSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const initState = {
  name: "",
};
export default function AddNewLoaiSP() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState(initState);
  const { name } = data;
  const dispatch = useDispatch();
  const onChangeText = (e) => {
    setData({
      name: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      dispatch(AddNewLoai(data));
      setTimeout(() => {
        toast("Thêm mới thành công");
        navigate(`/Admin/QuanLyHangSX`);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-[#fcf8f2]">
        <h2
          className="text-[#f73d3d] text-[40px] w-full text-center
          bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl"
        >
          Thêm DANH MỤC Mới
        </h2>
        <Link to="/Admin/QuanLyHangSX" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Back
          </button>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} className="px-[20px]">
          <div className="flex flex-row justify-between items-center p-[50px]">
            <div className="pt-2 flex flex-row justify-start items-center">
              <h3 htmlFor="" className="mr-[40px] text-[20px] font-[500]">
                Tên Hãng
              </h3>
              <div className="grid grid-flow-row grid-cols-1 gap-y-2">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChangeText}
                  placeholder="Họ và tên (bắt buộc)"
                  className="border p-[10px] mr-[20px] outline-none"
                />
                {errors.name && (
                  <span className="text-red-600 text-xs">
                    This field is not valid
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[23px]
                            font-medium text-xs leading-tight uppercase rounded shadow-md 
                            hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg
                             focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition 
                             duration-150 ease-in-out w-[30%] mb-3"
          >
            Thêm Mới
          </button>
        </form>
      </div>
    </div>
  );
}
