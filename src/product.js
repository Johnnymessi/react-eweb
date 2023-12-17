// Import React và các thành phần khác cần thiết
import React from 'react';
import Productdetail from './productdetail'; // Import component Productdetail
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Import biểu tượng từ thư viện react-icons
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import './product.css'; // Import file CSS cho component Product

// Khai báo functional component Product nhận các props: product, setProduct, detail, view, close, setClose, addtocart
const Product = ({ product, setProduct, detail, view, close, setClose, addtocart }) => {

    // Hàm lọc sản phẩm theo danh mục
    const filtterproduct = (productCategory) => {
        // Lọc danh sách sản phẩm chi tiết dựa trên danh mục được chọn
        const update = Productdetail.filter((x) => {
            return x.Cat === productCategory;
        });
        // Cập nhật danh sách sản phẩm hiển thị
        setProduct(update);
    };

    // Hàm hiển thị tất cả sản phẩm
    const AllProducts = () => {
        setProduct(Productdetail);
    };

    // Render component Product
    return (
        <>
            {/* Hiển thị chi tiết sản phẩm khi được chọn */}
            {close ? (
                <div className='product_detail'>
                    <div className='container'>
                        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                        {detail.map((curElm) => {
                            return (
                                <div className='productbox' key={curElm.id}>

                                    <div className='img-box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                    </div>

                                    <div className='detail'>
                                        <h4>{curElm.Title}</h4>
                                        <h2>{curElm.Cat}</h2>
                                        <p>Toàn bộ sản phẩm chất lượng đều là sản phẩm chính hãng</p>
                                        <h3>{curElm.Price}</h3>
                                        <button onClick={() => addtocart(curElm)}>Thêm giỏ hàng</button>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}

            {/* Hiển thị danh sách sản phẩm */}
            <div className='products'>
                <h2>Sản phẩm</h2>
                <p>Trang chủ - Sản Phẩm</p>

                <div className='container'>

                    {/* Bộ lọc sản phẩm */}
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

                    {/* Box chứa sản phẩm */}
                    <div className='productbox'>
                        <div className='contant'>
                            {product.map((curElm) => {
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

                                            {/* Hiển thị giá tiền theo định dạng Việt Nam */}
                                            {/* CT: parseInt(dữ liệu - data).toLocaleString() */}
                                            <h5>{parseInt(curElm.Price).toLocaleString()}</h5>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

// Xuất component Product để sử dụng ở nơi khác trong ứng dụng
export default Product;
