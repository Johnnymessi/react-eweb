import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'

const Footer = () => {
    return (
        <>

            <div className='footer'>

                <div className='container'>

                    <div className='about'>

                        <div className='logo'>
                            <img width='200' src='./img/logo.png' alt='logo'></img>
                        </div>

                        <div className='detail'>
                            <p>Chúng tôi có một nhóm thiết kế và phát triển tạo ra những sản phẩm chất lượng cao</p>
                            <div className='icon'>
                                <li><RiFacebookFill /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><BsYoutube /></li>
                            </div>
                        </div>

                    </div>

                    <div className='account'>
                        <h3>Tài khoản</h3>
                        <ul>
                            <li>Tài khoản</li>
                            <li>Đặt hàng</li>
                            <li>Giỏ hàng</li>
                            <li>Vận chuyển</li>
                            <li>Hoàn trả</li>
                        </ul>
                    </div>


                    <div className='page'>

                        <h3>Các Trang</h3>

                        <ul>
                            <li>Trang chủ</li>
                            <li>Giới thiệu</li>
                            <li>Liên hệ</li>
                            {/* <li>Terma & Condition</li> */}
                            <li>Chính sách & Điều khoản</li>
                        </ul>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer