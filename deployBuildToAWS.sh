#! /bin/sh
awsAddress="ubuntu@ec2-3-8-201-120.eu-west-2.compute.amazonaws.com"
pubkey="wehatedeanbot.pem"
buildDir="build"

npm run "${buildDir}"
[[ -d "${buildDir}" ]] && rm -rf "${buildDir}"
mkdir -p "${buildDir}"

# pull contents from master branch on git instead? maybe also zip it?
cp -rf dist/. "${buildDir}"
cp -rf resources "${buildDir}"
cp package.json "${buildDir}"
cp package-lock.json "${buildDir}"

ssh -i "${pubkey}" -o StrictHostKeyChecking=no ${awsAddress} "forever stopall; rm -rf "${buildDir}""

scp -r -i "${pubkey}" -o StrictHostKeyChecking=no "${buildDir}" ${awsAddress}:~/

# important to cd into buildDir here before starting forever command, otherwise the paths the app uses are all wrong and nothing works
ssh -i "${pubkey}" -o StrictHostKeyChecking=no ${awsAddress} "cd "${buildDir}"; npm install; forever start main.js"

rm -rf "${buildDir}"

