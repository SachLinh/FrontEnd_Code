import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { getPromotion } from "../../../Features/PromotionSlice";
import { format } from "date-fns";

export default function PromotionDetail() {
  const params = useParams();
  const dispatch = useDispatch()
  const data = useSelector(state => state.listPromotion)

  useEffect(() => {
   dispatch(getPromotion(params.idPromotion))
  }, []);
  return (
    <div className="">
      <div className="bg-[#fcf8f2]">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  p-[15px] rounded-xl">
          Chi tiết Khuyến mại
        </h2>
        <Link to={`/Admin/QuanLySanPham/Detail/${params.idSanPham}`} className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Back
          </button>
        </Link>
        <div className="p-[20px] w-full">
        <table className="px-[20px] mt-[20px] w-full">
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Giá trị</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailPromotion?.promotion?.value}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ngày bắt đầu</label>
            </th>
            <td className="w-5/6 pl-[10px] h-[50px] border border-slate-300">
              {data?.detailPromotion?.promotion?.DateOfStart ? format(new Date(data?.detailPromotion?.promotion?.DateOfStart), "MMMM do, yyyy H:mma") : data?.detailPromotion?.promotion?.DateOfStart}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ngày hết hạn</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
            {data?.detailPromotion?.promotion?.DateOfEnd ? format(new Date(data?.detailPromotion?.promotion?.DateOfEnd), "MMMM do, yyyy H:mma") : data?.detailPromotion?.promotion?.DateOfEnd}
            </td>
          </tr>      
        </table>
        </div>
      </div>
    </div>
  );
}
