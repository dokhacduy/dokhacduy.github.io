let cart = []; // Khởi tạo mảng giỏ hàng rỗng

function addToCart(product) {
    cart.push(product); // Thêm sản phẩm vào giỏ hàng
    alert(product + " đã được thêm vào giỏ hàng!"); // Hiển thị thông báo với tên sản phẩm
    updateCart(); // Cập nhật lại giao diện giỏ hàng
}

function updateCart() {
    const cartItems = document.getElementById("cartItems"); // Lấy phần tử UL chứa danh sách giỏ hàng
    cartItems.innerHTML = ""; // Xóa các mục hàng trước đó

    cart.forEach((item, index) => { // Duyệt qua từng sản phẩm trong giỏ hàng
        const li = document.createElement("li"); // Tạo phần tử LI mới
        li.className = "list-group-item d-flex justify-content-between align-items-center"; // Thêm các lớp của Bootstrap
        li.textContent = item; // Đặt nội dung của mục hàng là tên sản phẩm

        // Tạo nút Xóa và xử lý sự kiện khi nhấn vào nó
        const removeButton = document.createElement("button");
        removeButton.className = "btn btn-danger btn-sm";
        removeButton.textContent = "Xóa";
        removeButton.onclick = () => removeFromCart(index); // Gọi hàm removeFromCart với chỉ số sản phẩm

        // Thêm nút Xóa vào mục hàng
        li.appendChild(removeButton);

        // Thêm mục hàng vào danh sách giỏ hàng
        cartItems.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng dựa vào chỉ số
    updateCart(); // Cập nhật lại giao diện giỏ hàng
}

function checkout() {
    if (cart.length === 0) { // Nếu giỏ hàng rỗng
        alert("Giỏ hàng của bạn đang trống!"); // Hiển thị thông báo
    } else {
        alert("Cảm ơn bạn đã mua hàng!"); // Hiển thị thông báo cảm ơn đã mua hàng
        cart = []; // Đặt giỏ hàng về trạng thái rỗng
        updateCart(); // Cập nhật lại giao diện giỏ hàng
        $('#cartModal').modal('hide'); // Đóng modal giỏ hàng bằng jQuery
    }
}
