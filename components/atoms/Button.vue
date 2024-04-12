<script setup lang="ts">
const { disabled, loading, stop, prevent } = defineProps<{
  disabled?: boolean;
  loading?: boolean;
  stop?: boolean;
  prevent?: boolean;
}>();

const emit = defineEmits(['click']);

const onClick = (event: Event) => {
  if (prevent) {
    event.preventDefault();
  }
  if (stop) {
    event.stopPropagation();
  }
  if (loading || disabled) {
    return;
  }
  emit('click');
};
</script>

<template>
  <button
    class="px-4 h-12 flex items-center justify-center gap-2 rounded-1 border"
    :disabled="disabled"
    dir="auto"
    @click="onClick"
  >
    <slot v-if="loading" name="loading">Loading...</slot>
    <slot v-else> Button </slot>
  </button>
</template>
