import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartProductState, totalPriceState } from "../../Recoil/Recoil";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

export default function Cart() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [total, setTotal] = useRecoilState(totalPriceState);
  const [ListCart, setListCart] = useRecoilState(cartProductState);

  const getListCart = () => {
    const cartProduct = [];
    let price = 0;
    if (JSON.parse(localStorage.getItem("data") + "") !== null) {
      JSON.parse(localStorage.getItem("data") + "").map((value) => {
        const product = {
          _id: value._id,
          Image: value.Image,
          Name: value.Name,
          Price: value.Price,
          Endow: value.Endow,
          Color: value.Color,
          Count: 1,
          ID_Cata: value.ID_Cata,
          ID_Promotion: value.ID_Promotion,
          ID_Spec: value.ID_Spec,
        };
        price += product.Price * product.Count;
        cartProduct.push(product);
      });
      setListCart(cartProduct);
      setTotal(price);
    }
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const deleteProductInCart = (index) => {
    const listProduct = [...ListCart];
    listProduct.splice(index, 1);
    setListCart(listProduct);

    const localProductList = JSON.parse(localStorage.getItem("data") + "");
    localProductList.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(localProductList));
  };

  useEffect(() => {
    getListCart();
  }, []);
  return (
    <div className="w-full bg-[#f0f0f0] mt-[80px] sm:mt-[100px] flex flex-row justify-center">
      <div className="2xl:w-[1300px] relative xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-[350px]
      mt-[30px] pb-[100px] flex flex-col lg:flex-row justify-between items-center lg:justify-start">
        {/* danh sach san pham */}
        <div className="w-[90%] lg:w-[60%] mr-[0px] lg:mr-[10px]">
          <h3 className="text-[20px] md:text-[25px] font-serif font-[400]">Giỏ hàng</h3>
          {(ListCart.length === 0 && <CartEmpty />) || (
            <div className="mt-[10px] md:mt-[50px] w-full">
              <table className="w-full">
                <tr>
                  <th  className="text-center text-[13px] sm:text-[17px]">Sản phẩm</th>
                  <th className="text-[13px] sm:text-[17px] md:text-[20px]">Số lượng</th>
                  <th className="hidden md:block text-[15px] md:text-[20px] text-center  w-[100px] lg:w-[200px]">Giá</th>
             
                </tr>
                  {ListCart.map((value, key) => {
                return (
                                      <CartItem
                    value={value}
                    index={key}
                    key={key}
                    deleteProductInCart={(index) => deleteProductInCart(index)}
                  />
                );
              })}
              </table>
              
            </div>
          )}
        </div>
        {/* Bill */}
        <div className="w-[90%] lg:w-[35%] rounded-xl p-2 text-[15px] lg:text-[17px]">
          <div className="flex flex-col justify-start ">
            <p className="text-md font-bold uppercase pb-3">Cộng giỏ hàng</p>
            <hr></hr>
            <div className="flex flex-row justify-between py-3">
              <p className="text-md text-left">
              Tạm tính
            </p>
              <p className="text-md font-semibold text-right">
              {formatPrice(total)}
            </p>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between py-3">
              <p className="text-md text-left">
              Tổng
            </p>
              <p className="text-md font-semibold text-right">
              {formatPrice(total)}
            </p>
            </div>
            
          </div>
          <Link to={user?.toKen ? `/payment-infor` : `/Smember`}>
            <div className="text-center bg-[#d26e4b] text-white font-bold py-2 sm:py-4 rounded-md mb-2 cursor-pointer">
              <p>
                {user?.toKen
                  ? `TIẾN HÀNH THANH TOÁN`
                  : `Vui lòng đăng nhập để đặt hàng`}
              </p>
            </div>
          </Link>
          <Link to="/">
            <div
              className="border border-solid border-red-600 py-2 sm:py-4 text-center text-red-600  
              font-bold rounded-md hover:bg-[#d26e4b] hover:text-white cursor-pointer transition-all"
            >
              <p>CHỌN THÊM SẢN PHẨM KHÁC</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
