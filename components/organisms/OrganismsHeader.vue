<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  console.log({ locales });
  return locales.value.filter((i) => i.code !== locale.value);
});

const colorMode = useColorMode();
const toggleDarkMode = () => {
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
      <div class="checkbox-wrapper-54">
        <label class="switch">
          <input type="checkbox" :value="true" @change="toggleDarkMode" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<style>
.checkbox-wrapper-54 input[type='checkbox'] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper-54 *,
.checkbox-wrapper-54 ::after,
.checkbox-wrapper-54 ::before {
  box-sizing: border-box;
}

/* The switch - the box around the slider */
.checkbox-wrapper-54 .switch {
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  /* size of sliding icon -- sun and moon */
  --size-of-icon: 1.4em;
  /* it is like a inline-padding of switch */
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
  display: inline-block;
}

/* The slider */
.checkbox-wrapper-54 .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f5;
  transition: 0.4s;
  border-radius: 30px;
}

.checkbox-wrapper-54 .slider:before {
  position: absolute;
  content: '';
  height: var(--size-of-icon, 1.4em);
  width: var(--size-of-icon, 1.4em);
  border-radius: 20px;
  left: var(--slider-offset, 0.3em);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  transition: 0.4s;
}

.checkbox-wrapper-54 input:checked + .slider {
  background-color: #303136;
}

.checkbox-wrapper-54 input:checked + .slider:before {
  left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)));
  background: #303136;
  /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
  box-shadow:
    inset -3px -2px 5px -2px #8983f7,
    inset -10px -4px 0 0 #a3dafb;
}
</style>
