# Tạo file Nav -> nav.js & nav.css
Đưa Nav.js khai báo ở App.js

npm install react-icons --save

npm install react-router-dom

<!-- Tạo chức năng login logout -->
npm install @auth0/auth0-react


## Quá trình hoạt động của ứng dụng:
 <!--1. Bắt đầu từ component App: -->

'App' là component gốc, nó chứa toàn bộ ứng dụng React.

<!-- 2. State và Hàm trong App: -->

'App' sử dụng 'useState' để quản lý state 'cart', 'detail', và 'product'.
'view': Mở chi tiết sản phẩm khi người dùng chọn xem.
'searchbtn': Lọc danh sách sản phẩm theo loại.
'addtocart': Thêm sản phẩm vào giỏ hàng.

<!-- 3. Component Nav: -->

Nhận prop 'searchbtn' từ 'App' để chịu trách nhiệm về chức năng tìm kiếm.

<!-- 4. Component Rout: -->

Nhận các props như 'product', 'setProduct', 'detail', 'view', 'close','setClose', 'cart', 'setCart', và 'addtocart' từ App.

Chứa các route ('Home', 'Product', 'Cart') để hiển thị các phần khác nhau của ứng dụng.

<!-- 5. Component 'Home': -->

Nhận các props như 'detail', 'view', 'close', và 'addtocart' từ Rout.

Hiển thị các sản phẩm, banner, và phần giới thiệu.

<!-- 6. Component 'Product': -->

Nhận các props như product, 'setProduct', 'detail', 'view', 'close', và 'addtocart' từ 'Rout'.

Hiển thị danh sách sản phẩm và các chức năng liên quan.

<!-- 7. Component 'Cart': -->

Nhận các props như cart và 'setCart' từ 'Rout'.

Hiển thị giỏ hàng, cho phép tăng/giảm số lượng sản phẩm và xóa sản phẩm khỏi giỏ.

<!-- 8. Component 'Footer': -->

Component chứa thông tin về cửa hàng và các liên kết xã hội.

<!-- Tư duy và Liên kết giữa các Component: -->

<!-- Tư duy chung: -->
'App' là component chủ chốt quản lý toàn bộ trạng thái và logic chính của ứng dụng.

Nav, 'Rout', 'Home', 'Product', 'Cart', và 'Footer' là các phần của giao diện và chịu trách nhiệm hiển thị và tương tác với người dùng.

<!-- Liên kết giữa các Component: -->

'App' truyền các hàm quản lý state xuống các component con thông qua props.


Nav truyền hàm searchbtn xuống để xử lý tìm kiếm.
'Rout' truyền các props xuống các route con ('Home', 'Product', 'Cart').

Các component con như 'Home', 'Product', và 'Cart' tương tác với người dùng và gọi các hàm được truyền từ'App' để cập nhật trạng thái.

<!-- Lưu ý: -->
Việc sử dụng React Router giúp quản lý điều hướng trong ứng dụng.
Các hàm xử lý tương tác với sản phẩm và giỏ hàng được quản lý chủ yếu tại component 'App', giúp duy trì một nguồn dữ liệu chung và giảm sự phức tạp của logic.


## Sơ đồ
+----------------------------------+
|           App Component          |
| +-----------------------------+  |
| |        Navigation         |  |
| | +-------------------------+ |  |
| | |      Home Component      | |  |
| | | +---------------------+ | |  |
| | | |   Banner Component  | | |  |
| | | +---------------------+ | |  |
| | | |   Product List      | | |  |
| | | | +-----------------+ | | |  |
| | | | | Product Card   | | | |  |
| | | | +-----------------+ | | |  |
| | +-------------------------+ |  |
| +-----------------------------+  |
| |       Product Detail       |  |
| | +-------------------------+ |  |
| | |    Detail Component     | |  |
| | +-------------------------+ |  |
| | |    Add to Cart Button   | |  |
| | +-------------------------+ |  |
| +-----------------------------+  |
| |         Cart Component      |  |
| | +-------------------------+ |  |
| | |      Cart Items         | |  |
| | | +---------------------+ | |  |
| | | |   Cart Item Card   | | |  |
| | | +---------------------+ | |  |
| | | |   Checkout Button  | | |  |
| | | +---------------------+ | |  |
| | +-------------------------+ |  |
| +-----------------------------+  |
+----------------------------------+
