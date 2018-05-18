<template>
  <aside class="profile-sidebar">
    <cv-profile-avatar :image="profile.avatar" :title="profile.name" />

    <nav>
      <ul class="profile-menu">
        <li>
          <router-link :to="{ name: 'home' }" title="Sobre">
            <i class="ion-person"></i> <span>Sobre</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'portfolio' }" title="Portfolio">
            <i class="ion-camera"></i> <span>Portfolio</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }" title="Contato">
            <i class="ion-android-chat"></i> <span>Contato</span>
          </router-link>
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
.profile-sidebar {
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}

.profile-menu {
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;
  @extend %clearfix;

  li {
    float: left;
    position: relative;
    width: 33.33%;

    @media (min-width: 768px) {
      border-bottom: 1px solid #26292e;
      float: none;
      width: 100%;
    }

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
        left: 50%;
        position: absolute;
        top: 50%;
        @include transform(translate(-50%, -50%));

        @media (min-width: 768px) {
          left: 25px;
          top: 50%;
          @include transform(translateY(-50%));
        }
      }

      span {
        opacity: 0;
        visibility: hidden;

        @media (min-width: 768px) {
          opacity: 1;
          visibility: visible;
        }
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
