(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{284:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mux","aria-hidden":"true"}},[t._v("#")]),t._v(" Mux")]),t._v(" "),s("p",[t._v("Mux means multiplexing. In the current proxy tools, only V2Ray has this feature (2018-03-15 Note: there are other software implemented similar feature). It can combine multiple TCP connections into one, saving resources and improving concurrency.")]),t._v(" "),s("p",[t._v("Audience: Uh? What the hell?")]),t._v(" "),s("p",[t._v("Well, translate to plain English:")]),t._v(" "),s("p",[t._v("In the past, there was a person named David. He was a cyclist, a madman and DIY player. So he had a little spare money for online shopping, and he also liked to buy accessories to assemble bicycles. Once he assembled a bicycle, bought burglars, gloves, and a speed metre at an online cycling home. He bought steering gear and transmissions at the A specialty store, bought a frame at the B special store, and bought brakes at the C dealership. Pedals, cushions, wheel sets, cranks in D ...")]),t._v(" "),s("pre",[s("code",[t._v("Four days later ...\n\nAt 9 o'clock, David's mobile phone rang. Connected, David: Hello, hello. \nCourier A: Hello, AA Express, come and pick up the package. David rushed to pick up the courier.\n\nAfter 20 minutes, David: Hello, hello. \nCourier B: Hello, BB Express, come here for express delivery. David went again.\n\nAnother 15 minutes, David: Hello, hello. \nCourier C: Hello, CC Express, come and get the express. David went again.\n\nAfter another half an hour, David: What is express delivery? \nCourier D: DD Express, hurry up. David thought: fuck up!\n\n10 minutes later ...\n")])]),t._v(" "),s("p",[t._v("If you are David, ain't you tired?\nThe computer is also similar, but the work to be done is much less vain:")]),t._v(" "),s("pre",[s("code",[t._v("Browser: I want to see the V2Ray configuration guide.\nComputer: OK, I initiate a TCP connection.\nTelegram: I want to learn from the big guys in the Telegram group of V2Ray.\nComputer: OK, a connection was initiated.\nBrowser: I want to see the manual for V2Ray.\nComputer: OK.\nBrowser: I want a Google search for V2Ray tutorials.\nComputer: OK.\nBrowser: I want to ...\n")])]),t._v(" "),s("p",[t._v("If the normal Internet connection can use the analogy of the white example above, then Mux of V2Ray is:")]),t._v(" "),s("p",[t._v("Chris also assembles bicycles and buys accessories online, just like David, but he buys everything from the XX dealership.")]),t._v(" "),s("pre",[s("code",[t._v("After 4 days, Chris answered the phone: Hello.\nCourier: Hello, SF Express, come and pick up the courier.\nChris bought a bottle of beverages by the way: Bro, the weather is so hot, take some drink. This box is too heavy, can you help me move it to my house?\n")])]),t._v(" "),s("p",[t._v("Mux can't actually increase the speed of the network, but it is more effective for concurrent connections, such as browsing web pages with many pictures and watching live broadcasts. From the perspective of use effect, Mux of V2Ray should be similar to TFO (TCP Fast Open) of Shadowsocks, because the purpose of both is to reduce handshake time, but the implementation is different. TFO can only be opened by setting the system kernel, and Mux is implemented purely at the software level. V2Ray is better in terms of configuration ease. (2018-09-19 Note: It didn't take long to update this paragraph, V2Ray added support of TCP fast open.)")]),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Mux only needs to be configured on the client, the server will automatically recognise it, so only the configuration of the client is provided. That is, just add "),s("code",[t._v('" mux ": {" enabled ": true}')]),t._v(" to outbound or outboundDetour:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listening port")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"socks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the incoming protocol is SOCKS 5")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noauth"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no authenticated")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// outcoming protocol")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serveraddr.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// server address, please edit to your own server ip or domain name")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16823")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// server port")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The user ID must be the same as the server configuration")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The value here should also be the same as the server")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mux"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"update-history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-history","aria-hidden":"true"}},[t._v("#")]),t._v(" Update history")]),t._v(" "),s("ul",[s("li",[t._v("2018-08-30 Modify the layout and description")]),t._v(" "),s("li",[t._v("2018-11-17 Adaption for V4.0 + configuration")])])])},[],!1,null,null,null);e.default=n.exports}}]);