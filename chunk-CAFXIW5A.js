import{a as U}from"./chunk-LNDSYDYJ.js";import{a as R}from"./chunk-DWQAEHD7.js";import{c as F}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as L}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import"./chunk-PITESBFZ.js";import{b as O,c as M}from"./chunk-KCR5TJTV.js";import{e as b}from"./chunk-56XJVXYY.js";import{B as y}from"./chunk-FINXBEYE.js";import{Db as I,Jb as C,Lb as p,Qa as a,Yb as e,Zb as r,_b as h,aa as S,ba as A,db as _,ic as x,jc as u,mc as j,nc as k,qb as v,rb as E,sb as T,ub as f,vb as D,wb as m,xb as t,yb as i,zb as s,zc as N}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var w=()=>({null:"",HOGAR:"HOGAR",OFICINA:"OFICINA",CHALET:"CHALET",EVENTO:"EVENTO",POST_OBRA:"POST_OBRA",POST_MUDANZA:"POST_MUDANZA"}),g=()=>({null:"",MADRID_CAPITAL:"MADRID_CAPITAL",COMUNIDAD_MADRID:"COMUNIDAD_MADRID",FUERA_COMUNIDAD:"FUERA_COMUNIDAD"}),H=()=>({null:"",PUNTUAL:"PUNTUAL",SEMANAL:"SEMANAL",QUINCENAL:"QUINCENAL",MENSUAL:"MENSUAL"}),B=()=>({null:"",PENDIENTE:"PENDIENTE",CONFIRMADO:"CONFIRMADO",EN_CURSO:"EN_CURSO",COMPLETADO:"COMPLETADO",CANCELADO:"CANCELADO"}),V=l=>["/servicio",l,"edit"],$=l=>["/cliente",l,"view"],Z=l=>["/tarifa",l,"view"],z=l=>["/trabajador",l,"view"];function G(l,c){if(l&1&&(e(0,`
              `),t(1,"div"),e(2,`
                `),t(3,"a",29),e(4),i(),e(5,`
              `),i(),e(6,`
            `)),l&2){let n,o=p(),d=p();a(3),m("routerLink",u(2,$,(n=d.servicio().cliente)==null?null:n.id)),a(),r(o.cliente==null?null:o.cliente.id)}}function Q(l,c){if(l&1&&(e(0,`
              `),t(1,"div"),e(2,`
                `),t(3,"a",29),e(4),i(),e(5,`
              `),i(),e(6,`
            `)),l&2){let n,o=p(),d=p();a(3),m("routerLink",u(2,Z,(n=d.servicio().tarifa)==null?null:n.id)),a(),r(o.tarifa==null?null:o.tarifa.id)}}function q(l,c){if(l&1&&(e(0,`
              `),t(1,"span"),e(2,`
                `),t(3,"a",29),e(4),i(),e(5),i(),e(6,`
            `)),l&2){let n=c.$implicit,o=c.$index,d=c.$count;a(3),m("routerLink",u(3,z,n.id)),a(),r(n==null?null:n.id),a(),h("",o===d-1?"":", ",`
              `)}}function J(l,c){if(l&1){let n=I();e(0,`
      `),t(1,"div"),e(2,`
        `),t(3,"h2",2)(4,"span",3),e(5,"Servicio"),i()(),e(6,`

        `),s(7,"hr"),e(8,`

        `),s(9,"jhi-alert-error"),e(10,`

        `),s(11,"jhi-alert"),e(12,`

        `),t(13,"dl",4),e(14,`
          `),t(15,"dt")(16,"span",5),e(17,"ID"),i()(),e(18,`
          `),t(19,"dd"),e(20,`
            `),t(21,"span"),e(22),i(),e(23,`
          `),i(),e(24,`
          `),t(25,"dt")(26,"span",6),e(27,"Tipo Servicio"),i()(),e(28,`
          `),t(29,"dd"),e(30,`
            `),t(31,"span",7),e(32),i(),e(33,`
          `),i(),e(34,`
          `),t(35,"dt")(36,"span",8),e(37,"Zona"),i()(),e(38,`
          `),t(39,"dd"),e(40,`
            `),t(41,"span",7),e(42),i(),e(43,`
          `),i(),e(44,`
          `),t(45,"dt")(46,"span",9),e(47,"Frecuencia"),i()(),e(48,`
          `),t(49,"dd"),e(50,`
            `),t(51,"span",7),e(52),i(),e(53,`
          `),i(),e(54,`
          `),t(55,"dt")(56,"span",10),e(57,"Fecha"),i()(),e(58,`
          `),t(59,"dd"),e(60,`
            `),t(61,"span"),e(62),j(63,"formatMediumDate"),i(),e(64,`
          `),i(),e(65,`
          `),t(66,"dt")(67,"span",11),e(68,"Hora Inicio"),i()(),e(69,`
          `),t(70,"dd"),e(71,`
            `),t(72,"span"),e(73),i(),e(74,`
          `),i(),e(75,`
          `),t(76,"dt")(77,"span",12),e(78,"Duracion Horas"),i()(),e(79,`
          `),t(80,"dd"),e(81,`
            `),t(82,"span"),e(83),i(),e(84,`
          `),i(),e(85,`
          `),t(86,"dt")(87,"span",13),e(88,"Num Trabajadores"),i()(),e(89,`
          `),t(90,"dd"),e(91,`
            `),t(92,"span"),e(93),i(),e(94,`
          `),i(),e(95,`
          `),t(96,"dt")(97,"span",14),e(98,"Estado"),i()(),e(99,`
          `),t(100,"dd"),e(101,`
            `),t(102,"span",7),e(103),i(),e(104,`
          `),i(),e(105,`
          `),t(106,"dt")(107,"span",15),e(108,"Direccion"),i()(),e(109,`
          `),t(110,"dd"),e(111,`
            `),t(112,"span"),e(113),i(),e(114,`
          `),i(),e(115,`
          `),t(116,"dt")(117,"span",16),e(118,"Municipio"),i()(),e(119,`
          `),t(120,"dd"),e(121,`
            `),t(122,"span"),e(123),i(),e(124,`
          `),i(),e(125,`
          `),t(126,"dt")(127,"span",17),e(128,"Notas"),i()(),e(129,`
          `),t(130,"dd"),e(131,`
            `),t(132,"span"),e(133),i(),e(134,`
          `),i(),e(135,`
          `),t(136,"dt")(137,"span",18),e(138,"Precio Total"),i()(),e(139,`
          `),t(140,"dd"),e(141,`
            `),t(142,"span"),e(143),i(),e(144,`
          `),i(),e(145,`
          `),t(146,"dt")(147,"span",19),e(148,"Descuento"),i()(),e(149,`
          `),t(150,"dd"),e(151,`
            `),t(152,"span"),e(153),i(),e(154,`
          `),i(),e(155,`
          `),t(156,"dt")(157,"span",20),e(158,"Cliente"),i()(),e(159,`
          `),t(160,"dd"),e(161,`
            `),v(162,G,7,4),i(),e(163,`
          `),t(164,"dt")(165,"span",21),e(166,"Tarifa"),i()(),e(167,`
          `),t(168,"dd"),e(169,`
            `),v(170,Q,7,4),i(),e(171,`
          `),t(172,"dt")(173,"span",22),e(174,"Trabajadores"),i()(),e(175,`
          `),t(176,"dd"),e(177,`
            `),f(178,q,7,5,null,null,T),i(),e(180,`
        `),i(),e(181,`

        `),t(182,"button",23),C("click",function(){S(n);let d=p();return A(d.previousState())}),e(183,`
          `),s(184,"fa-icon",24),e(185,"\xA0"),t(186,"span",25),e(187,"Volver"),i(),e(188,`
        `),i(),e(189,`

        `),t(190,"button",26),e(191,`
          `),s(192,"fa-icon",27),e(193,"\xA0"),t(194,"span",28),e(195,"Editar"),i(),e(196,`
        `),i(),e(197,`
      `),i(),e(198,`
    `)}if(l&2){let n=c,o=p();a(22),r(n.id),a(9),m("jhiTranslate","mokealApp.TipoServicio."+(n.tipoServicio??"null")),a(),r(x(23,w)[n.tipoServicio??"null"]),a(9),m("jhiTranslate","mokealApp.ZonaTarifa."+(n.zona??"null")),a(),r(x(24,g)[n.zona??"null"]),a(9),m("jhiTranslate","mokealApp.Frecuencia."+(n.frecuencia??"null")),a(),r(x(25,H)[n.frecuencia??"null"]),a(10),r(k(63,21,n.fecha)),a(11),r(n.horaInicio),a(10),r(n.duracionHoras),a(10),r(n.numTrabajadores),a(9),m("jhiTranslate","mokealApp.EstadoServicio."+(n.estado??"null")),a(),r(x(26,B)[n.estado??"null"]),a(10),r(n.direccion),a(10),r(n.municipio),a(10),r(n.notas),a(10),r(n.precioTotal),a(10),r(n.descuento),a(9),E(o.servicio().cliente?162:-1),a(8),E(o.servicio().tarifa?170:-1),a(8),D(n.trabajadoreses),a(12),m("routerLink",u(27,V,n.id))}}var P=class l{constructor(){this.servicio=N(null)}previousState(){globalThis.history.back()}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=_({type:l,selectors:[["jhi-servicio-detail"]],inputs:{servicio:[1,"servicio"]},decls:7,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["data-cy","servicioDetailsHeading"],["jhiTranslate","mokealApp.servicio.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","mokealApp.servicio.tipoServicio"],[3,"jhiTranslate"],["jhiTranslate","mokealApp.servicio.zona"],["jhiTranslate","mokealApp.servicio.frecuencia"],["jhiTranslate","mokealApp.servicio.fecha"],["jhiTranslate","mokealApp.servicio.horaInicio"],["jhiTranslate","mokealApp.servicio.duracionHoras"],["jhiTranslate","mokealApp.servicio.numTrabajadores"],["jhiTranslate","mokealApp.servicio.estado"],["jhiTranslate","mokealApp.servicio.direccion"],["jhiTranslate","mokealApp.servicio.municipio"],["jhiTranslate","mokealApp.servicio.notas"],["jhiTranslate","mokealApp.servicio.precioTotal"],["jhiTranslate","mokealApp.servicio.descuento"],["jhiTranslate","mokealApp.servicio.cliente"],["jhiTranslate","mokealApp.servicio.tarifa"],["jhiTranslate","mokealApp.servicio.trabajadores"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"],[3,"routerLink"]],template:function(n,o){if(n&1&&(t(0,"div",0),e(1,`
  `),t(2,"div",1),e(3,`
    `),v(4,J,199,29),i(),e(5,`
`),i(),e(6,`
`)),n&2){let d;a(4),E((d=o.servicio())?4:-1,d)}},dependencies:[M,O,R,F,L,y,b,U],encapsulation:2})}};export{P as ServicioDetail};
