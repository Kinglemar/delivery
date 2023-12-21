<template>
  <main class="mt-48">
    <MapboxMap
      map-id="Logist"
      class="h-[70vh]"
      :options="{
        style: 'mapbox://styles/mapbox/light-v11',
        center: [ -118.2436, 34.0522,],
        pitch: 60,
        bearing: -60,
        zoom: 20,
      }"
    >
      <MapboxDefaultMarker
        marker-id="<MARKER_ID>"
        :options="{}"
        :lnglat="[-118.2436,34.0522,]"
      >
      </MapboxDefaultMarker>
      <MapboxGeocoder v-model="result" />

      <MapboxDefaultPopup
        popup-id="<POPUP_ID>"
        :lnglat="[ -118.2436, 34.0522,]"
        :options="{
          closeOnClick: false,
        }"
      >
        <h1 class="test">Shipment location</h1>
      </MapboxDefaultPopup>
      <MapboxGeolocateControl position="bottom-right" />
      <MapboxFullscreenControl />
    </MapboxMap>
  </main>
</template>

<script setup lang="ts">
useMapbox("Logist", (map) => {
  console.log(map);
});

const result = ref()
</script>

<style scoped></style>
