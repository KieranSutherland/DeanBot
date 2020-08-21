#! /bin/sh
pubkey="wehatedeanbot.pem"

[[ -d build ]] && rm -rf build
mkdir -p build
# pull contents from master branch on git instead? maybe also zip it?-
ls -I wehatedeanbot.pem -I wehatedeanbot.ppk -I node_modules -I build -I dependencies -I deployBuildToAWS.sh | xargs cp -rf -t build

ssh -i "${pubkey}" -o StrictHostKeyChecking=no ubuntu@ec2-35-176-26-62.eu-west-2.compute.amazonaws.com "forever stopall; rm -rf build"

scp -r -i "${pubkey}" -o StrictHostKeyChecking=no build ubuntu@ec2-35-176-26-62.eu-west-2.compute.amazonaws.com:~/

# important to cd into build here before starting forever command, otherwise the paths the app uses are all wrong and nothing works
ssh -i "${pubkey}" -o StrictHostKeyChecking=no ubuntu@ec2-35-176-26-62.eu-west-2.compute.amazonaws.com "cd build; npm install; forever start main.js"

rm -rf build

