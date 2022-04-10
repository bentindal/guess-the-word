#!/bin/bash
echo "Starting Automatic Git Pulls!"   
while true
do
    echo "Attempting to pull..."
    git pull
    sleep 10
done
