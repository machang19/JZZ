!function(){function a(){this._orig=this,this._ready=!1,this._queue=[],this._err=[]}function b(a,b){setTimeout(function(){a._resume()},b)}function c(a){a instanceof Function?a.apply(this):console.log(a)}function d(a){a instanceof Function?a.apply(this):console.log(a)}function e(a){if(!a.length)return void this._break();var b=a.shift();if(a.length){var c=this;this._slip(d,[function(){e.apply(c,[a])}])}try{this._repair(),b.apply(this)}catch(f){this._break(f.toString())}}function f(a,b){for(var c in a)if(a[c]===b)return;a.push(b)}function g(a,b){for(var c in a)if(a[c]===b)return void a.splice(c,1)}function h(){a.apply(this)}function i(){h.prototype._time||(h.prototype._time=function(){return Date.now()}),h.prototype._startTime=h.prototype._time(),h.prototype.time=function(){return h.prototype._time()-h.prototype._startTime}}function j(a){if(a instanceof Object){var b=a instanceof Array?[]:{};for(var c in a)b[c]=j(a[c]);return b}return a}function k(){this._info.engine=Y._type,this._info.version=Y._version,this._info.inputs=[],this._info.outputs=[],V=[],W=[],Y._allOuts={},Y._allIns={};var a,b;for(a=0;a<Y._outs.length;a++)b=Y._outs[a],b.engine=Y,Y._allOuts[b.name]=b,this._info.outputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:Y._type}),V.push(b);for(a=0;a<Z._outs.length;a++)b=Z._outs[a],this._info.outputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:b.type}),V.push(b);for(a=0;a<Y._ins.length;a++)b=Y._ins[a],b.engine=Y,Y._allIns[b.name]=b,this._info.inputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:Y._type}),W.push(b);for(a=0;a<Z._ins.length;a++)b=Z._ins[a],this._info.inputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:b.type}),W.push(b)}function l(){this._slip(k,[]),Y._refresh()}function m(a,b){if(void 0===a)return b.slice();var c,d,e=[];if(a instanceof RegExp){for(d=0;d<b.length;d++)a.test(b[d].name)&&e.push(b[d]);return e}for(a instanceof Function&&(a=a(b)),a instanceof Array||(a=[a]),c=0;c<a.length;c++)for(d=0;d<b.length;d++)(a[c]+""==d+""||a[c]===b[d].name||a[c]instanceof Object&&a[c].name===b[d].name)&&e.push(b[d]);return e}function n(a,b){var c;c=b instanceof RegExp?"Port matching "+b+" not found":b instanceof Object||void 0===b?"Port not found":'Port "'+b+'" not found',a._crash(c)}function o(a,b){function c(a){return function(){a.engine._openOut(this,a.name)}}var d=m(b,V);if(!d.length)return void n(a,b);for(var f=0;f<d.length;f++)d[f]=c(d[f]);a._slip(e,[d]),a._resume()}function p(a,b){function c(a){return function(){a.engine._openIn(this,a.name)}}var d=m(b,W);if(!d.length)return void n(a,b);for(var f=0;f<d.length;f++)d[f]=c(d[f]);a._slip(e,[d]),a._resume()}function q(a){Y._close(),this._break(),a._resume()}function r(){a.apply(this)}function s(a){this._impl._close&&this._impl._close(this),this._break("closed"),a._resume()}function t(a){this._impl._send(a)}function u(){a.apply(this),this._handles=[],this._outs=[]}function v(a){a instanceof Function?f(this._orig._handles,a):f(this._orig._outs,a)}function w(a){a instanceof Function?g(this._orig._handles,a):g(this._orig._outs,a)}function x(a){this._impl._close&&this._impl._close(this),this._break(),a._resume()}function y(){return"undefined"!=typeof module&&module.exports?void H(require("jazz-midi")):void this._break()}function z(){var a=document.createElement("div");a.style.visibility="hidden",document.body.appendChild(a);var b=document.createElement("object");return b.style.visibility="hidden",b.style.width="0px",b.style.height="0px",b.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",b.isJazz?(document.body.appendChild(b),void I(b)):(b.type="audio/x-jazz",document.body.appendChild(b),b.isJazz?void J(b):void this._break())}function A(){function a(a){K(a),c._resume()}function b(a){c._crash(a)}if(navigator.requestMIDIAccess){var c=this,d={};return this._options&&this._options.sysex===!0&&(d.sysex=!0),navigator.requestMIDIAccess(d).then(a,b),void this._pause()}this._break()}function B(){function a(e){if(b=!0,c||(c=document.getElementById("jazz-midi-msg")),c){var f=[];try{f=JSON.parse(c.innerText)}catch(e){}c.innerText="",document.removeEventListener("jazz-midi-msg",a),"version"===f[0]?(L(c,f[2]),d._resume()):d._crash()}}var b,c,d=this;this._pause(),document.addEventListener("jazz-midi-msg",a);try{document.dispatchEvent(new Event("jazz-midi"))}catch(e){}window.setTimeout(function(){b||d._crash()},0)}function C(){this._pause();var a=this;setTimeout(function(){a._crash()},0)}function D(a){if(!a||!a.engine)return[y,C,B,z,A,F];for(var b,c,d=a.engine instanceof Array?a.engine:[a.engine],e={},f=[],h=[],i={crx:B,npapi:z,webmidi:A},j=["crx","webmidi","npapi"],k=0;k<d.length;k++){var l=d[k].toString().toLowerCase();e[l]||(e[l]=!0,"none"===l&&(b=!0),"etc"===l&&(c=!0),i[l]&&(c?h.push(l):f.push(l),g(j,l)))}if((c||f.length||h.length)&&(b=!1),b)return[C,F];for(var m=[y,C],k=0;k<f.length;k++)m.push(i[f[k]]);if(c){for(var k=0;k<j.length;k++)m.push(i[j[k]]);for(var k=0;k<h.length;k++)m.push(i[h[k]])}return m.push(F),m}function E(a){X=new h,X._options=a,X._push(e,[D(a)]),X.refresh(),X._push(i,[]),X._push(function(){V.length||W.length||this._break()},[]),X._resume()}function F(){Y._type="none",Y._refresh=function(){Y._outs=[],Y._ins=[]}}function G(){Y._pool=[],Y._inArr=[],Y._outArr=[],Y._inMap={},Y._outMap={},Y._version=Y._main.version,Y._refresh=function(){Y._outs=[],Y._ins=[];var a,b;for(a=0;(b=Y._main.MidiOutInfo(a)).length;a++)Y._outs.push({type:Y._type,name:b[0],manufacturer:b[1],version:b[2]});for(a=0;(b=Y._main.MidiInInfo(a)).length;a++)Y._ins.push({type:Y._type,name:b[0],manufacturer:b[1],version:b[2]})},Y._openOut=function(a,b){var c=Y._outMap[b];if(!c){Y._pool.length<=Y._outArr.length&&Y._pool.push(Y._newPlugin()),c={name:b,clients:[],info:{name:b,manufacturer:Y._allOuts[b].manufacturer,version:Y._allOuts[b].version,type:"MIDI-out",engine:Y._type},_close:function(a){Y._closeOut(a)},_send:function(a){this.plugin.MidiOutRaw(a.slice())}};var d=Y._pool[Y._outArr.length];c.plugin=d,Y._outArr.push(c),Y._outMap[b]=c}if(!c.open){var e=c.plugin.MidiOutOpen(b);if(e!==b)return e&&c.plugin.MidiOutClose(),void a._break();c.open=!0}a._orig._impl=c,f(c.clients,a._orig)},Y._openIn=function(a,b){function c(a){return function(b,c){a.handle(b,c)}}var d=Y._inMap[b];if(!d){Y._pool.length<=Y._inArr.length&&Y._pool.push(Y._newPlugin()),d={name:b,clients:[],info:{name:b,manufacturer:Y._allIns[b].manufacturer,version:Y._allIns[b].version,type:"MIDI-in",engine:Y._type},_close:function(a){Y._closeIn(a)},handle:function(a,b){for(var c in this.clients){var d=M(b);this.clients[c]._event(d)}}};var e=Y._pool[Y._inArr.length];d.plugin=e,Y._inArr.push(d),Y._inMap[b]=d}if(!d.open){var g=e.MidiInOpen(b,c(d));if(g!==b)return g&&e.MidiInClose(),void a._break();d.open=!0}a._orig._impl=d,f(d.clients,a._orig)},Y._closeOut=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,b.plugin.MidiOutClose())},Y._closeIn=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,b.plugin.MidiInClose())},Y._close=function(){for(var a in Y._inArr)Y._inArr[a].open&&Y._inArr[a].plugin.MidiInClose()},h.prototype._time=function(){return Y._main.Time()}}function H(a){Y._type="node",Y._main=a,Y._pool=[],Y._newPlugin=function(){return new a.MIDI},G()}function I(a){Y._type="msie",Y._main=a,Y._pool=[a],Y._newPlugin=function(){var b=document.createElement("object");return b.style.visibility="hidden",b.style.width="0px",a.style.height="0px",b.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",document.body.appendChild(b),b.isJazz?b:void 0},G()}function J(a){Y._type="npapi",Y._main=a,Y._pool=[a],Y._newPlugin=function(){var b=document.createElement("object");return b.style.visibility="hidden",b.style.width="0px",a.style.height="0px",b.type="audio/x-jazz",document.body.appendChild(b),b.isJazz?b:void 0},G()}function K(a){Y._type="webmidi",Y._version=43,Y._access=a,Y._inMap={},Y._outMap={},Y._refresh=function(){Y._outs=[],Y._ins=[],Y._access.outputs.forEach(function(a,b){Y._outs.push({type:Y._type,name:a.name,manufacturer:a.manufacturer,version:a.version})}),Y._access.inputs.forEach(function(a,b){Y._ins.push({type:Y._type,name:a.name,manufacturer:a.manufacturer,version:a.version})})},Y._openOut=function(a,b){var c=Y._outMap[b];if(!c){c={name:b,clients:[],info:{name:b,manufacturer:Y._allOuts[b].manufacturer,version:Y._allOuts[b].version,engine:Y._type},_close:function(a){Y._closeOut(a)},_send:function(a){this.dev.send(a.slice())}};Y._access.outputs.forEach(function(a,d){a.name===b&&(c.dev=a)}),c.dev?Y._outMap[b]=c:c=void 0}c?(a._orig._impl=c,f(c.clients,a._orig)):a._break()},Y._openIn=function(a,b){function c(a){return function(b){a.handle(b)}}var d=Y._inMap[b];if(!d){d={name:b,clients:[],info:{name:b,manufacturer:Y._allIns[b].manufacturer,version:Y._allIns[b].version,engine:Y._type},_close:function(a){Y._closeIn(a)},handle:function(a){for(var b in this.clients){var c=M([].slice.call(a.data));this.clients[b]._event(c)}}};Y._access.inputs.forEach(function(a,c){a.name===b&&(d.dev=a)}),d.dev?(d.dev.onmidimessage=c(d),Y._inMap[b]=d):d=void 0}d?(a._orig._impl=d,f(d.clients,a._orig)):a._break()},Y._closeOut=function(a){var b=a._impl;g(b.clients,a._orig)},Y._closeIn=function(a){var b=a._impl;g(b.clients,a._orig)},Y._close=function(){}}function L(a,b){Y._type="crx",Y._version=b,Y._pool=[],Y._inArr=[],Y._outArr=[],Y._inMap={},Y._outMap={},Y._msg=a,Y._newPlugin=function(){var a={id:Y._pool.length};a.id?document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["new"]})):a.ready=!0,Y._pool.push(a)},Y._newPlugin(),Y._refresh=function(){Y._outs=[],Y._ins=[],X._pause(),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["refresh"]}))},Y._openOut=function(a,b){var c=Y._outMap[b];if(!c){Y._pool.length<=Y._outArr.length&&Y._newPlugin();var d=Y._pool[Y._outArr.length];c={name:b,clients:[],info:{name:b,manufacturer:Y._allOuts[b].manufacturer,version:Y._allOuts[b].version,type:"MIDI-out",engine:Y._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openout",d.id,b]}))},_close:function(a){Y._closeOut(a)},_send:function(a){var b=a.slice();b.splice(0,0,"play",d.id),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:b}))}},c.plugin=d,d.output=c,Y._outArr.push(c),Y._outMap[b]=c,d.ready&&c._start()}a._orig._impl=c,f(c.clients,a._orig),c.open||a._pause()},Y._openIn=function(a,b){var c=Y._inMap[b];if(!c){Y._pool.length<=Y._inArr.length&&Y._newPlugin();var d=Y._pool[Y._inArr.length];c={name:b,clients:[],info:{name:b,manufacturer:Y._allIns[b].manufacturer,version:Y._allIns[b].version,type:"MIDI-in",engine:Y._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openin",d.id,b]}))},_close:function(a){Y._closeIn(a)}},c.plugin=d,d.input=c,Y._inArr.push(c),Y._inMap[b]=c,d.ready&&c._start()}a._orig._impl=c,f(c.clients,a._orig),c.open||a._pause()},Y._closeOut=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closeout",b.plugin.id]})))},Y._closeIn=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closein",b.plugin.id]})))},Y._close=function(){},document.addEventListener("jazz-midi-msg",function(a){var b=Y._msg.innerText.split("\n");Y._msg.innerText="";for(var c=0;c<b.length;c++){var d=[];try{d=JSON.parse(b[c])}catch(a){}if(d.length)if("refresh"===d[0]){if(d[1].ins){for(var e=0;c<d[1].ins;c++)d[1].ins[e].type=Y._type;Y._ins=d[1].ins}if(d[1].outs){for(var e=0;c<d[1].outs;c++)d[1].outs[e].type=Y._type;Y._outs=d[1].outs}X._resume()}else if("version"===d[0]){var f=Y._pool[d[1]];f&&(f.ready=!0,f.input&&f.input._start(),f.output&&f.output._start())}else if("openout"===d[0]){var g=Y._pool[d[1]].output;if(g&&(g.open=!0,g.clients))for(var c=0;c<g.clients.length;c++)g.clients[c]._resume()}else if("openin"===d[0]){var g=Y._pool[d[1]].input;if(g&&(g.open=!0,g.clients))for(var c=0;c<g.clients.length;c++)g.clients[c]._resume()}else if("midi"===d[0]){var g=Y._pool[d[1]].input;if(g&&g.clients)for(var c=0;c<g.clients.length;c++){var h=M(d.slice(3));g.clients[c]._event(h)}}}})}function M(a){var b=this instanceof M?this:b=new M;if(!arguments.length)return b;for(var c=a instanceof Array?a:arguments,d=0;d<c.length;d++){var e=c[d];1==d&&b[0]>=128&&b[0]<=175&&(e=M.noteValue(e)),(e!=parseInt(e)||0>e||e>255)&&N(c[d]),b.push(e)}return b}function N(a){throw RangeError("Bad MIDI value: "+a)}function O(a){return(a!=parseInt(a)||0>a||a>15)&&N(a),a}function P(a){return(a!=parseInt(a)||0>a||a>127)&&N(a),a}function Q(a){return(a!=parseInt(a)||0>a||a>16383)&&N(a),127&a}function R(a){return(a!=parseInt(a)||0>a||a>16383)&&N(a),a>>7}function S(a,b){M[a]=function(){return new M(b.apply(0,arguments))},r.prototype[a]=function(){return this.send(b.apply(0,arguments)),this}}function T(a){for(var b=[],c=0;c<a.length;c++)b[c]=(a[c]<16?"0":"")+a[c].toString(16);return b.join(" ")}var U="0.2.5";a.prototype._exec=function(){for(;this._ready&&this._queue.length;){var a=this._queue.shift();this._orig._bad?this._orig._hope&&a[0]==d?(this._orig._hope=!1,a[0].apply(this,a[1])):(this._queue=[],this._orig._hope=!1):a[0]!=d&&a[0].apply(this,a[1])}},a.prototype._push=function(b,c){this._queue.push([b,c]),a.prototype._exec.apply(this)},a.prototype._slip=function(a,b){this._queue.unshift([a,b])},a.prototype._pause=function(){this._ready=!1},a.prototype._resume=function(){this._ready=!0,a.prototype._exec.apply(this)},a.prototype._break=function(a){this._orig._bad=!0,this._orig._hope=!0,a&&this._orig._err.push(a)},a.prototype._repair=function(){this._orig._bad=!1},a.prototype._crash=function(a){this._break(a),this._resume()},a.prototype.err=function(){return j(this._err)},a.prototype.wait=function(a){function c(){}if(!a)return this;c.prototype=this._orig;var d=new c;return d._ready=!1,d._queue=[],this._push(b,[d,a]),d},a.prototype.and=function(a){return this._push(c,[a]),this},a.prototype.or=function(a){return this._push(d,[a]),this},h.prototype=new a,h.prototype.time=function(){return 0},"undefined"!=typeof performance&&performance.now&&(h.prototype._time=function(){return performance.now()}),h.prototype._info={name:"JZZ.js",ver:U},h.prototype.info=function(){return j(this._info)};var V=[],W=[];h.prototype.refresh=function(){return this._push(l,[]),this},h.prototype.openMidiOut=function(a){var b=new r;return this._push(l,[]),this._push(o,[b,a]),b},h.prototype.openMidiIn=function(a){var b=new u;return this._push(l,[]),this._push(p,[b,a]),b},h.prototype.close=function(){var b=new a;return this._push(q,[b]),b},r.prototype=new a,r.prototype.name=function(){return this._impl?this._impl.name:void 0},r.prototype.info=function(){return this._impl?j(this._impl.info):{}},r.prototype.close=function(){var b=new a;return this._push(s,[b]),b},r.prototype.send=function(){return this._push(t,[M.apply(null,arguments)]),this},r.prototype.note=function(a,b,c,d){return this.noteOn(a,b,c),d&&this.wait(d).noteOff(a,b),this},u.prototype=new a,u.prototype.name=r.prototype.name,u.prototype.info=r.prototype.info,u.prototype._event=function(a){for(var b in this._handles)this._handles[b].apply(this,[a]);for(var b in this._outs)this._outs[b]._send(a)},u.prototype.connect=function(a){return this._push(v,[a]),this},u.prototype.disconnect=function(a){return this._push(w,[a]),this},u.prototype.close=function(){var b=new a;return this._push(x,[b]),b};var X,Y={},Z={_outs:[],_ins:[]};JZZ=function(a){return X||E(a),X},JZZ.info=function(){return h.prototype.info()},M.prototype=[],M.prototype.constructor=M;var $={};M.noteValue=function(a){return $[a.toString().toLowerCase()]};var _={c:0,d:2,e:4,f:5,g:7,a:9,b:11,h:11};for(var aa in _)for(var ba=0;12>ba;ba++){var ca=_[aa]+12*ba;if(ca>127)break;$[aa+ba]=ca,ca>0&&($[aa+"b"+ba]=ca-1,$[aa+"bb"+ba]=ca-2),127>ca&&($[aa+"#"+ba]=ca+1,$[aa+"##"+ba]=ca+2)}for(var ba=0;128>ba;ba++)$[ba]=ba;var da={noteOff:function(a,b){return[128+O(a),P(M.noteValue(b)),0]},noteOn:function(a,b,c){return[144+O(a),P(M.noteValue(b)),P(c)]},aftertouch:function(a,b,c){return[160+O(a),P(M.noteValue(b)),P(c)]},control:function(a,b,c){return[176+O(a),P(b),P(c)]},program:function(a,b){return[192+O(a),P(b)]},pressure:function(a,b){return[208+O(a),P(b)]},pitchBend:function(a,b){return[224+O(a),Q(b),R(b)]},bankMSB:function(a,b){return[176+O(a),0,P(b)]},bankLSB:function(a,b){return[176+O(a),32,P(b)]},modMSB:function(a,b){return[176+O(a),1,P(b)]},modLSB:function(a,b){return[176+O(a),33,P(b)]},breathMSB:function(a,b){return[176+O(a),2,P(b)]},breathLSB:function(a,b){return[176+O(a),34,P(b)]},footMSB:function(a,b){return[176+O(a),4,P(b)]},footLSB:function(a,b){return[176+O(a),36,P(b)]},portamentoMSB:function(a,b){return[176+O(a),5,P(b)]},portamentoLSB:function(a,b){return[176+O(a),37,P(b)]},volumeMSB:function(a,b){return[176+O(a),7,P(b)]},volumeLSB:function(a,b){return[176+O(a),39,P(b)]},balanceMSB:function(a,b){return[176+O(a),8,P(b)]},balanceLSB:function(a,b){return[176+O(a),40,P(b)]},panMSB:function(a,b){return[176+O(a),10,P(b)]},panLSB:function(a,b){return[176+O(a),42,P(b)]},expressionMSB:function(a,b){return[176+O(a),11,P(b)]},expressionLSB:function(a,b){return[176+O(a),43,P(b)]},damper:function(a,b){return[176+O(a),64,b?127:0]},portamento:function(a,b){return[176+O(a),65,b?127:0]},sostenuto:function(a,b){return[176+O(a),66,b?127:0]},soft:function(a,b){return[176+O(a),67,b?127:0]},allSoundOff:function(a){return[176+O(a),120,0]},allNotesOff:function(a){return[176+O(a),123,0]}};for(var aa in da)S(aa,da[aa]);M.prototype.toString=function(){if(!this.length)return"empty";var a=T(this);if(this[0]<128)return a;a+=" -- ";var b={241:"Time Code",242:"Song Position",243:"Song Select",244:"Undefined",245:"Undefined",246:"Tune request",248:"Timing clock",249:"Undefined",250:"Start",251:"Continue",252:"Stop",253:"Undefined",254:"Active Sensing",255:"Reset"}[this[0]];if(b)return a+b;var c=this[0]>>4;return(b={8:"Note Off",10:"Aftertouch",12:"Program Change",13:"Channel Aftertouch",14:"Pitch Wheel"}[c])?a+b:9==c?a+(this[2]?"Note On":"Note Off"):11!=c?a:(b={0:"Bank Select MSB",1:"Modulation Wheel MSB",2:"Breath Controller MSB",4:"Foot Controller MSB",5:"Portamento Time MSB",6:"Data Entry MSB",7:"Channel Volume MSB",8:"Balance MSB",10:"Pan MSB",11:"Expression Controller MSB",12:"Effect Control 1 MSB",13:"Effect Control 2 MSB",16:"General Purpose Controller 1 MSB",17:"General Purpose Controller 2 MSB",18:"General Purpose Controller 3 MSB",19:"General Purpose Controller 4 MSB",32:"Bank Select LSB",33:"Modulation Wheel LSB",34:"Breath Controller LSB",36:"Foot Controller LSB",37:"Portamento Time LSB",38:"Data Entry LSB",39:"Channel Volume LSB",40:"Balance LSB",42:"Pan LSB",43:"Expression Controller LSB",44:"Effect control 1 LSB",45:"Effect control 2 LSB",48:"General Purpose Controller 1 LSB",49:"General Purpose Controller 2 LSB",50:"General Purpose Controller 3 LSB",51:"General Purpose Controller 4 LSB",64:"Damper Pedal On/Off",65:"Portamento On/Off",66:"Sostenuto On/Off",67:"Soft Pedal On/Off",68:"Legato Footswitch",69:"Hold 2",70:"Sound Controller 1",71:"Sound Controller 2",72:"Sound Controller 3",73:"Sound Controller 4",74:"Sound Controller 5",75:"Sound Controller 6",76:"Sound Controller 7",77:"Sound Controller 8",78:"Sound Controller 9",79:"Sound Controller 10",80:"General Purpose Controller 5",81:"General Purpose Controller 6",82:"General Purpose Controller 7",83:"General Purpose Controller 8",84:"Portamento Control",88:"High Resolution Velocity Prefix",91:"Effects 1 Depth",92:"Effects 2 Depth",93:"Effects 3 Depth",94:"Effects 4 Depth",95:"Effects 5 Depth",96:"Data Increment",97:"Data Decrement",98:"Non-Registered Parameter Number LSB",99:"Non-Registered Parameter Number MSB",100:"Registered Parameter Number LSB",101:"Registered Parameter Number MSB",120:"All Sound Off",121:"Reset All Controllers",122:"Local Control On/Off",123:"All Notes Off",124:"Omni Mode Off",125:"Omni Mode On",126:"Mono Mode On",127:"Poly Mode On"}[this[1]],b||(b="Undefined"),a+b)},JZZ.MIDI=M,JZZ.lib={},JZZ.lib.openMidiOut=function(a,b){var c=new r;return b._openOut(c,a),c},JZZ.lib.openMidiIn=function(a,b){var c=new u;return b._openIn(c,a),c},JZZ.lib.registerMidiOut=function(a,b){var c=b._info(a);for(var d in Z._outs)if(Z._outs[d].name==c.name)return!1;return c.engine=b,Z._outs.push(c),X&&X._bad&&(X._repair(),X._resume()),!0},JZZ.lib.registerMidiIn=function(a,b){var c=b._info(a);for(var d in Z._ins)if(Z._ins[d].name==c.name)return!1;return c.engine=b,Z._ins.push(c),X&&X._bad&&(X._repair(),X._resume()),!0},JZZ.util={},JZZ.util.iosSound=function(){if(JZZ.util.iosSound=function(){},window){var a=window.AudioContext||window.webkitAudioContext;if(a){var b=new a;b.createGain||(b.createGain=b.createGainNode);var c=b.createOscillator(),d=b.createGain();d.gain.value=0,c.connect(d),d.connect(b.destination),c.start||(c.start=c.noteOn),c.stop||(c.stop=c.noteOff),c.start(0),c.stop(1)}}}}();