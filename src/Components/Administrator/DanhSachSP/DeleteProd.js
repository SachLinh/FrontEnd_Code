import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteSanPham, detailSP } from "../../../Features/SanPhamSlice";

export default function DeleteProd() {
  const params = useParams();
  const dispatch = useDispatch()
  const data = useSelector(state => state.listSanPham)
  const sanPham = data.detailSP
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detailSP(params.idSanPham))
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(deleteSanPham(params.idSanPham))
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLySanPham`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="bg-[#fcf8f2]">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  p-[15px] rounded-xl">
          Delete Sản phẩm
        </h2>
        <Link to="/Admin/QuanLySanPham" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
        <div className="w-full p-[20px]">
          <table className="p-[20px] mt-[20px] w-full">
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.id}
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Name</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.name}
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Avatar</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <img src={sanPham?.avatar} alt="" className="w-[100px]" />
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">cost</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.cost}
            </td>
          </tr>
          <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Capacity</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.capacity}
            </td>
          </tr>
         <tr>
           <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID Loại</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
            {sanPham?.LoaiId}
            </td>
          </tr>
        </table>
        </div>
        
        <button
          type="button"
          className="btn btn-outline-info mb-[10px] ml-[20px] "
          onClick={onSubmit}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
