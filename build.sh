#!/bin/bash

# Abort on first error
set -e

echo "Copying HTML file"
cp client-src/index.html client-bin/index.html

echo "Copying JS files"
mkdir -p "client-bin/js/"
cp client-src/js/app.js client-bin/js/app.js
cp client-src/js/jquery.js client-bin/js/jquery.js

echo "Setting up Node.JS part"
cd server && npm install express --save

echo "Ready! Don't forget to check the README.md  "
echo "and our tutorial page!"
