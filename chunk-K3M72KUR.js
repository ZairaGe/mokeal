import{c as re}from"./chunk-SVY7IYOO.js";import"./chunk-JR25LAWI.js";import{a as fe}from"./chunk-2HJWG76N.js";import{c as K,e as p,f as J,g as Q,h as X,j as f,k as Y,l as Z,m as ee,n as te,o as ie,p as ne,r as ae,u as oe}from"./chunk-L7QYCLNK.js";import{c as pe}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as me}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as ue}from"./chunk-BVUWRSZD.js";import{a as se}from"./chunk-VAPES3J5.js";import"./chunk-SS72KG6D.js";import"./chunk-PITESBFZ.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as z,c as $}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as le}from"./chunk-56XJVXYY.js";import{A as ce,B as de}from"./chunk-FINXBEYE.js";import{Db as H,E as P,Jb as h,Lb as x,Qa as l,R as W,Vb as G,W as S,Yb as e,Zb as E,aa as R,ba as j,db as L,ic as v,l as b,ma as g,mc as q,nc as O,qb as d,rb as m,sb as y,ub as I,vb as T,wb as u,xb as a,yb as o,zb as s}from"./chunk-T6YFHVDB.js";import{a as C,b as B}from"./chunk-C6Q5SG76.js";var M=(c=>(c.BORRADOR="BORRADOR",c.EMITIDA="EMITIDA",c.PAGADA="PAGADA",c.CANCELADA="CANCELADA",c))(M||{});var A=class t{createFacturaFormGroup(n){let i=C(C({},this.getFormDefaults()),n??{id:null});return new X({id:new f({value:i.id,disabled:!0},{nonNullable:!0,validators:[p.required]}),numero:new f(i.numero,{validators:[p.required,p.maxLength(30)]}),fechaEmision:new f(i.fechaEmision,{validators:[p.required]}),fechaVencimiento:new f(i.fechaVencimiento),baseImponible:new f(i.baseImponible,{validators:[p.required]}),iva:new f(i.iva,{validators:[p.required]}),total:new f(i.total,{validators:[p.required]}),estado:new f(i.estado,{validators:[p.required]}),notas:new f(i.notas,{validators:[p.maxLength(500)]}),servicio:new f(i.servicio,{validators:[p.required]}),cliente:new f(i.cliente,{validators:[p.required]})})}getFactura(n){return n.getRawValue()}resetForm(n,i){let r=C(C({},this.getFormDefaults()),i);n.reset(B(C({},r),{id:{value:r.id,disabled:!0}}))}getFormDefaults(){return{id:null}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}};var V=()=>["servicio"],N=()=>["cliente"],_e=()=>({max:"30"}),Fe=()=>({max:"500"});function Ce(t,n){t&1&&(e(0,`
          `),a(1,"div",6),e(2,`
            `),a(3,"label",37),e(4,"ID"),o(),e(5,`
            `),s(6,"input",38),e(7,`
          `),o(),e(8,`
        `)),t&2&&(l(6),u("readonly",!0))}function Se(t,n){t&1&&(e(0,`
                `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
              `))}function be(t,n){t&1&&(e(0,`
                `),a(1,"small",40),e(2,"Este campo no puede superar m\xE1s de 30 caracteres."),o(),e(3,`
              `)),t&2&&(l(),u("translateValues",v(1,_e)))}function he(t,n){if(t&1&&(e(0,`
            `),a(1,"div"),e(2,`
              `),d(3,Se,4,0),d(4,be,4,2),o(),e(5,`
          `)),t&2){let i,r,c=x();l(3),m(!((i=c.editForm.get("numero"))==null||i.errors==null)&&i.errors.required?3:-1),l(),m(!((r=c.editForm.get("numero"))==null||r.errors==null)&&r.errors.maxlength?4:-1)}}function Ee(t,n){t&1&&(e(0,`
                `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
              `))}function ge(t,n){if(t&1&&(e(0,`
            `),a(1,"div"),e(2,`
              `),d(3,Ee,4,0),o(),e(4,`
          `)),t&2){let i,r=x();l(3),m(!((i=r.editForm.get("fechaEmision"))==null||i.errors==null)&&i.errors.required?3:-1)}}function ye(t,n){t&1&&(e(0,`
                `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
              `))}function Ie(t,n){if(t&1&&(e(0,`
            `),a(1,"div"),e(2,`
              `),d(3,ye,4,0),a(4,"small",41),e(5,"Este campo debe ser un n\xFAmero."),o(),e(6,`
            `),o(),e(7,`
          `)),t&2){let i,r,c=x();l(3),m(!((i=c.editForm.get("baseImponible"))==null||i.errors==null)&&i.errors.required?3:-1),l(),u("hidden",!(!((r=c.editForm.get("baseImponible"))==null||r.errors==null)&&r.errors.number))}}function Te(t,n){t&1&&(e(0,`
                `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
              `))}function Ae(t,n){if(t&1&&(e(0,`
            `),a(1,"div"),e(2,`
              `),d(3,Te,4,0),a(4,"small",41),e(5,"Este campo debe ser un n\xFAmero."),o(),e(6,`
            `),o(),e(7,`
          `)),t&2){let i,r,c=x();l(3),m(!((i=c.editForm.get("iva"))==null||i.errors==null)&&i.errors.required?3:-1),l(),u("hidden",!(!((r=c.editForm.get("iva"))==null||r.errors==null)&&r.errors.number))}}function Ve(t,n){t&1&&(e(0,`
                `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
              `))}function Ne(t,n){if(t&1&&(e(0,`
            `),a(1,"div"),e(2,`
              `),d(3,Ve,4,0),a(4,"small",41),e(5,"Este campo debe ser un n\xFAmero."),o(),e(6,`
            `),o(),e(7,`
          `)),t&2){let i,r,c=x();l(3),m(!((i=c.editForm.get("total"))==null||i.errors==null)&&i.errors.required?3:-1),l(),u("hidden",!(!((r=c.editForm.get("total"))==null||r.errors==null)&&r.errors.number))}}function ke(t,n){if(t&1&&(e(0,`
              `),a(1,"option",42),e(2),q(3,"translate"),o(),e(4,`
            `)),t&2){let i=n.$implicit;l(),u("value",i),l(),E(O(3,2,"mokealApp.EstadoFactura."+i))}}function Ue(t,n){t&1&&(e(0,`
                `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
              `))}function De(t,n){if(t&1&&(e(0,`
            `),a(1,"div"),e(2,`
              `),d(3,Ue,4,0),o(),e(4,`
          `)),t&2){let i,r=x();l(3),m(!((i=r.editForm.get("estado"))==null||i.errors==null)&&i.errors.required?3:-1)}}function we(t,n){t&1&&(e(0,`
                `),a(1,"small",40),e(2,"Este campo no puede superar m\xE1s de 500 caracteres."),o(),e(3,`
              `)),t&2&&(l(),u("translateValues",v(1,Fe)))}function Re(t,n){if(t&1&&(e(0,`
            `),a(1,"div"),e(2,`
              `),d(3,we,4,2),o(),e(4,`
          `)),t&2){let i,r=x();l(3),m(!((i=r.editForm.get("notas"))==null||i.errors==null)&&i.errors.maxlength?3:-1)}}function je(t,n){t&1&&(e(0,`
              `),s(1,"option",43),e(2,`
            `)),t&2&&(l(),u("ngValue",null))}function Ge(t,n){if(t&1&&(e(0,`
              `),a(1,"option",24),e(2),o(),e(3,`
            `)),t&2){let i=n.$implicit;l(),u("ngValue",i),l(),E(i.id)}}function qe(t,n){t&1&&(e(0,`
              `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
            `))}function Oe(t,n){if(t&1&&(e(0,`
          `),a(1,"div"),e(2,`
            `),d(3,qe,4,0),o(),e(4,`
        `)),t&2){let i,r=x();l(3),m(!((i=r.editForm.get(v(1,V)))==null||i.errors==null)&&i.errors.required?3:-1)}}function Me(t,n){t&1&&(e(0,`
              `),s(1,"option",43),e(2,`
            `)),t&2&&(l(),u("ngValue",null))}function Be(t,n){if(t&1&&(e(0,`
              `),a(1,"option",24),e(2),o(),e(3,`
            `)),t&2){let i=n.$implicit;l(),u("ngValue",i),l(),E(i.id)}}function Pe(t,n){t&1&&(e(0,`
              `),a(1,"small",39),e(2,"Este campo es obligatorio."),o(),e(3,`
            `))}function We(t,n){if(t&1&&(e(0,`
          `),a(1,"div"),e(2,`
            `),d(3,Pe,4,0),o(),e(4,`
        `)),t&2){let i,r=x();l(3),m(!((i=r.editForm.get(v(1,N)))==null||i.errors==null)&&i.errors.required?3:-1)}}var ve=class t{constructor(){this.isSaving=g(!1);this.factura=null;this.estadoFacturaValues=Object.keys(M);this.serviciosSharedCollection=g([]);this.clientesSharedCollection=g([]);this.facturaService=S(ue);this.facturaFormService=S(A);this.servicioService=S(se);this.clienteService=S(fe);this.activatedRoute=S(le);this.editForm=this.facturaFormService.createFacturaFormGroup();this.compareServicio=(n,i)=>this.servicioService.compareServicio(n,i);this.compareCliente=(n,i)=>this.clienteService.compareCliente(n,i)}ngOnInit(){this.activatedRoute.data.subscribe(({factura:n})=>{this.factura=n,n&&this.updateForm(n),this.loadRelationshipsOptions()})}previousState(){globalThis.history.back()}save(){this.isSaving.set(!0);let n=this.facturaFormService.getFactura(this.editForm);n.id===null?this.subscribeToSaveResponse(this.facturaService.create(n)):this.subscribeToSaveResponse(this.facturaService.update(n))}subscribeToSaveResponse(n){n.pipe(P(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving.set(!1)}updateForm(n){this.factura=n,this.facturaFormService.resetForm(this.editForm,n),this.serviciosSharedCollection.update(i=>this.servicioService.addServicioToCollectionIfMissing(i,n.servicio)),this.clientesSharedCollection.update(i=>this.clienteService.addClienteToCollectionIfMissing(i,n.cliente))}loadRelationshipsOptions(){this.servicioService.query().pipe(b(n=>n.body??[])).pipe(b(n=>this.servicioService.addServicioToCollectionIfMissing(n,this.factura?.servicio))).subscribe(n=>this.serviciosSharedCollection.set(n)),this.clienteService.query().pipe(b(n=>n.body??[])).pipe(b(n=>this.clienteService.addClienteToCollectionIfMissing(n,this.factura?.cliente))).subscribe(n=>this.clientesSharedCollection.set(n))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=L({type:t,selectors:[["jhi-factura-update"]],decls:162,vars:26,consts:[["fechaEmisionDp","ngbDatepicker"],["fechaVencimientoDp","ngbDatepicker"],[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","novalidate","",3,"ngSubmit","formGroup"],["id","jhi-factura-heading","data-cy","FacturaCreateUpdateHeading","jhiTranslate","mokealApp.factura.home.createOrEditLabel"],[1,"mb-3"],["for","field_numero","jhiTranslate","mokealApp.factura.numero",1,"form-label"],["type","text","name","numero","id","field_numero","data-cy","numero","formControlName","numero",1,"form-control"],["for","field_fechaEmision","jhiTranslate","mokealApp.factura.fechaEmision",1,"form-label"],[1,"input-group"],["id","field_fechaEmision","data-cy","fechaEmision","type","text","name","fechaEmision","ngbDatepicker","","formControlName","fechaEmision",1,"form-control"],["type","button",1,"btn","btn-secondary",3,"click"],["icon","calendar-alt"],["for","field_fechaVencimiento","jhiTranslate","mokealApp.factura.fechaVencimiento",1,"form-label"],["id","field_fechaVencimiento","data-cy","fechaVencimiento","type","text","name","fechaVencimiento","ngbDatepicker","","formControlName","fechaVencimiento",1,"form-control"],["for","field_baseImponible","jhiTranslate","mokealApp.factura.baseImponible",1,"form-label"],["type","number","name","baseImponible","id","field_baseImponible","data-cy","baseImponible","formControlName","baseImponible",1,"form-control"],["for","field_iva","jhiTranslate","mokealApp.factura.iva",1,"form-label"],["type","number","name","iva","id","field_iva","data-cy","iva","formControlName","iva",1,"form-control"],["for","field_total","jhiTranslate","mokealApp.factura.total",1,"form-label"],["type","number","name","total","id","field_total","data-cy","total","formControlName","total",1,"form-control"],["for","field_estado","jhiTranslate","mokealApp.factura.estado",1,"form-label"],["name","estado","formControlName","estado","id","field_estado","data-cy","estado",1,"form-control"],[3,"ngValue"],["for","field_notas","jhiTranslate","mokealApp.factura.notas",1,"form-label"],["type","text","name","notas","id","field_notas","data-cy","notas","formControlName","notas",1,"form-control"],["for","field_servicio","jhiTranslate","mokealApp.factura.servicio",1,"form-label"],["id","field_servicio","data-cy","servicio","name","servicio","formControlName","servicio",1,"form-control",3,"compareWith"],["for","field_cliente","jhiTranslate","mokealApp.factura.cliente",1,"form-label"],["id","field_cliente","data-cy","cliente","name","cliente","formControlName","cliente",1,"form-control",3,"compareWith"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["for","field_id","jhiTranslate","global.field.id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"],["jhiTranslate","entity.validation.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","entity.validation.number",1,"form-text","text-danger",3,"hidden"],[3,"value"],["selected","",3,"ngValue"]],template:function(i,r){if(i&1){let c=H();a(0,"div",2),e(1,`
  `),a(2,"div",3),e(3,`
    `),a(4,"form",4),h("ngSubmit",function(){return r.save()}),e(5,`
      `),a(6,"h2",5),e(7,`
        Crear o editar Factura
      `),o(),e(8,`

      `),a(9,"div"),e(10,`
        `),s(11,"jhi-alert-error"),e(12,`

        `),d(13,Ce,9,1),e(14,`
        `),a(15,"div",6),e(16,`
          `),a(17,"label",7),e(18,"Numero"),o(),e(19,`
          `),s(20,"input",8),e(21,`
          `),d(22,he,6,2),o(),e(23,`

        `),e(24,`
        `),a(25,"div",6),e(26,`
          `),a(27,"label",9),e(28,"Fecha Emision"),o(),e(29,`
          `),a(30,"div",10),e(31,`
            `),s(32,"input",11,0),e(34,`
            `),a(35,"button",12),h("click",function(){R(c);let F=G(33);return j(F.toggle())}),s(36,"fa-icon",13),o(),e(37,`
          `),o(),e(38,`
          `),d(39,ge,5,1),o(),e(40,`

        `),a(41,"div",6),e(42,`
          `),a(43,"label",14),e(44,"Fecha Vencimiento"),o(),e(45,`
          `),a(46,"div",10),e(47,`
            `),s(48,"input",15,1),e(50,`
            `),a(51,"button",12),h("click",function(){R(c);let F=G(49);return j(F.toggle())}),s(52,"fa-icon",13),o(),e(53,`
          `),o(),e(54,`
        `),o(),e(55,`

        `),e(56,`
        `),a(57,"div",6),e(58,`
          `),a(59,"label",16),e(60,"Base Imponible"),o(),e(61,`
          `),s(62,"input",17),e(63,`
          `),d(64,Ie,8,2),o(),e(65,`

        `),e(66,`
        `),a(67,"div",6),e(68,`
          `),a(69,"label",18),e(70,"Iva"),o(),e(71,`
          `),s(72,"input",19),e(73,`
          `),d(74,Ae,8,2),o(),e(75,`

        `),e(76,`
        `),a(77,"div",6),e(78,`
          `),a(79,"label",20),e(80,"Total"),o(),e(81,`
          `),s(82,"input",21),e(83,`
          `),d(84,Ne,8,2),o(),e(85,`

        `),e(86,`
        `),a(87,"div",6),e(88,`
          `),a(89,"label",22),e(90,"Estado"),o(),e(91,`
          `),a(92,"select",23),e(93,`
            `),a(94,"option",24),e(95),q(96,"translate"),o(),e(97,`
            `),I(98,ke,5,4,null,null,y),o(),e(100,`
          `),d(101,De,5,1),o(),e(102,`

        `),e(103,`
        `),a(104,"div",6),e(105,`
          `),a(106,"label",25),e(107,"Notas"),o(),e(108,`
          `),s(109,"input",26),e(110,`
          `),d(111,Re,5,1),o(),e(112,`

        `),a(113,"div",6),e(114,`
          `),a(115,"label",27),e(116,"Servicio"),o(),e(117,`
          `),a(118,"select",28),e(119,`
            `),d(120,je,3,1),I(121,Ge,4,2,null,null,y),o(),e(123,`
        `),o(),e(124,`
        `),d(125,Oe,5,2),a(126,"div",6),e(127,`
          `),a(128,"label",29),e(129,"Cliente"),o(),e(130,`
          `),a(131,"select",30),e(132,`
            `),d(133,Me,3,1),I(134,Be,4,2,null,null,y),o(),e(136,`
        `),o(),e(137,`
        `),d(138,We,5,2),o(),e(139,`

      `),a(140,"div"),e(141,`
        `),a(142,"button",31),h("click",function(){return r.previousState()}),e(143,`
          `),s(144,"fa-icon",32),e(145,"\xA0"),a(146,"span",33),e(147,"Cancelar"),o(),e(148,`
        `),o(),e(149,`

        `),a(150,"button",34),e(151,`
          `),s(152,"fa-icon",35),e(153,"\xA0"),a(154,"span",36),e(155,"Guardar"),o(),e(156,`
        `),o(),e(157,`
      `),o(),e(158,`
    `),o(),e(159,`
  `),o(),e(160,`
`),o(),e(161,`
`)}if(i&2){l(4),u("formGroup",r.editForm),l(9),m(r.editForm.controls.id.value!==null?13:-1);let c=r.editForm.get("numero");l(9),m(c.invalid&&(c.dirty||c.touched)?22:-1);let _=r.editForm.get("fechaEmision");l(17),m(_.invalid&&(_.dirty||_.touched)?39:-1);let F=r.editForm.get("baseImponible");l(25),m(F.invalid&&(F.dirty||F.touched)?64:-1);let k=r.editForm.get("iva");l(10),m(k.invalid&&(k.dirty||k.touched)?74:-1);let U=r.editForm.get("total");l(10),m(U.invalid&&(U.dirty||U.touched)?84:-1);let D=r.editForm.get("estado");l(10),u("ngValue",null),l(),E(O(96,18,"mokealApp.EstadoFactura.null")),l(3),T(r.estadoFacturaValues),l(3),m(D.invalid&&(D.dirty||D.touched)?101:-1);let w=r.editForm.get("notas");l(10),m(w.invalid&&(w.dirty||w.touched)?111:-1),l(7),u("compareWith",r.compareServicio),l(2),m(r.editForm.get("servicio").value?-1:120),l(),T(r.serviciosSharedCollection()),l(4),m(r.editForm.get(v(20,V)).invalid&&(r.editForm.get(v(21,V)).dirty||r.editForm.get(v(22,V)).touched)?125:-1),l(6),u("compareWith",r.compareCliente),l(2),m(r.editForm.get("cliente").value?-1:133),l(),T(r.clientesSharedCollection()),l(4),m(r.editForm.get(v(23,N)).invalid&&(r.editForm.get(v(24,N)).dirty||r.editForm.get(v(25,N)).touched)?138:-1),l(12),u("disabled",r.editForm.invalid||r.isSaving())}},dependencies:[me,de,$,z,pe,oe,Y,ne,ae,K,Z,ie,J,Q,te,ee,re,ce],encapsulation:2})}};export{ve as FacturaUpdate};
