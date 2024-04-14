<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  message: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'type here...',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
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
  state: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'error', 'warning', 'success'].includes(value),
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label>
      <span v-if="label" class="font-d-label" :class="disabled ? 'text-d-grey-7' : 'text-d-grey-4'">
        {{ label }}
        <sup v-if="required" class="text-d-grey-6">*</sup>
      </span>
      <div
        class="mt-2 sm:mt-3 flex items-center w-full h-12 sm:h-16 px-3 sm:px-5 py-3.5 sm:py-4 gap-1 sm:gap-2 rounded-lg border border-current"
        :class="{
          'text-d-border-default hover:text-d-border-hover focus-within:!text-d-border-selected':
            state === 'normal' && !disabled,
          'text-d-alert-warning': state === 'warning' && !disabled,
          'text-d-alert-error': state === 'error' && !disabled,
          'text-d-alert-success': state === 'success' && !disabled,
          'text-d-border-disable': disabled,
        }"
      >
        <slot name="prepend" />
        <input
          :value="modelValue"
          :type="type"
          :disabled="disabled"
          :required="required"
          :placeholder="placeholder"
          :minlength="minLength"
          :maxlength="maxLength"
          class="d-input-base"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <slot name="append" />
      </div>
    </label>
    <p
      v-if="message"
      class="mt-1 font-d-body-3"
      :class="{
        '!text-d-white-7': disabled,
        'text-d-grey-6': state === 'normal',
        'text-d-alert-warning': state === 'warning',
        'text-d-alert-error': state === 'error',
        'text-d-alert-success': state === 'success',
      }"
    >
      {{ message }}
    </p>
  </div>
</template>
