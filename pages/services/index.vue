<template>
  <section>
    <div class="container mt-14 mb-10 mx-auto w-11/12">
      <div class="banner-inner">
        <div class="banner-content">
          <h1
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="banner-title md:text-8xl text-6xl"
          >
            Services
          </h1>
        </div>
      </div>
    </div>

    <div class="w-11/12 md:w-10/12 mx-auto lg:flex gap-5 lg:mb-28 mb-10">
      <div
        class="lg:h-[33rem] lg:w-6/12 mx-auto w-full border rounded-lg shadow-md p-8 bg-white flex flex-col justify-center lg:mb-0 mb-4"
      >
        <div>
          <h1 class="md:text-5xl text-3xl font-bold mb-5">
            Unbeatable Trucking and Transport Services
          </h1>
          <p class="text-lg font-bold my-3">
            Eliite Logistics is world leading logistic service company and
            Provide First-Class Solution.
          </p>
          <p class="text-base my-3">
            Eliite Logistics is the world’s leading logistic service company, We
            have a wide experience in overland industry specific logistic
            solutions like pharmaceutical logistics, retail and automotive
            logistics by train or road.
          </p>
          <p class="text-base my-3">
            We bring your goods safely to worldwide destinations with our great
            sea fright services.We offer LLC and FLC shipments that are fast and
            effective with no delays.
          </p>
        </div>
      </div>
      <div class="lg:h-[33rem] lg:w-6/12 mx-auto w-full">
        <img
          class="lg:h-[33rem] lg:mb-0 mb-4 mx-auto rounded-md"
          src="~/assets/large_img/shipcargo2.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="w-11/12 md:w-10/12 mx-auto">
      <h1 class="text-4xl text-center font-semibold mb-4">Our services</h1>
      <div
        class="md:gap-4 gap-y-4 mx-auto grid lg:grid-col-3 md:grid-cols-3 grid-col-1 lg:grid-rows-3"
      >
        <DescCard
          :data="{
            header: `Road Freight Forwarding`,
            detail:
              'Cargo are transported at some stage of their journey along the world’s roads where we give you a presence.',
          }"
        >
          <template #image>
            <img
              class="rounded-t-lg"
              src="~/assets/card_img/serv-1.jpg"
              alt=""
            />
          </template>
        </DescCard>
        <DescCard
          :data="{
            header: `Ocean Freight Forwarding`,
            detail:
              'Ocean Freight plays perhaps the most vital role in most transportation and supply chain solutions.',
          }"
        >
          <template #image>
            <img
              class="rounded-t-lg"
              src="~/assets/card_img/serv-2.jpg"
              alt=""
            />
          </template>
        </DescCard>
        <DescCard
          :data="{
            header: `Air Freight Forwarding`,
            detail:
              'As a leader in global air freight forwarding, Eliite Logistics excels in providing tailored transportation.',
          }"
        >
          <template #image>
            <img
              class="rounded-t-lg"
              src="~/assets/card_img/serv-3.jpg"
              alt=""
            />
          </template>
        </DescCard>
        <DescCard
          :data="{
            header: `Warehousing`,
            detail: `Package and store your things effectively and securely to make sure them in storage, have certified warehouse.`,
          }"
        >
          <template #image>
            <img
              class="rounded-t-lg"
              src="~/assets/card_img/serv-7.jpg"
              alt=""
            />
          </template>
        </DescCard>
        <DescCard
          :data="{
            header: `Door to Door Delivery`,
            detail: `Our expertise in transport management and planning allows us to design a solution. hand over the parcel at your door.`,
          }"
        >
          <template #image>
            <img
              class="rounded-t-lg"
              src="~/assets/card_img/serv-6.jpg"
              alt=""
            />
          </template>
        </DescCard>
        <DescCard
          :data="{
            header: `Worldwide Transport`,
            detail: `Specialises in international freight forwarding of merchandise and associated general and all logistic services.`,
          }"
        >
          <template #image>
            <img
              class="rounded-t-lg"
              src="~/assets/large_img/middaytruck.jpg"
              alt=""
            />
          </template>
        </DescCard>
        <DescCard
          :data="{
            header: `Packaging & Storage`,
            detail: `Package and store your things effectively and securely to make sure them in storage, We guranteed for 100%.`,
          }"
        >
          <template #image>
            <img
              class="rounded-t-lg"
              src="~/assets/card_img/serv-9.jpg"
              alt=""
            />
          </template>
        </DescCard>
      </div>
    </div>

    <div class="w-11/12 mx-auto md:my-28 my-14">
      <h1 class="text-3xl text-center font-bold">Three Step processing</h1>
      <div
        class="md:gap-7 gap-y-4 mx-auto grid grid-col-3 md:grid-cols-3 my-10"
      >
        <div class="">
          <div class="p-2 w-[4rem] h-[3.8rem] mx-auto m-4 border rounded-full">
            <svg
              class="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 15 15"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                d="M.5 3.498L7.5.5l7 2.998m-14 0l7 2.998m-7-2.998V3.5m14-.002l-7 2.998m7-2.998V11.5l-7 3m7-11.002L7.5 6.5v8m0-8.004V14.5m0-8.004L.5 3.5m7 11l-7-3v-8"
              />
            </svg>
          </div>

          <h1 class="text-2xl font-bold text-center mb-3">
            Receive From Shipper
          </h1>
          <p class="text-lg text-center">
            Our trained personnel collects the package from the sender.
          </p>
        </div>

        <div class="">
          <div class="p-2 w-[4rem] h-[3.8rem] mx-auto m-4 border rounded-full">
            <svg
              class="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5l-3-4Z"
              />
            </svg>
          </div>

          <h1 class="text-2xl font-bold text-center mb-3">
            Safe & Secure Shipment
          </h1>
          <p class="text-lg text-center">
            Except to obtain some advantage from it but who has any rights too
            find fault with enjoy.
          </p>
        </div>
        <div class="">
          <div class="p-2 w-[3.6rem] h-[3.6rem] mx-auto m-4 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V8M4 8h16M4 8l1.365-2.39c.335-.585.503-.878.738-1.092c.209-.189.456-.332.723-.42C7.13 4 7.466 4 8.143 4h7.714c.676 0 1.015 0 1.318.099c.267.087.513.23.721.42c.236.213.404.506.74 1.093L20 8m-8 3v6m0 0l3-2m-3 2l-3-2"
              />
            </svg>
          </div>

          <h1 class="text-2xl font-bold text-center mb-3">
            Handover to Receiver
          </h1>
          <p class="text-lg text-center">
            At every delivery of package we ensue that package are delivered to
            the appropriate receiver.
          </p>
        </div>
      </div>
    </div>

    <Contact/>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.banner-inner {
  padding-top: 20px;
  padding-bottom: 20px;
}
.banner-button {
  padding-top: 38px;
}
.banner-title {
  margin-bottom: 0px;
  text-align: center;
  line-height: 120%;
  font-weight: 700;
}
.banner-paragraph {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}
</style>
