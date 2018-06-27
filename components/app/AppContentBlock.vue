<template>
  <div :class="$options.name">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <img
      v-if="image"
      :src="imageSrc"
      :srcset="imageSrcset"
    >
  </div>
</template>

<script>
export default {
  name: `AppContentBlock`,
  props: {
    image: {
      type: Object,
      default: null,
    },
    position: {
      type: String,
      default: `right`,
    },
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      if (!this.image) return null;
      return `${this.image.url}?w=360&h=250&fit=thumb&fm=jpg&fl=progressive&q=70`;
    },
    imageSrcset() {
      if (!this.image) return null;
      return `${this.image.url}?w=720&h=500&fit=thumb&fm=jpg&fl=progressive&q=40 2x`;
    },
  },
};
</script>
