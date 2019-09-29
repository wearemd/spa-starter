<p align="center">
  <img width="600px" src="README-header.gif" alt="">
</p>
<p align="center">
  <strong>Single page application starter</strong> is a starter template for single page applications (SPA).
  <br>
  <b>Stack:</b>
  <b><a href="https://babeljs.io">Babel</a></b>,
  <b><a href="https://jgthms.com/minireset.css/">minireset.css</a></b>,
  <b><a href="https://pugjs.org">Pug</a></b>,
  <b><a href="https://sass-lang.com">Sass</a></b>,
  <b><a href="https://vuejs.org">Vue.js</a></b>,
  <b><a href="https://router.vuejs.org">Vue Router</a></b>,
  <b><a href="https://webpack.js.org">Webpack</a></b>.
</p>

- - -

## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org)
- [**Yarn**](https://yarnpkg.com)

## ⌨️ Commands
### Serve
```makefile
# Serve site at localhost:3000 with hot reloading

make
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Build
```makefile
# Build site for production use

make build
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Help
```makefile
# List available commands

make help
```

## 🗄️ Project structure
```
.
├── assets                         # ASSETS
│   ├── fonts                      # Font assets
│   │   └── .gitkeep               # Tracking an empty directory within Git
│   │
│   └── images                     # Image assets
│       └── unicorn.jpg            # Sample image
│
│
├── sass                           # SASS STYLE
│   ├── dev                        # WIP style for development
│   │   └── shame.sass             # WIP style or dirty hacks
│   │
│   └── utilities                  # Utilities
│       ├── initial-variables.sass # Variables available in all .vue and .sass files
│       ├── mixins.sass            # Mixins available in all .vue and .sass files
│       └── transitions.sass       # Vue.js transitions imported in app.vue
│
│
├── src                            # VUE.JS/JAVASCRIPT SOURCE FILES
│   ├── pages                      # Pages
│   │   ├── index.vue              # Home page
│   │   └── page.vue               # Sample page
│   │
│   ├── router                     # Router
│   │   └── index.js               # Vue.js router configuration and initialization
│   │
│   ├── app.js                     # Vue.js application configuration and initialization
│   ├── app.vue                    # Main Vue.js component
│   └── index.html                 # HTML index used to render the website
│
│
├── webpack                        # WEBPACK CONFIGURATION PER ENVIRONMENT AND UTILITIES
│   ├── common.js                  # Shared between development and production environments
│   ├── dev.js                     # Development environment
│   ├── prod.js                    # Production environment
│   └── utils.js                   # Utilities to create a new environment easily
│
│
├── .babelrc                       # Presets and plugins to use, used by Babel
├── .gitignore                     # Files and folders ignored by Git
├── .tool-versions                 # Which version to use locally for each language, used by asdf
├── LICENSE                        # License
├── Makefile                       # Commands for this project
├── package.json                   # JavaScript dependencies, used by Yarn
├── README-header.gif              # README header image
├── README.md                      # Project documentation
└── yarn.lock                      # Tracking exact versions for JavaScript dependencies, used by Yarn
```

## ⚙️ Constant per environment
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

Now you can use this constant in every JavaScript file inside `src/` and it will changed depending on your Webpack environment.

## 🍱 Cache busting
Our strategy for cache busting is to automatically append a `.[generated-hash]` to each asset file name. You can read more about caching in [Webpack documentation](https://webpack.js.org/guides/caching/).

## 🤜🤛 Contributing
Contributions, issues and feature requests are welcome!

## 📄 License
Single page application starter is licensed under the [GNU General Public License v3.0](LICENSE).
