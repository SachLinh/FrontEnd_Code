/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPromotion } from '../../Features/PromotionSlice';

export default function FindProduct(props) {
	const dispath = useDispatch();
	const khuyenMai = useSelector((state) => state.listPromotion);
	useEffect(() => {
		getLoaiSp();
		dispath(getAllPromotion());
	}, [props.name]);

	const [listTTSp, setListTTSp] = useState([]);
	const getLoaiSp = async () => {
		try {
			const res = await axios.get(`http://localhost:5000/products`);
			setListTTSp(
				res.data.product.filter((el) =>
					el.Name.toLowerCase().includes(props.name.toLowerCase()),
				),
			);
		} catch (error) {
			console.log(error);
		}
	};
	const formatPrice = (price) => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
		}).format(price);
	};
	// Giá trị sắp xếp
	const SORT = {
		upPrice: '1',
		downPrice: '2',
		upname: '3',
		downName: '4',
	};
	const [sortId, setSortId] = useState(SORT.upPrice);
	// Chuyển đổi giá trị sắp xếp
	const handleSort = (value) => {
		setSortId(value);
	};

	// sắp xếp
	const funcSort = function (list) {
		let res = [...list];
		if (sortId === '1') {
			res.sort((a, b) => (parseInt(a.Price) > parseInt(b.Price) ? 1 : -1));
		} else {
			if (sortId === '2') {
				res.sort((a, b) =>
					parseInt(a.Price) < parseInt(b.Price) ? 1 : -1,
				);
			} else {
				if (sortId === '3') {
					res.sort((a, b) => (a.Name > b.Name ? 1 : -1));
				} else {
					if (sortId === '4') {
						res.sort((a, b) => (a.Name < b.Name ? 1 : -1));
					}
				}
			}
		}
		return res;
	};
	var ShowLoaiSP = funcSort(listTTSp).map((itemSP, indexSP) => {
		return (
			<div
				key={indexSP}
				className='text-left mt-3 w-[326px] h-[543px] p-[5px] mr-[10px]
          cursor-pointer'>
				<Link
					className='relative w-full h-full flex flex-col justify-start items-center'
					to={`/product-detail/${itemSP._id}`}>
					<p
						className='bg-[#4b7059] absolute top-[45px] left-[-7px] z-30
                          h-[30px] w-[100px] text-[17px]
                          text-center rounded-[15px]  text-white font-bold right-2 bottom-1 '>
						Giảm{' '}
						<span>
							{khuyenMai?.listPromotion?.pros
								? khuyenMai?.listPromotion?.pros.map((pros) => {
										if (pros._id === itemSP.ID_Promotion) {
											return pros.value;
										}
								  })
								: ''}
							%
						</span>
					</p>
					<div className='w-full h-[408px] overflow-hidden'>
						<img
							alt=''
							src={itemSP.Image}
							className='w-full h-full
                      text-center hover:scale-110 hover:rotate-12  transition-all duration-500'></img>
					</div>
					<h4
						className='font-bold m-[5px] text-gray-800 text-[16px]
                                        '>
						{itemSP.Name}
					</h4>
					<div className='text-[#f7da36]'>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
					</div>
					<div className='flex'>
						<p className='text-[13px] mt-1 ml-2 line-through text-gray-500'>
							{formatPrice(itemSP.Price + 2000000)}
							<span></span>
						</p>
						<p className='text-[#030303] font-bold  m-1 '>
							{formatPrice(itemSP.Price)}
						</p>
					</div>
					<div
						className='text-black my-1 flex flex-row justify-center w-full bg-gray-200 rounded-md pt-auto
                            '>
						<span
							className='p-[8px] w-full h-[50px]
                              text-[12px]
                              '>
							{itemSP.Endow}
						</span>
					</div>
				</Link>
			</div>
		);
	});
	return (
		<div className='w-full flex flex-row justify-start items-start'>
			<div className='mt-[10px] w-[30%] mr-[20px]'>
				<h2 className='mb-[20px] md:text-[30px] text-[20px] font-Roboto font-[500] uppercase'>
					Tìm kiếm: {props.name}
				</h2>
				<hr></hr>
				<h2 className='my-[20px] text-[20px] font-Roboto font-[400]'>
					Sắp xếp theo
				</h2>
				<div className='flex flex-col justify-between items-start h-[200px]'>
					<button
						type='button'
						className='w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]'
						onClick={() => {
							handleSort(SORT.upPrice);
						}}>
						<i className='fa-solid fa-arrow-up-wide-short mr-[5px] text-black '></i>
						Giá tăng dần
					</button>
					<button
						type='button'
						className='w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]'
						onClick={() => {
							handleSort(SORT.downPrice);
						}}>
						<i className='fa-solid fa-arrow-down-short-wide mr-[5px] text-black'></i>
						Giá thấp dần
					</button>
					<button
						type='button'
						className='w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]'
						onClick={() => {
							handleSort(SORT.upname);
						}}>
						<i className='fa-solid fa-arrow-down-a-z  mr-[5px] text-black'></i>
						Tên A - Z
					</button>
					<button
						type='button'
						className='w-[150px] text-left py-[8px] pl-[6px] border rounded-xl hover:text-[#d4342f] hover:bg-[#fff]'
						onClick={() => {
							handleSort(SORT.downName);
						}}>
						<i className='fa-solid fa-arrow-down-z-a mr-[5px] text-black'></i>
						Tên Z - A
					</button>
				</div>
			</div>
			<div className='w-[70%] flex flex-col justify-center items-center'>
				<span className='flex flex-row justify-start items-center flex-wrap w-full'>
					{listTTSp.length > 0 ? ShowLoaiSP : 'Không tìm thấy sản phẩm'}
				</span>
			</div>
		</div>
	);
}
