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
                Contato
                <small>Para contatos profissionais e freelas</small>
              </h1>

              <p>Em breve...</p>
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
  name: 'Contact',
  components: {
    'cv-sidebar': ProfileSidebar,
  },
  data () {
    return {
      page: {
        title: 'Contact',
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
