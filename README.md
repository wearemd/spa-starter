<h1 align="center">Single page application starter</h1>
<p align="center"><strong>Single page application starter</strong> is a starter template for single page applications (SPA).</p>

## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org)
- [**Yarn**](https://yarnpkg.com)

## 🥞 Stack
- [**Babel**](https://babeljs.io)
- [**minireset.css**](https://jgthms.com/minireset.css/)
- [**Pug**](https://pugjs.org)
- [**Sass**](https://sass-lang.com)
- [**Vue.js**](https://vuejs.org) 
- [**Vue Router**](https://router.vuejs.org) 
- [**Webpack**](https://webpack.js.org)

## ⌨️ Commands
### Serve
```bash
# Serve site at localhost:3000 with hot reloading

make
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Build
```bash
# Build site for production use

make build
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Help
```bash
# List available commands

make help
```

## 🗄️ Project structure
```
.
├── assets                           # Assets folder
│   ├── fonts                        # Fonts folder
│   └── images                       # Images folder
│
├── site                             # Minified, optimized and compiled files
│
├── sass                             # Sass stylesheets
│   ├── dev                          # Development style folder
│   │   └── shame.sass               # Here we put WIP style or dirty hacks
│   │                                # See csswizardry.com/2013/04/shame-css/
│   └── utilities                    # Utilities style folder
│       ├── initial-variables.sass   # Variables available in all .vue and .sass files
│       ├── mixins.sass              # Mixins available in all .vue and .sass files
│       └── transitions.sass         # Vue.js transitions imported in app.vue
│
├── src                              # JavaScript source files (.vue, .js)
│   ├── pages                        # Pages folder containing each .vue file
│   │   │                            # corresponding to a route defined in router/index.js
│   │   ├── index.vue                # Home page
│   │   └── page.vue                 # Sample page
│   ├── router                       # Router folder
│   │   └── index.js                 # Vue.js router configuration and initialization
│   ├── app.js                       # Vue.js application configuration and initialization
│   ├── app.vue                      # Main Vue.js component
│   └── index.html                   # File used to render the website
│
└── webpack                          # Webpack configuration files
│   ├── common.js                    # Configuration shared between dev and prod environments
│   ├── dev.js                       # Development environment configuration file
│   ├── prod.js                      # Production environment configuration file
│   └── utils.js                     # JavaScript utilities to create a new environment easily
│
├── .babelrc                         # Tells Babel which presets and plugins to use 
├── .tool-versions                   # Tells asdf which version to use locally for each language
├── Makefile                         # Defines commands for this project
└── package.json                     # Sets libraries and dependencies for JS packages, used by Yarn
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
