<template>
  <header class="profile-avatar">
    <router-link :to="{ name: 'home' }" title="Sobre">
      <img :src="image" :alt="title" :title="title">
    </router-link>
  </header>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-avatar {
  position: relative;

  a {
    display: inline-block;
  }

  img {
    max-width: 100%;
  }
}
</style>
