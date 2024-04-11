<script setup lang="ts">
const { locale, setLocale } = useI18n();

const loading = ref(false);
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
    <div class="p-8 flex gap-8">
      <button
        class="p-3 rounded-lg border"
        :class="locale === 'en' ? 'bg-blue-300' : 'bg-white'"
        @click="setLocale('en')"
      >
        English
      </button>
      <button
        class="p-3 rounded-lg border"
        :class="locale === 'fr' ? 'bg-blue-300' : 'bg-white'"
        @click="setLocale('fr')"
      >
        French
      </button>
    </div>
    <p class="text-xl text-center py-44">{{ $t('welcome') }}</p>
    <div class="flex items-center justify-center">
      <ButtonPrimary class="w-24" filled :loading="loading" @click="onClick">
        Test
      </ButtonPrimary>
    </div>
  </div>
</template>
