(function(t){function a(a){for(var r,n,c=a[0],d=a[1],o=a[2],u=0,_=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&_.push(e[n][0]),e[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);l&&l(a);while(_.length)_.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],r=!0,c=1;c<s.length;c++){var d=s[c];0!==e[d]&&(r=!1)}r&&(i.splice(a--,1),t=n(n.s=s[0]))}return t}var r={},e={app:0},i=[];function n(a){if(r[a])return r[a].exports;var s=r[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=r,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)n.d(s,r,function(a){return t[a]}.bind(null,r));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var l=d;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0cc2":function(t,a,s){"use strict";s("a28b")},"56d7":function(t,a,s){"use strict";s.r(a);var r=s("2b0e"),e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://syui.ai/bower_components/icomoon/css/icomoon.css"}}),t._m(0),"te"===t.loc?a("p",[t._m(1)]):"pr"===t.loc?a("p",[t._m(2)]):a("p",[t._m(3)]),t.loc.length>1?a("div",[t.cards?a("div",{staticClass:"bluesky-card"},[a("h3",[t._v(" @"+t._s(t.loc)+" "),t._l(t.rcards.data,(function(s){return a("span",{staticClass:"card-owner-badge"},[s.owner==t.loc?a("a",{attrs:{href:"/owner#"+s.id,target:"_blank"}},[a("span",{staticClass:"icon-ai"})]):t._e()])})),!0===this.all?a("span",{staticClass:"card-all-badge"},[a("span",{staticClass:"icon-ai"})]):t._e()],2),"0"!=t.user_fav?a("div",{staticClass:"card-fav"},[t._m(4),a("table",{staticClass:"card-fav"},[a("span",{staticClass:"card-fav-su"},[t._v(" "+t._s(t.ii=t.cards.data.find(a=>a.id==t.user_fav))+" ")]),"first"==t.ii.status&&null!==t.ii.card?a("thead",{staticClass:"card-fav"},[a("tr",{staticClass:"card-status-first"},[a("span",{staticClass:"card-wrapper"},[a("span",{staticClass:"reflection"},[a("img",{staticClass:"card",attrs:{src:"/card/card_"+t.ii.card+".webp"}})]),a("span",{staticClass:"card pattern"}),a("span",{staticClass:"card color"}),a("span",{staticClass:"card highlight"})])])]):"second"==t.ii.status&&null!==t.ii.card?a("thead",{staticClass:"card-fav"},[a("tr",{staticClass:"card-status-first"},[a("span",{staticClass:"card-wrapper"},[a("span",{staticClass:"reflection"},[a("img",{staticClass:"card",attrs:{src:"/card/card_"+t.ii.card+".webp"}})]),a("span",{staticClass:"card pattern-s"}),a("span",{staticClass:"card color-s"}),a("span",{staticClass:"card highlight-s"})])])]):null!==t.ii.card?a("thead",{staticClass:"card-fav"},[a("tr",[a("img",{attrs:{src:"/card/card_"+t.ii.card+".webp"}})])]):t._e(),a("tbody",[a("tr",["critical"==t.ii.skill?a("span",{staticClass:"icon-sandar"}):t._e(),"post"==t.ii.skill?a("span",{staticClass:"icon-moon"}):t._e(),"luck"==t.ii.skill?a("span",{staticClass:"icon-api"}):t._e(),"ten"==t.ii.skill?a("span",{staticClass:"icon-power"}):t._e(),t._v(" "+t._s(t.ii.cp))])]),a("tbody",[a("tr",{staticClass:"card-fav-status"},[t._v("✧ "+t._s(t.ii.status))])]),1==t.info?a("tbody",[a("tr",[t._v("ID "+t._s(t.ii.card))])]):t._e(),1==t.fav?a("tbody",[a("tr",[t._v("CID "+t._s(t.ii.id))])]):t._e()])]):t._e(),a("div",{staticClass:"card-button"},[a("button",{on:{click:t.cardtime}},[t._v("new")]),t._v(" "),a("button",{on:{click:t.sort}},[t._v("cp")]),t._v(" "),a("button",{on:{click:t.sortcard}},[t._v("card")]),t._v(" "),a("button",{on:{click:t.cardinfo}},[t._v("id")]),t._v(" "),a("button",{on:{click:t.cardstatus}},[t._v("status")]),t._v(" "),a("button",{on:{click:t.cardpremium}},[t._v("premium")]),t._v(" "),a("button",{on:{click:t.cardfav}},[t._v("fav")])]),a("span",{staticClass:"menu-right"},[a("code",[a("strong",[t._v("ID")]),t._v(" "+t._s(t.id))]),t._v(" "),a("code",[a("span",{staticClass:"icon-power"}),t._v(" "+t._s(t.aiten))])]),a("table",t._l(t.cards.data,(function(s,r){return a("span",["normal"==s.status&&null!==s.card?a("span",[a("thead",[a("td",[a("img",{attrs:{src:"/card/card_"+s.card+".webp"}})])]),a("tbody",[a("tr",["critical"==s.skill?a("span",{staticClass:"icon-sandar"}):t._e(),"post"==s.skill?a("span",{staticClass:"icon-moon"}):t._e(),"luck"==s.skill?a("span",{staticClass:"icon-api"}):t._e(),"ten"==s.skill?a("span",{staticClass:"icon-power"}):t._e(),t._v(" "+t._s(s.cp))])]),1==t.info?a("tbody",[a("tr",[t._v("ID "+t._s(s.card))])]):t._e(),1==t.fav?a("tbody",[a("tr",[t._v("CID "+t._s(s.id))])]):t._e(),1==t.card_status?a("tbody",[a("tr",[t._v("✧ "+t._s(s.status))])]):t._e()]):null!==s.card?a("span",[a("thead",[a("td",[a("span",{staticClass:"reflection"},[a("img",{attrs:{src:"/card/card_"+s.card+".webp"}})])])]),a("tbody",[a("tr",["critical"==s.skill?a("span",{staticClass:"icon-sandar"}):t._e(),"post"==s.skill?a("span",{staticClass:"icon-moon"}):t._e(),"luck"==s.skill?a("span",{staticClass:"icon-api"}):t._e(),"ten"==s.skill?a("span",{staticClass:"icon-power"}):t._e(),t._v(" "+t._s(s.cp))])]),1==t.info?a("tbody",[a("tr",[t._v("ID "+t._s(s.card))])]):t._e(),1==t.fav?a("tbody",[a("tr",[t._v("CID "+t._s(s.id))])]):t._e(),1==t.card_status?a("tbody",[a("tr",[t._v("✧ "+t._s(s.status))])]):t._e()]):t._e()])})),0)]):t._e()]):t._e(),0==t.loc.length?a("div",[a("form",{on:{submit:function(a){return a.preventDefault(),t.page.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userid,expression:"userid"}],attrs:{placeholder:"user",value:"userid"},domProps:{value:t.userid},on:{input:function(a){a.target.composing||(t.userid=a.target.value)}}}),a("input",{attrs:{type:"submit"}})]),a("form",{on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{placeholder:"id",value:"id"},domProps:{value:t.id},on:{input:function(a){a.target.composing||(t.id=a.target.value)}}}),a("input",{attrs:{type:"submit"}})]),t.cards?a("div",{staticClass:"bluesky-card"},[a("p",[t._v("user : "),a("code",[t._v(t._s(t.user.data.username))])]),a("p",[t._v("id : "),a("code",[t._v(t._s(t.user.data.id))])]),a("p",[t._v("did : "),a("code",[t._v(t._s(t.user.data.did))])]),a("p",[t._v("aiten : "),a("code",[t._v(t._s(t.user.data.aiten))])]),a("p",[t._v("handle : "),a("code",[t._v(t._s(t.user.data.handle))])]),1==t.user.data.delete?a("p",[t._v("status : "),a("code",[t._v("delete")])]):t._e(),a("p",[t._v("created_at : "),a("code",[t._v(t._s(t.user.data.created_at))])]),t._l(t.cards.data,(function(s){return a("span",[a("img",{attrs:{src:"/card/card_"+s.card+".webp"}}),t._v(t._s(s.cp)+" ")])}))],2):t._e(),t.ucard?a("div",{staticClass:"bluesky-card"},t._l(t.ucard.data,(function(s){return a("span",[a("img",{attrs:{src:"/card/card_"+s.card+".webp"}}),t._v(t._s(s.cp)+" ")])})),0):t._e(),t.record?a("div",{staticClass:"bluesky-record"},t._l(t.record.data,(function(s){return a("li",[!1===s.delete?a("p",[a("span",{staticClass:"menu-right-top"},["0"!=s.fav?a("button",[t._v("✧")]):t._e(),t._v(" "),a("button",[t._v("ID "+t._s(s.id))])])]):t._e(),!1===s.delete?a("p",[a("span",{staticClass:"text"},[a("a",{attrs:{href:"/"+s.username}},[t._v(t._s(s.username))])])]):t._e()])})),0):t._e()]):t._e(),"docs"===t.loc?a("div",[a("p",[t._v("カードは1日に1回、引くことができます")]),a("p",[t._v("カードの排出率は以下のとおりです")]),t._m(5),a("p",[t._v("カードには強さを表す数字が入っています")]),t._m(6),a("h3",[t._v("対戦について")]),t._m(7),a("p",[t._v("ランダムマッチ、手持ちの上位3枚のうち1枚がランダムで選ばれます")]),a("h3",[t._v("レイドについて")]),t._m(8),a("p",[t._v("レイドバトル、手持ちで一番強いカードが選ばれます")]),a("h3",[t._v("秘密")]),a("p",[t._v("全14種類(1~14)のカードを集めた人には、いいことがあるかも")]),t._m(9),t._m(10),a("h3",[t._v("link")]),t._m(11)]):t._e(),"en"===t.loc?a("div",[a("p",[t._v("Cards can be drawn once a day")]),a("p",[t._v("Card emission rates are as follows")]),t._m(12),a("p",[t._v("The cards have numbers(cp) on them indicating their strength.")]),t._m(13),a("h3",[t._v("battle")]),t._m(14),a("p",[t._v("Random match, one of the top 3 cards on hand will be chosen at random")]),a("h3",[t._v("secret")]),t._m(15),a("h3",[t._v("link")]),t._m(16)]):t._e(),"owner"===t.loc?a("div",t._l(t.rcards.data,(function(s,r){return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:0!==s.id,expression:"ii.id !== 0"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:s.id<15,expression:"ii.id < 15"}],staticClass:"card-owner-one"},[s.owner?a("p",[t._v("owner : "),a("a",{attrs:{href:"/"+s.owner}},[t._v(t._s(s.owner))])]):t._e(),null===s.owner?a("p",[t._v("owner : "),a("code",[t._v("none")])]):t._e(),a("p",{attrs:{id:s.id}},[t._v("card : "+t._s(s.h))]),a("p",[a("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:22==s.id,expression:"ii.id == 22"}],staticClass:"card-owner-one"},[s.owner?a("p",[t._v("owner : "),a("a",{attrs:{href:"/"+s.owner}},[t._v(t._s(s.owner))])]):t._e(),null===s.owner?a("p",[t._v("owner : "),a("code",[t._v("none")])]):t._e(),a("p",{attrs:{id:s.id}},[t._v("card : "+t._s(s.h))]),a("p",[a("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:26==s.id,expression:"ii.id == 26"}],staticClass:"card-owner-one"},[s.owner?a("p",[t._v("owner : "),a("a",{attrs:{href:"/"+s.owner}},[t._v(t._s(s.owner))])]):t._e(),null===s.owner?a("p",[t._v("owner : "),a("code",[t._v("none")])]):t._e(),a("p",{attrs:{id:s.id}},[t._v("card : "+t._s(s.h))]),a("p",[a("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])])])})),0):t._e(),"te"===t.loc?a("div",[t._m(17),t._l(t.rcards.data,(function(s,r){return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:0!==s.id,expression:"ii.id !== 0"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:s.id<15,expression:"ii.id < 15"}],staticClass:"card-owner-one"},[a("p",{attrs:{id:s.id}},[a("button",[t._v("id:"+t._s(s.id))])]),a("p",{attrs:{id:s.id}},[t._v("["+t._s(s.ten)+"] "+t._s(s.h)+" / "+t._s(s.id)+"00")]),a("p",[a("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:29==s.id||33==s.id,expression:"ii.id == 29 || ii.id == 33"}],staticClass:"card-owner-one"},[a("p",{attrs:{id:s.id}},[a("button",[t._v("id:"+t._s(s.id))])]),a("p",{attrs:{id:s.id}},[t._v("["+t._s(s.ten)+"] "+t._s(s.h)+" / "+t._s(s.id)+"00 "),a("span",{staticClass:"icon-power"})]),a("p",[a("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])])])}))],2):t._e(),"te"===t.loc?a("div",[t._m(18)]):t._e(),"fa"===t.loc?a("div",[t._m(19),t._l(t.fanarts.data,(function(s,r){return a("span",{staticClass:"fan-body"},[!0!==s.delete?a("div",{staticClass:"viewer"},[a("p",[a("a",{attrs:{href:s.link}},[a("img",{attrs:{src:s.img}})])]),a("p",[t._v("author : "),a("a",{attrs:{href:"https://bsky.app/profile/"+s.author}},[t._v(t._s(s.author))])])]):t._e()])}))],2):t._e(),"ph"===t.loc?a("div",[t._m(20),t._l(t.photos.data,(function(s,r){return a("span",{staticClass:"fan-body"},[!0!==s.delete?a("div",{staticClass:"viewer"},[a("p",[a("a",{attrs:{href:s.link}},[a("img",{attrs:{src:s.img}})])]),a("p",[t._v("author : "),a("a",{attrs:{href:"https://bsky.app/profile/"+s.author}},[t._v(t._s(s.author))])])]):t._e()])}))],2):t._e(),"pr"===t.loc?a("div",[a("p",[t._v("お気に入りのカードを1枚だけ登録できます")]),t._m(21),t._m(22),t._m(23),a("h3",[t._v("/fav b")]),t._m(24),a("p",[t._v("1日のバトルポイントを消費します。")])]):t._e(),a("footer",[t._v(" © syui ")])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"menu"},[a("a",{staticClass:"menu-link",attrs:{href:"/"}},[a("span",{staticClass:"icon-ai"})]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/docs"}},[t._v("docs")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/en"}},[t._v("en")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/te"}},[t._v("ten")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/pr"}},[t._v("fav")]),a("span",{staticClass:"menu-right-top"},[a("a",{staticClass:"menu-link",attrs:{href:"https://yui.syui.ai"}},[a("span",{staticClass:"icon-ai"})])])])},function(){var t=this,a=t._self._c;return a("code",[a("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[t._v("@yui.syui.ai")]),t._v(" /ten")])},function(){var t=this,a=t._self._c;return a("code",[a("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[t._v("@yui.syui.ai")]),t._v(" /fav 1234567")])},function(){var t=this,a=t._self._c;return a("code",[a("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[t._v("@yui.syui.ai")]),t._v(" /card")])},function(){var t=this,a=t._self._c;return a("span",{staticClass:"menu-right-top"},[a("button",[t._v("✧")])])},function(){var t=this,a=t._self._c;return a("table",[a("thead",[a("tr",[a("th",[t._v("status")])])]),a("tbody",[a("tr",[a("td",[t._v("normal")]),a("td",[t._v("rare")]),a("td",[t._v("super")])]),a("tr",[a("td",[t._v("90%")]),a("td",[t._v("9%")]),a("td",[t._v("1%")])])])])},function(){var t=this,a=t._self._c;return a("table",[a("thead",[a("tr",[a("th",[t._v("cp")])])]),a("tbody",[a("tr",[a("td",[t._v("normal")]),a("td",[t._v("rare")]),a("td",[t._v("super")])]),a("tr",[a("td",[t._v("+0~200")]),a("td",[t._v("+0~450")]),a("td",[t._v("+0~800")])])])])},function(){var t=this,a=t._self._c;return a("p",[a("code",[t._v("@yui.syui.ai /card -b")])])},function(){var t=this,a=t._self._c;return a("p",[a("code",[t._v("@yui.syui.ai /card -r")])])},function(){var t=this,a=t._self._c;return a("p",[t._v("匿名で受け取りたい郵便局を決めて "),a("a",{attrs:{href:"https://bsky.app/profile/syui.ai"}},[t._v("@syui")]),t._v(" まで連絡してみて")])},function(){var t=this,a=t._self._c;return a("p",[t._v("ただし、すでに"),a("a",{attrs:{href:"/owner"}},[t._v("所有者")]),t._v("がいる場合、絵本は生成されません")])},function(){var t=this,a=t._self._c;return a("p",[a("a",{staticClass:"menu-link",attrs:{href:"/fa"}},[t._v("fanart")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/ph"}},[t._v("photo")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/te"}},[t._v("aiten")])])},function(){var t=this,a=t._self._c;return a("table",[a("thead",[a("tr",[a("th",[t._v("status")])])]),a("tbody",[a("tr",[a("td",[t._v("normal")]),a("td",[t._v("rare")]),a("td",[t._v("super")])]),a("tr",[a("td",[t._v("90%")]),a("td",[t._v("9%")]),a("td",[t._v("1%")])])])])},function(){var t=this,a=t._self._c;return a("table",[a("thead",[a("tr",[a("th",[t._v("cp")])])]),a("tbody",[a("tr",[a("td",[t._v("normal")]),a("td",[t._v("rare")]),a("td",[t._v("super")])]),a("tr",[a("td",[t._v("+0~200")]),a("td",[t._v("+0~450")]),a("td",[t._v("+0~800")])])])])},function(){var t=this,a=t._self._c;return a("p",[a("code",[t._v("@yui.syui.ai /card -b")])])},function(){var t=this,a=t._self._c;return a("p",[a("a",{attrs:{href:"https://syui.ai/photo/bluesky.jpg"}},[t._v("card")]),t._v(" / "),a("a",{attrs:{href:"/owner"}},[t._v("owner")])])},function(){var t=this,a=t._self._c;return a("p",[a("a",{staticClass:"menu-link",attrs:{href:"/fa"}},[t._v("fanart")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/ph"}},[t._v("photo")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"/te"}},[t._v("aiten")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"iten-start"},[a("h3",[a("span",{staticClass:"icon-power"}),t._v(" AITEN")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"iten-start"},[a("p",[a("code",[t._v("/ten h")]),t._v(" : ヘルプ")]),a("p",[a("code",[t._v("/ten start")]),t._v(" : 7ターンまでに文字をそろえる")]),a("p",[a("span",{staticClass:"icon-power"}),t._v(" はカードを持ってる人しか出せない")]),a("blockquote",[t._v("ACEHIKMOSTUWYZ")])])},function(){var t=this,a=t._self._c;return a("p",[a("code",[t._v("/fa <share-url> <img-url>")])])},function(){var t=this,a=t._self._c;return a("p",[a("code",[t._v("/ph <share-url> <img-url>")])])},function(){var t=this,a=t._self._c;return a("p",[t._v("カードの数字は個人ページの "),a("button",[t._v("fav")]),t._v(" で確認します。")])},function(){var t=this,a=t._self._c;return a("p",[t._v("syuiの場合は"),a("code",[a("a",{attrs:{href:"https://card.syui.ai/syui"}},[t._v("card.syui.ai/syui")])]),t._v("です。")])},function(){var t=this,a=t._self._c;return a("p",[t._v("もとに戻すときは "),a("code",[t._v("0")]),t._v(" を指定します。")])},function(){var t=this,a=t._self._c;return a("p",[a("code",[t._v("/fav b")]),t._v("でバトルできます。")])}],n=s("bc3a"),c=s.n(n);document.querySelector(".card-wrapper");var d=window.location.pathname.split("/").slice(-1)[0],o={name:"App",metaInfo:{title:"card.syui.ai",titleTemplate:"%s | "+d,meta:[{property:"og:title",content:"%s | "+d}]},data(){return{all:null,card:null,cards:null,loc:window.location.pathname.split("/").slice(-1)[0],id:null,record:null,url:null,user:null,userid:null,ucard:null,status:null,premium:!1,premium_text:null,rcards:null,fanarts:null,photos:null,info:!1,time:null,aiten:null,fav:null,card_fav:null,user_fav:null,card_status:null}},mounted(){"owner"===d||"te"===d?(c.a.get("/json/card.json").then(t=>this.rcards=t),d.length>1&&c.a.get(url,{crossdomain:!0}).then(t=>this.cards=t)):"fa"===d?c.a.get("/json/fanart.json").then(t=>this.fanarts=t):"ph"===d?c.a.get("/json/photo.json").then(t=>this.photos=t):c.a.get("https://cors-card.herokuapp.com/https://api.syui.ai/users?itemsPerPage=2000",{crossdomain:!0}).then(t=>{this.record=t,this.id=this.record.data.find(t=>t.username==d).id,this.aiten=this.record.data.find(t=>t.username==d).aiten,this.user_fav=this.record.data.find(t=>t.username==d).fav;let a="https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id+"/card?itemsPerPage=2000";c.a.get("/json/card.json").then(t=>this.rcards=t),d.length>1&&c.a.get(a,{crossdomain:!0}).then(t=>{this.cards=t;for(let a=1;a<=14;a++)if(this.all=this.cards.data.some(t=>t.card===a),!1===this.all)break})}).catch(t=>console.log(t))},methods:{submit(){let t="https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id+"/card?itemsPerPage=2000";c.a.get(t,{crossdomain:!0}).then(t=>this.cards=t),c.a.get("https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id,{crossdomain:!0}).then(t=>this.user=t)},page(){this.id=this.record.data.find(t=>t.username==this.userid).id;let t="https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id+"/card?itemsPerPage=2000";c.a.get(t,{crossdomain:!0}).then(t=>this.ucard=t)},sort(){if(this.premium){this.premium=!1;let t="https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id+"/card?itemsPerPage=2000";c.a.get(t,{crossdomain:!0}).then(t=>this.cards=t)}return this.cards.data.sort((t,a)=>a.cp-t.cp)},sortcard(){if(this.premium){this.premium=!1;let t="https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id+"/card?itemsPerPage=2000";c.a.get(t,{crossdomain:!0}).then(t=>this.cards=t)}return this.cards.data.sort((t,a)=>a.card-t.card)},cardinfo(){this.cards={};let t="https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id+"/card?itemsPerPage=2000";c.a.get(t,{crossdomain:!0}).then(t=>this.cards=t),this.fav=!1,this.info=!0,this.card_status=!1},cardtime(){this.cards.data=this.cards.data.slice().reverse(),this.time=!0},cardfav(){this.info=!1,this.fav=!0,this.card_status=!1},cardstatus(){this.cards={};let t="https://cors-card.herokuapp.com/https://api.syui.ai/users/"+this.id+"/card?itemsPerPage=2000";c.a.get(t,{crossdomain:!0}).then(t=>this.cards=t),this.info=!1,this.fav=!1,this.card_status=!0},cardpremium(){return this.cards.data.sort((t,a)=>{if(this.premium=!0,15===t.card)t.url="[unavailable] card == 15";else if(16===t.card)t.url="[unavailable] card == 16";else if(17===t.card)t.url="[unavailable] card == 17";else if(18===t.card)t.url="[unavailable] card == 18";else if(19===t.card)t.url="[unavailable] card == 19";else if(22===t.card)t.url="[unavailable] card == 22";else if(23===t.card)t.url="[unavailable] card == 23";else if(24===t.card)t.url="[unavailable] card == 24";else if(26===t.card)t.url="[unavailable] card == 26";else if(27===t.card)t.url="[unavailable] card == 27";else if(28===t.card)t.url="[unavailable] card == 28";else{if(32!==t.card)return t.card>=1&&t.cp<50?(t.url="[unavailable] rare cp < 50",a.card-t.card):0===a.card&&a.cp>350?(t.url="[unavailable] normal cp > 350",a.card-t.card):0===t.cp?(t.url="[unavailable] cp == 0",a.card-t.card):0===t.card&&"super"===t.status?(t.url="[unavailable] normal == super",a.card-t.card):(t.url=null,void(t.card=null));t.url="[unavailable] card == 32"}})}}},l=o,u=(s("0cc2"),s("2877")),_=Object(u["a"])(l,e,i,!1,null,null,null),p=_.exports,v=s("58ca");r["a"].use(v["a"]),r["a"].config.productionTip=!1,new r["a"]({render:t=>t(p)}).$mount("#app")},a28b:function(t,a,s){}});
//# sourceMappingURL=app.js.map