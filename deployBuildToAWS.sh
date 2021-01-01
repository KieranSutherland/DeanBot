#! /bin/sh
./build.sh

# this relies on the instance having default sudo rights to docker
# delete old build directory if it's there, stop all running containers and prune all dangling and unreferenced containers and images
ssh -i "${pubkey}" -o StrictHostKeyChecking=no ubuntu@${publicIp} \
    "[[ -d "${buildDir}" ]] && rm -rf "${buildDir}"; docker ps -aq | xargs docker stop; docker system prune -f"

# copy build directory into aws instance
scp -r -i "${pubkey}" -o StrictHostKeyChecking=no "${buildDir}" ubuntu@${publicIp}:~/

# build image using build directory and run container in detached mode and then delete build directory (on instance, not container)
ssh -i "${pubkey}" -o StrictHostKeyChecking=no ubuntu@${publicIp} \
    "docker build -t "${dockerImageName}" "${buildDir}"; docker run --detach "${dockerImageName}"; rm -rf "${buildDir}""

# delete local build directory
rm -rf "${buildDir}"
