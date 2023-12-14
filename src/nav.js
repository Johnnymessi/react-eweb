import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci'
import { CiLogout } from 'react-icons/ci'
import { Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import './nav.css'
import Home from './home';

const Nav = ({ searchbtn }) => {

    const [search, setSearch] = useState()
    // const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            {/* Free */}
            <div className='free'>

                <div className='icon'>
                    <FaTruckMoving />
                </div>

                <p>
                    Miễn phí vận chuyển với đơn từ 1000$
                </p>

            </div>

            {/* Main_Header */}
            <div className='main_header'>

                <div className='container'>

                    <div className='logo'>
                        <Link to='/'><img width='120' src='./img/logo.png' alt='logo'></img></Link>
                    </div>

                    <div className='search_box'>

                        <input type='text' value={search} placeholder='Tên Sản Phẩm...'
                            autoComplete='off' onChange={(e) => setSearch(e.target.value)} />

                        <button onClick={() => searchbtn(search)}>Tìm kiếm</button>

                    </div>

                    <div className='icon'>

                        {/* {
                            isAuthenticated &&
                            (
                                <div className='account'>

                                    <div className='user_icon'>
                                        <AiOutlineUser />
                                    </div>

                                    
                                    <p>Users</p>
                                </div>
                            )
                        } */}

                        <div className='account'>

                            <div className='user_icon'>
                                <AiOutlineUser />
                            </div>

                            {/* <p>Hello,{user.name}</p> */}
                            <p>Users</p>
                        </div>

                        <div className='second_icon'>

                            <Link to='/' className='link'><AiOutlineHeart /></Link>
                            <Link to='/cart' className='link'><BsBagCheck /></Link>

                        </div>

                    </div>

                </div>

            </div >

            {/* Header */}

            <div className='header'>
                <div className='container'>

                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Trang chủ</Link>
                            </li>

                            <li>
                                <Link to='/product' className='link'>Sản phẩm</Link>
                            </li>

                            <li>
                                <Link to='/about' className='link'>Giới thiệu</Link>
                            </li>

                            <li>
                                <Link to='/contact' className='link'>Liên hệ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='auth'>
                        {/* {
                            isAuthenticated ?
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <CiLogout /></button>
                                :
                                <button onClick={() => loginWithRedirect()}><CiLogin /></button>

                        } */}

                        <button><CiLogin /></button>
                        <button><CiLogout /></button>
                    </div>

                </div>
            </div >


        </>


    )
}

export default Nav