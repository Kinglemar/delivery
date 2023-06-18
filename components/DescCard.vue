<template>
  <section class="md:h-[30rem] border shadow-md rounded-lg flex flex-col">
    <div>
        <slot name="image"></slot>
    </div>

    <div class="p-3">
        <p class="text-xl font-mono font-bold my-5">{{data?.header || 'Header'}}</p>
        <p class="text-base">{{data?.detail || 'Details'}}</p>
    </div>
  </section>
</template>

<script>
export default {
props: {
    data: {
        type: Object,
        required: false
    }
}
}
</script>

<style>

</style>