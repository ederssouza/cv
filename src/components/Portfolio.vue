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
                Portfolio
                <small>projetos no github</small>
              </h1>

              <div class="fa-5x loading text-center" v-if="loading">
                <i class="fas fa-cog fa-pulse"></i>
              </div>

              <ul class="repos row" v-if="!loading && repos">
                <li v-for="(repo, index) in orderBy(repos, 'stargazers_count', -1)" :key="`repo-${index}`" class="col-sm-4">
                  <a :href="repo.html_url" :title="repo.name" target="_blank" class="repo">
                    <header class="repo-header">
                      <i v-if="repo.language === 'JavaScript'" class="fab fa-js"></i>
                      <i v-else-if="repo.language === 'HTML'" class="fab fa-html5"></i>
                      <i v-else-if="repo.language === 'CSS'" class="fab fa-css3-alt"></i>
                      <i v-else-if="repo.language === 'Vue'" class="fab fa-vuejs"></i>
                      <i v-else class="fab fa-github"></i>
                    </header>

                    <div class="repo-body">
                      <h2 class="repo-title">{{ repo.name }}</h2>
                      <p><small><i class="far fa-star"></i> Stars {{ repo.stargazers_count }} | <i class="fas fa-code-branch"></i> Forks {{ repo.forks }}</small></p>
                    </div>
                  </a>
                </li>
              </ul>
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
  name: 'Portfolio',
  components: {
    'cv-sidebar': ProfileSidebar,
  },
  data () {
    return {
      page: {
        title: 'Portfolio',
        description: ''
      },
      loading: false,
      profile: json.profile,
      gitHubUser: 'ederssouza',
      repos: null,
    }
  },
  metaInfo () {
    return {
      title: this.page.title,
      meta: [
        { name: 'description', content: this.page.description }
      ]
    }
  },
  methods: {
    getProjects(gitHubUser) {
      this.loading = true;

      fetch(`https://api.github.com/users/${gitHubUser}/repos`)
        .then(res => {
          return res = res.json()
        }).then(res => {
          this.repos = res
          this.loading = false;
        }).catch(err => {
          console.error(err);
          this.loading = false;
          this.repos = null;
        });
    }
  },
  mounted() {
    this.getProjects(this.gitHubUser);
  }
}
</script>

<style lang="scss" scoped>
.repos {
  list-style-type: none;
  padding: 0;
}

.repo {
  background-color: #f4f4f4;
  color: #666;
  display: block;
  margin: 15px 0;
  @include box-shadow(0 0 4px rgba(#000, .12));
  @include transition(box-shadow .26s, color .26s, transform .26s);

  &:hover {
    text-decoration: none;
  }
}

.repo-header {
  height: 150px;
  position: relative;

  svg {
    color: #bbb;
    font-size: 75px;
    left: 50%;
    position: absolute;
    top: 50%;
    @include transform(translate(-50%, -50%));
    @include transition(color .26s);
  }
}

.repo {

  &:focus {
    outline: none;
    text-decoration: none;
  }

  &:hover {
    color: #333;
    @include box-shadow(0 0 40px rgba(#000, .3));
    @include transform(scale(1.08));

    .repo-header {

      svg.fa-js ,
      svg.fa-js-square {
        color: #f1de5e;
      }

      svg.fa-html5 {
        color: #f16429;
      }

      svg.fa-css3-alt {
        color: #369cd6;
      }

      svg.fa-vuejs {
        color: #41b883;
      }

      svg.fa-github {
        color: #333;
      }
    }
  }
}

.repo-body {
  background-color: #fff;
  height: 66px;
  padding: 10px;
  text-align: center;

  .repo-title {
    font-size: 15px;
    font-weight: 700;
    margin: 0 0 8px;
  }

  p {
    color: #999;
    font-size: 12px;
    margin: 0 0 2px;

    small {
      font-size: 90%;
    }
  }
}

.loading {
  padding: 40px 0;
  color: #ccc;
}
</style>
