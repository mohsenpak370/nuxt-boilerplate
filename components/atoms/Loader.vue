<script setup lang="ts">
// NOTE: to choose from more animations, check this url: https://css-loaders.com/
const props = withDefaults(
  defineProps<{
    type?: number;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
  }>(),
  {
    type: 1,
    color: 'black',
    size: 'md',
  }
);
</script>

<template>
  <div
    class="w-16 h-6 flex items-center justify-center"
    :class="{
      'scale-75': props.size === 'sm',
      'scale-100': props.size === 'md',
      'scale-150': props.size === 'lg',
    }"
  >
    <div
      :class="{
        'loader--1': props.type === 1,
        'loader--2': props.type === 2,
        'loader--3': props.type === 3,
        'loader--4': props.type === 4,
        'loader--5': props.type === 5,
      }"
    />
  </div>
</template>

<style scoped>
.loader--1 {
  width: 3.75rem;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, v-bind(color) 90%, #0000);
  background:
    var(--_g) 0 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
  33% {
    background-size:
      calc(100% / 3) 0,
      calc(100% / 3) 100%,
      calc(100% / 3) 100%;
  }
  50% {
    background-size:
      calc(100% / 3) 100%,
      calc(100% / 3) 0,
      calc(100% / 3) 100%;
  }
  66% {
    background-size:
      calc(100% / 3) 100%,
      calc(100% / 3) 100%,
      calc(100% / 3) 0;
  }
}

.loader--2 {
  color: v-bind(color);
  width: 0.25rem;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow:
    1.1875rem 0 0 0.4375rem,
    2.375rem 0 0 0.1875rem,
    3.5625rem 0 0 0;
  transform: translateX(-2.375rem);
  animation: l21 0.5s infinite alternate linear;
}

@keyframes l21 {
  50% {
    box-shadow:
      1.1875rem 0 0 0.1875rem,
      2.375rem 0 0 0.4375rem,
      3.5625rem 0 0 0.1875rem;
  }
  100% {
    box-shadow:
      1.1875rem 0 0 0,
      2.375rem 0 0 0.1875rem,
      3.5625rem 0 0 0.4375rem;
  }
}

.loader--3 {
  width: 1.2rem;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(v-bind(color) 0 0);
  background:
    var(--c) 0 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 20% 65%;
  animation: l5 1s infinite linear;
}
@keyframes l5 {
  20% {
    background-position:
      0 50%,
      50% 100%,
      100% 100%;
  }
  40% {
    background-position:
      0 0,
      50% 50%,
      100% 100%;
  }
  60% {
    background-position:
      0 100%,
      50% 0,
      100% 50%;
  }
  80% {
    background-position:
      0 100%,
      50% 100%,
      100% 0;
  }
}

.loader--4 {
  width: 2rem;
  aspect-ratio: 1;
  display: grid;
  mask: conic-gradient(from 15deg, #0000, #000);
  -webkit-mask: conic-gradient(from 15deg, #0000, #000);
  animation: l26 1s infinite steps(12);
}
.loader--4,
.loader--4:before,
.loader--4:after {
  background:
    radial-gradient(closest-side at 50% 12.5%, v-bind(color) 96%, #0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, v-bind(color) 96%, #0000) 0 50%/80% 20% repeat-x;
}
.loader--4:before,
.loader--4:after {
  content: '';
  grid-area: 1/1;
  transform: rotate(30deg);
}
.loader--4:after {
  transform: rotate(60deg);
}

@keyframes l26 {
  100% {
    transform: rotate(1turn);
  }
}

.loader--5 {
  width: 2rem;
  padding: 0.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: v-bind(color);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
