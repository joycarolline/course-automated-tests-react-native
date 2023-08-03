#!bin/sh

GREEN_COLOR="\033[0;32m"
NO_COLOR="\033[0m"

echo "${GREEN_COLOR}Files to Move:${NO_COLOR}"

ls githooks                     # List files in githooks directory
cp githooks/* ./.git/hooks/     # Copy files from githooks directory to .git/hooks directory
chmod u+x ./.git/hooks/*        # Make files in githooks directory executable

echo "____________"
echo "${GREEN_COLOR}Done!${NO_COLOR}"
