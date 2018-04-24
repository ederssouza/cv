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
                Ops...
                <small>Página não encontrada</small>
              </h1>
            </div>
          </section><!-- /.section -->
        </div><!-- /.content -->
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container -->
</template>

<script>
import ProfileSidebar from './ProfileSidebar'

export default {
  name: 'Page404',
  components: {
    'cv-sidebar': ProfileSidebar,
  },
  data () {
    return {
      page: {
        title: 'Eder Sampaio | Front-End Developer',
        description: ''
      },
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
