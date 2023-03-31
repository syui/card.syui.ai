<template>
	<div id="app">
		<form @submit.prevent="submit">
			<input v-model="id" placeholder="id" value="id">
			<input type="submit">
		</form> 

		<div v-if="cards" class="bluesky-card">
			<h3>{{ user.data.username }} card list</h3>
			<span  v-for="ii in cards.data">
				<img :src='"https://at.syui.ai/card/card_" + ii.card + ".png"'/>{{ ii.cp }}
			</span>
		</div>

	<div v-if="record" class="bluesky-record">
		<li v-for="i in record.data">
			<p><span class="text">id : {{ i.id }}</span></p>
			<p><span class="text">{{ i.username }}</span></p>
		</li>
	</div>

	</div>
</template>

<script>
import axios from 'axios'
let default_id = "syui.syui.ai";
export default {
	name: "App",
	metaInfo: {
		title: "syui.ai",
	},
	data () {
		return {
			card: null,
			cards: null,
			id: null,
			record: null,
			url: null,
			user: null,
		}
	},
	mounted() {
		axios.get("https://cors-card.herokuapp.com/https://api.syui.ai/users",{ crossdomain: true })
			.then(response => (this.record = response))
			.catch(error => console.log(error));
	},
	methods: {
		submit() {
			let url = "https://cors-card.herokuapp.com/https://api.syui.ai/users/" + this.id + "/card";
			axios
				.get(url,{ crossdomain: true })
				.then(response => (this.cards = response));
				axios
					.get("https://cors-card.herokuapp.com/https://api.syui.ai/users/" + this.id,{ crossdomain: true })
					.then(response => (this.user = response));
		},
		draw(id) {
			let url = "https://cors-card.herokuapp.com/https://api.syui.ai/users/" + id + "/card";
			axios
				.get(url,{ crossdomain: true })
				.then(response => (this.cards = response));
		}
	},
}
</script>

<style>
div#app {
	list-style: none;
	margin: 100px;
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
.bluesky-record li {
	border-bottom: solid 1px #ccc;
}
.bluesky-record p {
	padding:0 20px 0;
}
.bluesky-record {
	border: solid 1px #ccc;
	border-radius: 10px;
	margin: 50px 100px 0 0;
}
a {
	color: #00A4E1;
	font-weight: '700';
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
	width: 50px;
	margin:10px;
}

code {
	font-size: 15px;
	/*color: #3f89ff;*/
	padding: 5px 5px 5px 5px;
	background-color: #d4deee2b;
}
li {
	list-style-type: none; 
}
@media screen and (max-width:1000px) { 
	div#app{list-style:none;margin:0px}.bluesky-avatar img{width:55px}span.time{color:#00f}span.name{background-color:rgba(163,195,255,.10196078431372549);padding:10px}.bluesky-record li{border-bottom:1px solid #ccc}.bluesky-record p{padding:0 20px 0}.bluesky-record{border:1px solid #ccc;border-radius:10px;margin:0px 0px 0 0}a{color:#3f89ff}footer#footer{text-align:center}
	span.text {
		word-break: break-all;
	}
}
</style>
