# Template for SPA website

## Getting started

### Prerequisites
* Node.js ~> v8.0.0
* Yarn ~> 1.0.0

### Setup
`yarn install`

### Serve
`make`: Serve ./src with livereload on localhost:3004

### Build
`make build`: Build everything to ./dist

## Folders
* `sass/`
  * `utilities/`
    * `mixins.sass`: mixins available in all `.vue` files
    * `variables.sass`: variables available in all `.vue` files
    * `transitions.sass`: example sass file imported in the root `app.vue` file
* `src/`
  * `index.html`: the actual `index.html` used to render the website
* `static/`: static assets (images, fonts…)

## Const per environment
To define a constant that can change based on your environment simply edit `package.json` to add the constant name and its default value (usually for dev environment):

```json
"configuration": {
    "definePlugin":{
      "SOME_CONST": "Hello there"
    }
  }
```

Then you can override it per environment by editing the related `webpack.[env].js` file:

```js
utils.definePlugin({
  'SOME_CONST': 'Hello from production'
})
```
