.DEFAULT_GOAL := serve

WEBPACK        := $(PWD)/node_modules/.bin/webpack
WEBPACK_SERVER := $(PWD)/node_modules/.bin/webpack-dev-server

.PHONY: deps
deps: node_modules

node_modules: package.json yarn.lock
	@yarn install
	touch $@

.PHONY: serve
serve: deps ## Serve ./src with livereload on localhost:3004
	@$(WEBPACK_SERVER) --inline --progress --config webpack/dev.js

.PHONY: build
build: deps ## Build everything to ./dist
	@echo "Building front-end"
	@rm -rf dist/*
	@NODE_ENV=production $(WEBPACK) --config webpack/prod.js
	@echo "Front-end built!"

.PHONY: help
help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
