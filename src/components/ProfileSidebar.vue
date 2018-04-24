<template>
  <aside class="profile">
    <cv-profile-avatar :image="profile.avatar" :title="profile.name" />

    <nav>
      <ul class="profile-menu">
        <li>
          <router-link :to="{ name: 'home' }" title="Sobre"><i class="ion-person"></i> Sobre</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'portfolio' }" title="Portfolio"><i class="ion-person"></i> Portfolio</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }" title="Contato"><i class="ion-android-chat"></i> Contato</router-link>
        </li>
      </ul>

      <cv-profile-footer :medias="medias" />
    </nav>
  </aside><!-- /.profile -->
</template>

<script>
import ProfileAvatar from './ProfileAvatar'
import ProfileFooter from './ProfileFooter'
import json from '../profile.json'

export default {
  name: 'Sidebar',
  name: 'Home',
  components: {
    'cv-profile-avatar': ProfileAvatar,
    'cv-profile-footer': ProfileFooter
  },
  data() {
    return {
      profile: json.profile,
      medias: json.medias,
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-menu {
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;

  li {
    position: relative;
    border-bottom: 1px solid #26292e;

    &:last-child {
      border-bottom: none;
    }

    > a {
      background-color: #33373d;
      color: #85878b;
      display: block;
      font-size: 12px;
      font-weight: 500;
      padding: 15px 25px;
      text-align: right;
      text-transform: uppercase;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      width: 100%;
      @include transform(translateZ(0));
      @include transition(color .3s);

      i {
        font-size: 24px;
        left: 25px;
        position: absolute;
        top: 50%;
        @include transform(translateY(-50%));
      }

      &:before {
        background-color: #14c8c8;
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        -webkit-transform-origin: 50%;
        -ms-transform-origin: 50%;
        transform-origin: 50%;
        @include transform(scaleX(0));
        @include transition(transform .3S ease-out);
      }

      &:focus {
        text-decoration: none;
      }

      &:hover {
        color: #fff;
        text-decoration: none;

        &:before {
          @include transform(scaleX(1));
        }
      }

      &.router-link-exact-active.router-link-active {
        color: #fff;
        text-decoration: none;

        &:before {
          @include transform(scaleX(1));
        }
      }
    }
  }
}
</style>
