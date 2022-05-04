/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updatePromotion } from "../../../Features/PromotionSlice";

export default function UpdatePromotion() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/promotions/${params.idPromotion}`
      );
      const init = {
        value: res?.data?.promotion?.value,
        DateOfStart: res?.data?.promotion?.DateOfStart,
        DateOfEnd: res?.data?.promotion?.DateOfEnd,
      };
      setData(init);
    } catch (error) {
        console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const { value, DateOfEnd, DateOfStart } = data;
  const init = {
    id: params.idPromotion,
  };
  const onChangeText = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updatePromotion({ init, data }));
      alert("Thay đổi thành công");
      navigate(`/Admin/QuanLyPromotion`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className='bg-[#fcf8f2]'>
				<h2 className='text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl'>
					Update User
				</h2>
				<Link to='/Admin/QuanLyPromotion' className=''>
					<button className='my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]'>
						<i className='fa-solid fa-arrow-rotate-left'></i>Back
					</button>
				</Link>
				<form className='p-[20px] w-full' onSubmit={onSubmit}>
					<table className='px-[20px] mb-[20px] mt-[20px] w-full'>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Giá trị</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='number'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='value'
									name='value'
									required
									onChange={onChangeText}
									value={value}
								/>
							</td>
						</tr>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Từ ngày</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
                            {new Date(DateOfStart).toLocaleDateString('vi-VI')}
								<input
									type='datetime-local'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='DateOfStart'
									name='DateOfStart'
									required
									onChange={onChangeText}
									value={DateOfStart}
								/>
							</td>
						</tr>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Đến ngày ngày</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
                            {new Date(DateOfEnd).toLocaleDateString('vi-VI')}
								<input
									type='datetime-local'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='DateOfEnd'
									name='DateOfEnd'
									required
									onChange={onChangeText}
									value={DateOfEnd}
								/>
							</td>
						</tr>
					</table>
					<button
						type='submit'
						className='bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[23px]
                            font-medium text-xs leading-tight uppercase rounded shadow-md 
                            hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg
                             focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition 
                             duration-150 ease-in-out w-[30%] mb-3'>
						Update
					</button>
				</form>
			</div>
    </div>
  );
}
