/** @format */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageProd from '../Pagination/PageProd';
import { getAllDanhMuc } from '../../../Features/MenuSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function QuanLyLoaiSP() {
	const dispatch = useDispatch();
	const listLoai = useSelector((state) => state.listDanhMuc);
	const loaiSP = listLoai.listCata.catas;
	useEffect(() => {
		dispatch(getAllDanhMuc());
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
			return 'a-z';
		}
		if (sortId === SORT.up) {
			return 'z-a';
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
			res.sort((a, b) => (a.name < b.name ? 1 : -1));
		} else {
			res.sort((a, b) => (a.name > b.name ? 1 : -1));
		}
		return res;
	};
	// get ccurrent Page
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	if (loaiSP) {
		var currentPosts = loaiSP.slice(indexOfFirstPost, indexOfLastPost);
	}

	// function paginate
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	if (loaiSP) {
		var getListLoaiSP = findName(currentPosts).map((item, index) => {
			return (
				<tr key={index}>
					<td className='border border-slate-400 text-center'>
						{item.name}
					</td>
					<td className='border border-slate-400 text-center'>
						<Link to={`/Admin/QuanLyHangSX/Update/${item._id}`}>
							<button type='button' className='btn btn-info'>
								Update
							</button>
						</Link>
					</td>
					<td className='border border-slate-400 text-center'>
						<Link to={`/Admin/QuanLyHangSX/Delete/${item._id}`}>
							<button type='button' className='btn btn-warning'>
								Delete
							</button>
						</Link>
					</td>
				</tr>
			);
		});
	}
	return (
		<div className='w-full bg-[#fcf8f2]'>
			<h1 className='text-[#f73d3d] text-[40px] w-full text-center bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] p-[15px] rounded-xl'>
				QUẢN LÝ DANH MỤC
			</h1>
			<Link to={`/Admin/QuanLyHangSX/AddNewLoaiSP`}>
				<button className='btn btn-outline-success mx-[20px] my-4'>
					Thêm mới
				</button>
			</Link>
			{/* // Tim kiem */}
			<div className='flex flex-row justify-start items-center px-[20px] mb-[20px]'>
				<label className='mr-[30px] w-32'>Tên tìm kiếm</label>
				<div className='input-group mb-3'>
					<span className='input-group-text' id='basic-addon1'>
						<i className='fa-solid fa-magnifying-glass'></i>
					</span>
					<input
						type='text'
						name=''
						id=''
						placeholder='Tên cần tìm'
						value={searchName}
						onChange={(e) => setSearchName(e.target.value)}
						className='p-[15px] border outline-none form-control'
					/>
				</div>
			</div>
			<div className='p-[20px]'>
				<table className='table table-hover leading-[40px]'>
					<thead>
						<tr className='text-center text-[#f53737]'>
							<th
								className='border border-slate-400'
								onClick={handleSort}>
								<button className='btn btn-outline-success'>
									Tên Loại SP {getSortAge()}
								</button>
							</th>
							<th className='border border-slate-400'>Sửa</th>
							<th className='border border-slate-400'>Xóa</th>
						</tr>
					</thead>
					<tbody className='font-Roboto font-[500px]'>
						{loaiSP ? getListLoaiSP : ''}
					</tbody>
				</table>
			</div>

			{loaiSP ? (
				<PageProd
					postsPerPage={postsPerPage}
					totalPosts={loaiSP.length}
					paginate={paginate}
				/>
			) : (
				''
			)}
		</div>
	);
}
