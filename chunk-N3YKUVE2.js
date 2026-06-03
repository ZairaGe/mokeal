import{a as b}from"./chunk-DWQAEHD7.js";import{c as y}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as C}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{b as I,c as h}from"./chunk-KCR5TJTV.js";import{e as j}from"./chunk-56XJVXYY.js";import{B as k}from"./chunk-FINXBEYE.js";import{Db as E,Jb as T,Lb as v,Qa as a,Yb as t,Zb as r,aa as s,ba as f,db as A,ic as c,jc as D,qb as u,rb as S,wb as d,xb as e,yb as i,zb as o,zc as _}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var O=()=>({null:"",MADRID_CAPITAL:"MADRID_CAPITAL",COMUNIDAD_MADRID:"COMUNIDAD_MADRID",FUERA_COMUNIDAD:"FUERA_COMUNIDAD"}),H=()=>({null:"",HOGAR:"HOGAR",OFICINA:"OFICINA",CHALET:"CHALET",EVENTO:"EVENTO",POST_OBRA:"POST_OBRA",POST_MUDANZA:"POST_MUDANZA"}),F=l=>["/tarifa",l,"edit"];function N(l,p){if(l&1){let n=E();t(0,`
      `),e(1,"div"),t(2,`
        `),e(3,"h2",2)(4,"span",3),t(5,"Tarifa"),i()(),t(6,`

        `),o(7,"hr"),t(8,`

        `),o(9,"jhi-alert-error"),t(10,`

        `),o(11,"jhi-alert"),t(12,`

        `),e(13,"dl",4),t(14,`
          `),e(15,"dt")(16,"span",5),t(17,"ID"),i()(),t(18,`
          `),e(19,"dd"),t(20,`
            `),e(21,"span"),t(22),i(),t(23,`
          `),i(),t(24,`
          `),e(25,"dt")(26,"span",6),t(27,"Zona"),i()(),t(28,`
          `),e(29,"dd"),t(30,`
            `),e(31,"span",7),t(32),i(),t(33,`
          `),i(),t(34,`
          `),e(35,"dt")(36,"span",8),t(37,"Tipo Servicio"),i()(),t(38,`
          `),e(39,"dd"),t(40,`
            `),e(41,"span",7),t(42),i(),t(43,`
          `),i(),t(44,`
          `),e(45,"dt")(46,"span",9),t(47,"Precio First Hora"),i()(),t(48,`
          `),e(49,"dd"),t(50,`
            `),e(51,"span"),t(52),i(),t(53,`
          `),i(),t(54,`
          `),e(55,"dt")(56,"span",10),t(57,"Precio Hora Adicional"),i()(),t(58,`
          `),e(59,"dd"),t(60,`
            `),e(61,"span"),t(62),i(),t(63,`
          `),i(),t(64,`
          `),e(65,"dt")(66,"span",11),t(67,"Minimo Horas"),i()(),t(68,`
          `),e(69,"dd"),t(70,`
            `),e(71,"span"),t(72),i(),t(73,`
          `),i(),t(74,`
          `),e(75,"dt")(76,"span",12),t(77,"Precio Por Km"),i()(),t(78,`
          `),e(79,"dd"),t(80,`
            `),e(81,"span"),t(82),i(),t(83,`
          `),i(),t(84,`
          `),e(85,"dt")(86,"span",13),t(87,"Activa"),i()(),t(88,`
          `),e(89,"dd"),t(90,`
            `),e(91,"span"),t(92),i(),t(93,`
          `),i(),t(94,`
        `),i(),t(95,`

        `),e(96,"button",14),T("click",function(){s(n);let m=v();return f(m.previousState())}),t(97,`
          `),o(98,"fa-icon",15),t(99,"\xA0"),e(100,"span",16),t(101,"Volver"),i(),t(102,`
        `),i(),t(103,`

        `),e(104,"button",17),t(105,`
          `),o(106,"fa-icon",18),t(107,"\xA0"),e(108,"span",19),t(109,"Editar"),i(),t(110,`
        `),i(),t(111,`
      `),i(),t(112,`
    `)}if(l&2){let n=p;a(22),r(n.id),a(9),d("jhiTranslate","mokealApp.ZonaTarifa."+(n.zona??"null")),a(),r(c(11,O)[n.zona??"null"]),a(9),d("jhiTranslate","mokealApp.TipoServicio."+(n.tipoServicio??"null")),a(),r(c(12,H)[n.tipoServicio??"null"]),a(10),r(n.precioFirstHora),a(10),r(n.precioHoraAdicional),a(10),r(n.minimoHoras),a(10),r(n.precioPorKm),a(10),r(n.activa),a(12),d("routerLink",D(13,F,n.id))}}var M=class l{constructor(){this.tarifa=_(null)}previousState(){globalThis.history.back()}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=A({type:l,selectors:[["jhi-tarifa-detail"]],inputs:{tarifa:[1,"tarifa"]},decls:7,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["data-cy","tarifaDetailsHeading"],["jhiTranslate","mokealApp.tarifa.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","mokealApp.tarifa.zona"],[3,"jhiTranslate"],["jhiTranslate","mokealApp.tarifa.tipoServicio"],["jhiTranslate","mokealApp.tarifa.precioFirstHora"],["jhiTranslate","mokealApp.tarifa.precioHoraAdicional"],["jhiTranslate","mokealApp.tarifa.minimoHoras"],["jhiTranslate","mokealApp.tarifa.precioPorKm"],["jhiTranslate","mokealApp.tarifa.activa"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"]],template:function(n,x){if(n&1&&(e(0,"div",0),t(1,`
  `),e(2,"div",1),t(3,`
    `),u(4,N,113,15),i(),t(5,`
`),i(),t(6,`
`)),n&2){let m;a(4),S((m=x.tarifa())?4:-1,m)}},dependencies:[h,I,b,y,C,k,j],encapsulation:2})}};export{M as TarifaDetail};
