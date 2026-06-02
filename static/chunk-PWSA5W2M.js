import{a as z}from"./chunk-TZRSTOQN.js";import{b as G,c as k,e as m,f as R,g as D,h as M,j as s,k as q,m as O,n as V,u as A}from"./chunk-L7QYCLNK.js";import{c as L}from"./chunk-IGHTKR47.js";import{a as X}from"./chunk-VAPES3J5.js";import{c as N}from"./chunk-KCR5TJTV.js";import{a as P}from"./chunk-56XJVXYY.js";import{B as U}from"./chunk-FINXBEYE.js";import{Db as y,E,Jb as _,Lb as b,Qa as c,R as I,W as x,Yb as e,aa as j,ba as F,db as w,l as T,ma as h,qb as f,rb as v,wb as C,xb as t,yb as i,zb as l}from"./chunk-T6YFHVDB.js";import{a as u,b as g}from"./chunk-C6Q5SG76.js";var S=class n{createTrabajadorFormGroup(o){let r=u(u({},this.getFormDefaults()),o??{id:null});return new M({id:new s({value:r.id,disabled:!0},{nonNullable:!0,validators:[m.required]}),nombre:new s(r.nombre,{validators:[m.required,m.maxLength(100)]}),direccion:new s(r.direccion,{validators:[m.maxLength(255)]}),telefono:new s(r.telefono,{validators:[m.required,m.maxLength(20)]}),email:new s(r.email,{validators:[m.maxLength(100)]}),activo:new s(r.activo,{validators:[m.required]}),notas:new s(r.notas,{validators:[m.maxLength(500)]}),servicioses:new s(r.servicioses??[])})}getTrabajador(o){return o.getRawValue()}resetForm(o,r){let a=u(u({},this.getFormDefaults()),r);o.reset(g(u({},a),{id:{value:a.id,disabled:!0}}))}getFormDefaults(){return{id:null,activo:!1,servicioses:[]}}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}};function W(n,o){n&1&&(e(0,`
            `),t(1,"small",26),e(2,"Campo obligatorio"),i(),e(3,`
          `))}function B(n,o){if(n&1&&(e(0,`
          `),f(1,W,4,0)),n&2){let r,a=b();c(),v(!((r=a.editForm.get("nombre"))==null||r.errors==null)&&r.errors.required?1:-1)}}function J(n,o){n&1&&(e(0,`
            `),t(1,"small",26),e(2,"Campo obligatorio"),i(),e(3,`
          `))}function Q(n,o){if(n&1&&(e(0,`
          `),f(1,J,4,0)),n&2){let r,a=b();c(),v(!((r=a.editForm.get("telefono"))==null||r.errors==null)&&r.errors.required?1:-1)}}function Y(n,o){if(n&1){let r=y();e(0,`
    `),t(1,"div",27),e(2,`
      `),t(3,"button",28),_("click",function(){j(r);let d=b();return F(d.previousState())}),e(4,"Cancelar"),i(),e(5,`
      `),t(6,"button",29),_("click",function(){j(r);let d=b();return F(d.save())}),e(7,"Guardar"),i(),e(8,`
    `),i(),e(9,`
  `)}if(n&2){let r=b();c(6),C("disabled",r.editForm.invalid||r.isSaving())}}var H=class n{constructor(){this.isSaving=h(!1);this.trabajador=null;this.serviciosSharedCollection=h([]);this.trabajadorService=x(z);this.trabajadorFormService=x(S);this.servicioService=x(X);this.activatedRoute=x(P);this.isModal=!1;this.editForm=this.trabajadorFormService.createTrabajadorFormGroup();this.compareServicio=(o,r)=>this.servicioService.compareServicio(o,r)}ngOnInit(){this.activatedRoute.data.subscribe(({trabajador:o})=>{this.trabajador=o,o&&setTimeout(()=>{this.updateForm(o)},0),this.loadRelationshipsOptions()})}previousState(){globalThis.history.back()}save(){this.isSaving.set(!0);let o=this.trabajadorFormService.getTrabajador(this.editForm);o.id===null?this.subscribeToSaveResponse(this.trabajadorService.create(o)):this.subscribeToSaveResponse(this.trabajadorService.update(o))}saveFromModal(){return new Promise((o,r)=>{if(this.editForm.invalid){this.editForm.markAllAsTouched(),r("Formulario inv\xE1lido");return}this.save(),o()})}subscribeToSaveResponse(o){o.pipe(E(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving.set(!1)}updateForm(o){this.trabajador=o,this.trabajadorFormService.resetForm(this.editForm,o),this.serviciosSharedCollection.update(r=>this.servicioService.addServicioToCollectionIfMissing(r,...o.servicioses??[]))}loadRelationshipsOptions(){this.servicioService.query().pipe(T(o=>o.body??[])).pipe(T(o=>this.servicioService.addServicioToCollectionIfMissing(o,...this.trabajador?.servicioses??[]))).subscribe(o=>this.serviciosSharedCollection.set(o))}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=w({type:n,selectors:[["jhi-trabajador-update"]],decls:123,vars:4,consts:[["name","editForm","novalidate","",3,"formGroup"],[1,"form-section"],[1,"form-section-title"],[1,"form-row"],[1,"form-field"],["for","field_nombre",1,"field-label","field-required"],["type","text","id","field_nombre","formControlName","nombre","placeholder","Nombre completo o empresa",1,"form-control"],["for","field_telefono",1,"field-label","field-required"],["type","tel","id","field_telefono","formControlName","telefono","placeholder","6XX XXX XXX",1,"form-control"],["for","field_email",1,"field-label"],["type","email","id","field_email","formControlName","email","placeholder","correo@ejemplo.com",1,"form-control"],["for","field_nifCif",1,"field-label"],["type","text","id","field_nifCif","formControlName","nifCif","placeholder","12345678A",1,"form-control"],[1,"form-row","col-1"],["for","field_direccion",1,"field-label"],["type","text","id","field_direccion","formControlName","direccion","placeholder","C/ Ejemplo 45, 3\xBA izquierda",1,"form-control"],["for","field_municipio",1,"field-label"],["type","text","id","field_municipio","formControlName","municipio","placeholder","Madrid",1,"form-control"],["for","field_codigoPostal",1,"field-label"],["type","text","id","field_codigoPostal","formControlName","codigoPostal","placeholder","28001",1,"form-control"],["for","field_notas",1,"field-label"],["id","field_notas","formControlName","notas","rows","3","placeholder","Observaciones, preferencias, informaci\xF3n de acceso...",1,"form-control"],[1,"form-field",2,"flex-direction","row","align-items","center","gap","10px"],[1,"form-check","form-switch"],["type","checkbox","id","field_activo","formControlName","activo","role","switch",1,"form-check-input"],["for","field_activo",1,"form-check-label","field-label"],[1,"text-danger"],[1,"d-flex","gap-2","mt-4"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary",3,"click","disabled"]],template:function(r,a){if(r&1&&(t(0,"form",0),e(1,`
  `),l(2,"jhi-alert-error"),e(3,`

  `),e(4,`
  `),t(5,"div",1),e(6,`
    `),t(7,"div",2),e(8,"Datos de contacto"),i(),e(9,`

    `),t(10,"div",3),e(11,`
      `),t(12,"div",4),e(13,`
        `),t(14,"label",5),e(15,"Nombre"),i(),e(16,`
        `),l(17,"input",6),e(18,`
        `),f(19,B,2,1),i(),e(20,`
      `),t(21,"div",4),e(22,`
        `),t(23,"label",7),e(24,"Tel\xE9fono"),i(),e(25,`
        `),l(26,"input",8),e(27,`
        `),f(28,Q,2,1),i(),e(29,`
    `),i(),e(30,`

    `),t(31,"div",3),e(32,`
      `),t(33,"div",4),e(34,`
        `),t(35,"label",9),e(36,"Email"),i(),e(37,`
        `),l(38,"input",10),e(39,`
      `),i(),e(40,`
      `),t(41,"div",4),e(42,`
        `),t(43,"label",11),e(44,"NIF / CIF"),i(),e(45,`
        `),l(46,"input",12),e(47,`
      `),i(),e(48,`
    `),i(),e(49,`
  `),i(),e(50,`

  `),e(51,`
  `),t(52,"div",1),e(53,`
    `),t(54,"div",2),e(55,"Direcci\xF3n"),i(),e(56,`

    `),t(57,"div",13),e(58,`
      `),t(59,"div",4),e(60,`
        `),t(61,"label",14),e(62,"Calle y n\xFAmero"),i(),e(63,`
        `),l(64,"input",15),e(65,`
      `),i(),e(66,`
    `),i(),e(67,`

    `),t(68,"div",3),e(69,`
      `),t(70,"div",4),e(71,`
        `),t(72,"label",16),e(73,"Municipio"),i(),e(74,`
        `),l(75,"input",17),e(76,`
      `),i(),e(77,`
      `),t(78,"div",4),e(79,`
        `),t(80,"label",18),e(81,"C\xF3digo postal"),i(),e(82,`
        `),l(83,"input",19),e(84,`
      `),i(),e(85,`
    `),i(),e(86,`
  `),i(),e(87,`

  `),e(88,`
  `),t(89,"div",1),e(90,`
    `),t(91,"div",2),e(92,"Otros"),i(),e(93,`

    `),t(94,"div",13),e(95,`
      `),t(96,"div",4),e(97,`
        `),t(98,"label",20),e(99,"Notas internas"),i(),e(100,`
        `),l(101,"textarea",21),e(102,`
      `),i(),e(103,`
    `),i(),e(104,`

    `),t(105,"div",3),e(106,`
      `),t(107,"div",22),e(108,`
        `),t(109,"div",23),e(110,`
          `),l(111,"input",24),e(112,`
          `),t(113,"label",25),e(114,"Cliente activo"),i(),e(115,`
        `),i(),e(116,`
      `),i(),e(117,`
    `),i(),e(118,`
  `),i(),e(119,`

  `),e(120,`
  `),f(121,Y,10,1),i(),e(122,`
`)),r&2){let d,p;C("formGroup",a.editForm),c(19),v((d=a.editForm.get("nombre"))!=null&&d.invalid&&((d=a.editForm.get("nombre"))!=null&&d.dirty||(d=a.editForm.get("nombre"))!=null&&d.touched)?19:-1),c(9),v((p=a.editForm.get("telefono"))!=null&&p.invalid&&((p=a.editForm.get("telefono"))!=null&&p.dirty||(p=a.editForm.get("telefono"))!=null&&p.touched)?28:-1),c(93),v(a.isModal?-1:121)}},dependencies:[U,N,L,A,q,k,G,R,D,V,O],encapsulation:2})}};export{H as a};
