import React from 'react'
import { useState } from 'react'

import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs'
import { AiOutlineHeart } from "react-icons/ai";

import Homeproduct from './homeproduct'

import './home.css'

const Home = ({ detail, view, close, setClose, addtocart }) => {

    const [homeProduct, setHomeProduct] = useState(Homeproduct)

    return (
        <>

            {/* Product detail */}
            {
                close ?

                    <div className='product_detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                            {
                                detail.map((curElm) => {
                                    return (
                                        <div className='productbox'>

                                            <div className='img-box'>
                                                <img src={curElm.Img} alt={curElm.Title}></img>
                                            </div>

                                            <div className='detail'>
                                                <h4>{curElm.Title}</h4>
                                                <h2>{curElm.Cat}</h2>
                                                <p>Toàn bộ sản phẩm chất lượng đều là sản phẩm chính hãng</p>
                                                {/* Tiền việt */}
                                                <h3>{parseInt(curElm.Price).toLocaleString()}</h3>
                                                <button>Thêm giỏ hàng</button>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div> : null
            }

            {/* TOP - BANNER */}
            <div className='top_banner'>

                <div className='container'>

                    <div className='detail'>

                        <h2>Bộ Sưu Tập Mới Nhất 2023</h2>

                        <Link to='/product' className='link'>Mua ngay <BsArrowRight /></Link>

                    </div>

                    <div className='img_box'>
                        <img width='900' src='./img/slide2.jpg' alt='sliderimg'></img>
                    </div>

                </div>

            </div>

            {/* PRODUCT - TYPE */}

            <div className='product_type'>
                <div className='container'>

                    {/* box 1 */}

                    <div className='box'>

                        <div className='img_box'>
                            <img src='./img/slide3.png' alt='mobile'></img>
                        </div>

                        <div className='detail'>
                            <p>23 sản phẩm</p>
                        </div>

                    </div>

                    {/* box 2 */}

                    <div className='box'>

                        <div className='img_box'>
                            <img src='./img/applewatch.jpg' alt='watch'></img>
                        </div>

                        <div className='detail'>
                            <p>55 sản phẩm</p>
                        </div>

                    </div>

                    {/* box 3 */}

                    <div className='box'>

                        <div className='img_box'>
                            <img src='./img/headphone.jpg' alt='headphone'></img>
                        </div>

                        <div className='detail'>
                            <p>35 sản phẩm</p>
                        </div>

                    </div>

                    {/* box 4 */}

                    <div className='box'>

                        <div className='img_box'>
                            <img src='./img/macmini.png' alt='mac'></img>
                        </div>

                        <div className='detail'>
                            <p>15 sản phẩm</p>
                        </div>

                    </div>


                </div>
            </div>

            {/* ABOUT */}

            <div className='about'>

                <div className='container'>

                    <div className='box'>

                        <div className='icon'>
                            <FiTruck />
                        </div>

                        <div className='detail'>
                            <h3>Miễn phí vận chuyển</h3>
                            <p>Đơn hàng trên $1000</p>
                        </div>

                    </div>

                    <div className='box'>

                        <div className='icon'>
                            <BsCurrencyDollar />
                        </div>

                        <div className='detail'>
                            <h3>Hoàn tiền</h3>
                            <p>Không hài lòng</p>
                        </div>

                    </div>


                    <div className='box'>

                        <div className='icon'>
                            <HiOutlineReceiptPercent />
                        </div>

                        <div className='detail'>
                            <h3>Giảm giá 20%</h3>
                            <p>Đơn hàng trên $1500</p>
                        </div>

                    </div>

                    <div className='box'>

                        <div className='icon'>
                            <BiHeadphone />
                        </div>

                        <div className='detail'>
                            <h3>Chăm sóc khách hàng</h3>
                            <p>24/7</p>
                        </div>

                    </div>

                </div>

            </div>

            {/* PRODUCT */}

            <div className='product'>
                
                <h2>Sản Phẩm Bán Chạy</h2>

                <div className='container'>
                    {
                        Homeproduct.map((curElm) => {
                            return (
                                <div className='box' key={curElm.id}>

                                    <div className='img_box'>

                                        <img src={curElm.Img} alt={curElm.Title}></img>

                                        <div className='icon'>

                                            <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                            <li onClick={() => view(curElm)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>

                                        </div>

                                    </div>

                                    <div className='detail'>

                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>

                                        {/* Tiền việt */}
                                        <h5>{parseInt(curElm.Price).toLocaleString()}</h5>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Banner */}
            <div className='banner'>

                <div className='container'>

                    <div className='detail'>
                        <h4>Sản Phẩm Mới Nhất</h4>
                        <h3>IPhone 15 ProMax</h3>
                        <p>25.000.000</p>
                        <Link to='/product' className='link'>Mua ngay <BsArrowRight /> </Link>
                    </div>

                    <div className='img_box'>
                        <img width='100%' height='650' src='./img/slide3.png' alt='sliderimg'></img>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home