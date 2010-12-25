/*! JooScript basics v0.09(alpha) (20101225)
	- copyright 2009-2010, Evgeny Burzak <http://burzak.com/proj/jooscript-basics>
	- released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var __PUBLIC__=0,__PRIVATE__=1,__STATIC__=2,__GLOBAL__=4,__FINAL__=8,__PROTECTED__=16,__FROZEN__=32,__INTERNAL__=49;__FILE__=__PATH__=__FUNC__=__CLASS__=__GROUP__=__LINE__="";
(function(){if(typeof $jooscript=="undefined"){(function(){var i=typeof window;$globals=(i=!(i=="undefined"||i=="object"&&window==null))?window:this;var m=!!$globals.navigator;$root=$globals.document?document:{};$isCLI=!m;$isWorker=!$isCLI&&!i})();addDOMLoadEvent=function(){function i(){i.done=true;for(clearInterval(l);y=m.shift();)y();if(u)u.onreadystatechange=""}var m=[],l,u,y,s;$globals.__init__=i;return function(v){if(i.done)return v();if(!m[0]){!$root.__w3c_fake&&$root.addEventListener&&$root.addEventListener("DOMContentLoaded",
i,false);eval("/*@cc_on @*/");eval('/*@if(@_win32)document.write("<script id=__ie_onload defer src=//0></scr"+"ipt>");script=document.getElementById("__ie_onload");script.onreadystatechange=function(){if(this.readyState=="complete")try{__init__()}catch(e){};};document.onreadystatechange=function(){if(document.readyState=="complete"){try{__init__()}catch(e){};document.onreadystatechange=null;}}@*//*@end@*/');if(!$isCLI&&!$isWorker)if(/WebKit/i.test(navigator.userAgent))l=setInterval(function(){/loaded|complete/.test(document.readyState)&&
i()},10);s=$globals.onload;$globals.onload=function(){i();s&&s()}}m.push(v)}}();var ba=function(){function i(){var b;if(i.instantize)return this;else if(this.__class__!==i){i.instantize=true;b=new i}else b=this;i.instantize=false;b.useCapture=false;b.__class__=i;b.__id__=i.instances.length;i.instances.push(b);var c=i.members.__new__.__func__,g=i.members.when.__func__,k=i.members.dispatch.__func__,o=i.members.remove.__func__;c(b);b.when=function(w,t,j){return g(b,w,t,j,false)};b.once=function(w,t,
j){return g(b,w,t,j,true)};b.dispatch=function(w,t){return k(b,w,t)};b.remove=function(w,t){return o(b,w,t)};return b}function m(b){b=(typeof b=="string"?b:b.type).toLowerCase();if(b==y)return s;return b}function l(b,c){for(var g,k,o=0;o<c.length;o++)if(g=c[o])if(g.type==b){k=g.handler.call(g.context,{});if(g.fireOnce)c[o]=null;if(k)break}}var u=[];i.__classId__=i.className="Event";i.instances=[];var y="DOMContentLoaded",s="contentloaded";i.members={__class__:i,__new__:{__func__:function(b){b.__listeners__=
[]}},when:{__func__:function(b,c,g,k,o){var w;if(k==undefined||k==null){k=g;w=u}else w=b.__listeners__;c=m(c);c==s&&addDOMLoadEvent(function(){l(s,w)});w.push({type:c,handler:k,context:b,fireOnce:o})}},dispatch:{__func__:function(b,c,g){c=m(c);l(c,g==undefined?u:b.__listeners__)}},remove:{__func__:function(b,c,g,k){if(k==undefined){k=g;b=u}else b=b.__listeners__;c=m(c);k=k;b=b;for(var o=0;o<b.length;o++)if(g=b[o])if(g.type==c&&g.handler===k)b[o]=null}}};i["new"]=function(){return new this};var v=
i();i.when=v.when;i.once=v.once;i.dispatch=v.dispatch;i.remove=v.remove;return i}(),ra=function(){var i=function(l){this.code=this[l];this.message=l+": DOM Exception "+this.code},m=i.prototype=Error();m.INDEX_SIZE_ERR=1;m.DOMSTRING_SIZE_ERR=2;m.HIERARCHY_REQUEST_ERR=3;m.WRONG_DOCUMENT_ERR=4;m.INVALID_CHARACTER_ERR=5;m.NO_DATA_ALLOWED_ERR=6;m.NO_MODIFICATION_ALLOWED_ERR=7;m.NOT_FOUND_ERR=8;m.NOT_SUPPORTED_ERR=9;m.INUSE_ATTRIBUTE_ERR=10;m.INVALID_STATE_ERR=11;m.SYNTAX_ERR=12;m.INVALID_MODIFICATION_ERR=
13;m.NAMESPACE_ERR=14;m.INVALID_ACCESS_ERR=15;m.VALIDATION_ERR=16;m.TYPE_MISMATCH_ERR=17;$globals.DOMException||($globals.DOMException=i);return i}();(function(){function i(j,p){for(var n in p)if(!(n in Object.prototype))if(n!="__w3c_fake"&&n!="toString"&&n!="__proto__"&&n!="valueOf")j[n]=p[n]}function m(){return{type:null,target:null,relatedTarget:null,currentTarget:null,offsetParent:null,offsetTop:null,offsetLeft:null,screenX:null,screenY:null,pageX:null,pageY:null,altKey:null,shiftKey:null,ctrlKey:null,
metaKey:null,button:null,mouseButton:null,charCode:null,keyCode:null,IEvent:$root.createEventObject(),preventDefault:function(){event.returnValue=false},stopPropagation:function(){event.cancelBubble=true}}}function l(j,p,n){if(arguments.length<3)throw Error("Not enough arguments");if(typeof p!="function")throw Error("Event handler is not a function");j=""+j;n=!!n;var D="opener"in this;if(j in g)if(!(this.tagName&&this.tagName.toLowerCase()in c||this===$root||D))return;var x=m();D=D&&(j in g||j in
k)?b:this;var F=this,G="__ievent_hdlr_"+(n?"capture":"nocapture"),E=function(){x.type=event.type;x.target=event.srcElement;x.relatedTarget=event.fromElement||event.toElement||null;x.currentTarget=F;x.offsetParent=event.srcElement&&event.srcElement.parentNode||null;x.offsetTop=event.offsetX;x.offsetLeft=event.offsetY;x.screenX=event.screenX;x.screenY=event.screenY;x.pageX=event.clientX+$root.body.scrollLeft+$root.documentElement.scrollLeft;x.pageY=event.clientY+$root.body.scrollTop+$root.documentElement.scrollTop;
x.altKey=event.altKey;x.shiftKey=event.shiftKey;x.ctrlKey=event.ctrlKey;x.metaKey=false;x.keyCode=event.keyCode;x.charCode=j=="keypress"?event.keyCode:0;if(event.button==1)x.button=0;else if(event.button==2)x.button=2;else if(event.button==4)x.button=1;x.mouseButton=event.button;p.call(F,x)},J=function(){var I=event,A={type:""};A.type=j;if(j==="DOMAttrModified"){A.ADDITION=2;A.MODIFICATION=1;A.REMOVAL=3;A.target=I.srcElement;A.relatedNode=null;A.attrChange=1;A.attrName=I.propertyName.split(".")[0];
A.prevValue=null;A.newValue=A.target[A.attrName];if(A.attrName=="innerHTML"||A.attrName=="innerText"||typeof A.newValue=="function")return}p.call(F,A)};p[G]=j.indexOf("DOM")===0?J:E;if(j==="DOMContentLoaded")addDOMLoadEvent(p[G]);else j==="DOMAttrModified"?D.attachEvent("onpropertychange",p[G]):D.attachEvent("on"+j,p[G])}function u(j,p,n){n="__ievent_hdlr_"+(n?"cap":"nocap");p[n]&&this.detachEvent("on"+j,p[n])}function y(j){return this.fireEvent("on"+j.type,j.IEvent)}function s(){for(var j=arguments,
p,n=0;n<j.length;n++)if(j[n]){if(typeof j[n]=="string")p=$root.getElementById(j[n]);else if(typeof j[n]=="object")p=j[n];if(!p.__w3c_fake){p.addEventListener=l;p.removeEventListener=u;p.dispatchEvent=y;p.__w3c_fake=true}}}if(!($isCLI||$isWorker)){var v=$globals,b=$root;if(b.uniqueID&&b.expando){if(!v.__w3c_fake){$root.createElement("canvas");$root.createStyleSheet().cssText="canvas{display:inline-block;width:300px;height:150px}";var c={textarea:true,input:true,select:true,body:true},g={keydown:"keydown",
keyup:"keyup",keypress:"keypress"},k={mouseenter:"mouseenter",mouseleave:"mouseleave",mousemove:"mousemove",mouseup:"mouseup",mousedown:"mousedown",click:"click"},o;$root.__native__createElement=$root.createElement;$root.createElement=function(j){if(/^[a-z]+$/i.test(j))j=j.toUpperCase();j=$root.__native__createElement(j);var p=window,n;n=j.tagName.toLowerCase();n=n.substr(0,1).toUpperCase()+n.substr(1);j=(p=p["HTML"+n+"Element"])&&p.__IElementConstructor?p.__IElementConstructor(j):j;s(j);o.__w3c_fake&&
i(j,o.prototype);p&&p.__w3c_fake&&i(j,p.prototype);return j};$root.createEvent=function(j){var p=m();if(j=="MouseEvents"||j=="MouseEvent")p.initMouseEvent=function(n,D,x,F,G,E,J,I,A,S,ga,K,ca,T,U){this.type=this.IEvent.type=n;this.bubbles=D;this.cancelable=x;this.view=F;this.detail=G;this.screenX=E;this.screenY=J;this.clientX=I;this.clientY=A;this.ctrlKey=S;this.altKey=ga;this.shiftKey=K;this.metaKey=ca;this.button=T;this.relatedTarget=U};else if(j=="KeyboardEvent"||j=="KeyEvents")p.initKeyEvent=
function(n,D,x,F,G,E,J,I,A,S){this.type=this.IEvent.type=n;this.bubbles=D;this.cancelable=x;this.view=F;this.ctrlKey=G;this.altKey=E;this.shiftKey=J;this.keyCode=A;this.charCode=S};else p.initEvent=function(n,D,x){this.type=this.IEvent.type=n;this.bubbles=D;this.cancelable=x};return p};b.defaultView=v;v.getComputedStyle=function(j){return{getPropertyValue:function(p){return j.currentStyle[p]}}};s.all=function(){for(var j=b.all,p=0;p<j.length;p+=1)s(j[p])};v.w3c=s;for(var w=["HTMLElement"],t=0;t<w.length;t++)v[w[t]]||
(v[w[t]]={prototype:{},__elementName:w[t],toString:function(){return"[object "+this.__elementName+"]"},__w3c_fake:true});o=v.HTMLElement}}else{v.w3c=function(){};w3c.all=w3c}}})();(function(){var i=typeof $trace_disable!="undefined"?$trace_disable:$isWorker;if(typeof console=="undefined")$globals.console={log:function(){for(var m=[],l=0;l<arguments.length;l++)m.push(arguments[l]);typeof alert=="undefined"?print.apply(null,m):alert(m.join(", "))},dir:function(){}};$globals.trace=!i?function(){console&&
console.log(["trace: ",Array.prototype.slice.call(arguments,0).join(" ")].join(""))}:function(){}})();(function(){function i(a){a=new H(a);a.__typeId__=isNaN(a)?da:O;return a}function m(a){a=H(a);if(isNaN(a)){a=new H(NaN);a.__typeId__=da}else{a=new H(a|0);a.__typeId__=M}return a}function l(a){a=H(a);if(isNaN(a)){a=new H(NaN);a.__typeId__=da}else{a=new H(Math.abs(a|0));a.__typeId__=P}return a}function u(a){a=new H(a);a.__typeId__=isNaN(a)?da:V;return a}function y(){return null}function s(){}function v(a){for(var d=
{},e=0;e<a.length;e++)d[a[e][0]]=a[e][1];return d}function b(){}function c(a,d){var e=a.split(oa);e=ga(e);d.call(e,e)}function g(a){this.__groupToken__=a}function k(a,d,e){for(var f in d)if(f!="__proto__"&&f!="__typeId__"&&(e&&e[f]===undefined||!e))a[f]=d[f]}function o(a){var d=a.__class__||a,e,f,h;if(d!=a)e=a;w(d);d.body.call(d.members,d);for(var q in d.members)if(!(q in F.prototype)){f=d.members[q];h=f.__typeId__;if(a===d){if(!(f.flags&ha))continue}else if(f.flags&ha)continue;if(h===Q){a[q]=f(a,
q);a[q].__name__=q;a[q].__owner__=f.flags&ha?d:a;a[q].__func__=f.__func__;a[q].toString=f.toString}else a[q]=h===R?f.__class__:h===W?f.valueOf():h===M||h===O?f.valueOf():h===X?f.valueOf():h===ea||h===Y?null:f}e||d.__init__()}function w(a,d,e){d||(d=a);for(var f=d.ancestors,h=0;h<f.length;h++){if(f[h]==undefined)throw Error("Undefined ancestor in class "+a.className);f[h]!=a&&f[h]!=d&&w(a,f[h],e);f[h].body.call(a.members,a);if(f[h].className)a.ancestors[f[h].className]=f[h]}}function t(a){var d=0;
a=ka?a.__caller__:a.caller;for(var e=null;a;){if(a.__owner__){e=a.__owner__;break}a=a.caller;if(d>1E3){e=null;break}d++}return e}function j(){var a=new n;k(a,this.prototype);if(!this.className){var d=this.toString().match(/function(\s+)?([a-zA-Z\$_0-9]+)?/);this.className=d&&d[2]||"Anonymous"}a.__class__=this;if(!this.instances)this.instances=[];a.__id__=this.instances.length;a.parent=t(j);this.instances.push(a);this.prototype.constructor.apply(a,arguments);return a}function p(){function a(){return a.caller===
p}return!a.apply(null,[])}function n(){}function D(a){if(!E(a)&&a.__typeId__!=undefined)return a.__typeId__;else if(a===null)return ea;else if(a===undefined)return Y;else switch(typeof a){case "number":return V;case "string":return W;case "function":return a instanceof n?R:Q;case "boolean":return X;case "object":return Z;default:return Y}}function x(){return"function(){/*stub*/}"}function F(a){this.__owner__=a}function G(a,d){if(!E(a.__classId__)&&E(d))d=a.__classId__;else if(E(d))d=ia.length;if(!E(ia[d]))throw Error("Class have already registered in the roaster");
if(a.__classId__!=d)a.__classId__=d;ia[d]=a}function E(a){return a===undefined||a===null}function J(a){return!E(a)&&a.__classId__>-1&&ia[a.__classId__]===a}function I(a,d,e){var f=new T;A(f,"joo.*");f.__path__=a;f.__file__=d;e.call(f,f,sa,z)}function A(a){var d,e,f,h,q=$.call(arguments,1);if(typeof a=="string"){q=$.call(arguments,0);a=this}for(var B=0;B<q.length;B+=1){d=q[B];e=d.split(oa);f=ta.call(e);e=f=="*"?$.call(e,0,e.length-1):e;try{h=ga(e)}catch(r){throw Error("Symbol "+r+" not found in "+
d);}if(f==="*")k(a,h,g.prototype);else a[f]=h}return a}function S(){}function ga(a,d){var e=z[la],f=e,h,q;if(a.length==1&&!a[0])return f;for(q=0;q<a.length;q++){h=a[q];if(!e.__groupToken__)throw Error("Token '"+h+"' is not group token");f=e[h];if(typeof f=="undefined")if(d)throw Error("Token "+h+" not found");else f=e=e[h]=new g(h);else if(q==a.length-1)break;else{e=f;f=e[h]}}return f}function K(a,d,e){if(K.caller===K)return this;var f=new K;f.__roleName__=a;e&&k(f,e);k(f,d);return f}function ca(a,
d,e){if(typeof ArrayBuffer=="undefined"){var f=typeof a=="object"?a:Array(a);f.buffer=f;f.set=function(B){for(var r=0;r<f.buffer.length;r++)f.buffer[r]=B[r]};return f}if(typeof a=="undefined")a=0;if(typeof d=="undefined")d=m;if(typeof e=="undefined")e=32;var h=D(a)==Z?a.length:a,q=new ArrayBuffer(h*e);d=D(d);if(d==M&&e==8)e=Int8Array;else if(d==P&&e==8)e=Uint8Array;else if(d==M&&e==16)e=Int16Array;else if(d==P&&e==16)e=Uint16Array;else if(d==M&&e==32)e=Int32Array;else if(d==P&&e==32)e=Uint32Array;
else if(d==O&&e==32)e=Float32Array;else if(d==O&&e==64)e=Float64Array;else throw Error("VectorArray: syntax error");f=new e(q,0,h);D(a)==Z&&f.set(a);return f}function T(a){return{__url__:a}}function U(){$.call(arguments,0).join("")}function C(){if(!arguments.length)throw Error("Type is not constructor!");}function pa(){$globals.detachEvent("onbeforeunload",pa)}var z=$globals,sa=$root,qa=false,ja=typeof $joo_compat!="undefined"?$joo_compat:true,Z,V,M,P,O,W,X,Q,R,L,ea,Y,da,ha=__STATIC__,H=Number,la=
"$groups",oa=".",$=Array.prototype.slice,ta=function(){return this[this.length-1]},ma=ba();(function(a){this.message=a}).prototype=Error();g.prototype={addClass:function(a,d){this[d.className]=d},__groupToken__:null};var ia=[];Function.prototype["new"]=j;var ka=p(),na=ka?"__caller__":"caller";if(ka){L=Function.prototype;L.__native__apply=L.apply;L.__native__call=L.call;L.apply=function a(d,e){this[na]=a.caller;return this.__native__apply(d,e)};L.call=function a(){this[na]=a.caller;return this.__native__call.__native__apply(this,
arguments)}}n.prototype={__class__:null,__id__:null,parent:null,toString:function(){return this.__str__?this.__str__():["[class ",this.__class__&&this.__class__.className||"Anonymous","]"].join("")}};F.prototype={__owner__:null,__addCol__:function(a,d){for(var e=0;e<d.length;e++)this.__add__.call(this,a,d[e][0],d[e][1],d[e][2],d[e][3])},__add__:function(a,d,e,f,h){if(D(d)==Z&&d.length>0)for(var q=0;q<d.length;q++)this.__add__(a,d[q],e,f,h);else{f=f==undefined||f.__typeId__==undefined?D(e):f.__typeId__;
if(E(f))throw Error("Unknown type of "+d);var B;if(f===M)e=new m(e);else if(f===P)e=new l(e);else if(f===O)e=new i(e);else if(f===V)e=new u(e);else if(f===X)e=new Boolean(e);else if(f===W)e=new String(e);else if(f===Q){var r=e.toString().replace(/\/\*.*\*\//,"").match(/function(\s+)?([a-zA-Z\$_0-9]+)?(\s+)?\(([a-zA-Z\$_0-9,\s]+)\)/),N,aa,fa;if(r&&r.length>1){r=r[4].replace(/\s+/g,"").split(",");N=$.call(r,1).join(",");B=r[0];aa=r[r.length-1];if(aa=="__rest__"){q="__rest__";fa=r.length-1}}else{N="";
B="self"}q=["return function(",N,") {",q?["if(arguments.length>=",fa,"){",q,"=[arguments[",fa-1,"]];for(var _=",fa,";_<arguments.length;_++)",q,"[_-",fa-1,"]=arguments[_];}"].join(""):"",["return ",B,"[name].__func__(",B,N&&[",",N].join(""),")"].join(""),"}"].join("");B=Function(B,"name",q)}else if(f==R)B={};else if(f==Y||f==ea)B=new y;this[d]=B||e;this[d].flags=a;this[d].__typeId__=f;if(f===Q){this[d].__func__=e;this[d].toString=x;this[d].returnType=h}else if(f===R)this[d].__class__=e}},__set__:function(){},
__get__:function(){},__del__:function(a){this[a].flags&ha&&delete this.__class__[a];delete this[a]},__call__:function(a){var d=$.call(arguments,1);if(this[a].__typeId__===Q)return this[a].__func__.apply(this[a],d)}};n.registerClass=G;K.prototype={__roleName__:null};C.lastId=0;C.getTypeId=function(){return++this.lastId};z.$Unit=I;z.$Package=c;z.$Import=A;z.$ImportFrom=S;z.$Namespace=T;z.$buildClass=function(a,d,e,f){function h(){return q.instantize?this:q(arguments)}function q(){var B=q[na]!==h?arguments:
arguments[0];q.instantize=true;var r=new h;q.instantize=false;r.parent=t(q);var N=h.instances.length;h.instances[N]=r;r.__id__=N;r.__class__=h;o(r);if(typeof r.__new__=="function")var aa=r.__new__.apply(r,B);return typeof aa=="object"&&aa!==null?aa:r}h.prototype=new n;h.prototype.__typeId__=h.__typeId__=C.getTypeId();h.instances=[];h.className=a;h.ancestors=[];if(d&&d.length>0)for(a=0;a<d.length;a++)h.ancestors[a]=d[a];h.body=e||function(){};h.members=new F(h);ma.once("initialize",function(){o(h)});
h.role=null;G(h);h.as=function(B){for(var r in B)if(!(r in Object.prototype))if(!(r in F.prototype))if(!(r in K.prototype))if(typeof h.members[r]=="undefined")throw Error(h.className+": missing property");else if(!E(B[r])&&D(h.members[r])!=B[r].__typeId__)throw Error(h.className+": property type does not match the spec");this.role=B;return this};h.toString=function(){return["class ",this.className||"Anonymous","(...)"].join("")};h.__init__=function(){};qa&&o(h);f&&h.as(f);h["new"]=q;return h};z.$Event=
ba;z[la]={};z[la].__groupToken__="root";if(!ja){z.dict=v;z.zip=b;Object.extend=k}if(!ja){z.Number=u;z.Float=i;z.Int=m;z.Uint=l;z.VectorArray=ca;z.Null=y;z.Void=s;z.Role=K;z.Class=n;z.Type=C}z.XML||ja||(z.XML=U);if(typeof window!="undefined")z.$window=window;if(typeof document!="undefined")z.$document=document;with(C){Z=getTypeId();V=getTypeId();M=getTypeId();P=getTypeId();O=getTypeId();W=getTypeId();X=getTypeId();Q=getTypeId();R=getTypeId();L=getTypeId();ea=getTypeId();Y=getTypeId();getTypeId();getTypeId();
da=getTypeId()}C.isVoid=E;C.isPrimitive=function(a){return!(a instanceof n)&&!(a instanceof Function)&&!(a instanceof Array)&&!(a instanceof H)&&!(a instanceof Boolean)&&!(a instanceof String)&&a instanceof Object};C.isClass=J;C.is_a=function(a,d){if(d.__typeId__===R&&J(a))return true;if(a instanceof n&&!J(d))return false;return D(a)===d.__typeId__};C.NUMBER=u.__typeId__=H.__typeId__=V;C.INT=m.__typeId__=M;C.UINT=l.__typeId__=P;C.FLOAT=i.__typeId__=O;C.BOOLEAN=Boolean.__typeId__=X;C.STRING=String.__typeId__=
W;C.VOID=s.__typeId__=Y;C.NULL=y.__typeId__=ea;C.OBJECT=Object.__typeId__=Z;C.FUNCTION=Function.__typeId__=Q;C.CLASS=n.__typeId__=R;C.XML=U.__typeId__=L;if(!ja){String.prototype.__typeId__=W;Boolean.prototype.__typeId__=X;H.prototype.__typeId__=V}c("joo",function(a){a.Float=i;a.Int=m;a.Uint=l;a.Null=y;a.Void=s;a.VectorArray=ca;a.Type=C;a.Role=K;a.Import=A;a.ImportFrom=S;a.Package=c;a.Unit=I;a.Namespace=T;a.Group=g;a.Class=n;a.XML=U;a.Event=ba});c("joo.object",function(a){a.extend=k;a.dict=v;a.zip=
b});ma.once("contentloaded",function(){qa=true;ma.dispatch("initialize")});(function(){for(var a=0;a<arguments.length;a++)G(arguments[a])})(u,m,l,i,String,Boolean,Function,n,g,T,I,c,U,ca,ba);$globals.attachEvent&&$globals.attachEvent("onbeforeunload",pa)})();$Unit(__PATH__,__FILE__,function(){$Package("w3c",function(i){i.DOMException=ra})});$Unit(__PATH__,__FILE__,function(i,m){$Package("platform",function(l){function u(k){for(var o=0;o<k.length;o++){var w=k[o].s,t=k[o].p;g=k[o].v||k[o].i;if(w){if(w.indexOf(k[o].u)!=
-1)return k[o].i}else if(t)return k[o].i}}function y(k){var o=k.indexOf(g);if(o!=-1)return parseFloat(k.substring(o+g.length+1))}var s=!$isCLI&&navigator.appVersion,v=!$isCLI&&navigator.userAgent,b=!$isCLI&&navigator.platform,c=!$isCLI&&navigator.vendor,g;c=[{s:v,u:"Chrome",i:"Chrome"},{s:v,u:"OmniWeb",v:"OmniWeb/",i:"OmniWeb"},{s:c,u:"Apple",i:"Safari",v:"Version"},{p:$globals.opera,i:"Opera"},{s:c,u:"iCab",i:"iCab"},{s:c,u:"KDE",i:"Konqueror"},{s:v,u:"Firefox",i:"Firefox"},{s:c,u:"Camino",i:"Camino"},
{s:v,u:"Netscape",i:"Netscape"},{s:v,u:"MSIE",i:"Explorer",v:"MSIE"},{s:v,u:"Gecko",i:"Mozilla",v:"rv"},{s:v,u:"Mozilla",i:"Netscape",v:"Mozilla"}];b=[{s:b,u:"Win",i:"Windows"},{s:b,u:"Mac",i:"Mac"},{s:v,u:"iPhone",i:"iPhone/iPod"},{s:b,u:"Linux",i:"Linux"}];l.browser=$isCLI?null:u(c)||"An unknown browser";l.version=$isCLI?null:y(v)||y(s)||"an unknown version";l.OS=$isCLI?null:u(b)||"an unknown OS";l.isIE=!!(m.uniqueID&&m.expando&&l.browser==="Explorer");l.ie=l.isIE?l.version:0;l.isFirefox=l.browser===
"Firefox";l.firefox=l.isFirefox?l.version:0;l.isOpera=l.browser==="Opera";l.opera=l.isOpera?l.version:0;l.isWebKit=l.browser==="Chrome"||l.browser==="Safari";l.webkit=l.isWebKit?1:0;l.isCLI=$isCLI})});$Unit(__PATH__,__FILE__,function(i){$Package("geom",function(m){function l(b){return["(",b.join(", "),")"].join("")}function u(b,c){var g;if(u.instantize)return this;else if(this.__class__!==u){u.instantize=true;g=new u}else g=this;u.instantize=false;arguments.length==2&&g.set(b,c);return g}function y(b,
c,g,k){if(y.instantize)return this;var o;if(this.__class__!==y){y.instantize=true;o=new y}else o=this;y.instantize=false;o.set(b,c,g,k);return o}function s(b,c,g,k,o,w){if(s.instantize)return this;var t;if(this.__class__!==s){s.instantize=true;t=new s}else t=this;s.instantize=false;t.matrix=i.VectorArray(6,i.Float,32);if(arguments.length)if(b.__class__===s){c=t.matrix;g=b.matrix;c[0]=g[0];c[1]=g[1];c[2]=g[2];c[3]=g[3];c[4]=g[4];c[5]=g[5]}else if(arguments.length===6){t.matrix[0]=b;t.matrix[1]=c;t.matrix[2]=
g;t.matrix[3]=k;t.matrix[4]=o;t.matrix[5]=w}else throw Error("Matrix2d: syntax error");else return t;return t}var v=$Event();u.className=u.__classId__="Point";u.prototype={__class__:u,vectorTo:function(b,c){if(arguments.length==1){c=b.y;b=b.x}return new u((b>this.x?1:-1)*(Math.max(this.x,b)-Math.min(this.x,b)),(c>this.y?1:-1)*(Math.max(this.y,c)-Math.min(this.y,c)))},set:function(b,c){this.x=b;this.y=c;return this},toString:function(){return l([this.x,this.y])}};u["new"]=function(b,c){return new u(b,
c)};y.className=y.__classId__="Rectangle";y.prototype={__class__:y,set:function(b,c,g,k){this.x=b;this.y=c;this.width=g;this.height=k;return this},isPointWithin:function(b,c){if(arguments.length==1){c=b.y;b=b.x}return b>this.x&&c>this.y&&b<this.x+this.width&&c<this.y+this.height},clone:function(){return new y(this.x,this.y,this.width,this.height)},toString:function(){return l([this.x,this.y,this.width,this.height])}};y["new"]=function(b,c,g,k){return new y(b,c,g,k)};s.prototype={__class__:s,identity:function(){this.matrix[0]=
1;this.matrix[1]=0;this.matrix[2]=0;this.matrix[3]=1;this.matrix[4]=0;this.matrix[5]=0;return this},translate:function(b,c){var g=this.matrix;g[4]=g[0]*b+g[2]*c;g[5]=g[1]*b+g[3]*c;return this},scale:function(b,c){var g=this.matrix;g[0]*=b;g[2]*=b;g[1]*=c;g[3]*=c;return this},rotate:function(b){var c=this.matrix,g=Math.cos(b);b=Math.sin(b);var k=c[2]*g+c[3]*b,o=c[0]*-b+c[1]*g,w=c[2]*-b+c[3]*g;c[0]=c[0]*g+c[1]*b;c[1]=k;c[2]=o;c[3]=w;return this},multiplyPoint:function(b){var c=this.matrix,g=b.x;b=b.y;
return new u(g*c[0]+b*c[2]+c[4],g*c[1]+b*c[3]+c[5])},multiplyMatrix:function(b){var c=this.matrix;b=b.matrix;var g=c[1]*b[0]+c[3]*b[1],k=c[0]*b[2]+c[2]*b[3],o=c[1]*b[2]+c[3]*b[3],w=c[0]*b[4]+c[2]*b[5]+c[4],t=c[1]*b[4]+c[3]*b[5]+c[5];c[0]=c[0]*b[0]+c[2]*b[1];c[1]=g;c[2]=k;c[3]=o;c[4]=w;c[5]=t;return this},invert:function(){var b=this.matrix,c=1/(b[0]*b[3]-b[1]*b[2]);this.matrix.set([b[3]*c,-b[1]*c,-b[2]*c,b[0]*c,c*(b[2]*b[5]-b[3]*b[4]),c*(b[1]*b[4]-b[0]*b[5])]);return this},clone:function(){return new s(this)},
toString:function(){var b=this.matrix;return l([b[0],b[1],b[2],b[3],b[4],b[5]])}};s["new"]=function(b,c,g,k,o,w){return new Matrix(b,c,g,k,o,w)};s.className=s.__classId__="Matrix2d";m.Point=u;m.Rectangle=y;m.Matrix2d=s;v.once("initialize",function(){i.Class.registerClass(u);i.Class.registerClass(y);i.Class.registerClass(s)})})});if($isCLI||$isWorker){__init__.done=true;ba.dispatch("contentloaded")}}})();$jooscript="1.0.0.0";
