(this["webpackJsonpxiaomi-mi-smart-rubik-cube"]=this["webpackJsonpxiaomi-mi-smart-rubik-cube"]||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},17:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),a=t(9),r=t.n(a),c=(t(17),t(7)),u=t.n(c),s=t(10),l=t(2),v=t(3),m=t(4),d=t(5),f=(navigator,function(e){return e.getPrimaryService("0000aadb-0000-1000-8000-00805f9b34fb").then((function(e){return window.mservice=e,e.getCharacteristic("0000aadc-0000-1000-8000-00805f9b34fb").then((function(e){return window.mcharacteristic=e,e.startNotifications(),e}))}))}),h=function(e){return e&&e.gatt.connected?e.gatt.disconnect():Promise.resolve()},p=function(e,n,t,o,i,a,r,c){var u=0;return 1===n?(e[t]=c,e[o]=a,e[i]=r):2===n?(e[t]=r,e[o]=c,e[i]=a):3===n?(e[t]=a,e[o]=r,e[i]=c):u=1,u},g=function(e,n,t,o,i,a,r,c){var u=0;return 2===n?(e[t]=c,e[o]=a,e[i]=r):1===n?(e[t]=r,e[o]=c,e[i]=a):3===n?(e[t]=a,e[o]=r,e[i]=c):u=1,u},b=function(e,n,t,o,i,a){var r=0;return r|=1===n?p(e,t,o,i,a,1,2,3):2===n?p(e,t,o,i,a,1,3,4):3===n?p(e,t,o,i,a,1,4,5):4===n?p(e,t,o,i,a,1,5,2):5===n?p(e,t,o,i,a,6,3,2):6===n?p(e,t,o,i,a,6,4,3):7===n?p(e,t,o,i,a,6,5,4):8===n?p(e,t,o,i,a,6,2,5):2},w=function(e,n,t,o,i,a){var r=0;return r|=1===n?g(e,t,o,i,a,1,2,3):2===n?g(e,t,o,i,a,1,3,4):3===n?g(e,t,o,i,a,1,4,5):4===n?g(e,t,o,i,a,1,5,2):5===n?g(e,t,o,i,a,6,3,2):6===n?g(e,t,o,i,a,6,4,3):7===n?g(e,t,o,i,a,6,5,4):8===n?g(e,t,o,i,a,6,2,5):2},y=function(e,n,t,o,i,a){var r=0;return 1===n?(e[t]=i,e[o]=a):2===n?(e[t]=a,e[o]=i):r=3,r},x=function(e,n,t,o,i){var a=0;return 1===n?a|=y(e,t,o,i,1,2):2===n?a|=y(e,t,o,i,1,3):3===n?a|=y(e,t,o,i,1,4):4===n?a|=y(e,t,o,i,1,5):5===n?a|=y(e,t,o,i,2,3):6===n?a|=y(e,t,o,i,4,3):7===n?a|=y(e,t,o,i,4,5):8===n?a|=y(e,t,o,i,2,5):9===n?a|=y(e,t,o,i,6,2):10===n?a|=y(e,t,o,i,6,3):11===n?a|=y(e,t,o,i,6,4):12===n?a|=y(e,t,o,i,6,5):a=4,a},S=function(e,n,t,o,i){var a=e[i];e[i]=e[o],e[o]=e[t],e[t]=e[n],e[n]=a},k=function(e){var n=function(e){var n=new Uint8Array(55),t=0,o=new Uint8Array(8),i=new Uint8Array(8),a=new Uint8Array(12),r=new Uint8Array(12);if(20!==e.length){for(var c=0;c<55;c++)n[c]=0;return n}o[0]=e[0]>>4,o[1]=15&e[0],o[2]=e[1]>>4,o[3]=15&e[1],o[4]=e[2]>>4,o[5]=15&e[2],o[6]=e[3]>>4,o[7]=15&e[3],i[0]=e[4]>>4,i[1]=15&e[4],i[2]=e[5]>>4,i[3]=15&e[5],i[4]=e[6]>>4,i[5]=15&e[6],i[6]=e[7]>>4,i[7]=15&e[7],a[0]=e[8]>>4,a[1]=15&e[8],a[2]=e[9]>>4,a[3]=15&e[9],a[4]=e[10]>>4,a[5]=15&e[10],a[6]=e[11]>>4,a[7]=15&e[11],a[8]=e[12]>>4,a[9]=15&e[12],a[10]=e[13]>>4,a[11]=15&e[13];for(var u=0;u<12;u+=1)r[u]=0;if(0!==(128&e[14])?r[0]=2:r[0]=1,0!==(64&e[14])?r[1]=2:r[1]=1,0!==(32&e[14])?r[2]=2:r[2]=1,0!==(16&e[14])?r[3]=2:r[3]=1,0!==(8&e[14])?r[4]=2:r[4]=1,0!==(4&e[14])?r[5]=2:r[5]=1,0!==(2&e[14])?r[6]=2:r[6]=1,0!==(1&e[14])?r[7]=2:r[7]=1,0!==(128&e[15])?r[8]=2:r[8]=1,0!==(64&e[15])?r[9]=2:r[9]=1,0!==(32&e[15])?r[10]=2:r[10]=1,0!==(16&e[15])?r[11]=2:r[11]=1,n[32]=1,n[41]=2,n[50]=3,n[14]=4,n[23]=5,n[5]=6,t|=b(n,o[0],i[0],34,43,54),t|=w(n,o[1],i[1],36,52,18),t|=b(n,o[2],i[2],30,16,27),t|=w(n,o[3],i[3],28,25,45),t|=w(n,o[4],i[4],1,48,37),t|=b(n,o[5],i[5],3,12,46),t|=w(n,o[6],i[6],9,21,10),t|=b(n,o[7],i[7],7,39,19),t|=x(n,a[0],r[0],31,44),t|=x(n,a[1],r[1],35,53),t|=x(n,a[2],r[2],33,17),t|=x(n,a[3],r[3],29,26),t|=x(n,a[4],r[4],40,51),t|=x(n,a[5],r[5],15,49),t|=x(n,a[6],r[6],13,24),t|=x(n,a[7],r[7],42,22),t|=x(n,a[8],r[8],4,38),t|=x(n,a[9],r[9],2,47),t|=x(n,a[10],r[10],6,11),t|=x(n,a[11],r[11],8,20),S(n,1,7,9,3),S(n,4,8,6,2),S(n,37,19,10,46),S(n,38,20,11,47),S(n,39,21,12,48),S(n,40,22,13,49),S(n,41,23,14,50),S(n,42,24,15,51),S(n,43,25,16,52),S(n,44,26,17,53),S(n,45,27,18,54),S(n,34,28,30,36),S(n,31,29,33,35),0!==t)for(var s=0;s<55;s++)n[s]=0;return n}(function(e){var n=new Uint8Array(20),t=[80,175,152,32,170,119,19,137,218,230,63,95,46,130,106,175,163,243,20,7,167,21,168,232,143,175,42,125,126,57,254,87,217,91,85,215];if(20!==e.byteLength)return e;if(167!==e.getUint8(18))return e;var o=e.getUint8(19);o&=15;var i=e.getUint8(19);i>>=4;for(var a=0;a<19;a+=1){n[a]=e.getUint8(a);var r=n,c=a;r[c]=r[c]-t[o+a];var u=n,s=a;u[s]=u[s]-t[i+a]}return n}(e));return Array.from(n).slice(1)},E=(t(19),t(0)),W=t(11),L=new E.n;L.setSize(500,500),document.getElementById("viewer").appendChild(L.domElement);var O=new E.i;O.background=new E.b(15790320);var C=new E.g(75,1,.1,1e3);C.position.set(0,0,30);var B=new W.a(C,L.domElement);B.enabled=!0,B.rotateSpeed=1,B.zoomSpeed=1.2,B.addEventListener("change",I),B.minDistance=5,B.maxDistance=30,B.enablePan=!1;var T=0,Y=39752,R=16766208,M=11997748,D=16777215,F=16734208,G=18093,A=[new E.f({color:T}),new E.f({color:Y}),new E.f({color:R}),new E.f({color:M}),new E.f({color:D}),new E.f({color:F}),new E.f({color:G})],U=new E.a(3,3,3,3,3,3);function j(e){U.clearGroups();for(var n,t=0,o=48;o>-1;o-=6)U.addGroup(o,6,e[t]),t++;var i=[2,5,8,1,4,7,0,3,6];n=216,i.forEach((function(o){U.addGroup(n+6*o,6,e[t]),t++})),n=108,(i=[2,5,8,1,4,7,0,3,6]).forEach((function(o){U.addGroup(n+6*o,6,e[t]),t++}));for(var a=54;a<108;a+=6)U.addGroup(a,6,e[t]),t++;n=270,(i=[6,3,0,7,4,1,8,5,2]).forEach((function(o){U.addGroup(n+6*o,6,e[t]),t++})),n=162,(i=[2,5,8,1,4,7,0,3,6]).forEach((function(o){U.addGroup(n+6*o,6,e[t]),t++}))}var N=new E.e(U,A);function I(){L.render(O,C)}N.rotateZ(3.14),N.rotateY(2.355),N.rotateX(.785),O.add(N),C.position.z=5;var J=function(){function e(n){Object(l.a)(this,e),this.currentTimeCallback=n,this.running=!1,this.animFrameBound=void 0,this.startTime=Date.now(),this.animFrameBound=this.animFrame.bind(this)}return Object(v.a)(e,[{key:"isRunning",value:function(){return this.running}},{key:"start",value:function(){this.startTime=Date.now(),this.running=!0,requestAnimationFrame(this.animFrameBound)}},{key:"getTime",value:function(){return this.elapsed()}},{key:"stop",value:function(){return this.running=!1,this.elapsed()}},{key:"reset",value:function(){}},{key:"animFrame",value:function(){this.running&&requestAnimationFrame(this.animFrameBound)}},{key:"elapsed",value:function(){return Date.now()-this.startTime}}]),e}();function H(e){var n=Math.floor(e/6e4<<0),t=Math.floor(e/1e3%60),o=("00"+Math.floor(e%1e3)).substr(-3,2);return n>0?n+":"+("0"+t).slice(-2)+"."+o:t+"."+o}var P,q=function(){function e(n){Object(l.a)(this,e),this.solvedState=[6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4],this.timer=new J,this.solveTime=0}return Object(v.a)(e,[{key:"isSolved",value:function(e){return JSON.stringify(e)===JSON.stringify(this.solvedState)}},{key:"stateTransition",value:function(e,n){if(n&&!this.timer.isRunning()&&(this.timer.start(),this.solveTime=0,console.log("Timer running")),this.timer.isRunning()){var t=this.timer.getTime();document.getElementById("timer").innerHTML="<p>"+H(t)+"</p>"}return this.timer.isRunning()&&this.isSolved(e)&&(this.solveTime=this.timer.stop(),document.getElementById("timer").innerHTML="<p>"+H(this.solveTime)+"</p>",console.log("Timer stopped")),!1}}]),e}();function z(e){var n=[];return P.forEach((function(t){var o=t.index.map((function(n){return e[n]}));JSON.stringify(o)===JSON.stringify(t.value)&&n.push(t.name)})),n}P=[{index:[0,1,2,3,4,5,10,11,36,37,45,46,47],value:[6,6,6,6,6,6,5,5,3,3,4,4,4],name:"BWW"},{index:[3,4,5,6,7,8,9,10,18,19,20,37,38],value:[6,6,6,6,6,6,3,3,4,4,4,5,5],name:"BWY"},{index:[0,1,3,4,6,7,18,19,36,37,38,46,47],value:[6,6,6,6,6,6,3,3,4,4,4,5,5],name:"BWR"},{index:[1,2,4,5,7,8,9,10,11,19,20,45,46],value:[6,6,6,6,6,6,4,4,4,5,5,3,3],name:"BWO"},{index:[16,17,30,31,32,33,34,35,42,43,51,52,53],value:[5,5,1,1,1,1,1,1,3,3,4,4,4],name:"GWW"},{index:[15,16,24,25,26,27,28,29,30,31,32,43,44],value:[3,3,4,4,4,1,1,1,1,1,1,5,5],name:"GWY"},{index:[24,25,27,28,30,31,33,34,42,43,44,52,53],value:[3,3,1,1,1,1,1,1,4,4,4,5,5],name:"GWR"},{index:[15,16,17,25,26,28,29,31,32,34,35,51,52],value:[4,4,4,5,5,1,1,1,1,1,1,3,3],name:"GWO"},{index:[0,3,30,33,36,37,39,40,42,43,47,50,53],value:[6,6,1,1,3,3,3,3,3,3,4,4,4],name:"RWW"},{index:[3,6,18,21,24,27,30,37,38,40,41,43,44],value:[1,1,4,4,4,6,6,3,3,3,3,3,3],name:"RWY"},{index:[0,3,6,18,21,36,37,38,39,40,41,47,50],value:[4,4,4,6,6,3,3,3,3,3,3,1,1],name:"RWB"},{index:[21,24,27,30,33,39,40,41,42,43,44,50,53],value:[1,1,4,4,4,3,3,3,3,3,3,6,6],name:"RWG"},{index:[2,5,10,11,13,14,16,17,32,35,45,48,51],value:[6,6,5,5,5,5,5,5,1,1,4,4,4],name:"OWW"},{index:[5,8,9,10,12,13,15,16,20,23,26,29,32],value:[1,1,5,5,5,5,5,5,4,4,4,6,6],name:"OWY"},{index:[2,5,8,9,10,11,12,13,14,20,23,45,48],value:[4,4,4,5,5,5,5,5,5,6,6,1,1],name:"OWB"},{index:[12,13,14,15,16,17,23,26,29,32,35,48,51],value:[5,5,5,5,5,5,1,1,4,4,4,6,6],name:"OWG"}].concat([{index:[0,1,2,3,4,5,10,11,36,37,45,46,47],value:[6,6,6,6,6,6,3,3,5,5,2,2,2],name:"BYW"},{index:[3,4,5,6,7,8,9,10,18,19,20,37,38],value:[6,6,6,6,6,6,5,5,2,2,2,3,3],name:"BYY"},{index:[0,1,3,4,6,7,18,19,36,37,38,46,47],value:[6,6,6,6,6,6,5,5,2,2,2,3,3],name:"BYR"},{index:[1,2,4,5,7,8,9,10,11,19,20,45,46],value:[6,6,6,6,6,6,2,2,2,3,3,5,5],name:"BYO"},{index:[16,17,30,31,32,33,34,35,42,43,51,52,53],value:[3,3,1,1,1,1,1,1,5,5,2,2,2],name:"GYW"},{index:[15,16,24,25,26,27,28,29,30,31,32,43,44],value:[5,5,2,2,2,1,1,1,1,1,1,3,3],name:"GYY"},{index:[24,25,27,28,30,31,33,34,42,43,44,52,53],value:[5,5,1,1,1,1,1,1,2,2,2,3,3],name:"GYR"},{index:[15,16,17,25,26,28,29,31,32,34,35,51,52],value:[2,2,2,3,3,1,1,1,1,1,1,5,5],name:"GYO"},{index:[0,3,30,33,36,37,39,40,42,43,47,50,53],value:[1,1,6,6,3,3,3,3,3,3,2,2,2],name:"RYW"},{index:[3,6,18,21,24,27,30,37,38,40,41,43,44],value:[6,6,2,2,2,1,1,3,3,3,3,3,3],name:"RYY"},{index:[0,3,6,18,21,36,37,38,39,40,41,47,50],value:[2,2,2,1,1,3,3,3,3,3,3,6,6],name:"RYB"},{index:[21,24,27,30,33,39,40,41,42,43,44,50,53],value:[6,6,2,2,2,3,3,3,3,3,3,1,1],name:"RYG"},{index:[2,5,10,11,13,14,16,17,32,35,45,48,51],value:[1,1,5,5,5,5,5,5,6,6,2,2,2],name:"OYW"},{index:[5,8,9,10,12,13,15,16,20,23,26,29,32],value:[6,6,5,5,5,5,5,5,2,2,2,1,1],name:"OYY"},{index:[2,5,8,9,10,11,12,13,14,20,23,45,48],value:[2,2,2,5,5,5,5,5,5,1,1,6,6],name:"OYB"},{index:[12,13,14,15,16,17,23,26,29,32,35,48,51],value:[5,5,5,5,5,5,6,6,2,2,2,1,1],name:"OYG"}]);var X=[[0,2,6,8],[9,11,15,17],[18,20,24,26],[27,29,33,35],[36,38,42,44],[45,47,51,53]],Z=["[1,1,1,1]","[2,2,2,2]","[3,3,3,3]","[4,4,4,4]","[5,5,5,5]","[6,6,6,6]"];function $(e){var n=!0;return X.forEach((function(t){var o=JSON.stringify(t.map((function(n){return e[n]})));Z.includes(o)||(n=!1)})),n}var K=[18,19,20,21,22,23,24,25,26,45,46,47,48,49,50,51,52,53],Q=function(e){return[2,4].includes(e)};function V(e){var n="";return e.forEach((function(t,o,i){var a=H(t.time-e[Math.max(o-1,0)].time),r=H(t.time),c='\n        <tr>\n            <th scope="row" >'.concat(t.name,"</th>\n            <td >").concat(t.block,"</td>\n            <td >").concat(t.movecount-e[Math.max(o-1,0)].movecount,"</td>\n            <td>").concat(t.movecount,"</td>\n            <td>").concat(a,"</td>\n            <td>").concat(r,"</td>\n        </tr>");n+=c})),'<table border="1">\n    <caption>\n      Solve Stats\n    </caption>\n    <col>\n    <col>\n    <colgroup span="3"></colgroup>\n    <thead>\n      <tr>\n        <th scope="col" rowspan="2">Stage</th>\n        <th scope="col" rowspan="2">Name</th>\n        <th colspan="2" scope="colgroup">Movecount</th>\n        <th colspan="2" scope="colgroup">Time</th>\n      </tr>\n      <tr>\n        <th scope="col">Stage</th>\n        <th scope="col">Cumulative</th>\n        <th scope="col">Stage</th>\n        <th scope="col">Cumulative</th>\n      </tr>\n    </thead>\n    <tbody>\n    '.concat(n,"\n    </tbody></table>")}var _=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).cubeRawState=[6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4],o.device=null,o.ready=!1,o.timerController=new q,o.moveList=[],o.fbFound=!1,o.sbFound=!1,o.cmllDone=!1,o.eoDone=!1,o.solved=!1,o.moveCount=-1,o.solveStats=[],o.prevMove=0,o}return Object(v.a)(t,[{key:"componentDidMount",value:function(){j(this.cubeRawState),I()}},{key:"componentWillUnmount",value:function(){h(this.device)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement("button",{onClick:Object(s.a)(u.a.mark((function n(){var t,o,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["0000aadb-0000-1000-8000-00805f9b34fb"]}).then((function(e){return e.gatt.connect().then((function(n){return window.mdevice=e,window.mserver=n,{device:e,server:n}}))}));case 2:return t=n.sent,o=t.server,i=t.device,e.device=i,n.next=8,f(o);case 8:n.sent.addEventListener("characteristicvaluechanged",(function(n){var t=n.target.value,o=k(t);!1===e.timerController.stateTransition(o,e.ready)&&(e.ready=!1);var i=e.timerController.timer.getTime();console.log("Time between: "+(i-e.prevMove)),i-e.prevMove>80&&e.moveCount++,e.prevMove=i,0===e.solveStats.length&&e.solveStats.push({name:"Start",block:"",movecount:0,time:0}),j(o),I(),e.moveList.push(o);var a,r=z(o);r.length>0&&!e.fbFound&&(e.fbFound=!0,console.log("First block: "+r+" "+i),e.solveStats.push({name:"FB",block:r[0].slice(0,2),movecount:e.moveList.length-1,time:i})),r.length>1&&e.fbFound&&!e.sbFound&&(e.sbFound=!0,console.log("First and second block: "+r+" "+i),r.forEach((function(n){n.slice(0,2)===e.solveStats[1].block||e.solveStats.push({name:"SB",block:n.slice(0,2),movecount:e.moveList.length-1,time:i})}))),!e.cmllDone&&e.sbFound&&$(o)&&(console.log("CMLL done "+i),e.solveStats.push({name:"CMLL",block:"",movecount:e.moveList.length-1,time:i}),e.cmllDone=!0),!e.eoDone&&e.cmllDone&&(a=o,K.map((function(e){return a[e]})).every(Q))&&(console.log("LSE/EO done "+i),e.solveStats.push({name:"EO",block:"",movecount:e.moveList.length-1,time:i}),e.eoDone=!0),!e.solved&&e.eoDone&&e.timerController.isSolved(o)&&(console.log("Cube solved! "+i),e.solveStats.push({name:"LSE",block:"",movecount:e.moveList.length-1,time:i}),e.solved=!0),document.getElementById("moveCount").innerHTML="<p>Moves: "+e.moveCount+" (estimated), "+(e.moveList.length-1)+" (raw).</p>",document.getElementById("moveDisplay").innerHTML=V(e.solveStats)})),i.addEventListener("gattserverdisconnected",(function(){h(i)}));case 11:case"end":return n.stop()}}),n)})))},"Connect cube"),i.a.createElement("button",{onClick:function(){e.moves=[],e.moveCount=0,e.fbFound=!1,e.sbFound=!1,e.cmllDone=!1,e.eoDone=!1,e.solved=!1,e.solveStats=[],e.moveList=[],e.prevMove=0,e.moveList.push(e.cubeRawState),e.timerController.timer.stop(),document.getElementById("moveCount").innerHTML="<p>Moves: "+e.moveCount+" (estimated), "+(e.moveList.length-1)+" (raw).</p>",document.getElementById("moveDisplay").innerHTML=V(e.solveStats),e.ready=!0}},"Ready"),i.a.createElement("div",{id:"timer",align:"center"},i.a.createElement("p",null,"0.00")),i.a.createElement("div",{id:"moveCount",align:"center"}),i.a.createElement("div",{id:"moveDisplay",align:"center"})))}}]),t}(i.a.Component),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/smart-roux-timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/smart-roux-timer","/service-worker.js");ee?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(n,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.fcb64d6e.chunk.js.map