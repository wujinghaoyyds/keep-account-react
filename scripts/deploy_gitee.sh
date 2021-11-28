#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin https://gitee.com/wujinghao/keep-accounts-react-website.git &&
git push -u origin master -f
cd -