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
    <div className="w-full bg-[#f0f0f0] mt-[100px] flex flex-row justify-center">
      <div className="w-[1300px] mt-[30px] pb-[100px] flex flex-row justify-start">
        <div className="w-[60%] mr-[10px]">
          <h3 className="text-[25px] font-serif font-[400]">Giỏ hàng</h3>
          {(ListCart.length === 0 && <CartEmpty />) || (
            <div className="mt-[50px]">
              <table>
                <tr>
                  <th  className="text-center">Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
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

        <div className="w-[35%] rounded-xl p-2">
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
            <div className="text-center bg-[#d26e4b] text-white font-bold py-4 rounded-md mb-2 cursor-pointer">
              <p>
                {user?.toKen
                  ? `TIẾN HÀNH THANH TOÁN`
                  : `Vui lòng đăng nhập để đặt hàng`}
              </p>
            </div>
          </Link>
          <Link to="/">
            <div
              className="border border-solid border-red-600 py-4 text-center text-red-600  
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
