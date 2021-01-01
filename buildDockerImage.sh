#! /bin/sh
export buildDir="build"
./build.sh
docker build -t discord-bot ${buildDir}