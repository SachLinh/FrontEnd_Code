import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { getThongSo } from "../../../Features/ThongSoSlice";

export default function ThongSoDetail() {
  const params = useParams();
  const dispatch = useDispatch()
  const data = useSelector(state => state.listThongSo)

  useEffect(() => {
   dispatch(getThongSo(params.idThongSo))
  }, []);
  return (
    <div className="">
      <div className="bg-[#fcf8f2]">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  p-[15px] rounded-xl">
          Chi tiết Thông Số
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
              <label htmlFor="">Bluetooth</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.Bulutooth}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camera Sau</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.CameraSau}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camera Trước</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.CameraTruoc}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Chíp xử lý</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.ChipXuLy}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Công Nghệ Màn hình</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.CongNgheManHinh}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Kích thước màn hình</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.KichThuocManHinh} inches
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Hệ điều hành</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.HeDieuHanh}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Pin</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.Pin}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">RAM</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.RAM} GB
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ROM</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.ROM} GB
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">SIM</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.SIM}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Tiện ích khác</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.TienIchKhac}
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Trọng lượng</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.TrongLuong} g
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">WIFI</label>
            </th>
            <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
             { data?.detailThongSo?.specification?.Wifi}
            </td>
          </tr>
          
        </table>
        </div>
      </div>
    </div>
  );
}
