<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
defineProps<{
  timeline: any[];
}>();
</script>

<template>
  <div class="max-h-96 overflow-hidden overflow-y-auto pt-3">
    <div
      v-for="(p, index) in timeline"
      :key="index"
      :class="[index === timeline.length - 1 ? 'mb-8' : 'mb-0']"
      class="flex items-start ml-4"
    >
      <div class="mr-3">
        <div
          class="flex h-6 w-6 items-center justify-center rounded-full bg-whitesmoke"
        >
          <div
            :class="[
              'h-4 w-4 rounded-full ',
              index === timeline.length - 1 ? 'bg-salmon' : 'bg-springgreen',
            ]"
          ></div>
        </div>
        <div
          v-if="index < timeline.length - 1"
          class="mx-auto h-full min-h-[80px] w-[1px] bg-blue-03"
        ></div>
      </div>

      <div>
        <div class="mb-2 text-xs text-seal-gray">
          {{
            useDateFormat(p?.createdAt, "YYYY-MM-DD (ddd:hh:mm:ss)", {
              locales: "en-US",
            }).value.substring(0, p.createdAt.length +1)
          }}
        </div>
        <div class="text-sm text-dark">
          {{ p?.title || "Hello" }}
        </div>
      </div>
    </div>
  </div>
</template>
