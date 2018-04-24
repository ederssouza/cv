<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <cv-sidebar />
      </div><!-- /.col -->

      <div class="col-md-9">
        <div class="content">
          <section class="section">
            <div class="section-content">
              <h1 class="section-name">
                {{ profile.name }}
                <small>{{ profile.occupation }}</small>
              </h1>

              <p>{{ profile.resume }}</p>
            </div>
          </section><!-- /.section -->

          <section class="section">
            <header class="section-header">
              <h2 class="section-title">Competências <span>técnicas</span></h2>
            </header>

            <div class="section-content">
              <cv-skills :skills="skills" />
            </div>
          </section><!-- /.section -->

          <section class="section">
            <header class="section-header">
              <h2 class="section-title">Experiência <span>profissional</span></h2>
            </header>

            <div class="section-content experience">
              <cv-timeline :items="experiences" />
            </div>
          </section><!-- /.section -->

          <section class="section">
            <header class="section-header">
              <h2 class="section-title">Formação <span>acadêmica</span></h2>
            </header>

            <div class="section-content education">
              <cv-timeline :items="education" />
            </div>
          </section><!-- /.section -->

          <section class="section">
            <header class="section-header">
              <h2 class="section-title">Cursos</h2>
            </header>

            <div class="section-content">
              <cv-courses :courses="courses" />
            </div>
          </section><!-- /.section -->

          <section class="section">
            <header class="section-header">
              <h2 class="section-title">Depoimentos</h2>
            </header>

            <div class="section-content">
              <cv-testimonials :testimonials="testimonials" />
            </div>
          </section><!-- /.section -->
        </div><!-- /.content -->
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container -->
</template>

<script>
import ProfileSidebar from './ProfileSidebar'
import Skills from './Skills'
import Timeline from './Timeline'
import Testimonials from './Testimonials'
import Courses from './Courses'
import json from '../profile.json'

export default {
  name: 'Home',
  components: {
    'cv-sidebar': ProfileSidebar,
    'cv-skills': Skills,
    'cv-timeline': Timeline,
    'cv-testimonials': Testimonials,
    'cv-courses': Courses
  },
  data () {
    return {
      page: {
        title: 'Eder Sampaio | Front-End Developer',
        description: ''
      },
      profile: json.profile,
      skills: json.skills,
      experiences: json.experiences,
      education: json.education,
      testimonials: json.testimonials,
      courses: json.courses
    }
  },
  metaInfo () {
    return {
      title: this.page.title,
      meta: [
        { name: 'description', content: this.page.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
