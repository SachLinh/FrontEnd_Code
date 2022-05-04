/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../../Features/AuthSlice';

export default function UpdateUser() {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [data, setData] = useState({});
	const getData = async () => {
		try {
			const res = await axios.get(
				`http://localhost:5000/users/${params.idUser}`,
			);
			const init = {
				email: res?.data?.user?.email,
				name: res?.data?.user?.name,
				phone: res?.data?.user?.phone,
				loaiTaiKhoan: res?.data?.loaiTaiKhoan,
			};
			setData(init);
		} catch (error) {}
	};
	useEffect(() => {
		getData();
	}, []);
	const { email, name, phone, loaiTaiKhoan } = data;
	const init = {
		id: params.idUser,
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
			if (data.name === '') {
				alert('Vui lòng nhập tên cần thay đổi');
			} else {
				dispatch(updateUser({ init, data }));
				setData({
					name: '',
				});
				alert('Thay đổi thành công');
				navigate(`/Admin/QuanLyUser`);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className=''>
			<div className='bg-[#fcf8f2]'>
				<h2 className='text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl'>
					Update User
				</h2>
				<Link to='/Admin/QuanLyUser' className=''>
					<button className='my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]'>
						<i className='fa-solid fa-arrow-rotate-left'></i>Back
					</button>
				</Link>
				<form className='p-[20px] w-full' onSubmit={onSubmit}>
					<table className='px-[20px] mb-[20px] mt-[20px] w-full'>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Name</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='name'
									name='name'
									required
									onChange={onChangeText}
									value={name}
								/>
							</td>
						</tr>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Email</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='email'
									name='email'
									required
									onChange={onChangeText}
									value={email}
								/>
							</td>
						</tr>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Phone</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<input
									type='text'
									className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='phone'
									name='phone'
									required
									onChange={onChangeText}
									value={phone}
								/>
							</td>
						</tr>
						<tr>
							<th className='border pl-[10px] border-slate-300'>
								<label htmlFor=''>Loai Tai Khoan</label>
							</th>
							<td className='w-5/6 h-[50px] pl-[10px] border border-slate-300'>
								<select
									className='w-[200px] h-full'
									name='loaiTaiKhoan'
									id='loaiTaiKhoan'
									value={loaiTaiKhoan}
									onChange={onChangeText}>
									<option value=''>*** Vui long chon ***</option>
									<option value='Khach Hang'>Khach Hang</option>
									<option value='Nhan Vien'>Nhan Vien</option>
									<option value='Admin'>Admin</option>
								</select>
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
