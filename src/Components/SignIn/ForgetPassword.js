/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { forgetPassword, getAllUser } from '../../Features/AuthSlice';

export default function ForgetPassword() {
	const [formData, setformData] = useState({
		phone: '',
		email: '',
	});
    const [password, setPassword] = useState('')
	const {phone, email } = formData;
	const dispatch = useDispatch();
	const allUser = useSelector((state) => state.auth);
	const onChange = (e) => {
		setformData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		dispatch(getAllUser());
	}, []);
	const navigate = useNavigate();
	const ForgetPassword = async (e) => {
		e.preventDefault();
		if (allUser?.listUser?.users) {
			var dem = 0;
            const init = {
                id: ''
            }
			for (let i = 0; i < allUser?.listUser?.users.length; i++) {
				if (allUser?.listUser?.users[i].email === email && allUser?.listUser?.users[i].phone === phone) {
					dem++;
                    init.id = allUser?.listUser?.users[i]._id
				}
			}
			if (dem == 1) {
                setPassword('User123')
                dispatch(forgetPassword(init))
				toast.success('Mật khẩu đã được đổi mới!!! Vui lòng nhớ mật khẩu này');
			} else {
				toast.error('Thông tin nhập vào không đúng???');
			}
		}
	};

	return (
		<div className='w-full mx-auto h-full mt-[50px] lg:mt-[0px] '>
			<section className='w-full h-full gradient-form bg-[#fff9ef] md:h-screen'>
				<div className='container pt-[50px] lg:pt-[130px] px-6 h-full'>
					<div className='flex justify-center items-start flex-wrap h-full text-gray-800'>
						<div className='w-full xl:w-[40%]'>
							<div className='block bg-white shadow-lg rounded-lg'>
								<div className='w-full lg:flex lg:flex-wrap g-0'>
									<div className='w-full px-4 md:px-0'>
										<div className='md:p-12'>
                                            {/* image */}
											<div className='text-center'>
												<img
													className='mx-auto w-48'
													src={require('../FooterAndHeader/Images/logo2.png')}
													alt='logo'
												/>
												<h4 className='text-xl font-semibold mt-1 mb-4 lg:mb-12 pb-1'>
													Welcom to SaLi Store
												</h4>
											</div>
                                            {/* text */}
											<p className='inline-block text-center w-full mb-4 text-[20px]'>
												Forget Password
											</p>
                                            {/* form */}
											<form
												className='form'
												onSubmit={ForgetPassword}>
												<div className='mb-4 form-group'>
													<input
														type='text'
														className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                           border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														placeholder='Số điện thoại *'
														name='phone'
														value={phone}
														onChange={onChange}
														required
														pattern='[0][0-9]{9}'
													/>
												</div>
												<div className='mb-4 form-group'>
													<input
														type='email'
														className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                           border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														placeholder='Email Address *'
														name='email'
														value={email}
														onChange={onChange}
														required
													/>
												</div>
												<input
													type='submit'
													className='bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[23px]
                          font-medium text-xs leading-tight uppercase rounded shadow-md 
                          hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
													value='Get Your Password'
												/>
											</form>
                                            <div className='mb-4 pb-[15px]'>
													<input
														className='w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                         border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														type='text'
														placeholder='Password'
														name='password'
														value={password}
                                                        disabled
													/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
