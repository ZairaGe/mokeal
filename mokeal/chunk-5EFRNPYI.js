import{a as ae,b as ne}from"./chunk-AXRUZJ2M.js";import{b as R,c as q,e as u,f as V,g as D,h as K,j as f,k as O,l as B,m as M,n as Z,o as W,p as $,r as L,u as J}from"./chunk-L7QYCLNK.js";import{c as ie}from"./chunk-IGHTKR47.js";import"./chunk-VIDFJCIH.js";import{a as ee}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as te}from"./chunk-M6PEVJ22.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as P,c as z}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as Q}from"./chunk-56XJVXYY.js";import{A as X,B as Y}from"./chunk-FINXBEYE.js";import{E as w,Jb as k,Lb as v,Qa as l,R as j,W as F,Yb as e,Zb as T,db as U,ma as G,mc as _,nc as S,qb as d,rb as c,sb as H,ub as A,vb as I,wb as p,xb as t,yb as i,zb as s}from"./chunk-T6YFHVDB.js";import{a as x,b as N}from"./chunk-C6Q5SG76.js";var b=class n{createTarifaFormGroup(r){let a=x(x({},this.getFormDefaults()),r??{id:null});return new K({id:new f({value:a.id,disabled:!0},{nonNullable:!0,validators:[u.required]}),zona:new f(a.zona,{validators:[u.required]}),tipoServicio:new f(a.tipoServicio,{validators:[u.required]}),precioFirstHora:new f(a.precioFirstHora,{validators:[u.required]}),precioHoraAdicional:new f(a.precioHoraAdicional,{validators:[u.required]}),minimoHoras:new f(a.minimoHoras,{validators:[u.required]}),precioPorKm:new f(a.precioPorKm),activa:new f(a.activa,{validators:[u.required]})})}getTarifa(r){return r.getRawValue()}resetForm(r,a){let o=x(x({},this.getFormDefaults()),a);r.reset(N(x({},o),{id:{value:o.id,disabled:!0}}))}getFormDefaults(){return{id:null,activa:!1}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})}};function le(n,r){n&1&&(e(0,`
          `),t(1,"div",4),e(2,`
            `),t(3,"label",26),e(4,"ID"),i(),e(5,`
            `),s(6,"input",27),e(7,`
          `),i(),e(8,`
        `)),n&2&&(l(6),p("readonly",!0))}function me(n,r){if(n&1&&(e(0,`
              `),t(1,"option",28),e(2),_(3,"translate"),i(),e(4,`
            `)),n&2){let a=r.$implicit;l(),p("value",a),l(),T(S(3,2,"mokealApp.ZonaTarifa."+a))}}function de(n,r){n&1&&(e(0,`
                `),t(1,"small",29),e(2,"Este campo es obligatorio."),i(),e(3,`
              `))}function ce(n,r){if(n&1&&(e(0,`
            `),t(1,"div"),e(2,`
              `),d(3,de,4,0),i(),e(4,`
          `)),n&2){let a,o=v();l(3),c(!((a=o.editForm.get("zona"))==null||a.errors==null)&&a.errors.required?3:-1)}}function pe(n,r){if(n&1&&(e(0,`
              `),t(1,"option",28),e(2),_(3,"translate"),i(),e(4,`
            `)),n&2){let a=r.$implicit;l(),p("value",a),l(),T(S(3,2,"mokealApp.TipoServicio."+a))}}function se(n,r){n&1&&(e(0,`
                `),t(1,"small",29),e(2,"Este campo es obligatorio."),i(),e(3,`
              `))}function fe(n,r){if(n&1&&(e(0,`
            `),t(1,"div"),e(2,`
              `),d(3,se,4,0),i(),e(4,`
          `)),n&2){let a,o=v();l(3),c(!((a=o.editForm.get("tipoServicio"))==null||a.errors==null)&&a.errors.required?3:-1)}}function ue(n,r){n&1&&(e(0,`
                `),t(1,"small",29),e(2,"Este campo es obligatorio."),i(),e(3,`
              `))}function ve(n,r){if(n&1&&(e(0,`
            `),t(1,"div"),e(2,`
              `),d(3,ue,4,0),t(4,"small",30),e(5,"Este campo debe ser un n\xFAmero."),i(),e(6,`
            `),i(),e(7,`
          `)),n&2){let a,o,m=v();l(3),c(!((a=m.editForm.get("precioFirstHora"))==null||a.errors==null)&&a.errors.required?3:-1),l(),p("hidden",!(!((o=m.editForm.get("precioFirstHora"))==null||o.errors==null)&&o.errors.number))}}function xe(n,r){n&1&&(e(0,`
                `),t(1,"small",29),e(2,"Este campo es obligatorio."),i(),e(3,`
              `))}function Te(n,r){if(n&1&&(e(0,`
            `),t(1,"div"),e(2,`
              `),d(3,xe,4,0),t(4,"small",30),e(5,"Este campo debe ser un n\xFAmero."),i(),e(6,`
            `),i(),e(7,`
          `)),n&2){let a,o,m=v();l(3),c(!((a=m.editForm.get("precioHoraAdicional"))==null||a.errors==null)&&a.errors.required?3:-1),l(),p("hidden",!(!((o=m.editForm.get("precioHoraAdicional"))==null||o.errors==null)&&o.errors.number))}}function _e(n,r){n&1&&(e(0,`
                `),t(1,"small",29),e(2,"Este campo es obligatorio."),i(),e(3,`
              `))}function Se(n,r){if(n&1&&(e(0,`
            `),t(1,"div"),e(2,`
              `),d(3,_e,4,0),t(4,"small",30),e(5,"Este campo debe ser un n\xFAmero."),i(),e(6,`
            `),i(),e(7,`
          `)),n&2){let a,o,m=v();l(3),c(!((a=m.editForm.get("minimoHoras"))==null||a.errors==null)&&a.errors.required?3:-1),l(),p("hidden",!(!((o=m.editForm.get("minimoHoras"))==null||o.errors==null)&&o.errors.number))}}function Fe(n,r){n&1&&(e(0,`
                `),t(1,"small",29),e(2,"Este campo es obligatorio."),i(),e(3,`
              `))}function be(n,r){if(n&1&&(e(0,`
            `),t(1,"div"),e(2,`
              `),d(3,Fe,4,0),i(),e(4,`
          `)),n&2){let a,o=v();l(3),c(!((a=o.editForm.get("activa"))==null||a.errors==null)&&a.errors.required?3:-1)}}var re=class n{constructor(){this.isSaving=G(!1);this.tarifa=null;this.zonaTarifaValues=Object.keys(ne);this.tipoServicioValues=Object.keys(ae);this.tarifaService=F(te);this.tarifaFormService=F(b);this.activatedRoute=F(Q);this.editForm=this.tarifaFormService.createTarifaFormGroup()}ngOnInit(){this.activatedRoute.data.subscribe(({tarifa:r})=>{this.tarifa=r,r&&this.updateForm(r)})}previousState(){globalThis.history.back()}save(){this.isSaving.set(!0);let r=this.tarifaFormService.getTarifa(this.editForm);r.id===null?this.subscribeToSaveResponse(this.tarifaService.create(r)):this.subscribeToSaveResponse(this.tarifaService.update(r))}subscribeToSaveResponse(r){r.pipe(w(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving.set(!1)}updateForm(r){this.tarifa=r,this.tarifaFormService.resetForm(this.editForm,r)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=U({type:n,selectors:[["jhi-tarifa-update"]],decls:119,vars:17,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","novalidate","",3,"ngSubmit","formGroup"],["id","jhi-tarifa-heading","data-cy","TarifaCreateUpdateHeading","jhiTranslate","mokealApp.tarifa.home.createOrEditLabel"],[1,"mb-3"],["for","field_zona","jhiTranslate","mokealApp.tarifa.zona",1,"form-label"],["name","zona","formControlName","zona","id","field_zona","data-cy","zona",1,"form-control"],[3,"ngValue"],["for","field_tipoServicio","jhiTranslate","mokealApp.tarifa.tipoServicio",1,"form-label"],["name","tipoServicio","formControlName","tipoServicio","id","field_tipoServicio","data-cy","tipoServicio",1,"form-control"],["for","field_precioFirstHora","jhiTranslate","mokealApp.tarifa.precioFirstHora",1,"form-label"],["type","number","name","precioFirstHora","id","field_precioFirstHora","data-cy","precioFirstHora","formControlName","precioFirstHora",1,"form-control"],["for","field_precioHoraAdicional","jhiTranslate","mokealApp.tarifa.precioHoraAdicional",1,"form-label"],["type","number","name","precioHoraAdicional","id","field_precioHoraAdicional","data-cy","precioHoraAdicional","formControlName","precioHoraAdicional",1,"form-control"],["for","field_minimoHoras","jhiTranslate","mokealApp.tarifa.minimoHoras",1,"form-label"],["type","number","name","minimoHoras","id","field_minimoHoras","data-cy","minimoHoras","formControlName","minimoHoras",1,"form-control"],["for","field_precioPorKm","jhiTranslate","mokealApp.tarifa.precioPorKm",1,"form-label"],["type","number","name","precioPorKm","id","field_precioPorKm","data-cy","precioPorKm","formControlName","precioPorKm",1,"form-control"],["for","field_activa","jhiTranslate","mokealApp.tarifa.activa",1,"form-label"],["type","checkbox","name","activa","id","field_activa","data-cy","activa","formControlName","activa",1,"form-check"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["for","field_id","jhiTranslate","global.field.id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[3,"value"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"],["jhiTranslate","entity.validation.number",1,"form-text","text-danger",3,"hidden"]],template:function(a,o){if(a&1&&(t(0,"div",0),e(1,`
  `),t(2,"div",1),e(3,`
    `),t(4,"form",2),k("ngSubmit",function(){return o.save()}),e(5,`
      `),t(6,"h2",3),e(7,`
        Crear o editar Tarifa
      `),i(),e(8,`

      `),t(9,"div"),e(10,`
        `),s(11,"jhi-alert-error"),e(12,`

        `),d(13,le,9,1),e(14,`
        `),t(15,"div",4),e(16,`
          `),t(17,"label",5),e(18,"Zona"),i(),e(19,`
          `),t(20,"select",6),e(21,`
            `),t(22,"option",7),e(23),_(24,"translate"),i(),e(25,`
            `),A(26,me,5,4,null,null,H),i(),e(28,`
          `),d(29,ce,5,1),i(),e(30,`

        `),e(31,`
        `),t(32,"div",4),e(33,`
          `),t(34,"label",8),e(35,"Tipo Servicio"),i(),e(36,`
          `),t(37,"select",9),e(38,`
            `),t(39,"option",7),e(40),_(41,"translate"),i(),e(42,`
            `),A(43,pe,5,4,null,null,H),i(),e(45,`
          `),d(46,fe,5,1),i(),e(47,`

        `),e(48,`
        `),t(49,"div",4),e(50,`
          `),t(51,"label",10),e(52,"Precio First Hora"),i(),e(53,`
          `),s(54,"input",11),e(55,`
          `),d(56,ve,8,2),i(),e(57,`

        `),e(58,`
        `),t(59,"div",4),e(60,`
          `),t(61,"label",12),e(62,"Precio Hora Adicional"),i(),e(63,`
          `),s(64,"input",13),e(65,`
          `),d(66,Te,8,2),i(),e(67,`

        `),e(68,`
        `),t(69,"div",4),e(70,`
          `),t(71,"label",14),e(72,"Minimo Horas"),i(),e(73,`
          `),s(74,"input",15),e(75,`
          `),d(76,Se,8,2),i(),e(77,`

        `),t(78,"div",4),e(79,`
          `),t(80,"label",16),e(81,"Precio Por Km"),i(),e(82,`
          `),s(83,"input",17),e(84,`
        `),i(),e(85,`

        `),e(86,`
        `),t(87,"div",4),e(88,`
          `),t(89,"label",18),e(90,"Activa"),i(),e(91,`
          `),s(92,"input",19),e(93,`
          `),d(94,be,5,1),i(),e(95,`
      `),i(),e(96,`

      `),t(97,"div"),e(98,`
        `),t(99,"button",20),k("click",function(){return o.previousState()}),e(100,`
          `),s(101,"fa-icon",21),e(102,"\xA0"),t(103,"span",22),e(104,"Cancelar"),i(),e(105,`
        `),i(),e(106,`

        `),t(107,"button",23),e(108,`
          `),s(109,"fa-icon",24),e(110,"\xA0"),t(111,"span",25),e(112,"Guardar"),i(),e(113,`
        `),i(),e(114,`
      `),i(),e(115,`
    `),i(),e(116,`
  `),i(),e(117,`
`),i(),e(118,`
`)),a&2){l(4),p("formGroup",o.editForm),l(9),c(o.editForm.controls.id.value!==null?13:-1);let m=o.editForm.get("zona");l(9),p("ngValue",null),l(),T(S(24,13,"mokealApp.ZonaTarifa.null")),l(3),I(o.zonaTarifaValues),l(3),c(m.invalid&&(m.dirty||m.touched)?29:-1);let C=o.editForm.get("tipoServicio");l(10),p("ngValue",null),l(),T(S(41,15,"mokealApp.TipoServicio.null")),l(3),I(o.tipoServicioValues),l(3),c(C.invalid&&(C.dirty||C.touched)?46:-1);let y=o.editForm.get("precioFirstHora");l(10),c(y.invalid&&(y.dirty||y.touched)?56:-1);let E=o.editForm.get("precioHoraAdicional");l(10),c(E.invalid&&(E.dirty||E.touched)?66:-1);let h=o.editForm.get("minimoHoras");l(10),c(h.invalid&&(h.dirty||h.touched)?76:-1);let g=o.editForm.get("activa");l(18),c(g.invalid&&(g.dirty||g.touched)?94:-1),l(13),p("disabled",o.editForm.invalid||o.isSaving())}},dependencies:[ee,Y,z,P,ie,J,O,$,L,q,B,R,W,V,D,Z,M,X],encapsulation:2})}};export{re as TarifaUpdate};
