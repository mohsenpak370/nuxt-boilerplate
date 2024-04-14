<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  console.log({ locales });
  return locales.value.filter((i) => i.code !== locale.value);
});

const colorMode = useColorMode();
const toggleDarkMode = () => {
  console.log('toggle');
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
</script>

<template>
  <div class="px-8 flex items-center justify-between bg-light-default dark:bg-dark-default sticky top-0">
    <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-50">Nuxt boilerplate</h1>
    <div class="flex items-center gap-4">
      <div class="">
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="text-blue-700"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
      <div class="p-8 flex gap-4">
        <AtomsButton :class="locale === 'en' ? 'bg-blue-300' : 'bg-white'" @click="setLocale('en')">
          English
        </AtomsButton>
        <AtomsButton :class="locale === 'fr' ? 'bg-blue-300' : 'bg-white'" @click="setLocale('fr')">
          French
        </AtomsButton>
      </div>
      <button class="relative w-8 h-8" @click="toggleDarkMode">
        <ColorScheme placeholder="" tag="div">
          <transition-group name="toggle-theme">
            <SvgoMoon key="moon" v-if="colorMode.value === 'light'" class="absolute inset-0 text-3xl text-gray-600" />
            <SvgoSun key="sun" v-if="colorMode.value === 'dark'" class="absolute inset-0 text-3xl text-gray-200" />
          </transition-group>
        </ColorScheme>
      </button>
    </div>
  </div>
</template>

<style scoped>
.toggle-theme-enter-active,
.toggle-theme-leave-active {
  transition: all 0.5s ease;
}
.toggle-theme-enter-from,
.toggle-theme-leave-to {
  opacity: 0;
}
</style>
