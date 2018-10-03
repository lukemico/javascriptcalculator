#!/bin/sh

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd

# make a directory to put the gh-pages branch
mkdir gh-pages-branch
cd gh-pages-branch

# now lets setup a new repo so we can update the gh-pages branch
git config --global user.name > /dev/null 2>&1
git init
git remote add --fetch origin

# switch into the the gh-pages branch
if git rev-parse --verify origin/gh-pages > /dev/null 2>&1
then
    git checkout gh-pages
    # delete any old site as we are going to replace it
    # Note: this explodes if there aren't any, so moving it here for now
    git rm -rf .
else
    git checkout --orphan gh-pages
fi

# show where we are on the machine
pwd

# copy over or recompile the new site
cp -a "../public/"* .

# stage any changes and new files
git add -A
# now commit, ignoring branch gh-pages doesn't seem to work, so trying skip
git commit --allow-empty -m "Deploy to GitHub pages [ci skip]"
# and push, but send any output to /dev/null to hide anything sensitive
git push --force --quiet origin gh-pages
# go back to where we started and remove the gh-pages git repo we made and used
# for deployment
cd ..
rm -rf gh-pages-branch

echo "Finished Deployment!"
