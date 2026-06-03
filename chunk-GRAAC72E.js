import{a as pt,b as ft}from"./chunk-QKJ5OE67.js";import{b as K}from"./chunk-JR25LAWI.js";import{a as ut}from"./chunk-LNDSYDYJ.js";import{a as ct,b as st}from"./chunk-YCTIQ23U.js";import{a as dt,b as mt}from"./chunk-ZIIA3V4Y.js";import{a as et,b as it,e as ot,f as lt}from"./chunk-Z25ZQRUB.js";import"./chunk-34TH6SZL.js";import{a as nt,b as R,c as at}from"./chunk-LGDKSRGQ.js";import{g as Q,i as W,k as J,t as M}from"./chunk-L7QYCLNK.js";import{a as rt}from"./chunk-DWQAEHD7.js";import{c as w}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as tt}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as k}from"./chunk-BVUWRSZD.js";import"./chunk-SS72KG6D.js";import"./chunk-PITESBFZ.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as A,c as I}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as X,d as Y,e as Z}from"./chunk-56XJVXYY.js";import{B as O,h as $,k as U}from"./chunk-FINXBEYE.js";import{Db as C,Jb as g,Lb as u,M as F,Qa as o,W as p,Yb as t,Zb as D,_b as m,aa as b,ba as _,db as y,ic as L,jc as E,lc as H,m as j,ma as h,mc as S,nc as V,oa as P,oc as T,qb as f,rb as x,sc as G,ub as z,vb as q,w as B,wb as d,xb as n,yb as a,zb as c}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var St=r=>({id:r});function ht(r,i){if(r&1){let e=C();t(0,`
  `),n(1,"form",0),g("ngSubmit",function(){b(e);let s=u();return _(s.confirmDelete(s.factura.id))}),t(2,`
    `),n(3,"div",1),t(4,`
      `),n(5,"h4",2),t(6,"Confirmar operaci\xF3n de borrado"),a(),t(7,`
    `),a(),t(8,`

    `),n(9,"div",3),t(10,`
      `),c(11,"jhi-alert-error"),t(12,`
      `),n(13,"p",4),t(14),a(),t(15,`
    `),a(),t(16,`

    `),n(17,"div",5),t(18,`
      `),n(19,"button",6),g("click",function(){b(e);let s=u();return _(s.cancel())}),t(20,`
        `),c(21,"fa-icon",7),t(22,"\xA0"),n(23,"span",8),t(24,"Cancelar"),a(),t(25,`
      `),a(),t(26,`

      `),n(27,"button",9),t(28,`
        `),c(29,"fa-icon",10),t(30,"\xA0"),n(31,"span",11),t(32,"Eliminar"),a(),t(33,`
      `),a(),t(34,`
    `),a(),t(35,`
  `),a(),t(36,`
`)}if(r&2){let e=u();o(13),d("translateValues",E(2,St,e.factura.id)),o(),m(`
        \xBFSeguro que quiere eliminar Factura `,e.factura.id,`?
      `)}}var N=class r{constructor(){this.facturaService=p(k);this.activeModal=p(et)}cancel(){this.activeModal.dismiss()}confirmDelete(i){this.facturaService.delete(i).subscribe(()=>{this.activeModal.close(R)})}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=y({type:r,selectors:[["ng-component"]],decls:1,vars:1,consts:[["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","facturaDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],[1,"modal-body"],["id","jhi-delete-factura-heading","jhiTranslate","mokealApp.factura.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-factura","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(e,l){e&1&&f(0,ht,37,4),e&2&&x(l.factura?0:-1)},dependencies:[tt,O,M,J,Q,W,I,A,w],encapsulation:2})}};var gt=()=>["/factura/new"],Et=(r,i,e)=>({page:r,totalItems:i,itemsPerPage:e}),Ft=r=>["/factura",r,"view"],Pt=r=>["/factura",r,"edit"];function yt(r,i){return this.trackId(i)}function Dt(r,i){r&1&&(t(0,`
    `),n(1,"div",10),t(2,`
      No hay facturas registradas a\xFAn.
      `),n(3,"div",11),t(4,`
        `),n(5,"a",12),t(6,"Crear primera factura"),a(),t(7,`
      `),a(),t(8,`
    `),a(),t(9,`
  `)),r&2&&(o(5),d("routerLink",L(1,gt)))}function Tt(r,i){if(r&1&&(t(0,`
              `),c(1,"fa-icon",37),t(2)),r&2){let e=u().$implicit;o(2),m(`
              Cliente #`,e.cliente.id,`
            `)}}function At(r,i){r&1&&t(0,`
              \u2014
            `)}function It(r,i){if(r&1&&(t(0,`
              `),c(1,"fa-icon",38),t(2)),r&2){let e=u().$implicit;o(2),m(`
              Servicio #`,e.servicio.id,`
            `)}}function Mt(r,i){r&1&&t(0,`
              \u2014
            `)}function Ot(r,i){if(r&1&&(t(0),S(1,"formatMediumDate")),r&2){let e=u().$implicit;m(`
              Vence: `,V(1,1,e.fechaVencimiento),`
            `)}}function kt(r,i){if(r&1){let e=C();t(0,`
        `),n(1,"div",24),t(2,`
          `),n(3,"div",25),t(4,`
            `),n(5,"div",26),t(6),a(),t(7,`
            `),n(8,"div",3),t(9),S(10,"formatMediumDate"),a(),t(11,`
          `),a(),t(12,`

          `),n(13,"div",27),t(14,`
            `),f(15,Tt,3,1)(16,At,1,0),a(),t(17,`

          `),n(18,"div",28),t(19,`
            `),f(20,It,3,1)(21,Mt,1,0),a(),t(22,`

          `),n(23,"div",29),t(24,`
            `),f(25,Ot,2,3),a(),t(26,`

          `),n(27,"div",30),t(28,`
            `),n(29,"div",26),t(30),a(),t(31,`
            `),n(32,"div",3),t(33),a(),t(34,`
          `),a(),t(35,`

          `),n(36,"div",31),t(37,`
            `),n(38,"span",32),t(39),a(),t(40,`
          `),a(),t(41,`

          `),n(42,"div",33),t(43,`
            `),n(44,"a",34),t(45,"Ver"),a(),t(46,`
            `),n(47,"a",34),t(48,"Editar"),a(),t(49,`
            `),n(50,"button",35),g("click",function(){let s=b(e).$implicit,v=u(2);return _(v.delete(s))}),t(51,`
              `),c(52,"fa-icon",36),t(53,`
            `),a(),t(54,`
          `),a(),t(55,`
        `),a(),t(56,`
      `)}if(r&2){let e=i.$implicit,l=u(2);o(6),D(e.numero),o(3),D(V(10,11,e.fechaEmision)),o(6),x(e.cliente?15:16),o(5),x(e.servicio?20:21),o(5),x(e.fechaVencimiento?25:-1),o(5),m("\u20AC ",e.total),o(3),m("IVA: \u20AC ",e.iva),o(5),d("ngClass",l.getEstadoClass(e.estado)),o(),m(`
              `,l.getEstadoLabel(e.estado),`
            `),o(5),d("routerLink",E(13,Ft,e.id)),o(3),d("routerLink",E(15,Pt,e.id))}}function wt(r,i){if(r&1){let e=C();t(0,`
    `),t(1,`
    `),n(2,"div",13),t(3,`
      `),n(4,"div",14),t(5,`
        `),n(6,"div",15),t(7,`
          `),n(8,"div",16),t(9,"Total facturado"),a(),t(10,`
          `),n(11,"div",17),t(12),S(13,"number"),a(),t(14,`
        `),a(),t(15,`
      `),a(),t(16,`
      `),n(17,"div",14),t(18,`
        `),n(19,"div",15),t(20,`
          `),n(21,"div",16),t(22,"Cobrado"),a(),t(23,`
          `),n(24,"div",18),t(25),S(26,"number"),a(),t(27,`
        `),a(),t(28,`
      `),a(),t(29,`
      `),n(30,"div",14),t(31,`
        `),n(32,"div",15),t(33,`
          `),n(34,"div",16),t(35,"Pendiente"),a(),t(36,`
          `),n(37,"div",19),t(38),S(39,"number"),a(),t(40,`
        `),a(),t(41,`
      `),a(),t(42,`
      `),n(43,"div",14),t(44,`
        `),n(45,"div",15),t(46,`
          `),n(47,"div",16),t(48,"Borradores"),a(),t(49,`
          `),n(50,"div",17),t(51),a(),t(52,`
        `),a(),t(53,`
      `),a(),t(54,`
    `),a(),t(55,`

    `),t(56,`
    `),n(57,"div",20),t(58,`
      `),z(59,kt,57,17,null,null,yt,!0),a(),t(61,`

    `),t(62,`
    `),n(63,"div",21),t(64,`
      `),c(65,"jhi-item-count",22),t(66,`
      `),n(67,"ngb-pagination",23),g("pageChange",function(s){b(e);let v=u();return _(v.navigateToPage(s))}),a(),t(68,`
    `),a(),t(69,`
  `)}if(r&2){let e=u();o(12),m("\u20AC ",T(13,11,e.getTotalFacturado(),"1.0-0")),o(13),m("\u20AC ",T(26,14,e.getTotalPorEstado("PAGADA"),"1.0-0")),o(13),m("\u20AC ",T(39,17,e.getTotalPendiente(),"1.0-0")),o(13),D(e.getCountPorEstado("BORRADOR")),o(8),q(e.facturas()),o(6),d("params",H(20,Et,e.page(),e.totalItems(),e.itemsPerPage())),o(2),d("collectionSize",e.totalItems())("page",e.page())("pageSize",e.itemsPerPage())("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}var xt=class r{constructor(){this.subscription=null;this.facturas=h([]);this.sortState=ot({});this.filters=new ft;this.itemsPerPage=h(20);this.totalItems=h(0);this.page=h(1);this.router=p(Y);this.facturaService=p(k);this.isLoading=this.facturaService.facturasResource.isLoading;this.activatedRoute=p(X);this.sortService=p(lt);this.filterOptions=K(this.filters.filterChanges);this.modalService=p(it);this.trackId=i=>this.facturaService.getFacturaIdentifier(i);P(()=>{let i=this.facturaService.facturasResource.headers();i&&this.fillComponentAttributesFromResponseHeader(i)}),P(()=>{this.facturas.set(this.fillComponentAttributesFromResponseBody([...this.facturaService.facturas()]))}),P(()=>{let i=this.filterOptions();i&&G(()=>{this.handleNavigation(1,this.sortState(),i)})})}ngOnInit(){this.subscription=j([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe(F(([i,e])=>this.fillComponentAttributeFromRoute(i,e)),F(()=>this.load())).subscribe()}delete(i){let e=this.modalService.open(N,{size:"lg",backdrop:"static"});e.componentInstance.factura=i,e.closed.pipe(B(l=>l===R),F(()=>this.load())).subscribe()}load(){this.queryBackend()}navigateToWithComponentValues(i){this.handleNavigation(this.page(),i,this.filters.filterOptions)}navigateToPage(i){this.handleNavigation(i,this.sortState(),this.filters.filterOptions)}fillComponentAttributeFromRoute(i,e){let l=i.get(mt);this.page.set(+(l??1)),this.sortState.set(this.sortService.parseSortParam(i.get(nt)??e[at])),this.filters.initializeFromParams(i)}fillComponentAttributesFromResponseBody(i){return i}fillComponentAttributesFromResponseHeader(i){this.totalItems.set(Number(i.get(dt)))}queryBackend(){let e={page:this.page()-1,size:this.itemsPerPage(),sort:this.sortService.buildSortParam(this.sortState())};for(let l of this.filters.filterOptions)e[l.name]=l.values;this.facturaService.facturasParams.set(e)}handleNavigation(i,e,l){let s={page:i,size:this.itemsPerPage(),sort:this.sortService.buildSortParam(e)};if(l)for(let v of l)s[v.nameAsQueryParam()]=v.values;this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:s})}getTotalFacturado(){return this.facturas().reduce((i,e)=>i+(Number(e.total)||0),0)}getTotalPendiente(){return this.facturas().filter(i=>i.estado==="EMITIDA"||i.estado==="BORRADOR").reduce((i,e)=>i+(Number(e.total)||0),0)}getTotalPorEstado(i){return this.facturas().filter(e=>e.estado===i).reduce((e,l)=>e+(Number(l.total)||0),0)}getCountPorEstado(i){return this.facturas().filter(e=>e.estado===i).length}getEstadoLabel(i){return i?{BORRADOR:"Borrador",EMITIDA:"Emitida",PAGADA:"Pagada",CANCELADA:"Cancelada"}[i]??i:"\u2014"}getEstadoClass(i){return i?{BORRADOR:"b-pendiente",EMITIDA:"b-fuera",PAGADA:"b-confirmado",CANCELADA:"b-pendiente"}[i]??"":""}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=y({type:r,selectors:[["jhi-factura"]],decls:36,vars:7,consts:[[1,"container-fluid","px-4","py-4","bg-mokeal"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-semibold","mb-1"],[1,"text-muted","small"],[1,"d-flex","gap-2"],[1,"btn","btn-sm","btn-outline-secondary",3,"click","disabled"],["icon","sync",3,"animation"],[1,"btn","btn-sm","btn-primary",3,"routerLink"],["icon","plus"],[3,"filters"],[1,"content-card","text-center","py-5","text-muted"],[1,"mt-3"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"row","g-3","mb-4"],[1,"col-md-3"],[1,"metric-card"],[1,"metric-label"],[1,"metric-value"],[1,"metric-value",2,"color","#1d9e75"],[1,"metric-value",2,"color","#e24b4a"],[1,"factura-list"],[1,"d-flex","justify-content-between","align-items-center","mt-4"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"],[1,"factura-row"],[1,"factura-numero"],[1,"fw-semibold"],[1,"factura-cliente","text-muted","small"],[1,"factura-servicio","text-muted","small"],[1,"factura-vencimiento","text-muted","small"],[1,"factura-importes"],[1,"factura-estado"],[1,"badge-custom",3,"ngClass"],[1,"factura-acciones"],[1,"btn","btn-sm","btn-outline-secondary",3,"routerLink"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["icon","times"],["icon","user",1,"me-1"],["icon","calendar",1,"me-1"]],template:function(e,l){e&1&&(n(0,"div",0),t(1,`
  `),n(2,"div",1),t(3,`
    `),n(4,"div"),t(5,`
      `),n(6,"h4",2),t(7,"Facturas"),a(),t(8,`
      `),n(9,"div",3),t(10),a(),t(11,`
    `),a(),t(12,`
    `),n(13,"div",4),t(14,`
      `),n(15,"button",5),g("click",function(){return l.load()}),t(16,`
        `),c(17,"fa-icon",6),t(18,`
      `),a(),t(19,`
      `),n(20,"a",7),t(21," "),c(22,"fa-icon",8),t(23," Nueva factura "),a(),t(24,`
    `),a(),t(25,`
  `),a(),t(26,`

  `),c(27,"jhi-alert-error"),t(28,`
  `),c(29,"jhi-alert"),t(30,`
  `),c(31,"jhi-filter",9),t(32,`

  `),f(33,Dt,10,2)(34,wt,70,24),a(),t(35,`
`)),e&2&&(o(10),m("",l.facturas().length," facturas encontradas"),o(5),d("disabled",l.isLoading()),o(2),d("animation",l.isLoading()?"spin":void 0),o(3),d("routerLink",L(6,gt)),o(11),d("filters",l.filters),o(2),x(l.facturas().length===0?33:34))},dependencies:[Z,M,I,A,w,rt,O,pt,ct,st,$,ut,U],styles:[".bg-mokeal[_ngcontent-%COMP%]{background:#f8f8f6;min-height:calc(100vh - 60px)}.content-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:20px 22px}.metric-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:16px 18px}.metric-card[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%]{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:4px;font-weight:500}.metric-card[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%]{font-size:22px;font-weight:500}.factura-list[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;overflow:hidden}.factura-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:14px 18px;border-bottom:1px solid #f0f0ec;transition:background .1s}.factura-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.factura-row[_ngcontent-%COMP%]:hover{background:#fafaf8}.factura-numero[_ngcontent-%COMP%]{min-width:130px;flex-shrink:0}.factura-cliente[_ngcontent-%COMP%], .factura-servicio[_ngcontent-%COMP%]{min-width:100px;flex-shrink:0}.factura-vencimiento[_ngcontent-%COMP%]{flex:1;min-width:0}.factura-importes[_ngcontent-%COMP%]{min-width:90px;text-align:right;flex-shrink:0}.factura-estado[_ngcontent-%COMP%]{min-width:80px;text-align:center;flex-shrink:0}.factura-acciones[_ngcontent-%COMP%]{display:flex;gap:6px;flex-shrink:0}.badge-custom[_ngcontent-%COMP%]{font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500;white-space:nowrap}.badge-custom.b-confirmado[_ngcontent-%COMP%]{background:#eaf3de;color:#27500a}.badge-custom.b-pendiente[_ngcontent-%COMP%]{background:#fcebeb;color:#791f1f}.badge-custom.b-fuera[_ngcontent-%COMP%]{background:#e1f5ee;color:#085041}"]})}};export{xt as Factura};
