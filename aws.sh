#! /bin/sh
pubkey="wehatedeanbot.pem"
buildDir="build"
command=$1
command=${command,,} # converts to lowercase

if [ ${command} == "start" ]; then
    ssh -i "${pubkey}" -o StrictHostKeyChecking=no ubuntu@ec2-35-176-26-62.eu-west-2.compute.amazonaws.com "cd "${buildDir}"; forever start main.js"
elif [ ${command} == "stop" ]; then
    ssh -i "${pubkey}" -o StrictHostKeyChecking=no ubuntu@ec2-35-176-26-62.eu-west-2.compute.amazonaws.com "cd "${buildDir}"; forever stopall"
elif [ ${command} == "deploy" ]; then
    ./deployBuildToAWS.sh
else
    echo "Please use one of the following arguments:
    start - Starts an instance of the current build on AWS
    stop - Stops the instance of the current build on AWS
    deploy - Pushes current local build to AWS and starts up instance"
fi
