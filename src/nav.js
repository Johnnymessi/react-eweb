// Import React và các thành phần cần thiết
import React, { useState } from 'react';
import { FaTruckMoving } from 'react-icons/fa'; // Import biểu tượng từ thư viện react-icons
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom để thực hiện điều hướng
// import { useAuth0 } from '@auth0/auth0-react'; // Commented out, potential authentication library
import './nav.css'; // Import file CSS cho component Nav
// import Home from './home'; // Commented out, potential import of Home component

// Khai báo functional component Nav nhận một prop searchbtn
const Nav = ({ searchbtn }) => {

    // Sử dụng React Hooks để lưu trạng thái của biến search
    const [search, setSearch] = useState();
    // const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0(); // Commented out, potential authentication logic

    // Render component Nav
    return (
        <>
            {/* Mục hiển thị thông báo vận chuyển miễn phí */}
            <div className='free'>
                <div className='icon'>
                    <FaTruckMoving />
                </div>
                <p>Miễn phí vận chuyển với đơn từ 1000$</p>
            </div>

            {/* Phần Header chính */}
            <div className='main_header'>
                <div className='container'>
                    {/* Logo của trang */}
                    <div className='logo'>
                        <Link to='/'><img width='120' src='./img/logo.png' alt='logo'></img></Link>
                    </div>

                    {/* Ô tìm kiếm */}
                    <div className='search_box'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Tên Sản Phẩm...'
                            autoComplete='off'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={() => searchbtn(search)}>Tìm kiếm</button>
                    </div>

                    {/* Các biểu tượng và liên kết */}
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
            </div>

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
            </div>
        </>
    );
}

// Xuất component Nav để sử dụng ở nơi khác trong ứng dụng
export default Nav;
