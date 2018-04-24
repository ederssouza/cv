<template>
  <footer class="profile-footer">
    <ul class="social-media">
      <li v-for="(media, index) in medias" :key="`media-${index}`">
        <a :href="media.link" :title="media.title" target="_blank">
          <i :class="media.icon"></i>
          {{ media.title }}
        </a>
      </li>
    </ul>

    <span class="profile-footer-copyright">&copy; {{ date }} Eder Sampaio</span>
  </footer>
</template>

<script>
export default {
  name: 'ProfileFooter',
  props: {
    medias: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-footer {
  background-color: #fff;
  padding: 15px;
  text-align: center;
}

.social-media {
  list-style-type: none;
  margin-bottom: 15px;
  padding-left: 0;

  li {
    border-left: 1px solid #ddd;
    display: inline-block;
    padding: 0 10px 0 10px;
    vertical-align: middle;

    &:first-child {
      border-left: none;
    }
  }

  a {
    color: #888;
    display: inline-block;
    font-size: 16px;
    font-variant: small-caps;
    font-weight: 300;
    text-transform: lowercase;
    @include transition(color .26s);

    &:focus,
    &:hover {
      color: #14c8c8;
      text-decoration: none;
    }

    i {
      font-size: 18px;
      line-height: 1;
      vertical-align: middle;
    }
  }
}

.profile-footer-copyright {
  display: block;
  font-size: 11px;
  font-weight: 300;
}
</style>
