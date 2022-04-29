import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllHoaDon } from "../../../Features/HoaDonSlice";
import { useDispatch, useSelector } from "react-redux";
import PageProd from "../Pagination/PageProd";
import { getAllUser } from "../../../Features/AuthSlice";
import { format } from "date-fns";

export default function QuanLyHoaDon() {
  const dispatch = useDispatch();
  const listHoaDons = useSelector((state) => state.listHoaDon);
  const listUser = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllHoaDon());
    dispatch(getAllUser())
  }, []);
  // page
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  // Giá trị sắp xếp
  const SORT = {
    up: "2",
    down: "3",
  };
  const [sortId, setSortId] = useState(SORT.up);
  // Hiển thị giá trị trên màn hình
  const getSortAge = () => {
    if (sortId === SORT.down) {
      return `^`;
    }
    if (sortId === SORT.up) {
      return "^";
    }
  };
  // Chuyển đổi giá trị sắp xếp
  const handleSort = () => {
    if (sortId === SORT.down) {
      setSortId(SORT.up);
    } else {
      if (sortId === SORT.up) {
        setSortId(SORT.down);
      }
    }
  };
  // format Price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  //get ccurrent Page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  if(listHoaDons?.listHoaDon?.invoices){
      var currentPosts = listHoaDons?.listHoaDon?.invoices;
      var getlistHoaDon =
    currentPosts.slice(indexOfFirstPost, indexOfLastPost).map((item, index) => {
    return (
      <tr key={index}>
        {listUser?.listUser?.users ? listUser?.listUser?.users.map((user)=>{
          if(item.ID_User === user._id)
          {
            return(
                <table className="w-full">
                  <tr>
                    <th className="p-1">Họ tên khách hàng</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th className="p-1">Số điện thoại</th>
                    <td>{user.phone}</td>
                  </tr>
                </table>
            )
          }
        }) : ""}
      <td className="border border-slate-400">{formatPrice(item.Total)}</td>
        <td className="border border-slate-400">
        {new Date(item.DateOfCreate).toLocaleDateString("vi-VI")}
        </td>
        <td className="border border-slate-400">{item.Address}</td>
        <td className="border border-slate-400 text-center">
        {item?.Status === false ? "Đang chờ" : "Xác Nhận"}
        </td>
        <td className="border border-slate-400 w-[170px] text-center">
          <Link to={`/Admin/ChiTietHoaDon/${item._id}`}>
            <button type="button" className="btn btn-warning">
              Chi tiết
            </button>
          </Link>
        </td>
      </tr>
    );
  });
  }

  //function paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render map data

  return (
    <div className="w-full bg-[#fcf8f2]">
      <h1
        className="text-[#f73d3d] text-[40px] w-full text-center
       bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl"
      >
        QUẢN LÝ HÓA ĐƠN
      </h1>
      <div className="p-[20px]">
              <table className="table table-hover leading-[40px] border">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-400">Khách hàng</th>
            <th className="border border-slate-400">Tổng tiền</th>
            <th className="border border-slate-400">Ngày đặt hàng
            </th>
            <th className="border border-slate-400">Địa chỉ giao hàng</th>
            <th className="border border-slate-400">Trạng thái đơn hàng</th>
            <th className="border border-slate-400">Chi tiết</th>
          </tr>
        </thead>
        <tbody className="font-Roboto font-[500px]">
          {listHoaDons?.listHoaDon?.invoices?  getlistHoaDon : ""}
        </tbody>
      </table>
      <PageProd
        postsPerPage={postsPerPage}
        totalPosts={listHoaDons?.listHoaDon?.invoices ? listHoaDons?.listHoaDon?.invoices.length : ""}
        paginate={paginate}
      />
      </div>

    </div>
  );
}
