import{A as zs,C as pI,E as vf,O as yf,S as oI,T as uv,_ as be,a as gp,b as ff,c as Bv,f as Lm,g as Tf,i as XD,k as zo,l as Cf,n as RO,o as tO,p as Nf,r as Ub,s as Aa,t as CI,u as Fg,v as dk,w as tr,x as jo,y as fI}from"./main-CHGMVVMN.js";var I=[`mesh`];var L=[`material`];var z=()=>[0,0,3];var q=()=>[1,1,1,10,10,10];function k(i,e){i&1&&vf(0,`ngt-box-geometry`)}var O=`
  uniform float uTime;
  uniform float uRadius;

  float getDelta() {
    return ((sin(uTime) + 1.0) / 2.0);
  }

  varying vec2 vUv;
  void main() {
    float delta = getDelta();
    vec3 v = normalize(position) * uRadius;
    vec3 pos = mix(position, v, delta);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;var U=`
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    // Generate a simple animated gradient based on time
    vec3 color = 0.5 + 0.5 * cos(uTime + vUv.xyx + vec3(0, 2, 4));
    gl_FragColor = vec4(color, 1.0);
  }
`;tO(gp);var p=class i{meshRef=dk.required(`mesh`);materialRef=dk.required(`material`);vertexShader=O;fragmentShader=U;uniforms={uTime:{value:0},uRadius:{value:1}};constructor(){CI(({delta:e})=>{this.materialRef().nativeElement.uniforms.uTime.value+=e.valueOf(),this.meshRef().nativeElement.rotation.y+=e,this.meshRef().nativeElement.rotation.x+=e,this.meshRef().nativeElement.rotation.z+=e})}logger(e){}static ɵfac=function(t){return new(t||i)};static ɵcmp=uv({type:i,selectors:[[`app-hello-cube`]],viewQuery:function(t,n){t&1&&Cf(n.meshRef,I,5)(n.materialRef,L,5),t&2&&Bv(2)},decls:6,vars:8,consts:[[`mesh`,``],[`material`,``],[`color`,`#ffffff`,3,`intensity`],[3,`position`],[4,`args`],[`wireframe`,`true`,3,`vertexShader`,`fragmentShader`,`uniforms`]],template:function(t,n){t&1&&(vf(0,`ngt-ambient-light`,2),jo(1,`ngt-mesh`,3,0),ff(3,k,1,0,`ngt-box-geometry`,4),vf(4,`ngt-shader-material`,5,1),Aa()),t&2&&(yf(`intensity`,.5),Lm(),yf(`position`,fI(6,z)),Lm(2),yf(`args`,fI(7,q)),Lm(),yf(`vertexShader`,n.vertexShader)(`fragmentShader`,n.fragmentShader)(`uniforms`,n.uniforms))},dependencies:[XD],encapsulation:2})};var V=()=>[0,0,5];var j=i=>({position:i});var B=()=>[0,0,3];function Q(i,e){i&1&&vf(0,`app-hello-cube`)}var h=class i{constructor(){}static ɵfac=function(t){return new(t||i)};static ɵcmp=uv({type:i,selectors:[[`app-animated-ng-three`]],decls:3,vars:6,consts:[[1,`canvas-wrapper`],[2,`background-color`,`whitesmoke`,3,`camera`,`lookAt`],[4,`canvasContent`]],template:function(t,n){t&1&&(jo(0,`div`,0)(1,`ngt-canvas`,1),ff(2,Q,1,0,`app-hello-cube`,2),Aa()()),t&2&&(Lm(),yf(`camera`,pI(3,j,fI(2,V)))(`lookAt`,fI(5,B)))},dependencies:[RO,Ub,p],styles:[`.canvas-wrapper[_ngcontent-%COMP%]{margin-top:3.5px;width:100%;height:50dvh}`]})};var F=class i{constructor(e,t){this.renderer=e;this.el=t;this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight,this._x=0,this._y=0,this._dx=4,this._dy=4,this._Init()}renderer;el;title=be(`Great Landing!!!`);animPlaceHolder;screenWidth;screenHeight;_x;_y;_dx;_dy;ngAfterViewInit(){this.animPlaceHolder=this.el.nativeElement.querySelector(`.animPlaceHolder`)}onresize(e){this.screenWidth=e.target.innerWidth,this.screenHeight=e.target.innerHeight,setTimeout(()=>{this.setX(1),this.setY(1)},100)}_Init(){setTimeout(()=>{this._RAF()},100)}_RAF(){this._x+=this._dx,this._y+=this._dy,requestAnimationFrame(()=>{(this._x+240>=this.screenWidth||this._x<=0)&&(this._dx*=-1),(this._y+175>=this.screenHeight/2||this._y<=0)&&(this._dy*=-1),this.renderer.setStyle(this.animPlaceHolder,`margin-left`,`${this._x}px`),this.renderer.setStyle(this.animPlaceHolder,`margin-top`,`${this._y}px`),this._RAF()})}setX(e){this._x=e}setY(e){this._y=e}logger(){console.log(this.screenWidth)}static ɵfac=function(t){return new(t||i)(zo(zs),zo(tr))};static ɵcmp=uv({type:i,selectors:[[`app-landing`]],hostBindings:function(t,n){t&1&&Tf(`resize`,function(P){return n.onresize(P)},Fg)},decls:6,vars:1,consts:[[`role`,`main`,1,`all-Elements__Wrapper`],[1,`ngThree__Wrapper`],[2,`height`,`500px`,`margin`,`0`],[1,`text-Placeholder__Wrapper`],[1,`animPlaceHolder`]],template:function(t,n){t&1&&(jo(0,`div`,0)(1,`div`,1),vf(2,`app-animated-ng-three`,2),Aa(),jo(3,`div`,3)(4,`h3`,4),oI(5),Aa()()()),t&2&&(Lm(5),Nf(n.title()))},dependencies:[h],styles:[`.ngThree__Wrapper[_ngcontent-%COMP%]{width:100%;height:50dvh}`]})};export{F as Landing};