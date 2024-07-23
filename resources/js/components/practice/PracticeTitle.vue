<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="text-baseball-red text-2xl md:text-[40px] text-center mt-9 mb-6 font-baseball-700">
    {{ title }}
  </h1>
</template>
