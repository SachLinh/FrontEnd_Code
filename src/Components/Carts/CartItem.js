import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartProductState, totalPriceState } from "../../Recoil/Recoil";
import { toast } from "react-toastify";

export default function CartItem({ value, index, deleteProductInCart }) {
  const setTotalPrice = useSetRecoilState(totalPriceState);
  const dispatch = useDispatch();
  const [cartProductList, setCartProductList] =
    useRecoilState(cartProductState);

  const increaseProductCount = () => {
    const cartProducts = [...cartProductList];
    cartProducts.map((value, key) => {
      if (key === index) {
        cartProducts[index] = {
          ...cartProducts[index],
          Count: value.Count + 1,
        };
      }
    });
    setCartProductList(cartProducts);
    setTotalPrice((prev) => prev + value.Price);
  };
  const decreaseProductCount = () => {
    if (value.Count > 1) {
      const cartProducts = [...cartProductList];
      cartProducts.map((value, key) => {
        if (key === index) {
          cartProducts[index] = {
            ...cartProducts[index],
            Count: value.Count - 1,
          };
        }
      });
      setCartProductList(cartProducts);
      setTotalPrice((prev) => prev - value.Price);
    }
  };
  const decreaseTotalPrice = () => {
    setTotalPrice((prev) => prev - value.Price * value.Count);
    toast.success("Sản phẩm đã được xóa");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
      <tr className="">
        <td className="flex flex-row justify-start items-center w-[230px] sm:w-[400px]">
          <div
            onClick={() => {
              deleteProductInCart(index);
              decreaseTotalPrice();
            }}
            className=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 font-bold cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
            10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <img src={value.Image} alt="product in cart" className="w-[70px] sm:w-[100px] mx-[10px]" />
          <div className="text-[13px] sm:text-[18px] text-[#389250]">{value.Name}
            <p className=" sm:hidden text-[#0f0404]">{formatPrice(value.Price)}</p>
          </div>
        </td>
        <td className="w-[70px] sm:w-[100px]">
          <div className="inline-flex border-[1px] border-[#777] rounded-md ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={decreaseProductCount}
              className="h-5 w-3 sm:w-5 my-auto cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
            <input
              className="w-4 sm:w-8 text-center"
              value={value.Count}
              type="text"
              readOnly={true}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={increaseProductCount}
              className="h-5 w-3 sm:w-5 my-auto cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </td>
        <td className="hidden md:block text-[15px] md:text-[20px] text-center w-[100px] lg:w-[200px]"> {formatPrice(value.Price)}</td>
      </tr>
  );
}
