import{a as M}from"./chunk-LNDSYDYJ.js";import{a as w}from"./chunk-DWQAEHD7.js";import{c as y}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as F}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import"./chunk-PITESBFZ.js";import{b as k,c as I}from"./chunk-KCR5TJTV.js";import{e as b}from"./chunk-56XJVXYY.js";import{B as j}from"./chunk-FINXBEYE.js";import{Db as h,Jb as T,Lb as d,Qa as a,Yb as t,Zb as r,aa as v,ba as _,db as A,ic as D,jc as f,mc as E,nc as S,qb as s,rb as u,wb as p,xb as e,yb as i,zb as c,zc as C}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var g=()=>({null:"",BORRADOR:"BORRADOR",EMITIDA:"EMITIDA",PAGADA:"PAGADA",CANCELADA:"CANCELADA"}),L=l=>["/factura",l,"edit"],B=l=>["/servicio",l,"view"],N=l=>["/cliente",l,"view"];function V(l,x){if(l&1&&(t(0,`
              `),e(1,"div"),t(2,`
                `),e(3,"a",23),t(4),i(),t(5,`
              `),i(),t(6,`
            `)),l&2){let n,o=d(),m=d();a(3),p("routerLink",f(2,B,(n=m.factura().servicio)==null?null:n.id)),a(),r(o.servicio==null?null:o.servicio.id)}}function O(l,x){if(l&1&&(t(0,`
              `),e(1,"div"),t(2,`
                `),e(3,"a",23),t(4),i(),t(5,`
              `),i(),t(6,`
            `)),l&2){let n,o=d(),m=d();a(3),p("routerLink",f(2,N,(n=m.factura().cliente)==null?null:n.id)),a(),r(o.cliente==null?null:o.cliente.id)}}function P(l,x){if(l&1){let n=h();t(0,`
      `),e(1,"div"),t(2,`
        `),e(3,"h2",2)(4,"span",3),t(5,"Factura"),i()(),t(6,`

        `),c(7,"hr"),t(8,`

        `),c(9,"jhi-alert-error"),t(10,`

        `),c(11,"jhi-alert"),t(12,`

        `),e(13,"dl",4),t(14,`
          `),e(15,"dt")(16,"span",5),t(17,"ID"),i()(),t(18,`
          `),e(19,"dd"),t(20,`
            `),e(21,"span"),t(22),i(),t(23,`
          `),i(),t(24,`
          `),e(25,"dt")(26,"span",6),t(27,"Numero"),i()(),t(28,`
          `),e(29,"dd"),t(30,`
            `),e(31,"span"),t(32),i(),t(33,`
          `),i(),t(34,`
          `),e(35,"dt")(36,"span",7),t(37,"Fecha Emision"),i()(),t(38,`
          `),e(39,"dd"),t(40,`
            `),e(41,"span"),t(42),E(43,"formatMediumDate"),i(),t(44,`
          `),i(),t(45,`
          `),e(46,"dt")(47,"span",8),t(48,"Fecha Vencimiento"),i()(),t(49,`
          `),e(50,"dd"),t(51,`
            `),e(52,"span"),t(53),E(54,"formatMediumDate"),i(),t(55,`
          `),i(),t(56,`
          `),e(57,"dt")(58,"span",9),t(59,"Base Imponible"),i()(),t(60,`
          `),e(61,"dd"),t(62,`
            `),e(63,"span"),t(64),i(),t(65,`
          `),i(),t(66,`
          `),e(67,"dt")(68,"span",10),t(69,"Iva"),i()(),t(70,`
          `),e(71,"dd"),t(72,`
            `),e(73,"span"),t(74),i(),t(75,`
          `),i(),t(76,`
          `),e(77,"dt")(78,"span",11),t(79,"Total"),i()(),t(80,`
          `),e(81,"dd"),t(82,`
            `),e(83,"span"),t(84),i(),t(85,`
          `),i(),t(86,`
          `),e(87,"dt")(88,"span",12),t(89,"Estado"),i()(),t(90,`
          `),e(91,"dd"),t(92,`
            `),e(93,"span",13),t(94),i(),t(95,`
          `),i(),t(96,`
          `),e(97,"dt")(98,"span",14),t(99,"Notas"),i()(),t(100,`
          `),e(101,"dd"),t(102,`
            `),e(103,"span"),t(104),i(),t(105,`
          `),i(),t(106,`
          `),e(107,"dt")(108,"span",15),t(109,"Servicio"),i()(),t(110,`
          `),e(111,"dd"),t(112,`
            `),s(113,V,7,4),i(),t(114,`
          `),e(115,"dt")(116,"span",16),t(117,"Cliente"),i()(),t(118,`
          `),e(119,"dd"),t(120,`
            `),s(121,O,7,4),i(),t(122,`
        `),i(),t(123,`

        `),e(124,"button",17),T("click",function(){v(n);let m=d();return _(m.previousState())}),t(125,`
          `),c(126,"fa-icon",18),t(127,"\xA0"),e(128,"span",19),t(129,"Volver"),i(),t(130,`
        `),i(),t(131,`

        `),e(132,"button",20),t(133,`
          `),c(134,"fa-icon",21),t(135,"\xA0"),e(136,"span",22),t(137,"Editar"),i(),t(138,`
        `),i(),t(139,`
      `),i(),t(140,`
    `)}if(l&2){let n=x,o=d();a(22),r(n.id),a(10),r(n.numero),a(10),r(S(43,13,n.fechaEmision)),a(11),r(S(54,15,n.fechaVencimiento)),a(11),r(n.baseImponible),a(10),r(n.iva),a(10),r(n.total),a(9),p("jhiTranslate","mokealApp.EstadoFactura."+(n.estado??"null")),a(),r(D(17,g)[n.estado??"null"]),a(10),r(n.notas),a(9),u(o.factura().servicio?113:-1),a(8),u(o.factura().cliente?121:-1),a(11),p("routerLink",f(18,L,n.id))}}var R=class l{constructor(){this.factura=C(null)}previousState(){globalThis.history.back()}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=A({type:l,selectors:[["jhi-factura-detail"]],inputs:{factura:[1,"factura"]},decls:7,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["data-cy","facturaDetailsHeading"],["jhiTranslate","mokealApp.factura.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","mokealApp.factura.numero"],["jhiTranslate","mokealApp.factura.fechaEmision"],["jhiTranslate","mokealApp.factura.fechaVencimiento"],["jhiTranslate","mokealApp.factura.baseImponible"],["jhiTranslate","mokealApp.factura.iva"],["jhiTranslate","mokealApp.factura.total"],["jhiTranslate","mokealApp.factura.estado"],[3,"jhiTranslate"],["jhiTranslate","mokealApp.factura.notas"],["jhiTranslate","mokealApp.factura.servicio"],["jhiTranslate","mokealApp.factura.cliente"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"],[3,"routerLink"]],template:function(n,o){if(n&1&&(e(0,"div",0),t(1,`
  `),e(2,"div",1),t(3,`
    `),s(4,P,141,20),i(),t(5,`
`),i(),t(6,`
`)),n&2){let m;a(4),u((m=o.factura())?4:-1,m)}},dependencies:[I,k,w,y,F,j,b,M],encapsulation:2})}};export{R as FacturaDetail};
