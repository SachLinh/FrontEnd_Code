/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllDanhMuc } from "../../../Features/MenuSlice";
import { getAllPromotion } from "../../../Features/PromotionSlice";
import { detailSP, UpdateSP } from "../../../Features/SanPhamSlice";

export default function ChiTietSanPham() {
  const params = useParams();
  const dispatch = useDispatch();
  // san pham
  const data = useSelector((state) => state.listSanPham);
  const sanPham = data?.detailSP?.product;
  // hang san xuat
  const listhangsX = useSelector((state) => state.listDanhMuc);
  const listPros = useSelector((state) => state.listPromotion);
  useEffect(() => {
    dispatch(detailSP(params.idSanPham));
    dispatch(getAllDanhMuc());
	dispatch(getAllPromotion())
    getData();
  }, [params]);
  // Update
  const [dataUpdate, setDataUpDate] = useState({});
  const init = {
    id: params.idSanPham,
  };
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/products/${params.idSanPham}`
      );
      const initState = {
        ID_Cata: res.data.product?.ID_Cata,
        ID_Promotion: res.data.product?.ID_Promotion,
        Name: res.data.product?.Name,
        Image: res.data.product?.Image,
        Price: res.data.product?.Price,
        Color: res.data.product?.Color,
        Endow: res.data.product?.Endow,
        Count: res.data.product?.Count,
      };
      setDataUpDate(initState);
    } catch (error) {
      console.log(error);
    }
  };
  const { Color, Count, ID_Cata, ID_Promotion, Name, Price, Endow, Image } =
    dataUpdate;
  const navigate = useNavigate();
  const onChangeText = (e) => {
    setDataUpDate({
      ...dataUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(UpdateSP({ init, dataUpdate }));
      alert("Thay đổi thành công");
      navigate(`/Admin/QuanLySanPham`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="bg-[#fcf8f2]">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  p-[15px] rounded-xl">
          Chi tiết Sản phẩm
        </h2>
        <Link to="/Admin/QuanLySanPham" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Back
          </button>
        </Link>
        <form className="p-[20px] w-full" onSubmit={onSubmit}>
          <table className="px-[20px] mb-[20px] mt-[20px] w-full">
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Name</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  name="Name"
                  required
                  onChange={onChangeText}
                  value={Name}
                />
              </td>
            </tr>
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Avatar</label>
              </th>
              <td className="w-5/6 pl-[10px] h-[50px] border border-slate-300">
                <img src={sanPham?.Image} alt="" className="w-[100px]" />
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Image"
                  name="Image"
                  required
                  onChange={onChangeText}
                  value={Image}
                />
              </td>
            </tr>
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">cost</label>
              </th>
              <td className="w-5/6 pl-[10px] h-[50px] border border-slate-300">
                <input
                  type="number"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Price"
                  name="Price"
                  required
                  onChange={onChangeText}
                  value={Price}
                />
              </td>
            </tr>
            <tr>
              <th className="border pl-[10px] border-slate-300">
                {" "}
                <label htmlFor="">Color</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Color"
                  name="Color"
                  required
                  onChange={onChangeText}
                  value={Color}
                />
              </td>
            </tr>
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Endow</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Endow"
                  name="Endow"
                  required
                  onChange={onChangeText}
                  value={Endow}
                />
              </td>
            </tr>
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Count</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="number"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Count"
                  name="Count"
                  required
                  onChange={onChangeText}
                  value={Count}
                />
              </td>
            </tr>
            {/* Hang SX */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Hãng SX</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <select
                  name="ID_Cata"
                  value={ID_Cata}
                  className="border p-[10px] mr-[20px] outline-none w-full"
                  onChange={onChangeText}
                >
                  {listhangsX.listCata.catas
                    ? listhangsX.listCata.catas.map((item, index) => {
                        return (
                          <option key={index} value={item._id}>
                            {item.name}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </td>
            </tr>
            {/* Button Thông số */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Thông số lỹ thuật</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                {sanPham?.ID_Spec ? (
                  <Link
                    to={`/Admin/QuanLySanPham/Detail/Spacification/${sanPham?.ID_Spec}/${params.idSanPham}`}
                  >
                    <button type="button" className="btn btn-warning">
                      Thông số
                    </button>
                  </Link>
                ) : (
                  <Link
                    to={`/Admin/QuanLySanPham/Detail/CreateSpect/${params.idSanPham}`}
                  >
                    Bạn chưa cập nhật thông số{" "}
                    <button type="button" className="btn btn-warning">
                      Cập nhật thông số
                    </button>
                  </Link>
                )}
              </td>
            </tr>
            {/* button Khuyen mai */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Khuyến mại</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <Link
                  to={`/Admin/QuanLySanPham/Detail/Promotion/${sanPham?.ID_Promotion}/${params.idSanPham}`}
                >
                  <button type="button" className="btn btn-warning">
                    Khuyễn mại
                  </button>
                </Link>
				<select
                  name="ID_Promotion"
                  value={ID_Promotion}
                  className="border p-[10px] mr-[20px] outline-none w-full"
                  onChange={onChangeText}
                >
                  {listPros.listPromotion.pros
                    ? listPros.listPromotion.pros.map((item, index) => {
                        return (
                          <option key={index} value={item._id}>
                            {item.value} ** Từ ngày: {new Date(item.DateOfStart).toLocaleDateString('vi-VI')} ** Đến ngày: {new Date(item.DateOfEnd).toLocaleDateString('vi-VI')}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </td>
            </tr>
          </table>
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[23px]
                            font-medium text-xs leading-tight uppercase rounded shadow-md 
                            hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg
                             focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition 
                             duration-150 ease-in-out w-[30%] mb-3"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
