import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { createSpecByIDProduct } from "../../../Features/ThongSoSlice";

const initState = {
  RAM: "",
  ROM: "",
  Pin: "",
  CongNgheManHinh: "",
  KichThuocManHinh: "",
  CameraTruoc: "",
  CameraSau: "",
  SIM: "",
  ChipXuLy: "",
  HeDieuHanh: "",
  Wifi: "",
  Bulutooth: "",
  TrongLuong: "",
  TienIchKhac: "",
};

export default function CreateThongSo() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
 const init={
     id:params.idSanPham
 }
  useEffect(() => {}, []);
  const [data, setData] = useState(initState);
  const {
    RAM,
    ROM,
    Pin,
    CongNgheManHinh,
    KichThuocManHinh,
    CameraTruoc,
    CameraSau,
    SIM,
    ChipXuLy,
    HeDieuHanh,
    Wifi,
    Bulutooth,
    TrongLuong,
    TienIchKhac,
  } = data;
  const onChangeText = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(createSpecByIDProduct({ init,data }));
      alert("Thêm mới thành công");
      navigate(`/Admin/QuanLySanPham/Detail/${params.idSanPham}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="bg-[#fcf8f2]">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  p-[15px] rounded-xl">
          Chi tiết Thông Số
        </h2>
        <Link
          to={`/Admin/QuanLySanPham/Detail/${params.idSanPham}`}
          className=""
        >
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Back
          </button>
        </Link>
        <div className="p-[20px] w-full">
          <table className="px-[20px] mt-[20px] w-full mb-[30px]">
              {/* Bluetooth */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Bluetooth</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Bluetooth: 5.0, A2DP, LE, aptX"
                  name="Bulutooth"
                  required
                  onChange={onChangeText}
                  value={Bulutooth}
                />
              </td>
            </tr>
            {/* Cam sau */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Camera Sau</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="CameraSau: 15 MP"
                  name="CameraSau"
                  required
                  onChange={onChangeText}
                  value={CameraSau}
                />
              </td>
            </tr>
            {/* Cam trc */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Camera Trước</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="CameraTruoc: 15 MP"
                  name="CameraTruoc"
                  required
                  onChange={onChangeText}
                  value={CameraTruoc}
                />
              </td>
            </tr>
            {/* Chip xu ly */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Chíp xử lý</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="ChipXuLy: Exynos 990 (7 nm+)"
                  name="ChipXuLy"
                  required
                  onChange={onChangeText}
                  value={ChipXuLy}
                />
              </td>
            </tr>
            {/* Cong nghe man hinh */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Công Nghệ Màn hình</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="CongNgheManHinh: Qled TV"
                  name="CongNgheManHinh"
                  required
                  onChange={onChangeText}
                  value={CongNgheManHinh}
                />
              </td>
            </tr>
            {/* Kich thuoc man */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Kích thước màn hình</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="number"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="KichThuocManHinh: 5.6"
                  name="KichThuocManHinh"
                  required
                  onChange={onChangeText}
                  value={KichThuocManHinh}
                />
              </td>
            </tr>
            {/* hẹ dieu hanh */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Hệ điều hành</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="HeDieuHanh: Android"
                  name="HeDieuHanh"
                  required
                  onChange={onChangeText}
                  value={HeDieuHanh}
                />
              </td>
            </tr>
            {/* Pin */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Pin</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Pin: 5000 mAh"
                  name="Pin"
                  required
                  onChange={onChangeText}
                  value={Pin}
                />
              </td>
            </tr>
            {/* RAM */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">RAM</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="number"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="RAM: 126"
                  name="RAM"
                  required
                  onChange={onChangeText}
                  value={RAM}
                />
              </td>
            </tr>
            {/* ROM */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">ROM</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="number"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="ROM: 256"
                  name="ROM"
                  required
                  onChange={onChangeText}
                  value={ROM}
                />
              </td>
            </tr>
            {/* SIM */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">SIM</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="SIM: 2 sim"
                  name="SIM"
                  required
                  onChange={onChangeText}
                  value={SIM}
                />
              </td>
            </tr>
            {/* Tien ich khac */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Tiện ích khác</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="TienIchKhac: Cảm biến vân tay, ...."
                  name="TienIchKhac"
                  required
                  onChange={onChangeText}
                  value={TienIchKhac}
                />
              </td>
            </tr>
            {/* Trong luong */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Trọng lượng</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="number"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="TrongLuong: 208"
                  name="TrongLuong"
                  required
                  onChange={onChangeText}
                  value={TrongLuong}
                />
              </td>
            </tr>
            {/* Wifi */}
            <tr>
              <th className="border pl-[10px] border-slate-300">
                <label htmlFor="">Wifi</label>
              </th>
              <td className="w-5/6 h-[50px] pl-[10px] border border-slate-300">
                <input
                  type="text"
                  className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Wifi: Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct,"
                  name="Wifi"
                  required
                  onChange={onChangeText}
                  value={Wifi}
                />
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
