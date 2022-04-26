import { configureStore } from '@reduxjs/toolkit'
import allDanhMuc from '../Features/MenuSlice'
import allSanPham from '../Features/SanPhamSlice'
import allHoaDon from '../Features/HoaDonSlice'
import auth from '../Features/AuthSlice'
import AllPromotionSlice from '../Features/PromotionSlice'
import AllThongSoSlice from '../Features/ThongSoSlice'


export const store = configureStore({
  reducer: {
      listDanhMuc:allDanhMuc,
      listSanPham:allSanPham,
      listHoaDon: allHoaDon,
      listPromotion: AllPromotionSlice,
      listThongSo: AllThongSoSlice,
      auth:auth
      }
})
