<script setup lang="ts">
const { locale, setLocale } = useI18n();

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
  <div>
    <div class="p-8 flex gap-4">
      <AtomsButton :class="locale === 'en' ? 'bg-blue-300' : 'bg-white'" @click="setLocale('en')">
        English
      </AtomsButton>
      <AtomsButton :class="locale === 'fr' ? 'bg-blue-300' : 'bg-white'" @click="setLocale('fr')"> French </AtomsButton>
    </div>
    <p class="text-xl text-center py-12">
      {{ $t('welcome') }}
    </p>
    <div class="flex items-center justify-center">
      <ButtonPrimary class="w-24" filled :loading="loading" @click="onClick"> Test </ButtonPrimary>
    </div>
    <div class="mt-12 flex items-center justify-center gap-8">
      <AtomsRadio v-model="radio" value="a" size="sm" label="Radio Label 1" label-classes="font-bold text-sm" />
      <AtomsRadio v-model="radio" value="c" disabled>
        <div>
          <p class="text-xl">testing Title</p>
          <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
      </AtomsRadio>
      <AtomsRadio v-model="radio" value="b" size="lg" label="Radio Label 2" />
    </div>
    <div class="mt-12 flex items-center justify-center gap-8">
      <AtomsCheckbox v-model="checkbox" value="a" size="sm" label="Radio Label 1" label-classes="font-bold text-sm" />
      <AtomsCheckbox v-model="checkbox" value="c" disabled>
        <div class="">
          <p class="text-xl">testing Title</p>
          <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
      </AtomsCheckbox>
      <AtomsCheckbox v-model="checkbox" value="b" size="lg" label="Radio Label 2" />
    </div>
    <div class="my-4 flex items-center justify-center">
      <SvgoCheck class="text-4xl text-primary" />
    </div>
  </div>
</template>
