import{a as F}from"./chunk-TQZHUU4D.js";import{c as w}from"./chunk-IGHTKR47.js";import"./chunk-VIDFJCIH.js";import{a as g}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{b as D,c as I}from"./chunk-KCR5TJTV.js";import{e as A}from"./chunk-56XJVXYY.js";import{B as C}from"./chunk-FINXBEYE.js";import{Db as T,Jb as _,Lb as h,Qa as a,Yb as t,Zb as l,_b as k,aa as c,ba as b,db as u,jc as x,qb as j,rb as f,sb as E,ub as S,vb as v,wb as s,xb as e,yb as i,zb as m,zc as y}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var M=r=>["/trabajador",r,"edit"],N=r=>["/servicio",r,"view"];function $(r,o){if(r&1&&(t(0,`
              `),e(1,"span"),t(2,`
                `),e(3,"a",18),t(4),i(),t(5),i(),t(6,`
            `)),r&2){let n=o.$implicit,p=o.$index,d=o.$count;a(3),s("routerLink",x(3,N,n.id)),a(),l(n==null?null:n.id),a(),k("",p===d-1?"":", ",`
              `)}}function V(r,o){if(r&1){let n=T();t(0,`
      `),e(1,"div"),t(2,`
        `),e(3,"h2",2)(4,"span",3),t(5,"Trabajador"),i()(),t(6,`

        `),m(7,"hr"),t(8,`

        `),m(9,"jhi-alert-error"),t(10,`

        `),m(11,"jhi-alert"),t(12,`

        `),e(13,"dl",4),t(14,`
          `),e(15,"dt")(16,"span",5),t(17,"ID"),i()(),t(18,`
          `),e(19,"dd"),t(20,`
            `),e(21,"span"),t(22),i(),t(23,`
          `),i(),t(24,`
          `),e(25,"dt")(26,"span",6),t(27,"Nombre"),i()(),t(28,`
          `),e(29,"dd"),t(30,`
            `),e(31,"span"),t(32),i(),t(33,`
          `),i(),t(34,`
          `),e(35,"dt")(36,"span",7),t(37,"Telefono"),i()(),t(38,`
          `),e(39,"dd"),t(40,`
            `),e(41,"span"),t(42),i(),t(43,`
          `),i(),t(44,`
          `),e(45,"dt")(46,"span",8),t(47,"Email"),i()(),t(48,`
          `),e(49,"dd"),t(50,`
            `),e(51,"span"),t(52),i(),t(53,`
          `),i(),t(54,`
          `),e(55,"dt")(56,"span",9),t(57,"Activo"),i()(),t(58,`
          `),e(59,"dd"),t(60,`
            `),e(61,"span"),t(62),i(),t(63,`
          `),i(),t(64,`
          `),e(65,"dt")(66,"span",10),t(67,"Notas"),i()(),t(68,`
          `),e(69,"dd"),t(70,`
            `),e(71,"span"),t(72),i(),t(73,`
          `),i(),t(74,`
          `),e(75,"dt")(76,"span",11),t(77,"Servicios"),i()(),t(78,`
          `),e(79,"dd"),t(80,`
            `),S(81,$,7,5,null,null,E),i(),t(83,`
        `),i(),t(84,`

        `),e(85,"button",12),_("click",function(){c(n);let d=h();return b(d.previousState())}),t(86,`
          `),m(87,"fa-icon",13),t(88,"\xA0"),e(89,"span",14),t(90,"Volver"),i(),t(91,`
        `),i(),t(92,`

        `),e(93,"button",15),t(94,`
          `),m(95,"fa-icon",16),t(96,"\xA0"),e(97,"span",17),t(98,"Editar"),i(),t(99,`
        `),i(),t(100,`
      `),i(),t(101,`
    `)}if(r&2){let n=o;a(22),l(n.id),a(10),l(n.nombre),a(10),l(n.telefono),a(10),l(n.email),a(10),l(n.activo),a(10),l(n.notas),a(9),v(n.servicioses),a(12),s("routerLink",x(7,M,n.id))}}var L=class r{constructor(){this.trabajador=y(null)}previousState(){globalThis.history.back()}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275cmp=u({type:r,selectors:[["jhi-trabajador-detail"]],inputs:{trabajador:[1,"trabajador"]},decls:7,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["data-cy","trabajadorDetailsHeading"],["jhiTranslate","mokealApp.trabajador.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","mokealApp.trabajador.nombre"],["jhiTranslate","mokealApp.trabajador.telefono"],["jhiTranslate","mokealApp.trabajador.email"],["jhiTranslate","mokealApp.trabajador.activo"],["jhiTranslate","mokealApp.trabajador.notas"],["jhiTranslate","mokealApp.trabajador.servicios"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"],[3,"routerLink"]],template:function(n,p){if(n&1&&(e(0,"div",0),t(1,`
  `),e(2,"div",1),t(3,`
    `),j(4,V,102,9),i(),t(5,`
`),i(),t(6,`
`)),n&2){let d;a(4),f((d=p.trabajador())?4:-1,d)}},dependencies:[I,D,F,w,g,C,A],encapsulation:2})}};export{L as TrabajadorDetail};
