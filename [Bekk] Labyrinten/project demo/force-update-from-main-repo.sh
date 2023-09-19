#!/bin/bash

read -p $'\e[33mWARNING: Vil du overskrive hele repoet med innholdet i labyrinten-finale-23? (yes/no)\e[0m ' yn

case $yn in 
	yes ) echo Overskriver..;;
	* ) echo exiting...;
		exit;;
esac

ORIGINAL_REMOTE=$(git remote get-url origin)

echo $'\e[33mSetter remote til git@github.com:bekk/labyrinten-finale-23.git\e[0m'
git remote set-url origin git@github.com:bekk/labyrinten-finale-23.git

echo $'\e[33mForce puller fra labrinten-finale-23.git\e[0m'
git pull --force

echo $'\e[33mSetter remote url tilbake til \e[0m'$ORIGINAL_REMOTE
git remote set-url origin $ORIGINAL_REMOTE

