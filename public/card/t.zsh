#!/bin/zsh

d=${0:a:h}
j=$d/card.json
n=`cat $j|jq length`
n=$((n - 1))
for ((i=0;i<=$n;i++))
do
	t=`cat $j|jq ".[$i].cid"`
	id=`cat $j|jq ".[$i].id"`
	f=card_${id}.webp
	if ls $f;then
		cid=`atr img-upload $f|head -n 1`
		echo $cid
		if cat $j |jq ".[$i]|= .+ {\"cid\":\"$cid\"}";then
			cat $j |jq ".[$i]|= .+ {\"cid\":\"$cid\"}" >! $j.back
			mv $j.back $j
			cat $j|jq ".[$i]"
		fi
	fi
done
