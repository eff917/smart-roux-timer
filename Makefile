.PHONY: build

default_target: install build
install:
	npm install

build:
	npm run build
