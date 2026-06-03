import{a as x}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as h}from"./chunk-56XJVXYY.js";import{B as b,z as v}from"./chunk-FINXBEYE.js";import{Qa as o,W as s,Yb as e,Zb as f,db as c,ma as m,qb as g,rb as p,xb as r,yb as i,zb as u}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";function y(n,t){n&1&&(e(0,`
        `),r(1,"div",5),e(2),i(),e(3,`
      `)),n&2&&(o(2),f(t))}var l=class n{constructor(){this.errorMessage=m(void 0);this.translateService=s(v);this.route=s(h)}ngOnInit(){this.route.data.subscribe(t=>{t.errorMessage&&(this.errorKey=t.errorMessage,this.getErrorMessageTranslation(),this.langChangeSubscription=this.translateService.onLangChange.subscribe(()=>this.getErrorMessageTranslation()))})}ngOnDestroy(){this.langChangeSubscription&&this.langChangeSubscription.unsubscribe()}getErrorMessageTranslation(){this.errorMessage.set(""),this.errorKey&&this.translateService.get(this.errorKey).subscribe(t=>{this.errorMessage.set(t)})}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["jhi-error"]],decls:18,vars:1,consts:[[1,"row"],[1,"col-md-4"],[1,"hipster","img-fluid","rounded"],[1,"col-md-8"],["jhiTranslate","error.title"],[1,"alert","alert-danger"]],template:function(a,S){if(a&1&&(r(0,"div"),e(1,`
  `),r(2,"div",0),e(3,`
    `),r(4,"div",1),e(5,`
      `),u(6,"span",2),e(7,`
    `),i(),e(8,`

    `),r(9,"div",3),e(10,`
      `),r(11,"h1",4),e(12,"\xA1P\xE1gina de error!"),i(),e(13,`

      `),g(14,y,4,1),i(),e(15,`
  `),i(),e(16,`
`),i(),e(17,`
`)),a&2){let d;o(14),p((d=S.errorMessage())?14:-1,d)}},dependencies:[x,b],encapsulation:2})}};export{l as default};
