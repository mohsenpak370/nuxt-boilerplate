<script setup lang="ts">
defineProps<{
  filled?: boolean;
  disabled?: boolean;
  loading?: boolean;
  stop?: boolean;
  prevent?: boolean;
}>();

const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};
</script>

<template>
  <AtomsButton
    class="px-4 py-2 rounded-1 border border-primary hover:border-primary-accent text-primary hover:text-primary-accent"
    :class="{
      'bg-primary hover:bg-primary-accent !text-white': filled && !disabled,
      '!bg-gray-200 !text-gray-500 !border-gray-200': disabled,
    }"
    :disabled="disabled"
    :loading="loading"
    :stop="stop"
    :prevent="prevent"
    @click="onClick"
  >
    <template v-slot:loading>
      <AtomsLoader
        :color="filled ? 'white' : 'var(--primary-color)'"
        size="sm"
        :type="2"
      />
    </template>
    <slot> Button </slot>
  </AtomsButton>
</template>
