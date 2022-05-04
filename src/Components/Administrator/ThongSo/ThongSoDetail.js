/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateThongSo } from '../../../Features/ThongSoSlice';

export default function ThongSoDetail() {
	const params = useParams();
	const dispatch = useDispatch();
	// Update
	const [dataUpdate, setDataUpDate] = useState({});
	const init = {
		id: params.idThongSo,
	};
	const getData = async () => {
		try {
			const res = await axios.get(
				`http://localhost:5000/specifications/${params.idThongSo}`,
			);
			const initState = {
				Bulutooth: res.data.specification?.Bulutooth,
				CameraSau: res.data.specification?.CameraSau,
				CameraTruoc: res.data.specification?.CameraTruoc,
				ChipXuLy: res.data.specification?.ChipXuLy,
				CongNgheManHinh: res.data.specification?.CongNgheManHinh,
				HeDieuHanh: res.data.specification?.HeDieuHanh,
				KichThuocManHinh: res.data.specification?.KichThuocManHinh,
				Pin: res.data.specification?.Pin,
				RAM: res.data.specification?.RAM,
				ROM: res.data.specification?.ROM,
				SIM: res.data.specification?.SIM,
				TienIchKhac: res.data.specification?.TienIchKhac,
				TrongLuong: res.data.specification?.TrongLuong,
				Wifi: res.data.specification?.Wifi,
			};
			setDataUpDate(initState);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	const {
		Bulutooth,
		CameraSau,
		CameraTruoc,
		ChipXuLy,
		CongNgheManHinh,
		HeDieuHanh,
		KichThuocManHinh,
		Pin,
		RAM,
		ROM,
		SIM,
		TienIchKhac,
		TrongLuong,
		Wifi,
	} = dataUpdate;
	const onChangeText = (e) => {
		setDataUpDate({
			...dataUpdate,
			[e.target.name]: e.target.value,
		});
	};
	const navigate = useNavigate();
	const onSubmit = (e) => {
		e.preventDefault();
		try {
			dispatch(updateThongSo({ init, dataUpdate }));
			alert('Thay đổi thành công');
			navigate(`/Admin/QuanLySanPham/Detail/${params.idSanPham}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className=''>
			<div className='bg-[#fcf8f2]'>
				<h2 className='text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc]  p-[15px] rounded-xl'>
					Chi tiết Thông Số
				</h2>
				<Link
					to={`/Admin/QuanLySanPham/Detail/${params.idSanPham}`}
					className=''>
					<button className='my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]'>
						<i className='fa-solid fa-arrow-rotate-left'></i>Back
					</button>
				</Link>
				<form className='p-[20px] w-full' onSubmit={onSubmit}>
					<table className='px-[20px] mt-[20px] w-full'>
						{/* Bluetooth */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Bluetooth</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='Bluetooth'
									name='Bulutooth'
									required
									onChange={onChangeText}
									value={Bulutooth}
								/>
							</td>
						</tr>
						{/* Cam sau */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Camera Sau</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='CameraSau'
									name='CameraSau'
									required
									onChange={onChangeText}
									value={CameraSau}
								/>{' '}
							</td>
						</tr>
						{/* Cam trc */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Camera Trước</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='CameraTruoc'
									name='CameraTruoc'
									required
									onChange={onChangeText}
									value={CameraTruoc}
								/>{' '}
							</td>
						</tr>
						{/* Chip */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Chíp xử lý</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='ChipXuLy'
									name='ChipXuLy'
									required
									onChange={onChangeText}
									value={ChipXuLy}
								/>{' '}
							</td>
						</tr>
						{/* Cong nghe man */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Công Nghệ Màn hình</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='CongNgheManHinh'
									name='CongNgheManHinh'
									required
									onChange={onChangeText}
									value={CongNgheManHinh}
								/>{' '}
							</td>
						</tr>
						{/* Kich thuoc man */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Kích thước màn hình</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='KichThuocManHinh'
									name='KichThuocManHinh'
									required
									onChange={onChangeText}
									value={KichThuocManHinh}
								/>{' '}
							</td>
						</tr>
						{/* He dieu hanh */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Hệ điều hành</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='HeDieuHanh'
									name='HeDieuHanh'
									required
									onChange={onChangeText}
									value={HeDieuHanh}
								/>{' '}
							</td>
						</tr>
						{/* Pin */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Pin</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='Pin'
									name='Pin'
									required
									onChange={onChangeText}
									value={Pin}
								/>{' '}
							</td>
						</tr>
						{/* Ram */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>RAM</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='number'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='RAM'
									name='RAM'
									required
									onChange={onChangeText}
									value={RAM}
								/>{' '}
							</td>
						</tr>
						{/* Rom */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>ROM</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='number'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='ROM'
									name='ROM'
									required
									onChange={onChangeText}
									value={ROM}
								/>{' '}
							</td>
						</tr>
						{/* Sim */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>SIM</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='SIM'
									name='SIM'
									required
									onChange={onChangeText}
									value={SIM}
								/>{' '}
							</td>
						</tr>
						{/* Tien ich khac */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Tiện ích khác</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='TienIchKhac'
									name='TienIchKhac'
									required
									onChange={onChangeText}
									value={TienIchKhac}
								/>{' '}
							</td>
						</tr>
						{/* Trong luong */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Trọng lượng</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='number'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='TrongLuong'
									name='TrongLuong'
									required
									onChange={onChangeText}
									value={TrongLuong}
								/>{' '}
							</td>
						</tr>
						{/* Wifi */}
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>WIFI</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='Wifi'
									name='Wifi'
									required
									onChange={onChangeText}
									value={Wifi}
								/>{' '}
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
