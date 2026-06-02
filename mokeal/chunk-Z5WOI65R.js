import{a as me,b as pe}from"./chunk-3RBIYD6O.js";import{a as I}from"./chunk-FTI4DTWR.js";import{a as de,b as ce}from"./chunk-ZIIA3V4Y.js";import{a as ee,b as te,c as re,d as oe,e as le,f as se}from"./chunk-W3JMUN3W.js";import"./chunk-34TH6SZL.js";import{a as ne,b as ie}from"./chunk-LGDKSRGQ.js";import{g as G,i as K,k as $,t as J}from"./chunk-L7QYCLNK.js";import{a as ae}from"./chunk-HSC43Y6H.js";import{c as j}from"./chunk-2MRGFY2T.js";import"./chunk-VIDFJCIH.js";import{a as D}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import"./chunk-Z4UJQH5K.js";import{b as E,c as C}from"./chunk-KCR5TJTV.js";import{b as Z}from"./chunk-PDQY6DJ2.js";import"./chunk-GN5HSKJX.js";import{a as Q,d as X,e as Y}from"./chunk-56XJVXYY.js";import{B as T,j as W}from"./chunk-FINXBEYE.js";import{Db as f,Jb as _,Lb as d,Qa as s,W as g,Yb as e,Zb as S,_b as z,aa as u,ac as A,ba as x,bc as F,cc as P,db as M,ic as q,jc as b,lc as O,m as R,ma as h,mc as V,oc as L,qb as v,rb as y,sb as H,ub as w,vb as k,wb as c,xb as n,yb as t,zb as m}from"./chunk-T6YFHVDB.js";import{a as B,b as N}from"./chunk-C6Q5SG76.js";var fe=o=>({id:o});function he(o,r){if(o&1){let i=f();e(0,`
  `),n(1,"form",0),_("ngSubmit",function(){u(i);let l=d();return x(l.confirmDelete(l.userManagement.login))}),e(2,`
    `),n(3,"div",1),e(4,`
      `),n(5,"h4",2),e(6,`
        Confirmar operaci\xF3n de borrado
      `),t(),e(7,`
    `),t(),e(8,`

    `),n(9,"div",3),e(10,`
      `),m(11,"jhi-alert-error"),e(12,`
      `),n(13,"p",4),e(14),t(),e(15,`
    `),t(),e(16,`

    `),n(17,"div",5),e(18,`
      `),n(19,"button",6),_("click",function(){u(i);let l=d();return x(l.cancel())}),e(20,`
        `),m(21,"fa-icon",7),e(22,"\xA0"),n(23,"span",8),e(24,"Cancelar"),t(),e(25,`
      `),t(),e(26,`

      `),n(27,"button",9),e(28,`
        `),m(29,"fa-icon",10),e(30,"\xA0"),n(31,"span",11),e(32,"Eliminar"),t(),e(33,`
      `),t(),e(34,`
    `),t(),e(35,`
  `),t(),e(36,`
`)}if(o&2){let i=d();s(13),c("translateValues",b(2,fe,i.userManagement.login)),s(),z(`
        \xBFSeguro que quieres eliminar el usuario `,i.userManagement.login,`?
      `)}}var U=class o{constructor(){this.userManagementService=g(I);this.activeModal=g(ee)}cancel(){this.activeModal.dismiss()}confirmDelete(r){this.userManagementService.delete(r).subscribe(()=>{this.activeModal.close(ie)})}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=M({type:o,selectors:[["ng-component"]],decls:1,vars:1,consts:[["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","userManagementDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],[1,"modal-body"],["id","jhi-delete-userManagement-heading","jhiTranslate","userManagement.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-userManagement","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(i,a){i&1&&v(0,he,37,4),i&2&&y(a.userManagement?0:-1)},dependencies:[D,T,J,$,G,K,C,E,j],encapsulation:2})}};var ve=()=>["./new"],ye=(o,r,i)=>({page:o,totalItems:r,itemsPerPage:i}),ue=o=>["./",o,"view"],Me=o=>["./",o,"edit"];function Ee(o,r){return this.trackIdentity(r)}function Ce(o,r){if(o&1){let i=f();e(0,`
                  `),n(1,"button",45),_("click",function(){u(i);let l=d().$implicit,p=d(2);return x(p.setActive(l,!0))}),e(2,`
                    Desactivado
                  `),t(),e(3,`
                `)}}function Te(o,r){if(o&1){let i=f();e(0,`
                  `),n(1,"button",46),_("click",function(){u(i);let l=d().$implicit,p=d(2);return x(p.setActive(l,!1))}),e(2,`
                    Activado
                  `),t(),e(3,`
                `)}if(o&2){let i,a=d().$implicit,l=d(2);s(),c("disabled",!l.currentAccount()||((i=l.currentAccount())==null?null:i.login)===a.login)}}function De(o,r){if(o&1&&(e(0,`
                  `),n(1,"div"),e(2,`
                    `),n(3,"span",47),e(4),t(),e(5,`
                  `),t(),e(6,`
                `)),o&2){let i=r.$implicit;s(4),S(i)}}function je(o,r){if(o&1){let i=f();e(0,`
            `),n(1,"tr",32),e(2,`
              `),n(3,"td"),e(4,`
                `),n(5,"a",33),e(6),t(),e(7,`
              `),t(),e(8,`
              `),n(9,"td"),e(10),t(),e(11,`
              `),n(12,"td"),e(13),t(),e(14,`
              `),n(15,"td"),e(16,`
                `),v(17,Ce,4,0)(18,Te,4,1),t(),e(19,`
              `),n(20,"td"),e(21),t(),e(22,`
              `),n(23,"td"),e(24,`
                `),w(25,De,7,1,null,null,H),t(),e(27,`
              `),n(28,"td"),e(29),V(30,"date"),t(),e(31,`
              `),n(32,"td"),e(33),t(),e(34,`
              `),n(35,"td"),e(36),V(37,"date"),t(),e(38,`
              `),n(39,"td",34),e(40,`
                `),n(41,"div",35),e(42,`
                  `),n(43,"button",36),e(44,`
                    `),m(45,"fa-icon",37),e(46,`
                    `),n(47,"span",38),e(48,"Vista"),t(),e(49,`
                  `),t(),e(50,`

                  `),n(51,"button",39),e(52,`
                    `),m(53,"fa-icon",40),e(54,`
                    `),n(55,"span",41),e(56,"Editar"),t(),e(57,`
                  `),t(),e(58,`

                  `),n(59,"button",42),_("click",function(){let l=u(i).$implicit,p=d(2);return x(p.deleteUser(l))}),e(60,`
                    `),m(61,"fa-icon",43),e(62,`
                    `),n(63,"span",44),e(64,"Eliminar"),t(),e(65,`
                  `),t(),e(66,`
                `),t(),e(67,`
              `),t(),e(68,`
            `),t(),e(69,`
          `)}if(o&2){let i,a=r.$implicit,l=d(2);s(5),c("routerLink",b(18,ue,a.login)),s(),S(a.id),s(4),S(a.login),s(3),S(a.email),s(4),y(a.activated?18:17),s(4),S(a.langKey),s(4),k(a.authorities),s(4),S(L(30,12,a.createdDate,"dd/MM/yy HH:mm")),s(4),S(a.lastModifiedBy),s(3),S(L(37,15,a.lastModifiedDate,"dd/MM/yy HH:mm")),s(7),c("routerLink",b(20,ue,a.login)),s(8),c("routerLink",b(22,Me,a.login)),s(8),c("disabled",!l.currentAccount()||((i=l.currentAccount())==null?null:i.login)===a.login)}}function Ie(o,r){if(o&1){let i=f();e(0,`
    `),n(1,"div",9),e(2,`
      `),n(3,"table",10),e(4,`
        `),n(5,"thead"),e(6,`
          `),n(7,"tr",11),P("sortStateChange",function(l){u(i);let p=d();return F(p.sortState,l)||(p.sortState=l),x(l)}),_("sortChange",function(l){u(i);let p=d();return x(p.transition(l))}),e(8,`
            `),n(9,"th",12)(10,"span",13),e(11,"ID"),t(),e(12," "),m(13,"fa-icon",14),t(),e(14,`
            `),n(15,"th",15)(16,"span",16),e(17,"Login"),t(),e(18," "),m(19,"fa-icon",14),t(),e(20,`
            `),n(21,"th",17)(22,"span",18),e(23,"Email"),t(),e(24," "),m(25,"fa-icon",14),t(),e(26,`
            `),m(27,"th",19),e(28,`
            `),n(29,"th",20)(30,"span",21),e(31,"Idioma"),t(),e(32," "),m(33,"fa-icon",14),t(),e(34,`
            `),n(35,"th",19)(36,"span",22),e(37,"Perfiles"),t()(),e(38,`
            `),n(39,"th",23),e(40,`
              `),n(41,"span",24),e(42,"Fecha de creaci\xF3n"),t(),e(43," "),m(44,"fa-icon",14),e(45,`
            `),t(),e(46,`
            `),n(47,"th",25),e(48,`
              `),n(49,"span",26),e(50,"Modificado por"),t(),e(51," "),m(52,"fa-icon",14),e(53,`
            `),t(),e(54,`
            `),n(55,"th",27),e(56,`
              `),n(57,"span",28),e(58,"Fecha de modificaci\xF3n"),t(),e(59," "),m(60,"fa-icon",14),e(61,`
            `),t(),e(62,`
            `),m(63,"th",19),e(64,`
          `),t(),e(65,`
        `),t(),e(66,`
        `),n(67,"tbody"),e(68,`
          `),w(69,je,70,24,null,null,Ee,!0),t(),e(71,`
      `),t(),e(72,`
    `),t(),e(73,`

    `),n(74,"div"),e(75,`
      `),n(76,"div",29),e(77,`
        `),m(78,"jhi-item-count",30),e(79,`
      `),t(),e(80,`

      `),n(81,"div",29),e(82,`
        `),n(83,"ngb-pagination",31),P("pageChange",function(l){u(i);let p=d();return F(p.page,l)||(p.page=l),x(l)}),_("pageChange",function(){u(i);let l=d();return x(l.transition())}),t(),e(84,`
      `),t(),e(85,`
    `),t(),e(86,`
  `)}if(o&2){let i=d();s(7),A("sortState",i.sortState),s(62),k(i.users()),s(9),c("params",O(8,ye,i.page(),i.totalItems(),i.itemsPerPage())),s(5),c("collectionSize",i.totalItems()),A("page",i.page),c("pageSize",i.itemsPerPage())("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}var xe=class o{constructor(){this.currentAccount=g(Z).account;this.users=h(null);this.isLoading=h(!1);this.totalItems=h(0);this.itemsPerPage=h(20);this.page=h(0);this.sortState=le({});this.userService=g(I);this.activatedRoute=g(Q);this.router=g(X);this.sortService=g(se);this.modalService=g(te)}ngOnInit(){this.handleNavigation()}setActive(r,i){this.userService.update(N(B({},r),{activated:i})).subscribe(()=>this.loadAll())}trackIdentity(r){return r.id}deleteUser(r){let i=this.modalService.open(U,{size:"lg",backdrop:"static"});i.componentInstance.userManagement=r,i.closed.subscribe(a=>{a==="deleted"&&this.loadAll()})}loadAll(){this.isLoading.set(!0),this.userService.query({page:this.page()-1,size:this.itemsPerPage(),sort:this.sortService.buildSortParam(this.sortState(),"id")}).subscribe({next:r=>{this.isLoading.set(!1),this.onSuccess(r.body,r.headers)},error:()=>this.isLoading.set(!1)})}transition(r){this.router.navigate(["./"],{relativeTo:this.activatedRoute.parent,queryParams:{page:this.page(),sort:this.sortService.buildSortParam(r??this.sortState())}})}handleNavigation(){R([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([r,i])=>{let a=i.get(ce);this.page.set(+(a??1)),this.sortState.set(this.sortService.parseSortParam(i.get(ne)??r.defaultSort)),this.loadAll()})}onSuccess(r,i){this.totalItems.set(Number(i.get(de))),this.users.set(r)}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=M({type:o,selectors:[["jhi-user-mgmt"]],decls:33,vars:5,consts:[["id","page-heading","data-cy","UserManagementHeading"],["jhiTranslate","userManagement.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"click","disabled"],["icon","sync",3,"animation"],["jhiTranslate","userManagement.home.refreshListLabel"],["data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity",3,"routerLink"],["icon","plus"],["jhiTranslate","userManagement.home.createLabel"],[1,"table-responsive"],["aria-describedby","user-management-page-heading",1,"table","table-striped"],["jhiSort","",3,"sortStateChange","sortChange","sortState"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","login"],["jhiTranslate","userManagement.login"],["scope","col","jhiSortBy","email"],["jhiTranslate","userManagement.email"],["scope","col"],["scope","col","jhiSortBy","langKey"],["jhiTranslate","userManagement.langKey"],["jhiTranslate","userManagement.profiles"],["scope","col","jhiSortBy","createdDate"],["jhiTranslate","userManagement.createdDate"],["scope","col","jhiSortBy","lastModifiedBy"],["jhiTranslate","userManagement.lastModifiedBy"],["scope","col","jhiSortBy","lastModifiedDate"],["jhiTranslate","userManagement.lastModifiedDate"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","queryParamsHandling","merge","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","button","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click","disabled"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"],["jhiTranslate","userManagement.deactivated",1,"btn","btn-danger","btn-sm",3,"click"],["jhiTranslate","userManagement.activated",1,"btn","btn-success","btn-sm",3,"click","disabled"],[1,"badge","bg-info"]],template:function(i,a){i&1&&(n(0,"div"),e(1,`
  `),n(2,"h2",0),e(3,`
    `),n(4,"span",1),e(5,"Usuarios"),t(),e(6,`

    `),n(7,"div",2),e(8,`
      `),n(9,"button",3),_("click",function(){return a.loadAll()}),e(10,`
        `),m(11,"fa-icon",4),e(12,`
        `),n(13,"span",5),e(14,"Refrescar lista"),t(),e(15,`
      `),t(),e(16,`
      `),n(17,"button",6),e(18,`
        `),m(19,"fa-icon",7),e(20,`
        `),n(21,"span",8),e(22,"Crear un nuevo usuario"),t(),e(23,`
      `),t(),e(24,`
    `),t(),e(25,`
  `),t(),e(26,`

  `),m(27,"jhi-alert-error"),e(28,`

  `),m(29,"jhi-alert"),e(30,`

  `),v(31,Ie,87,12),t(),e(32,`
`)),i&2&&(s(9),c("disabled",a.isLoading()),s(2),c("animation",a.isLoading()?"spin":void 0),s(6),c("routerLink",q(4,ve)),s(14),y(a.users()?31:-1))},dependencies:[Y,C,E,j,ae,me,D,T,re,oe,pe,W],encapsulation:2})}};export{xe as UserManagement};
