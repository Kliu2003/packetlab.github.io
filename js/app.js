(function(e){function t(t){for(var n,r,s=t[0],c=t[1],d=t[2],l=0,u=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(u.length)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-17eda3bc":1,"chunk-5e852056":1,"chunk-365afb2f":1,"chunk-b86fb47e":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var d=o[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===i))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],l=d.getAttribute("data-href");if(l===n||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],f.parentNode.removeChild(f),a(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var u=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}i[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0f21":function(e,t,a){e.exports=a.p+"img/pktlab_logo.svg"},"2fb3":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="4678"},4861:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main-header",{attrs:{title:e.pageTitle}}),a("ac-grid",[a("ac-col",{attrs:{cols:"3","lg-cols":"2"}},[a("side-nav",{attrs:{hidden:e.navHidden}})],1),a("ac-col",{attrs:{cols:e.navHidden||e.mobileView?12:9,"lg-cols":e.navHidden||e.mobileView?12:10}},[a("router-view")],1)],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-wrapper"},[n("ac-nav",{staticClass:"main-header",attrs:{position:"top",fixed:""}},[n("div",{class:{"toggle--bars":!0,active:!e.navHidden},on:{click:function(t){return e.toggleNavHidden()}}},[n("div"),n("div"),n("div")]),n("div",[n("h1",[e._v(e._s(e.title))])]),n("div",{staticClass:"logo-wrapper"},[n("img",{staticClass:"logo",attrs:{src:a("0f21"),alt:"PacketLab Logo"},on:{click:e.returnHome}})])])],1)},s=[],c=(a("b0c0"),{props:{title:{type:String}},data:function(){return{}},methods:{returnHome:function(){"About"!=this.$router.currentRoute.name&&this.$router.push({name:"About"})},toggleNavHidden:function(){this.$store.commit("setNavHidden",!this.navHidden)}},computed:{navHidden:function(){return this.$store.state.navHidden}}}),d=c,l=(a("7d27"),a("2877")),u=Object(l["a"])(d,o,s,!1,null,"f8fc0fda",null),f=u.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ac-nav",{staticClass:"main-nav",attrs:{position:"left",hidden:e.navHidden}},[a("div",{staticClass:"nav--links"},[a("router-link",{attrs:{to:{name:"About"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.route,r=t.href;return[a("a",{class:{active:e.currentRouteName==n.name},attrs:{href:r}},[e._v(e._s(n.meta.title))])]}}])}),a("router-link",{attrs:{to:{name:"Installation"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.route,r=t.href;return[a("a",{class:{active:e.currentRouteName==n.name},attrs:{href:r}},[e._v(e._s(n.meta.title))])]}}])}),a("router-link",{attrs:{to:{name:"Data",query:{range:"24hours"}}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.route,r=t.href;return[a("a",{class:{active:e.currentRouteName==n.name},attrs:{href:r}},[e._v(e._s(n.meta.title))])]}}])}),a("router-link",{attrs:{to:{name:"Monitors",query:{range:"24hours"}}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.route,r=t.href;return[a("a",{class:{active:e.currentRouteName==n.name},attrs:{href:r}},[e._v(e._s(n.meta.title))])]}}])})],1)])},m=[],h={data:function(){return{currentRouteName:"About"}},watch:{$route:{deep:!0,immediate:!0,handler:function(e){this.currentRouteName=e.name}}},computed:{navHidden:function(){return this.$store.state.navHidden}}},v=h,b=(a("7592"),Object(l["a"])(v,p,m,!1,null,"01cee566",null)),g=b.exports,j={data:function(){return{pageTitle:"",mobileView:!1}},components:{MainHeader:f,SideNav:g},watch:{$route:{immediate:!0,deep:!0,handler:function(e){this.pageTitle=e.meta.currentPageTitle}}},methods:{updateViewSizing:function(){this.mobileView=window.innerWidth<576,this.$store.commit("setNavHidden",this.mobileView)}},computed:{navHidden:function(){return this.$store.state.navHidden}},mounted:function(){this.updateViewSizing(),window.addEventListener("resize",this.updateViewSizing)}},w=j,k=(a("5c0b"),Object(l["a"])(w,r,i,!1,null,null,null)),_=k.exports,y=(a("d3b7"),a("8c4f")),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"main-content"},[a("h1",{attrs:{id:"internet-measurement-during-the-covid-19-pandemic-with-packetlab-front-page-"}},[e._v("Internet measurement during the COVID-19 pandemic with PacketLab")]),a("h2",{attrs:{id:"overview"}},[e._v("Overview")]),e._m(0),a("h2",{attrs:{id:"what-is-packetlab-"}},[e._v("What is PacketLab?")]),e._m(1),a("h2",{attrs:{id:"why-packetlab-why-even-do-this-"}},[e._v("Why PacketLab? Why even do this?")]),a("p",[e._v("Contrary to utilizing existing measurement infrastructure, in this project, we opt to use PacketLab due to the general functionality provided where a much larger variety of different experiments can be executed without needing to change the measurement endpoint in any way. With this project, we hope to showcase the diverse ability of PacketLab as well as put the existing prototype of PacketLab to test and identify some possible improvements for the PacketLab design.")]),a("p",[e._v("In addition, as we go through the COVID-19 pandemic with social distancing being practiced, Internet usage is expected to rise with additional multimedia traffic introduced due to the utilization of video conferencing software and multimedia entertainment services. It would therefore be interesting to perform network measurements to see the actual impact of the pandemic on Internet performance, especially in terms of availability of critical network services.")]),a("h2",{attrs:{id:"what-will-we-do-with-the-deployed-endpoints-"}},[e._v("What will we do with the deployed endpoints?")]),a("p",[e._v("For the deployed endpoints, we currently plan to perform Internet measurement experiments such as measuring latency for queries to public DNS resolvers (e.g. Google public DNS) and local DNS resolvers, as well as measurement of the available bandwidth from each endpoint to the controller.")]),a("p",[e._v("As the PacketLab reference endpoint implementation is currently still under development, it may be possible that we will distribute updated endpoint binaries to deployed endpoint Docker containers for bug fix and feature enhancement. The process of updating will be done securely with digital signatures utilized to prevent tampering with the sent binary.")]),a("p",[e._v("Due to this project being temporary during the period of the COVID-19 pandemic, a kill switch mechanism is embedded in the endpoint where when signaled, the execution of the endpoint will be stopped and the Docker container will exit afterward. The kill switch will be turned on after the measurement experiments have all been completed.")]),a("p",[e._v("In addition, the execution of the endpoint will also be halted if the endpoint failed to reach the pktlab.caida.org:20557 HTTP server for 3 consecutive days to prevent the existence of lingering measurement endpoints that do not have Internet connectivity.")]),a("h3",{attrs:{id:"usage-patterns"}},[e._v("Usage patterns")]),a("h4",{attrs:{id:"network-bandwidth-required"}},[e._v("Network bandwidth required")]),a("p",[e._v("A combined total of all traffic incurred due to experiments and endpoint periodic update checking will top at around 5MB per hour. Additional traffic may be incurred due to endpoint update retrieving but is expected to be infrequent and should result in less than 1 MB of additional traffic.")]),a("h4",{attrs:{id:"type-of-network-traffic-to-expect-for-endpoint"}},[e._v("Type of network traffic to expect for endpoint")]),e._m(2),e._m(3),a("h2",{attrs:{id:"how-do-i-participate-in-the-project-"}},[e._v("How do I participate in the project?")]),a("p",[e._v("To participate in this project, join us by setting up an endpoint on your local machine via following the provided steps in the "),a("router-link",{attrs:{to:{name:"Installation",query:{target:"setting-up-and-running-an-endpoint-container-on-docker"}}}},[a("strong",[e._v("Setup, Manipulation, and Removal of PacketLab Endpoints")])]),e._v(" page.")],1)])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("In this project, we will use PacketLab prototype endpoints to measure the availability of Internet critical services during the period of the COVID-19 pandemic. Our main goals are "),a("strong",[e._v("(1) to test the PacketLab prototype endpoints and search for possible improvements to PacketLab")]),e._v(", "),a("strong",[e._v("(2) to showcase the diverse functionality provided by PacketLab in real-world network measurements")]),e._v(", and "),a("strong",[e._v("(3) obtain statistics regarding the availability of critical Internet services during the pandemic")]),e._v(". Some measurements that we are currently planning of doing are measuring DNS query latencies from measurement endpoints, as well as measuring available bandwidth of endpoints. We hope that via the results of this project, we can further improve the existing PacketLab design and also obtain more information on the variation of network resource consumption during this time.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"https://www.caida.org/publications/papers/2017/packetlab/packetlab.pdf"}},[a("strong",[e._v("PacketLab")])]),e._v(" is a universal measurement endpoint interface that lowers the barriers faced by experimenters and measurement endpoint operators. PacketLab is built on two key ideas: It moves the measurement logic out of the endpoint to a separate experiment control server, making each endpoint a lightweight packet source/sink. At the same time, it provides a way to delegate access to measurement endpoints while retaining fine-grained control over how endpoints are used by others, allowing research groups to share measurement infrastructure with little overhead. PacketLab is currently still under development. However, a prototype reference endpoint implementation as a stand-alone binary (packaged in a Docker image) is available to run network measurement experiments utilizing TCP and UDP services, which we will use to perform network measurements in this project.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("Periodic outgoing TCP connection and bidirectional TCP traffic against "),a("code",[e._v("pktlab.caida.org")]),e._v(" port "),a("code",[e._v("20556")]),e._v(" for PacketLab experiment operations.")]),a("li",[e._v("Periodic HTTP request against "),a("code",[e._v("pktlab.caida.org:20557")]),e._v(" HTTP server for potential updates and kill switch polling.")]),a("li",[e._v("One-time TCP connection against "),a("code",[e._v("pktlab.caida.org")]),e._v(" port "),a("code",[e._v("20558")]),e._v(" for endpoint ID assignment.")]),a("li",[e._v("DNS traffic for "),a("code",[e._v("pktlab.caida.org")]),e._v(" domain resolving.")]),a("li",[e._v("Experiment-specific traffic as follows:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Exp. Name")]),a("th",[e._v("Type of Traffic")])])]),a("tbody",[a("tr",[a("td",[a("code",[e._v("DNS_quad_X")])]),a("td",[e._v("DNS traffic (A record query for "),a("code",[e._v("www.example.com")]),e._v(" and response) against the public DNS resolver at "),a("code",[e._v("X.X.X.X")]),e._v(" over UDP.")])]),a("tr",[a("td",[a("code",[e._v("DNS_local")])]),a("td",[e._v("DNS traffic (A record query for "),a("code",[e._v("www.example.com")]),e._v(" and response) against the endpoint local DNS resolver over UDP.")])]),a("tr",[a("td",[a("code",[e._v("avail_band")])]),a("td",[e._v("Outgoing UDP traffic toward "),a("code",[e._v("pktlab.caida.org")]),e._v(" port "),a("code",[e._v("10241")]),e._v(" for available bandwidth measuring using the "),a("a",{attrs:{href:"https://www.cs.cmu.edu/afs/cs/project/cmcl/archive/papers/igi-tr.pdf"}},[e._v("packet pair technique")]),e._v(". Potential incoming UDP traffic (one packet per experiment) for time synchronization using the NTP clock sync algorithm.")])])])])}],L={data:function(){return{}}},D=L,z=(a("ae4f"),Object(l["a"])(D,x,P,!1,null,"1a872b77",null)),N=z.exports;n["a"].use(y["a"]);var S=[{path:"/",name:"About",component:N,meta:{title:"About"}},{path:"/installation",name:"Installation",component:function(){return a.e("chunk-17eda3bc").then(a.bind(null,"31e6"))},meta:{title:"Installation"}},{path:"/data-overview",name:"Data",component:function(){return Promise.all([a.e("chunk-5e852056"),a.e("chunk-365afb2f")]).then(a.bind(null,"9352"))},meta:{title:"Data Overview"}},{path:"/monitors/:id?",name:"Monitors",component:function(){return Promise.all([a.e("chunk-5e852056"),a.e("chunk-b86fb47e")]).then(a.bind(null,"c3c0"))},meta:{title:"Monitors"}}],T=new y["a"]({mode:"hash",base:"",routes:S});T.beforeEach((function(e,t,a){var n=e.meta.title;"Monitors"==e.name&&e.params.id&&(n+=" "+e.params.id),e.meta.currentPageTitle=n,document.title=n+" | PacketLab",a()})),T.onError((function(e){/loading chunk \d* failed./i.test(e.message)&&window.location.reload()}));var O=T,H=(a("4160"),a("b64b"),a("159b"),a("2f62")),E=a("c1df"),C=a.n(E);n["a"].use(H["a"]);var I="/",A=new H["a"].Store({state:{dataWeekURL:{data:{url:"https://cors-anywhere.herokuapp.com/http://pktlab.caida.org:20557/data_week.jsonl",format:"jsonl"},experiments:{url:I+"data/experiments.jsonl",format:"jsonl"},endpoints:{url:"https://cors-anywhere.herokuapp.com/http://pktlab.caida.org:20557/endpoints.jsonl",format:"jsonl"}},dataURL:{data:{url:"https://cors-anywhere.herokuapp.com/http://pktlab.caida.org:20557/data.jsonl",format:"jsonl"},experiments:{url:I+"data/experiments.jsonl",format:"jsonl"},endpoints:{url:"https://cors-anywhere.herokuapp.com/http://pktlab.caida.org:20557/endpoints.jsonl",format:"jsonl"}},dataLoaded:{week:!1,all:!1},data:null,experiments:null,endpoints:null,navHidden:!1},mutations:{setData:function(e,t){var a=t.data,n=t.timeframe;Object.keys(a).forEach((function(t){e[t]=a[t]})),e.dataLoaded[n]=!0},setNavHidden:function(e,t){e.navHidden=t}},actions:{loadData:function(e,t){var a=e.commit,n=e.state,r=604800,i=C()().format("X"),o=i-t>r,s=o?"all":"week";return new Promise((function(e,t){if(n.dataLoaded[s])e();else{var r=new Worker("workers/fetch-data.worker.js");r.addEventListener("message",(function(n){r.terminate();var i=n.data;"finished"==i.status?(a("setData",{data:i.message,timeframe:s}),e()):t()})),o?r.postMessage({status:"load",url:n.dataURL}):r.postMessage({status:"load",url:n.dataWeekURL})}}))}},modules:{}}),$=a("a43d"),q=a("225e"),M=a("28bd");n["a"].use($["a"]),n["a"].use(q["a"]),n["a"].use(M["a"]),n["a"].config.productionTip=!1,new n["a"]({router:O,store:A,render:function(e){return e(_)}}).$mount("#app")},"57c8":function(e,t,a){},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},7592:function(e,t,a){"use strict";var n=a("4861"),r=a.n(n);r.a},"7d27":function(e,t,a){"use strict";var n=a("57c8"),r=a.n(n);r.a},"9c0c":function(e,t,a){},ae4f:function(e,t,a){"use strict";var n=a("2fb3"),r=a.n(n);r.a}});
//# sourceMappingURL=app.js.map