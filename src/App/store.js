import { configureStore } from '@reduxjs/toolkit'
import allDanhMuc from '../Features/MenuSlice'
import allSanPham from '../Features/SanPhamSlice'
import allHoaDon from '../Features/HoaDonSlice'


export const store = configureStore({
  reducer: {
      listDanhMuc:allDanhMuc,
      listSanPham:allSanPham,
      listHoaDon: allHoaDon
      }
})
