!function(t,e){"use strict";function n(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var o=n((function(e,n){e.exports=function(t){let e=class extends t.Texture{constructor(){super(document.createElement("canvas"));let e=null,n=()=>e||(e=this.createDrawable()),o=()=>n().width,i=()=>n().height,r=!0,a=1,l=()=>t.MathUtils.ceilPowerOfTwo(o()*a),s=()=>t.MathUtils.ceilPowerOfTwo(i()*a),f=t=>{if(a!==t){let e=l(),n=s();a=t;let o=l(),i=s();o===e&&i===n||(r=!0)}},c=(()=>{let e=new t.Vector3,n=new t.Vector3,r=new t.Vector3;return(t,a,l)=>{let s=o(),f=i();if(s&&f){t.getWorldPosition(n),l.getWorldPosition(e);let o=n.distanceTo(e);if(l.isPerspectiveCamera&&(o*=2*Math.tan(THREE.Math.degToRad(l.fov)/2)),(l.isPerspectiveCamera||l.isOrthographicCamera)&&(o/=l.zoom),o){var c,d;t.getWorldScale(r);let e=null!==(c=null===(d=a.capabilities)||void 0===d?void 0:d.maxTextureSize)&&void 0!==c?c:1/0;return Math.min(Math.max(r.x/o*(a.domElement.offsetWidth/s),r.y/o*(a.domElement.offsetHeight/f)),e/s,e/f)}}return 0}})();Object.defineProperties(this,{width:{get:o},height:{get:i},pixelRatio:{get:()=>a,set:f},needsRedraw:{set(t){t&&(r=!0,e=null)}}}),Object.assign(this,{redraw(){if(r){let t=this.image,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),t.width=l(),t.height=s(),t.width&&t.height?(e.save(),e.scale(t.width/o(),t.height/i()),((...t)=>{n().draw(...t)})(e),e.restore()):t.width=t.height=1,r=!1,this.needsUpdate=!0}},setOptimalPixelRatio(...t){f(c(...t))}})}};e.prototype.isDynamicTexture=!0;let n=class extends e{constructor({alignment:t="center",color:e="#fff",fontFamily:n="sans-serif",fontSize:o=16,fontStyle:i="normal",fontVariant:r="normal",fontWeight:a="normal",lineGap:l=1/4,padding:s=.5,strokeColor:f="#fff",strokeWidth:c=0,text:d=""}={}){super(),Object.entries({alignment:t,color:e,fontFamily:n,fontSize:o,fontStyle:i,fontVariant:r,fontWeight:a,lineGap:l,padding:s,strokeColor:f,strokeWidth:c,text:d}).forEach((([t,e])=>{Object.defineProperty(this,t,{get:()=>e,set(t){e!==t&&(e=t,this.needsRedraw=!0)}})}))}get font(){return function(t,e,n,o,i){let r=document.createElement("span");return r.style.font="1px serif",r.style.fontFamily=t,r.style.fontSize="".concat(e,"px"),r.style.fontStyle=n,r.style.fontVariant=o,r.style.fontWeight=i,r.style.font}(this.fontFamily,this.fontSize,this.fontStyle,this.fontVariant,this.fontWeight)}checkFontFace(){try{return document.fonts.check(this.font)}catch{}return!0}async loadFontFace(){try{return await document.fonts.load(this.font)}catch{}}createDrawable(){let{alignment:t,color:e,font:n,fontSize:o,lineGap:i,padding:r,strokeColor:a,strokeWidth:l,text:s}=this;r*=o,i*=o,l*=o;let f=s?s.split("\n"):[],c=f.length,d=o+i,h=c?(()=>{let t=document.createElement("canvas").getContext("2d");return t.font=n,Math.max(...f.map((e=>t.measureText(e).width)))})():0,p=r+l/2,u=h+2*p;return{width:u,height:(c?o+d*(c-1):0)+2*p,draw(i){let r,s=p+o/2;Object.assign(i,{fillStyle:e,font:n,lineWidth:l,miterLimit:1,strokeStyle:a,textAlign:(()=>{switch(t){case"left":return r=p,"left";case"right":return r=u-p,"right"}return r=u/2,"center"})(),textBaseline:"middle"}),f.forEach((t=>{i.fillText(t,r,s),l&&i.strokeText(t,r,s),s+=d}))}}}};return n.prototype.isTextTexture=!0,n}(t)})),i=n((function(e,n){e.exports=function(t,e){function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(e);let i=class extends t.Sprite{constructor(e){let n=new o.default(e);super(new t.SpriteMaterial({depthWrite:!1,map:n}))}onBeforeRender(t,e,n){let{material:o}=this,{map:i}=o;if(i.checkFontFace()){let{scale:e}=this,{height:o,width:r}=i;r&&o?(e.setX(r).setY(o),i.setOptimalPixelRatio(this,t,n),i.redraw()):e.setScalar(1)}else i.loadFontFace()}dispose(){let{material:t}=this,{map:e}=t;e.dispose(),t.dispose()}};return["alignment","color","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineGap","padding","strokeColor","strokeWidth","text"].forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.material.map[t]},set(e){this.material.map[t]=e}})})),i.prototype.isTextSprite=!0,i}(t,o)})),r="text-sprite";t.MathUtils=t.MathUtils||t.Math,e.registerComponent(r,{init:function(){let{data:t,el:e}=this,{alignment:n,color:o,fontFamily:a,fontSize:l,fontStyle:s,fontVariant:f,fontWeight:c,lineGap:d,padding:h,strokeColor:p,strokeWidth:u,text:m}=t,g=new i({alignment:n,color:o,fontFamily:a,fontSize:l,fontStyle:s,fontVariant:f,fontWeight:c,lineGap:d,padding:h,strokeColor:p,strokeWidth:u,text:m});e.setObject3D(r,g)},remove:function(){let{el:t}=this;t.getObject3D(r).dispose(),t.removeObject3D(r)},schema:{alignment:{type:"string",default:"center"},color:{type:"color",default:"#fff"},fog:{type:"boolean",default:!1},fontFamily:{type:"string",default:"sans-serif"},fontSize:{type:"number",default:1},fontStyle:{type:"string",default:"normal"},fontVariant:{type:"string",default:"normal"},fontWeight:{type:"string",default:"normal"},lineGap:{type:"number",default:.15},opacity:{type:"number",default:1},padding:{type:"number",default:.25},strokeColor:{type:"color",default:"#000"},strokeWidth:{type:"number",default:0},text:{type:"string",default:""},transparent:{type:"boolean",default:!0}},update:function(t){let{data:e,el:n}=this,{alignment:o,color:i,fog:a,fontFamily:l,fontSize:s,fontStyle:f,fontVariant:c,fontWeight:d,lineGap:h,opacity:p,padding:u,strokeColor:m,strokeWidth:g,text:y,transparent:x}=e,w=n.getObject3D(r);Object.keys(t).length&&Object.assign(w,{alignment:o,color:i,fontFamily:l,fontSize:s,fontStyle:f,fontVariant:c,fontWeight:d,lineGap:h,padding:u,strokeColor:m,strokeWidth:g,text:y});let{material:S}=w;Object.assign(S,{fog:a,opacity:p,transparent:x})}})}(THREE,AFRAME);
