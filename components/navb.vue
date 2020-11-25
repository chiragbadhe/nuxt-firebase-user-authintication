<template>

      <header class="text-gray-700 body-font">
  <div class="container mx-auto flex flex-wrap pt-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">tailblocks</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NuxtLink class="p-2 " to="/">Home</NuxtLink>
      <NuxtLink class="p-2 " to="/login">login</NuxtLink>
      <NuxtLink class="p-2 " to="/signup">SignUp</NuxtLink>
      <NuxtLink class="p-2 " to="/account">Account</NuxtLink>
      

    </nav>
  </div>
</header>
</template>