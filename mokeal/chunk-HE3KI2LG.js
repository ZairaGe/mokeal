import{a as P}from"./chunk-BFPNNAZY.js";import{a as I}from"./chunk-TZRSTOQN.js";import{a as ae,b as ne}from"./chunk-EUYSX2GG.js";import"./chunk-ZIIA3V4Y.js";import{a as Q,b as X,e as te,f as ie}from"./chunk-W3JMUN3W.js";import"./chunk-34TH6SZL.js";import{a as Y,b as w,c as Z}from"./chunk-LGDKSRGQ.js";import{g as B,i as $,k as U,t as k}from"./chunk-L7QYCLNK.js";import{a as ee}from"./chunk-HSC43Y6H.js";import{c as M}from"./chunk-2MRGFY2T.js";import"./chunk-VIDFJCIH.js";import{a as K}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import"./chunk-VAPES3J5.js";import"./chunk-SS72KG6D.js";import"./chunk-PITESBFZ.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as y,c as E}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as W,d as G,e as J}from"./chunk-56XJVXYY.js";import{B as D,h as z}from"./chunk-FINXBEYE.js";import{Db as C,Jb as p,Lb as c,M as v,Qa as d,W as s,Yb as e,Zb as g,_b as h,aa as u,ba as x,db as T,ic as q,jc as H,m as O,ma as S,oa as N,qb as j,rb as _,tc as A,ub as V,vb as L,w as R,wb as f,xb as a,yb as n,zb as m}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var se=r=>({id:r});function ce(r,i){if(r&1){let t=C();e(0,`
  `),a(1,"form",0),p("ngSubmit",function(){u(t);let l=c();return x(l.confirmDelete(l.trabajador.id))}),e(2,`
    `),a(3,"div",1),e(4,`
      `),a(5,"h4",2),e(6,"Confirmar operaci\xF3n de borrado"),n(),e(7,`
    `),n(),e(8,`

    `),a(9,"div",3),e(10,`
      `),m(11,"jhi-alert-error"),e(12,`
      `),a(13,"p",4),e(14),n(),e(15,`
    `),n(),e(16,`

    `),a(17,"div",5),e(18,`
      `),a(19,"button",6),p("click",function(){u(t);let l=c();return x(l.cancel())}),e(20,`
        `),m(21,"fa-icon",7),e(22,"\xA0"),a(23,"span",8),e(24,"Cancelar"),n(),e(25,`
      `),n(),e(26,`

      `),a(27,"button",9),e(28,`
        `),m(29,"fa-icon",10),e(30,"\xA0"),a(31,"span",11),e(32,"Eliminar"),n(),e(33,`
      `),n(),e(34,`
    `),n(),e(35,`
  `),n(),e(36,`
`)}if(r&2){let t=c();d(13),f("translateValues",H(2,se,t.trabajador.id)),d(),h(`
        \xBFSeguro que quiere eliminar Trabajador `,t.trabajador.id,`?
      `)}}var F=class r{constructor(){this.trabajadorService=s(I);this.activeModal=s(Q)}cancel(){this.activeModal.dismiss()}confirmDelete(i){this.trabajadorService.delete(i).subscribe(()=>{this.activeModal.close(w)})}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=T({type:r,selectors:[["ng-component"]],decls:1,vars:1,consts:[["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","trabajadorDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],[1,"modal-body"],["id","jhi-delete-trabajador-heading","jhiTranslate","mokealApp.trabajador.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-trabajador","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(t,o){t&1&&j(0,ce,37,4),t&2&&_(o.trabajador?0:-1)},dependencies:[K,D,k,U,B,$,E,y,M],encapsulation:2})}};var pe=()=>["/trabajador/new"];function be(r,i){return this.trackId(i)}function ue(r,i){r&1&&(e(0,`
    `),a(1,"div",9),e(2,`
      No hay trabajadores registrados a\xFAn.
      `),a(3,"div",10),e(4,`
        `),a(5,"a",11),e(6,"A\xF1adir primer trabajador"),n(),e(7,`
      `),n(),e(8,`
    `),n(),e(9,`
  `)),r&2&&(d(5),f("routerLink",q(1,pe)))}function xe(r,i){if(r&1&&(e(0,`
              `),a(1,"div",26),e(2),n(),e(3,`
            `)),r&2){let t=c().$implicit;d(2),g(t.notas)}}function fe(r,i){if(r&1){let t=C();e(0,`
        `),a(1,"div",13),e(2,`
          `),a(3,"div",14),e(4,`
            `),a(5,"div",15),e(6,`
              `),a(7,"div",16),e(8,`
                `),a(9,"div",17),e(10),n(),e(11,`
                `),a(12,"div"),e(13,`
                  `),a(14,"div",18),e(15),n(),e(16,`
                  `),a(17,"div",3),e(18),n(),e(19,`
                `),n(),e(20,`
              `),n(),e(21,`
              `),a(22,"span",19),e(23),n(),e(24,`
            `),n(),e(25,`

            `),a(26,"div",20),e(27,`
              `),a(28,"span"),e(29,"\u{1F4DE}"),n(),e(30,`
              `),a(31,"span"),e(32),n(),e(33,`
            `),n(),e(34,`

            `),j(35,xe,4,1),a(36,"div",21),e(37,`
              `),a(38,"button",22),p("click",function(){let l=u(t).$implicit,b=c(2);return x(b.openVerTrabajador(l))}),e(39,"Ver ficha"),n(),e(40,`
              `),a(41,"button",23),p("click",function(){let l=u(t).$implicit,b=c(2);return x(b.openEditarTrabajador(l))}),e(42,"Editar"),n(),e(43,`
              `),a(44,"button",24),p("click",function(){let l=u(t).$implicit,b=c(2);return x(b.delete(l))}),e(45,`
                `),m(46,"fa-icon",25),e(47,`
              `),n(),e(48,`
            `),n(),e(49,`
          `),n(),e(50,`
        `),n(),e(51,`
      `)}if(r&2){let t=i.$implicit,o=c(2);d(10),g(o.getInitials(t.nombre)),d(5),g(t.nombre),d(3),g(t.email??"\u2014"),d(4),f("ngClass",t.activo?"b-confirmado":"b-pendiente"),d(),h(`
                `,t.activo?"Activo":"Inactivo",`
              `),d(9),g(t.telefono??"\u2014"),d(3),_(t.notas?35:-1)}}function ge(r,i){if(r&1&&(e(0,`
    `),a(1,"div",12),e(2,`
      `),V(3,fe,52,7,null,null,be,!0),n(),e(5,`
  `)),r&2){let t=c();d(3),L(t.trabajadors())}}var re=class r{constructor(){this.subscription=null;this.trabajadors=S([]);this.sortState=te({});this.itemsPerPage=S(20);this.links=S({});this.hasMorePage=A(()=>!!this.links().next);this.isFirstFetch=A(()=>Object.keys(this.links()).length===0);this.router=s(G);this.trabajadorService=s(I);this.isLoading=this.trabajadorService.trabajadorsResource.isLoading;this.activatedRoute=s(W);this.sortService=s(ie);this.parseLinks=s(ne);this.modalService=s(X);this.mokealModalService=s(ae);this.trackId=i=>this.trabajadorService.getTrabajadorIdentifier(i);N(()=>{let i=this.trabajadorService.trabajadorsResource.headers();i&&this.fillComponentAttributesFromResponseHeader(i)}),N(()=>{this.trabajadors.update(i=>this.fillComponentAttributesFromResponseBody([...this.trabajadorService.trabajadors()],i))})}ngOnInit(){this.subscription=O([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe(v(([i,t])=>this.fillComponentAttributeFromRoute(i,t)),v(()=>this.reset()),v(()=>this.load())).subscribe()}reset(){this.trabajadors.set([])}loadNextPage(){this.load()}openNuevoTrabajador(){let i={title:"Trabajador",icon:"\u{1F464}",subtitle:"Datos de contacto y direcci\xF3n",mode:"create",showDelete:!1,onSave:async()=>{this.load()}};this.mokealModalService.open(P,i)}openEditarTrabajador(i){let t={title:"Trabajador",icon:"\u{1F464}",subtitle:i.nombre??"",mode:"edit",showDelete:!0,data:{isModal:!0,trabajadorId:i.id},onSave:async()=>{this.load()},onDelete:async()=>{this.delete(i)}};this.mokealModalService.open(P,t)}openVerTrabajador(i){let t={title:i.nombre??"Trabajador",icon:"\u{1F464}",subtitle:i.email??"",mode:"view",showDelete:!1};this.mokealModalService.open(P,t)}delete(i){let t=this.modalService.open(F,{size:"lg",backdrop:"static"});t.componentInstance.trabajador=i,t.closed.pipe(R(o=>o===w),v(()=>this.load())).subscribe()}load(){this.queryBackend()}navigateToWithComponentValues(i){this.handleNavigation(i)}fillComponentAttributeFromRoute(i,t){this.sortState.set(this.sortService.parseSortParam(i.get(Y)??t[Z]))}fillComponentAttributesFromResponseBody(i,t){let o=[...t];for(let l of i)o.some(b=>b.id===l.id)||o.push(l);return o}fillComponentAttributesFromResponseHeader(i){let t=i.get("link");t?this.links.set(this.parseLinks.parseAll(t)):this.links.set({})}queryBackend(){let i={size:this.itemsPerPage()};this.hasMorePage()?Object.assign(i,this.links().next):this.isFirstFetch()&&Object.assign(i,{sort:this.sortService.buildSortParam(this.sortState())}),this.trabajadorService.trabajadorsParams.set(i)}handleNavigation(i){this.links.set({});let t={sort:this.sortService.buildSortParam(i)};this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:t})}getInitials(i){return i?i.split(" ").slice(0,2).map(t=>t[0]).join("").toUpperCase():"?"}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=T({type:r,selectors:[["jhi-trabajador"]],decls:34,vars:4,consts:[[1,"container-fluid","px-4","py-4","bg-mokeal"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-semibold","mb-1"],[1,"text-muted","small"],[1,"d-flex","gap-2"],[1,"btn","btn-sm","btn-outline-secondary",3,"click","disabled"],["icon","sync",3,"animation"],[1,"btn","btn-sm","btn-primary",3,"click"],["icon","plus"],[1,"content-card","text-center","py-5","text-muted"],[1,"mt-3"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"row","g-3"],[1,"col-md-4"],[1,"trabajador-card"],[1,"d-flex","justify-content-between","align-items-start","mb-3"],[1,"d-flex","align-items-center","gap-3"],[1,"trabajador-avatar"],[1,"trabajador-nombre"],[1,"badge-custom",3,"ngClass"],[1,"trabajador-info-row"],[1,"d-flex","gap-2","mt-3"],[1,"btn","btn-sm","btn-outline-secondary","flex-grow-1",3,"click"],[1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["icon","times"],[1,"trabajador-notas"]],template:function(t,o){t&1&&(a(0,"div",0),e(1,`
  `),a(2,"div",1),e(3,`
    `),a(4,"div"),e(5,`
      `),a(6,"h4",2),e(7,"Trabajadores"),n(),e(8,`
      `),a(9,"div",3),e(10),n(),e(11,`
    `),n(),e(12,`
    `),a(13,"div",4),e(14,`
      `),a(15,"button",5),p("click",function(){return o.load()}),e(16,`
        `),m(17,"fa-icon",6),e(18,`
      `),n(),e(19,`
      `),a(20,"a",7),p("click",function(){return o.openNuevoTrabajador()}),e(21," "),m(22,"fa-icon",8),e(23," Nuevo trabajador "),n(),e(24,`
    `),n(),e(25,`
  `),n(),e(26,`

  `),m(27,"jhi-alert-error"),e(28,`
  `),m(29,"jhi-alert"),e(30,`

  `),j(31,ue,10,2)(32,ge,6,0),n(),e(33,`
`)),t&2&&(d(10),h("",o.trabajadors().length," personas en el equipo"),d(5),f("disabled",o.isLoading()),d(2),f("animation",o.isLoading()?"spin":void 0),d(14),_(o.trabajadors().length===0?31:32))},dependencies:[J,k,E,y,M,ee,D,z],styles:[".bg-mokeal[_ngcontent-%COMP%]{background:#f8f8f6;min-height:calc(100vh - 60px)}.content-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:20px 22px}.trabajador-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:18px 20px;transition:box-shadow .15s}.trabajador-card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px #00000012}.trabajador-avatar[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:50%;background:#e1f5ee;color:#085041;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0}.trabajador-nombre[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.trabajador-info-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:13px;color:#555;padding:4px 0}.trabajador-notas[_ngcontent-%COMP%]{font-size:12px;color:#999;margin-top:8px;padding:6px 8px;background:#f8f8f6;border-radius:6px;line-height:1.4}.badge-custom[_ngcontent-%COMP%]{font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500;white-space:nowrap}.badge-custom.b-confirmado[_ngcontent-%COMP%]{background:#eaf3de;color:#27500a}.badge-custom.b-pendiente[_ngcontent-%COMP%]{background:#fcebeb;color:#791f1f}"]})}};export{re as Trabajador};
