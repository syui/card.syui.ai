(function(a){function t(t){for(var r,n,c=t[0],d=t[1],o=t[2],_=0,u=[];_<c.length;_++)n=c[_],Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&u.push(e[n][0]),e[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(a[r]=d[r]);l&&l(t);while(u.length)u.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var a,t=0;t<i.length;t++){for(var s=i[t],r=!0,c=1;c<s.length;c++){var d=s[c];0!==e[d]&&(r=!1)}r&&(i.splice(t--,1),a=n(n.s=s[0]))}return a}var r={},e={app:0},i=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return a[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=a,n.c=r,n.d=function(a,t,s){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:s})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)n.d(s,r,function(t){return a[t]}.bind(null,r));return s},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=d;i.push([0,"chunk-vendors"]),s()})({0:function(a,t,s){a.exports=s("56d7")},"56d7":function(a,t,s){"use strict";s.r(t);var r=s("2b0e"),e=function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"app"}},[t("link",{attrs:{rel:"stylesheet",href:"https://syui.ai/bower_components/icomoon/css/icomoon.css"}}),a._m(0),"te"===a.loc?t("p",[a._m(1)]):"pr"===a.loc?t("p",[a._m(2)]):t("p",[a._m(3)]),a.loc.length>1?t("div",[a.cards?t("div",{staticClass:"bluesky-card"},[t("h3",[!0===a.bsky_mode?t("span",[t("a",{attrs:{href:"https://bsky.app/profile/"+a.did,target:"_blank"}},[a._v(a._s(a.loc))])]):t("span",[a._v(a._s(a.loc))]),a._l(a.rcards.data,(function(s){return t("span",{staticClass:"card-owner-badge"},[s.owner==a.loc?t("a",{attrs:{href:"/owner#"+s.id,target:"_blank"}},[t("span",{staticClass:"icon-ai"})]):a._e()])})),a._l(a.rcards.data,(function(s){return t("span",a._l(s.owner,(function(s){return t("span",{staticClass:"card-bluesky-badge"},[s.user==a.loc?t("a",{attrs:{href:"/owner#"+s.user,target:"_blank"}},[t("span",{staticClass:"icon-ai"})]):a._e()])})),0)})),!0===this.all?t("span",{staticClass:"card-all-badge"},[t("span",{staticClass:"icon-ai"})]):a._e()],2),a.cards.data.find(a=>43==a.card)?t("span",{staticClass:"menu-right-top"},[t("button",{on:{click:function(t){a.book_user=!a.book_user}}},[a._v("book")])]):a._e(),a.cards.data.find(a=>43==a.card)?t("div",{directives:[{name:"show",rawName:"v-show",value:a.book_user,expression:"book_user"}],staticClass:"book-list"},[t("a",{attrs:{href:"/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"}},[t("img",{attrs:{src:"/card/card_43.webp"}})])]):a._e(),"0"!=a.user_fav?t("div",{staticClass:"card-fav"},[a._m(4),t("table",{staticClass:"card-fav"},[t("span",{staticClass:"card-fav-su"},[a._v(" "+a._s(a.ii=a.cards.data.find(t=>t.id==a.user_fav))+" ")]),"first"==a.ii.status&&null!==a.ii.card?t("thead",{staticClass:"card-fav"},[t("tr",{staticClass:"card-status-first"},[t("span",{staticClass:"card-wrapper"},[t("span",{staticClass:"reflection"},[t("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),t("span",{staticClass:"card pattern"}),t("span",{staticClass:"card color"}),t("span",{staticClass:"card highlight"})])])]):"second"==a.ii.status&&null!==a.ii.card?t("thead",{staticClass:"card-fav"},[t("tr",{staticClass:"card-status-first"},[t("span",{staticClass:"card-wrapper"},[t("span",{staticClass:"reflection"},[t("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),t("span",{staticClass:"card pattern-s"}),t("span",{staticClass:"card color-s"}),t("span",{staticClass:"card highlight-s"})])])]):"third"==a.ii.status&&null!==a.ii.card?t("thead",{staticClass:"card-fav"},[t("tr",{staticClass:"card-status-first"},[t("span",{staticClass:"card-wrapper"},[t("span",{staticClass:"reflection"},[t("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),t("span",{staticClass:"card pattern-t"}),t("span",{staticClass:"card color-t"}),t("span",{staticClass:"card highlight-t"})])])]):null!==a.ii.card?t("thead",{staticClass:"card-fav"},[t("tr",[t("img",{attrs:{src:"/card/card_"+a.ii.card+".webp"}})])]):a._e(),t("tbody",[t("tr",["critical"==a.ii.skill?t("span",{staticClass:"icon-sandar"}):a._e(),"post"==a.ii.skill?t("span",{staticClass:"icon-moon"}):a._e(),"luck"==a.ii.skill?t("span",{staticClass:"icon-api"}):a._e(),"ten"==a.ii.skill?t("span",{staticClass:"icon-power"}):a._e(),"lost"==a.ii.skill?t("span",[a._v("●")]):a._e(),"dragon"==a.ii.skill?t("span",{staticClass:"icon-home"}):a._e(),"nyan"==a.ii.skill?t("span",[a._v("▲")]):a._e(),"badge"==a.ii.skill?t("span",[a._v("🐉")]):a._e(),a._v(" "+a._s(a.ii.cp))])]),t("tbody",[t("tr",{staticClass:"card-fav-status"},[a._v("✧ "+a._s(a.ii.status))])]),1==a.info?t("tbody",[t("tr",[a._v("ID "+a._s(a.ii.card))])]):a._e(),1==a.fav?t("tbody",[t("tr",[a._v("CID "+a._s(a.ii.id))])]):a._e()])]):a._e(),t("div",{staticClass:"card-button"},[t("button",{on:{click:a.cardtime}},[a._v("new")]),a._v(" "),t("button",{on:{click:a.sort}},[a._v("cp")]),a._v(" "),t("button",{on:{click:a.sortcard}},[a._v("card")]),a._v(" "),t("button",{on:{click:a.cardinfo}},[a._v("id")]),a._v(" "),t("button",{on:{click:a.cardstatus}},[a._v("status")]),a._v(" "),t("button",{on:{click:a.cardpremium}},[a._v("premium")]),a._v(" "),t("button",{on:{click:a.cardfav}},[a._v("fav")])]),t("span",{staticClass:"menu-right"},[t("code",[t("strong",[a._v("ID")]),a._v(" "+a._s(a.id))]),a._v(" "),t("code",[t("span",{staticClass:"icon-power"}),a._v(" "+a._s(a.aiten))])]),t("table",a._l(a.cards.data,(function(s,r){return t("span",["normal"==s.status&&null!==s.card?t("span",[43==s.card?t("thead",[t("td",[t("a",{attrs:{href:"/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"}},[t("img",{attrs:{src:"/card/card_"+s.card+".webp"}})])])]):t("thead",[t("td",[t("img",{attrs:{src:"/card/card_"+s.card+".webp"}})])]),t("tbody",[t("tr",["critical"==s.skill?t("span",{staticClass:"icon-sandar"}):a._e(),"post"==s.skill?t("span",{staticClass:"icon-moon"}):a._e(),"luck"==s.skill?t("span",{staticClass:"icon-api"}):a._e(),"ten"==s.skill?t("span",{staticClass:"icon-power"}):a._e(),"dragon"==s.skill?t("span",{staticClass:"icon-home"}):a._e(),"nyan"==s.skill?t("span",[a._v("▲")]):a._e(),a._v(" "+a._s(s.cp))])]),1==a.info?t("tbody",[t("tr",[a._v("ID "+a._s(s.card))])]):a._e(),1==a.fav?t("tbody",[t("tr",[a._v("CID "+a._s(s.id))])]):a._e(),1==a.card_status?t("tbody",[t("tr",[a._v("✧ "+a._s(s.status))])]):a._e()]):null!==s.card?t("span",[t("thead",[t("td",[43==s.card?t("span",{staticClass:"reflection"},[t("a",{attrs:{href:"/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"}},[t("img",{attrs:{src:"/card/card_"+s.card+".webp"}})])]):t("span",{staticClass:"reflection"},[t("img",{attrs:{src:"/card/card_"+s.card+".webp"}})])])]),t("tbody",[t("tr",["critical"==s.skill?t("span",{staticClass:"icon-sandar"}):a._e(),"post"==s.skill?t("span",{staticClass:"icon-moon"}):a._e(),"luck"==s.skill?t("span",{staticClass:"icon-api"}):a._e(),"ten"==s.skill?t("span",{staticClass:"icon-power"}):a._e(),"dragon"==s.skill?t("span",{staticClass:"icon-home"}):a._e(),"nyan"==s.skill?t("span",[a._v("▲")]):a._e(),a._v(" "+a._s(s.cp))])]),1==a.info?t("tbody",[t("tr",[a._v("ID "+a._s(s.card))])]):a._e(),1==a.fav?t("tbody",[t("tr",[a._v("CID "+a._s(s.id))])]):a._e(),1==a.card_status?t("tbody",[t("tr",[a._v("✧ "+a._s(s.status))])]):a._e()]):a._e()])})),0)]):a._e()]):a._e(),0==a.loc.length?t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),a.page.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.userid,expression:"userid"}],attrs:{placeholder:"user",value:"userid"},domProps:{value:a.userid},on:{input:function(t){t.target.composing||(a.userid=t.target.value)}}}),t("input",{attrs:{type:"submit"}})]),t("form",{on:{submit:function(t){return t.preventDefault(),a.submit.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.id,expression:"id"}],attrs:{placeholder:"id",value:"id"},domProps:{value:a.id},on:{input:function(t){t.target.composing||(a.id=t.target.value)}}}),t("input",{attrs:{type:"submit"}})]),a.cards?t("div",{staticClass:"bluesky-card"},[t("p",[a._v("user : "),t("a",{attrs:{href:"/"+a.user.data.username}},[t("code",[a._v(a._s(a.user.data.username))])])]),t("p",[a._v("id : "),t("code",[a._v(a._s(a.user.data.id))])]),t("p",[a._v("did : "),t("code",[a._v(a._s(a.user.data.did))])]),t("p",[a._v("aiten : "),t("code",[a._v(a._s(a.user.data.aiten))])]),t("p",[a._v("handle : "),t("code",[a._v(a._s(a.user.data.handle))])]),1==a.user.data.delete?t("p",[a._v("status : "),t("code",[a._v("delete")])]):a._e(),t("p",[a._v("created_at : "),t("code",[a._v(a._s(a.user.data.created_at))])]),a._l(a.cards.data,(function(s){return t("span",[t("img",{attrs:{src:"/card/card_"+s.card+".webp"}}),a._v(a._s(s.cp)+" ")])}))],2):a._e(),a.ucard?t("div",{staticClass:"bluesky-card"},[t("h3",[t("a",{attrs:{href:"/"+a.userid}},[a._v(a._s(a.userid))])]),a._l(a.ucard.data,(function(s){return t("span",[t("img",{attrs:{src:"/card/card_"+s.card+".webp"}}),a._v(a._s(s.cp)+" ")])}))],2):a._e(),a.record?t("div",{staticClass:"bluesky-record"},a._l(a.record.data,(function(s){return t("li",[!1===s.delete?t("p",[t("span",{staticClass:"menu-right-top"},["0"!=s.fav?t("button",[a._v("✧")]):a._e(),a._v(" "),t("button",[a._v("ID "+a._s(s.id))])])]):a._e(),!1===s.delete?t("p",[t("span",{staticClass:"text"},[t("a",{attrs:{href:"/"+s.username}},[a._v(a._s(s.username))])])]):a._e()])})),0):a._e()]):a._e(),"docs"===a.loc?t("div",[t("p",[a._v("カードは1日に1回、引くことができます")]),t("p",[a._v("カードの排出率は以下のとおりです")]),a._m(5),t("p",[a._v("カードには強さを表す数字が入っています")]),a._m(6),t("h3",[a._v("対戦について")]),a._m(7),t("p",[a._v("ランダムマッチ、手持ちの上位3枚のうち1枚がランダムで選ばれます")]),t("h3",[a._v("レイドについて")]),a._m(8),t("p",[a._v("レイドバトル、手持ちで一番強いカードが選ばれます")]),t("h3",[a._v("mastodon")]),a._m(9),t("p",[a._v("mastodonからもカードを引くことができます")]),t("p",[a._v("ユーザー名が同じの場合、カードは共通です")]),t("h3",[a._v("activitypub mode")]),a._m(10),a._m(11),t("h3",[a._v("秘密")]),a._m(12),a._m(13),a._m(14),t("h3",[a._v("link")]),a._m(15)]):a._e(),"en"===a.loc?t("div",[t("p",[a._v("Cards can be drawn once a day")]),t("p",[a._v("Card emission rates are as follows")]),a._m(16),t("p",[a._v("The cards have numbers(cp) on them indicating their strength.")]),a._m(17),t("h3",[a._v("battle")]),a._m(18),t("p",[a._v("Random match, one of the top 3 cards on hand will be chosen at random")]),t("h3",[a._v("mastodon")]),a._m(19),t("p",[a._v("support mastodon")]),t("h3",[a._v("activitypub")]),a._m(20),t("p",[a._v("activitypub mode disable")]),t("h3",[a._v("secret")]),a._m(21),t("h3",[a._v("link")]),a._m(22)]):a._e(),"owner"===a.loc?t("div",a._l(a.rcards.data,(function(s,r){return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:0!==s.id,expression:"ii.id !== 0"}]},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.id<15,expression:"ii.id < 15"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})]),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:22==s.id,expression:"ii.id == 22"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),(s.owner,t("span",{staticClass:"card-black"},[t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:25==s.id,expression:"ii.id == 25"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})]),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:26==s.id,expression:"ii.id == 26"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})]),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:27==s.id,expression:"ii.id == 27"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),(s.owner,t("span",{staticClass:"card-black"},[t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:29==s.id,expression:"ii.id == 29"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),(s.owner,t("span",{staticClass:"card-black"},[t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:33==s.id,expression:"ii.id == 33"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),(s.owner,t("span",{staticClass:"card-black"},[t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:36==s.id,expression:"ii.id == 36"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),(s.owner,t("span",{staticClass:"card-black"},[t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:39==s.id,expression:"ii.id == 39"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})]),s.owner?t("p",[a._v("owner :"),a._l(s.owner,(function(s,r){return t("span",[t("a",{attrs:{href:"/"+s.user}},[a._v(a._s(s.user))]),a._v(", ")])}))],2):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:40==s.id,expression:"ii.id == 40"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})]),s.owner?t("p",[a._v("owner :"),a._l(s.owner,(function(s,r){return t("span",[t("a",{attrs:{href:"/"+s.user}},[a._v(a._s(s.user))]),a._v(", ")])}))],2):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:41==s.id,expression:"ii.id == 41"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})]),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()]),t("div",{directives:[{name:"show",rawName:"v-show",value:44==s.id,expression:"ii.id == 44"}],staticClass:"card-owner-one"},[t("button",{attrs:{id:s.id}},[a._v("card : "+a._s(s.h))]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})]),s.owner?t("p",[a._v("owner : "),t("a",{attrs:{href:"/"+s.owner}},[a._v(a._s(s.owner))])]):a._e(),null===s.owner?t("p",[a._v("owner : "),t("code",[a._v("none")])]):a._e()])])])})),0):a._e(),"te"===a.loc?t("div",[a._m(23),a._l(a.rcards.data,(function(s,r){return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:0!==s.id,expression:"ii.id !== 0"}]},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.id<15,expression:"ii.id < 15"}],staticClass:"card-owner-one"},[t("p",{attrs:{id:s.id}},[t("button",[a._v("id:"+a._s(s.id))])]),t("p",{attrs:{id:s.id}},[a._v("["+a._s(s.ten)+"] "+a._s(s.h)+" / "+a._s(s.id)+"00")]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])]),t("div",{directives:[{name:"show",rawName:"v-show",value:29==s.id||33==s.id||36==s.id,expression:"ii.id == 29 || ii.id == 33 || ii.id == 36"}],staticClass:"card-owner-one"},[t("p",{attrs:{id:s.id}},[t("button",[a._v("id:"+a._s(s.id))])]),t("p",{attrs:{id:s.id}},[a._v("["+a._s(s.ten)+"] "+a._s(s.h)+" / "+a._s(s.id)+"00 "),t("span",{staticClass:"icon-power"})]),t("p",[t("img",{attrs:{src:"/card/card_"+s.id+".webp"}})])])])])}))],2):a._e(),"te"===a.loc?t("div",[a._m(24)]):a._e(),"fa"===a.loc?t("div",[a._m(25),a._l(a.fanarts.data,(function(s,r){return t("span",{staticClass:"fan-body"},[!0!==s.delete?t("div",{staticClass:"viewer"},[t("p",[t("a",{attrs:{href:s.link}},[t("img",{attrs:{src:s.img}})])]),t("p",[a._v("author : "),t("a",{attrs:{href:"https://bsky.app/profile/"+s.author}},[a._v(a._s(s.author))])])]):a._e()])}))],2):a._e(),"ph"===a.loc?t("div",[a._m(26),a._l(a.photos.data,(function(s,r){return t("span",{staticClass:"fan-body"},[!0!==s.delete?t("div",{staticClass:"viewer"},[t("p",[t("a",{attrs:{href:s.link}},[t("img",{attrs:{src:s.img}})])]),t("p",[a._v("author : "),t("a",{attrs:{href:"https://bsky.app/profile/"+s.author}},[a._v(a._s(s.author))])])]):a._e()])}))],2):a._e(),"pr"===a.loc?t("div",[t("p",[a._v("お気に入りのカードを1枚だけ登録できます")]),a._m(27),a._m(28),a._m(29),t("h3",[a._v("/fav b")]),a._m(30),t("p",[a._v("1日のバトルポイントを消費します。")])]):a._e(),t("footer",[a._v(" © syui ")])])},i=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"menu"},[t("a",{staticClass:"menu-link",attrs:{href:"/"}},[t("span",{staticClass:"icon-ai"})]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/docs"}},[a._v("docs")]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/en"}},[a._v("en")]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/te"}},[a._v("ten")]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/pr"}},[a._v("fav")]),t("span",{staticClass:"menu-right-top"},[t("a",{staticClass:"menu-link",attrs:{href:"https://yui.syui.ai"}},[t("span",{staticClass:"icon-ai"})])])])},function(){var a=this,t=a._self._c;return t("code",[t("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[a._v("@yui.syui.ai")]),a._v(" /ten")])},function(){var a=this,t=a._self._c;return t("code",[t("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[a._v("@yui.syui.ai")]),a._v(" /fav 1234567")])},function(){var a=this,t=a._self._c;return t("code",[t("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[a._v("@yui.syui.ai")]),a._v(" /card")])},function(){var a=this,t=a._self._c;return t("span",{staticClass:"menu-right-top"},[t("button",[a._v("✧")])])},function(){var a=this,t=a._self._c;return t("table",[t("thead",[t("tr",[t("th",[a._v("status")])])]),t("tbody",[t("tr",[t("td",[a._v("normal")]),t("td",[a._v("rare")]),t("td",[a._v("super")])]),t("tr",[t("td",[a._v("90%")]),t("td",[a._v("9%")]),t("td",[a._v("1%")])])])])},function(){var a=this,t=a._self._c;return t("table",[t("thead",[t("tr",[t("th",[a._v("cp")])])]),t("tbody",[t("tr",[t("td",[a._v("normal")]),t("td",[a._v("rare")]),t("td",[a._v("super")])]),t("tr",[t("td",[a._v("+0~200")]),t("td",[a._v("+0~450")]),t("td",[a._v("+0~800")])])])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("@yui.syui.ai /card -b")])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("@yui.syui.ai /card -r")])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[t("a",{attrs:{href:"https://mstdn.syui.ai/@yui",target:"_blank"}},[a._v("@yui@syui.ai")]),a._v(" /card")])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("@yui.syui.ai /card ap=false")])])},function(){var a=this,t=a._self._c;return t("p",[a._v("bsky.socialからactivitypub modeを"),t("code",[a._v("true")]),a._v("/"),t("code",[a._v("false")]),a._v("に切り替える")])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("レアカード")]),a._v("を3枚集めると、いいことがあるかも")])},function(){var a=this,t=a._self._c;return t("p",[a._v("集めた人は"),t("a",{attrs:{href:"https://bsky.app/profile/syui.ai"}},[a._v("@syui")]),a._v("まで連絡してみて")])},function(){var a=this,t=a._self._c;return t("p",[a._v("ただし、リアルカードに変わるのは、こちらの"),t("a",{attrs:{href:"/owner"}},[a._v("所有者")]),a._v("がいないカードに限られます")])},function(){var a=this,t=a._self._c;return t("p",[t("a",{staticClass:"menu-link",attrs:{href:"/fa"}},[a._v("fanart")]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/ph"}},[a._v("photo")]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/te"}},[a._v("aiten")])])},function(){var a=this,t=a._self._c;return t("table",[t("thead",[t("tr",[t("th",[a._v("status")])])]),t("tbody",[t("tr",[t("td",[a._v("normal")]),t("td",[a._v("rare")]),t("td",[a._v("super")])]),t("tr",[t("td",[a._v("90%")]),t("td",[a._v("9%")]),t("td",[a._v("1%")])])])])},function(){var a=this,t=a._self._c;return t("table",[t("thead",[t("tr",[t("th",[a._v("cp")])])]),t("tbody",[t("tr",[t("td",[a._v("normal")]),t("td",[a._v("rare")]),t("td",[a._v("super")])]),t("tr",[t("td",[a._v("+0~200")]),t("td",[a._v("+0~450")]),t("td",[a._v("+0~800")])])])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("@yui.syui.ai /card -b")])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[t("a",{attrs:{href:"https://mstdn.syui.ai/@yui",target:"_blank"}},[a._v("@yui@syui.ai")]),a._v(" /card")])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("@yui.syui.ai /card ap=false")])])},function(){var a=this,t=a._self._c;return t("p",[a._v("card "),t("a",{attrs:{href:"/owner"}},[a._v("owner")])])},function(){var a=this,t=a._self._c;return t("p",[t("a",{staticClass:"menu-link",attrs:{href:"/fa"}},[a._v("fanart")]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/ph"}},[a._v("photo")]),a._v(" "),t("a",{staticClass:"menu-link",attrs:{href:"/te"}},[a._v("aiten")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"iten-start"},[t("h3",[t("span",{staticClass:"icon-power"}),a._v(" AITEN")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"iten-start"},[t("p",[t("code",[a._v("/ten h")]),a._v(" : ヘルプ")]),t("p",[t("code",[a._v("/ten start")]),a._v(" : 7ターンまでに文字をそろえる")]),t("p",[t("span",{staticClass:"icon-power"}),a._v(" はカードを持ってる人しか出せない")]),t("blockquote",[a._v("ACEHIKMOSTUWYZ")])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("/fa <share-url> <img-url>")])])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("/ph <share-url> <img-url>")])])},function(){var a=this,t=a._self._c;return t("p",[a._v("数字はカード一覧の "),t("button",[a._v("fav")]),a._v(" で確認します。")])},function(){var a=this,t=a._self._c;return t("p",[t("img",{attrs:{src:"/img/docs_fav.jpg"}})])},function(){var a=this,t=a._self._c;return t("p",[a._v("もとに戻すときは "),t("code",[a._v("0")]),a._v(" を指定します。")])},function(){var a=this,t=a._self._c;return t("p",[t("code",[a._v("/fav b")]),a._v("でバトルできます。")])}],n=s("bc3a"),c=s.n(n);document.querySelector(".card-wrapper");var d=window.location.pathname.split("/").slice(-1)[0],o={name:"App",metaInfo:{title:"card.syui.ai",titleTemplate:"%s | "+d,meta:[{property:"og:title",content:"%s | "+d}]},data(){return{host:window.location.host,all:null,card:null,cards:null,loc:window.location.pathname.split("/").slice(-1)[0],id:null,record:null,url:null,user:null,userid:null,ucard:null,status:null,premium:!1,premium_text:null,rcards:null,fanarts:null,photos:null,info:!1,time:null,aiten:null,fav:null,card_fav:null,user_fav:null,book_user:null,card_status:null,cors:"https://cors.syui.ai/",heroku:"https://cors-card.herokuapp.com/",api_url:null,bsky_mode:!1,did:null}},mounted(){if("localhost:8080"===window.location.host?this.api_url="/api/":this.api_url="https://api.syui.ai/","owner"===d||"te"===d)c.a.get("/json/card.json").then(a=>this.rcards=a),d.length>1&&c.a.get(url,{crossdomain:!0}).then(a=>this.cards=a);else if("fa"===d)c.a.get("/json/fanart.json").then(a=>this.fanarts=a);else if("ph"===d)c.a.get("/json/photo.json").then(a=>this.photos=a);else{let a=this.api_url+"users?itemsPerPage=3000";c.a.get(a,{crossdomain:!0}).then(a=>{this.record=a,this.id=this.record.data.find(a=>a.username==d).id,this.did=this.record.data.find(a=>a.username==d).did,this.aiten=this.record.data.find(a=>a.username==d).aiten,this.bsky_mode=this.record.data.find(a=>a.username==d).bsky,this.user_fav=this.record.data.find(a=>a.username==d).fav;let t=this.api_url+"users/"+this.id+"/card?itemsPerPage=3000";c.a.get("/json/card.json").then(a=>this.rcards=a),d.length>1&&c.a.get(t,{crossdomain:!0}).then(a=>{this.cards=a;for(let t=1;t<=14;t++)if(this.all=this.cards.data.some(a=>a.card===t),!1===this.all)break})}).catch(a=>console.log(a))}},methods:{submit(){let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=3000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a),c.a.get(this.api_url+"users/"+this.id,{crossdomain:!0}).then(a=>this.user=a)},page(){this.id=this.record.data.find(a=>a.username==this.userid).id;let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.ucard=a)},sort(){if(this.premium){this.premium=!1;let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a)}return this.cards.data.sort((a,t)=>t.cp-a.cp)},sortcard(){if(this.premium){this.premium=!1;let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a)}return this.cards.data.sort((a,t)=>t.card-a.card)},cardinfo(){this.cards={};let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a),this.fav=!1,this.info=!0,this.card_status=!1},cardtime(){this.cards.data=this.cards.data.slice().reverse(),this.time=!0},cardfav(){this.info=!1,this.fav=!0,this.card_status=!1},cardstatus(){this.cards={};let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a),this.info=!1,this.fav=!1,this.card_status=!0},cardbook(){return this.cards.data.sort((a,t)=>{this.premium=!0,43==a.card&&"book"==a.status?this.cards.data=this.cards.data.slice().reverse():(a.url=null,a.card=null)})},cardpremium(){return this.cards.data.sort((a,t)=>{if(this.premium=!0,15===a.card)a.url="[unavailable] card == 15";else if(16===a.card)a.url="[unavailable] card == 16";else if(17===a.card)a.url="[unavailable] card == 17";else if(18===a.card)a.url="[unavailable] card == 18";else if(19===a.card)a.url="[unavailable] card == 19";else if(22===a.card)a.url="[unavailable] card == 22";else if(23===a.card)a.url="[unavailable] card == 23";else if(24===a.card)a.url="[unavailable] card == 24";else if(26===a.card)a.url="[unavailable] card == 26";else if(27===a.card)a.url="[unavailable] card == 27";else if(28===a.card)a.url="[unavailable] card == 28";else if(32===a.card)a.url="[unavailable] card == 32";else{if(36!==a.card)return a.card>=1&&a.cp<50?(a.url="[unavailable] rare cp < 50",t.card-a.card):0===t.card&&t.cp>350?(a.url="[unavailable] normal cp > 350",t.card-a.card):0===a.cp?(a.url="[unavailable] cp == 0",t.card-a.card):0===a.card&&"super"===a.status?(a.url="[unavailable] normal == super",t.card-a.card):(a.url=null,void(a.card=null));a.url="[unavailable] card == 36"}})}}},l=o,_=(s("c1bb"),s("2877")),u=Object(_["a"])(l,e,i,!1,null,null,null),v=u.exports,p=s("58ca");r["a"].use(p["a"]),r["a"].config.productionTip=!1,new r["a"]({render:a=>a(v)}).$mount("#app")},c1bb:function(a,t,s){"use strict";s("f017")},f017:function(a,t,s){}});
//# sourceMappingURL=app.js.map