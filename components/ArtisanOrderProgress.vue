<script setup lang="ts">


defineProps<{
  timeline: any[];
}>();
</script>

<template>
  <div class="max-h-96 overflow-hidden overflow-y-auto">
    <div v-for="(p, index) in timeline" :key="index" class="flex items-start">
      <div class="mr-3">
        <div
          class="flex h-4 w-4 items-center justify-center rounded-full bg-cream-500"
        >
          <div
            :class="[
              'h-2 w-2 rounded-full ',
              index === timeline.length - 1
                ? 'bg-orange-500'
                : 'bg-pigeon-gray',
            ]"
          ></div>
        </div>
        <div
          v-if="index < timeline.length - 1"
          class="mx-auto h-full min-h-[80px] w-[1px] bg-gray"
        ></div>
      </div>

      <div>
        <!-- <div class="mb-2 text-xs text-seal-gray">
          {{ useDateFormatter(p.createdAt, 'DD MMM, YYYY') }} at
          {{ useDateFormatter(p.createdAt, 'HH:mm:ss') }}
        </div> -->
        <div class="text-sm text-dark">{{ p.title || "Hello" }}</div>
      </div>
    </div>
  </div>
</template>
