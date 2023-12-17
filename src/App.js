import React from 'react'
import { useState } from 'react'
import Nav from './nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './rout'
import Footer from './footer'
import Productdetail from './productdetail'
import Cart from './cart'

const App = () => {

  // add to cart
  const [cart, setCart] = useState([])

  // product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])

  const view = (product) => {
    // Sao chép thông tin của sản phẩm được chọn và đặt vào state detail
    setDetail([{ ...product }]);
    // Mở cửa sổ chi tiết sản phẩm (setClose(true))
    setClose(true);
  };


  // Mục đích: Mục đích của hàm này là hiển thị chi tiết của một sản phẩm khi người dùng chọn xem.
  // Đặc điểm quan trọng:
  // Hàm sử dụng setDetail để cập nhật state detail với thông tin chi tiết của sản phẩm được chọn.
  // setClose(true) được sử dụng để mở cửa sổ chi tiết sản phẩm.


  //filter product
  const [product, setProduct] = useState(Productdetail);

  const searchbtn = (product) => {
    // Lọc danh sách sản phẩm dựa trên loại sản phẩm được chọn
    const change = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    // Cập nhật state product với danh sách sản phẩm được lọc
    setProduct(change);
  };

  // Mục đích: Hàm này được gọi khi người dùng tìm kiếm sản phẩm theo loại.
  // Đặc điểm quan trọng:
  // Hàm sử dụng filter để lọc danh sách sản phẩm Productdetail dựa trên loại sản phẩm được chọn.
  // State product được cập nhật với danh sách sản phẩm được lọc.


  const addtocart = (product) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const exist = cart.find((x) => {
      return x.id === product.id;
    });

    // Nếu sản phẩm đã tồn tại, hiển thị thông báo
    if (exist) {
      alert('Sản phẩm đã được thêm vào giỏ hàng');
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng với số lượng là 1
      setCart([...cart, { ...product, qty: 1 }]);
      // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
      alert('Sản phẩm đã thêm vào giỏ hàng');
    }
  };

  // Mục đích: Hàm này được gọi khi người dùng muốn thêm một sản phẩm vào giỏ hàng.
  // Đặc điểm quan trọng:
  // Sử dụng find để kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa.
  // Nếu sản phẩm đã tồn tại, hiển thị thông báo.
  // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng với số lượng là 1 và hiển thị thông báo.


  return (
    <>
      {/* Sử dụng BrowserRouter để bọc toàn bộ ứng dụng */}
      <BrowserRouter>
        {/* Component Navbar (Nav) với hàm tìm kiếm sản phẩm */}
        <Nav searchbtn={searchbtn} />


        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart} />

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App