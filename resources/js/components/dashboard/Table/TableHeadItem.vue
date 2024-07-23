<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <th scope="col" class="py-3 font-baseball-500">
    <div class="text-center">
      {{ props.item.title }}
    </div>
  </th>
</template>
