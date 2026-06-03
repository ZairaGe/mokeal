import{a as ue,b as ve}from"./chunk-QKJ5OE67.js";import{b as J}from"./chunk-JR25LAWI.js";import{a as pe}from"./chunk-LNDSYDYJ.js";import{a as le,b as me}from"./chunk-YCTIQ23U.js";import{a as ce,b as de}from"./chunk-ZIIA3V4Y.js";import{a as te,b as ie,e as ae,f as se}from"./chunk-Z25ZQRUB.js";import"./chunk-34TH6SZL.js";import{a as ne,b as k,c as oe}from"./chunk-LGDKSRGQ.js";import{g as Z,i as Q,k as W,t as M}from"./chunk-L7QYCLNK.js";import{a as re}from"./chunk-DWQAEHD7.js";import{c as w}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as ee}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as I}from"./chunk-VAPES3J5.js";import"./chunk-SS72KG6D.js";import"./chunk-PITESBFZ.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as P,c as O}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as K,d as X,e as Y}from"./chunk-56XJVXYY.js";import{B as T,h as G}from"./chunk-FINXBEYE.js";import{$b as H,Db as C,Jb as g,Lb as d,M as E,Ma as j,Qa as a,W as p,Yb as e,Zb as F,_b as u,aa as _,ba as b,db as D,ic as N,jc as h,lc as U,m as R,ma as S,mc as B,nc as q,oa as y,qb as v,rb as x,sc as $,ub as V,vb as z,w as L,wb as l,xb as n,yb as o,zb as c}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var Se=r=>({id:r});function Ce(r,i){if(r&1){let t=C();e(0,`
  `),n(1,"form",0),g("ngSubmit",function(){_(t);let m=d();return b(m.confirmDelete(m.servicio.id))}),e(2,`
    `),n(3,"div",1),e(4,`
      `),n(5,"h4",2),e(6,"Confirmar operaci\xF3n de borrado"),o(),e(7,`
    `),o(),e(8,`

    `),n(9,"div",3),e(10,`
      `),c(11,"jhi-alert-error"),e(12,`
      `),n(13,"p",4),e(14),o(),e(15,`
    `),o(),e(16,`

    `),n(17,"div",5),e(18,`
      `),n(19,"button",6),g("click",function(){_(t);let m=d();return b(m.cancel())}),e(20,`
        `),c(21,"fa-icon",7),e(22,"\xA0"),n(23,"span",8),e(24,"Cancelar"),o(),e(25,`
      `),o(),e(26,`

      `),n(27,"button",9),e(28,`
        `),c(29,"fa-icon",10),e(30,"\xA0"),n(31,"span",11),e(32,"Eliminar"),o(),e(33,`
      `),o(),e(34,`
    `),o(),e(35,`
  `),o(),e(36,`
`)}if(r&2){let t=d();a(13),l("translateValues",h(2,Se,t.servicio.id)),a(),u(`
        \xBFSeguro que quiere eliminar Servicio `,t.servicio.id,`?
      `)}}var A=class r{constructor(){this.servicioService=p(I);this.activeModal=p(te)}cancel(){this.activeModal.dismiss()}confirmDelete(i){this.servicioService.delete(i).subscribe(()=>{this.activeModal.close(k)})}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["ng-component"]],decls:1,vars:1,consts:[["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","servicioDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],[1,"modal-body"],["id","jhi-delete-servicio-heading","jhiTranslate","mokealApp.servicio.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-servicio","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(t,s){t&1&&v(0,Ce,37,4),t&2&&x(s.servicio?0:-1)},dependencies:[ee,T,M,W,Z,Q,O,P,w],encapsulation:2})}};var ge=()=>["/servicio/new"],Ee=(r,i,t)=>({page:r,totalItems:i,itemsPerPage:t}),ye=r=>["/servicio",r,"view"],De=r=>["/servicio",r,"edit"];function Pe(r,i){return this.trackId(i)}function Oe(r,i){r&1&&(e(0,`
    `),n(1,"div",10),e(2,`
      No hay servicios registrados.
      `),n(3,"div",11),e(4,`
        `),n(5,"a",12),e(6,"Crear primer servicio"),o(),e(7,`
      `),o(),e(8,`
    `),o(),e(9,`
  `)),r&2&&(a(5),l("routerLink",N(1,ge)))}function Me(r,i){if(r&1&&(e(0,`
                  `),n(1,"a",32),e(2,`
                    \u{1F5FA}\uFE0F
                  `),o(),e(3,`
                `)),r&2){let t=d().$implicit,s=d(2);a(),l("href",s.getMapsUrl(t.direccion),j)}}function Te(r,i){r&1&&e(0,`
                  \xB7
                `)}function Ie(r,i){if(r&1&&e(0),r&2){let t=d().$implicit;u(`
                \u{1F465} `,t.numTrabajadores,`
              `)}}function we(r,i){if(r&1&&(e(0,`
                `),n(1,"span",21),e(2),o(),e(3,`
              `)),r&2){let t=d().$implicit;a(2),u("\u20AC ",t.precioTotal)}}function ke(r,i){r&1&&(e(0,`
                `),n(1,"span",3),e(2,"\u2014"),o(),e(3,`
              `))}function Ae(r,i){if(r&1){let t=C();e(0,`
        `),n(1,"div",17),e(2,`
          `),n(3,"div",18),e(4,`
            `),e(5,`
            `),c(6,"span",19),e(7,`

            `),e(8,`
            `),n(9,"div",20),e(10,`
              `),n(11,"div",21),e(12),B(13,"formatMediumDate"),o(),e(14,`
              `),n(15,"div",3),e(16),o(),e(17,`
            `),o(),e(18,`

            `),e(19,`
            `),n(20,"div",22),e(21,`
              `),n(22,"div",23),e(23,`
                `),n(24,"span",21),e(25),o(),e(26,`

                `),e(27,`
                `),v(28,Me,4,1),o(),e(29,`
              `),n(30,"div",3),e(31),v(32,Te,1,0),e(33),o(),e(34,`
            `),o(),e(35,`

            `),e(36,`
            `),n(37,"div",24),e(38,`
              `),v(39,Ie,1,1),o(),e(40,`

            `),e(41,`
            `),n(42,"div",25),e(43,`
              `),v(44,we,4,1)(45,ke,4,0),o(),e(46,`

            `),e(47,`
            `),n(48,"div",26),e(49,`
              `),n(50,"span",27),e(51),o(),e(52,`
            `),o(),e(53,`
          `),o(),e(54,`

          `),e(55,`
          `),n(56,"div",28),e(57,`
            `),n(58,"a",29),e(59,"Ver"),o(),e(60,`
            `),n(61,"a",29),e(62,"Editar"),o(),e(63,`
            `),n(64,"button",30),g("click",function(){let m=_(t).$implicit,f=d(2);return b(f.delete(m))}),e(65,`
              `),c(66,"fa-icon",31),e(67,`
            `),o(),e(68,`
          `),o(),e(69,`
        `),o(),e(70,`
      `)}if(r&2){let t=i.$implicit,s=d(2);a(6),l("ngClass",s.getZonaDotClass(t.zona)),a(6),F(q(13,15,t.fecha)),a(4),H("",t.horaInicio," \xB7 ",t.duracionHoras,"h"),a(9),F(t.direccion??"Sin direcci\xF3n"),a(3),x(t.direccion?28:-1),a(3),u(`
                `,t.municipio??"",`
                `),a(),x(t.municipio?32:-1),a(),u(`
                `,s.getTipoLabel(t.tipoServicio),`
              `),a(6),x(t.numTrabajadores?39:-1),a(5),x(t.precioTotal?44:45),a(6),l("ngClass",s.getEstadoClass(t.estado)),a(),u(`
                `,s.getEstadoLabel(t.estado),`
              `),a(7),l("routerLink",h(17,ye,t.id)),a(3),l("routerLink",h(19,De,t.id))}}function Fe(r,i){if(r&1){let t=C();e(0,`
    `),n(1,"div",13),e(2,`
      `),V(3,Ae,71,21,null,null,Pe,!0),o(),e(5,`

    `),e(6,`
    `),n(7,"div",14),e(8,`
      `),c(9,"jhi-item-count",15),e(10,`
      `),n(11,"ngb-pagination",16),g("pageChange",function(m){_(t);let f=d();return b(f.navigateToPage(m))}),o(),e(12,`
    `),o(),e(13,`
  `)}if(r&2){let t=d();a(3),z(t.servicios()),a(6),l("params",U(7,Ee,t.page(),t.totalItems(),t.itemsPerPage())),a(2),l("collectionSize",t.totalItems())("page",t.page())("pageSize",t.itemsPerPage())("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}var xe=class r{constructor(){this.subscription=null;this.servicios=S([]);this.sortState=ae({});this.filters=new ve;this.itemsPerPage=S(20);this.totalItems=S(0);this.page=S(1);this.router=p(X);this.servicioService=p(I);this.isLoading=this.servicioService.serviciosResource.isLoading;this.activatedRoute=p(K);this.sortService=p(se);this.filterOptions=J(this.filters.filterChanges);this.modalService=p(ie);this.trackId=i=>this.servicioService.getServicioIdentifier(i);y(()=>{let i=this.servicioService.serviciosResource.headers();i&&this.fillComponentAttributesFromResponseHeader(i)}),y(()=>{this.servicios.set(this.fillComponentAttributesFromResponseBody([...this.servicioService.servicios()]))}),y(()=>{let i=this.filterOptions();i&&$(()=>{this.handleNavigation(1,this.sortState(),i)})})}ngOnInit(){this.subscription=R([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe(E(([i,t])=>this.fillComponentAttributeFromRoute(i,t)),E(()=>this.load())).subscribe()}delete(i){let t=this.modalService.open(A,{size:"lg",backdrop:"static"});t.componentInstance.servicio=i,t.closed.pipe(L(s=>s===k),E(()=>this.load())).subscribe()}load(){this.queryBackend()}navigateToWithComponentValues(i){this.handleNavigation(this.page(),i,this.filters.filterOptions)}navigateToPage(i){this.handleNavigation(i,this.sortState(),this.filters.filterOptions)}fillComponentAttributeFromRoute(i,t){let s=i.get(de);this.page.set(+(s??1)),this.sortState.set(this.sortService.parseSortParam(i.get(ne)??t[oe])),this.filters.initializeFromParams(i)}fillComponentAttributesFromResponseBody(i){return i}fillComponentAttributesFromResponseHeader(i){this.totalItems.set(Number(i.get(ce)))}queryBackend(){let t={page:this.page()-1,size:this.itemsPerPage(),eagerload:!0,sort:this.sortService.buildSortParam(this.sortState())};for(let s of this.filters.filterOptions)t[s.name]=s.values;this.servicioService.serviciosParams.set(t)}handleNavigation(i,t,s){let m={page:i,size:this.itemsPerPage(),sort:this.sortService.buildSortParam(t)};if(s)for(let f of s)m[f.nameAsQueryParam()]=f.values;this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:m})}getTipoLabel(i){return i?{HOGAR:"Hogar",OFICINA:"Oficina",CHALET:"Chalet",EVENTO:"Evento",POST_OBRA:"Post-obra",POST_MUDANZA:"Post-mudanza"}[i]??i:"\u2014"}getEstadoLabel(i){return i?{PENDIENTE:"Pendiente",CONFIRMADO:"Confirmado",EN_CURSO:"En curso",COMPLETADO:"Completado",CANCELADO:"Cancelado"}[i]??i:"\u2014"}getEstadoClass(i){return i?{PENDIENTE:"b-pendiente",CONFIRMADO:"b-confirmado",EN_CURSO:"b-fuera",COMPLETADO:"b-confirmado",CANCELADO:"b-pendiente"}[i]??"":""}getZonaDotClass(i){return i?{MADRID_CAPITAL:"dot-madrid",COMUNIDAD_MADRID:"dot-fuera",FUERA_COMUNIDAD:"dot-evento"}[i]??"":""}getMapsUrl(i){if(!i||i.trim()==="")return"#";let t=`${i}, Madrid, Spain`;return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["jhi-servicio"]],decls:36,vars:7,consts:[[1,"container-fluid","px-4","py-4","bg-mokeal"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-semibold","mb-1"],[1,"text-muted","small"],[1,"d-flex","gap-2"],[1,"btn","btn-sm","btn-outline-secondary",3,"click","disabled"],["icon","sync",3,"animation"],[1,"btn","btn-sm","btn-primary",3,"routerLink"],["icon","plus"],[3,"filters"],[1,"content-card","text-center","py-5","text-muted"],[1,"mt-3"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"servicio-list"],[1,"d-flex","justify-content-between","align-items-center","mt-4"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"],[1,"servicio-row"],[1,"d-flex","align-items-center","gap-3","flex-grow-1"],[1,"zona-dot-lg",3,"ngClass"],[1,"servicio-fecha"],[1,"fw-semibold"],[1,"servicio-dir","flex-grow-1"],[1,"d-flex","align-items-center","gap-2"],[1,"servicio-workers","text-muted","small"],[1,"servicio-precio"],[1,"servicio-estado"],[1,"badge-custom",3,"ngClass"],[1,"servicio-acciones"],[1,"btn","btn-sm","btn-outline-secondary",3,"routerLink"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["icon","times"],["target","_blank","rel","noopener noreferrer","title","Ver en Google Maps",1,"text-primary","small","d-inline-flex","align-items-center",2,"text-decoration","none","cursor","pointer",3,"href"]],template:function(t,s){t&1&&(n(0,"div",0),e(1,`
  `),n(2,"div",1),e(3,`
    `),n(4,"div"),e(5,`
      `),n(6,"h4",2),e(7,"Servicios"),o(),e(8,`
      `),n(9,"div",3),e(10),o(),e(11,`
    `),o(),e(12,`
    `),n(13,"div",4),e(14,`
      `),n(15,"button",5),g("click",function(){return s.load()}),e(16,`
        `),c(17,"fa-icon",6),e(18,`
      `),o(),e(19,`
      `),n(20,"a",7),e(21," "),c(22,"fa-icon",8),e(23," Nuevo servicio "),o(),e(24,`
    `),o(),e(25,`
  `),o(),e(26,`

  `),c(27,"jhi-alert-error"),e(28,`
  `),c(29,"jhi-alert"),e(30,`
  `),c(31,"jhi-filter",9),e(32,`

  `),v(33,Oe,10,2)(34,Fe,14,11),o(),e(35,`
`)),t&2&&(a(10),u("",s.servicios().length," servicios encontrados"),a(5),l("disabled",s.isLoading()),a(2),l("animation",s.isLoading()?"spin":void 0),a(3),l("routerLink",N(6,ge)),a(11),l("filters",s.filters),a(2),x(s.servicios().length===0?33:34))},dependencies:[Y,M,O,P,w,re,T,ue,le,me,G,pe],styles:[".bg-mokeal[_ngcontent-%COMP%]{background:#f8f8f6;min-height:calc(100vh - 60px)}.content-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;padding:20px 22px}.servicio-list[_ngcontent-%COMP%]{background:#fff;border-radius:12px;border:1px solid #e8e8e4;overflow:hidden}.servicio-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid #f0f0ec;transition:background .1s}.servicio-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.servicio-row[_ngcontent-%COMP%]:hover{background:#fafaf8}.zona-dot-lg[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;flex-shrink:0}.zona-dot-lg.dot-madrid[_ngcontent-%COMP%]{background:#185fa5}.zona-dot-lg.dot-fuera[_ngcontent-%COMP%]{background:#0f6e56}.zona-dot-lg.dot-evento[_ngcontent-%COMP%]{background:#ba7517}.servicio-fecha[_ngcontent-%COMP%]{min-width:110px;flex-shrink:0}.servicio-dir[_ngcontent-%COMP%]{min-width:0;overflow:hidden}.servicio-dir[_ngcontent-%COMP%]   .fw-semibold[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.servicio-workers[_ngcontent-%COMP%]{min-width:40px;text-align:center;flex-shrink:0}.servicio-precio[_ngcontent-%COMP%]{min-width:70px;text-align:right;flex-shrink:0}.servicio-estado[_ngcontent-%COMP%]{min-width:90px;text-align:center;flex-shrink:0}.servicio-acciones[_ngcontent-%COMP%]{display:flex;gap:6px;flex-shrink:0}.badge-custom[_ngcontent-%COMP%]{font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500;white-space:nowrap}.badge-custom.b-confirmado[_ngcontent-%COMP%]{background:#eaf3de;color:#27500a}.badge-custom.b-pendiente[_ngcontent-%COMP%]{background:#fcebeb;color:#791f1f}.badge-custom.b-fuera[_ngcontent-%COMP%]{background:#e1f5ee;color:#085041}.badge-custom.b-evento[_ngcontent-%COMP%]{background:#faeeda;color:#633806}"]})}};export{xe as Servicio};
