"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[746],{8746:(it,W,G)=>{G.r(W),G.d(W,{RH3Painter:()=>U,drawHistDisplayItem:()=>et});var J=G(5072),F=G(8872),$=G(2843),V=G(9964),X=G(3804),Y=G(2521),u=G(7615),Q=G(7908),q=G(2125),tt=G(8537);class U extends Y.G{getDimension(){return 3}scanContent(t){if(t&&this.nbinsx&&this.nbinsy&&this.nbinsz)return;const e=this.getHisto();if(e){if(this.extractAxesProperties(3),this.isDisplayItem())this.gminbin=e.fContMin,this.gminposbin=e.fContMinPos>0?e.fContMinPos:null,this.gmaxbin=e.fContMax;else{this.gminbin=this.gmaxbin=e.getBinContent(1,1,1);for(let i=0;i<this.nbinsx;++i)for(let s=0;s<this.nbinsy;++s)for(let l=0;l<this.nbinsz;++l){const r=e.getBinContent(i+1,s+1,l+1);r<this.gminbin?this.gminbin=r:r>this.gmaxbin&&(this.gmaxbin=r)}}this.draw_content=0!==this.gmaxbin||0!==this.gminbin}}countStat(){const t=this.getHisto(),e=this.getAxis("x"),i=this.getAxis("y"),s=this.getAxis("z"),l=this.getSelectIndex("x","left"),r=this.getSelectIndex("x","right"),M=this.getSelectIndex("y","left"),h=this.getSelectIndex("y","right"),c=this.getSelectIndex("z","left"),f=this.getSelectIndex("z","right"),b={name:t.fName,entries:0,integral:0,meanx:0,meany:0,meanz:0,rmsx:0,rmsy:0,rmsz:0};let w,E,B,S,T,I,O,k,L,H,_=0,C=0,v=0,D=0,p=0,y=0,z=0;for(w=1;w<=this.nbinsx;++w)for(S=e.GetBinCoord(w-.5),T=w<=l+1?0:w>r+1?2:1,E=1;E<=this.nbinsy;++E)for(I=i.GetBinCoord(E-.5),O=E<=M+1?0:E>h+1?2:1,B=1;B<=this.nbinsz;++B)k=s.GetBinCoord(B-.5),L=B<=c+1?0:B>f+1?2:1,H=t.getBinContent(w,E,B),b.entries+=H,1===T&&1===O&&1===L&&(_+=H,C+=S*H,v+=I*H,D+=k*H,p+=S**2*H,y+=I**2*H,z+=k**2*H);return Math.abs(_)>1e-300&&(b.meanx=C/_,b.meany=v/_,b.meanz=D/_,b.rmsx=Math.sqrt(Math.abs(p/_-b.meanx**2)),b.rmsy=Math.sqrt(Math.abs(y/_-b.meany**2)),b.rmsz=Math.sqrt(Math.abs(z/_-b.meanz**2))),b.integral=_,b}fillStatistic(t,e){const i=this.countStat(),s=e%10,l=Math.floor(e/10)%10,r=Math.floor(e/100)%10,M=Math.floor(e/1e3)%10,h=Math.floor(e/1e6)%10;return t.clearStat(),s>0&&t.addText(i.name),l>0&&t.addText("Entries = "+t.format(i.entries,"entries")),r>0&&(t.addText("Mean x = "+t.format(i.meanx)),t.addText("Mean y = "+t.format(i.meany)),t.addText("Mean z = "+t.format(i.meanz))),M>0&&(t.addText("Std Dev x = "+t.format(i.rmsx)),t.addText("Std Dev y = "+t.format(i.rmsy)),t.addText("Std Dev z = "+t.format(i.rmsz))),h>0&&t.addText("Integral = "+t.format(i.integral,"entries")),!0}getBinTooltips(t,e,i){const s=[],l=this.getHisto();let r=1,M=1,h=1;this.isDisplayItem()&&(r=l.stepx||1,M=l.stepy||1,h=l.stepz||1),s.push(this.getObjectHint(),`x = ${this.getAxisBinTip("x",t,r)}  xbin=${t+1}`,`y = ${this.getAxisBinTip("y",e,M)}  ybin=${e+1}`,`z = ${this.getAxisBinTip("z",i,h)}  zbin=${i+1}`);const c=l.getBinContent(t+1,e+1,i+1),f="entries = "+(r>1||M>1||h>1?"~":"");return c===Math.round(c)?s.push(f+c):s.push(f+(0,$.lg)(c,F.gStyle.fStatFormat)),s}draw3DScatter(t){var e=this;return(0,J.A)(function*(){const i=e.getHisto(),s=e.getFramePainter(),l=t.i1,r=t.i2,M=t.stepi,h=t.j1,c=t.j2,f=t.stepj,b=t.k1,_=t.k2,C=t.stepk;if(r<=l||c<=h||_<=b)return!0;const v=e.gmaxbin>1e3?1e3/e.gmaxbin:1,D=Math.max(0,e.gminbin);let p,y,z,w,E=0,B=0;for(p=l;p<r;p+=M)for(y=h;y<c;y+=f)for(z=b;z<_;z+=C)w=i.getBinContent(p+1,y+1,z+1),B+=w,!(w<=D)&&(E+=Math.round(w*v));if(E>(s.webgl?1e5:3e4))return!1;const S=new u._l(E,s.webgl,s.size_x3d/200),T=new Int32Array(E),I=e.getAxis("x"),O=e.getAxis("y"),k=e.getAxis("z"),L=new $.YF(B);let H=0;for(p=l;p<r;p+=M)for(y=h;y<c;y+=f)for(z=b;z<_;z+=C){if(w=i.getBinContent(p+1,y+1,z+1),w<=D)continue;const a=Math.round(w*v);for(let o=0;o<a;++o){const m=I.GetBinCoord(p+L.random()),x=O.GetBinCoord(y+L.random()),n=k.GetBinCoord(z+L.random());T[H++]=i.getBin(p+1,y+1,z+1),S.addPoint(s.grx(m),s.gry(x),s.grz(n))}}return S.createPoints({color:e.v7EvalColor("fill_color","red")}).then(a=>(s.add3DMesh(a),a.bins=T,a.painter=e,a.tip_color=65280,a.tooltip=function(o){const m=Math.floor(o.index/this.nvertex);if(m<0||m>=this.bins.length)return null;const x=this.painter,n=x.getFramePainter(),g=x.get3DToolTip(this.bins[m]);return g.x1=n.grx(x.getAxis("x").GetBinLowEdge(g.ix)),g.x2=n.grx(x.getAxis("x").GetBinLowEdge(g.ix+M)),g.y1=n.gry(x.getAxis("y").GetBinLowEdge(g.iy)),g.y2=n.gry(x.getAxis("y").GetBinLowEdge(g.iy+f)),g.z1=n.grz(x.getAxis("z").GetBinLowEdge(g.iz)),g.z2=n.grz(x.getAxis("z").GetBinLowEdge(g.iz+C)),g.color=this.tip_color,g.opacity=.3,g},!0))})()}draw3DBins(t){const e=this.getFramePainter();let f,i=this.v7EvalColor("fill_color","red"),s=!1,l=!1,r=!1,M=1,h=!0,c=.5;if(this.options.Sphere)c=.4,s=!0,11===this.options.Sphere&&(r=!0),f=new u.ZH.SphereGeometry(.5,e.webgl?16:8,e.webgl?12:6),f.applyMatrix4((new u.ZH.Matrix4).makeRotationX(Math.PI/2)),f.computeVertexNormals();else{const a=u.DJ.Indexes,o=u.DJ.Normals,m=u.DJ.Vertices,x=3*a.length,n=new Float32Array(x),g=new Float32Array(x);for(let d=0,A=-3;d<a.length;++d){const P=m[a[d]];n[3*d]=P.x-.5,n[3*d+1]=P.y-.5,n[3*d+2]=P.z-.5,d%6==0&&(A+=3),g[3*d]=o[A],g[3*d+1]=o[A+1],g[3*d+2]=o[A+2]}l=!0,11===this.options.Box?r=!0:12===this.options.Box?(r=!0,l=!1):this.options.Color&&(r=!0,M=.5,h=!1,l=!1,s=!0),f=new u.ZH.BufferGeometry,f.setAttribute("position",new u.ZH.BufferAttribute(n,3)),f.setAttribute("normal",new u.ZH.BufferAttribute(g,3))}h&&(h=this.gminbin||this.gmaxbin?1/Math.max(Math.abs(this.gminbin),Math.abs(this.gmaxbin)):1);const b=this.getHisto(),_=t.i1,C=t.i2,v=t.stepi,D=t.j1,p=t.j2,y=t.stepj,z=t.k1,w=t.k2,E=t.stepk,B=[],S=[],T=[];let I=null;if(r&&(I=e.getHistPalette(),this.createContour(e,I)),C<=_||p<=D||w<=z)return!0;const O=this.getAxis("x"),k=this.getAxis("y"),L=this.getAxis("z");for(let a=_;a<C;a+=v){const o=e.grx(O.GetBinLowEdge(a+1)),m=e.grx(O.GetBinLowEdge(a+2));for(let x=D;x<p;x+=y){const n=e.gry(k.GetBinLowEdge(x+1)),g=e.gry(k.GetBinLowEdge(x+2));for(let d=z;d<w;d+=E){const A=b.getBinContent(a+1,x+1,d+1);if(!this.options.Color&&(0===A||A<this.gminbin))continue;const P=h?Math.pow(Math.abs(A*h),.3333):1;if(P<.001)continue;if(r){const N=I.getContourIndex(A);if(N<0)continue;S.push(I.getColor(N))}const R=e.grz(L.GetBinLowEdge(d+1)),Z=e.grz(L.GetBinLowEdge(d+2));T.push(b.getBin(a+1,x+1,d+1));const j=new u.ZH.Matrix4;j.scale(new u.ZH.Vector3((m-o)*P,(g-n)*P,(Z-R)*P)),j.setPosition((m+o)/2,(g+n)/2,(Z+R)/2),B.push(j)}}}function H(a){let o=0;if(void 0!==this.binid)o=this.binid;else{if(void 0===a.instanceId||a.instanceId>=this.bins.length)return;o=this.bins[a.instanceId]}const m=this.painter,x=m.getFramePainter(),n=m.get3DToolTip(o),g=x.grx(O.GetBinCoord(n.ix-1)),d=x.grx(O.GetBinCoord(n.ix)),A=x.gry(k.GetBinCoord(n.iy-1)),P=x.gry(k.GetBinCoord(n.iy)),R=x.grz(L.GetBinCoord(n.iz-1)),Z=x.grz(L.GetBinCoord(n.iz)),j=(this.use_scale?Math.pow(Math.abs(n.value*this.use_scale),.3333):1)*this.tipscale;return n.x1=(d+g)/2-(d-g)*j,n.x2=(d+g)/2+(d-g)*j,n.y1=(P+A)/2-(P-A)*j,n.y2=(P+A)/2+(P-A)*j,n.z1=(Z+R)/2-(Z-R)*j,n.z2=(Z+R)/2+(Z-R)*j,n.color=this.tip_color,n}if(r&&1!==M)for(let a=0;a<B.length;++a){const o=M,m=new u.ZH.Color(S[a]),x=s?new u.ZH.MeshLambertMaterial({color:m,opacity:o,transparent:o<1,vertexColors:!1}):new u.ZH.MeshBasicMaterial({color:m,opacity:o,transparent:o<1,vertexColors:!1}),n=new u.ZH.Mesh(f,x);n.applyMatrix4(B[a]),n.painter=this,n.binid=T[a],n.tipscale=c,n.tip_color=65280,n.use_scale=h,n.tooltip=H,e.add3DMesh(n)}else{r&&(i=new u.ZH.Color(1,1,1));const a=s?new u.ZH.MeshLambertMaterial({color:i,vertexColors:!1}):new u.ZH.MeshBasicMaterial({color:i,vertexColors:!1}),o=new u.ZH.InstancedMesh(f,a,B.length);for(let m=0;m<B.length;++m)o.setMatrixAt(m,B[m]),r&&o.setColorAt(m,new u.ZH.Color(S[m]));o.painter=this,o.bins=T,o.tipscale=c,o.tip_color=65280,o.use_scale=h,o.tooltip=H,e.add3DMesh(o)}if(l){const a=u.DJ.Segments,o=new Float32Array(B.length*u.DJ.Segments.length*3);let m=0;for(let g=0;g<B.length;++g){const d=B[g].elements;for(let A=0;A<a.length;++A,m+=3){const P=u.DJ.Vertices[a[A]];o[m]=d[12]+(P.x-.5)*d[0],o[m+1]=d[13]+(P.y-.5)*d[5],o[m+2]=d[14]+(P.z-.5)*d[10]}}const x=new u.ZH.LineBasicMaterial({color:this.v7EvalColor("line_color","lightblue")}),n=(0,u.Fc)(o,x);e.add3DMesh(n)}return r&&this.updatePaletteDraw(),!0}draw3D(){if(!this.draw_content)return!1;const t=this.prepareDraw({only_indexes:!0,extra:-.5,right_extra:-1});return(this.options.Scatter?this.draw3DScatter(t):Promise.resolve(!1)).then(i=>i||this.draw3DBins(t))}redraw(t){const e=this.getFramePainter();return"resize"===t?(e.resize3D()&&e.render3D(),this):((0,tt.wx)(e),e.create3DScene(this.options.Render3D).then(()=>(e.setAxesRanges(this.getAxis("x"),this.xmin,this.xmax,this.getAxis("y"),this.ymin,this.ymax,this.getAxis("z"),this.zmin,this.zmax),e.set3DOptions(this.options),e.drawXYZ(e.toplevel,X.R,{zoom:F.settings.Zooming,ndim:3,draw:!0,v7:!0}),this.drawingBins(t))).then(()=>this.draw3D()).then(()=>(e.render3D(),e.addKeysHandler(),this)))}fillToolbar(){const t=this.getPadPainter();t&&(t.addPadButton("auto_zoom","Unzoom all axes","ToggleZoom","Ctrl *"),this.draw_content&&t.addPadButton("statbox","Toggle stat box","ToggleStatBox"),t.showPadButtons())}canZoomInside(t,e,i){let s=this.getHisto();return s&&(s=s["f"+t.toUpperCase()+"axis"]),!s||s.FindBin(i,.5)-s.FindBin(e,0)>1}autoZoom(){const t=this.getSelectIndex("x","left"),e=this.getSelectIndex("x","right"),i=this.getSelectIndex("y","left"),s=this.getSelectIndex("y","right"),l=this.getSelectIndex("z","left"),r=this.getSelectIndex("z","right"),M=this.getHisto();let h,c,f;if(t===e||i===s||l===r)return;let b=M.getBinContent(t+1,i+1,l+1);for(h=t;h<e;++h)for(c=i;c<s;++c)for(f=l;f<r;++f)b=Math.min(b,M.getBinContent(h+1,c+1,f+1));if(b>0)return;let _=e,C=t,v=s,D=i,p=r,y=l;for(h=t;h<e;++h)for(c=i;c<s;++c)for(f=l;f<r;++f)M.getBinContent(h+1,c+1,f+1)>b&&(h<_&&(_=h),h>=C&&(C=h+1),c<v&&(v=c),c>=D&&(D=c+1),f<p&&(p=f),f>=y&&(y=f+1));let z,w,E,B,S,T,I=!1;return _===C-1&&_>t+1&&C<e-1&&(_--,C++),v===D-1&&v>i+1&&D<s-1&&(v--,D++),p===y-1&&p>l+1&&y<r-1&&(p--,y++),(_>t||C<e)&&_<C-1&&(z=this.getAxis("x").GetBinLowEdge(_+1),w=this.getAxis("x").GetBinLowEdge(C+1),I=!0),(v>i||D<s)&&v<D-1&&(E=this.getAxis("y").GetBinLowEdge(v+1),B=this.getAxis("y").GetBinLowEdge(D+1),I=!0),(p>l||y<r)&&p<y-1&&(S=this.getAxis("z").GetBinLowEdge(p+1),T=this.getAxis("z").GetBinLowEdge(y+1),I=!0),I?this.getFramePainter().zoom(z,w,E,B,S,T):void 0}fillHistContextMenu(t){const e=this.getSupportedDrawOptions();t.addDrawMenu("Draw with",e,i=>{if(0===i.indexOf(F.kInspect))return this.showInspector(i);this.decodeOptions(i),this.interactiveRedraw(!0,"drawopt")})}static draw(t,e){return(0,J.A)(function*(){const i=new U(t,e);return i.mode3d=!0,(0,V.ensureRCanvas)(i,"3d").then(()=>{i.setAsMainPainter(),i.options={Box:0,Scatter:!1,Sphere:0,Color:!1,minimum:F.kNoZoom,maximum:F.kNoZoom,FrontBox:!1,BackBox:!1};const s=i.v7EvalAttr("kind",""),l=i.v7EvalAttr("sub",0),r=i.options;switch(s){case"box":r.Box=10+l;break;case"sphere":r.Sphere=10+l;break;case"col":r.Color=!0;break;case"scat":r.Scatter=!0;break;default:r.Box=10}return i.scanContent(),i.redraw()})})()}}function et(K,t,e){return t?1===t.fAxes.length?Q.RH1Painter.draw(K,t,e):2===t.fAxes.length?q.RH2Painter.draw(K,t,e):3===t.fAxes.length?U.draw(K,t,e):null:null}}}]);
//# sourceMappingURL=746.d4f535acdc4cc1ad.js.map