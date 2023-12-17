// Import React và các thành phần cần thiết từ react-router-dom
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home'; // Import component Home
import Product from './product'; // Import component Product
import Cart from './cart'; // Import component Cart

// Khai báo functional component Rout nhận các props: product, setProduct, detail, view, close, setClose, cart, setCart, addtocart
const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addtocart }) => {
    return (
        <>
            {/* Sử dụng React Router để quản lý các route trong ứng dụng */}
            <Routes>
                {/* Route cho trang chủ */}
                <Route path='/' element={<Home
                    detail={detail}
                    view={view}
                    close={close}
                    setClose={setClose}
                    addtocart={addtocart}
                />} />

                {/* Route cho trang sản phẩm */}
                <Route path='/product' element={<Product
                    product={product}
                    setProduct={setProduct}
                    detail={detail}
                    view={view}
                    close={close}
                    setClose={setClose}
                    addtocart={addtocart}
                />} />

                {/* Route cho trang giỏ hàng */}
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            </Routes>
        </>
    );
}

// Xuất component Rout để sử dụng ở nơi khác trong ứng dụng
export default Rout;
