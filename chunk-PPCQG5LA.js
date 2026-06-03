import{a as j,b as le}from"./chunk-VFXDLWIX.js";import"./chunk-ZIIA3V4Y.js";import{a as F}from"./chunk-45GDYH6I.js";import{a as w}from"./chunk-2HJWG76N.js";import{a as Y,b as Z,e as ne,f as oe}from"./chunk-Z25ZQRUB.js";import"./chunk-34TH6SZL.js";import{a as ee,b as T,c as te}from"./chunk-LGDKSRGQ.js";import{g as U,i as W,k as G,t as D}from"./chunk-L7QYCLNK.js";import{a as ie}from"./chunk-DWQAEHD7.js";import{c as P}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as X}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as k,c as M}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as J,d as K,e as Q}from"./chunk-56XJVXYY.js";import{B as I,h as B}from"./chunk-FINXBEYE.js";import{$b as z,Db as y,Jb as u,Lb as d,M as h,Qa as a,W as s,Yb as e,Zb as v,_b as b,aa as g,ba as _,db as E,ic as $,jc as H,m as R,ma as S,oa as O,qb as m,rb as p,tc as A,ub as L,vb as q,w as V,wb as C,xb as n,yb as o,zb as x}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var se=l=>({id:l});function me(l,i){if(l&1){let t=y();e(0,`
  `),n(1,"form",0),u("ngSubmit",function(){g(t);let c=d();return _(c.confirmDelete(c.cliente.id))}),e(2,`
    `),n(3,"div",1),e(4,`
      `),n(5,"h4",2),e(6,"Confirmar operaci\xF3n de borrado"),o(),e(7,`
    `),o(),e(8,`

    `),n(9,"div",3),e(10,`
      `),x(11,"jhi-alert-error"),e(12,`
      `),n(13,"p",4),e(14),o(),e(15,`
    `),o(),e(16,`

    `),n(17,"div",5),e(18,`
      `),n(19,"button",6),u("click",function(){g(t);let c=d();return _(c.cancel())}),e(20,`
        `),x(21,"fa-icon",7),e(22,"\xA0"),n(23,"span",8),e(24,"Cancelar"),o(),e(25,`
      `),o(),e(26,`

      `),n(27,"button",9),e(28,`
        `),x(29,"fa-icon",10),e(30,"\xA0"),n(31,"span",11),e(32,"Eliminar"),o(),e(33,`
      `),o(),e(34,`
    `),o(),e(35,`
  `),o(),e(36,`
`)}if(l&2){let t=d();a(13),C("translateValues",H(2,se,t.cliente.id)),a(),b(`
        \xBFSeguro que quiere eliminar Cliente `,t.cliente.id,`?
      `)}}var N=class l{constructor(){this.clienteService=s(w);this.activeModal=s(Y)}cancel(){this.activeModal.dismiss()}confirmDelete(i){this.clienteService.delete(i).subscribe(()=>{this.activeModal.close(T)})}static{this.\u0275fac=function(t){return new(t||l)}}static{this.\u0275cmp=E({type:l,selectors:[["ng-component"]],decls:1,vars:1,consts:[["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","clienteDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],[1,"modal-body"],["id","jhi-delete-cliente-heading","jhiTranslate","mokealApp.cliente.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-cliente","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(t,r){t&1&&m(0,me,37,4),t&2&&p(r.cliente?0:-1)},dependencies:[X,I,D,G,U,W,M,k,P],encapsulation:2})}};var xe=()=>["/cliente/new"];function ue(l,i){return this.trackId(i)}function fe(l,i){l&1&&(e(0,`
    `),n(1,"div",9),e(2,`
      No hay clientes registrados a\xFAn.
      `),n(3,"div",10),e(4,`
        `),n(5,"a",11),e(6,"A\xF1adir primer cliente"),o(),e(7,`
      `),o(),e(8,`
    `),o(),e(9,`
  `)),l&2&&(a(5),C("routerLink",$(1,xe)))}function ge(l,i){l&1&&(e(0,`
                    `),n(1,"span",27),e(2,"Empresa"),o(),e(3,`
                  `))}function _e(l,i){if(l&1&&(e(0,`
              `),n(1,"div",20),e(2,`
                `),n(3,"span",21),e(4,"\u2709\uFE0F"),o(),e(5,`
                `),n(6,"span",28),e(7),o(),e(8,`
              `),o(),e(9,`
            `)),l&2){let t=d().$implicit;a(7),v(t.email)}}function Ce(l,i){if(l&1&&e(0),l&2){let t=d(2).$implicit;b(`
                    (`,t.codigoPostal,`)
                  `)}}function be(l,i){if(l&1&&(e(0,`
              `),n(1,"div",20),e(2,`
                `),n(3,"span",21),e(4,"\u{1F4CD}"),o(),e(5,`
                `),n(6,"span"),e(7),m(8,Ce,1,1),o(),e(9,`
              `),o(),e(10,`
            `)),l&2){let t=d().$implicit;a(7),b("",t.municipio,`
                  `),a(),p(t.codigoPostal?8:-1)}}function ve(l,i){if(l&1&&(e(0,`
              `),n(1,"div",29),e(2),o(),e(3,`
            `)),l&2){let t=d().$implicit;a(2),v(t.notas)}}function he(l,i){if(l&1){let t=y();e(0,`
        `),n(1,"div",13),e(2,`
          `),n(3,"div",14),e(4,`
            `),n(5,"div",15),e(6,`
              `),n(7,"div",16),e(8,`
                `),n(9,"div",17),e(10),o(),e(11,`
                `),n(12,"div"),e(13,`
                  `),n(14,"div",18),e(15),o(),e(16,`
                  `),m(17,ge,4,0),o(),e(18,`
              `),o(),e(19,`
              `),n(20,"span",19),e(21),o(),e(22,`
            `),o(),e(23,`

            `),n(24,"div",20),e(25,`
              `),n(26,"span",21),e(27,"\u{1F4DE}"),o(),e(28,`
              `),n(29,"span"),e(30),o(),e(31,`
            `),o(),e(32,`
            `),m(33,_e,10,1),m(34,be,11,2),m(35,ve,4,1),n(36,"div",22),e(37,`
              `),n(38,"button",23),u("click",function(){let c=g(t).$implicit,f=d(2);return _(f.openVerCliente(c))}),e(39,"Ver ficha"),o(),e(40,`
              `),n(41,"button",24),u("click",function(){let c=g(t).$implicit,f=d(2);return _(f.openEditarCliente(c))}),e(42,"Editar"),o(),e(43,`
              `),n(44,"button",25),u("click",function(){let c=g(t).$implicit,f=d(2);return _(f.delete(c))}),e(45,`
                `),x(46,"fa-icon",26),e(47,`
              `),o(),e(48,`
            `),o(),e(49,`
          `),o(),e(50,`
        `),o(),e(51,`
      `)}if(l&2){let t=i.$implicit,r=d(2);a(10),v(r.getInitials(t.nombre)),a(5),v(t.nombre),a(2),p(t.esEmpresa?17:-1),a(3),C("ngClass",t.activo?"b-confirmado":"b-pendiente"),a(),b(`
                `,t.activo?"Activo":"Inactivo",`
              `),a(9),v(t.telefono),a(3),p(t.email?33:-1),a(),p(t.municipio?34:-1),a(),p(t.notas?35:-1)}}function Se(l,i){if(l&1&&(e(0,`
        `),n(1,"div",3),e(2),o(),e(3,`
      `)),l&2){let t=d(2);a(2),z("Mostrando ",t.clientes().length," de ",t.totalItems()," clientes")}}function Ee(l,i){if(l&1&&(e(0,`
    `),n(1,"div",12),e(2,`
      `),L(3,he,52,9,null,null,ue,!0),o(),e(5,`

    `),n(6,"div",10),e(7,`
      `),m(8,Se,4,2),o(),e(9,`
  `)),l&2){let t=d();a(3),q(t.clientes()),a(5),p(t.totalItems()>0?8:-1)}}var ae=class l{constructor(){this.subscription=null;this.clientes=S([]);this.totalItems=S(0);this.sortState=ne({});this.itemsPerPage=S(20);this.links=S({});this.hasMorePage=A(()=>!!this.links().next);this.isFirstFetch=A(()=>Object.keys(this.links()).length===0);this.router=s(K);this.clienteService=s(w);this.isLoading=this.clienteService.clientesResource.isLoading;this.activatedRoute=s(J);this.sortService=s(oe);this.parseLinks=s(le);this.modalService=s(j);this.mokealModalService=s(j);this.ngbModalService=s(Z);this.trackId=i=>this.clienteService.getClienteIdentifier(i);O(()=>{let i=this.clienteService.clientesResource.headers();i&&this.fillComponentAttributesFromResponseHeader(i)}),O(()=>{this.clientes.update(i=>this.fillComponentAttributesFromResponseBody([...this.clienteService.clientes()],i))})}ngOnInit(){this.subscription=R([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe(h(([i,t])=>this.fillComponentAttributeFromRoute(i,t)),h(()=>this.reset()),h(()=>this.load())).subscribe()}openNuevoCliente(){let i={title:"Cliente",icon:"\u{1F464}",subtitle:"Datos de contacto y direcci\xF3n",mode:"create",showDelete:!1,onSave:async()=>{this.load()}};this.mokealModalService.open(F,i)}openVerCliente(i){let t={title:i.nombre??"Cliente",icon:"\u{1F464}",subtitle:i.municipio??"",mode:"view",showDelete:!1};this.mokealModalService.open(F,t)}openEditarCliente(i){let t={title:"Cliente",icon:"\u{1F464}",subtitle:i.nombre??"",mode:"edit",showDelete:!0,data:{isModal:!0,clienteId:i.id},onSave:async()=>{this.load()},onDelete:async()=>{this.delete(i)}};this.mokealModalService.open(F,t)}reset(){this.clientes.set([])}loadNextPage(){this.load()}delete(i){let t=this.ngbModalService.open(N,{size:"lg",backdrop:"static"});t.componentInstance.cliente=i,t.closed.pipe(V(r=>r===T),h(()=>this.load())).subscribe()}load(){this.queryBackend()}navigateToWithComponentValues(i){this.handleNavigation(i)}fillComponentAttributeFromRoute(i,t){this.sortState.set(this.sortService.parseSortParam(i.get(ee)??t[te]))}fillComponentAttributesFromResponseBody(i,t){let r=[...t];for(let c of i)r.some(f=>f.id===c.id)||r.push(c);return r}fillComponentAttributesFromResponseHeader(i){let t=i.get("link");t?this.links.set(this.parseLinks.parseAll(t)):this.links.set({})}queryBackend(){let i={size:this.itemsPerPage()};this.hasMorePage()?Object.assign(i,this.links().next):this.isFirstFetch()&&Object.assign(i,{sort:this.sortService.buildSortParam(this.sortState())}),this.clienteService.clientesParams.set(i)}handleNavigation(i){this.links.set({});let t={sort:this.sortService.buildSortParam(i)};this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:t})}getInitials(i){return i?i.split(" ").slice(0,2).map(t=>t[0]).join("").toUpperCase():"?"}static{this.\u0275fac=function(t){return new(t||l)}}static{this.\u0275cmp=E({type:l,selectors:[["jhi-cliente"]],decls:34,vars:4,consts:[[1,"container-fluid","px-4","py-4","bg-mokeal"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-semibold","mb-1"],[1,"text-muted","small"],[1,"d-flex","gap-2"],[1,"btn","btn-sm","btn-outline-secondary",3,"click","disabled"],["icon","sync",3,"animation"],[1,"btn","btn-sm","btn-primary",3,"click"],["icon","plus"],[1,"content-card","text-center","py-5","text-muted"],[1,"mt-3"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"row","g-3"],[1,"col-md-4"],[1,"cliente-card"],[1,"d-flex","justify-content-between","align-items-start","mb-2"],[1,"d-flex","align-items-center","gap-3"],[1,"cliente-avatar"],[1,"cliente-nombre"],[1,"badge-custom",3,"ngClass"],[1,"cliente-info-row"],[1,"cliente-info-icon"],[1,"d-flex","gap-2","mt-3"],[1,"btn","btn-sm","btn-outline-secondary","flex-grow-1",3,"click"],[1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["icon","times"],[1,"badge-custom","b-fuera",2,"font-size","10px"],[1,"text-truncate"],[1,"cliente-notas"]],template:function(t,r){t&1&&(n(0,"div",0),e(1,`
  `),n(2,"div",1),e(3,`
    `),n(4,"div"),e(5,`
      `),n(6,"h4",2),e(7,"Clientes"),o(),e(8,`
      `),n(9,"div",3),e(10),o(),e(11,`
    `),o(),e(12,`
    `),n(13,"div",4),e(14,`
      `),n(15,"button",5),u("click",function(){return r.load()}),e(16,`
        `),x(17,"fa-icon",6),e(18,`
      `),o(),e(19,`
      `),n(20,"a",7),u("click",function(){return r.openNuevoCliente()}),e(21," "),x(22,"fa-icon",8),e(23," Nuevo cliente "),o(),e(24,`
    `),o(),e(25,`
  `),o(),e(26,`

  `),x(27,"jhi-alert-error"),e(28,`
  `),x(29,"jhi-alert"),e(30,`

  `),m(31,fe,10,2)(32,Ee,10,1),o(),e(33,`
`)),t&2&&(a(10),b("",r.clientes().length," clientes registrados"),a(5),C("disabled",r.isLoading()),a(2),C("animation",r.isLoading()?"spin":void 0),a(14),p(r.clientes().length===0?31:32))},dependencies:[Q,D,M,k,P,ie,I,B],styles:[".bg-mokeal[_ngcontent-%COMP%]{background:#f8f8f6;min-height:calc(100vh - 60px)}.content-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:20px 22px}.cliente-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:18px 20px;transition:box-shadow .15s}.cliente-card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px #00000012}.cliente-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background:#e6f1fb;color:#0c447c;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0}.cliente-nombre[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:1.3}.cliente-info-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:13px;color:#555;padding:3px 0}.cliente-info-row[_ngcontent-%COMP%]   .cliente-info-icon[_ngcontent-%COMP%]{font-size:12px;flex-shrink:0}.cliente-notas[_ngcontent-%COMP%]{font-size:12px;color:#999;margin-top:6px;padding:6px 8px;background:#f8f8f6;border-radius:6px;line-height:1.4}.badge-custom[_ngcontent-%COMP%]{font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500;white-space:nowrap}.badge-custom.b-confirmado[_ngcontent-%COMP%]{background:#eaf3de;color:#27500a}.badge-custom.b-pendiente[_ngcontent-%COMP%]{background:#fcebeb;color:#791f1f}.badge-custom.b-fuera[_ngcontent-%COMP%]{background:#e1f5ee;color:#085041}.badge-custom.b-evento[_ngcontent-%COMP%]{background:#faeeda;color:#633806}"]})}};export{ae as Cliente};
