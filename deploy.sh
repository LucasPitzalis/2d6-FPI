#!/bin/bash

cd ./dist
cp --recursive ./index.html 200.html
surge --domain https://2d6-en-ligne.surge.sh
