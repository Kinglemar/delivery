import { v4 as uuidv4 } from 'uuid';
export function generateTrackingID() {
  const uniqueId = uuidv4();
  const numbersArray = uniqueId.match(/\d+/g) as string[];
  let text = numbersArray.join("");
  const trackingId = text.slice(0, 9);
  return trackingId;
}


export const defaultShipment = ref({
  timeline: [],
  cargo_details: {
    tracking_id: generateTrackingID(),
    item: null,
    location: {
      coordinates: []
    },
    item_img: undefined,
    order_type: null,
    deposit_no: null,
    delivery_percentange: null,
    source: null,
    destination: null,
    weight: null,
    height: null,
    width: null,
    len: null
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
})