import{a as Z,b as J,e as tt,f as et}from"./chunk-W3JMUN3W.js";import"./chunk-34TH6SZL.js";import{a as Q,b as F,c as X}from"./chunk-LGDKSRGQ.js";import{g as $,i as q,k as B,t as k}from"./chunk-L7QYCLNK.js";import{a as Y}from"./chunk-HSC43Y6H.js";import{c as z}from"./chunk-2MRGFY2T.js";import"./chunk-VIDFJCIH.js";import{a as W}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as I}from"./chunk-M6PEVJ22.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as A,c as D}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as K,d as U,e as G}from"./chunk-56XJVXYY.js";import{B as P}from"./chunk-FINXBEYE.js";import{Db as b,Jb as _,Lb as d,M as E,Qa as o,W as u,Yb as t,Zb as M,_b as c,aa as v,ba as S,db as h,ic as w,jc as C,m as R,ma as j,oa as H,qb as p,rb as f,ub as T,vb as y,w as V,wb as x,xb as e,yb as i,zb as m}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var lt=a=>({id:a});function dt(a,r){if(a&1){let n=b();t(0,`
  `),e(1,"form",0),_("ngSubmit",function(){v(n);let s=d();return S(s.confirmDelete(s.tarifa.id))}),t(2,`
    `),e(3,"div",1),t(4,`
      `),e(5,"h4",2),t(6,"Confirmar operaci\xF3n de borrado"),i(),t(7,`
    `),i(),t(8,`

    `),e(9,"div",3),t(10,`
      `),m(11,"jhi-alert-error"),t(12,`
      `),e(13,"p",4),t(14),i(),t(15,`
    `),i(),t(16,`

    `),e(17,"div",5),t(18,`
      `),e(19,"button",6),_("click",function(){v(n);let s=d();return S(s.cancel())}),t(20,`
        `),m(21,"fa-icon",7),t(22,"\xA0"),e(23,"span",8),t(24,"Cancelar"),i(),t(25,`
      `),i(),t(26,`

      `),e(27,"button",9),t(28,`
        `),m(29,"fa-icon",10),t(30,"\xA0"),e(31,"span",11),t(32,"Eliminar"),i(),t(33,`
      `),i(),t(34,`
    `),i(),t(35,`
  `),i(),t(36,`
`)}if(a&2){let n=d();o(13),x("translateValues",C(2,lt,n.tarifa.id)),o(),c(`
        \xBFSeguro que quiere eliminar Tarifa `,n.tarifa.id,`?
      `)}}var O=class a{constructor(){this.tarifaService=u(I);this.activeModal=u(Z)}cancel(){this.activeModal.dismiss()}confirmDelete(r){this.tarifaService.delete(r).subscribe(()=>{this.activeModal.close(F)})}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275cmp=h({type:a,selectors:[["ng-component"]],decls:1,vars:1,consts:[["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","tarifaDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],[1,"modal-body"],["id","jhi-delete-tarifa-heading","jhiTranslate","mokealApp.tarifa.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-tarifa","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(n,l){n&1&&p(0,dt,37,4),n&2&&f(l.tarifa?0:-1)},dependencies:[W,P,k,B,$,q,D,A,z],encapsulation:2})}};var nt=()=>["/tarifa/new"],N=a=>["/tarifa",a,"edit"];function L(a,r){return this.trackId(r)}function mt(a,r){a&1&&(t(0,`
    `),e(1,"div",9),t(2,`
      No hay tarifas configuradas a\xFAn.
      `),e(3,"div",10),t(4,`
        `),e(5,"a",11),t(6,"Crear primera tarifa"),i(),t(7,`
      `),i(),t(8,`
    `),i(),t(9,`
  `)),a&2&&(o(5),x("routerLink",w(1,nt)))}function ct(a,r){if(a&1&&(t(0,`
                  `),e(1,"div",25),t(2,`
                    `),e(3,"span",26),t(4,"\u20AC/km"),i(),t(5,`
                    `),e(6,"span",27),t(7),i(),t(8,`
                  `),i(),t(9,`
                `)),a&2){let n=d(2).$implicit;o(7),c("\u20AC ",n.precioPorKm)}}function xt(a,r){if(a&1){let n=b();t(0,`
            `),e(1,"div",18),t(2,`
              `),e(3,"div",19),t(4,`
                `),e(5,"div",20),t(6,`
                  `),e(7,"div"),t(8,`
                    `),e(9,"div",21),t(10),i(),t(11,`
                    `),e(12,"div",22),t(13,"Madrid Capital"),i(),t(14,`
                  `),i(),t(15,`
                  `),e(16,"div",23),t(17,`
                    `),m(18,"input",24),t(19,`
                  `),i(),t(20,`
                `),i(),t(21,`
                `),e(22,"div",25),t(23,`
                  `),e(24,"span",26),t(25,"1\xAA hora"),i(),t(26,`
                  `),e(27,"span",27),t(28),i(),t(29,`
                `),i(),t(30,`
                `),e(31,"div",25),t(32,`
                  `),e(33,"span",26),t(34,"Hora adicional"),i(),t(35,`
                  `),e(36,"span",27),t(37),i(),t(38,`
                `),i(),t(39,`
                `),e(40,"div",25),t(41,`
                  `),e(42,"span",26),t(43,"M\xEDnimo"),i(),t(44,`
                  `),e(45,"span",27),t(46),i(),t(47,`
                `),i(),t(48,`
                `),p(49,ct,10,1),e(50,"div",28),t(51,`
                  `),e(52,"a",29),t(53,"Editar"),i(),t(54,`
                  `),e(55,"button",30),_("click",function(){v(n);let s=d().$implicit,g=d(2);return S(g.delete(s))}),t(56,`
                    `),m(57,"fa-icon",31),t(58,`
                  `),i(),t(59,`
                `),i(),t(60,`
              `),i(),t(61,`
            `),i(),t(62,`
          `)}if(a&2){let n=d().$implicit,l=d(2);o(10),M(l.getTipoLabel(n.tipoServicio)),o(8),x("checked",n.activa),o(10),c("\u20AC ",n.precioFirstHora),o(9),c("\u20AC ",n.precioHoraAdicional),o(9),c("",n.minimoHoras," h"),o(3),f(n.precioPorKm?49:-1),o(3),x("routerLink",C(7,N,n.id))}}function st(a,r){if(a&1&&(t(0,`
          `),p(1,xt,63,9)),a&2){let n=r.$implicit;o(),f(n.zona==="MADRID_CAPITAL"?1:-1)}}function pt(a,r){if(a&1&&(t(0,`
                  `),e(1,"div",25),t(2,`
                    `),e(3,"span",26),t(4,"\u20AC/km"),i(),t(5,`
                    `),e(6,"span",27),t(7),i(),t(8,`
                  `),i(),t(9,`
                `)),a&2){let n=d(2).$implicit;o(7),c("\u20AC ",n.precioPorKm)}}function ft(a,r){if(a&1){let n=b();t(0,`
            `),e(1,"div",18),t(2,`
              `),e(3,"div",19),t(4,`
                `),e(5,"div",20),t(6,`
                  `),e(7,"div"),t(8,`
                    `),e(9,"div",21),t(10),i(),t(11,`
                    `),e(12,"div",32),t(13,"Comunidad Madrid"),i(),t(14,`
                  `),i(),t(15,`
                  `),e(16,"div",23),t(17,`
                    `),m(18,"input",24),t(19,`
                  `),i(),t(20,`
                `),i(),t(21,`
                `),e(22,"div",25),t(23,`
                  `),e(24,"span",26),t(25,"1\xAA hora"),i(),t(26,`
                  `),e(27,"span",27),t(28),i(),t(29,`
                `),i(),t(30,`
                `),e(31,"div",25),t(32,`
                  `),e(33,"span",26),t(34,"Hora adicional"),i(),t(35,`
                  `),e(36,"span",27),t(37),i(),t(38,`
                `),i(),t(39,`
                `),e(40,"div",25),t(41,`
                  `),e(42,"span",26),t(43,"M\xEDnimo"),i(),t(44,`
                  `),e(45,"span",27),t(46),i(),t(47,`
                `),i(),t(48,`
                `),p(49,pt,10,1),e(50,"div",28),t(51,`
                  `),e(52,"a",29),t(53,"Editar"),i(),t(54,`
                  `),e(55,"button",30),_("click",function(){v(n);let s=d().$implicit,g=d(2);return S(g.delete(s))}),t(56,`
                    `),m(57,"fa-icon",31),t(58,`
                  `),i(),t(59,`
                `),i(),t(60,`
              `),i(),t(61,`
            `),i(),t(62,`
          `)}if(a&2){let n=d().$implicit,l=d(2);o(10),M(l.getTipoLabel(n.tipoServicio)),o(8),x("checked",n.activa),o(10),c("\u20AC ",n.precioFirstHora),o(9),c("\u20AC ",n.precioHoraAdicional),o(9),c("",n.minimoHoras," h"),o(3),f(n.precioPorKm?49:-1),o(3),x("routerLink",C(7,N,n.id))}}function ut(a,r){if(a&1&&(t(0,`
          `),p(1,ft,63,9)),a&2){let n=r.$implicit;o(),f(n.zona==="COMUNIDAD_MADRID"?1:-1)}}function _t(a,r){if(a&1&&(t(0,`
                  `),e(1,"div",25),t(2,`
                    `),e(3,"span",26),t(4,"\u20AC/km"),i(),t(5,`
                    `),e(6,"span",27),t(7),i(),t(8,`
                  `),i(),t(9,`
                `)),a&2){let n=d(2).$implicit;o(7),c("\u20AC ",n.precioPorKm)}}function vt(a,r){if(a&1){let n=b();t(0,`
            `),e(1,"div",18),t(2,`
              `),e(3,"div",19),t(4,`
                `),e(5,"div",20),t(6,`
                  `),e(7,"div"),t(8,`
                    `),e(9,"div",21),t(10),i(),t(11,`
                    `),e(12,"div",33),t(13,"Fuera Comunidad"),i(),t(14,`
                  `),i(),t(15,`
                  `),e(16,"div",23),t(17,`
                    `),m(18,"input",24),t(19,`
                  `),i(),t(20,`
                `),i(),t(21,`
                `),e(22,"div",25),t(23,`
                  `),e(24,"span",26),t(25,"1\xAA hora"),i(),t(26,`
                  `),e(27,"span",27),t(28),i(),t(29,`
                `),i(),t(30,`
                `),e(31,"div",25),t(32,`
                  `),e(33,"span",26),t(34,"Hora adicional"),i(),t(35,`
                  `),e(36,"span",27),t(37),i(),t(38,`
                `),i(),t(39,`
                `),e(40,"div",25),t(41,`
                  `),e(42,"span",26),t(43,"M\xEDnimo"),i(),t(44,`
                  `),e(45,"span",27),t(46),i(),t(47,`
                `),i(),t(48,`
                `),p(49,_t,10,1),e(50,"div",28),t(51,`
                  `),e(52,"a",29),t(53,"Editar"),i(),t(54,`
                  `),e(55,"button",30),_("click",function(){v(n);let s=d().$implicit,g=d(2);return S(g.delete(s))}),t(56,`
                    `),m(57,"fa-icon",31),t(58,`
                  `),i(),t(59,`
                `),i(),t(60,`
              `),i(),t(61,`
            `),i(),t(62,`
          `)}if(a&2){let n=d().$implicit,l=d(2);o(10),M(l.getTipoLabel(n.tipoServicio)),o(8),x("checked",n.activa),o(10),c("\u20AC ",n.precioFirstHora),o(9),c("\u20AC ",n.precioHoraAdicional),o(9),c("",n.minimoHoras," h"),o(3),f(n.precioPorKm?49:-1),o(3),x("routerLink",C(7,N,n.id))}}function St(a,r){if(a&1&&(t(0,`
          `),p(1,vt,63,9)),a&2){let n=r.$implicit;o(),f(n.zona==="FUERA_COMUNIDAD"?1:-1)}}function bt(a,r){if(a&1&&(t(0,`
    `),t(1,`
    `),e(2,"div",12),t(3,`
      `),e(4,"div",13),t(5,`
        `),m(6,"span",14),t(7,`
        Madrid Capital
      `),i(),t(8,`
      `),e(9,"div",15),t(10,`
        `),T(11,st,2,1,null,null,L,!0),i(),t(13,`
    `),i(),t(14,`

    `),t(15,`
    `),e(16,"div",12),t(17,`
      `),e(18,"div",16),t(19,`
        `),m(20,"span",14),t(21,`
        Comunidad de Madrid
      `),i(),t(22,`
      `),e(23,"div",15),t(24,`
        `),T(25,ut,2,1,null,null,L,!0),i(),t(27,`
    `),i(),t(28,`

    `),t(29,`
    `),e(30,"div",12),t(31,`
      `),e(32,"div",17),t(33,`
        `),m(34,"span",14),t(35,`
        Fuera de la Comunidad
      `),i(),t(36,`
      `),e(37,"div",15),t(38,`
        `),T(39,St,2,1,null,null,L,!0),i(),t(41,`
    `),i(),t(42,`
  `)),a&2){let n=d();o(11),y(n.tarifas()),o(14),y(n.tarifas()),o(14),y(n.tarifas())}}var it=class a{constructor(){this.subscription=null;this.tarifas=j([]);this.sortState=tt({});this.router=u(U);this.tarifaService=u(I);this.isLoading=this.tarifaService.tarifasResource.isLoading;this.activatedRoute=u(K);this.sortService=u(et);this.modalService=u(J);this.trackId=r=>this.tarifaService.getTarifaIdentifier(r);H(()=>{this.tarifas.set(this.fillComponentAttributesFromResponseBody([...this.tarifaService.tarifas()]))})}ngOnInit(){this.subscription=R([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe(E(([r,n])=>this.fillComponentAttributeFromRoute(r,n)),E(()=>{this.tarifas().length===0&&this.load()})).subscribe()}delete(r){let n=this.modalService.open(O,{size:"lg",backdrop:"static"});n.componentInstance.tarifa=r,n.closed.pipe(V(l=>l===F),E(()=>this.load())).subscribe()}load(){this.queryBackend()}navigateToWithComponentValues(r){this.handleNavigation(r)}fillComponentAttributeFromRoute(r,n){this.sortState.set(this.sortService.parseSortParam(r.get(Q)??n[X]))}refineData(r){let{predicate:n,order:l}=this.sortState();return n&&l?r.sort(this.sortService.startSort({predicate:n,order:l})):r}fillComponentAttributesFromResponseBody(r){return this.refineData(r)}queryBackend(){let r={sort:this.sortService.buildSortParam(this.sortState())};this.tarifaService.tarifasParams.set(r)}handleNavigation(r){let n={sort:this.sortService.buildSortParam(r)};this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:n})}getTipoLabel(r){return r?{HOGAR:"Hogar / Piso",OFICINA:"Oficina / Local",CHALET:"Chalet",EVENTO:"Evento",POST_OBRA:"Post-obra",POST_MUDANZA:"Post-mudanza"}[r]??r:"\u2014"}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275cmp=h({type:a,selectors:[["jhi-tarifa"]],decls:34,vars:5,consts:[[1,"container-fluid","px-4","py-4","bg-mokeal"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-semibold","mb-1"],[1,"text-muted","small"],[1,"d-flex","gap-2"],[1,"btn","btn-sm","btn-outline-secondary",3,"click","disabled"],["icon","sync",3,"animation"],[1,"btn","btn-sm","btn-primary",3,"routerLink"],["icon","plus"],[1,"content-card","text-center","py-5","text-muted"],[1,"mt-3"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"mb-4"],[1,"zona-header","zona-madrid","mb-3"],[1,"zona-dot"],[1,"row","g-3"],[1,"zona-header","zona-fuera","mb-3"],[1,"zona-header","zona-evento","mb-3"],[1,"col-md-4"],[1,"tarifa-card"],[1,"d-flex","justify-content-between","align-items-start","mb-3"],[1,"tarifa-tipo"],[1,"tarifa-zona-badge","badge-madrid"],[1,"form-check","form-switch"],["type","checkbox","disabled","",1,"form-check-input",3,"checked"],[1,"tarifa-precio-row"],[1,"tarifa-precio-label"],[1,"tarifa-precio-val"],[1,"d-flex","gap-2","mt-3"],[1,"btn","btn-sm","btn-outline-secondary","flex-grow-1",3,"routerLink"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["icon","times"],[1,"tarifa-zona-badge","badge-fuera"],[1,"tarifa-zona-badge","badge-evento"]],template:function(n,l){n&1&&(e(0,"div",0),t(1,`
  `),e(2,"div",1),t(3,`
    `),e(4,"div"),t(5,`
      `),e(6,"h4",2),t(7,"Tarifas"),i(),t(8,`
      `),e(9,"div",3),t(10,"Precios por zona y tipo de servicio"),i(),t(11,`
    `),i(),t(12,`
    `),e(13,"div",4),t(14,`
      `),e(15,"button",5),_("click",function(){return l.load()}),t(16,`
        `),m(17,"fa-icon",6),t(18,`
        Actualizar
      `),i(),t(19,`
      `),e(20,"a",7),t(21," "),m(22,"fa-icon",8),t(23," Nueva tarifa "),i(),t(24,`
    `),i(),t(25,`
  `),i(),t(26,`

  `),m(27,"jhi-alert-error"),t(28,`
  `),m(29,"jhi-alert"),t(30,`

  `),p(31,mt,10,2)(32,bt,43,0),i(),t(33,`
`)),n&2&&(o(15),x("disabled",l.isLoading()),o(2),x("animation",l.isLoading()?"spin":void 0),o(3),x("routerLink",w(4,nt)),o(11),f(l.tarifas().length===0?31:32))},dependencies:[G,k,D,A,z,Y,P],styles:[".bg-mokeal[_ngcontent-%COMP%]{background:#f8f8f6;min-height:calc(100vh - 60px)}.content-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:20px 22px}.zona-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}.zona-header[_ngcontent-%COMP%]   .zona-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%}.zona-header.zona-madrid[_ngcontent-%COMP%]{color:#0c447c}.zona-header.zona-madrid[_ngcontent-%COMP%]   .zona-dot[_ngcontent-%COMP%]{background:#185fa5}.zona-header.zona-fuera[_ngcontent-%COMP%]{color:#085041}.zona-header.zona-fuera[_ngcontent-%COMP%]   .zona-dot[_ngcontent-%COMP%]{background:#0f6e56}.zona-header.zona-evento[_ngcontent-%COMP%]{color:#633806}.zona-header.zona-evento[_ngcontent-%COMP%]   .zona-dot[_ngcontent-%COMP%]{background:#ba7517}.tarifa-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:18px 20px;transition:box-shadow .15s}.tarifa-card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px #0000000f}.tarifa-tipo[_ngcontent-%COMP%]{font-size:15px;font-weight:500;margin-bottom:4px}.tarifa-zona-badge[_ngcontent-%COMP%]{font-size:11px;padding:2px 8px;border-radius:20px;display:inline-block}.tarifa-zona-badge.badge-madrid[_ngcontent-%COMP%]{background:#e6f1fb;color:#0c447c}.tarifa-zona-badge.badge-fuera[_ngcontent-%COMP%]{background:#e1f5ee;color:#085041}.tarifa-zona-badge.badge-evento[_ngcontent-%COMP%]{background:#faeeda;color:#633806}.tarifa-precio-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f5f5f0;font-size:13px}.tarifa-precio-row[_ngcontent-%COMP%]:last-of-type{border-bottom:none}.tarifa-precio-label[_ngcontent-%COMP%]{color:#888}.tarifa-precio-val[_ngcontent-%COMP%]{font-weight:500;color:#185fa5}"]})}};export{it as Tarifa};
