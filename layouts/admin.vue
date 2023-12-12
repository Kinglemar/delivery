<template>
  <main class="bg-whitesmoke">
    <main class="w-screen overflow-y-hidden bg-gray-50">
      <section class="h-full flex justify-between">
        <SideMenu />
        <main
        style="border-radius: 16px;"
          class="absolute right-0 overflow-x-hidden w-10/12 bg-white mb-8 rounded-17xl p-5 pt-0 ml-3 mx-auto lg:mr-8"
        >
          <slot />
        </main>
      </section>
    </main>
  </main>
</template>
