<template>
  <ul class="skills-list row">
    <li v-for="(skill, index) in skills" :key="`skill-${index}`" class="col-sm-6">
      <h4 class="skill-title">{{ skill.name }}</h4>
      <div class="skill-progress">
        <div class="skill-percentage" :style="`width: ${skill.percent}%;`">
          <span>{{ skill.percent }}%</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skills: {
      required: true,
      type: Array,
      default: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.skills-list {
  list-style-type: none;
  padding: 0;
}

.skill-title {
  color: #666;
  display: block;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 0;
  text-transform: uppercase;
}

.skill-progress {
  background-color: #f0f0f0;
  border: 1px solid rgb(235, 235, 235);
  display: block;
  height: 16px;
  margin: 8px 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  @include border-radius(50px);
}

.skill-percentage {
  background-color: #14c8c8;
  bottom: 0;
  font-size: 10px;
  position: absolute;
  text-align: center;
  top: 0;
  @include border-radius(50px);
  @include transition(all .4s);

  span {
    color: #fff;
  }
}
</style>
