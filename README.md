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
