(this["webpackJsonpxiaomi-mi-smart-rubik-cube"]=this["webpackJsonpxiaomi-mi-smart-rubik-cube"]||[]).push([[0],{12:function(e,n,t){e.exports=t(21)},17:function(e,n,t){},19:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(8),i=t.n(o),u=(t(17),t(6)),c=t.n(u),v=t(9),d=t(2),l=t(10),m=t(3),f=t(4),s=(navigator,function(e){return e.getPrimaryService("0000aadb-0000-1000-8000-00805f9b34fb").then((function(e){return window.mservice=e,e.getCharacteristic("0000aadc-0000-1000-8000-00805f9b34fb").then((function(e){return window.mcharacteristic=e,e.startNotifications(),e}))}))}),b=function(e){return e&&e.gatt.connected?e.gatt.disconnect():Promise.resolve()},p=function(e,n,t,a,r,o,i,u){var c=0;return 1===n?(e[t]=u,e[a]=o,e[r]=i):2===n?(e[t]=i,e[a]=u,e[r]=o):3===n?(e[t]=o,e[a]=i,e[r]=u):c=1,c},g=function(e,n,t,a,r,o,i,u){var c=0;return 2===n?(e[t]=u,e[a]=o,e[r]=i):1===n?(e[t]=i,e[a]=u,e[r]=o):3===n?(e[t]=o,e[a]=i,e[r]=u):c=1,c},w=function(e,n,t,a,r,o){var i=0;return i|=1===n?p(e,t,a,r,o,1,2,3):2===n?p(e,t,a,r,o,1,3,4):3===n?p(e,t,a,r,o,1,4,5):4===n?p(e,t,a,r,o,1,5,2):5===n?p(e,t,a,r,o,6,3,2):6===n?p(e,t,a,r,o,6,4,3):7===n?p(e,t,a,r,o,6,5,4):8===n?p(e,t,a,r,o,6,2,5):2},x=function(e,n,t,a,r,o){var i=0;return i|=1===n?g(e,t,a,r,o,1,2,3):2===n?g(e,t,a,r,o,1,3,4):3===n?g(e,t,a,r,o,1,4,5):4===n?g(e,t,a,r,o,1,5,2):5===n?g(e,t,a,r,o,6,3,2):6===n?g(e,t,a,r,o,6,4,3):7===n?g(e,t,a,r,o,6,5,4):8===n?g(e,t,a,r,o,6,2,5):2},y=function(e,n,t,a,r,o){var i=0;return 1===n?(e[t]=r,e[a]=o):2===n?(e[t]=o,e[a]=r):i=3,i},h=function(e,n,t,a,r){var o=0;return 1===n?o|=y(e,t,a,r,1,2):2===n?o|=y(e,t,a,r,1,3):3===n?o|=y(e,t,a,r,1,4):4===n?o|=y(e,t,a,r,1,5):5===n?o|=y(e,t,a,r,2,3):6===n?o|=y(e,t,a,r,4,3):7===n?o|=y(e,t,a,r,4,5):8===n?o|=y(e,t,a,r,2,5):9===n?o|=y(e,t,a,r,6,2):10===n?o|=y(e,t,a,r,6,3):11===n?o|=y(e,t,a,r,6,4):12===n?o|=y(e,t,a,r,6,5):o=4,o},W=function(e,n,t,a,r){var o=e[r];e[r]=e[a],e[a]=e[t],e[t]=e[n],e[n]=o},Y=function(e){var n=function(e){var n=new Uint8Array(55),t=0,a=new Uint8Array(8),r=new Uint8Array(8),o=new Uint8Array(12),i=new Uint8Array(12);if(20!==e.length){for(var u=0;u<55;u++)n[u]=0;return n}a[0]=e[0]>>4,a[1]=15&e[0],a[2]=e[1]>>4,a[3]=15&e[1],a[4]=e[2]>>4,a[5]=15&e[2],a[6]=e[3]>>4,a[7]=15&e[3],r[0]=e[4]>>4,r[1]=15&e[4],r[2]=e[5]>>4,r[3]=15&e[5],r[4]=e[6]>>4,r[5]=15&e[6],r[6]=e[7]>>4,r[7]=15&e[7],o[0]=e[8]>>4,o[1]=15&e[8],o[2]=e[9]>>4,o[3]=15&e[9],o[4]=e[10]>>4,o[5]=15&e[10],o[6]=e[11]>>4,o[7]=15&e[11],o[8]=e[12]>>4,o[9]=15&e[12],o[10]=e[13]>>4,o[11]=15&e[13];for(var c=0;c<12;c+=1)i[c]=0;if(0!==(128&e[14])?i[0]=2:i[0]=1,0!==(64&e[14])?i[1]=2:i[1]=1,0!==(32&e[14])?i[2]=2:i[2]=1,0!==(16&e[14])?i[3]=2:i[3]=1,0!==(8&e[14])?i[4]=2:i[4]=1,0!==(4&e[14])?i[5]=2:i[5]=1,0!==(2&e[14])?i[6]=2:i[6]=1,0!==(1&e[14])?i[7]=2:i[7]=1,0!==(128&e[15])?i[8]=2:i[8]=1,0!==(64&e[15])?i[9]=2:i[9]=1,0!==(32&e[15])?i[10]=2:i[10]=1,0!==(16&e[15])?i[11]=2:i[11]=1,n[32]=1,n[41]=2,n[50]=3,n[14]=4,n[23]=5,n[5]=6,t|=w(n,a[0],r[0],34,43,54),t|=x(n,a[1],r[1],36,52,18),t|=w(n,a[2],r[2],30,16,27),t|=x(n,a[3],r[3],28,25,45),t|=x(n,a[4],r[4],1,48,37),t|=w(n,a[5],r[5],3,12,46),t|=x(n,a[6],r[6],9,21,10),t|=w(n,a[7],r[7],7,39,19),t|=h(n,o[0],i[0],31,44),t|=h(n,o[1],i[1],35,53),t|=h(n,o[2],i[2],33,17),t|=h(n,o[3],i[3],29,26),t|=h(n,o[4],i[4],40,51),t|=h(n,o[5],i[5],15,49),t|=h(n,o[6],i[6],13,24),t|=h(n,o[7],i[7],42,22),t|=h(n,o[8],i[8],4,38),t|=h(n,o[9],i[9],2,47),t|=h(n,o[10],i[10],6,11),t|=h(n,o[11],i[11],8,20),W(n,1,7,9,3),W(n,4,8,6,2),W(n,37,19,10,46),W(n,38,20,11,47),W(n,39,21,12,48),W(n,40,22,13,49),W(n,41,23,14,50),W(n,42,24,15,51),W(n,43,25,16,52),W(n,44,26,17,53),W(n,45,27,18,54),W(n,34,28,30,36),W(n,31,29,33,35),0!==t)for(var v=0;v<55;v++)n[v]=0;return n}(function(e){var n=new Uint8Array(20),t=[80,175,152,32,170,119,19,137,218,230,63,95,46,130,106,175,163,243,20,7,167,21,168,232,143,175,42,125,126,57,254,87,217,91,85,215];if(20!==e.byteLength)return e;if(167!==e.getUint8(18))return e;var a=e.getUint8(19);a&=15;var r=e.getUint8(19);r>>=4;for(var o=0;o<19;o+=1){n[o]=e.getUint8(o);var i=n,u=o;i[u]=i[u]-t[a+o];var c=n,v=o;c[v]=c[v]-t[r+o]}return n}(e));return Array.from(n).slice(1)},E=(t(19),t(0)),O=t(11),B=(t(20),new E.n);B.setSize(600,600),document.getElementById("viewer").appendChild(B.domElement);var G=new E.i;G.background=new E.b(15790320);var R=new E.g(75,1,.1,1e3);R.position.set(0,0,30);var k=new O.a(R,B.domElement);k.enabled=!0,k.rotateSpeed=1,k.zoomSpeed=1.2,k.addEventListener("change",H),k.minDistance=5,k.maxDistance=30,k.enablePan=!1;var S=0,U=39752,A=16766208,C=11997748,D=16777215,L=16734208,M=18093,N=[new E.f({color:S}),new E.f({color:U}),new E.f({color:A}),new E.f({color:C}),new E.f({color:D}),new E.f({color:L}),new E.f({color:M})],j=new E.a(3,3,3,3,3,3);function I(e){j.clearGroups();for(var n,t=0,a=48;a>-1;a-=6)j.addGroup(a,6,e[t]),t++;var r=[2,5,8,1,4,7,0,3,6];n=216,r.forEach((function(a){j.addGroup(n+6*a,6,e[t]),t++})),n=108,(r=[2,5,8,1,4,7,0,3,6]).forEach((function(a){j.addGroup(n+6*a,6,e[t]),t++}));for(var o=54;o<108;o+=6)j.addGroup(o,6,e[t]),t++;n=270,(r=[6,3,0,7,4,1,8,5,2]).forEach((function(a){j.addGroup(n+6*a,6,e[t]),t++})),n=162,(r=[2,5,8,1,4,7,0,3,6]).forEach((function(a){j.addGroup(n+6*a,6,e[t]),t++}))}var J=new E.e(j,N);function H(){B.render(G,R)}J.rotateZ(3.14),J.rotateY(2.355),J.rotateX(.785),G.add(J),R.position.z=5;var T;function z(e){var n=!1,t="";return T.forEach((function(a){var r=a.index.map((function(n){return e[n]}));console.log(a.name+" Actual    value:"+JSON.stringify(r)),console.log(a.name+" Reference value:"+JSON.stringify(a.value)),JSON.stringify(r)==JSON.stringify(a.value)&&(t+=a.name+" ",console.log("Block found!"),n=!0)})),n?"Block(s) Found. "+t:"No block found."}T=[{index:[0,1,2,3,4,5,10,11,36,37,45,46,47],value:[6,6,6,6,6,6,5,5,3,3,4,4,4],name:"BWW"},{index:[3,4,5,6,7,8,9,10,18,19,20,37,38],value:[6,6,6,6,6,6,3,3,4,4,4,5,5],name:"BWY"},{index:[0,1,3,4,6,7,18,19,36,37,38,46,47],value:[6,6,6,6,6,6,3,3,4,4,4,5,5],name:"BWR"},{index:[1,2,4,5,7,8,9,10,11,19,20,45,46],value:[6,6,6,6,6,6,4,4,4,5,5,3,3],name:"BWO"},{index:[16,17,30,31,32,33,34,35,42,43,51,52,53],value:[5,5,1,1,1,1,1,1,3,3,4,4,4],name:"GWW"},{index:[15,16,24,25,26,27,28,29,30,31,32,43,44],value:[3,3,4,4,4,1,1,1,1,1,1,5,5],name:"GWY"},{index:[24,25,27,28,30,31,33,34,42,43,44,52,53],value:[3,3,1,1,1,1,1,1,4,4,4,5,5],name:"GWR"},{index:[15,16,17,25,26,28,29,31,32,34,35,51,52],value:[4,4,4,5,5,1,1,1,1,1,1,3,3],name:"GWO"},{index:[0,3,30,33,36,37,39,40,42,43,47,50,53],value:[6,6,1,1,3,3,3,3,3,3,4,4,4],name:"RWW"},{index:[3,6,18,21,24,27,30,37,38,40,41,43,44],value:[1,1,4,4,4,6,6,3,3,3,3,3,3],name:"RWY"},{index:[0,3,6,18,21,36,37,38,39,40,41,47,50],value:[4,4,4,6,6,3,3,3,3,3,3,1,1],name:"RWB"},{index:[21,24,27,30,33,39,40,41,42,43,44,50,53],value:[1,1,4,4,4,3,3,3,3,3,3,6,6],name:"RWG"},{index:[2,5,10,11,13,14,16,17,32,35,45,48,51],value:[6,6,5,5,5,5,5,5,1,1,4,4,4],name:"OWW"},{index:[5,8,9,10,12,13,15,16,20,23,26,29,32],value:[1,1,5,5,5,5,5,5,4,4,4,6,6],name:"OWY"},{index:[2,5,8,9,10,11,12,13,14,20,23,45,48],value:[4,4,4,5,5,5,5,5,5,6,6,1,1],name:"OWB"},{index:[12,13,14,15,16,17,23,26,29,32,35,48,51],value:[5,5,5,5,5,5,1,1,4,4,4,6,6],name:"OWG"}].concat([{index:[0,1,2,3,4,5,10,11,36,37,45,46,47],value:[6,6,6,6,6,6,3,3,5,5,2,2,2],name:"BYW"},{index:[3,4,5,6,7,8,9,10,18,19,20,37,38],value:[6,6,6,6,6,6,5,5,2,2,2,3,3],name:"BYY"},{index:[0,1,3,4,6,7,18,19,36,37,38,46,47],value:[6,6,6,6,6,6,5,5,2,2,2,3,3],name:"BYR"},{index:[1,2,4,5,7,8,9,10,11,19,20,45,46],value:[6,6,6,6,6,6,2,2,2,3,3,5,5],name:"BYO"},{index:[16,17,30,31,32,33,34,35,42,43,51,52,53],value:[3,3,1,1,1,1,1,1,5,5,2,2,2],name:"GYW"},{index:[15,16,24,25,26,27,28,29,30,31,32,43,44],value:[5,5,2,2,2,1,1,1,1,1,1,3,3],name:"GYY"},{index:[24,25,27,28,30,31,33,34,42,43,44,52,53],value:[5,5,1,1,1,1,1,1,2,2,2,3,3],name:"GYR"},{index:[15,16,17,25,26,28,29,31,32,34,35,51,52],value:[2,2,2,3,3,1,1,1,1,1,1,5,5],name:"GYO"},{index:[0,3,30,33,36,37,39,40,42,43,47,50,53],value:[1,1,6,6,3,3,3,3,3,3,2,2,2],name:"RYW"},{index:[3,6,18,21,24,27,30,37,38,40,41,43,44],value:[6,6,2,2,2,1,1,3,3,3,3,3,3],name:"RYY"},{index:[0,3,6,18,21,36,37,38,39,40,41,47,50],value:[2,2,2,1,1,3,3,3,3,3,3,6,6],name:"RYB"},{index:[21,24,27,30,33,39,40,41,42,43,44,50,53],value:[6,6,2,2,2,3,3,3,3,3,3,1,1],name:"RYG"},{index:[2,5,10,11,13,14,16,17,32,35,45,48,51],value:[1,1,5,5,5,5,5,5,6,6,2,2,2],name:"OYW"},{index:[5,8,9,10,12,13,15,16,20,23,26,29,32],value:[6,6,5,5,5,5,5,5,2,2,2,1,1],name:"OYY"},{index:[2,5,8,9,10,11,12,13,14,20,23,45,48],value:[2,2,2,5,5,5,5,5,5,1,1,6,6],name:"OYB"},{index:[12,13,14,15,16,17,23,26,29,32,35,48,51],value:[5,5,5,5,5,5,6,6,2,2,2,1,1],name:"OYG"}]),console.log(T);var P=["g","y","r","w","o","b"],q=function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(d.a)(this,t),(a=n.call(this,e)).state={cubeState:"bbbbbbbbboooooooooyyyyyyyyygggggggggrrrrrrrrrwwwwwwwww"},a.cubeRawState=[6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4],a.device=null,a.moves=[],a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){I(this.cubeRawState),H()}},{key:"componentWillUnmount",value:function(){b(this.device)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("button",{onClick:Object(v.a)(c.a.mark((function n(){var t,a,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["0000aadb-0000-1000-8000-00805f9b34fb"]}).then((function(e){return e.gatt.connect().then((function(n){return window.mdevice=e,window.mserver=n,{device:e,server:n}}))}));case 2:return t=n.sent,a=t.server,r=t.device,e.device=r,n.next=8,s(a);case 8:n.sent.addEventListener("characteristicvaluechanged",(function(n){var t=n.target.value,a=Y(t);e.moves.push(a),I(a),H();var r=Y(t).map((function(e){return P[e-1]})).join("");e.setState({cubeState:r});var o=[];e.moves.forEach((function(e){o.push(e+="<br />")}));var i=z(a);document.getElementById("moveCount").innerHTML="<p>Moves: "+o.length+"</p><br />",document.getElementById("moveDisplay").innerHTML="<p>"+i+"</p><br /><p> "+o+"</p>"})),r.addEventListener("gattserverdisconnected",(function(){b(r)}));case 11:case"end":return n.stop()}}),n)})))},"Connect cube"),r.a.createElement("button",{onClick:function(){e.moves=[];var n=[];document.getElementById("moveCount").innerHTML="<p>Moves: "+n.length+"</p><br />",document.getElementById("moveDisplay").innerHTML="<p>"+n+"</p><br />"}},"Reset"),r.a.createElement("div",{id:"moveDisplay"}),r.a.createElement("div",{id:"moveCount"})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.aa4f59f8.chunk.js.map