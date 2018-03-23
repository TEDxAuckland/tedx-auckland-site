# Tedx Auckland Website

This site is built in [Jekyll](https://jekyllrb.com/) with a smattering of [Vue.js](https://vuejs.org) and intended to be hosted on [Cloud Cannon](https://cloudcannon.com/).

## Development

- Clone the repository
- `bundle install`
- `jekyll serve`

### Updating .js and .scss Dependencies

- Get the desired version using yarn
- Check how the library is included
 - For .js check `_layouts/default.html`
 - For .scss check `_sass/app.scss` (you might need to change the sass load paths in config.yml)
- Copy the new versions from `node_modules` to their respective locations
