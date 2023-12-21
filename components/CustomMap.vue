<template>
  <main class="relative pb6 border-b border-gray-100">
    <MapboxMap
      map-id="Logist"
      class="h-[70vh]"
      :options="{
        style: 'mapbox://styles/mapbox/light-v11',
        center: props.geolocation,
        pitch: 60,
        bearing: -60,
        zoom: 17,
      }"
    >
      <MapboxDefaultMarker
        marker-id="<MARKER_ID>"
        :options="{
          color: '#b190b6',
        }"
        :lnglat="props.geolocation"
      >
      </MapboxDefaultMarker>
      <!-- <MapboxGeocoder v-model="result" /> -->

      <MapboxDefaultPopup
        popup-id="<POPUP_ID>"
        :lnglat="props.geolocation"
        style=""
        :options="{
          closeOnClick: false,
          className: 'p-1',
        }"
      >
        <h1 class="test">Package location</h1>
      </MapboxDefaultPopup>
      <!-- <MapboxGeolocateControl position="bottom-right" /> -->
      <MapboxFullscreenControl />
    </MapboxMap>
  </main>
</template>

<script setup>
const props = defineProps(['geolocation'])
// useMapbox("Logist", (map) => {
//   console.log(map);
// });
// useMapboxMarker('<MARKER_ID>', marker => {
//     console.log(marker);
//   });

const mapRef = useMapboxRef("Logist");

const mapLocation = ref([-73.5804, 45.53483]);
onMounted(() => {
});
</script>

<style scoped></style>
