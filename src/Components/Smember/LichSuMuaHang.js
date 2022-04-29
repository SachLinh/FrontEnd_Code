import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHoaDon } from "../../Features/HoaDonSlice";

export default function LichSuMuaHang() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const allHoaDon = useSelector((state) => state.listHoaDon);
  useEffect(() => {
    dispatch(getAllHoaDon());
  }, []);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  return (
    <div className="col-start-2 col-span-3 border-[1px] border-gray-300 rounded-xl text-center md:mt-[0px] mt-[130px]">
      <p className="text-[25px] mx-auto text-red-600">Đơn hàng đã mua</p>
      <table className="text-center my-[10px] table table-hover">
        <thead>
          <tr>
            <th className="text-center">Địa chỉ</th>
            <th>Ngày mua</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>

        {allHoaDon?.listHoaDon?.invoices
          ? allHoaDon?.listHoaDon?.invoices.map((value, key) => {
              if (value.ID_User === user?.user?._id) {
                return (
                  <tbody>
                    <tr
                      key={key + "" + value._id}
                      className=" border border-slate-300 h-[50px]"
                    >
                      <td className="w-[500px]">{value.Address}</td>
                      <td className="w-[200px]">
                        {new Date(value.DateOfCreate).toLocaleDateString(
                          "vi-VI"
                        )}
                      </td>
                      <td className="w-[200px]">
                        {value.Status === true ? "Đã xác nhận" : "Đang chờ"}
                      </td>
                      <td className="w-[200px]"> {formatPrice(value.Total)}</td>
                    </tr>
                  </tbody>
                );
              }
            })
          : ""}
      </table>
    </div>
  );
}
