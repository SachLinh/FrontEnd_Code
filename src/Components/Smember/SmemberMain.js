/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { logout } from '../../Features/AuthSlice';
import LichSuMuaHang from './LichSuMuaHang';
import YourAccount from './YourAccount';

function SmemberMain() {
	const dispatch = useDispatch();
	return (
		<div
			className="mt-[130px] w-11/12 mx-auto
        2xl:w-[1300px] 
		xl:w-[1200px]
		lg:w-[1000px] 
		md:w-[700px] 
		sm:w-[600px] 
		w-[400px]'
        md:grid md:grid-flow-col grid-flow-col gap-3">
			<div className='rounded-2xl shadow-xl border-[1px]  text-[13px] md:text-[20px]
			bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  border-gray-300 h-max w-[200px] md:w-[300px]'>
				<Link to=''>
					<div className='grid grid-flow-row grid-cols-5 p-2 nav nav-active cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7 mx-auto'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
							/>
						</svg>
						<p className='font-semibold text-17px col-start-2 col-span-4 '>
							Trang chủ
						</p>
					</div>
				</Link>
				<Link to='LichSuMuaHang'>
					<div className='grid grid-flow-row grid-cols-5 p-2 nav nav-non-active cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7 mx-auto'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
							/>
						</svg>
						<p className='font-semibold text-17px col-start-2 col-span-4  '>
							Lịch sử mua hàng
						</p>
					</div>
				</Link>
				<Link to='/Smember'>
					<div className='grid grid-flow-row grid-cols-5 p-2 nav-non-active cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7 mx-auto'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
							/>
						</svg>
						<p
							className='font-semibold text-17px col-start-2 col-span-4 '
							onClick={() => {
								dispatch(logout());
							}}>
							Thoát tài khoản
						</p>
					</div>
				</Link>
			</div>
			<Routes>
				<Route path='/' element={<YourAccount />}></Route>
				<Route path='/LichSuMuaHang' element={<LichSuMuaHang />}></Route>
			</Routes>
		</div>
	);
}

export default SmemberMain;
