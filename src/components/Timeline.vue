<template>
  <ul class="timeline">
    <li v-for="(item, index) in items" :key="`item-${index}`">
      <div class="timeline-info">
        <span class="timeline-title">{{ item.name || item.course }}</span>
        <span class="timeline-subtitle" v-if="item.company || item.education">{{ item.company.name || item.education }}</span>
        <span class="timeline-subtitle" v-if="item.institution">{{ item.institution }}</span>
        <span class="timeline-period" v-if="item.start"><i class="ion-calendar"></i> {{ item.start }} - {{ item.end }}</span>

        <p class="timeline-text" v-if="item.text">{{ item.text }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  list-style-type: none;
  margin-left: 25px;
  margin-top: 30px;
  padding: 40px 0;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:before {
    background: linear-gradient(to bottom, #ededed 1%,#ededed 75%,#ffffff 100%);
    bottom: 0;
    left: 0;
    top: 0;
    width: 3px;
  }

  &:after {
    background: #ffffff;
    border: 3px solid #efefef;
    border-radius: 50%;
    color: #333;
    content: "";
    display: inline-block;
    font-family: "Ionicons";
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    height: 50px;
    line-height: 45px;
    left: -24px;
    position: absolute;
    speak: none;
    text-align: center;
    text-rendering: auto;
    text-transform: none;
    top: -24px;
    width: 50px;
    z-index: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  li {
    margin: 10px 0 40px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      $wh: 15px;
      background-color: #14c8c8;
      border: 3px solid #fff;
      border-radius: 50%;
      content: "";
      display: block;
      height: $wh;
      left: (($wh / 2) - 1.5) * -1;
      position: absolute;
      top: 6px;
      width: $wh;
    }

    .timeline-info {
      padding-left: 30px;
    }

    .timeline-title,
    .timeline-subtitle,
    .timeline-period {
      display: block;
    }

    .timeline-title {
      font-size: 15px;
      color: #444;
      margin-bottom: 2px;
      font-weight: 700;
    }

    .timeline-subtitle {
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 5px;
    }

    .timeline-period {
      font-size: 80%;
      font-style: italic;
      margin-bottom: 10px;

      i {
        margin-right: 3px;
      }
    }
  }
}
</style>
