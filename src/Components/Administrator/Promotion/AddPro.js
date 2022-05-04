/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AddNewPromotion } from '../../../Features/PromotionSlice';
export default function AddPromotion() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [data, setData] = useState({
		value: '',
		DateOfStart: '',
		DateOfStart: ''
	});

	useEffect(() => {
	}, []);
	const { value, DateOfStart, DateOfEnd } = data;

	const onChangeText = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const ThemMoiKhuyenMai = async (e) => {
		e.preventDefault();
        try {
            dispatch(AddNewPromotion(data));
			alert('Thêm mới Khuyến mại thành công');
			navigate('/Admin/QuanLyPromotion');
        } catch (error) {
            console.log(error);
        }
	};
	return (
		<div className=''>
			<div className='bg-[#fcf8f2]'>
				<h2 className='text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl'>
					Thêm Khuyến Mại
				</h2>
				<Link to='/Admin/QuanLyPromotion' className=''>
					<button className='my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]'>
						<i className='fa-solid fa-arrow-rotate-left'></i> Back
					</button>
				</Link>
				<form className='p-[20px] w-full' onSubmit={ThemMoiKhuyenMai}>
					<table className='px-[20px] mb-[20px] mt-[20px] w-full'>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Value</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
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
								<label htmlFor=''>DateOfStart</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
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
								<label htmlFor=''>DateOfEnd</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
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
						Thêm mới
					</button>
				</form>
			</div>
		</div>
	);
}
