# Web Curriculum

A simple web curriculum contructed with [Vue.js](https://vuejs.org/) and utilizing [webpack-simple](https://github.com/vuejs-templates/webpack-simple) as structure. [Click here](https://ederssouza.github.io) for preview.

## Getting Started

### Installing

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)

```bash
# clone this repository
$ git clone git@github.com:ederssouza/cv.git
$ cd cv

# install dependencies
$ npm install
# start dev server
$ npm run dev
```

## How to use with git and deploy to Github Pages

The first step is configure GitHub Pages in the settings in your repository and change source option for **master branch /docs folder**.

![GitHub menu](https://raw.githubusercontent.com/ederssouza/cv/master/src/assets/img/github-menu.jpg)
![GitHub settings](https://raw.githubusercontent.com/ederssouza/cv/master/src/assets/img/github-settings.jpg)

When you clone this repo, every git information will be downloaded to. So, you have to remove all my git stuff to create yours.

```bash
# inside of your project runs to remove git folder
$ rm -Rf .git
```

Next, initialize your git repository:

```bash
# init the repo
git init
```

Update `./src/profile.json` with your data.

Commit all files:

```bash
# add all files to commit
$ git add --all
# create a commit
$ git commit -m "first commit"
```

Deploy:

```bash
$ npm run deploy
```

## Something in the future?

- [ ] Mobile version
- [ ] Get LinkedIn data dynamic
- [ ] Contact form

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ederssouza/cv/tags).

## Authors

* **Eder Sampaio** - *Initial work* - [ederssouza](https://github.com/ederssouza/)

See also the list of [contributors](https://github.com/ederssouza/cv/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
