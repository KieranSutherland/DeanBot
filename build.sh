#! /bin/sh
echo "${buildDir}"
npm build .
[[ -d "${buildDir}" ]] && rm -rf "${buildDir}"
mkdir -p "${buildDir}"

# pull contents from master branch on git instead? maybe also zip it?
cp -rf dist/. "${buildDir}"
cp -rf resources "${buildDir}"
cp package.json "${buildDir}"
cp package-lock.json "${buildDir}"