#!/bin/bash
echo "Starting Automatic Git Pulls!"   
while true
do
    echo "Initiating pull..."
    git pull
    sleep 10
done
