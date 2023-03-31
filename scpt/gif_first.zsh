#!/bin/zsh
d=${0:a:h}
dd=${0:a:h:h}

url=syui.ai/img

case $OSTYPE in
	darwin*)
		path_nvm_sh="/opt/homebrew/opt/nvm/nvm.sh";;
	linux*)
		path_nvm_sh="";;
esac

dir=$dd/public/card
static=$dd/static/img
json=$dd/public/json/card.json
mkdir -p $dir
mkdir -p $static
n=`cat $json|jq "length"`
n=`expr $n - 1`
bg=$static/card_bg.png
br=$static/card_br.png

for ((i=0;i<=$n;i++))
do
	p=`cat $json|jq -r ".[$i].p"`
	sid=`cat $json|jq -r ".[$i].src"`
	s=$static/${sid}.png
	id=`cat $json|jq -r ".[$i].id"`
	gif=$dir/card_first_$id.gif

	if [ -f $gif ];then
		continue
	fi

	nn=`ls $static/card_bgg_first_*.png|wc -l`
	nn=$((nn - 1))

	for ((ii=0;ii<=$nn;ii++))
	do
		title=$dir/null
		o=${title}_first_${ii}.png
		br=$static/card_bgg_first_${ii}.png
		composite -gravity north  -geometry +0+160 -compose over $s $bg $o.back
		composite -gravity north  -geometry +0+0 -compose over $br $o.back $o
		rm $o.back

		export NVM_DIR="$HOME/.nvm"
		[ -s "$path_nvm_sh" ] && \. "$path_nvm_sh"
		nvm use 17
		nvm i squoosh-cli
		squoosh-cli --webp '{"quality":100}' -d $dir --resize '{width:400,height:524}' $o

	done

	convert -layers optimize -loop 0 -delay 40 $dir/null_*.webp $gif
	rm -f $dir/null_*

done
