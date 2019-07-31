# Single page application starter
A starter template for single page applications featuring Vue.js, Pug, Sass and Webpack.

## Getting started

### Prerequisites
- Node.js - 10.16.0
- Yarn - 1.16.0

### Setup
`yarn install`

### Serve
`make`: Serve `./src` with livereload on [localhost:3004](http://localhost:3004)

### Build
`make build`: Build everything to `./dist`

## Folders
- `assets`: Static assets (images, fonts…)
- `sass/utilities`
  - `initial-variables.sass`: Variables available in all `.vue` files
  - `mixins.sass`: Mixins available in all `.vue` files
  - `transitions.sass`: Example Sass file imported in the root `app.vue` file
- `src`
  - `index.html`: The actual `index.html` used to render the website

## Configuration files
- `.tool-versions`: Tells [asdf](https://github.com/asdf-vm/asdf) which version to use locally for each language

## CSS reset
We use [minireset.css](https://jgthms.com/minireset.css/), a tiny modern CSS reset.

## Const per environment
To define a constant that can change based on your environment simply edit `package.json` to add the constant name and its default value (usually for dev environment):

```json
"configuration": {
  "definePlugin": {
    "SOME_CONST": "Hello there"
  }
}
```

Then you can override it per environment by editing the related `webpack/[env].js` file:

```js
utils.definePlugin({
  SOME_CONST: "Hello from production"
})
```

## Code formatting using Sublime Text
For code formatting we use [Js​Prettier](https://packagecontrol.io/packages/JsPrettier) which uses [Prettier](https://prettier.io). Here is our configuration for that particular plugin:

```json
{
  "auto_format_on_save": true,
  "auto_format_on_save_excludes": ["*.md", "*.html", "*.json"],
  "node_path": "$HOME/.asdf/shims/node",
  "prettier_cli_path": "./node_modules/.bin/prettier"
}
```
