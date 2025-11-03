<template>
  <header class="bg-[#2c3848] text-white">
    <div class="max-w-7xl mx-auto flex items-center justify-between py-2 md:px-8">
      <div class="text-2xl font-bold tracking-wide">TECHGO</div>
      <div class="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          class="grow rounded-l-lg px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button
          class="bg-[#f4b400] hover:bg-[#e0a800] px-4 py-2 rounded-r-lg flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>
      </div>

      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-2 cursor-pointer hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M12 12a5 5 0 100-10 5 5 0 000 10z"
            />
          </svg>
          <div class="text-sm">
            <p>Đăng nhập / Đăng ký</p>
            <p class="text-xs text-gray-300">Tài khoản của tôi</p>
          </div>
        </div>

        <div class="relative flex items-center space-x-2 cursor-pointer hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.45H19m-9 4a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          <span>Giỏ hàng</span>
          <span
            class="absolute -top-1 -right-2 bg-red-600 text-xs text-white font-bold rounded-full px-[6px] py-[1px]"
          >
            0
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
