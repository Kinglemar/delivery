<template>
  <section class="navbar-logo-left">
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      role="banner"
      class="navbar-logo-left-container w-nav"
    >
      <div class="container overflow-visible">
        <div class="navbar-wrapper">
          <NuxtLink to="/" class="navbar-brand w-nav-brand">
            <svg
              width="86"
              height="30"
              viewBox="0 0 86 30"
              fill="none"
              class="logo-iimage"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.84 0.799999H0V23.2H12.256V19.872H3.84V0.799999Z"
                fill="#0E0F18"
              />
              <path
                d="M21.171 23.616C26.643 23.616 29.747 19.2 29.747 14.752C29.747 10.272 26.643 5.856 21.171 5.856C15.667 5.856 12.563 10.272 12.563 14.752C12.563 19.2 15.667 23.616 21.171 23.616ZM21.171 20.288C18.323 20.288 16.403 18.112 16.403 14.752C16.403 11.392 18.323 9.184 21.171 9.184C23.987 9.184 25.907 11.392 25.907 14.752C25.907 18.112 23.987 20.288 21.171 20.288Z"
                fill="#0E0F18"
              />
              <path
                d="M46.5413 29.6V26.272H38.5733C38.2853 26.272 38.2533 26.144 38.3173 25.952L39.2773 23.456C45.0373 24.032 48.7173 19.552 48.7173 14.752C48.7173 12 47.5333 9.408 45.4853 7.808C46.5732 5.696 48.0452 4.032 50.3173 4.128V0.799999C47.3413 0.799999 44.4293 2.944 42.4773 6.24C41.7733 5.984 40.9733 5.856 40.1413 5.856C34.6372 5.856 31.5333 10.272 31.5333 14.752C31.5333 17.92 33.1333 20.928 35.8533 22.496L33.6772 28.48C33.4212 29.184 33.7093 29.6 34.3813 29.6H46.5413ZM40.1413 20.288C37.2933 20.288 35.3733 18.112 35.3733 14.752C35.3733 11.392 37.2933 9.184 40.1413 9.184C42.9573 9.184 44.8773 11.392 44.8773 14.752C44.8773 18.112 42.9573 20.288 40.1413 20.288Z"
                fill="#0E0F18"
              />
              <path
                d="M51.2693 3.552H55.4293V0H51.2693V3.552ZM55.3013 23.2V6.272H51.4613V23.2H55.3013Z"
                fill="#0E0F18"
              />
              <path
                d="M73.0732 18.752C73.0732 15.552 70.1292 14.24 67.2172 13.632C64.6572 13.12 62.3853 12.576 62.3853 11.04C62.3853 9.76 63.6333 9.088 65.8092 9.152C68.0813 9.184 69.2012 10.496 69.0413 12.032H72.6572C72.6572 8.544 70.1612 5.856 65.6492 5.856C61.5852 5.856 58.7052 7.616 58.6413 10.752C58.5452 14.048 60.9452 14.944 63.8892 15.776C66.5132 16.448 69.3932 16.96 69.3932 18.432C69.3932 19.84 68.1772 20.416 66.0332 20.384C63.7932 20.384 61.9373 19.616 61.9373 17.504H58.1292C58.1292 21.216 61.4892 23.616 66.2892 23.616C70.6412 23.616 73.0732 22.208 73.0732 18.752Z"
                fill="#0E0F18"
              />
              <path
                d="M82.426 20.064C81.05 20.064 80.346 19.296 80.346 17.568V9.6H84.954V6.272H80.346V1.984H76.538V6.272H74.842V9.6H76.538V18.272C76.538 21.632 78.874 23.392 81.946 23.392H85.274V20.064H82.426Z"
                fill="#0E0F18"
              />
            </svg>
            </NuxtLink>
          <nav
            role="navigation"
            class="w-nav-menu md:block hidden md:8/12 lg:w-[30rem]"
            style="transform: translateY(0px) translateX(0px)"
          >
            <ul role="list" class="nav-menu-two w-list-unstyled font-bold">
              <li>
                <NuxtLink class="nav-link" to="/about-us"> About us</NuxtLink>
              </li>

              <li>
                <NuxtLink class="nav-link" to="/services">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink class="nav-link" to="/contact">Contact us</NuxtLink>
              </li>
              <li>
                <NuxtLink class="nav-link" to="/">Careers</NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="md:flex hidden">
            <div class="btn-wrapper">
              <div class="button-hover-bg"></div>
              <NuxtLink
                to="/quote"
                class="primary-button reverse-color w-inline-block"
                ><div class="button-content">
                  <div class="button-color color-white">Get Quote</div>
                </div></NuxtLink
              >
            </div>
          </div>
          <div
            @click="visible = true"
            class="block md:hidden w-icon-nav-menu cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path
                  d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"
                  opacity=".5"
                />
                <path
                  d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75Zm0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75Zm0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        class="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
        style="display: none"
      ></div>
    </div>
    <Sidebar
      class="w-full md:w-20rem lg:w-30rem"
      @hide="visible = false"
      position="right"
      :dismissable="true"
      :blockScroll="false"
      :baseZIndex="62"
      v-model:visible="visible"
    >
      <template #header>
        <div class="flex relative">
          <button
            @click="goHome"
            class="p-sidebar-icon p-link mr-10 absolute left-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              class="text-violet-400"
            >
              <g fill="currentColor">
                <path
                  d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.06l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 0 0 1.061 1.06l8.69-8.69Z"
                />
                <path
                  d="m12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.43Z"
                />
              </g>
            </svg>
          </button>
        </div>
      </template>
      <div class="min-h-[80vh]">
        <div class="w-full mb-10">
          <p class="text-xl text-black font-bold pb-3">Track your parcel</p>
          <div>
            <input
              v-model="tracker"
              placeholder="Enter a tracking ID"
              class="border rounded-lg p-4 w-full outline-none outline-0"
              type="text"
            />
          </div>
          <button
            @click="audioTracking"
            class="mt-3 w-full text-lg py-3 px-5 border rounded-lg bg-black text-white"
          >
            <span>Search Database</span>
            <span class="hidden">Preloader</span>
          </button>
          <p
            v-if="errMsg"
            class="p-2 text-[9px] font-bold mt-3 rounded bg-red-500 text-white"
          >
            Invalid input. Make sure tracking ID is at least 5 characters long
          </p>
        </div>
        <hr />
        <p class="text-xl text-black font-bold pb-3 mt-6">Links</p>
        <div class="flex flex-wrap justify-evenly gap-y-5 font-bold">
          <button
            @click="gotoAbout"
            class="p-4 w-5/12 border mx-auto text-center bg-[#f4f7ff] text-black rounded-lg"
          >
            About us
          </button>
          <button
            @click="gotoServices"
            class="p-4 w-5/12 mx-auto text-center bg-[#f4f7ff] text-black border rounded-lg"
          >
            Services
          </button>
          <button
            @click="gotoContactUs"
            class="p-4 w-5/12 mx-auto text-center bg-[#f4f7ff] text-black border rounded-lg"
          >
            Contact us
          </button>
          <button
            class="p-4 w-5/12 mx-auto text-center bg-[#f4f7ff] text-black border rounded-lg"
          >
            Careers
          </button>
          <button
            @click="requestQuote"
            class="p-4 w-11/12 mx-auto text-center bg-[#f4f7ff] text-black border rounded-lg"
          >
            Request quote
          </button>
        </div>
      </div>
    </Sidebar>
  </section>
</template>

<script setup>
import { ref } from "vue";

const router = useRouter();
const visible = ref(false);
const errMsg = ref(false);
const tracker = ref("");

const audioTracking = () => {
  let trace = tracker.value;
  if (trace.length < 5) {
    errMsg.value = true;
    setTimeout(() => {
      errMsg.value = false;
    }, 4000);
  } else {
    router.push({ path: "/track", query: { id: trace } });
    visible.value = false;
  }
};

const gotoAbout = () => {
  router.push({ path: "/about-us" });
  visible.value = false;
};
const gotoServices = () => {
  router.push({ path: "/services" });
  visible.value = false;
};
const gotoContactUs = () => {
  router.push({ path: "/contact" });
  visible.value = false;
};
const gotoCareers = () => {
  router.push({ path: "/careers" });
  visible.value = false;
};
const requestQuote = () => {
  router.push({ path: "/quote" });
  visible.value = false;
};
const goHome = () => {
  router.push({ path: "/" });
  visible.value = false;
};
</script>

<style scoped>
.btn-wrapper:hover > div {
  display: none;
  transition: all 200ms ease;
}
.navbar-logo-left-container {
  margin-right: auto;
  margin-left: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: transparent;
}
.w-nav {
  position: relative;
  background: #ddddec;
  z-index: 60;
  position: fixed;
  width: 100%;
}
.nav-link {
  margin-right: 5px;
  margin-left: 5px;
  padding: 5px;
  color: #0e0f18;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25px;
  text-decoration: none;
}
.w-nav:before,
.w-nav:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.container.overflow-visible {
  overflow: visible;
}
.container {
  overflow: hidden;
  width: 100%;
  max-width: 1480px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 40px;
  padding-left: 40px;
}
.w-nav-overlay {
  position: absolute;
  overflow: hidden;
  display: none;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
}
.w-nav:after {
  clear: both;
}
.w-nav:before,
.w-nav:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}

.navbar-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.w-nav-brand {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
}

.nav-menu-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.w-nav-menu {
  position: relative;
  float: right;
}
.nav-menu-two {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}
.nav-right-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.btn-wrapper {
  transition: all 300ms ease;
}
.btn-wrapper {
  position: relative;
  z-index: 0;
  display: inline-block;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button-hover-bg {
  position: absolute;
  left: auto;
  top: auto;
  right: -8px;
  bottom: -8px;
  z-index: -14;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  background-color: #fff;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}
.primary-button.reverse-color {
  z-index: 8;
  padding: 10px 23px;
  background-color: #0e0f18;
  box-shadow: none;
}
.primary-button {
  position: relative;
  z-index: 6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px 36px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #000;
  background-color: #fff;
  box-shadow: 7px 7px 0 0 #000;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  text-decoration: none;
}

.button-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.button-color.color-white {
  color: #fff;
}
.button-color {
  color: #0e0f18;
  font-size: 17px;
  line-height: 150%;
  font-weight: 500;
}
.color-white {
  color: #fff;
}
</style>
