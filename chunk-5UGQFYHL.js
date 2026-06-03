import{a as I}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{b,c as j}from"./chunk-KCR5TJTV.js";import{B as C,j as D}from"./chunk-FINXBEYE.js";import{Db as _,Jb as y,Lb as h,Qa as a,Yb as e,Zb as r,aa as u,ba as g,db as M,mc as x,oc as c,qb as o,rb as s,sb as f,ub as S,vb as E,xb as t,yb as n,zb as v,zc as T}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";function B(l,d){l&1&&(e(0,`
              `),t(1,"span",19),e(2,"Activado"),n(),e(3,`
            `))}function w(l,d){l&1&&(e(0,`
              `),t(1,"span",20),e(2,"Desactivado"),n(),e(3,`
            `))}function F(l,d){if(l&1&&(e(0,`
                `),t(1,"li"),e(2,`
                  `),t(3,"span",21),e(4),n(),e(5,`
                `),n(),e(6,`
              `)),l&2){let i=d.$implicit;a(4),r(i)}}function N(l,d){if(l&1){let i=_();e(0,`
      `),t(1,"div"),e(2,`
        `),t(3,"h2",2),e(4,`
          `),t(5,"span",3),e(6,"Usuario"),n(),e(7," ["),t(8,"strong"),e(9),n(),e(10,`]
        `),n(),e(11,`

        `),t(12,"dl",4),e(13,`
          `),t(14,"dt")(15,"span",5),e(16,"Login"),n()(),e(17,`
          `),t(18,"dd"),e(19,`
            `),t(20,"span"),e(21),n(),e(22,`
            `),o(23,B,4,0)(24,w,4,0),n(),e(25,`

          `),t(26,"dt")(27,"span",6),e(28,"Nombre"),n()(),e(29,`
          `),t(30,"dd"),e(31),n(),e(32,`

          `),t(33,"dt")(34,"span",7),e(35,"Apellidos"),n()(),e(36,`
          `),t(37,"dd"),e(38),n(),e(39,`

          `),t(40,"dt")(41,"span",8),e(42,"Email"),n()(),e(43,`
          `),t(44,"dd"),e(45),n(),e(46,`

          `),t(47,"dt")(48,"span",9),e(49,"Idioma"),n()(),e(50,`
          `),t(51,"dd"),e(52),n(),e(53,`

          `),t(54,"dt")(55,"span",10),e(56,"Creado por"),n()(),e(57,`
          `),t(58,"dd"),e(59),n(),e(60,`

          `),t(61,"dt")(62,"span",11),e(63,"Fecha de creaci\xF3n"),n()(),e(64,`
          `),t(65,"dd"),e(66),x(67,"date"),n(),e(68,`

          `),t(69,"dt")(70,"span",12),e(71,"Modificado por"),n()(),e(72,`
          `),t(73,"dd"),e(74),n(),e(75,`

          `),t(76,"dt")(77,"span",13),e(78,"Fecha de modificaci\xF3n"),n()(),e(79,`
          `),t(80,"dd"),e(81),x(82,"date"),n(),e(83,`

          `),t(84,"dt")(85,"span",14),e(86,"Perfiles"),n()(),e(87,`
          `),t(88,"dd"),e(89,`
            `),t(90,"ul",15),e(91,`
              `),S(92,F,7,1,null,null,f),n(),e(94,`
          `),n(),e(95,`
        `),n(),e(96,`

        `),t(97,"button",16),y("click",function(){u(i);let m=h();return g(m.previousState())}),e(98,`
          `),v(99,"fa-icon",17),e(100,"\xA0"),t(101,"span",18),e(102,"Volver"),n(),e(103,`
        `),n(),e(104,`
      `),n(),e(105,`
    `)}if(l&2){let i=d;a(9),r(i.login),a(12),r(i.login),a(2),s(i.activated?23:24),a(8),r(i.firstName),a(7),r(i.lastName),a(7),r(i.email),a(7),r(i.langKey),a(7),r(i.createdBy),a(7),r(c(67,11,i.createdDate,"dd/MM/yy HH:mm")),a(8),r(i.lastModifiedBy),a(7),r(c(82,14,i.lastModifiedDate,"dd/MM/yy HH:mm")),a(11),E(i.authorities)}}var U=class l{constructor(){this.userManagement=T(null)}previousState(){globalThis.history.back()}static{this.\u0275fac=function(i){return new(i||l)}}static{this.\u0275cmp=M({type:l,selectors:[["jhi-user-mgmt-detail"]],inputs:{userManagement:[1,"userManagement"]},decls:7,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["data-cy","userManagementDetailsHeading"],["jhiTranslate","userManagement.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","userManagement.login"],["jhiTranslate","userManagement.firstName"],["jhiTranslate","userManagement.lastName"],["jhiTranslate","userManagement.email"],["jhiTranslate","userManagement.langKey"],["jhiTranslate","userManagement.createdBy"],["jhiTranslate","userManagement.createdDate"],["jhiTranslate","userManagement.lastModifiedBy"],["jhiTranslate","userManagement.lastModifiedDate"],["jhiTranslate","userManagement.profiles"],[1,"list-unstyled"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["jhiTranslate","userManagement.activated",1,"badge","bg-success"],["jhiTranslate","userManagement.deactivated",1,"badge","bg-danger"],[1,"badge","bg-info"]],template:function(i,p){if(i&1&&(t(0,"div",0),e(1,`
  `),t(2,"div",1),e(3,`
    `),o(4,N,106,17),n(),e(5,`
`),n(),e(6,`
`)),i&2){let m;a(4),s((m=p.userManagement())?4:-1,m)}},dependencies:[j,b,I,C,D],encapsulation:2})}};export{U as UserManagementDetail};
