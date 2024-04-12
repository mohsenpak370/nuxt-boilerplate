<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    value: string;
    label?: string;
    labelClasses?: string;
  }>(),
  {
    size: 'md',
  }
);

const emit = defineEmits(['update:modelValue']);
const vModelValue = computed<string>({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <label class="inline-flex items-center gap-2" :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'">
    <input
      v-model="vModelValue"
      type="radio"
      :value="value"
      class="appearance-none border border-gray-300 disabled:border-gray-200 disabled:bg-gray-100 rounded-full checked:border-primary"
      :class="{
        'size-4 before:size-2.5': size === 'sm',
        'size-6 before:size-4': size === 'md',
        'size-8 before:size-6': size === 'lg',
        'cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      }"
      :disabled="disabled"
    />
    <span :class="labelClasses">{{ label }}</span>
    <slot></slot>
  </label>
</template>

<style scoped>
input[type='radio'] {
  display: grid;
  place-content: center;
}

input[type='radio']::before {
  content: '';
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1.5rem 1.5rem var(--primary-color_accent);
}

input[type='radio']:checked::before {
  transform: scale(1);
}
</style>
