#!/bin/bash         
while true
do
    echo "Starting auto git pulls every 10 seconds..."
    git pull
    sleep 10
done
