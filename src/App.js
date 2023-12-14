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
    setDetail([{ ...product }])
    setClose(true)
  }

  //filter product
  const [product, setProduct] = useState(Productdetail);

  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }

  const addtocart = (product) => {

    const exist = cart.find((x) => {
      return x.id === product.id
    })

    if (exist) {
      alert("Sản phẩm đã được thêm vào giỏ hàng")
    } else {
      setCart([...cart, { ...product, qty: 1 }])
      alert('Sản phẩm đã thêm vào giỏ hàng')
    }
  }
  return (
    <>
      <BrowserRouter>
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