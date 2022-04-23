import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThongSoType } from "../../../TypeState/ThongTinSP";
import ThongTinSp from "../../HomeTrangChu/ThongTinSp";
import ListSanPham from "../ChiTietDanhMuc/ListSanPham";

export default function QLThongTinSp() {
  useEffect(() => {
    getListThongSo();
  }, []);
  const [listTTSP, setListTTSP] = useState<ThongSoType[]>([]);
  const params = useParams();
  const getListThongSo = async () => {
    try {
      const resProd = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}/SanPham/${params.idSanPham}/ThongSoSanPham`
      );
      setListTTSP(resProd.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        Thông số sản phẩm
      </h1>
      <table className="table table-hover leading-[40px] w-1/2 m-auto">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
          <tr className="text-center">
            <th className="border border-slate-400">Kích thước</th>
            <td className="border border-slate-400">{}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
