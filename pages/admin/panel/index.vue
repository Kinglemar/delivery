<script setup lang="ts">
import { generateTrackingID, defaultShipment } from "@/composables/random";
import { useUserStore } from "@/stores/user";
import { toastHandler } from "@/composables/useToast";
import axios from "axios";

definePageMeta({
  layout: "admin",
});
onMounted(() => {
  fetchDelivery();
});
const requesting = ref(false);
const store = useUserStore();
const { token } = storeToRefs(store);
function populateModal(props: any) {
  const { data } = props;
  shipments.value = data;
  editMode.value = true;
  showAddModal.value = true;
}
function deleteRecord(props: any) {
  const { data } = props;
  axios
    .delete(`https://sj-ifez.onrender.com/v1/shipments/${data.id}`)
    .then((res) => {
      fetchDelivery()
      toastHandler("success", "Record deleted");
    }).catch((err) => {
      console.log(err);
    });
}

function closeModal() {
  shipments.value = defaultShipment.value;
  showAddModal.value = false;
  editMode.value = false;
}

function onUpload(img: any) {
  console.log(img.target.files[0]);
  const reader = new FileReader();
  reader.readAsDataURL(img.target.files[0]);

  reader.onload = () => {
    let base64Url = null;
    base64Url = reader.result as any;
    shipments.value.cargo_details.item_img = base64Url;
    console.log(base64Url);
  };

  reader.onerror = (error) => {
    console.error("Error converting image to base64:", error);
  };
}

async function addComment() {
  try {
    let commentBody: any = shipments.value;
    commentBody.timeline.push(comment.value);
    commenting.value = true;
    axios
      .put(
        `https://sj-ifez.onrender.com/v1/shipments/${commentBody.id}`,
        commentBody
      )
      .then((res) => {
        console.log(res.data);
        toastHandler("success", "Comment added");
        commenting.value = false;
      });
  } catch (error) {
    commenting.value = false;
  }
}

function decider() {
  if (editMode.value) {
    editDelivery(shipments.value);
  }
  addDelivery(shipments.value);
}
async function addDelivery(data: any) {
  try {
    console.log("add");
    requesting.value = true;
    axios
      .post("https://sj-ifez.onrender.com/v1/shipments", shipments.value)
      .then((res) => {
        toastHandler("success", "Record Saved");
        showAddModal.value = false;
        shipments.value = defaultShipment.value;
        requesting.value = false;
      });
  } catch (error) {
    requesting.value = false;
  }
}
async function editDelivery(data: any) {
  try {
    console.log("edit");
    requesting.value = true;
    axios
      .put(`https://sj-ifez.onrender.com/v1/shipments/${data.id}`, data)
      .then((res) => {
        toastHandler("success", "Record Saved");
        showAddModal.value = false;
        shipments.value = defaultShipment.value;
        requesting.value = false;
      });
  } catch (error) {
    requesting.value = false;
  }
}
async function fetchDelivery() {
  if (true) {
    try {
      axios.get("https://sj-ifez.onrender.com/v1/shipments").then((res) => {
        let format = res.data?.data;
        shipmentsArray.value = format;
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const showAddModal = ref(false);
const editMode = ref(false);
const commenting = ref(false);
const activeIndex = ref(0);
const comment = ref({
  title: null,
  createdAt: new Date().toISOString(),
});
const shipments = ref({
  timeline: [],
  cargo_details: {
    tracking_id: generateTrackingID(),
    item: null,
    item_img: undefined,
    order_type: null,
    deposit_no: null,
    delivery_percentange: null,
    source: null,
    destination: null,
    weight: null,
  },
  sender: {
    name: null,
    address: null,
    city: null,
    state: null,
    country: null,
    phone: null,
    email: null,
  },
  reciever: {
    name: null,
    address: null,
    city: null,
    state: null,
    country: null,
    phone: null,
    email: null,
  },
});
const shipmentsArray = ref([]);
</script>

<template>
  <main class="w-full min-h-screen bg-white">
    <div>
      <div class="flex justify-end mb-3">
        <button
          @click="showAddModal = true"
          class="w-fit mt-2 text-white text-sm bg-gray-200 px-5 py-2 rounded-[8px]"
        >
          Add Shipment
        </button>
      </div>
      <ConfirmDialog></ConfirmDialog>
      <DataTable
        showGridlines
        paginator
        :rows="10"
        :value="shipmentsArray"
        tableStyle="min-width: 45rem, background: #8093a6"
      >
        <template #header>
          <div
            class="flex flex-wrap items-center align-items-center justify-content-between gap-8"
          >
            <span class="text-xl text-900 font-bold">Shipments</span>
            <button
              @click="fetchDelivery"
              class="w-fit mt-2 text-black text-xs bg-greenyellow px-3 py-2 rounded-[8px]"
            >
              <p v-if="requesting">Requesting...</p>
              <p v-else>Refresh</p>
            </button>
          </div>
        </template>

        <Column field="cargo_details.tracking_id" header="Tracking ID"></Column>
        <Column field="sender.name" header="Sender"></Column>
        <Column field="reciever.name" header="Receiver"></Column>
        <Column field="item_name" header="Item name"></Column>
        <Column field="cargo_details.source" header="Shipping from"></Column>
        <Column field="cargo_details.destination" header="Shipping to"></Column>
        <Column field="actions" header="actions">
          <template #body="slotProps">
            <button @click="populateModal(slotProps)" class="mr-2">
              <svg
                class="fill-mediumspringgreen"
                xmlns="http://www.w3.org/2000/svg"
                height="27"
                width="22"
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                />
              </svg>
            </button>
            <button @click="deleteRecord(slotProps)" class="mr-2">
              <svg
                class="fill-salmon"
                xmlns="http://www.w3.org/2000/svg"
                height="27"
                width="22"
                viewBox="0 0 448 512"
              >
                <path
                  d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.7 23.7 0 0 0 -21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0 -16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
                />
              </svg>
            </button>
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- ////Add Shipment///// -->
    <Dialog
      v-model:visible="showAddModal"
      modal
      :style="{ width: '70vw' }"
      :breakpoints="{ '1200px': '75vw', '575px': '90vw' }"
    >
      <template #header>
        <div
          class="inline-flex align-items-center justify-content-center gap-2"
        >
          <span class="font-bold text-base white-space-nowrap">{{
            editMode ? "Edit Shipment" : "Add Shipment"
          }}</span>
        </div>
      </template>

      <div class="card">
        <TabView :activeIndex="activeIndex">
          <TabPanel>
            <template #header>
              <p :class="activeIndex == 0 ? 'text-mediumspringgreen' : ''">
                Cargo Details
              </p>
            </template>
            <section
              class="grid lg:grid-cols-4 md:grid-cols-3 gap-2"
              id="shipment-form"
            >
              <div class="mb-2">
                <input
                  v-model="shipments.cargo_details.tracking_id"
                  placeholder="Tracking ID"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.cargo_details.delivery_percentange"
                  placeholder="Percentage"
                  type="number"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.cargo_details.deposit_no"
                  placeholder="Deposit No."
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="w-full mb-2">
                <input
                  v-model="shipments.cargo_details.destination"
                  placeholder="Destination"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="w-full mb-2">
                <input
                  v-model="shipments.cargo_details.item"
                  placeholder="Item"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>

              <div class="mb-2">
                <input
                  v-model="shipments.cargo_details.order_type"
                  placeholder="Order Type"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.cargo_details.source"
                  placeholder="Source"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.cargo_details.weight"
                  placeholder="Weight"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  @change="onUpload"
                  placeholder="Image"
                  type="file"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
                <!-- <FileUpload
                  :value="shipments.cargo_details.item_img"
                  mode="basic"
                  accept="image/*"
                  :maxFileSize="1000000"
                  @upload="onUpload"
                /> -->
              </div>
            </section>
            <div class="flex justify-end">
              <button
                class="w-fit mt-2 text-xs text-white bg-salmon px-5 py-2 rounded-[8px]"
                label="Ok"
                @click="activeIndex = 1"
              >
                Next
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <p :class="activeIndex == 1 ? 'text-mediumspringgreen' : ''">
                Sender
              </p>
            </template>
            <h3 class="text-xl my-3">Sender Details</h3>
            <section
              class="grid lg:grid-cols-4 md:grid-cols-3 gap-2"
              id="shipment-form"
            >
              <div class="mb-2">
                <input
                  v-model="shipments.sender.address"
                  placeholder="Address"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.sender.city"
                  placeholder="City"
                  type="text"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.sender.country"
                  placeholder="Country"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="w-full mb-2">
                <input
                  v-model="shipments.sender.email"
                  placeholder="Email"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="w-full mb-2">
                <input
                  v-model="shipments.sender.name"
                  placeholder="Name"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.sender.phone"
                  placeholder="Phone"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.sender.state"
                  placeholder="State"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
            </section>
            <div class="flex justify-between">
              <button
                class="w-fit mt-2 text-xs text-white bg-springgreen px-5 py-2 rounded-[8px]"
                label="Ok"
                @click="activeIndex = 0"
              >
                Previous
              </button>
              <button
                class="w-fit mt-2 text-xs text-white bg-salmon px-5 py-2 rounded-[8px]"
                label="Ok"
                @click="activeIndex = 2"
              >
                Next
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <p :class="activeIndex == 2 ? 'text-mediumspringgreen' : ''">
                Reciever
              </p>
            </template>
            <h3 class="text-xl my-3">Reciever Details</h3>
            <section
              class="grid lg:grid-cols-4 md:grid-cols-3 gap-2"
              id="shipment-form"
            >
              <div class="mb-2">
                <input
                  v-model="shipments.reciever.address"
                  placeholder="Address"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.reciever.city"
                  placeholder="City"
                  type="text"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.reciever.country"
                  placeholder="Country"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="w-full mb-2">
                <input
                  v-model="shipments.reciever.email"
                  placeholder="Email"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="w-full mb-2">
                <input
                  v-model="shipments.reciever.name"
                  placeholder="Name"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.reciever.phone"
                  placeholder="Phone"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="shipments.reciever.state"
                  placeholder="State"
                  class="md:w-fit w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                />
              </div>
            </section>
            <div class="flex justify-between">
              <button
                class="w-fit mt-2 text-xs text-white bg-springgreen px-5 py-2 rounded-[8px]"
                label="Ok"
                @click="activeIndex = 1"
              >
                Previous
              </button>
              <button
                class="w-fit mt-2 text-xs text-white bg-salmon px-5 py-2 rounded-[8px]"
                label="Ok"
                @click="activeIndex = 3"
              >
                Next
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <p :class="activeIndex == 3 ? 'text-mediumspringgreen' : ''">
                Timeline
              </p>
            </template>
            <section class="gap-2" id="timeline">
              <div class="md:flex items-center gap-5">
                <div class="mb-2 md:w-5/12">
                  <input
                    v-model="comment.title"
                    placeholder="Comment"
                    class="w-full h-12 p-4 mb-1 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                  />
                </div>
                <button
                  class="md:w-fit w-full text-xs text-white bg-purple px-3 py-2 rounded-[8px]"
                  @click="addComment"
                >
                  <p v-if="commenting">Requesting...</p>
                  <p v-else>Add Comment</p>
                </button>
              </div>

              <h3 class="mt-5 text-center text-base">Uploaded Image.</h3>

              <div
                class="w-full h-64 mt-3 flex flex-col items-center justify-center rounded-lg shadow-md"
              >
                <img
                  v-if="shipments.cargo_details.item_img"
                  :src="shipments.cargo_details.item_img"
                  alt=""
                />
                <h1 v-else class="text-center text-salmon">
                  No uploaded image
                </h1>
              </div>

              <h3 class="mt-8 text-center text-base">Comments</h3>
              <div class="mt-3 mx-2 mb-10 rounded-lg border border-greenyellow">
                <ArtisanOrderProgress :timeline="shipments.timeline" />
              </div>
            </section>
            <div class="flex justify-between">
              <button
                class="w-fit mt-2 text-xs text-white bg-springgreen px-5 py-2 rounded-[8px]"
                label="Ok"
                @click="activeIndex = 2"
              >
                Previous
              </button>
            </div>
          </TabPanel>
        </TabView>
      </div>

      <template #footer>
        <div class="flex justify-between gap-8">
          <button
            class="w-full mt-2 text-base text-white bg-salmon px-5 py-3 rounded-[8px]"
            label="Ok"
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            class="w-full mt-2 text-base text-white bg-mediumspringgreen px-5 py- rounded-[8px]"
            @click="decider"
          >
            <p v-if="requesting">Requesting...</p>
            <p v-else>Save</p>
          </button>
        </div>
      </template>
    </Dialog>
  </main>
</template>
