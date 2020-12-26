#! /bin/sh
export buildDir="build"
./build.sh
docker build --build-arg buildDir=${buildDir} -t discord-bot .