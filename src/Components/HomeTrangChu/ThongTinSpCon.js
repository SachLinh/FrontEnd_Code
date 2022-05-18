/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPromotion } from "../../Features/PromotionSlice";
import PageProd from "../Administrator/Pagination/PageProd";

export default function ThongTinSpCon(props) {
  const dispath = useDispatch();
  const khuyenMai = useSelector((state) => state.listPromotion);
  useEffect(() => {
    getLoaiSp();
    dispath(getAllPromotion());
  }, []);
  const [listTTSp, setListTTSp] = useState();
  const getLoaiSp = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/products`);
      setListTTSp(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Giá trị sắp xếp
  const SORT = {
    upPrice: "1",
    downPrice: "2",
    upname: "3",
    downName: "4",
  };
  const [sortId, setSortId] = useState(SORT.upPrice);
  // Chuyển đổi giá trị sắp xếp
  const handleSort = (value) => {
    setSortId(value);
  };

  // sắp xếp
  const funcSort = function (list) {
    let res = [...list];
    if (sortId === "1") {
      res.sort((a, b) => (parseInt(a.Price) > parseInt(b.Price) ? 1 : -1));
    } else {
      if (sortId === "2") {
        res.sort((a, b) => (parseInt(a.Price) < parseInt(b.Price) ? 1 : -1));
      } else {
        if (sortId === "3") {
          res.sort((a, b) => (a.Name > b.Name ? 1 : -1));
        } else {
          if (sortId === "4") {
            res.sort((a, b) => (a.Name < b.Name ? 1 : -1));
          }
        }
      }
    }
    return res;
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  // Phan trang
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (listTTSp) {
	var currentPosts = funcSort(listTTSp.product).slice(
		indexOfFirstPost,
		indexOfLastPost
	  );
    var ShowLoaiSP = currentPosts.map((itemSP, indexSP) => {
      if (itemSP.ID_Cata === props.idLoai) {
        return (
          <div
          key={indexSP}
          className="text-left mt-3 bg-[#fdfbfb]
            w-[170px] md:w-[200px] lg:w-[230px] xl:w-[285px] 
            h-[300px] md:h-[350px] lg:h-[380px] xl:h-[470px]
             mr-[10px]
            cursor-pointer"
        >
          <Link
            className="relative w-full h-full flex flex-col justify-between items-center"
            to={`/product-detail/${itemSP._id}`}
          >
            <p
              className="bg-[#4b7059] absolute top-[20px] md:top-[45px] left-[-7px] z-30
                    h-[20px] md:h-[25px] lg:h-[30px] w-[100px] text-[13px] md:text-[15px] lg:text-[17px]
                    text-center rounded-[15px]  text-white font-bold right-2 bottom-1 "
            >
              Giảm{" "}
              <span>
                {khuyenMai?.listPromotion?.pros
                  ? khuyenMai?.listPromotion?.pros.map((pros) => {
                      if (pros._id === itemSP.ID_Promotion) {
                        return pros.value;
                      }
                    })
                  : ""}
                %
              </span>
            </p>
            <div className="w-full md:h-[210px] lg:h-[290px] xl:h-[400px] overflow-hidden">
              <img
                alt=""
                src={itemSP.Image}
                className="w-full h-full
                  text-center hover:scale-110 hover:rotate-12  transition-all duration-500"
              ></img>
            </div>
            {/* het hang */}
            {itemSP.Count == 0 ? (
              <div
                className="absolute top-[60px] md:top-[70px] lg:top-[100px] xl:top-[150px] flex flex-col justify-center
              w-full md:h-[50px] lg:h-[70px] text-center bg-[#ebe9e9] text-[#f33333] text-[16px] font-[500]"
              >
                Hết hàng
              </div>
            ) : (
              ""
            )}
  
            <h4
              className="font-bold m-[5px] text-gray-800 
              text-[13px] md:text-[13px] lg:text-[14px] xl:text-[16px]"
            >
              {itemSP.Name}
            </h4>
            {/* star */}
            <div className="text-[#f7da36] sm:text-[10px] lg:text-[15px]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            {/* price */}
            <div className="flex">
              <p
                className="text-[10px] lg:text-[13px] mt-1 mr-2 line-through
               text-gray-500 flex flex-row justify-center"
              >
                {khuyenMai?.listPromotion?.pros
                  ? khuyenMai?.listPromotion?.pros.map((pros) => {
                      if (pros._id === itemSP.ID_Promotion) {
                        return formatPrice(
                          itemSP.Price + (itemSP.Price * pros.value) / 100
                        );
                      }
                    })
                  : ""}
  
                <span></span>
              </p>
              <p className="text-[#030303] font-bold text-[13px] lg:text-[15px]">
                {formatPrice(itemSP.Price)}
              </p>
            </div>
            {/* endow */}
            <div
              className="text-black my-1 flex flex-row justify-center w-full bg-gray-200 rounded-md pt-auto
              overflow-hidden "
            >
              <span
                className="p-[8px] w-full h-[30px] md:h-[50px]
                      text-[12px]
                      "
              >
                {itemSP.Endow}
              </span>
            </div>
          </Link>
        </div>
        );
      }
    });
  }
  return (
    <div className="w-full mt-[30px] flex flex-col md:flex-row justify-start items-start">
      <div className="mt-[10px] w-full md:w-[25%] mr-[20px] text-[13px] md:text-[15px]">
        <h2 className="mb-[20px] md:text-[25px] font-Roboto font-[500] uppercase">
          Điện thoại Samsung
        </h2>
        <hr></hr>
        <h2 className="my-[20px] font-Roboto font-[400]">Sắp xếp theo</h2>
        <div
          className="flex flex-row md:flex-col flex-wrap md:flex-nowrap justify-between items-start 
				h-[50px] md:h-[200px]"
        >
          <button
            type="button"
            className="w-[120px] md:w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]"
            onClick={() => {
              handleSort(SORT.upPrice);
            }}
          >
            <i className="fa-solid fa-arrow-up-wide-short mr-[5px] text-black "></i>
            Giá tăng dần
          </button>
          <button
            type="button"
            className="w-[120px] md:w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]"
            onClick={() => {
              handleSort(SORT.downPrice);
            }}
          >
            <i className="fa-solid fa-arrow-down-short-wide mr-[5px] text-black"></i>
            Giá thấp dần
          </button>
          <button
            type="button"
            className="w-[80px] md:w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]"
            onClick={() => {
              handleSort(SORT.upname);
            }}
          >
            <i className="fa-solid fa-arrow-down-a-z  mr-[5px] text-black"></i>
            Tên A - Z
          </button>
          <button
            type="button"
            className="w-[80px] md:w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]"
            onClick={() => {
              handleSort(SORT.downName);
            }}
          >
            <i className="fa-solid fa-arrow-down-z-a mr-[5px] text-black"></i>
            Tên Z - A
          </button>
        </div>
      </div>
      <div className="w-full md:w-[70%] mt-[20px] sm:mt-[0px] flex flex-col justify-center items-center">
        <span className="flex flex-row justify-start items-center flex-wrap w-full">
          {listTTSp?.product ? ShowLoaiSP : ""}
        </span>
		{listTTSp ? (
				<PageProd
					postsPerPage={postsPerPage}
					totalPosts={listTTSp?.product.length}
					paginate={paginate}
				/>
			) : (
				''
			)}
      </div>
    </div>
  );
}
