<template>
  <div class="testimonials">
    <blockquote
      cite="https://www.linkedin.com/in/ederssouza/"
      v-for="(testimonial, index) in testimonials"
      :key="`testimonial-${index}`"
      class="testimonial-item"
      :class="(index % 2) ? 'even' : 'odd'">
      <div class="testimonial-avatar">
        <img :src="testimonial.image" :alt="testimonial.name" :title="testimonial.name">
      </div>
      <span class="testimonial-name">{{ testimonial.name }}</span>
      <span class="testimonial-occupation">{{ testimonial.office }}</span>
      <p class="testimonial-text">"{{ testimonial.msg }}"</p>
      <small class="testimonial-connection">{{ testimonial.connection }}</small>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  props: {
    testimonials: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonials {}

.testimonial-item {
  background-color: #f7f7f7;
  border: none;
  padding: 20px;
  position: relative;
  @include border-radius(8px);

  &:last-child {
    margin-bottom: 0;
  }

  .testimonial-avatar {
    border: 10px solid #fff;
    height: 85px;
    overflow: hidden;
    position: absolute;
    top: 20px;
    width: 85px;
    @include border-radius(50%);

    img {
      left: 50%;
      max-width: 100%;
      position: absolute;
      top: 50%;
      @include transform(translate(-50%, -50%));
    }
  }

  &.odd {
    margin-left: 30px;
    padding-left: 65px;
    text-align: left;

    .testimonial-avatar {
      left: -42.5px;
    }
  }

  &.even {
    margin-right: 30px;
    padding-right: 65px;
    text-align: right;

    .testimonial-avatar {
      right: -42.5px;
    }
  }
}

.testimonial-name,
.testimonial-occupation,
.testimonial-text {
  display: block;
}

.testimonial-name {
  color: #444;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 2px;
}

.testimonial-occupation {
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
}

.testimonial-text {
  color: #777;
  font-size: 80%;
  font-style: italic;
  margin-bottom: 0;
}

.testimonial-connection {
  color: #999;
  display: block;
  font-size: 60%;
  font-style: italic;
  margin-top: 10px;
}
</style>
