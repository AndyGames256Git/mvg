(function(){function fa(l){ma.console.log(l)}function Eb(){this.m()}function C(){this.c=this.b=0}function Fi(){this.ta=this.M=this.Ba=this.K=0}function Cd(l){if("undefined"!=typeof ma.Float32Array)return new ma.Float32Array(l);for(var Q=[];0<=--l;)Q[l]=0;return Q}function lk(l){if("undefined"==typeof l.V)l.V=null;l.Db=new Eb;l.s=0;l.x=0;l.v=0;l.u=0;l.Sc=0;l.Nd=0;l.ka=0;l.la=0;l.cb=1;l.kb=0;l.lb=0;l.Gd=0;l.Fd=0;l.Bc=0;l.dd=0;l.Be=0;l.Kf=0;l.Ce=0;l.Jf=0;l.fh=800;l.eh=480;l.rb=400;l.qb=240;l.Ni=140;
l.Pi=160;l.Oi=70;l.Qi=80;l.Le=true;l.lf=function(){var l=this.Gd,c=this.Fd,d=400/240,k;k=Math.max(Math.min(l/c,940/480),1.25);var m=0,w=0;if(k>d){m=k*c;w=c;this.ka=d/k;this.la=1}else{m=l;w=l/k;this.ka=1;this.la=k/d}this.ka*=this.cb;this.la*=this.cb;d=0+Math.floor(l);k=0+Math.floor(c);this.Be=Math.floor(0+.5*(l-m));this.Kf=Math.ceil(d-.5*(l-m));this.Ce=Math.floor(0+.5*(c-w));this.Jf=Math.ceil(k-.5*(c-w));this.Bc=this.Kf-this.Be;this.dd=this.Jf-this.Ce;this.Db.m();this.Db.p=this.ka/400;this.Db.g=-this.ka+
this.kb*this.Db.p;this.Db.q=-this.la/240;this.Db.f=this.la+this.lb*this.Db.q;this.s=Math.max(400*-(this.cb/this.ka-1),-70);this.x=Math.max(240*-(this.cb/this.la-1),-80);this.v=800-this.s;this.u=480-this.x;this.Sc=this.v-this.s;this.Nd=this.u-this.x;this.pe=this.Bc/this.Sc;l=-.5*(1-this.cb)*this.Nd/this.cb;this.Sb=-this.s+this.kb- -.5*(1-this.cb)*this.Sc/this.cb;this.Tb=-this.x+this.lb-l;this.$a=this.cb*this.pe;this.Lf=this.Sb*this.$a;this.Mf=this.Tb*this.$a;if(1E-4<Math.abs(this.cb-1))this.Gc=true;
else this.Gc=false;if(1E-4<Math.abs(this.$a-1))this.Ue=true;else this.Ue=false;this.Le=true};l.ig=0;l.kf=function(){var Q=800,c=480;if("undefined"!=typeof ma.innerWidth){Q=ma.innerWidth;c=ma.innerHeight}if(Q<this.Gd-.5||Q>this.Gd+.5||c<this.Fd-.5||c>this.Fd+.5){var d=(new Date).getTime();if(500<d-l.ig){l.ig=d;this.Gd=Q;this.Fd=c;this.lf();if(this.V){this.V.width=this.Bc;this.V.height=this.dd;this.V.style.left=this.Be+"px";this.V.style.top=this.Ce+"px"}if(th)window.setTimeout(function(){window.scrollTo(0,
1)},100);fa("Update render region to new dimmensions: "+this.Bc+"x"+this.dd)}}}}function mk(){if(Ga)ma.document.body.removeChild(Ga);Ga=ma.document.createElement("canvas");var l={};lk(l);l.V=Ga;l.kf();Ga.style.cssText="position:absolute;touch-action: none;touch-action-delay: none;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;outline: none;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);";ma.document.body.appendChild(Ga)}
function Jf(){ca=Ga}function Gi(l){l.mozImageSmoothingEnabled=false;l.webkitImageSmoothingEnabled=false;l.msImageSmoothingEnabled=false;l.imageSmoothingEnabled=false}function ub(){if(c){mk();fa("Falling back to 2d canvas after failing WebGL initialization.");c=null}Jf();p.V=Ga;p.ug=ca;p.t=ca.getContext("2d");p.Zd=Ga==ca?p.t:Ga.getContext("2d");Gi(p.t);Gi(p.Zd);wa=p;wa.jd=false}function qb(){if(wa==d){fa("Restoring WebGL context...");d.r();for(var l in E)if(E.hasOwnProperty(l)){var Q=E[l];if(Q.Qa&&
"undefined"!=typeof Q.Fc)wa.Hg(Q)}for(l=0;l<d.Aa.length;l++)d.Of(d.Aa[l]);d.hd=false;if(!d.If())ub()}}function xg(l){return function(){l.e=l.o.width;l.d=l.o.height;q+=l.e*l.d*4;if(l.Jd){l.e*=l.Ub;l.d*=l.Ub}if(0<l.e)l.dc=1/l.e;else l.dc=0;if(0<l.d)l.Rc=1/l.d;else l.Rc=0;l.cc=.5*Math.sqrt(l.e*l.e+l.d*l.d);l.Qa=true;if(wa.jd)wa.Hg(l);else wa.Hf(l);D++}}function ka(l,Q,c){var d=new ma.Image,k={};k.o=d;k.Qa=false;k.Ic=Q;k.vd=-1;k.Ma=null;k.Xd=null;var m="images/";if(vb&&!c){m+="x05/";k.A=.5;k.Jd=true}else{if(c)fa("Forcing "+
l+" to HQ");k.Jd=false;k.A=1}m+=l;d.onload=xg(k);d.onerror=function(){fa("loadImage: couldn't load "+m);k.o=nk;k.Qa=true;D++};if("branding/famobi-html5-games.png"==l){Q=window.famobi;if("undefined"!=typeof Q)d.src=Q.getMoreGamesButtonImage();k.A=4;k.Jd=true}d.src=m;k.Ub=1/k.A;E[l]=k}function k(l,Q,c,d){if("undefined"==typeof Q)Q=0;if("undefined"==typeof c)c=0;if("undefined"!=typeof d)if(0>d.indexOf(gc)){fa("loadImage: skipping "+l+" because it is unused with target language!");return}ua.push({Ih:l,
zh:Q,mh:c})}function ok(l){return"sounds/"+l.substring(0,l.length-3)+ba.fd}function Ca(l,Q){fa(Q);l.ie=true;Yc++}function pk(l){var Q={Qa:false,ie:false,db:false};yg[l]=Q;var c=ok(l);if("wa"==ba.sa){var d=new ma.XMLHttpRequest;d.open("GET",c,true);d.responseType="arraybuffer";d.onload=function(){Q.Ab=d.response;Q.Qa=true};d.onerror=function(){Ca(Q,"loadSound: couldn't load "+l)};try{d.send()}catch(k){Ca(Q,"loadSound: couldn't load "+l+": "+k.vh)}}if("html5"==ba.sa){Q.Bb=[];for(var m=Q.Vd=0;2>m;m++){Q.Bb[m]=
new ma.Audio(c);Q.Bb[m].preload="auto";Q.Bb[m].load()}}}function V(l){if("none"!=ba.sa)oa.push(l)}function Hi(l,Q){var c="loadMusic: couldn't load "+l;if(Q)c+=":"+Q.vh;fa(c)}function Ii(l,Q){if("none"!=ba.sa){var c=ok(l),d={Bd:Q,Ta:null,Ab:null,kc:null,db:false};qk[l]=d;if("html5"==ba.Mc){d.Ta=[];try{for(var k=0;2>k;k++){d.Ta[k]=new ma.Audio(c);d.Ta[k].preload="auto";d.Ta[k].load()}d.db=true}catch(m){d.Ta=null}}if("wa"==ba.Mc){var w=new ma.XMLHttpRequest;w.open("GET",c,true);w.responseType="arraybuffer";
w.onload=function(){d.Ab=w.response;if(ba.t.decodeAudioData)ba.t.decodeAudioData(d.Ab,function(Q){fa("Decoded music: "+l);d.kc=Q;d.db=true;d.Ab=null},function(){fa("loadMusic: couldn't decode "+l)});else{d.kc=ba.t.createBuffer(d.Ab,false);fa("Decoded music "+l+" [async]");if(d.kc)d.db=true;d.Ab=null}};w.onerror=function(){Hi(l,null)};try{w.send()}catch(p){Hi(l,p)}}}}function Ji(){var l;wa.kf();l=E["loading-bar-outer.png"];var Q=E["loading-bar-inner.png"],c=E["game-bk.png"],d=E["sun-temple.png"],k=
E["title.png"];Kf.Ba=wa.V.width;Kf.ta=wa.V.height;wa.Kb(Kf);wa.pd();wa.fc(1,1,1,1);wa.sb(-70,-80,940,640);wa.ed();var m=0;if("undefined"!=typeof c&&c&&c.Qa){uh+=.03125;Ki.g=870-c.e;Ki.f=560-c.d;wa.aa(c,Ki,uh)}if("undefined"!=typeof d&&d&&"undefined"!=typeof k&&k&&d.Qa&&k.Qa){if(vh){r+=.03125;c=1-r*r*r}else{Da+=.03125;if(1<Da)Da=1;c=1-Da;c=1-c*c*c*c*c*c*c}var w=wa.s,p=wa.u-d.d+11,p=p+16*d.d*(1-c);K.K=0;K.M=0;K.Ba=d.e;K.ta=d.d-22;wa.w(d,K,w,p,true);w=wa.v-k.e;p=wa.x+11;p=p-16*k.d*(1-c);wa.w(k,null,
w,p,true)}if("undefined"!=typeof l&&l&&"undefined"!=typeof Q&&Q){if(l.Qa){wa.w(l,null,.5*(800-l.e)+4*r*r*r*800,.5*(480-l.d),true);m++}if(Q.Qa){Kf.Ba=(D+Yc)/(ua.length+oa.length)*Q.e;Kf.ta=Q.d;wa.w(Q,Kf,.5*(800-Q.e)+4*r*r*r*800,.5*(480-Q.d)+8,true);m++}}wa.Ha();if(2>Lf-Yc)for(l=Lf;Lf<l+2;Lf++)if(Lf<oa.length)pk(oa[Lf]);if(3>L-D)for(l=L;L<l+3;L++)if(L<ua.length){Q=ua[L];ka(Q.Ih,Q.zh,Q.mh)}for(var T in yg)if(yg.hasOwnProperty(T)){Q=yg[T];if("wa"==ba.sa)if(Q.Qa&&!Q.ie&&!ta){Q.ie=true;if(ba.t.decodeAudioData){ta=
true;(function(l,c){ba.t.decodeAudioData(l.Ab,function(Q){fa("Decoded "+c);l.kc=Q;l.db=true;Yc++;l.Ab=null;ta=false},function(){fa("loadSound: couldn't decode "+path);l.Ab=null;Yc++;ta=false})})(Q,T)}else{Q.kc=ba.t.createBuffer(Q.Ab,false);fa("Decoded "+T+" [async]");if(Q.kc)Q.db=true;Q.Ab=null;Yc++}}if("html5"==ba.sa)if(!Q.Qa){if(Q.Bb[0].readyState>=Q.Bb[0].HAVE_ENOUGH_DATA){fa("HTML5 Sound '"+T+"' is ready.");Q.Qa=true;Q.ie=true;Q.db=true;Yc++}for(l=0;l<Q.Bb.length;l++)if(Q.Bb[l].error){Q.db=false;
if(!Q.Qa){fa("Error: HTML5 Sound '"+T+"' didn't load properly!");Q.Qa=true;Yc++}}}}if(D==ua.length&&Yc==oa.length){vh=true;if(.65<=r&&"function"==typeof window.eso_main_function_of_unique_name_194851458194){fa("Loaded! Image memory usage "+(q/1024/1024).toPrecision(3)+"MB");if(Ob)ma.clearInterval(Ob);ma.eso_main_function_of_unique_name_194851458194(xa,{Ch:wa,uh:Eb,Bh:Fi,Ah:C,Gh:ba,sj:vb,rj:$e,sh:th,th:gc});return}}if(!rk&&2<=m){rk=true;m=ma.document.createElement("script");m.setAttribute("type","text/javascript");
m.setAttribute("src","game.js");ma.document.getElementsByTagName("head")[0].appendChild(m)}if(wh)wh(Ji)}var ma=window,O=ma.navigator.userAgent,$e=O.match(/Android/i),th=O.match(/iPhone|iPad|iPod/i),vb=$e||th||O.match(/BlackBerry/i)||O.match(/Opera Mini/i)||O.match(/IEMobile/i),O="undefined"==typeof ma.Float32Array,gc=0,wb="en";if("undefined"!=typeof window.eso_force_language)wb=window.eso_force_language;else if(window.navigator)wb=window.navigator.userLanguage||window.navigator.language||wb;switch(wb.substring(0,
2).toLowerCase()){case "en":gc=0;break;case "ru":gc=1;break;case "es":gc=2;break;case "de":gc=3;break;case "tr":gc=4;break;case "fr":gc=5;break;case "nl":gc=6;break;case "pt":gc=7;break;case "pl":gc=8}if("undefined"==typeof ma.console||"undefined"==typeof ma.console.log){ma.console={};ma.console.log=function(){}}var Ga=null,ca=null;Eb.prototype.m=function(){this.p=1;this.ca=this.N=0;this.q=1;this.f=this.g=0};Eb.prototype.A=function(l,c){this.p*=l;this.N*=c;this.ca*=l;this.q*=c;this.g*=l;this.f*=c};
Eb.prototype.ea=function(l){var c=this.p*l.p+this.N*l.ca;this.N=this.p*l.N+this.N*l.q;this.p=c;c=this.ca*l.p+this.q*l.ca;this.q=this.ca*l.N+this.q*l.q;this.ca=c;c=this.g*l.p+this.f*l.ca+l.g;this.f=this.g*l.N+this.f*l.q+l.f;this.g=c};Eb.prototype.P=function(l){var c=Math.cos(l);l=Math.sin(l);var d=this.p*c-this.N*l;this.N=this.p*l+this.N*c;this.p=d;d=this.ca*c-this.q*l;this.q=this.ca*l+this.q*c;this.ca=d;d=this.g*c-this.f*l;this.f=this.g*l+this.f*c;this.g=d};var d={Qf:function(l,c){var d=this.G,k=
d.createShader(d.VERTEX_SHADER);if(this.ma())return null;d.shaderSource(k,l);if(this.ma())return null;d.compileShader(k);if(this.ma())return null;if(!d.getShaderParameter(k,d.COMPILE_STATUS)){fa("Could not compile vertex shader!");fa(d.getShaderInfoLog(k));return null}var p=d.createShader(d.FRAGMENT_SHADER);if(this.ma())return null;d.shaderSource(p,c);if(this.ma())return null;d.compileShader(p);if(this.ma())return null;if(!d.getShaderParameter(p,d.COMPILE_STATUS)){fa("Could not compile fragment shader!");
fa(d.getShaderInfoLog(k));return null}var m=d.createProgram();if(this.ma())return null;d.attachShader(m,k);if(this.ma())return null;d.attachShader(m,p);if(this.ma())return null;d.linkProgram(m);if(this.ma())return null;if(!d.getProgramParameter(m,d.LINK_STATUS)){fa("Could not link shader program!");return null}return m},r:function(){var l=this.G;l.getError();l.viewportWidth=this.V.width;l.viewportHeight=this.V.height;this.bc=this.Qf("attribute vec2 aVertexPosition;varying vec2 vTexCoord;uniform vec4 texcoordXfm;uniform vec4 posXfm[2];void main(void) {vTexCoord = aVertexPosition.xy * texcoordXfm.xy + texcoordXfm.zw;gl_Position.x = dot( vec3 (aVertexPosition, 1.0), posXfm[0].xyz );gl_Position.y = dot( vec3 (aVertexPosition, 1.0), posXfm[1].xyz );gl_Position.z = 0.5;gl_Position.w = 1.0;}",
"precision mediump float;varying vec2 vTexCoord;uniform sampler2D uImage0;uniform vec4 vColorMult;void main(void) {gl_FragColor = texture2D (uImage0, vTexCoord)*vColorMult;}");if(this.ma())return false;this.Wb=l.getAttribLocation(this.bc,"aVertexPosition");if(this.ma())return false;this.Vb=l.getUniformLocation(this.bc,"texcoordXfm");if(this.ma())return false;this.Ib=l.getUniformLocation(this.bc,"posXfm");if(this.ma())return false;this.lc=l.getUniformLocation(this.bc,"vColorMult");if(this.ma())return false;
this.Me=l.getUniformLocation(this.bc,"uImage0");if(this.ma())return false;this.md=this.Qf("attribute vec2 aVertexPosition;uniform vec4 posXfm[2];void main(void) {gl_Position.x = dot( vec3 (aVertexPosition, 1.0), posXfm[0].xyz );gl_Position.y = dot( vec3 (aVertexPosition, 1.0), posXfm[1].xyz );gl_Position.z = 0.5;gl_Position.w = 1.0;}","precision mediump float;uniform vec4 vColor;void main(void) {gl_FragColor = vColor;}");if(this.ma())return false;this.mf=l.getAttribLocation(this.md,"aVertexPosition");
if(this.ma())return false;this.rg=l.getUniformLocation(this.md,"posXfm");if(this.ma())return false;this.De=l.getUniformLocation(this.md,"vColor");if(this.ma())return false;this.Xc=l.createBuffer();if(this.ma())return false;l.bindBuffer(l.ARRAY_BUFFER,this.Xc);if(this.ma())return false;l.bufferData(l.ARRAY_BUFFER,new ma.Float32Array([1,1,0,1,1,0,0,0]),l.STATIC_DRAW);if(this.ma())return false;l.bindBuffer(l.ARRAY_BUFFER,null);return this.ma()?false:true},If:function(){return null!==this.G&&null!==this.bc&&
null!==this.md&&null!==this.Wb&&null!==this.Vb&&null!==this.Ib&&null!==this.lc&&null!==this.Me&&null!=this.Xc||this.hd},wg:function(l,c,d){this.cb=l;this.kb=c;this.lb=d;this.lf()},fa:function(l){this.C=l;this.G.bindTexture(this.G.TEXTURE_2D,l.Fc)},Da:function(l){if(0>l)l=0;this.G.uniform4f(this.lc,1,1,1,l)},Ea:function(l,c,d,k){this.G.uniform4f(this.lc,l,c,d,k)},ib:function(l,c,d,k,p,m,w,q){var r=this.G,C=this.C.dc,E=this.C.Rc;r.uniform4f(this.Vb,d*C,k*E,l*C,c*E);l=this.se;l.m();l.p=d*w;l.q=k*q;l.g=
p;l.f=m;l.ea(this.Db);this.Ca.set([l.p,l.ca,l.g,0,l.N,l.q,l.f,0]);r.uniform4fv(this.Ib,this.Ca);r.drawArrays(r.TRIANGLE_STRIP,0,4)},Cb:function(l,c,d,k,p,m,w){var q=this.G;p+=this.kb;m+=this.lb;if(!w)q.disable(q.BLEND);this.Jb(l,c,d,k);this.Ca.set([this.ka*d/this.rb,0,this.ka*(p/this.rb-1),0,0,-k/this.qb*this.la,this.la*(1-m/this.qb),0]);q.uniform4fv(this.Ib,this.Ca);q.drawArrays(q.TRIANGLE_STRIP,0,4);if(!w)q.enable(q.BLEND)},w:function(l,c,d,k,p){var m=this.G;d+=this.kb;k+=this.lb;if(!p)m.disable(m.BLEND);
var w,q;if(null!=c){var r=l.dc,C=l.Rc;w=c.Ba-c.K;q=c.ta-c.M;m.uniform4f(this.Vb,w*r,q*C,c.K*r,c.M*C)}else{w=l.e;q=l.d;m.uniform4f(this.Vb,1,1,0,0)}this.Ca.set([this.ka*w/this.rb,0,this.ka*(d/this.rb-1),0,0,-this.la*q/this.qb,this.la*(1-k/this.qb),0]);m.uniform4fv(this.Ib,this.Ca);m.bindTexture(m.TEXTURE_2D,l.Fc);m.drawArrays(m.TRIANGLE_STRIP,0,4);if(!p)m.enable(m.BLEND)},hb:function(l,c,d){var k=this.G;l+=this.kb;c+=this.lb;if(!d)k.disable(k.BLEND);this.Ca.set([this.ka*this.C.e/this.rb,0,this.ka*
(l/this.rb-1),0,0,-this.la*this.C.d/this.qb,this.la*(1-c/this.qb),0]);k.uniform4fv(this.Ib,this.Ca);k.drawArrays(k.TRIANGLE_STRIP,0,4);if(!d)k.enable(k.BLEND)},T:function(){this.G.uniform4f(this.lc,1,1,1,1)},$:function(l,c){var d=this.G;d.uniform4f(this.Vb,1,1,0,0);var k=this.se;k.m();k.p=l.e;k.q=l.d;k.ea(c);k.ea(this.Db);this.Ca.set([k.p,k.ca,k.g,0,k.N,k.q,k.f,0]);d.uniform4fv(this.Ib,this.Ca);d.bindTexture(d.TEXTURE_2D,l.Fc);d.drawArrays(d.TRIANGLE_STRIP,0,4)},aa:function(l,c,d){var k=this.G;if(!(0>=
d)){k.uniform4f(this.lc,1,1,1,d);k.uniform4f(this.Vb,1,1,0,0);d=this.se;d.m();d.p=l.e;d.q=l.d;d.ea(c);d.ea(this.Db);this.Ca.set([d.p,d.ca,d.g,0,d.N,d.q,d.f,0]);k.uniform4fv(this.Ib,this.Ca);k.bindTexture(k.TEXTURE_2D,l.Fc);k.drawArrays(k.TRIANGLE_STRIP,0,4);k.uniform4f(this.lc,1,1,1,1)}},W:function(l){var c=this.G,d=this.se;d.m();d.p=this.C.e;d.q=this.C.d;d.ea(l);d.ea(this.Db);this.Ca.set([d.p,d.ca,d.g,0,d.N,d.q,d.f,0]);c.uniform4fv(this.Ib,this.Ca);c.drawArrays(c.TRIANGLE_STRIP,0,4)},L:function(l){var c=
this.G;this.C=l;c.bindTexture(c.TEXTURE_2D,l.Fc);c.uniform4f(this.Vb,1,1,0,0)},Jb:function(l,c,d,k){var p=this.C.dc,m=this.C.Rc;this.$d=l;this.ae=c;this.zd=d;this.yd=k;this.G.uniform4f(this.Vb,d*p,k*m,l*p,c*m)},Ob:function(l,c,d){var k=this.G;l+=this.kb;c+=this.lb;if(!d)k.disable(k.BLEND);this.Ca.set([this.ka*this.zd/this.rb,0,this.ka*(l/this.rb-1),0,0,-this.la*this.yd/this.qb,this.la*(1-c/this.qb),0]);k.uniform4fv(this.Ib,this.Ca);k.drawArrays(k.TRIANGLE_STRIP,0,4);if(!d)k.enable(k.BLEND)},wb:function(){this.G.blendFunc(this.G.ONE,
this.G.ONE)},ub:function(){this.G.blendFunc(this.G.SRC_ALPHA,this.G.ONE_MINUS_SRC_ALPHA)},Of:function(l){var c=this.G;l.ze=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,l.ze);c.bufferData(c.ARRAY_BUFFER,new ma.Float32Array(l.yb),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null)},Pf:function(l){var c={};this.Aa[this.Aa.length]=c;c.yb=[];c.yb.length=2*l.length;c.Mh=l.length;var d=0;c.yb[d++]=l[0].b;c.yb[d++]=l[0].c;c.yb[d++]=l[1].b;c.yb[d++]=l[1].c;c.yb[d++]=l[l.length-1].b;c.yb[d++]=l[l.length-1].c;
for(var k=0;!(k+2>l.length-2-k);){c.yb[d++]=l[k+2].b;c.yb[d++]=l[k+2].c;if(k+2>=l.length-2-k)break;c.yb[d++]=l[l.length-2-k].b;c.yb[d++]=l[l.length-2-k].c;k++}this.Of(c);return c},Rf:function(l){for(var c=0;c<this.Aa.length;c++)if(this.Aa[c]==l){this.G.deleteBuffer(this.Aa[c].ze);for(l=c;l<this.Aa.length-1;l++)this.Aa[l]=this.Aa[l+1];this.Aa.length--;break}},Jh:function(){},Sf:function(l,c,d,k,p){var m=this.G;c+=this.kb;d+=this.lb;m.uniform4f(this.Vb,this.C.dc,this.C.Rc,k,p);this.Ca.set([this.ka/
this.rb,0,this.ka*(c/this.rb-1),0,0,-this.la/this.qb,this.la*(1-d/this.qb),0]);m.uniform4fv(this.Ib,this.Ca);m.bindBuffer(m.ARRAY_BUFFER,l.ze);m.vertexAttribPointer(this.Wb,2,m.FLOAT,false,0,0);m.drawArrays(m.TRIANGLE_STRIP,0,l.Mh)},Xf:function(){var l=this.G;l.bindBuffer(l.ARRAY_BUFFER,this.Xc);l.vertexAttribPointer(this.Wb,2,l.FLOAT,false,0,0)},oh:function(){return this.Aa.length},pd:function(){var l=this.G;l.bindTexture(l.TEXTURE_2D,null);l.disableVertexAttribArray(this.Wb);l.useProgram(this.md);
l.uniform4f(this.De,1,1,1,1);l.enableVertexAttribArray(this.mf);l.bindBuffer(l.ARRAY_BUFFER,this.Xc);l.vertexAttribPointer(this.mf,2,l.FLOAT,false,0,0)},fc:function(l,c,d,k){this.G.uniform4f(this.De,l,c,d,k)},sb:function(l,c,d,k){var p=this.G;l+=this.kb;c+=this.lb;this.Ca.set([this.ka*d/this.rb,0,this.ka*(l/this.rb-1),0,0,-k/this.qb*this.la,this.la*(1-c/this.qb),0]);p.uniform4fv(this.rg,this.Ca);p.drawArrays(p.TRIANGLE_STRIP,0,4)},ed:function(){var l=this.G;l.useProgram(this.bc);l.activeTexture(l.TEXTURE0);
l.enableVertexAttribArray(this.Wb);l.bindBuffer(l.ARRAY_BUFFER,this.Xc);l.vertexAttribPointer(this.Wb,2,l.FLOAT,false,0,0)},Kb:function(l){var c=this.G;c.viewport(l.K,l.M,l.Ba-l.K,l.ta-l.M);c.clearColor(0,0,0,1);c.clear(c.COLOR_BUFFER_BIT);c.useProgram(this.bc);c.uniform4f(this.lc,1,1,1,1);c.enableVertexAttribArray(this.Wb);c.activeTexture(c.TEXTURE0);c.bindBuffer(c.ARRAY_BUFFER,this.Xc);c.vertexAttribPointer(this.Wb,2,c.FLOAT,false,0,0);c.uniform1i(this.Me,0);c.enable(c.BLEND);c.blendFunc(c.SRC_ALPHA,
c.ONE_MINUS_SRC_ALPHA)},Ha:function(){var c=this.G;c.bindBuffer(c.ARRAY_BUFFER,null);c.bindTexture(c.TEXTURE_2D,null);c.disableVertexAttribArray(this.Wb);c.useProgram(null)},Hg:function(c){if(!!c.Qa){var d=this.G,k=d.createTexture();d.bindTexture(d.TEXTURE_2D,k);d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,c.o);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.LINEAR);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR);if("undefined"!=typeof c.kg&&c.kg){d.texParameteri(d.TEXTURE_2D,
d.TEXTURE_WRAP_S,d.REPEAT);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.REPEAT)}else{d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE)}d.bindTexture(d.TEXTURE_2D,null);c.Fc=k}},Dh:function(c){var d=this.G;d.bindTexture(d.TEXTURE_2D,c.Fc);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.REPEAT);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.REPEAT);d.bindTexture(d.TEXTURE_2D,null);c.kg=true},ma:function(){var c=false;if(this.G.isContextLost()||
this.G.getError()==this.G.CONTEXT_LOST_WEBGL){if(!this.hd)fa("Marking WebGL context as lost!");c=this.hd=true}return c},Wb:null,Vb:null,Ib:null,lc:null,Me:null,mf:null,rg:null,De:null,bc:null,md:null,Xc:null,V:null,G:null,Aa:[],se:new Eb,C:null,$d:0,ae:0,zd:0,yd:0,wj:Cd(4),Ca:Cd(8),wh:1,hd:false},p={wg:function(c,d,k){this.cb=c;this.kb=d;this.lb=k;this.lf()},fa:function(c){this.C=c},Da:function(c){if(0>c)c=0;this.t.globalAlpha=c},Ea:function(c,d,k){c=.333333333333333*(c+d+k);this.t.globalAlpha=1<
c?1:c},ib:function(c,d,k,p,q,m,w,r){if(!(0>=k||0>=p)){q+=this.Sb;m+=this.Tb;if(0>c){q-=c;c=0}if(0>d){m-=d;d=0}if(k>this.C.e-c)k=this.C.e-c-.125;if(p>this.C.d-d)p=this.C.d-d-.125;var C=this.C.A,E=this.C.Ub;c*=C;d*=C;k*=C;p*=C;C=this.$a;w=w*E*C;r=r*E*C;if(0>w||0>r){this.t.setTransform(w,0,0,r,q*C,m*C);this.t.drawImage(this.C.o,c,d,k,p,0,0,k,p);this.t.setTransform(1,0,0,1,0,0)}else this.t.drawImage(this.C.o,c,d,k,p,q*C,m*C,k*w,p*r)}},Cb:function(c,d,k,p,q,m){if(!(0>=k||0>=p)){q+=this.Sb;m+=this.Tb;if(0>
c){q-=c;c=0}if(0>d){m-=d;d=0}if(k>this.C.e-c)k=this.C.e-c-.125;if(p>this.C.d-d)p=this.C.d-d-.125;var w=this.$a;if(this.C.Ic&&!this.Gc){var r=this.C.vd;k=k*r;p=p*r;this.t.drawImage(this.C.Ma,c*r,d*r,k,p,q*w,m*w,k,p)}else{r=this.C.A;c*=r;d*=r;this.t.drawImage(this.C.o,c,d,k*r,p*r,q*w,m*w,k*w,p*w)}}},w:function(c,d,k,p){var q=c.Ub,m=this.$a;k+=this.Sb;p+=this.Tb;if(null==d)if(c.Ic&&!this.Gc)this.t.drawImage(c.Ma,k*m,p*m);else if(c.Jd||this.Ue){q=c.Ub*m;this.t.setTransform(q,0,0,q,k*m,p*m);this.t.drawImage(c.o,
0,0);this.t.setTransform(1,0,0,1,0,0)}else this.t.drawImage(c.o,k,p);else if(!(0>=d.Ba))if(!(0>=d.ta)){var q=d.K,w=d.Ba,r=d.M;d=d.ta;if(w>c.e)w=c.e-.125;if(d>c.d)d=c.d-.125;if(0>q){k-=q;q=0}if(0>r){p-=r;r=0}var w=w-q,C=d-r;if(!(0>=w||0>=C))if(c.Ic&&!this.Gc){d=c.vd;w*=d;C*=d;this.t.drawImage(c.Ma,q*d,r*d,w,C,k*m,p*m,w,C)}else{d=c.A;this.t.drawImage(c.o,q*d,r*d,w*d,C*d,k*m,p*m,w*m,C*m)}}},hb:function(c,d){c+=this.Sb;d+=this.Tb;var k;if(this.C.Ic&&!this.Gc){k=this.$a;this.t.drawImage(this.C.Ma,c*k,
d*k)}else if(this.C.Jd||this.Ue){k=this.$a;var p=this.C.Ub;this.t.setTransform(p*k,0,0,p*k,c*k,d*k);this.t.drawImage(this.C.o,0,0);this.t.setTransform(1,0,0,1,0,0)}else this.t.drawImage(this.C.o,c,d)},T:function(){this.t.globalAlpha=1},$:function(c,d){var k=this.$a,p=c.Ub*k;this.t.setTransform(d.p*p,d.N*p,d.ca*p,d.q*p,(d.g+this.Sb)*k,(d.f+this.Tb)*k);this.t.drawImage(c.o,0,0);this.t.setTransform(1,0,0,1,0,0)},aa:function(c,d,k){if(!(0>=k)){this.t.globalAlpha=k;k=this.$a;var p=c.Ub*k;this.t.setTransform(d.p*
p,d.N*p,d.ca*p,d.q*p,(d.g+this.Sb)*k,(d.f+this.Tb)*k);this.t.drawImage(c.o,0,0);this.t.setTransform(1,0,0,1,0,0);this.t.globalAlpha=1}},W:function(c){var d=this.$a,k=this.C.Ub*d;this.t.setTransform(c.p*k,c.N*k,c.ca*k,c.q*k,(c.g+this.Sb)*d,(c.f+this.Tb)*d);this.t.drawImage(this.C.o,0,0);this.t.setTransform(1,0,0,1,0,0)},L:function(c){this.C=c},Jb:function(c,d,k,p){this.$d=c;this.ae=d;this.zd=k;this.yd=p},Ob:function(c,d){var k=this.$d,p=this.ae,q=this.zd,m=this.yd;if(!(0>=q||0>=m)){c+=this.Sb;d+=this.Tb;
if(0>k){c-=k;q+=k;k=0}if(0>p){d-=p;m+=p;p=0}if(q>this.C.e-k)q=this.C.e-k-.125;if(m>this.C.d-p)m=this.C.d-p-.125;var w=this.$a;if(this.C.Ic&&!this.Gc){var r=this.C.vd,q=q*r,m=m*r;this.t.drawImage(this.C.Ma,k*r,p*r,q,m,c*w,d*w,q,m)}else{r=this.C.A;this.t.drawImage(this.C.o,k*r,p*r,q*r,m*r,c*w,d*w,q*w,m*w)}}},wb:function(){this.t.globalCompositeOperation="lighter"},ub:function(){this.t.globalCompositeOperation="source-over"},Pf:function(c){for(var d=[],k=0;k<c.length;k++){d[2*k]=c[k].b;d[2*k+1]=c[k].c}this.Aa.push(d);
return d},Rf:function(c){for(var d=0;d<this.Aa.length;d++)if(this.Aa[d]==c){for(c=d;c<this.Aa.length-1;c++)this.Aa[c]=this.Aa[c+1];this.Aa.length--;break}},Jh:function(){},Sf:function(c,d,k,p,q){this.t.beginPath();var m=this.$a,w=this.C.A,r=1/w,C=this.C.Ic&&!this.Gc;if(C){w=m;this.t.setTransform(1,0,0,1,this.Lf,this.Mf)}else this.t.setTransform(m*r,0,0,m*r,this.Lf,this.Mf);p*=this.C.e;q*=this.C.d;this.t.translate((d-p)*w,(k-q)*w);this.t.moveTo((c[0]+p)*w,(c[1]+q)*w);for(d=2;d<c.length;){k=c[d++]+
p;m=c[d++]+q;this.t.lineTo(k*w,m*w)}this.t.closePath();this.t.fillStyle=C?this.C.Xd:this.C.ng;this.t.fill();this.t.setTransform(1,0,0,1,0,0)},Xf:function(){},oh:function(){return this.Aa.length},pd:function(){},fc:function(c,d,k,p){if(1<c)c=1;if(1<d)d=1;if(1<k)k=1;if(1<p)p=1;if(0>c)c=0;if(0>d)d=0;if(0>k)k=0;if(0>p)p=0;this.t.fillStyle="rgba("+Math.floor(255*c)+","+Math.floor(255*d)+","+Math.floor(255*k)+","+Math.floor(255*p)+")"},sb:function(c,d,k,p){c+=this.Sb;d+=this.Tb;var q=this.$a;this.t.fillRect(c*
q,d*q,k*q,p*q)},ed:function(){},Kb:function(){this.t.setTransform(1,0,0,1,0,0)},Ha:function(){this.t.setTransform(1,0,0,1,0,0);if(this.t!=this.Zd)this.Zd.drawImage(this.ug,0,0,this.V.width,this.V.height)},Hf:function(c){if(!c.Ma)c.Ma=ma.document.createElement("canvas");var d=this.pe*c.Ub,k=c.o.height*d;c.Ma.width=Math.floor(c.o.width*d)+1;c.Ma.height=Math.floor(k)+1;c.Ma.getContext("2d").drawImage(c.o,0,0,c.Ma.width,c.Ma.height);c.vd=this.pe},Nj:0,t:null,Zd:null,V:null,ug:null,C:null,$d:0,ae:0,zd:0,
yd:0,Aa:[],wh:1},wb={alpha:false,depth:false,antialias:false,stencil:false,failIfMajorPerformanceCaveat:true};mk();var c=Ga.getContext("webgl",wb)||Ga.getContext("experimental-webgl",wb),wa;if(null==c){fa("Using 2D canvas.");ub()}else{fa("Using WebGL canvas.");d.V=Ga;d.G=c;Ga.addEventListener("webglcontextlost",function(c){c.preventDefault();d.hd=true},false);Ga.addEventListener("webglcontextrestored",qb,false);d.r();if(!d.If())ub();else{wa=d;wa.jd=true}}lk(wa);var ba={t:null,sa:"none",Mc:"none",
fd:"wav"},wb=false,zg=new ma.Audio,ra=false,za=false,xh=false;try{ra=zg.canPlayType("audio/wav")||zg.canPlayType("audio/wave")}catch(aa){}try{za=zg.canPlayType('audio/mpeg; codecs="mp3"')}catch(mb){}try{xh=zg.canPlayType('audio/ogg; codecs="vorbis"')}catch(Qo){}if(ra){fa("Detected WAV format support");wb=true}if(za){fa("Detected MP3 format support");wb=true}if(xh){fa("Detected OGG format support");wb=true}if(wb){if("undefined"!=typeof ma.AudioContext){fa("Using AudioContext for sound.");ba.t=new ma.AudioContext;
ba.sa="wa"}else if("undefined"!=typeof ma.webkitAudioContext){fa("Using webkitAudioContext for sound.");ba.t=new ma.webkitAudioContext;ba.sa="wa"}else if((O||$e)&&vb){if($e)fa("Avoiding HTML5 sound: anroid.");else fa("Avoiding HTML5 sound: browser too old.");ba.sa="none"}else{fa("Using HTML5 Audio for sound.");ba.sa="html5"}if("none"!=ba.sa){if("wa"==ba.sa&&th){fa("Using AudioContext for Music ( no streaming! )");ba.Mc="wa"}else{fa("Using HTML5 Audio for Music");ba.Mc="html5"}if($e&&ra)ba.fd="wav";
else if(xh)ba.fd="ogg";else if(za)ba.fd="mp3";else ba.fd="wav";fa("Using '"+ba.fd+"' format for sound.")}}else fa("Not using sound because none of the available audio formats are supported.");var E={},D=0,L=0,q=0,O=ma.document.createElement("canvas");O.width=16;O.height=16;wb=O.getContext("2d");wb.fillStyle="rgba(255,0,0,255)";wb.fillRect(0,0,O.width,O.height);var nk=new ma.Image;nk.src=O.toDataURL("image/png");var ua=[],yg={},Yc=0,Lf=0,oa=[],qk={};k("loading-bar-outer.png");k("loading-bar-inner.png");
k("game-bk.png",1);k("sun-temple.png");k("title.png");k("brick-tiles.png",1);k("concrete-block.png",1);k("concrete-block-long.png");k("concrete-block-long-wider.png");k("concrete-block-oblique.png");k("crate.png",1);k("crate-debri-0x0.png");k("crate-debri-0x11.png");k("crate-debri-0x89.png");k("crate-debri-12x44.png");k("crate-debri-79x0.png");k("crate-debri-89x75.png");k("mattress.png",1);k("nails.png",1);k("nails-short.png");k("steel-beam.png");k("platform.png",1);k("robot.png");k("robot-lamp.png");
k("switch-on.png");k("switch-off.png");k("door.png",1);k("door-mount.png",1);k("vertical-tile-wall.png",1);k("v-hand-0.png");k("v-hand-1.png");k("v-hand-2.png");k("v-hand-3.png");k("v-hand-4.png");k("photo-flare.png");k("floor.png",1);k("fire.png",1);k("ball-face-like-a-boss.png");k("ball-face-full.png");k("ball-color.png");k("ball-color-burned.png");k("ball-stone-color.png");k("ball-aura.png");k("ball-fire-ring-0.png");k("ball-fire-ring-1.png");k("ball-fire-ring-2.png");k("ball-fire-ring-3.png");
k("ball-fire-ring-4.png");k("ball-fire-ring-5.png");k("ball-fire-ring-6.png");k("fire-part-0.png");k("fire-part-1.png");k("fire-part-2.png");k("fire-part-3.png");k("fire-part-4.png");k("fire-part-2-0.png");k("fire-part-2-1.png");k("fire-part-2-2.png");k("fire-part-2-3.png");k("fire-part-2-4.png");k("ball-pops.png");k("ball-shade.png");k("ball-glow-ring.png");k("ball-piece-1-26.png");k("ball-piece-2-1.png");k("ball-piece-2-48.png");k("ball-piece-20-48.png");k("ball-piece-26-2.png");k("ball-piece-27-17.png");
k("ball-piece-29-29.png");k("ball-piece-34-19.png");k("ball-piece-4-28.png");k("smoke.png");k("teardrop.png");k("teardrop-glow.png");k("ball-fly-trace-0.png");k("ball-fly-trace-1.png");k("ball-fly-trace-2.png");k("basket-back.png",1);k("basket-case-over.png");k("basket-net.png",1);k("basket-nose.png",1);k("basket-eyes-all.png",1);k("basket-mouth-all.png",1);k("dialog-bk-big.png");k("text-you-win.png");k("you-win-happy-faces-and-stars.png");k("you-lose-poor-ball.png");k("text-you-lose.png");k("button-long.png",
1);k("button-longer.png");k("branding/famobi-html5-games.png",0,1);k("branding/hairless-button.png");k("check-circle.png");k("check.png");k("button-options.png");k("button-continue.png");k("button-restart.png");k("button-more-games.png");k("settings-button.png",1);k("white-box.png");k("trampoline.png",1);k("waters-0.png",1);k("waters-1.png",1);k("waters-2.png",1);k("waters-3.png",1);k("waters-4.png",1);k("waters-5.png",1);k("waters-6.png",1);k("waters-7.png",1);k("bubble.png");k("lightning-0.png");
k("lightning-1.png");k("lightning-2.png");k("lightning-3.png");k("lightning-4.png");k("lightner.png");k("barrel.png",1);k("barrel-damaged-0.png");k("barrel-damaged-1.png");k("explosion.png");k("spring-0.png");k("spring-1.png");k("spring-2.png");k("star-particle.png");k("glowing-ring.png");k("star-glows.png",1);k("bonus-gravity.png");k("bonus-stones.png");k("bonus-pump.png");k("pause-bk.png");k("button-music-on.png");k("button-music-off.png");k("button-sound-on.png");k("button-sound-off.png");k("button-quit.png");
k("text-game-paused.png");k("power-ball.png");k("mysterious-basket.png");k("star-win.png");k("star-big-particle.png");k("text-select-level-ru.png",0,0,[1]);k("text-select-level-es.png",0,0,[2]);k("text-select-level.png",0,0,[0,3,4,5,6,7,8]);k("level-arrow-right.png");k("level-arrow-left.png");k("level-star.png");k("level-stars.png");k("lock.png");k("level-button.png");k("friendly-basket.png");k("confident-ball.png");k("ball-presents.png");k("basket-presents.png");k("text-game-complete.png");k("button-to-main-menu.png");
k("level-select-background.png");k("ball-basket-for-cover.png");k("button-walkthrough.png");k("text-options.png");k("text-credits.png");k("button-back.png");k("button-info.png");k("clocks.png",1);k("direction-arrow-top.png");k("direction-arrow-middle.png");k("direction-arrow-bottom.png");k("direction-arrow-empty-top.png");k("direction-arrow-empty-middle.png");k("direction-arrow-empty-bottom.png");k("button-hourglass.png",1);k("dotted-circle.png");k("crosshair.png");k("tutorial-hand-right.png");k("tutorial-hand-up.png");
k("tutorial-hand-left.png");k("tutorial-hand-point.png");k("tutorial-hand-holds.png");k("hand.png");k("game-touch-helper.png");k("thumb.png");k("speech-bubble.png");k("speech-bubble-high.png");k("speech-bubble-higher.png");k("iphone-6.png");k("text-developed-by.png");k("text-art-by.png");k("text-novpixel.png");k("joystick.png");k("jump-arrow.png");k("finger-spot.png");k("keyboard-buttons.png");k("keyboard-space-big.png");k("keyboard-key.png");k("keyboard-arrow.png");k("avoid-nails.png");k("green-dash.png");
k("green-dash-hollow.png");k("jump-energy-bar.png");k("jump-energy-bar-aura.png");k("jump-energy-ball-face.png");k("jump-energy-fire.png");V("menu-change.mpc");V("menu-change-rev.mpc");V("time-is-up.mpc");V("incoming-sign.mpc");V("button-over.mpc");V("button-click.mpc");V("splash.mpc");V("pop.mpc");V("star-collected.mpc");V("star-hits.mpc");V("star-inserted.mpc");V("net.mpc");V("net-subtle.mpc");V("extinguishing.mpc");V("slow-down.mpc");V("rage-mode.mpc");V("bell.mpc");V("swoosh.mpc");V("swoosh-water.mpc");
V("ding.mpc");V("you-lose.mpc");V("you-win.mpc");V("rechazado.mpc");V("robo-talk.mpc");V("barrel-explodes.mpc");V("pumped-jump.mpc");V("level-start.mpc");V("shootout-start.mpc");V("basket-giggle.mpc");V("basket-cry.mpc");V("bounce-0.mpc");V("bounce-1.mpc");V("bounce-metal-0.mpc");V("bounce-mat.mpc");V("crate-0.mpc");V("crate-1.mpc");V("bounce-stoned-0.mpc");V("trampo-0.mpc");V("basket-contact-0.mpc");V("basket-contact-1.mpc");V("basket-contact-2.mpc");V("electric-charge-0.mpc");V("electric-charge-1.mpc");
V("spring-0.mpc");V("barrel-bang-0.mpc");V("barrel-bang-1.mpc");V("ball-burning.mpc");V("ball-hmmm.mpc");V("hit-crowd-photo-taking.mpc");V("crowd-uplifted.mpc");V("crowd-downlifted.mpc");V("crowd-downlifted-milder-0.mpc");V("crowd-downlifted-milder-1.mpc");V("stoned.mpc");V("bonus-pump.mpc");V("bonus-gravity.mpc");V("door-closes.mpc");V("door-opens.mpc");V("switch-click.mpc");V("ball-shocked-0.mpc");V("ball-shocked-1.mpc");V("wall-hit-0.mpc");V("wall-hit-1.mpc");V("wall-hit-2.mpc");Ii("music0.mpc",
85.57);Ii("music1.mpc",88.857);Ii("ambience.mpc",22.196);k("font-button-big-on-over-ru.png",0,1,[1]);k("font-button-big-on-over.png",0,1,[0,2,3,4,5,6,7,8]);k("font-button-big-ru.png",0,1,[1]);k("font-button-big.png",0,1,[0,2,3,4,5,6,7,8]);k("font-button-small-on-over-ru.png",0,1,[1]);k("font-button-small-on-over-de.png",0,1,[3,4]);k("font-button-small-on-over.png",0,1,[0,2,5,6,7,8]);k("font-button-small-ru.png",0,1,[1]);k("font-button-small-de.png",0,1,[3,4]);k("font-button-small.png",0,1,[0,2,5,
6,7,8]);k("font-level-selection-big.png");k("font-level-selection.png");k("font-time.png",1);k("font-seconds-left.png");k("font-fancy-ru.png",0,0,[1]);k("font-fancy-de.png",0,0,[3]);k("font-fancy-tr.png",0,0,[4]);k("font-fancy-pl.png",0,0,[8]);k("font-fancy.png",0,0,[0,2,5,6,7]);k("font-speech-ru.png",0,1,[1]);k("font-speech-tr.png",0,1,[4]);k("font-speech-de.png",0,1,[3]);k("font-speech-fr.png",0,1,[5]);k("font-speech.png",0,1,[0,2,6,7,8]);k("font-stat-numbers.png");k("font-hint-ru.png",0,0,[1]);
k("font-hint.png",0,0,[0,2,3,4,5,6,7,8]);k("font-level-ru.png",0,0,[1]);k("font-level-tr.png",0,0,[4]);k("font-level.png",0,0,[0,2,3,5,6,7,8]);var xa={};xa.fe=E;xa.Uc=yg;xa.yh=qk;var Kf={K:0,Ba:0,M:0,ta:0},K={K:0,Ba:0,M:0,ta:0},uh=0,Ki=new Eb,ta=false,rk=false,Da=0,r=0,vh=false,wh=null,Ob=null;if("function"==typeof ma.requestAnimationFrame){wh=ma.requestAnimationFrame;wh(Ji)}else Ob=ma.setInterval(Ji,1E3/60)})();
