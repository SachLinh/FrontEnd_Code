import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  billInfoState,
  cartProductState,
  totalPriceState,
} from "../../Recoil/Recoil";
import { useDispatch } from "react-redux";
import { AddNewHoaDon } from "../../Features/HoaDonSlice";
import { toast } from "react-toastify";
import { UpdateSP } from "../../Features/SanPhamSlice";

function Payment() {
  const user = JSON.parse(localStorage.getItem("user"));
  const totalPrice = useRecoilValue(totalPriceState);
  const [totalPrices, setTotalPrice] = useRecoilState(totalPriceState);
  const billInfo = useRecoilValue(billInfoState);
  const listProduct = useRecoilValue(cartProductState);
  const setCartProductList = useSetRecoilState(cartProductState);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const postBill = () => {
    dispatch(AddNewHoaDon(billInfo)); 
    for(let i =0; i < listProduct.length; i++)
    {
      const init = {id: listProduct[i]._id}
      const dataUpdate = {Count: listProduct[i].CountWareHouse - listProduct[i].Count}
      dispatch(UpdateSP({init, dataUpdate}))
    }
    localStorage.removeItem("data");
    setCartProductList([]);
    toast("Đặt hàng thành công");
    setTotalPrice(0);
  };
  console.log(listProduct);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  return (
    <div className="sm:w-5/6 md:w-7/12 lg:w-1/2 xl:w-5/12 mx-auto mt-[130px]">
      <div className="text-center">
        <h3 className="text-lg font-bold text-red-600">Thanh toán</h3>
      </div>
      <div>
        <div className="grid grid-flow-row grid-cols-4 bg-[#f6f6f6] px-4 py-4 text-red-600 text-center">
          <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <p className="text-sm">Chọn sản phẩm</p>
          </div>
          <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <p className="text-sm">Thông tin đặt hàng</p>
          </div>
          <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm">Thanh toán</p>
          </div>
          <div>
            <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fillRule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm">Hoàn tất đặt hàng</p>
          </div>
        </div>
      </div>
      {/* thong tin user */}
      <div className="">
        <div className="my-0 md:mx-1 py-0 md:py-3 text-lg flex flex-col justify-between h-[300px] text-[15px] sm:text-[18px]">
          <h2 className="text-center font-bold">THÔNG TIN ĐẶT HÀNG</h2>
          <p>
            Người Nhận: <b>{user?.user?.name}</b>
          </p>
          <p>
            Số Điện Thoại: <b>{user?.user?.phone}</b>
          </p>
          <p>
            Email: <b>{user?.user?.email}</b>
          </p>
          <p>
            Nhận Sản Phẩm Tại: <b>{billInfo.Address}</b>
          </p>
          <p>
            Tổng Tiền: <b>{formatPrice(totalPrice)}</b>
          </p>
        </div>
      </div>
      {/* danh sach san pham */}
      <table className="text-center mb-[10px]">
        <tr>
          <th className="text-center">Sản phẩm</th>
          <th>Số lượng</th>
          <th className="hidden md:block text-[15px] md:text-[20px] text-center  w-[100px] lg:w-[200px]">Giá</th>
        </tr>
        {listProduct.map((value, key) => {
          return (
            <tr key={key + "" + value.Name}>
              <td className="flex flex-row justify-start items-center w-[300px]">
                <img
                  src={value.Image}
                  alt="product in cart"
                  className="w-[100px] mx-[10px]"
                />
                <p className="text-[13px] sm:text-[18px] text-[#389250]">{value.Name}
                <p className=" sm:hidden text-[#0f0404]">{formatPrice(value.Price)}</p>
                </p>
              </td>
              <td className="w-[70px] sm:w-[100px]"> {value.Count}</td>
              <td className="hidden md:block text-[15px] md:text-[18px] w-[100px] lg:w-[200px]">
                 {formatPrice(value.Price)}
                 </td>
            </tr>
          );
        })}
      </table>
      <div className="border border-solid rounded-xl p-2 mt-3 shadow-lg">
        <div className="grid grid-flow-row grid-cols-2 pb-2">
          <p className="text-md font-bold">Tổng tiền tạm tính:</p>
          <p className="text-md text-red-600 font-semibold text-right">
            {formatPrice(totalPrice)}
          </p>
        </div>
        <Link to="/completePayment">
          <div
            onClick={postBill}
            className="text-center bg-red-600 text-white font-bold py-2 md:py-4 rounded-md mb-2 cursor-pointer"
          >
            <p>TIẾP TỤC</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
