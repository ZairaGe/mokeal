import{b as O}from"./chunk-2MRGFY2T.js";import{t as T}from"./chunk-VIDFJCIH.js";import{Db as h,Jb as D,La as v,Lb as l,Qa as r,W as m,Xb as S,Yb as i,aa as _,ba as x,db as u,ma as f,qb as g,rb as y,sb as C,ub as A,vb as M,wb as c,xb as a,yb as s,zb as b}from"./chunk-T6YFHVDB.js";import{a as p,b as d}from"./chunk-C6Q5SG76.js";function N(n,t){if(n&1){let e=h();i(0,`
        `),a(1,"ngb-alert",1),D("closed",function(){_(e);let I=l().$implicit,F=l();return x(F.close(I))}),i(2,`
          `),b(3,"pre",2),i(4,`
        `),s(),i(5,`
      `)}if(n&2){let e=l().$implicit;r(),c("type",e.type),r(2),c("innerHTML",e.message,v)}}function j(n,t){if(n&1&&(i(0,`
    `),a(1,"div"),i(2,`
      `),g(3,N,6,2),s(),i(4,`
  `)),n&2){let e=t.$implicit,o=l();r(),S(o.setClasses(e)),r(2),y(e.message?3:-1)}}var w=class n{constructor(){this.alerts=f([]);this.alertService=m(T)}ngOnInit(){this.alerts.set(this.alertService.get())}setClasses(t){let e={"jhi-toast":!!t.toast};return t.position?d(p({},e),{[t.position]:!0}):e}ngOnDestroy(){this.alertService.clear()}close(t){t.close?.(this.alerts())}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=u({type:n,selectors:[["jhi-alert"]],decls:5,vars:0,consts:[["role","alert",1,"alerts"],[3,"closed","type"],[3,"innerHTML"]],template:function(e,o){e&1&&(a(0,"div",0),i(1,`
  `),A(2,j,5,3,null,null,C),s(),i(4,`
`)),e&2&&(r(2),M(o.alerts()))},dependencies:[O],encapsulation:2})}};export{w as a};
