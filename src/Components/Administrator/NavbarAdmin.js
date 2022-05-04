/** @format */

import React, { useState } from 'react';
import H6 from '@material-tailwind/react/Heading6';
import { Link, NavLink } from 'react-router-dom';

export default function NavbarAdmin() {
	const [showSidebar, setShowSidebar] = useState('-left-64');
	const admin = JSON.parse(localStorage.getItem('admin'));

	return (
		<>
			{/* <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
			<div
				className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row ml-[10px] mt-[10px] rounded-xl
        flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 transition-all duration-300`}>
				<div className='flex-col items-stretch min-h-full flex-nowrap relative'>
					<Link
						to=''
						rel='noreferrer'
						className='text-center w-full inline-block bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'>
						<H6 color='gray'>
							<img
								src={require(`../../Components/FooterAndHeader/Images/logo2.png`)}
								alt=''
							/>
						</H6>
					</Link>
					<div className='flex flex-col px-3'>
						<hr className='my-4 min-w-full' />
						<ul className='flex-col min-w-full flex list-none'>
							<li className='rounded-lg mb-4'>
								<NavLink
									to=''
									exact
									className='flex items-center gap-4 text-2xl font-[4500] text-gray-700 px-4 py-3 rounded-lg 
                  active:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 active:text-[#533fff] shadow-md'>
									<i className='fa-solid fa-bars text-[#f12222] text-2xl'></i>
									Dashboard
								</NavLink>
							</li>
							{admin?.user?.loaiTaiKhoan === 'Admin' ? (
								<li className='rounded-lg mb-4'>
									<NavLink
										to='/Admin/QuanLyUser'
										exact
										className='flex items-center gap-4 text-2xl font-[4500] text-gray-700 px-4 py-3 rounded-lg 
                  active:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 active:text-[#533fff] shadow-md'>
										<i class='fa-solid fa-users text-[#050505] text-2xl'></i>
										Tài khoản
									</NavLink>
								</li>
							) : (
								''
							)}

							<li className='rounded-lg mb-2'>
								<NavLink
									to='/Admin/QuanLyHangSX'
									className='flex items-center gap-4 text-2xl font-[4500] text-gray-700 px-4 py-3 rounded-lg
                  active:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 active:text-[#533fff] shadow-md'>
									<i className='fa-brands fa-app-store text-[#d139ab] text-2xl'></i>
									Danh Mục
								</NavLink>
							</li>
							<li className='rounded-lg mb-2'>
								<NavLink
									to='/Admin/QuanLySanPham'
									className='flex items-center gap-4 text-2xl font-[4500] text-gray-700 px-4 py-3 rounded-lg
                  active:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 active:text-[#533fff] shadow-md
                  '>
									<i class='fa-brands fa-product-hunt text-[#3f52ff] text-2xl'></i>
									Sản Phẩm
								</NavLink>
							</li>
							<li className='rounded-lg mb-2'>
								<NavLink
									to='/Admin/QuanLyHoaDon'
									className='flex items-center gap-4 text-2xl font-[4500] text-gray-700 px-4 py-3 rounded-lg
                  active:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 active:text-[#533fff] shadow-md
                  '>
									<i class='fa-solid fa-file-invoice text-[#729423] text-2xl '></i>
									Hóa Đơn
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
