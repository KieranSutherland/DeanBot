#! /bin/sh
# delete old build directory if it exists
[[ -d "${buildDir}" ]] && rm -rf "${buildDir}"
mkdir -p "${buildDir}"

# build new dist folder
npm run build

# pull contents from master branch on git instead? maybe also zip it?
cp -rf dist/. "${buildDir}"
cp -rf resources "${buildDir}"
cp package.json "${buildDir}"
cp package-lock.json "${buildDir}"
cp Dockerfile "${buildDir}"