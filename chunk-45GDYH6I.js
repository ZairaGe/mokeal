import{a as X}from"./chunk-2HJWG76N.js";import{b as T,c as k,e as a,f as D,g as P,h as R,j as d,k as V,m as q,n as M,u as A}from"./chunk-L7QYCLNK.js";import{c as L}from"./chunk-BRYFIDPH.js";import{c as G}from"./chunk-KCR5TJTV.js";import{a as O}from"./chunk-56XJVXYY.js";import{B as U}from"./chunk-FINXBEYE.js";import{Db as N,E,Jb as h,Lb as C,Qa as s,R as w,W as v,Yb as e,aa as F,ba as S,db as I,ma as y,qb as p,rb as x,wb as _,xb as t,yb as i,zb as m}from"./chunk-T6YFHVDB.js";import{a as f,b as g}from"./chunk-C6Q5SG76.js";var b=class l{createClienteFormGroup(o){let n=f(f({},this.getFormDefaults()),o??{id:null});return new R({id:new d({value:n.id,disabled:!0},{nonNullable:!0,validators:[a.required]}),nombre:new d(n.nombre,{validators:[a.required,a.maxLength(100)]}),telefono:new d(n.telefono,{validators:[a.required,a.maxLength(20)]}),email:new d(n.email,{validators:[a.maxLength(100)]}),nifCif:new d(n.nifCif,{validators:[a.maxLength(20)]}),direccion:new d(n.direccion,{validators:[a.maxLength(200)]}),municipio:new d(n.municipio,{validators:[a.maxLength(100)]}),codigoPostal:new d(n.codigoPostal,{validators:[a.maxLength(10)]}),notas:new d(n.notas,{validators:[a.maxLength(500)]}),activo:new d(n.activo,{validators:[a.required]})})}getCliente(o){return o.getRawValue()}resetForm(o,n){let r=f(f({},this.getFormDefaults()),n);o.reset(g(f({},r),{id:{value:r.id,disabled:!0}}))}getFormDefaults(){return{id:null,activo:!1}}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275prov=w({token:l,factory:l.\u0275fac,providedIn:"root"})}};function K(l,o){l&1&&(e(0,`
            `),t(1,"small",26),e(2,"Campo obligatorio"),i(),e(3,`
          `))}function W(l,o){if(l&1&&(e(0,`
          `),p(1,K,4,0)),l&2){let n,r=C();s(),x(!((n=r.editForm.get("nombre"))==null||n.errors==null)&&n.errors.required?1:-1)}}function B(l,o){l&1&&(e(0,`
            `),t(1,"small",26),e(2,"Campo obligatorio"),i(),e(3,`
          `))}function H(l,o){if(l&1&&(e(0,`
          `),p(1,B,4,0)),l&2){let n,r=C();s(),x(!((n=r.editForm.get("telefono"))==null||n.errors==null)&&n.errors.required?1:-1)}}function J(l,o){if(l&1){let n=N();e(0,`
    `),t(1,"div",27),e(2,`
      `),t(3,"button",28),h("click",function(){F(n);let c=C();return S(c.previousState())}),e(4,"Cancelar"),i(),e(5,`
      `),t(6,"button",29),h("click",function(){F(n);let c=C();return S(c.save())}),e(7,"Guardar"),i(),e(8,`
    `),i(),e(9,`
  `)}if(l&2){let n=C();s(6),_("disabled",n.editForm.invalid||n.isSaving())}}var j=class l{constructor(){this.isSaving=y(!1);this.cliente=null;this.clienteService=v(X);this.clienteFormService=v(b);this.activatedRoute=v(O);this.isModal=!1;this.editForm=this.clienteFormService.createClienteFormGroup()}ngOnInit(){this.activatedRoute.data.subscribe(({cliente:o})=>{this.cliente=o,o&&this.updateForm(o)})}saveFromModal(){return new Promise((o,n)=>{if(this.editForm.invalid){this.editForm.markAllAsTouched(),n("Formulario inv\xE1lido");return}this.save(),o()})}previousState(){globalThis.history.back()}save(){this.isSaving.set(!0);let o=this.clienteFormService.getCliente(this.editForm);o.id===null?this.subscribeToSaveResponse(this.clienteService.create(o)):this.subscribeToSaveResponse(this.clienteService.update(o))}subscribeToSaveResponse(o){o.pipe(E(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving.set(!1)}updateForm(o){this.cliente=o,this.clienteFormService.resetForm(this.editForm,o)}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=I({type:l,selectors:[["jhi-cliente-update"]],decls:123,vars:4,consts:[["name","editForm","novalidate","",3,"formGroup"],[1,"form-section"],[1,"form-section-title"],[1,"form-row"],[1,"form-field"],["for","field_nombre",1,"field-label","field-required"],["type","text","id","field_nombre","formControlName","nombre","placeholder","Nombre completo o empresa",1,"form-control"],["for","field_telefono",1,"field-label","field-required"],["type","tel","id","field_telefono","formControlName","telefono","placeholder","6XX XXX XXX",1,"form-control"],["for","field_email",1,"field-label"],["type","email","id","field_email","formControlName","email","placeholder","correo@ejemplo.com",1,"form-control"],["for","field_nifCif",1,"field-label"],["type","text","id","field_nifCif","formControlName","nifCif","placeholder","12345678A",1,"form-control"],[1,"form-row","col-1"],["for","field_direccion",1,"field-label"],["type","text","id","field_direccion","formControlName","direccion","placeholder","C/ Ejemplo 45, 3\xBA izquierda",1,"form-control"],["for","field_municipio",1,"field-label"],["type","text","id","field_municipio","formControlName","municipio","placeholder","Madrid",1,"form-control"],["for","field_codigoPostal",1,"field-label"],["type","text","id","field_codigoPostal","formControlName","codigoPostal","placeholder","28001",1,"form-control"],["for","field_notas",1,"field-label"],["id","field_notas","formControlName","notas","rows","3","placeholder","Observaciones, preferencias, informaci\xF3n de acceso...",1,"form-control"],[1,"form-field",2,"flex-direction","row","align-items","center","gap","10px"],[1,"form-check","form-switch"],["type","checkbox","id","field_activo","formControlName","activo","role","switch",1,"form-check-input"],["for","field_activo",1,"form-check-label","field-label"],[1,"text-danger"],[1,"d-flex","gap-2","mt-4"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary",3,"click","disabled"]],template:function(n,r){if(n&1&&(t(0,"form",0),e(1,`
  `),m(2,"jhi-alert-error"),e(3,`

  `),e(4,`
  `),t(5,"div",1),e(6,`
    `),t(7,"div",2),e(8,"Datos de contacto"),i(),e(9,`

    `),t(10,"div",3),e(11,`
      `),t(12,"div",4),e(13,`
        `),t(14,"label",5),e(15,"Nombre"),i(),e(16,`
        `),m(17,"input",6),e(18,`
        `),p(19,W,2,1),i(),e(20,`
      `),t(21,"div",4),e(22,`
        `),t(23,"label",7),e(24,"Tel\xE9fono"),i(),e(25,`
        `),m(26,"input",8),e(27,`
        `),p(28,H,2,1),i(),e(29,`
    `),i(),e(30,`

    `),t(31,"div",3),e(32,`
      `),t(33,"div",4),e(34,`
        `),t(35,"label",9),e(36,"Email"),i(),e(37,`
        `),m(38,"input",10),e(39,`
      `),i(),e(40,`
      `),t(41,"div",4),e(42,`
        `),t(43,"label",11),e(44,"NIF / CIF"),i(),e(45,`
        `),m(46,"input",12),e(47,`
      `),i(),e(48,`
    `),i(),e(49,`
  `),i(),e(50,`

  `),e(51,`
  `),t(52,"div",1),e(53,`
    `),t(54,"div",2),e(55,"Direcci\xF3n"),i(),e(56,`

    `),t(57,"div",13),e(58,`
      `),t(59,"div",4),e(60,`
        `),t(61,"label",14),e(62,"Calle y n\xFAmero"),i(),e(63,`
        `),m(64,"input",15),e(65,`
      `),i(),e(66,`
    `),i(),e(67,`

    `),t(68,"div",3),e(69,`
      `),t(70,"div",4),e(71,`
        `),t(72,"label",16),e(73,"Municipio"),i(),e(74,`
        `),m(75,"input",17),e(76,`
      `),i(),e(77,`
      `),t(78,"div",4),e(79,`
        `),t(80,"label",18),e(81,"C\xF3digo postal"),i(),e(82,`
        `),m(83,"input",19),e(84,`
      `),i(),e(85,`
    `),i(),e(86,`
  `),i(),e(87,`

  `),e(88,`
  `),t(89,"div",1),e(90,`
    `),t(91,"div",2),e(92,"Otros"),i(),e(93,`

    `),t(94,"div",13),e(95,`
      `),t(96,"div",4),e(97,`
        `),t(98,"label",20),e(99,"Notas internas"),i(),e(100,`
        `),m(101,"textarea",21),e(102,`
      `),i(),e(103,`
    `),i(),e(104,`

    `),t(105,"div",3),e(106,`
      `),t(107,"div",22),e(108,`
        `),t(109,"div",23),e(110,`
          `),m(111,"input",24),e(112,`
          `),t(113,"label",25),e(114,"Cliente activo"),i(),e(115,`
        `),i(),e(116,`
      `),i(),e(117,`
    `),i(),e(118,`
  `),i(),e(119,`

  `),e(120,`
  `),p(121,J,10,1),i(),e(122,`
`)),n&2){let c,u;_("formGroup",r.editForm),s(19),x((c=r.editForm.get("nombre"))!=null&&c.invalid&&((c=r.editForm.get("nombre"))!=null&&c.dirty||(c=r.editForm.get("nombre"))!=null&&c.touched)?19:-1),s(9),x((u=r.editForm.get("telefono"))!=null&&u.invalid&&((u=r.editForm.get("telefono"))!=null&&u.dirty||(u=r.editForm.get("telefono"))!=null&&u.touched)?28:-1),s(93),x(r.isModal?-1:121)}},dependencies:[U,G,L,A,V,k,T,D,P,M,q],encapsulation:2})}};export{j as a};
