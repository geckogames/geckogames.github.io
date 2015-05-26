#!/bin/bash
LTIME=`stat -c %Z style.sass`

while true
do
    ATIME=`stat -c %Z style.sass`

    if [[ "$ATIME" != "$LTIME" ]]
    then
        sass style.sass > style.css
        LTIME=$ATIME
    fi
    sleep 1
done
