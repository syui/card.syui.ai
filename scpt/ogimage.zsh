#!/bin/zsh

url=https://card.syui.ai
d=${0:a:h}
dd=${0:a:h:h}
dir=$dd/public/card
o_dir=$dd/static/img
static=$dd/static/img
json=$dd/public/json/card.json
mkdir -p $dir
mkdir -p $static
n=`cat $json|jq "length"`
n=`expr $n - 1`
n=78

for ((i=0;i<=$n;i++))
do
	p=`cat $json|jq -r ".[$i].p"`
	h=`cat $json|jq -r ".[$i].h"`
	sid=`cat $json|jq -r ".[$i].src"`
	s=$static/${sid}.png
	id=`cat $json|jq -r ".[$i].id"`
	o=$dir/card_$id.png
	oo=$o_dir/og_${id}.png
	o_url=$url/card/og_${id}.png
	index=$o_dir/$id/index.html

	if [ ! -f $oo ];then
		convert $o -gravity center -extent 8000x4000 $oo
	fi

	mkdir -p $o_dir/$id

echo '
<!DOCTYPE html>
<html lang="en">
<head>
<title>card.syui.ai</title><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>card.syui.ai</title><link href="app.css" rel="preload" as="style"><link href="app.js" rel="preload" as="script"><link href="chunk-vendors.js" rel="preload" as="script"><link href="app.css" rel="stylesheet">
<meta name="twitter:card" content="summary">
<meta property="og:url" content="https://card.syui.ai">
' >! $index

echo "
<meta property=\"og:title\" content=\"$h\">
<meta property=\"og:description\" content=\"$p\">
<meta property=\"og:image\" content=\"$o_url\">
" >> $index

echo '
</head>
<body>
<div id="app"></div><script src="chunk-vendors.js"></script><script src="app.js"></script>
</body>
</html>
' >> $index

done
