<script setup lang="ts">
const loading = ref(false);
const radio = ref('c');
const checkbox = ref(['c']);
const onClick = () => {
  console.log('clicked');
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};
</script>

<template>
  <div class="min-h-screen bg-light-default dark:bg-dark-default">
    <p class="text-xl text-center py-12 text-gray-900 dark:text-gray-100">
      {{ $t('welcome') }}
    </p>
    <div class="flex items-center justify-center gap-2">
      <ButtonPrimary class="w-24" filled :loading="loading" @click="onClick"> Test </ButtonPrimary>
      <ButtonPrimary class="w-24" :loading="loading" @click="onClick"> Test </ButtonPrimary>
    </div>
    <div class="mt-12 flex items-center justify-center gap-8">
      <AtomsRadio
        v-model="radio"
        value="a"
        size="sm"
        label="Radio Label 1"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
      <AtomsRadio v-model="radio" value="c" disabled>
        <div>
          <p class="text-xl text-gray-900 dark:text-gray-100">testing Title</p>
          <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
      </AtomsRadio>
      <AtomsRadio
        v-model="radio"
        value="b"
        size="lg"
        label="Radio Label 2"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
    </div>
    <div class="mt-12 flex items-center justify-center gap-8">
      <AtomsCheckbox
        v-model="checkbox"
        value="a"
        size="sm"
        label="Radio Label 1"
        label-classes="font-bold text-sm text-gray-900 dark:text-gray-100"
      />
      <AtomsCheckbox v-model="checkbox" value="c" disabled>
        <div class="">
          <p class="text-xl text-gray-900 dark:text-gray-100">testing Title</p>
          <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
      </AtomsCheckbox>
      <AtomsCheckbox
        v-model="checkbox"
        value="b"
        size="lg"
        label="Radio Label 2"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
    </div>
    <div class="my-4 flex items-center justify-center">
      <AtomsInput
        v-model="radio"
        class="focus-within:border-primary w-96"
        placeholder="Input Placeholder"
        type="password"
      >
        <template #prepend>
          <IconMoon class="text-[2rem] text-gray-200" />
        </template>
        <template #append>
          <IconSun class="text-3xl text-gray-200" />
        </template>
      </AtomsInput>
    </div>
    <div class="my-4 flex items-center justify-center">
      <AtomsInput v-model="radio" input-class="focus-within:border-primary w-96 mt-2 dark:text-gray-200" disabled>
        <template #label>
          <div class="flex items-center justify-between">
            <p class="text-gray-900 dark:text-gray-100">Input Label</p>
            <p class="text-gray-600">Optional</p>
          </div>
        </template>
        <template #prepend>
          <IconMoon class="text-3xl text-gray-200" />
        </template>
        <template #append>
          <IconSun class="text-3xl text-gray-200" />
        </template>
        <template #support>
          <div class="">test</div>
        </template>
      </AtomsInput>
    </div>
    <div class="my-4 flex items-center justify-center gap-6">
      <AtomsToggle v-model="loading" />
      <AtomsToggle v-model="loading" dynamic-radius />
      <AtomsToggle v-model="loading" dynamic-radius outside />
      <AtomsToggle v-model="loading" outside />
    </div>
  </div>
</template>
