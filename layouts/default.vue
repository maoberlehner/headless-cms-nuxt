<template>
  <div :class="$options.name">
    <nuxt-link to="/">
      Home
    </nuxt-link> |
    <nuxt-link to="/about">
      About
    </nuxt-link>
    <nuxt :class="`${$options.name}__main`"/>
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
};
</script>
