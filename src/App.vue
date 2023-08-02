<template>
	<div id="app">
		<link rel="stylesheet" href="https://syui.ai/bower_components/icomoon/css/icomoon.css" />
		<div class="menu">
			<a class="menu-link" href="/"><span class="icon-ai"></span></a> <a class="menu-link" href="/docs">docs</a> <a class="menu-link" href="/en">en</a> <a class="menu-link" href="/te">ten</a> <a class="menu-link" href="/pr">fav</a>
			<span class="menu-right-top">
				<a class="menu-link" href="https://yui.syui.ai"><span class="icon-ai"></span></a>
			</span>
			</div>
			<p v-if="loc === 'te'"><code><a href="https://bsky.app/profile/yui.syui.ai" target="_blank">@yui.syui.ai</a> /ten</code></p>
			<p v-else-if="loc === 'pr'"><code><a href="https://bsky.app/profile/yui.syui.ai" target="_blank">@yui.syui.ai</a> /fav 1234567</code></p>
			<p v-else="loc !== 'te'"><code><a href="https://bsky.app/profile/yui.syui.ai" target="_blank">@yui.syui.ai</a> /card</code></p>
			<div v-if="loc.length > 1">
			<div v-if="cards" class="bluesky-card">
				<h3>
					<span v-if="bsky_mode === true"><a :href='"https://bsky.app/profile/" + did' target="_blank">{{ loc }}</a></span>
					<span v-else>{{ loc }}</span>
					<span v-for="iii in rcards.data" class="card-owner-badge">
						<a :href="'/owner#' + iii.id" v-if="iii.owner == loc" target="_blank"><span class="icon-ai"></span></a>
					</span>
					<span v-for="iii in rcards.data">
						<span v-for="iiii in iii.owner" class="card-bluesky-badge">
							<a :href="'/owner#' + iiii.user" v-if="iiii.user == loc" target="_blank">
								<span class="icon-ai"></span>
							</a>
						</span>
					</span>
					<span v-if="this.all === true" class="card-all-badge">
						<span class="icon-ai"></span>
					</span>
				</h3>

				<span class="menu-right-top" v-if="cards.data.find((v) => v.card == 43)">
					<button v-on:click="book_user = !book_user">book</button>
				</span>
				<span class="menu-right-top" v-if="cards.data.find((v) => v.card >= 48 && v.card <= 59)">
					<button v-on:click="chara_user = !chara_user">chara</button>
				</span>
				<div class="book-list" v-if="cards.data.find((v) => v.card == 43)" v-show="book_user">
					<a href="/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html">
						<img :src='"/card/card_" + 43 + ".webp"'>
					</a>
				</div>

				<div class="book-list" v-if="cards.data.filter((v) => v.card >= 48 && v.card <= 59)" v-show="chara_user">
					<span v-for="ii in cards.data.filter((v) => v.card >= 48 && v.card <= 59)" class="book-list">
						<a :href="ii.url">
							<img :src='"/card/card_" + ii.card + ".webp"'>
						</a>
					</span>
				</div>

				<div class="card-fav" v-if="user_fav != '0'"><span class="menu-right-top"><button>✧</button></span>
					<table class="card-fav">
						<span class="card-fav-su">
							{{ ii = cards.data.find((v) => v.id == user_fav) }}
						</span>

						<thead v-if="ii.status == 'first' && ii.card !== null" class="card-fav">
							<tr class="card-status-first">
								<span class="card-wrapper">
									<span class="reflection">
										<img :src='"/card/card_" + ii.card + ".webp"' class="card">
									</span>
									<span class="card pattern"></span>
									<span class="card color"></span>
									<span class="card highlight"></span>
								</span>
							</tr>
						</thead>

						<thead v-else-if="ii.status == 'second' && ii.card !== null" class="card-fav">
							<tr class="card-status-first">
								<span class="card-wrapper">
									<span class="reflection">
										<img :src='"/card/card_" + ii.card + ".webp"' class="card">
									</span>
									<span class="card pattern-s"></span>
									<span class="card color-s"></span>
									<span class="card highlight-s"></span>
								</span>
							</tr>
						</thead>

						<thead v-else-if="ii.status == 'third' && ii.card !== null" class="card-fav">
							<tr class="card-status-first">
								<span class="card-wrapper">
									<span class="reflection">
										<img :src='"/card/card_" + ii.card + ".webp"' class="card">
									</span>
									<span class="card pattern-t"></span>
									<span class="card color-t"></span>
									<span class="card highlight-t"></span>
								</span>
							</tr>
						</thead>

						<thead v-else-if="ii.status == 'yui' && ii.card !== null" class="card-fav">
							<tr class="card-status-first">
								<span class="card-wrapper">
									<span class="reflection">
										<img :src='"/card/card_" + ii.card + ".webp"' class="card">
									</span>
									<span class="card pattern-yui"></span>
									<span class="card color-yui"></span>
									<span class="card highlight-yui"></span>
								</span>
							</tr>
						</thead>

						<thead v-else-if="ii.status == 'fourth' && ii.card !== null" class="card-fav">
							<tr class="card-status-first">
								<span class="card-wrapper">
									<span class="reflection">
										<img :src='"/card/card_" + ii.card + ".webp"' class="card">
									</span>
									<span class="card pattern-f"></span>
									<span class="card color-f"></span>
									<span class="card highlight-f"></span>
								</span>
							</tr>
						</thead>

						<thead v-else-if="ii.card !== null" class="card-fav"><tr>
								<img :src='"/card/card_" + ii.card + ".webp"'>
							</tr>
						</thead>
						<tbody><tr><span v-if="ii.skill == 'critical'" class="icon-sandar"></span><span v-if="ii.skill == 'post'" class="icon-moon"></span><span v-if="ii.skill == 'luck'" class="icon-api"></span><span v-if="ii.skill == 'ten'" class="icon-power"></span><span v-if="ii.skill == 'lost'">●</span><span v-if="ii.skill == 'dragon'" class="icon-home"></span><span v-if="ii.skill == 'nyan'">▲</span><span v-if="ii.skill == 'yui'" class="icon-ai"></span> {{ ii.cp }}</tr></tbody>
						<tbody><tr class="card-fav-status">✧ {{ ii.status }}</tr></tbody>
						<tbody v-if="info == true"><tr>ID {{ ii.card }}</tr></tbody>
						<tbody v-if="fav == true"><tr>CID {{ ii.id }}</tr></tbody>
					</table>
				</div>

				<div class="card-button">
					<button v-on:click="cardtime">new</button> <button v-on:click="sort">cp</button> <button v-on:click="sortcard">card</button> <button v-on:click="cardinfo">id</button> <button v-on:click="cardstatus">status</button> <button v-on:click="cardpremium">premium</button> <button v-on:click="cardfav">fav</button>
				</div>
				<span class="menu-right"><code><strong>ID</strong> {{ id }}</code> <code><span class="icon-power"></span> {{ aiten }}</code></span>
			<table>
				<span v-for="(ii, index) in cards.data">
					<span v-if="ii.status == 'normal' && ii.card !== null">
						<thead v-if="ii.card == 43"><td><a href="/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"><img :src='"/card/card_" + ii.card + ".webp"'></a></td></thead>
						<thead v-else><td><img :src='"/card/card_" + ii.card + ".webp"'></td></thead>
						<tbody><tr><span v-if="ii.skill == 'critical'" class="icon-sandar"></span><span v-if="ii.skill == 'post'" class="icon-moon"></span><span v-if="ii.skill == 'luck'" class="icon-api"></span><span v-if="ii.skill == 'ten'" class="icon-power"></span><span v-if="ii.skill == 'dragon'" class="icon-home"></span><span v-if="ii.skill == 'nyan'">▲</span><span v-if="ii.skill == 'yui'" class="icon-ai"></span> {{ ii.cp }}</tr></tbody>
						<tbody v-if="info == true"><tr>ID {{ ii.card }}</tr></tbody>
						<tbody v-if="fav == true"><tr>CID {{ ii.id }}</tr></tbody>
						<tbody v-if="card_status == true"><tr>✧ {{ ii.status }}</tr></tbody>
					</span>
					<span v-else-if="ii.card !== null">
						<thead><td>
								<span class="reflection" v-if="ii.card == 43">
									<a href="/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"><img :src='"/card/card_" + ii.card + ".webp"'></a>
								</span>
								<span class="reflection" v-else>
									<img :src='"/card/card_" + ii.card + ".webp"'>
								</span>
							</td>
						</thead>
						<tbody><tr><span v-if="ii.skill == 'critical'" class="icon-sandar"></span><span v-if="ii.skill == 'post'" class="icon-moon"></span><span v-if="ii.skill == 'luck'" class="icon-api"></span><span v-if="ii.skill == 'ten'" class="icon-power"></span><span v-if="ii.skill == 'dragon'" class="icon-home"></span><span v-if="ii.skill == 'nyan'">▲</span><span v-if="ii.skill == 'yui'" class="icon-ai"></span> {{ ii.cp }}</tr></tbody>
						<tbody v-if="info == true"><tr>ID {{ ii.card }}</tr></tbody>
						<tbody v-if="fav == true"><tr>CID {{ ii.id }}</tr></tbody>
						<tbody v-if="card_status == true"><tr>✧ {{ ii.status }}</tr></tbody>
					</span>
				</span>
			</table>
		</div>
	</div>

		<div v-if="loc.length == 0">

			<form @submit.prevent="page">
				<input v-model="userid" placeholder="user" value="userid">
				<input type="submit">
			</form> 

			<form @submit.prevent="submit">
				<input v-model="id" placeholder="id" value="id">
				<input type="submit">
			</form> 

			<div v-if="cards" class="bluesky-card">
				<p>user : <a :href='"/" + user.data.username'><code>{{ user.data.username }}</code></a></p>
				<p>id : <code>{{ user.data.id }}</code></p>
				<p>did : <code>{{ user.data.did }}</code></p>
				<p>aiten : <code>{{ user.data.aiten }}</code></p>
				<p>handle : <code>{{ user.data.handle }}</code></p>
				<p v-if="user.data.delete == true">status : <code>delete</code></p>
				<p>created_at : <code>{{ user.data.created_at }}</code></p>
				<span v-for="ii in cards.data">
						<img :src='"/card/card_" + ii.card + ".webp"'>{{ ii.cp }}
				</span>
			</div>

			<div v-if="ucard" class="bluesky-card">
				<h3><a :href='"/" + userid'>{{ userid }}</a></h3>
				<span v-for="u in ucard.data">
						<img :src='"/card/card_" + u.card + ".webp"'>{{ u.cp }}
				</span>
			</div>

			<div v-if="record" class="bluesky-record">
				<li v-for="i in record.data">
					<p v-if="i.delete === false"><span class="menu-right-top"><button v-if="i.fav != '0'">✧</button> <button>ID {{ i.id }}</button></span></p>
					<p v-if="i.delete === false"><span class="text"><a :href="'/' + i.username">{{ i.username }}</a></span></p>
				</li>
			</div>
		</div>

		<div v-if="loc === 'docs'">
			<p>カードは1日に1回、引くことができます</p>
			<p>カードの排出率は以下のとおりです</p>

			<table>
				<thead>
					<tr>
						<th>status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>normal</td>
						<td>rare</td>
						<td>super</td>
					</tr>
					<tr>
						<td>90%</td>
						<td>9%</td>
						<td>1%</td>
					</tr>
				</tbody>
			</table>

			<p>カードには強さを表す数字が入っています</p>

			<table>
				<thead>
					<tr>
						<th>cp</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>normal</td>
						<td>rare</td>
						<td>super</td>
					</tr>
					<tr>
						<td>+0~200</td>
						<td>+0~450</td>
						<td>+0~800</td>
					</tr>
				</tbody>
				</table>

				<h3>対戦について</h3>
				<p><code>@yui.syui.ai /card -b</code></p>
				<p>ランダムマッチ、手持ちの上位3枚のうち1枚がランダムで選ばれます</p>

				<h3>レイドについて</h3>
				<p><code>@yui.syui.ai /card -r</code></p>
				<p>レイドバトル、手持ちで一番強いカードが選ばれます</p>

				<h3>mastodon</h3>
				<p><code><a href="https://mstdn.syui.ai/@yui" target="_blank">@yui@syui.ai</a> /card</code></p>
				<p>mastodonからもカードを引くことができます</p>
				<p>ユーザー名が同じの場合、カードは共通です</p>
				<h3>activitypub mode</h3>
				<p><code>@yui.syui.ai /card ap=false</code></p>
				<p>bsky.socialからactivitypub modeを<code>true</code>/<code>false</code>に切り替える</p>

				<h3>秘密</h3>
				<p><code>レアカード</code>を3枚集めると、いいことがあるかも</p>
				<p>集めた人は<a href="https://bsky.app/profile/syui.ai">@syui</a>まで連絡してみて</p>
				<p>ただし、リアルカードに変わるのは、こちらの<a href="/owner">所有者</a>がいないカードに限られます</p>
				<h3>link</h3>
				<p><a class="menu-link" href="/fa">fanart</a> <a class="menu-link" href="/ph">photo</a> <a class="menu-link" href="/te">aiten</a></p>

			</div>

		<div v-if="loc === 'en'">
			<p>Cards can be drawn once a day</p>
			<p>Card emission rates are as follows</p>

			<table>
				<thead>
					<tr>
						<th>status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>normal</td>
						<td>rare</td>
						<td>super</td>
					</tr>
					<tr>
						<td>90%</td>
						<td>9%</td>
						<td>1%</td>
					</tr>
				</tbody>
			</table>

			<p>The cards have numbers(cp) on them indicating their strength.</p>

			<table>
				<thead>
					<tr>
						<th>cp</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>normal</td>
						<td>rare</td>
						<td>super</td>
					</tr>
					<tr>
						<td>+0~200</td>
						<td>+0~450</td>
						<td>+0~800</td>
					</tr>
				</tbody>
				</table>

				<h3>battle</h3>
				<p><code>@yui.syui.ai /card -b</code></p>
				<p>Random match, one of the top 3 cards on hand will be chosen at random</p>

				<h3>mastodon</h3>
				<p><code><a href="https://mstdn.syui.ai/@yui" target="_blank">@yui@syui.ai</a> /card</code></p>
				<p>support mastodon</p>
				<h3>activitypub</h3>
				<p><code>@yui.syui.ai /card ap=false</code></p>
				<p>activitypub mode disable</p>

				<h3>secret</h3>
				<p>card <a href="/owner">owner</a></p>

				<h3>link</h3>
				<p><a class="menu-link" href="/fa">fanart</a> <a class="menu-link" href="/ph">photo</a> <a class="menu-link" href="/te">aiten</a></p>

			</div>

			<div v-if="loc === 'owner'">
				<div v-for="(ii, index) in rcards.data">
					<div v-show="ii.id !== 0">
						<div v-show="ii.id < 15" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 22" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<span v-if='ii.owner == "none"' class="card-black">
								<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<span v-else class="card-black">
								<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 25" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 26" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 27" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<span v-if='ii.owner == "none"' class="card-black">
								<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<span v-else class="card-black">
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 29" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<span v-if='ii.owner == "none"' class="card-black">
								<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<span v-else class="card-black">
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 33" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<span v-if='ii.owner == "none"' class="card-black">
								<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<span v-else class="card-black">
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 36" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<span v-if='ii.owner == "none"' class="card-black">
								<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<span v-else class="card-black">
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							</span>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 39" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							<p v-if="ii.owner">owner :<span v-for="(iii, index) in ii.owner"> <a :href="'/' + iii.user">{{ iii.user }}</a>, </span></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 40" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							<p v-if="ii.owner">owner :<span v-for="(iii, index) in ii.owner"> <a :href="'/' + iii.user">{{ iii.user }}</a>, </span></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 41" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
						<div v-show="ii.id == 44" class="card-owner-one">
							<button :id="ii.id">card : {{ ii.h }}</button>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
							<p v-if="ii.owner">owner : <a :href="'/' + ii.owner">{{ ii.owner }}</a></p>
							<p v-if="ii.owner === null">owner : <code>none</code></p>
						</div>
					</div>
				</div>
			</div>

			<div v-if="loc === 'te'">
				<div class="iten-start">
					<h3><span class="icon-power"></span> AITEN</h3>
				</div>
				<div v-for="(ii, index) in rcards.data">
					<div v-show="ii.id !== 0">
						<div v-show="ii.id < 15" class="card-owner-one">
							<p :id="ii.id"><button>id:{{ ii.id }}</button></p>
							<p :id="ii.id">[{{ ii.ten }}] {{ ii.h }} / {{ ii.id }}00</p>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
						</div>
						<div v-show="ii.id == 29 || ii.id == 33 || ii.id == 36" class="card-owner-one">
							<p :id="ii.id"><button>id:{{ ii.id }}</button></p>
							<p :id="ii.id">[{{ ii.ten }}] {{ ii.h }} / {{ ii.id }}00 <span class="icon-power"></span></p>
							<p><img :src='"/card/card_" + ii.id + ".webp"'></p>
						</div>
					</div>
				</div>
			</div>

			<div v-if="loc === 'te'">
				<div class="iten-start">
					<p><code>/ten h</code> : ヘルプ</p>
					<p><code>/ten start</code> : 7ターンまでに文字をそろえる</p>
					<p><span class="icon-power"></span> はカードを持ってる人しか出せない</p>
					<blockquote>ACEHIKMOSTUWYZ</blockquote>
				</div>
			</div>

			<div v-if="loc === 'fa'">
				<p><code>/fa &lt;share-url&gt; &lt;img-url&gt;</code></p>
				<span v-for="(iii, index) in fanarts.data"  class="fan-body">
					<div class="viewer" v-if="iii.delete !== true">
						<p><a :href="iii.link"><img :src="iii.img"/></a></p>
					<p>author : <a :href="'https://bsky.app/profile/' + iii.author">{{ iii.author }}</a></p>
				</div>
			</span>
		</div>

			<div v-if="loc === 'ph'">
				<p><code>/ph &lt;share-url&gt; &lt;img-url&gt;</code></p>
				<span v-for="(iii, index) in photos.data" class="fan-body">
					<div class="viewer" v-if="iii.delete !== true">
						<p><a :href="iii.link"><img :src="iii.img"/></a></p>
					<p>author : <a :href="'https://bsky.app/profile/' + iii.author">{{ iii.author }}</a></p>
				</div>
			</span>
		</div>

		<div v-if="loc === 'pr'">
			<p>お気に入りのカードを1枚だけ登録できます</p>
			<p>数字はカード一覧の <button>fav</button> で確認します。</p>
			<p><img src="/img/docs_fav.jpg"></p>
			<p>もとに戻すときは <code>0</code> を指定します。</p>
			<h3>/fav b</h3>
			<p><code>/fav b</code>でバトルできます。</p>
			<p>1日のバトルポイントを消費します。</p>
		</div>

		<footer>
			© syui
		</footer>
	</div>
</template>

<script>
const CARD = document.querySelector('.card-wrapper')

const UPDATE = ({ x, y }) => {
  const BOUNDS = CARD.getBoundingClientRect()
  const posX = x - BOUNDS.x
  const posY = y - BOUNDS.y
  const ratioX = posX / BOUNDS.width
  const ratioY = posY / BOUNDS.height
  CARD.style.setProperty('--ratio-x', ratioX)
  CARD.style.setProperty('--ratio-y', ratioY)
}

import axios from 'axios'
var loc = window.location.pathname.split('/').slice(-1)[0];

export default {
	name: "App",
	metaInfo: {
		title: "card.syui.ai",
		titleTemplate: '%s | ' + loc,
		meta: [
			{property: 'og:title', content: '%s | ' + loc}
		]
	},
	data () {
		return {
			host: window.location.host,
			all: null,
			card: null,
			cards: null,
			loc: window.location.pathname.split('/').slice(-1)[0],
			id: null,
			record: null,
			url: null,
			user: null,
			userid: null,
			ucard: null,
			status: null,
			premium: false,
			premium_text: null,
			rcards: null,
			fanarts: null,
			photos: null,
			info: false,
			time: null,
			aiten: null,
			fav: null,
			card_fav: null,
			user_fav: null,
			book_user: null,
			chara_user: null,
			card_status: null,
			cors: "https://cors.syui.ai/",
			heroku: "https://cors-card.herokuapp.com/",
			api_url: null,
			bsky_mode: false,
			did: null,
		}
	},
	mounted() {
		if (window.location.host === "localhost:8080") {
			this.api_url = "/api/";
		} else {
			this.api_url = "https://api.syui.ai/";
		}
		if (loc === 'owner' || loc === 'te'){
			axios
				.get("/json/card.json")
				.then(response => (this.rcards = response));
				if (loc.length > 1){
					axios
						.get(url,{ crossdomain: true })
						.then(response => (this.cards = response));
				
				}
		} else if (loc === 'fa'){
			axios
				.get("/json/fanart.json")
				.then(response => (this.fanarts = response));
		} else if (loc === 'ph'){
			axios
				.get("/json/photo.json")
				.then(response => (this.photos = response));
		} else {
			let url = this.api_url + "users?itemsPerPage=3000";
			axios.get(url,{ crossdomain: true })
				.then(response => { 
				this.record = response;
				this.id = this.record.data.find((v) => v.username == loc).id;
				this.did = this.record.data.find((v) => v.username == loc).did;
				this.aiten = this.record.data.find((v) => v.username == loc).aiten;
				this.bsky_mode = this.record.data.find((v) => v.username == loc).bsky;
				this.user_fav = this.record.data.find((v) => v.username == loc).fav;
				let url = this.api_url + "users/" + this.id + "/card?itemsPerPage=3000";
				axios
					.get("/json/card.json")
					.then(response => (this.rcards = response));
					if (loc.length > 1){
						axios
							.get(url,{ crossdomain: true })
							.then(response => { this.cards = response
													for (let i = 1; i <= 14; i++) {
														this.all = this.cards.data.some(
															b => b.card === i,
															);
															if (this.all === false) {
																break;
															}
													}
							});
					}
			})
			.catch(error => console.log(error));
		}},
		methods: {
			submit() {
				let url = this.api_url + "users/" + this.id + "/card?itemsPerPage=3000";
				axios
					.get(url,{ crossdomain: true })
					.then(response => (this.cards = response));
					axios
						.get(this.api_url + "users/" + this.id,{ crossdomain: true })
						.then(response => (this.user = response));

			},
			page() {
				this.id = this.record.data.find((v) => v.username == this.userid).id;
				let url = this.api_url + "users/" + this.id + "/card?itemsPerPage=2000";
				axios
					.get(url,{ crossdomain: true })
					.then(response => (this.ucard = response));
					//window.location.href = '/' + this.user;
			},
			sort(){
				if (this.premium) {
					this.premium = false;
					let url = this.api_url + "users/" + this.id + "/card?itemsPerPage=2000";
					axios
						.get(url,{ crossdomain: true })
						.then(response => (this.cards = response));
				}
				return this.cards.data.sort((a, b) => {
					return b.cp - a.cp;
				});
			},
			sortcard(){
				if (this.premium) {
					this.premium = false;
					let url = this.api_url + "users/" + this.id + "/card?itemsPerPage=2000";
					axios
						.get(url,{ crossdomain: true })
						.then(response => (this.cards = response));
				}
				return this.cards.data.sort((a, b) => {
					return b.card - a.card;
				});
			},
			cardinfo(){
				this.cards = {};
				let url = this.api_url + "users/" + this.id + "/card?itemsPerPage=2000";
				axios
					.get(url,{ crossdomain: true })
					.then(response => (this.cards = response));
					this.fav = false;
					this.info = true;
					this.card_status = false;
			},
			cardtime(){
					this.cards.data = this.cards.data.slice().reverse();
					this.time = true;
			},
			cardfav(){
				this.info = false;
				this.fav = true;
				this.card_status = false;
			},
			cardstatus(){
				this.cards = {};
				let url = this.api_url + "users/" + this.id + "/card?itemsPerPage=2000";
				axios
					.get(url,{ crossdomain: true })
					.then(response => (this.cards = response));
					this.info = false;
					this.fav = false;
					this.card_status = true;
			},
			cardurl(){
				return this.cards.data.sort((a,b) => {
					this.premium = true;
					if (a.url !== "https://card.syui.ai") {
						this.cards.data = this.cards.data.slice().reverse();
					} else {
						a.url = null;
						a.card = null;
					}
				});
			},
			cardpremium(){
				return this.cards.data.sort((a,b) => {
					this.premium = true;
					if (a.card === 15) {
						a.url = "[unavailable] card == 15";
					} else if (a.card === 16) {
						a.url = "[unavailable] card == 16";
					} else if (a.card === 17) {
						a.url = "[unavailable] card == 17";
					} else if (a.card === 18) {
						a.url = "[unavailable] card == 18";
					} else if (a.card === 19) {
						a.url = "[unavailable] card == 19";
					} else if (a.card === 22) {
						a.url = "[unavailable] card == 22";
					} else if (a.card === 23) {
						a.url = "[unavailable] card == 23";
					} else if (a.card === 24) {
						a.url = "[unavailable] card == 24";
					} else if (a.card === 26) {
						a.url = "[unavailable] card == 26";
					} else if (a.card === 27) {
						a.url = "[unavailable] card == 27";
					} else if (a.card === 28) {
						a.url = "[unavailable] card == 28";
					} else if (a.card === 32) {
						a.url = "[unavailable] card == 32";
					} else if (a.card === 36) {
						a.url = "[unavailable] card == 36";
					} else if (a.card >= 1 && a.cp < 50 ) {
						a.url = "[unavailable] rare cp < 50";
						return b.card - a.card;
					} else if (b.card === 0 && b.cp > 350) {
						a.url = "[unavailable] normal cp > 350";
						return b.card - a.card;
					} else if (a.cp === 0) {
						a.url = "[unavailable] cp == 0";
						return b.card - a.card;
					} else if (a.card === 0 && a.status === "super") {
						a.url = "[unavailable] normal == super";
						return b.card - a.card;
					} else {
						a.url = null;
						a.card = null;
						return
					}
				});
			}
		}
}
</script>

<style>
body{
	background-color: #f1f1f1;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 18px;
}

a {
	color: #847e00;
	text-decoration: none;
}

a:hover {
	color: #008CCF;
}

.menu {
	margin: 50px 0px;
}

a.menu-link {
	background-color:#fff;
	padding: 10px;
}

div#app {
	list-style: none;
	margin: 50px 100px;
}
.bluesky-avatar img {
	width: 55px;
}
span.time {
	color: blue;
}
span.name {
	font-weight: 700;
	background-color: #a3c3ff1a;
	padding:10px;
}
span.text {
	font-weight: 400;
	font-size: 19px;
}

.bluesky-record p {
	padding:0 20px 0;
}
.bluesky-record {
	border-radius: 10px;
	margin: 50px 0px 0 0;
}

footer#footer {
	text-align: center;
}
span.text {
	word-break: break-all;
}
p.tl-avatar img {
	width: 20px;
}

img {
	width: 200px;
	border-radius: 7px;
}

code {
	font-size: 15px;
	padding: 10px 15px;
	background-color: #fff;
}
li {
	list-style-type: none; 
	background-color: #fff;
	padding:10px;
	margin:10px 0px;
}

footer {
	margin : 100px;
	text-align: center;
}

span.card-owner-badge a {
	color: #abae00;
	padding:0 5px;
}
span.card-bluesky-badge a {
	color: #0db2ff;
	padding:0 5px;
}
span.card-all-badge {
	color: #ff7c00;
	padding:0 5px;
}

blockquote {
	background-color: #abae00;
	margin: 0px;
	padding: 20px 50px;
	text-align: center;
	color: #fff;
}

.menu span.icon-ai {
	color: #fff300;
	font-size: 23px;
	padding: 10px;
}
.card-owner-one {
	background-color: #fff;
	padding: 2px 15px;
	margin-bottom: 15px;
}

.menu-right-top {
	float: right;
	padding:0px 0px 0px 5px;
}

span.menu-right-top a.menu-link span.icon-ai {
	color: #ccc;
}

thead.card-fav {
	background-color: #fff;
}
tbody {
	padding: 10px;
	background-color: #fff;
}

table {
	margin-bottom: 2em;
	margin-top: 2em;
	width: 100%;
	border-spacing: 15px;
	text-align: center;
}

table.card-fav {
	border-spacing: 2px;
}

tr {
	line-height:40px;
}

button {
	padding:3px 10px;
	border-radius: 2px;
	border: solid 1px #847e00;
	background-color: #847e00;
	color: #fff;
}
button:hover {
	border: solid 1px #f1f1f1;
}
.card-button {
	float: right;
}

.bluesky-card h3 {
	margin-top: 60px;
}

span.card-fav-su {
	display:none;
}

span.pattern-s {
  background: repeating-radial-gradient(circle at -150% -25%, #000, #777 3px, #000 3px);
  background-position: 50% 50%;
  background-size: 120% 120%;
  mix-blend-mode: color-dodge;
  opacity: 0.3;
}

span.color-s {
  background: linear-gradient(115deg, transparent 20%, #000 30%, transparent 48% 52%, #000 70%, transparent);
  background-position: 50% 50%;
  background-size: 200% 200%;
  mix-blend-mode: overlay;
}

span.card-wrapper:hover > span.pattern-s {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.color-s {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.highlight-s {
  background-repeat: no-repeat;
}

span.pattern-t {
  background: repeating-radial-gradient(circle at -150% -25%, #c71585, #777 3px, #ffff00 3px);
  background-position: 50% 50%;
  background-size: 120% 120%;
  mix-blend-mode: color-dodge;
  opacity: 0.3;
}

span.color-t {
  background: linear-gradient(115deg, transparent 20%, #c71585 30%, transparent 48% 52%, #c71585 70%, transparent);
  background-position: 50% 50%;
  background-size: 200% 200%;
  mix-blend-mode: overlay;
}

span.card-wrapper:hover > span.pattern-t {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.color-t {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.highlight-t {
  background-repeat: no-repeat;
}

span.pattern-yui {
  background: repeating-radial-gradient(circle at -150% -25%, #ffff00, #000 3px, #ffff00 3px);
  background-position: 50% 50%;
  background-size: 120% 120%;
  mix-blend-mode: color-dodge;
  opacity: 0.3;
}

span.color-yui {
  background: linear-gradient(115deg, transparent 20%, #ffff00 30%, transparent 48% 52%, #ffff00 70%, transparent);
  background-position: 50% 50%;
  background-size: 200% 200%;
  mix-blend-mode: overlay;
}

span.card-wrapper:hover > span.pattern-yui {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.color-yui {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.highlight-yui {
  background-repeat: no-repeat;
}

span.pattern-f {
  background: repeating-radial-gradient(circle at -150% -25%, #000, #32cd32 3px, #1e90ff 3px);
  background-position: 50% 50%;
  background-size: 120% 120%;
  mix-blend-mode: color-dodge;
  opacity: 0.3;
}

span.color-f {
  background: linear-gradient(115deg, transparent 20%, #00ffff 30%, transparent 48% 52%, #40e0d0 70%, transparent);
  background-position: 50% 50%;
  background-size: 200% 200%;
  mix-blend-mode: overlay;
}

span.card-wrapper:hover > span.pattern-f {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.color-f {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.highlight-yui {
  background-repeat: no-repeat;
}

span.pattern {
  background: repeating-radial-gradient(circle at -150% -25%, #fff, #777 3px, #fff 3px);
  background-position: 50% 50%;
  background-size: 120% 120%;
  mix-blend-mode: color-dodge;
  opacity: 0.3;
}

span.color {
  background: linear-gradient(115deg, transparent 20%, #40A4BF 30%, transparent 48% 52%, #404FBF 70%, transparent);
  background-position: 50% 50%;
  background-size: 200% 200%;
  mix-blend-mode: overlay;
}

span.card-wrapper:hover > span.pattern {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.color {
  background-position: calc(50% + (var(--ratio-x) * -50%)) calc(50% + (var(--ratio-y) * -50%));
}

span.card-wrapper:hover > span.highlight {
  background: radial-gradient(circle at calc(var(--ratio-x) * 100%) calc(var(--ratio-y) * 100%), hsl(0 0% 100% / 0.2), transparent 50%);
  background-repeat: no-repeat;
}

img.card {
	transform: translateY(6px);
}

span.card {
	aspect-ratio: 5/7;
	border-radius: 7px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, .2);
	position: absolute;
	width: 100%;
	height: 96%;
}

span.card-wrapper {
  display: grid;
  place-items: center;
  position: absolute;
}

tr.card-status-first {
	place-items: center;
	position:  relative;
	display: grid;
	margin: 0;
	position: relative;
	height: calc(45vh);
}

span.reflection{
	display: block;
	position:relative;
	overflow:hidden;
}

span.reflection:after {
	content:"";
	height:100%;
	width:30px;
	position:absolute;
	top:-180px;
	left:0;
	background-color: #ffffffa8;
	opacity:0;
	-webkit-transform: rotate(45deg);
	-webkit-animation: reflection 4s ease-in-out infinite;
}

@keyframes reflection {
	0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0; }
	80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5; }
	81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1; }
	100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0; }
}

.viewer {
    background-color: #fff;
    margin: 10px 0px;
    padding: 20px;
}

span.card-black p {
	width: fit-content;
	background: #000;
}

span.card-black p img {
	opacity: 0.7;
}

.book-list {
	background-color:#fff;
	margin-bottom: 30px;
	padding:10px 50px 10px 50px;
}

.book-list a img {
	width:150px;
}

thead.card-fav tr img {
    border-radius: 30px;
    padding: 20px;
}

span.book-list {
	padding:10px;
}

@media screen and (max-width:1000px) { 
	.card-button {
		float: none;
		margin-bottom: 20px;
	}
	div#app{list-style:none;margin:0px}
	.bluesky-avatar img{width:55px}
	span.time{color:#00f}
	span.name{background-color:rgba(163,195,255,.10196078431372549);padding:10px}
	.bluesky-record li{}
	.bluesky-record p{padding:0 20px 0}
	.bluesky-record{border-radius:10px;margin:0px 0px 0 0}
	footer#footer{text-align:center}
	span.text {
		word-break: break-all;
	}
	code {
		font-size: 15px;
		padding: 10px 15px;
		background-color: #fff;
	}
	.book-list {
		text-align: center;
	}
}

</style>
