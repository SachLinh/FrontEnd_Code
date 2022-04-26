/** @format */

import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAllDanhMuc } from "../../../Features/MenuSlice";
import { getAllPromotion } from "../../../Features/PromotionSlice";
import { AddNewSP } from "../../../Features/SanPhamSlice";
import { format } from "date-fns";

const initState = {
  ID_Cata: "",
  ID_Promotion: "",
  Name: "",
  Image: "",
  Price: "",
  Color: "",
  Endow: "",
  Count: "",
};
export default function AddProd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listhangsX = useSelector((state) => state.listDanhMuc);
  // Promotion
  const listPromotion = useSelector((state) => state.listPromotion);

  useEffect(() => {
    dispatch(getAllDanhMuc());
    dispatch(getAllPromotion());
  }, []);

  const [data, setData] = useState(initState);
  const { Color, Count, ID_Cata, ID_Promotion, Name, Price, Endow, Image } =
    data;
  const onChangeText = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(AddNewSP({ data }));
      alert("Thêm mới thành công");
      navigate(`/Admin/QuanLySanPham`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="bg-[#fcf8f2]">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl">
          Add Sản Phẩm Mới
        </h2>
        <Link to="/Admin/QuanLySanPham" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i> Back
          </button>
        </Link>
        <div className="w-full p-[20px]">
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
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
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
                <label htmlFor="">Cost</label>
              </th>
              <td className="w-5/6 pl-[10px] h-[50px] border border-slate-300">
                <input
                  type="number"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 
                             focus:bg-white focus:border-blue-600 focus:outline-none"
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
                  <option value="" className="p-[20px]">
                  *** Vui lòng chọn ***
                  </option>
                  {listhangsX.listCata.catas
                    ? listhangsX.listCata.catas.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item._id}
                            className="p-[20px]"
                          >
                            {item.name}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </td>
            </tr>
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Khuyến mại</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <select
                  name="ID_Promotion"
                  value={ID_Promotion}
                  className="border p-[10px] mr-[20px] outline-none w-full"
                  onChange={onChangeText}
                >
                  <option value="" className="p-[20px]">
                   *** Vui lòng chọn ***
                  </option>
                  {listPromotion.listPromotion.pros
                    ? listPromotion.listPromotion.pros.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item._id}
                            className="mb-[20px]"
                          >
                            Khuyến mại: {item.value}, Ngày bắt đầu:{" "}
                            {format(
                              new Date(item.DateOfStart),
                              "MMMM do, yyyy H:mma"
                            )}
                            , Ngày hết hạn:{" "}
                            {format(
                              new Date(item.DateOfEnd),
                              "MMMM do, yyyy H:mma"
                            )}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </td>
            </tr>
          </table>
          <input
            type="submit"
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[23px]
                            font-medium text-xs leading-tight uppercase rounded shadow-md 
                            hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg
                             focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition 
                             duration-150 ease-in-out w-[30%] mb-3"
            value="Thêm mới"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
