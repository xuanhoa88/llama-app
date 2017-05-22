#!/usr/bin/env bash

$url = $1
wget --server-response -q -o wgetOut "$url"
echo "$url"
sleep 5
_wgetHttpCode=`cat wgetOut | gawk '/HTTP/{ print $2 }'`
if [ "$_wgetHttpCode" != "200" ]; then
    echo "[Error] `cat wgetOut`"
fi