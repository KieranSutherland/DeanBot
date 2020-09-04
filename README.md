# WE HATE DEAN
WHAT'S UP GUYS BILLY MAZE HERE AND THIS IS THE WEHATEDEANBOT. WE DO NOT LIKE HIM, HE STINKS

## Wanna use this locally? 
Make sure you have Node installed locally before you attempt to do this, which can be found here: https://nodejs.org/en/.

    git clone https://github.com/KieranSutherland/WeHateDean.git
    
    cd WeHateDean
    
    npm install --force
    
Since this is primarily TypeScript, you'll need to build everything into JavaScript before you start the application.

    npm run build
    
This will compile the TS files into JS files and put them into the 'dist' directory.

You can then use the command below to start the application.

    node .
    
You will need to do a npm build every time you want to change something to update the JS files.

## Interaction with AWS
This application is hosted on an AWS VM 24/7. You can do most of what you would usually want using the aws.sh shell script.

    ./aws.sh [command]
        [start] - Starts an instance of the current build deployed to AWS
        [stop] - Stops the instance deployed to AWS
        [deploy] - Deploys your current local version to AWS and restarts the application with that new build

You can also use the ssh.sh shell script to ssh directly into the VM for custom maintenance. 

    ./ssh.sh

Be aware that these scripts assumes you have the 'wehatedeanbot.pem' public key, which is **not** provided in this repo for obvious reasons.
PM me directly if you want the key and I might give it to you maybe.

## Other useful info
You can also run a dev command to build the project and start the application straight afterwards (npm run build && node .) just to save a few 
few seconds each time.

    npm run dev