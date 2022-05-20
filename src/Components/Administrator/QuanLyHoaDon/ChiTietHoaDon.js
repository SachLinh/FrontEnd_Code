/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllUser } from '../../../Features/AuthSlice';
import {
	getChiTietHoaDon,
	updateHoaDon,
	updateHoaDon2,
	deleteInvoice,
} from '../../../Features/HoaDonSlice';
import { getAllSanPham } from '../../../Features/SanPhamSlice';
import {toast} from 'react-toastify'

export default function ChiTietHoaDon() {
	const admin = JSON.parse(localStorage.getItem('admin'));
	const param = useParams();
	const dispatch = useDispatch();
	const listUser = useSelector((state) => state.auth);
	useEffect(() => {
		dispatch(getChiTietHoaDon(param.idhoadon));
		dispatch(getAllSanPham());
		dispatch(getAllUser());
	}, []);
	const listData = useSelector((state) => state.listHoaDon);
	const hoadon = listData?.hoaDonDetail?.invoice;
	const listSP = useSelector((state) => state.listSanPham);
	const listSPham = listSP.listSanPham;
	// format Price
	const formatPrice = (price) => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
		}).format(price);
	};
	// Update Status
	const [formData, setFormData] = useState({ Status: true });
	const init = {
		id: param.idhoadon,
	};
	const navigate = useNavigate();
	const onUpdateStatus = async () => {
		dispatch(updateHoaDon({ init, formData }));
		alert('Update succesfull');
		navigate('/Admin/QuanLyHoaDon');
	};
	const [formData2, setFormData2] = useState({ Address: '' });
	const { Address } = formData2;
	const onChange = async (e) => {
		setFormData2({
			...formData2,
			[e.target.name]: e.target.value,
		});
	};
	const UpdateAddress = async (e) => {
		e.preventDefault();
		dispatch(updateHoaDon2({ init, formData2 }));
		alert('Update succesfull');
		navigate('/Admin/QuanLyHoaDon');
	};
	const deleteHoadon = async (e) => {
		dispatch(deleteInvoice(param.idhoadon));
		alert('Xoa succesfull');
		navigate('/Admin/QuanLyHoaDon');
	};
	const inPDF = async ()=>{
		await axios.post(`http://localhost:5000/invoice/${param.idhoadon}/PDF`)
		toast('Đã in file PDF')
	}
	return (
		<div className='w-full bg-[#fcf8f2]'>
			<h1
				className='text-[#f73d3d] text-[40px] w-full text-center 
      bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl'>
				CHI TIẾT HÓA ĐƠN
			</h1>
			<Link to='/Admin/QuanLyHoaDon' className=''>
				<button className='my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[17px] text-red'>
					<i className='fa-solid fa-arrow-rotate-left'></i> Back
				</button>
			</Link>
			<button className='my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[17px] text-red' onClick={inPDF}>
				In hóa đơn - PDF
			</button>
			<div className='p-[20px] w-full'>
				<table className='p-[20px] mt-[20px] w-full'>
					{/* // id */}
					<tr>
						<th className='border pl-[10px] border-slate-300'>
							<label htmlFor=''>ID</label>
						</th>
						<td className='w-5/6 pl-[10px] text-[17px] h-[50px] border border-slate-300'>
							{hoadon?._id}
						</td>
					</tr>
					{/* // User */}
					<tr>
						<th className='border pl-[10px] border-slate-300'>
							<label htmlFor=''>Khách hàng</label>
						</th>
						<td className='w-5/6 pl-[10px] text-[17px] h-[50px] border border-slate-300'>
							{' '}
							{listUser?.listUser?.users
								? listUser?.listUser?.users.map((user) => {
										if (hoadon?.ID_User === user?._id) {
											return (
												<table className='w-full'>
													<tr>
														<th className='p-1'>
															Họ tên khách hàng
														</th>
														<th className='p-1'>Số điện thoại</th>
														<th className='p-1'>Email</th>
													</tr>
													<tr>
														<td>{user.name}</td>
														<td>{user.phone}</td>
														<td>{user.email}</td>
													</tr>
												</table>
											);
										}
								  })
								: ''}
						</td>
					</tr>
					{/* // Price */}
					<tr>
						<th className='border pl-[10px] border-slate-300'>
							<label htmlFor=''>Price</label>
						</th>
						<td className='w-5/6 pl-[10px] text-[17px] h-[50px] border border-slate-300'>
							{formatPrice(hoadon?.Total)}
						</td>
					</tr>
					{/* // Address */}
					<tr>
						<th className='border pl-[10px] border-slate-300'>
							<label htmlFor=''>Address</label>
						</th>
						<td className='w-5/6 pl-[10px] text-[17px] h-[50px] border border-slate-300'>
							{hoadon?.Address}
							<form className='form' onSubmit={UpdateAddress}>
								<div className='mb-4 form-group'>
									<input
										type='text'
										className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
										placeholder='Địa chỉ giao hàng'
										name='Address'
										required
										onChange={onChange}
										value={Address}
									/>
								</div>
								<input
									type='submit'
									className='w-[30%] bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[18px]
                            font-medium text-xs leading-tight uppercase rounded shadow-md 
                            hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3'
									value='Update Address'
								/>
							</form>
						</td>
					</tr>
					{/* // Status */}
					<tr>
						<th className='border pl-[10px] border-slate-300'>
							<label htmlFor=''>Status</label>
						</th>
						<td className='w-5/6 pl-[10px] text-[17px] h-[50px] border border-slate-300'>
							<button
								type='button'
								className='btn btn-success text-[#338d20]'
								onClick={onUpdateStatus}>
								{hoadon?.Status === false ? 'Đang chờ' : 'Xác nhận'}
							</button>
						</td>
					</tr>
					{/* // san SanPham */}
					<tr>
						<th className='border pl-[10px] border-slate-300'>
							<label htmlFor=''>List Product</label>
						</th>
						<td className='w-5/6 pl-[10px] text-[17px] h-[50px] border border-slate-300'>
							<table className='table table-hover leading-[40px] w-full'>
								<thead>
									<tr className='text-center'>
										<th className='border border-slate-400'>Name</th>
										<th className='border border-slate-400'>IMG</th>
										<th className='border border-slate-400'>Price</th>
										<th className='border border-slate-400'>count</th>
									</tr>
								</thead>
								{hoadon?.InvoiceDetail.map((item, index) => {
									return (
										<tbody>
											{listSPham?.product
												? listSPham?.product.map(
														(itemSP, index) => {
															if (
																item.ID_Product === itemSP._id
															) {
																return (
																	<tr className='text-center'>
																		<td className='border border-slate-400'>
																			{itemSP.Name}
																		</td>

																		<td className='border border-slate-400'>
																			<img
																				className='w-[100px]'
																				src={itemSP.Image}
																				alt=''
																			/>
																		</td>
																		<td className='border border-slate-400'>
																			{itemSP.Price}
																		</td>

																		<td className='border border-slate-400'>
																			{item.Count}
																		</td>
																	</tr>
																);
															}
														},
												  )
												: ''}
										</tbody>
									);
								})}
							</table>
						</td>
					</tr>
				</table>
				{admin?.user?.loaiTaiKhoan === 'Admin' ? (
					<input
						type='button'
						className='w-[30%] bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[18px]
                            font-medium text-xs leading-tight uppercase rounded shadow-md 
                            hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3'
						value='Xóa Hóa Đơn'
						onClick={deleteHoadon}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
}
