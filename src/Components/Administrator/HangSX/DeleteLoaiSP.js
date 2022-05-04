/** @format */

import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDanhMucByID, getDanhMucByID } from '../../../Features/MenuSlice';

export default function DeleteLoaiSP() {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDanhMucByID(params.idCate));
	}, []);
	const DetailHangSX = useSelector((state) => state.listDanhMuc);
	const deleteLoaiSP = DetailHangSX.detaildele;
	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			dispatch(deleteDanhMucByID(params.idCate));
			alert('Xóa thành công thành công');
			navigate(`/Admin/QuanLyHangSX`);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className=''>
			<div className='bg-[#fcf8f2]'>
				<h2 className='text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl'>
					Delete DANH MỤC
				</h2>
				<Link to='/Admin/QuanLyHangSX' className=''>
					<button className='my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]'>
						<i className='fa-solid fa-arrow-rotate-left'></i>Back
					</button>
				</Link>
				<form className='flex flex-row justify-between items-center p-[50px]'>
					<label htmlFor=''>ID Hãng</label>
					<input
						type='text'
						name='id'
						placeholder={deleteLoaiSP?.cata._id}
						value={deleteLoaiSP?.cata._id}
						className='border p-[10px] mr-[20px] outline-none'
					/>
					<label htmlFor=''>Tên Hãng</label>
					<input
						type='text'
						name='name'
						placeholder={deleteLoaiSP?.cata.name}
						value={deleteLoaiSP?.cata.name}
						className='border p-[10px] mr-[20px] outline-none'
					/>
					<button
						type='button'
						className='btn btn-outline-info'
						onClick={onSubmit}>
						Delete
					</button>
				</form>
			</div>
		</div>
	);
}
