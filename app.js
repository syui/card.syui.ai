(function(a){function s(s){for(var e,n,c=s[0],d=s[1],o=s[2],_=0,u=[];_<c.length;_++)n=c[_],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e]);l&&l(s);while(u.length)u.shift()();return i.push.apply(i,o||[]),t()}function t(){for(var a,s=0;s<i.length;s++){for(var t=i[s],e=!0,c=1;c<t.length;c++){var d=t[c];0!==r[d]&&(e=!1)}e&&(i.splice(s--,1),a=n(n.s=t[0]))}return a}var e={},r={app:0},i=[];function n(s){if(e[s])return e[s].exports;var t=e[s]={i:s,l:!1,exports:{}};return a[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=e,n.d=function(a,s,t){n.o(a,s)||Object.defineProperty(a,s,{enumerable:!0,get:t})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,s){if(1&s&&(a=n(a)),8&s)return a;if(4&s&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&s&&"string"!=typeof a)for(var e in a)n.d(t,e,function(s){return a[s]}.bind(null,e));return t},n.n=function(a){var s=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(s,"a",s),s},n.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=s,c=c.slice();for(var o=0;o<c.length;o++)s(c[o]);var l=d;i.push([0,"chunk-vendors"]),t()})({0:function(a,s,t){a.exports=t("56d7")},"0b35":function(a,s,t){},4549:function(a,s,t){"use strict";t("0b35")},4678:function(a,s,t){var e={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(a){var s=i(a);return t(s)}function i(a){if(!t.o(e,a)){var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}return e[a]}r.keys=function(){return Object.keys(e)},r.resolve=i,a.exports=r,r.id="4678"},"56d7":function(a,s,t){"use strict";t.r(s);var e=t("2b0e"),r=function(){var a=this,s=a._self._c;return s("div",{attrs:{id:"app"}},[s("link",{attrs:{rel:"stylesheet",href:"https://syui.ai/bower_components/icomoon/css/icomoon.css"}}),a._m(0),"te"===a.loc?s("p",[a._m(1)]):"pr"===a.loc?s("p",[a._m(2)]):s("p",[a._m(3)]),a.loc.length>1?s("div",[a.cards?s("div",{staticClass:"bluesky-card"},[s("h3",[!0===a.bsky_mode?s("span",[s("a",{attrs:{href:"https://bsky.app/profile/"+a.did,target:"_blank"}},[a._v(a._s(a.loc))])]):s("span",[a._v(a._s(a.loc))]),a._l(a.rcards.data,(function(t){return s("span",{staticClass:"card-owner-badge"},[t.owner==a.loc?s("a",{attrs:{href:"/owner#"+t.id,target:"_blank"}},[s("span",{staticClass:"icon-ai"})]):a._e()])})),a._l(a.rcards.data,(function(t){return s("span",a._l(t.owner,(function(t){return s("span",{staticClass:"card-bluesky-badge"},[t.user==a.loc?s("a",{attrs:{href:"/owner#"+t.user,target:"_blank"}},[s("span",{staticClass:"icon-ai"})]):a._e()])})),0)})),!0===this.all?s("span",{staticClass:"card-all-badge"},[s("span",{staticClass:"icon-ai"})]):a._e()],2),a.cards.data.find(a=>43==a.card)?s("span",{staticClass:"menu-right-top"},[s("button",{on:{click:function(s){a.book_user=!a.book_user}}},[a._v("book")])]):a._e(),a.cards.data.find(a=>a.card>=48&&a.card<=59)?s("span",{staticClass:"menu-right-top"},[s("button",{on:{click:function(s){a.chara_user=!a.chara_user}}},[a._v("chara")])]):a._e(),a.cards.data.find(a=>43==a.card)?s("div",{directives:[{name:"show",rawName:"v-show",value:a.book_user,expression:"book_user"}],staticClass:"book-list"},[s("a",{attrs:{href:"/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"}},[s("img",{attrs:{src:"/card/card_43.webp"}})])]):a._e(),a.cards.data.filter(a=>a.card>=48&&a.card<=59)?s("div",{directives:[{name:"show",rawName:"v-show",value:a.chara_user,expression:"chara_user"}],staticClass:"book-list"},a._l(a.cards.data.filter(a=>a.card>=48&&a.card<=59),(function(a){return s("span",{staticClass:"book-list"},[s("a",{attrs:{href:a.url}},[s("img",{attrs:{src:"/card/card_"+a.card+".webp"}})])])})),0):a._e(),"0"!=a.user_fav?s("div",{staticClass:"card-fav"},[a._m(4),s("table",{staticClass:"card-fav"},[s("span",{staticClass:"card-fav-su"},[a._v(" "+a._s(a.ii=a.cards.data.find(s=>s.id==a.user_fav))+" ")]),"first"==a.ii.status&&null!==a.ii.card?s("thead",{staticClass:"card-fav"},[s("tr",{staticClass:"card-status-first"},[s("span",{staticClass:"card-wrapper"},[s("span",{staticClass:"reflection"},[s("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),s("span",{staticClass:"card pattern"}),s("span",{staticClass:"card color"}),s("span",{staticClass:"card highlight"})])])]):"second"==a.ii.status&&null!==a.ii.card?s("thead",{staticClass:"card-fav"},[s("tr",{staticClass:"card-status-first"},[s("span",{staticClass:"card-wrapper"},[s("span",{staticClass:"reflection"},[s("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),s("span",{staticClass:"card pattern-s"}),s("span",{staticClass:"card color-s"}),s("span",{staticClass:"card highlight-s"})])])]):"third"==a.ii.status&&null!==a.ii.card?s("thead",{staticClass:"card-fav"},[s("tr",{staticClass:"card-status-first"},[s("span",{staticClass:"card-wrapper"},[s("span",{staticClass:"reflection"},[s("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),s("span",{staticClass:"card pattern-t"}),s("span",{staticClass:"card color-t"}),s("span",{staticClass:"card highlight-t"})])])]):"yui"==a.ii.status&&null!==a.ii.card?s("thead",{staticClass:"card-fav"},[s("tr",{staticClass:"card-status-first"},[s("span",{staticClass:"card-wrapper"},[s("span",{staticClass:"reflection"},[s("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),s("span",{staticClass:"card pattern-yui"}),s("span",{staticClass:"card color-yui"}),s("span",{staticClass:"card highlight-yui"})])])]):"fourth"==a.ii.status&&null!==a.ii.card?s("thead",{staticClass:"card-fav"},[s("tr",{staticClass:"card-status-first"},[s("span",{staticClass:"card-wrapper"},[s("span",{staticClass:"reflection"},[s("img",{staticClass:"card",attrs:{src:"/card/card_"+a.ii.card+".webp"}})]),s("span",{staticClass:"card pattern-f"}),s("span",{staticClass:"card color-f"}),s("span",{staticClass:"card highlight-f"})])])]):null!==a.ii.card?s("thead",{staticClass:"card-fav"},[s("tr",[s("img",{attrs:{src:"/card/card_"+a.ii.card+".webp"}})])]):a._e(),s("tbody",[s("tr",["critical"==a.ii.skill?s("span",{staticClass:"icon-sandar"}):a._e(),"post"==a.ii.skill?s("span",{staticClass:"icon-moon"}):a._e(),"luck"==a.ii.skill?s("span",{staticClass:"icon-api"}):a._e(),"ten"==a.ii.skill?s("span",{staticClass:"icon-power"}):a._e(),"lost"==a.ii.skill?s("span",[a._v("●")]):a._e(),"dragon"==a.ii.skill?s("span",{staticClass:"icon-home"}):a._e(),"nyan"==a.ii.skill?s("span",[a._v("▲")]):a._e(),"yui"==a.ii.skill?s("span",{staticClass:"icon-ai"}):a._e(),a._v(" "+a._s(a.ii.cp))])]),s("tbody",[s("tr",{staticClass:"card-fav-status"},[a._v("✧ "+a._s(a.ii.status))])]),1==a.info?s("tbody",[s("tr",[a._v("ID "+a._s(a.ii.card))])]):a._e(),1==a.fav?s("tbody",[s("tr",[a._v("CID "+a._s(a.ii.id))])]):a._e()])]):a._e(),s("div",{staticClass:"card-button"},[s("button",{on:{click:a.cardtime}},[a._v("new")]),a._v(" "),s("button",{on:{click:a.sort}},[a._v("cp")]),a._v(" "),s("button",{on:{click:a.sortcard}},[a._v("card")]),a._v(" "),s("button",{on:{click:a.cardinfo}},[a._v("id")]),a._v(" "),s("button",{on:{click:a.cardstatus}},[a._v("status")]),a._v(" "),s("button",{on:{click:a.cardpremium}},[a._v("premium")]),a._v(" "),s("button",{on:{click:a.cardfav}},[a._v("fav")])]),s("span",{staticClass:"menu-right"},[s("code",[s("strong",[a._v("ID")]),a._v(" "+a._s(a.id))]),a._v(" "),s("code",[s("span",{staticClass:"icon-power"}),a._v(" "+a._s(a.aiten))])]),s("table",a._l(a.cards.data,(function(t,e){return s("span",["normal"==t.status&&null!==t.card?s("span",[43==t.card?s("thead",[s("td",[s("a",{attrs:{href:"/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"}},[s("img",{attrs:{src:"/card/card_"+t.card+".webp"}})])])]):s("thead",[s("td",[s("img",{attrs:{src:"/card/card_"+t.card+".webp"}})])]),s("tbody",[s("tr",["critical"==t.skill?s("span",{staticClass:"icon-sandar"}):a._e(),"post"==t.skill?s("span",{staticClass:"icon-moon"}):a._e(),"luck"==t.skill?s("span",{staticClass:"icon-api"}):a._e(),"ten"==t.skill?s("span",{staticClass:"icon-power"}):a._e(),"dragon"==t.skill?s("span",{staticClass:"icon-home"}):a._e(),"nyan"==t.skill?s("span",[a._v("▲")]):a._e(),"yui"==t.skill?s("span",{staticClass:"icon-ai"}):a._e(),a._v(" "+a._s(t.cp))])]),1==a.info?s("tbody",[s("tr",[a._v("ID "+a._s(t.card))])]):a._e(),1==a.fav?s("tbody",[s("tr",[a._v("CID "+a._s(t.id))])]):a._e(),1==a.card_status?s("tbody",[s("tr",[a._v("✧ "+a._s(t.status))])]):a._e()]):null!==t.card?s("span",[s("thead",[s("td",[43==t.card?s("span",{staticClass:"reflection"},[s("a",{attrs:{href:"/book/1/ZGlkOnBsYzo0aHFqZm43bTZuNWhubzNkb2FtdWhnZWY/index.html"}},[s("img",{attrs:{src:"/card/card_"+t.card+".webp"}})])]):s("span",{staticClass:"reflection"},[s("img",{attrs:{src:"/card/card_"+t.card+".webp"}})])])]),s("tbody",[s("tr",["critical"==t.skill?s("span",{staticClass:"icon-sandar"}):a._e(),"post"==t.skill?s("span",{staticClass:"icon-moon"}):a._e(),"luck"==t.skill?s("span",{staticClass:"icon-api"}):a._e(),"ten"==t.skill?s("span",{staticClass:"icon-power"}):a._e(),"dragon"==t.skill?s("span",{staticClass:"icon-home"}):a._e(),"nyan"==t.skill?s("span",[a._v("▲")]):a._e(),"yui"==t.skill?s("span",{staticClass:"icon-ai"}):a._e(),a._v(" "+a._s(t.cp))])]),1==a.info?s("tbody",[s("tr",[a._v("ID "+a._s(t.card))])]):a._e(),1==a.fav?s("tbody",[s("tr",[a._v("CID "+a._s(t.id))])]):a._e(),1==a.card_status?s("tbody",[s("tr",[a._v("✧ "+a._s(t.status))])]):a._e()]):a._e()])})),0)]):a._e()]):a._e(),0==a.loc.length?s("div",[s("form",{on:{submit:function(s){return s.preventDefault(),a.page.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.userid,expression:"userid"}],attrs:{placeholder:"user",value:"userid"},domProps:{value:a.userid},on:{input:function(s){s.target.composing||(a.userid=s.target.value)}}}),s("input",{attrs:{type:"submit"}})]),s("form",{on:{submit:function(s){return s.preventDefault(),a.submit.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.id,expression:"id"}],attrs:{placeholder:"id",value:"id"},domProps:{value:a.id},on:{input:function(s){s.target.composing||(a.id=s.target.value)}}}),s("input",{attrs:{type:"submit"}})]),a.cards?s("div",{staticClass:"bluesky-card"},[s("p",[a._v("user : "),s("a",{attrs:{href:"/"+a.user.data.username}},[s("code",[a._v(a._s(a.user.data.username))])])]),s("p",[a._v("id : "),s("code",[a._v(a._s(a.user.data.id))])]),s("p",[a._v("did : "),s("code",[a._v(a._s(a.user.data.did))])]),s("p",[a._v("aiten : "),s("code",[a._v(a._s(a.user.data.aiten))])]),s("p",[a._v("handle : "),s("code",[a._v(a._s(a.user.data.handle))])]),1==a.user.data.delete?s("p",[a._v("status : "),s("code",[a._v("delete")])]):a._e(),s("p",[a._v("created_at : "),s("code",[a._v(a._s(a.user.data.created_at))])]),a._l(a.cards.data,(function(t){return s("span",[s("img",{attrs:{src:"/card/card_"+t.card+".webp"}}),a._v(a._s(t.cp)+" ")])}))],2):a._e(),a.ucard?s("div",{staticClass:"bluesky-card"},[s("h3",[s("a",{attrs:{href:"/"+a.userid}},[a._v(a._s(a.userid))])]),a._l(a.ucard.data,(function(t){return s("span",[s("img",{attrs:{src:"/card/card_"+t.card+".webp"}}),a._v(a._s(t.cp)+" ")])}))],2):a._e(),a.record?s("div",{staticClass:"bluesky-record"},a._l(a.record.data,(function(t){return s("li",[!1===t.delete?s("p",[s("span",{staticClass:"menu-right-top"},["0"!=t.fav?s("button",[a._v("✧")]):a._e(),a._v(" "),s("button",[a._v("ID "+a._s(t.id))])])]):a._e(),!1===t.delete?s("p",[s("span",{staticClass:"text"},[s("a",{attrs:{href:"/"+t.username}},[a._v(a._s(t.username))])])]):a._e()])})),0):a._e()]):a._e(),"docs"===a.loc?s("div",[s("p",[a._v("カードは1日に1回、引くことができます")]),s("p",[a._v("カードの排出率は以下のとおりです")]),a._m(5),s("p",[a._v("カードには強さを表す数字が入っています")]),a._m(6),s("h3",[a._v("対戦について")]),a._m(7),s("p",[a._v("ランダムマッチ、手持ちの上位3枚のうち1枚がランダムで選ばれます")]),s("h3",[a._v("レイドについて")]),a._m(8),s("p",[a._v("レイドバトル、手持ちで一番強いカードが選ばれます")]),s("h3",[a._v("mastodon")]),a._m(9),s("p",[a._v("mastodonからもカードを引くことができます")]),s("p",[a._v("ユーザー名が同じの場合、カードは共通です")]),s("h3",[a._v("activitypub mode")]),a._m(10),a._m(11),s("h3",[a._v("秘密")]),a._m(12),a._m(13),a._m(14),s("h3",[a._v("link")]),a._m(15)]):a._e(),"en"===a.loc?s("div",[s("p",[a._v("Cards can be drawn once a day")]),s("p",[a._v("Card emission rates are as follows")]),a._m(16),s("p",[a._v("The cards have numbers(cp) on them indicating their strength.")]),a._m(17),s("h3",[a._v("battle")]),a._m(18),s("p",[a._v("Random match, one of the top 3 cards on hand will be chosen at random")]),s("h3",[a._v("mastodon")]),a._m(19),s("p",[a._v("support mastodon")]),s("h3",[a._v("activitypub")]),a._m(20),s("p",[a._v("activitypub mode disable")]),s("h3",[a._v("secret")]),a._m(21),s("h3",[a._v("link")]),a._m(22)]):a._e(),"owner"===a.loc?s("div",a._l(a.rcards.data,(function(t,e){return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.id,expression:"ii.id !== 0"}]},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.id<15,expression:"ii.id < 15"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})]),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:22==t.id,expression:"ii.id == 22"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),(t.owner,s("span",{staticClass:"card-black"},[s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})])])),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:25==t.id,expression:"ii.id == 25"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})]),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:26==t.id,expression:"ii.id == 26"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})]),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:27==t.id,expression:"ii.id == 27"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),(t.owner,s("span",{staticClass:"card-black"},[s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})])])),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:29==t.id,expression:"ii.id == 29"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),(t.owner,s("span",{staticClass:"card-black"},[s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})])])),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:33==t.id,expression:"ii.id == 33"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),(t.owner,s("span",{staticClass:"card-black"},[s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})])])),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:36==t.id,expression:"ii.id == 36"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),(t.owner,s("span",{staticClass:"card-black"},[s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})])])),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:39==t.id,expression:"ii.id == 39"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})]),t.owner?s("p",[a._v("owner :"),a._l(t.owner,(function(t,e){return s("span",[s("a",{attrs:{href:"/"+t.user}},[a._v(a._s(t.user))]),a._v(", ")])}))],2):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:40==t.id,expression:"ii.id == 40"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})]),t.owner?s("p",[a._v("owner :"),a._l(t.owner,(function(t,e){return s("span",[s("a",{attrs:{href:"/"+t.user}},[a._v(a._s(t.user))]),a._v(", ")])}))],2):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:41==t.id,expression:"ii.id == 41"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})]),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:44==t.id,expression:"ii.id == 44"}],staticClass:"card-owner-one"},[s("button",{attrs:{id:t.id}},[a._v("card : "+a._s(t.h))]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})]),t.owner?s("p",[a._v("owner : "),s("a",{attrs:{href:"/"+t.owner}},[a._v(a._s(t.owner))])]):a._e(),null===t.owner?s("p",[a._v("owner : "),s("code",[a._v("none")])]):a._e()])])])})),0):a._e(),"te"===a.loc?s("div",[a._m(23),a._l(a.rcards.data,(function(t,e){return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.id,expression:"ii.id !== 0"}]},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.id<15,expression:"ii.id < 15"}],staticClass:"card-owner-one"},[s("p",{attrs:{id:t.id}},[s("button",[a._v("id:"+a._s(t.id))])]),s("p",{attrs:{id:t.id}},[a._v("["+a._s(t.ten)+"] "+a._s(t.h)+" / "+a._s(t.id)+"00")]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:29==t.id||33==t.id||36==t.id,expression:"ii.id == 29 || ii.id == 33 || ii.id == 36"}],staticClass:"card-owner-one"},[s("p",{attrs:{id:t.id}},[s("button",[a._v("id:"+a._s(t.id))])]),s("p",{attrs:{id:t.id}},[a._v("["+a._s(t.ten)+"] "+a._s(t.h)+" / "+a._s(t.id)+"00 "),s("span",{staticClass:"icon-power"})]),s("p",[s("img",{attrs:{src:"/card/card_"+t.id+".webp"}})])])])])}))],2):a._e(),"te"===a.loc?s("div",[a._m(24)]):a._e(),"fa"===a.loc?s("div",[a._m(25),a._l(a.fanarts.data,(function(t,e){return s("span",{staticClass:"fan-body"},[!0!==t.delete?s("div",{staticClass:"viewer"},[s("p",[s("a",{attrs:{href:t.link}},[s("img",{attrs:{src:t.img}})])]),s("p",[a._v("author : "),s("a",{attrs:{href:"https://bsky.app/profile/"+t.author}},[a._v(a._s(t.author))])])]):a._e()])}))],2):a._e(),"ph"===a.loc?s("div",[a._m(26),a._l(a.photos.data,(function(t,e){return s("span",{staticClass:"fan-body"},[!0!==t.delete?s("div",{staticClass:"viewer"},[s("p",[s("a",{attrs:{href:t.link}},[s("img",{attrs:{src:t.img}})])]),s("p",[a._v("author : "),s("a",{attrs:{href:"https://bsky.app/profile/"+t.author}},[a._v(a._s(t.author))])])]):a._e()])}))],2):a._e(),"pr"===a.loc?s("div",[s("p",[a._v("お気に入りのカードを1枚だけ登録できます")]),a._m(27),a._m(28),a._m(29),s("h3",[a._v("/fav b")]),a._m(30),s("p",[a._v("1日のバトルポイントを消費します。")])]):a._e(),"m"===a.loc?s("div",[a._l(a.memos.data,(function(t,e){return s("div",{staticClass:"memo-body"},[s("vue-marked",[a._v(a._s(t.content.substring(0,100)))]),""!==t.content.substring(100,120)?s("p",[s("a",{attrs:{href:"https://m.syui.ai/m/"+t.id,target:"_blank"}},[a._v("...")])]):a._e(),t.updatedTs?s("p",{staticClass:"memo-time"},[s("a",{attrs:{href:"https://m.syui.ai/m/"+t.id,target:"_blank"}},[a._v(a._s(a._f("moment")(t.updatedTs,a.format)))]),a._v(" / "),s("a",{attrs:{href:"https://m.syui.ai/u/"+t.creatorUsername,target:"_blank"}},[a._v("@"+a._s(t.creatorUsername))])]):a._e()],1)})),a._l(a.memos_a.data,(function(t,e){return s("div",{staticClass:"memo-body"},[s("vue-marked",[a._v(a._s(t.content.substring(0,100)))]),""!==t.content.substring(100,120)?s("p",[s("a",{attrs:{href:"https://m.syui.ai/m/"+t.id,target:"_blank"}},[a._v("...")])]):a._e(),t.updatedTs?s("p",{staticClass:"memo-time"},[s("a",{attrs:{href:"https://m.syui.ai/m/"+t.id,target:"_blank"}},[a._v(a._s(a._f("moment")(t.updatedTs,a.format)))]),a._v(" / "),s("a",{attrs:{href:"https://m.syui.ai/u/"+t.creatorUsername,target:"_blank"}},[a._v("@"+a._s(t.creatorUsername))])]):a._e()],1)}))],2):a._e(),s("footer",[a._v(" © syui ")])])},i=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"menu"},[s("a",{staticClass:"menu-link",attrs:{href:"/"}},[s("span",{staticClass:"icon-ai"})]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/docs"}},[a._v("docs")]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/en"}},[a._v("en")]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/te"}},[a._v("ten")]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/pr"}},[a._v("fav")]),s("span",{staticClass:"menu-right-top"},[s("a",{staticClass:"menu-link",attrs:{href:"https://yui.syui.ai"}},[s("span",{staticClass:"icon-ai"})])]),s("div",{staticClass:"menu"},[s("p",[s("a",{staticClass:"menu-link",attrs:{href:"/m"}},[a._v("memo")])])])])},function(){var a=this,s=a._self._c;return s("code",[s("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[a._v("@yui.syui.ai")]),a._v(" /ten")])},function(){var a=this,s=a._self._c;return s("code",[s("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[a._v("@yui.syui.ai")]),a._v(" /fav 1234567")])},function(){var a=this,s=a._self._c;return s("code",[s("a",{attrs:{href:"https://bsky.app/profile/yui.syui.ai",target:"_blank"}},[a._v("@yui.syui.ai")]),a._v(" /card")])},function(){var a=this,s=a._self._c;return s("span",{staticClass:"menu-right-top"},[s("button",[a._v("✧")])])},function(){var a=this,s=a._self._c;return s("table",[s("thead",[s("tr",[s("th",[a._v("status")])])]),s("tbody",[s("tr",[s("td",[a._v("normal")]),s("td",[a._v("rare")]),s("td",[a._v("super")])]),s("tr",[s("td",[a._v("90%")]),s("td",[a._v("9%")]),s("td",[a._v("1%")])])])])},function(){var a=this,s=a._self._c;return s("table",[s("thead",[s("tr",[s("th",[a._v("cp")])])]),s("tbody",[s("tr",[s("td",[a._v("normal")]),s("td",[a._v("rare")]),s("td",[a._v("super")])]),s("tr",[s("td",[a._v("+0~200")]),s("td",[a._v("+0~450")]),s("td",[a._v("+0~800")])])])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("@yui.syui.ai /card -b")])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("@yui.syui.ai /card -r")])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[s("a",{attrs:{href:"https://mstdn.syui.ai/@yui",target:"_blank"}},[a._v("@yui@syui.ai")]),a._v(" /card")])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("@yui.syui.ai /card ap=false")])])},function(){var a=this,s=a._self._c;return s("p",[a._v("bsky.socialからactivitypub modeを"),s("code",[a._v("true")]),a._v("/"),s("code",[a._v("false")]),a._v("に切り替える")])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("レアカード")]),a._v("を3枚集めると、いいことがあるかも")])},function(){var a=this,s=a._self._c;return s("p",[a._v("集めた人は"),s("a",{attrs:{href:"https://bsky.app/profile/syui.ai"}},[a._v("@syui")]),a._v("まで連絡してみて")])},function(){var a=this,s=a._self._c;return s("p",[a._v("ただし、リアルカードに変わるのは、こちらの"),s("a",{attrs:{href:"/owner"}},[a._v("所有者")]),a._v("がいないカードに限られます")])},function(){var a=this,s=a._self._c;return s("p",[s("a",{staticClass:"menu-link",attrs:{href:"/fa"}},[a._v("fanart")]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/ph"}},[a._v("photo")]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/te"}},[a._v("aiten")])])},function(){var a=this,s=a._self._c;return s("table",[s("thead",[s("tr",[s("th",[a._v("status")])])]),s("tbody",[s("tr",[s("td",[a._v("normal")]),s("td",[a._v("rare")]),s("td",[a._v("super")])]),s("tr",[s("td",[a._v("90%")]),s("td",[a._v("9%")]),s("td",[a._v("1%")])])])])},function(){var a=this,s=a._self._c;return s("table",[s("thead",[s("tr",[s("th",[a._v("cp")])])]),s("tbody",[s("tr",[s("td",[a._v("normal")]),s("td",[a._v("rare")]),s("td",[a._v("super")])]),s("tr",[s("td",[a._v("+0~200")]),s("td",[a._v("+0~450")]),s("td",[a._v("+0~800")])])])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("@yui.syui.ai /card -b")])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[s("a",{attrs:{href:"https://mstdn.syui.ai/@yui",target:"_blank"}},[a._v("@yui@syui.ai")]),a._v(" /card")])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("@yui.syui.ai /card ap=false")])])},function(){var a=this,s=a._self._c;return s("p",[a._v("card "),s("a",{attrs:{href:"/owner"}},[a._v("owner")])])},function(){var a=this,s=a._self._c;return s("p",[s("a",{staticClass:"menu-link",attrs:{href:"/fa"}},[a._v("fanart")]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/ph"}},[a._v("photo")]),a._v(" "),s("a",{staticClass:"menu-link",attrs:{href:"/te"}},[a._v("aiten")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"iten-start"},[s("h3",[s("span",{staticClass:"icon-power"}),a._v(" AITEN")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"iten-start"},[s("p",[s("code",[a._v("/ten h")]),a._v(" : ヘルプ")]),s("p",[s("code",[a._v("/ten start")]),a._v(" : 7ターンまでに文字をそろえる")]),s("p",[s("span",{staticClass:"icon-power"}),a._v(" はカードを持ってる人しか出せない")]),s("blockquote",[a._v("ACEHIKMOSTUWYZ")])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("/fa <share-url> <img-url>")])])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("/ph <share-url> <img-url>")])])},function(){var a=this,s=a._self._c;return s("p",[a._v("数字はカード一覧の "),s("button",[a._v("fav")]),a._v(" で確認します。")])},function(){var a=this,s=a._self._c;return s("p",[s("img",{attrs:{src:"/img/docs_fav.jpg"}})])},function(){var a=this,s=a._self._c;return s("p",[a._v("もとに戻すときは "),s("code",[a._v("0")]),a._v(" を指定します。")])},function(){var a=this,s=a._self._c;return s("p",[s("code",[a._v("/fav b")]),a._v("でバトルできます。")])}],n=t("bc3a"),c=t.n(n),d=t("b925"),o=t.n(d),l=t("c1df"),_=t.n(l);document.querySelector(".card-wrapper");var u=window.location.pathname.split("/").slice(-1)[0],v={name:"App",metaInfo:{title:"card.syui.ai",titleTemplate:"%s | "+u,meta:[{property:"og:title",content:"%s | "+u}]},data(){return{host:window.location.host,all:null,card:null,cards:null,loc:window.location.pathname.split("/").slice(-1)[0],id:null,record:null,url:null,user:null,userid:null,ucard:null,status:null,premium:!1,premium_text:null,rcards:null,fanarts:null,photos:null,info:!1,time:null,aiten:null,fav:null,card_fav:null,user_fav:null,book_user:null,chara_user:null,card_status:null,cors:"https://cors.syui.ai/",heroku:"https://cors-card.herokuapp.com/",api_url:null,bsky_mode:!1,did:null,memos:null,memos_a:null,memos_api:"https://m.syui.ai/api/v1",memos_md:null}},components:{VueMarked:o.a},filters:{moment:function(a){return _.a.unix(a).format("YYYY.MM.DD")}},mounted(){if("localhost:8080"===window.location.host?this.api_url="/api/":this.api_url="https://api.syui.ai/","owner"===u||"te"===u)c.a.get("/json/card.json").then(a=>this.rcards=a),u.length>1&&c.a.get(url,{crossdomain:!0}).then(a=>this.cards=a);else if("fa"===u)c.a.get("/json/fanart.json").then(a=>this.fanarts=a);else if("ph"===u)c.a.get("/json/photo.json").then(a=>this.photos=a);else if("m"===u){let a=this.memos_api+"/memo?creatorId=1&creatorId=1&tag=yui";c.a.get(a,{crossdomain:!0}).then(a=>this.memos=a),c.a.get(this.memos_api+"/memo?creatorId=3&creatorId=3&tag=yui",{crossdomain:!0}).then(a=>this.memos_a=a)}else{let a=this.api_url+"users?itemsPerPage=3000";c.a.get(a,{crossdomain:!0}).then(a=>{this.record=a,this.id=this.record.data.find(a=>a.username==u).id,this.did=this.record.data.find(a=>a.username==u).did,this.aiten=this.record.data.find(a=>a.username==u).aiten,this.bsky_mode=this.record.data.find(a=>a.username==u).bsky,this.user_fav=this.record.data.find(a=>a.username==u).fav;let s=this.api_url+"users/"+this.id+"/card?itemsPerPage=3000";c.a.get("/json/card.json").then(a=>this.rcards=a),u.length>1&&c.a.get(s,{crossdomain:!0}).then(a=>{this.cards=a;for(let s=1;s<=14;s++)if(this.all=this.cards.data.some(a=>a.card===s),!1===this.all)break})}).catch(a=>console.log(a))}},methods:{submit(){let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=3000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a),c.a.get(this.api_url+"users/"+this.id,{crossdomain:!0}).then(a=>this.user=a)},page(){this.id=this.record.data.find(a=>a.username==this.userid).id;let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.ucard=a)},sort(){if(this.premium){this.premium=!1;let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a)}return this.cards.data.sort((a,s)=>s.cp-a.cp)},sortcard(){if(this.premium){this.premium=!1;let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a)}return this.cards.data.sort((a,s)=>s.card-a.card)},cardinfo(){this.cards={};let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a),this.fav=!1,this.info=!0,this.card_status=!1},cardtime(){this.cards.data=this.cards.data.slice().reverse(),this.time=!0},cardfav(){this.info=!1,this.fav=!0,this.card_status=!1},cardstatus(){this.cards={};let a=this.api_url+"users/"+this.id+"/card?itemsPerPage=2000";c.a.get(a,{crossdomain:!0}).then(a=>this.cards=a),this.info=!1,this.fav=!1,this.card_status=!0},cardurl(){return this.cards.data.sort((a,s)=>{this.premium=!0,"https://card.syui.ai"!==a.url?this.cards.data=this.cards.data.slice().reverse():(a.url=null,a.card=null)})},cardpremium(){return this.cards.data.sort((a,s)=>{if(this.premium=!0,15===a.card)a.url="[unavailable] card == 15";else if(16===a.card)a.url="[unavailable] card == 16";else if(17===a.card)a.url="[unavailable] card == 17";else if(18===a.card)a.url="[unavailable] card == 18";else if(19===a.card)a.url="[unavailable] card == 19";else if(22===a.card)a.url="[unavailable] card == 22";else if(23===a.card)a.url="[unavailable] card == 23";else if(24===a.card)a.url="[unavailable] card == 24";else if(26===a.card)a.url="[unavailable] card == 26";else if(27===a.card)a.url="[unavailable] card == 27";else if(28===a.card)a.url="[unavailable] card == 28";else if(32===a.card)a.url="[unavailable] card == 32";else{if(36!==a.card)return a.card>=1&&a.cp<50?(a.url="[unavailable] rare cp < 50",s.card-a.card):0===s.card&&s.cp>350?(a.url="[unavailable] normal cp > 350",s.card-a.card):0===a.cp?(a.url="[unavailable] cp == 0",s.card-a.card):0===a.card&&"super"===a.status?(a.url="[unavailable] normal == super",s.card-a.card):(a.url=null,void(a.card=null));a.url="[unavailable] card == 36"}})}}},p=v,h=(t("4549"),t("2877")),f=Object(h["a"])(p,r,i,!1,null,null,null),m=f.exports,b=t("58ca");e["a"].use(b["a"]),e["a"].config.productionTip=!1,new e["a"]({render:a=>a(m)}).$mount("#app")}});
//# sourceMappingURL=app.js.map