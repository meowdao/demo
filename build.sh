#!/usr/bin/env bash

rimraf ./build

node_modules/.bin/babel -d ./build/server ./server --copy-files
node_modules/.bin/babel -d ./build/client ./client --copy-files

# don't use `webpack -p`
# https://github.com/webpack/webpack/issues/1385
NODE_ENV=production node_modules/.bin/webpack --config server/configs/webpack.production.js