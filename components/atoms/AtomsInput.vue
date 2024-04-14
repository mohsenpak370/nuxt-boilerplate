<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'type here...',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  minLength: {
    type: Number,
    default: 0,
  },
  maxLength: {
    type: Number,
    default: 200,
  },
  isClearable: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);

const showPassword = ref(false);
</script>

<template>
  <label>
    <slot v-if="!label" name="label" />
    <span v-if="label" :class="['block', { labelClass: true }]">{{ label }}</span>
    <label class="px-2 h-12 flex items-center justify-between gap-2 rounded-1 border" :class="inputClass">
      <slot name="prepend" />
      <input
        :value="modelValue"
        :type="type === 'password' ? (showPassword ? 'text' : 'password') : type"
        :disabled="disabled"
        :required="true"
        :placeholder="placeholder"
        :minlength="minLength"
        :maxlength="maxLength"
        class="w-full h-full bg-transparent outline-none"
        @input="$emit('update:modelValue', $event?.target?.value)"
      />
      <span class="flex-shrink-0 flex items-center gap-1">
        <button
          v-if="!disabled && isClearable && modelValue"
          :disabled="disabled"
          @click="$emit('update:modelValue', '')"
        >
          <IconX class="text-2xl text-gray-500" />
        </button>
        <button v-if="type === 'password' && !disabled" @click="showPassword = !showPassword">
          <IconEye filled v-if="!showPassword" class="text-2xl text-gray-500" />
          <IconEyeSlash filled v-if="showPassword" class="text-2xl text-gray-500" />
        </button>
        <slot name="append" />
      </span>
    </label>
    <slot name="support" />
  </label>
</template>
