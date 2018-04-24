<template>
  <ul class="courses row">
    <li v-for="(course, index) in courses" :key="`course-${index}`" class="col-sm-6">
      <img :src="course.company.image" :alt="course.company.name" :title="course.company.name">
      <div class="course-info">
        <span class="course-title">{{ course.name }}</span>
        <span class="course-subtitle" v-if="course.company.name">{{ course.company.name }} | <i class="ion-calendar"></i> {{ course.workload }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Courses',
  props: {
    courses: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.courses {
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 30px;

    &:before,
    &:after {
      clear: both;
      content: "";
      display: block;
    }

    img {
      float: left;
      margin-right: 15px;
      width: 45px;
    }

    .course-info {
      overflow: hidden;
    }
  }
}

.course-title,
.course-subtitle,
.course-period {
  display: block;
}

.course-title {
  color: #444;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 2px;
}

.course-subtitle {
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
}

.course-period {
  font-size: 80%;
  font-style: italic;
  margin-bottom: 10px;

  i {
    margin-right: 3px;
  }
}
</style>
