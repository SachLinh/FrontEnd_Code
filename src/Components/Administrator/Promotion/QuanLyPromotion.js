/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPromotion } from '../../../Features/PromotionSlice';
import PageProd from '../Pagination/PageProd';

export default function QuanLyPromotion() {
	const dispatch = useDispatch();
	const listPromotion = useSelector((state) => state.listPromotion);
	useEffect(() => {
		dispatch(getAllPromotion());
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	// Giá trị sắp xếp
	const SORT = {
		up: '2',
		down: '3',
	};
	const [sortId, setSortId] = useState(SORT.up);
	// Hiển thị giá trị trên màn hình
	const getSortAge = () => {
		if (sortId === SORT.down) {
			return '^';
		}
		if (sortId === SORT.up) {
			return 'V';
		}
	};
	// Chuyển đổi giá trị sắp xếp
	const handleSort = () => {
		if (sortId === SORT.down) {
			setSortId(SORT.up);
		} else {
			if (sortId === SORT.up) {
				setSortId(SORT.down);
			}
		}
	};

	const [searchName, setSearchName] = useState('');
	// Tìm kiếm
	const findName = function (list) {
		let res = [...list];
		if (searchName) {
			res = res.filter((el) =>
				el.name.toLowerCase().includes(searchName.toLowerCase()),
			);
		}
		if (sortId !== SORT.down) {
			res.sort((a, b) => (a.value < b.value ? 1 : -1));
		} else {
			res.sort((a, b) => (a.value > b.value ? 1 : -1));
		}
		return res;
	};

	// get ccurrent Page
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	if (listPromotion?.listPromotion?.pros) {
		var currentPosts = listPromotion?.listPromotion?.pros.slice(
			indexOfFirstPost,
			indexOfLastPost,
		);
	}

	// function paginate
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	if (listPromotion?.listPromotion?.pros) {
		var getUsers = findName(currentPosts).map(
			(item, index) => {
				return (
					<tr key={index}>
						<td className='border border-slate-400 text-center'>
							{item.value}
						</td>
						<td className='border border-slate-400 text-center'>
                        {new Date(item.DateOfStart).toLocaleDateString('vi-VI')}
						</td>
						<td className='border border-slate-400 text-center'>
                            {new Date(item.DateOfEnd).toLocaleDateString('vi-VI')}
						</td>
						<td className='border border-slate-400 text-center'>
							<Link to={`/Admin/QuanLyPromotion/UpdatePromotion/${item._id}`}>
								<button type='button' className='btn btn-info'>
									Update
								</button>
							</Link>
						</td>
						<td className='border border-slate-400 text-center'>
							<Link to={`/Admin/QuanLyPromotion/DeletePromotion/${item._id}`}>
								<button type='button' className='btn btn-warning'>
									Delete
								</button>
							</Link>
						</td>
					</tr>
				);
			},
		);
	}
	return (
		<div className='w-full bg-[#fcf8f2]'>
			<h1 className='text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl'>
				QUẢN LÝ KHUYẾN MẠI
			</h1>
			<Link to={`/Admin/QuanLyPromotion/AddNewPros`}>
				<button className='btn btn-outline-success mx-[20px] my-4'>
					Thêm mới
				</button>
			</Link>
			<div className='p-[20px]'>
				<table className='table table-hover leading-[40px]'>
					<thead>
						<tr className='text-center text-[#f53737]'>
							<th
								className='border border-slate-400'
								onClick={handleSort}>
								<button className='btn btn-outline-success'>
									Giá trị giảm giá {getSortAge()}
								</button>
							</th>
							<th className='border border-slate-400'>Từ Ngày</th>
							<th className='border border-slate-400'>Đến Ngày</th>
							<th className='border border-slate-400'>Sửa</th>
							<th className='border border-slate-400'>Xóa</th>
						</tr>
					</thead>
					<tbody className='font-Roboto font-[500px]'>
						{listPromotion?.listPromotion?.pros ? getUsers : ''}
					</tbody>
				</table>
			</div>

			{listPromotion?.listPromotion?.pros ? (
				<PageProd
					postsPerPage={postsPerPage}
					totalPosts={listPromotion?.listPromotion?.pros.length}
					paginate={paginate}
				/>
			) : (
				''
			)}
		</div>
	);
}
