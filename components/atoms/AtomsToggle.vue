<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  dynamicRadius: {
    type: Boolean,
    default: false,
  },
  outward: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <button
    class="px-[0.125rem] w-12 flex items-center rounded-1"
    :class="[
      `${modelValue ? 'bg-primary' : 'bg-gray-400'}`,
      {
        'rounded-1': dynamicRadius,
        'rounded-full': !dynamicRadius,
        'h-6': !outward,
        'h-2': outward,
      },
    ]"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      class="relative w-5 h-5 rounded-1 transform duration-300 bg-white"
      :class="{
        'ring-2': outward,
        'translate-x-6': modelValue && !outward,
        'translate-x-6 ring-primary': modelValue && outward,
        '-left-1 ring-gray-400': !modelValue && outward,
        'rounded-1': dynamicRadius,
        'rounded-full': !dynamicRadius,
      }"
    />
  </button>
</template>
