<template>
  <footer class="mt-10">
    <div class="bg-sky-500 text-white p-4">
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-3 md:space-y-0"
      >
        <h2 class="text-xl font-semibold flex items-center gap-2">✉️ Đăng ký nhận bản tin</h2>
        <div class="flex items-center bg-white rounded-lg overflow-hidden w-full md:w-1/2">
          <input
            type="email"
            placeholder="Vui lòng nhập email của bạn..."
            class="grow px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button class="bg-[#f4b400] text-white font-semibold px-6 py-2 hover:bg-[#e0a800]">
            ĐĂNG KÝ
          </button>
        </div>
      </div>

      <p class="text-center mt-3 text-sm">
        Để nhận các thông tin mới từ Techgo cũng như các chương trình khuyến mãi
      </p>
    </div>

    <div class="bg-white py-10 border-t">
      <div class="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 px-6 text-gray-700">
        <div class="col-span-2">
          <h3 class="font-semibold text-lg mb-3">Về Techgo</h3>
          <p class="text-sm leading-relaxed mb-4">
            Với các giải pháp công nghệ tốt nhất, Haravan là tất cả những gì bạn cần để xây dựng
            thương hiệu online, thành công trong bán lẻ và marketing đột phá.
          </p>
          <div class="flex space-x-3">
            <button class="p-2 border rounded-md hover:bg-gray-100">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button class="p-2 border rounded-md hover:bg-gray-100">
              <i class="fab fa-twitter"></i>
            </button>
            <button class="p-2 border rounded-md hover:bg-gray-100">
              <i class="fab fa-instagram"></i>
            </button>
            <button class="p-2 border rounded-md hover:bg-gray-100">
              <i class="fab fa-google-plus-g"></i>
            </button>
            <button class="p-2 border rounded-md hover:bg-gray-100">
              <i class="fab fa-youtube"></i>
            </button>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-3">Thông tin liên hệ</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <i class="fas fa-map-marker-alt mt-1"></i>
              Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí
              Minh.
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-phone-alt"></i>
              1900.000.XXX
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-envelope"></i>
              hi@techgo.abc
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-3">Hỗ trợ khách hàng</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-sky-500">Tìm kiếm</a></li>
            <li><a href="#" class="hover:text-sky-500">Giới thiệu</a></li>
            <li><a href="#" class="hover:text-sky-500">Chính sách đổi trả</a></li>
            <li><a href="#" class="hover:text-sky-500">Chính sách bảo mật</a></li>
            <li><a href="#" class="hover:text-sky-500">Điều khoản dịch vụ</a></li>
            <li><a href="#" class="hover:text-sky-500">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-3">Liên kết</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-sky-500">Sản phẩm khuyến mãi</a></li>
            <li><a href="#" class="hover:text-sky-500">Sản phẩm nổi bật</a></li>
            <li><a href="#" class="hover:text-sky-500">Tất cả sản phẩm</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-3">Chính sách</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-sky-500">Chính sách đổi trả</a></li>
            <li><a href="#" class="hover:text-sky-500">Chính sách bán hàng</a></li>
            <li><a href="#" class="hover:text-sky-500">Chính sách giao hàng</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t mt-8 pt-4 text-center text-sm text-gray-600">
        Copyright © 2025 <span class="font-semibold">TechGO</span>. Powered by Haravan
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
