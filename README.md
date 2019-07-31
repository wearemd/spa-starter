# Single page application starter
A starter template for single page applications featuring Vue.js, Pug, Sass and Webpack.

## Getting started

### Prerequisites
- **Node.js** 10.16.0
- **Yarn** 1.16.0

### Setup
```
yarn install
```

### Serve
Serve `./src` with livereload on [localhost:3004](http://localhost:3004)
```
make
```

### Build
Build everything to `./dist`
```
make build
```

## Folders and files
### 📁 `assets`
Static assets (fonts and images)

### 📁 `sass/dev`
`shame.sass`: Here we put WIP CSS or dirty hacks

### 📁 `sass/utilities`
- `initial-variables.sass`: Variables available in all `.vue` files
- `mixins.sass`: Mixins available in all `.vue` files
- `transitions.sass`: Example Sass file imported in the root `app.vue` file

### 📁 `src`
`index.html`: Used to render the website

### 📁 `./`
`.tool-versions`: Tells [asdf](https://github.com/asdf-vm/asdf) which version to use locally for each language

## CSS reset
We use [minireset.css](https://jgthms.com/minireset.css/), a tiny modern CSS reset.

## Constant per environment
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

## Code formatting
For code formatting we use [Js​Prettier](https://packagecontrol.io/packages/JsPrettier) Sublime Text plugin (which uses [Prettier](https://prettier.io)). Here is our configuration for that particular plugin:

```json
{
  "auto_format_on_save": true,
  "auto_format_on_save_excludes": ["*.md", "*.html", "*.json"],
  "node_path": "$HOME/.asdf/shims/node",
  "prettier_cli_path": "./node_modules/.bin/prettier"
}
```
