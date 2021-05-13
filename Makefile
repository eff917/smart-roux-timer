install:
	npm install
run-dev: install
	./node_modules/.bin/parcel serve --no-autoinstall public/index.html --open --out-dir dist/parcel

deploy:
	npm run deploy
