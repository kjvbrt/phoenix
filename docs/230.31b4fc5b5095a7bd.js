"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[230],{4230:(b,E,h)=>{h.r(E),h.d(E,{TRatioPlotPainter:()=>m});var x=h(5835),u=h(9542),w=h(6458),X=h(49),L=h(4971);class m extends w.tK{setGridsRange(a,i){let l=this.getObject();if(a===i){let r=this.getPadPainter()?.findPainterFor(l.fLowerPad,"lower_pad",u.clTPad)?.getFramePainter()?.x_handle;if(!r)return;a=r.full_min,i=r.full_max}l.fGridlines.forEach(r=>{r.fX1=a,r.fX2=i})}redraw(){var a=this;return(0,x.Z)(function*(){let i=a.getObject(),l=a.getPadPainter(),r=l.findPainterFor(i.fTopPad,"top_pad",u.clTPad);r&&r.disablePadDrawing();let f=l.findPainterFor(i.fUpperPad,"upper_pad",u.clTPad),P=f?.getMainPainter(),e=f?.getFramePainter(),p=l.findPainterFor(i.fLowerPad,"lower_pad",u.clTPad),z=p?.getMainPainter(),o=p?.getFramePainter(),_=20,D=Promise.resolve(!0);if(f&&P&&e&&o&&!f._ratio_configured){f._ratio_configured=!0,P.options.Axis=0,_=P.getHisto().fYaxis.fLabelSize,_<1&&(_=Math.round(_*Math.min(f.getPadWidth(),f.getPadHeight())));let s=P.getHisto();s.fXaxis.fLabelSize=0,s.fXaxis.fTitle="",s.fYaxis.fLabelSize=_,s.fYaxis.fTitleSize=_,f.getRootPad().fTicky=1,D=f.redrawPad().then(()=>(e.o_zoom=e.zoom,e._ratio_low_fp=o,e._ratio_painter=a,e.zoom=function(g,c,n,d,t,C){return this.o_zoom(g,c,n,d,t,C).then(T=>(this._ratio_painter.setGridsRange(e.scale_xmin,e.scale_xmax),this._ratio_low_fp.o_zoom(e.scale_xmin,e.scale_xmax),T))},e.o_sizeChanged=e.sizeChanged,e.sizeChanged=function(){this.o_sizeChanged(),this._ratio_low_fp.fX1NDC=this.fX1NDC,this._ratio_low_fp.fX2NDC=this.fX2NDC,this._ratio_low_fp.o_sizeChanged()},!0))}return D.then(()=>{if(!p||!z||!o||!e||p._ratio_configured)return a;p._ratio_configured=!0,z.options.Axis=0;let s=z.getHisto();s.fXaxis.fTitle="x",s.fXaxis.fLabelSize=_,s.fXaxis.fTitleSize=_,s.fYaxis.fLabelSize=_,s.fYaxis.fTitleSize=_,p.getRootPad().fTicky=1,p.forEachPainterInPad(n=>{(0,u.isFunc)(n?.testEditable)&&n.testEditable(!1)});let c,g=[];return i.fGridlinePositions.length>0&&i.fGridlines.length<i.fGridlinePositions.length&&i.fGridlinePositions.forEach(n=>{let d=!1;if(i.fGridlines.forEach(t=>{t.fY1==t.fY2&&Math.abs(t.fY1-n)<1e-6&&(d=!0)}),!d){let t=(0,u.create)(u.clTLine);t.fX1=e.scale_xmin,t.fX2=e.scale_xmax,t.fY1=t.fY2=n,t.fLineStyle=2,i.fGridlines.push(t),void 0===c&&(c=a.selectCurrentPad(i.fLowerPad.fName)),g.push((0,L.drawTLine)(a.getDom(),t))}}),Promise.all(g).then(()=>o.zoom(e.scale_xmin,e.scale_xmax)).then(()=>(o.o_zoom=o.zoom,o._ratio_up_fp=e,o._ratio_painter=a,o.zoom=function(n,d,t,C,T,M){return this._ratio_painter.setGridsRange(n,d),this._ratio_up_fp.o_zoom(n,d),this.o_zoom(n,d,t,C,T,M)},o.o_sizeChanged=o.sizeChanged,o.sizeChanged=function(){this.o_sizeChanged(),this._ratio_up_fp.fX1NDC=this.fX1NDC,this._ratio_up_fp.fX2NDC=this.fX2NDC,this._ratio_up_fp.o_sizeChanged()},a))})})()}static draw(a,i,l){return(0,x.Z)(function*(){let r=new m(a,i,l);return(0,X.ensureTCanvas)(r,!1).then(()=>r.redraw())})()}}}}]);
//# sourceMappingURL=230.31b4fc5b5095a7bd.js.map