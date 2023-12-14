import React from 'react'
import Productdetail from './productdetail'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import './product.css'

const Product = ({ product, setProduct, detail, view, close, setClose, addtocart }) => {


    // Lọc danh mục sản phẩm

    const filtterproduct = (product) => {

        const update = Productdetail.filter((x) => {
            return x.Cat === product;
        })

        setProduct(update);
    }

    const AllProducts = () => {
        setProduct(Productdetail)
    }

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
                                                <h3>{curElm.Price}</h3>
                                                <button>Thêm giỏ hàng</button>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div> : null
            }



            {/* PRODUCT */}
            <div className='products'>


                <h2>Sản phẩm</h2>
                <p>Trang chủ - Sản Phẩm</p>

                <div className='container'>

                    {/* Filter */}
                    <div className='filter'>
                        <div className='categories'>
                            <h3>Danh mục</h3>
                            <ul>
                                <li onClick={() => AllProducts()}>Tất Cả Sản Phẩm</li>
                                <li onClick={() => filtterproduct("Mobile")}>Mobile</li>
                                <li onClick={() => filtterproduct("Watch")}>Watch</li>
                                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                                <li onClick={() => filtterproduct("Mac")}>Mac</li>
                            </ul>
                        </div>
                    </div>

                    {/* PRODUCT BOX */}
                    <div className='productbox'>

                        <div className='contant'>
                            {
                                product.map((curElm) => {
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
                                                <h5>{curElm.Price}</h5>

                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

            </div>



        </>
    )
}

export default Product