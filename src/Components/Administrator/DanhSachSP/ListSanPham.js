/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllSanPham } from "../../../Features/SanPhamSlice";
import PageProd from "../Pagination/PageProd";
import { useDispatch, useSelector } from "react-redux";
import { getAllDanhMuc } from "../../../Features/MenuSlice";

export default function ListSanPham() {
  const dispatch = useDispatch();
  const listSanPhams = useSelector((state) => state.listSanPham);
  const listProd = listSanPhams.listSanPham.product;
  const listhangsX = useSelector(state => state.listDanhMuc)
  useEffect(() => {
    dispatch(getAllSanPham());
    dispatch(getAllDanhMuc());
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // Giá trị sắp xếp
  const SORT = {
    TangID: "1",
    TangTen: "2",
    TangGia: "3",
    TangDungLuong: "4",
    TangLoaiID: "5",
    GiamID: "6",
    GiamTen: "7",
    GiamGia: "8",
    GiamDungLuong: "9",
    GiamLoaiID: "10",
  };
  const [sortId, setSortId] = useState(SORT.TangID);
  // Chuyển đổi giá trị sắp xếp
  const handleSort = (value) => {
    setSortId(value);
  };

  // sắp xếp
  const [searchName, setSearchName] = useState("");
  const findName = function (list) {
    if (list) {
      var res = [...list];
    }
    if (searchName) {
      res = res.filter((el) =>
        el.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    return res;
  };
  const sortData = function (list) {
    if (list) {
      var res = [...list];
    }

    if (sortId === "1") {
      res.sort((a, b) => (a.Name > b.Name ? 1 : -1));
    } else {
      if (sortId === "2") {
        res.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        if (sortId === "3") {
          res.sort((a, b) => (parseInt(a.cost) > parseInt(b.cost) ? 1 : -1));
        } else {
          if (sortId === "4") {
            res.sort((a, b) =>
              parseInt(a.capacity) > parseInt(b.capacity) ? 1 : -1
            );
          } else {
            if (sortId === "5") {
              res.sort((a, b) =>
                parseInt(a.LoaiId) > parseInt(b.LoaiId) ? 1 : -1
              );
            } else {
              if (sortId === "6") {
                res.sort((a, b) => (parseInt(a.id) < parseInt(b.id) ? 1 : -1));
              } else {
                if (sortId === "8") {
                  res.sort((a, b) =>
                    parseInt(a.cost) < parseInt(b.cost) ? 1 : -1
                  );
                } else {
                  if (sortId === "9") {
                    res.sort((a, b) =>
                      parseInt(a.capacity) < parseInt(b.capacity) ? 1 : -1
                    );
                  } else {
                    if (sortId === "10") {
                      res.sort((a, b) =>
                        parseInt(a.LoaiId) < parseInt(b.LoaiId) ? 1 : -1
                      );
                    } else {
                      if (sortId === "7") {
                        res.sort((a, b) => (a.name < b.name ? 1 : -1));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return res;
  };

  // get ccurrent Page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  if (listProd) {
    var currentPosts = listProd.slice(indexOfFirstPost, indexOfLastPost);
  }
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  // function paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (listProd) {
    var getListSanPham = sortData(findName(currentPosts)).map((item, index) => {
      return (
        <tr key={index} className="text-center">
          <td className="border border-slate-400">{item.Name}</td>
          <td className="border border-slate-400">
            {listhangsX.listCata.catas ? listhangsX.listCata.catas.map((itemHangSX)=>{
              if(itemHangSX._id === item.ID_Cata)
              {
                return itemHangSX.name
              }
            }) : ""}
            </td>
          <td className="border border-slate-400">
            <img alt="" className="w-[100px]" src={item.Image}></img>
          </td>
          <td className="border border-slate-400"> {formatPrice(item.Price)}</td>
          <td className="border border-slate-400">{item.Color}</td>
          <td className="border border-slate-400">{item.Count}</td>

          <td className="border border-slate-400 w-[70px] text-center">
            <Link to={`/Admin/QuanLySanPham/Delete/${item._id}`}>
              <button type="button" className="btn btn-warning">
                Delete
              </button>
            </Link>
          </td>
          <td className="border border-slate-400  w-[70px] text-center">
            <Link to={`/Admin/QuanLySanPham/Detail/${item._id}`}>
              <button className="btn btn-outline-dark">Chi Tiết</button>
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="w-full bg-[#fcf8f2]">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center  bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  p-[15px] rounded-xl">
        QUẢN LÝ SẢN PHẨM
      </h1>
      <Link to={`/Admin/QuanLySanPham/AddProd`}>
        <button className="btn btn-outline-success mx-[20px] my-4">
          Thêm Sản Phẩm mới
        </button>
      </Link>
      {/* Tim kiem */}
      <div className="flex flex-row justify-start items-center px-[20px] mb-[20px]">
        <label className="mr-[30px] w-32">Tên tìm kiếm</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            id=""
            name=""
            placeholder="Tên cần tìm"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-[15px] border outline-none form-control"
          />
        </div>
      </div>
      {/* button sap xep */}
      <div className="w-[30%] flex flex-row justify-between items-center p-[20px]">
        <button
          type="button"
          className="btn btn-primary btn-sm text-[#fc3737] rounded-xl"
          onClick={() => {
            handleSort(SORT.TangGia);
          }}
        >
          <i className="fa-solid fa-arrow-up-wide-short mr-[5px] text-black"></i>
          Giá
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm text-[#fc3737] rounded-xl"
          onClick={() => {
            handleSort(SORT.GiamGia);
          }}
        >
          <i className="fa-solid fa-arrow-down-short-wide mr-[5px] text-black"></i>
          Giá
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm text-[#fc3737] rounded-xl"
          onClick={() => {
            handleSort(SORT.TangTen);
          }}
        >
          <i className="fa-solid fa-arrow-up-wide-short mr-[5px] text-black"></i>
          Tên A - Z
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm text-[#fc3737] rounded-xl"
          onClick={() => {
            handleSort(SORT.GiamTen);
          }}
        >
          <i className="fa-solid fa-arrow-down-short-wide mr-[5px] text-black"></i>
          Tên Z - A
        </button>
      </div>
      <div className="w-full p-[20px]">
        <table className="table table-hover leading-[40px]">
          <thead>
            <tr className="text-center">
              <th className="border border-slate-400">Tên sản phẩm</th>
              <th className="border border-slate-400">Hãng SX</th>
              <th className="border border-slate-400">Hình ảnh</th>
              <th className="border border-slate-400">Gía</th>
              <th className="border border-slate-400">Màu sắc</th>
              <th className="border border-slate-400">Số lượng</th>
              <th className="border border-slate-400">Xóa</th>
              <th className="border border-slate-400">Chi tiết</th>
            </tr>
          </thead>
          <tbody className="font-Roboto font-[500px]">
            {listProd ? getListSanPham : ""}
          </tbody>
        </table>
      </div>
      {listProd ? (
        <PageProd
          postsPerPage={postsPerPage}
          totalPosts={listProd.length}
          paginate={paginate}
        />
      ) : (
        ""
      )}
    </div>
  );
}
