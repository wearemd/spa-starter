# Single page application starter
**A starter template for single page applications featuring Vue.js, Pug, Sass and Webpack.**

## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org/en/)
- [**Yarn**](https://yarnpkg.com/en/)

## 🥞 Stack
- [**minireset.css**](https://jgthms.com/minireset.css/) 
- [**Pug**](https://pugjs.org/api/getting-started.html)
- [**Sass**](https://sass-lang.com/)
- [**Vue.js**](https://vuejs.org/) 
- [**Vue router**](https://router.vuejs.org/) 
- [**Webpack**](https://webpack.js.org/)

## ⌨️ Commands
### Serve
Serve `src/` with livereload on [localhost:3000](http://localhost:3000) using Webpack dev environment.

```
make
```

💡 This command will also install dependencies on first run and when `package.json` or `yarn.lock` change.

### Build
Build everything with Webpack production environment to `dist/`.

```
make build
```

### Help
Display a list of available commands.

```
make help
```

## 🗄️ Project structure
```
.
├── assets                           # Assets folder.
│   ├── fonts                        # Fonts folder.
│   └── images                       # Images folder.
├── dist                             # Minified, optimized and compiled files. 
├── sass                             # Sass style files.
│   ├── dev                          # Dev style folder.
│   │   └── shame.sass               # Here we put WIP style or dirty hacks.
│   └── utilities                    # Utilities style folder..
│       ├── initial-variables.sass   # Variables available in all `.vue` files.
│       ├── mixins.sass              # Mixins available in all `.vue` files.
│       └── transitions.sass         # Simple Vue.js transitions imported in `app.vue`.
├── src                              # JavaScript source files (.vue, .js).
│   ├── pages                        # Pages folder with each .vue file corresponding to a route defined in router.js.
│   │   ├── index.vue                # Home page.   
│   │   └── page.vue                 # Simple page.
│   ├── router                       # Router folder.
│   │   └── router.js                # Vue.js router configuration and initialization.
│   ├── app.js                       # Vue.js application configuration and initialization.
│   ├── app.vue                      # Main Vue.js component.
│   └── index.html                   # Used to render the website.
└── webpack                          # Webpack configuration files.
│   ├── common.js                    # Configuration shared between dev and prod environment.
│   ├── dev.js                       # Development environment configuration file.
│   ├── prod.js                      # Production environment configuration file.
│   └── utils.js                     # JavaScript utilities for easier environment creation.
└── .tool-versions                   # Tells asdf which version to use locally for each language.
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

## 🤜🤛 Contributing
Contributions, issues and feature requests are welcome!

## 📝 License
This project is [GNU GPLv3](LICENSE) licensed.
