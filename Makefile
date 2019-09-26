WEBPACK        := $(PWD)/node_modules/.bin/webpack
WEBPACK_SERVER := $(PWD)/node_modules/.bin/webpack-dev-server

.PHONY: deps
deps: node_modules

node_modules: package.json yarn.lock
	@yarn install
	@touch $@

.DEFAULT_GOAL := serve
.PHONY: serve
serve: deps ## Serve site at localhost:3000 with hot reloading
	@$(WEBPACK_SERVER) --inline --progress --config webpack/dev.js

.PHONY: build
build: deps ## Build site for production use
	@echo "Building front-end"
	@rm -rf site/*
	@NODE_ENV=production $(WEBPACK) --config webpack/prod.js
	@echo "Front-end built!"

.PHONY: help
help: ## List available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
