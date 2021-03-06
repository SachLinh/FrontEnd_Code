/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { getDanhMucByID, updateDanhMucByID } from "../../../Features/MenuSlice";
import { toast } from "react-toastify";

export default function UpdateLoaiSP() {
  const params = useParams();
  const DetailLoaiSP = useSelector((state) => state.listDanhMuc);
  const editLoaiSP = DetailLoaiSP.detaildele;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhMucByID(params.idCate));
  }, []);
  const initState = {
    name: "",
  };
  const init = {
    id: params.idCate,
  };
  const [data, setData] = useState(initState);
  const { name } = data;
  const onChangeText = (e) => {
    setData({
      name: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (data.name === "") {
        alert("Vui lòng nhập tên cần thay đổi");
      } else {
        dispatch(updateDanhMucByID({ init, data }));
        setData({
          name: "",
        });
        setTimeout(() => {
          toast("Thay đổi thành công");
          navigate(`/Admin/QuanLyHangSX`);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="bg-[#fcf8f2]">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl">
          Update DANH MỤC
        </h2>
        <Link to="/Admin/QuanLyHangSX" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Back
          </button>
        </Link>
        <form className="flex justify-between items-center p-[50px]" onSubmit={onSubmit}>
          <label htmlFor="">Tên Hãng</label>
          <input
            type="text"
            name="name"
            placeholder={editLoaiSP?.cata?.name}
            value={name}
			required
			pattern="[a-zA-Z]+[a-zA-Z ]+"
            className="border p-[10px] mr-[20px] outline-none"
            onChange={onChangeText}
          />
          <button
            type="submit"
            className="btn btn-outline-info"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
