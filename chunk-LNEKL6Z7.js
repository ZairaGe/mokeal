import{a as q}from"./chunk-NOJ2MZEG.js";import{c as G,e as f,f as T,g as I,h as N,j as w,k as j,m as D,n as R,u as k}from"./chunk-L7QYCLNK.js";import{c as M}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as V}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{b as C,c as E}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as O}from"./chunk-56XJVXYY.js";import{B as U}from"./chunk-FINXBEYE.js";import{E as A,Jb as v,Lb as g,Qa as l,R as F,W as p,Yb as t,db as b,ic as _,ma as S,qb as c,rb as h,wb as d,xb as i,yb as r,zb as s}from"./chunk-T6YFHVDB.js";import{a as u,b as x}from"./chunk-C6Q5SG76.js";var y=class a{createAuthorityFormGroup(e){let n=u(u({},this.getFormDefaults()),e??{name:null});return new N({name:new w({value:n.name,disabled:n.name!==null},{nonNullable:!0,validators:[f.required,f.maxLength(50)]})})}getAuthority(e){return e.getRawValue()}resetForm(e,n){let o=u(u({},this.getFormDefaults()),n);e.reset(x(u({},o),{name:{value:o.name,disabled:o.name!==null}}))}getFormDefaults(){return{name:null}}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275prov=F({token:a,factory:a.\u0275fac,providedIn:"root"})}};var B=()=>({max:"50"});function K(a,e){a&1&&(t(0,`
                `),i(1,"small",13),t(2,"Este campo es obligatorio."),r(),t(3,`
              `))}function L(a,e){a&1&&(t(0,`
                `),i(1,"small",14),t(2,"Este campo no puede superar m\xE1s de 50 caracteres."),r(),t(3,`
              `)),a&2&&(l(),d("translateValues",_(1,B)))}function W(a,e){if(a&1&&(t(0,`
            `),i(1,"div"),t(2,`
              `),c(3,K,4,0),c(4,L,4,2),r(),t(5,`
          `)),a&2){let n,o,m=g();l(3),h(!((n=m.editForm.get("name"))==null||n.errors==null)&&n.errors.required?3:-1),l(),h(!((o=m.editForm.get("name"))==null||o.errors==null)&&o.errors.maxlength?4:-1)}}var P=class a{constructor(){this.isSaving=S(!1);this.authority=null;this.authorityService=p(q);this.authorityFormService=p(y);this.activatedRoute=p(O);this.editForm=this.authorityFormService.createAuthorityFormGroup()}ngOnInit(){this.activatedRoute.data.subscribe(({authority:e})=>{this.authority=e,e&&this.updateForm(e)})}previousState(){globalThis.history.back()}save(){this.isSaving.set(!0);let e=this.authorityFormService.getAuthority(this.editForm);this.subscribeToSaveResponse(this.authorityService.create(e))}subscribeToSaveResponse(e){e.pipe(A(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving.set(!1)}updateForm(e){this.authority=e,this.authorityFormService.resetForm(this.editForm,e)}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275cmp=b({type:a,selectors:[["jhi-authority-update"]],decls:46,vars:4,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","novalidate","",3,"ngSubmit","formGroup"],["id","jhi-authority-heading","data-cy","AuthorityCreateUpdateHeading","jhiTranslate","mokealApp.adminAuthority.home.createOrEditLabel"],[1,"mb-3"],["for","field_name","jhiTranslate","mokealApp.adminAuthority.name",1,"form-label"],["type","text","name","name","id","field_name","data-cy","name","formControlName","name",1,"form-control",3,"readonly"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"],["jhiTranslate","entity.validation.maxlength",1,"form-text","text-danger",3,"translateValues"]],template:function(n,o){if(n&1&&(i(0,"div",0),t(1,`
  `),i(2,"div",1),t(3,`
    `),i(4,"form",2),v("ngSubmit",function(){return o.save()}),t(5,`
      `),i(6,"h2",3),t(7,`
        Crear o editar Authority
      `),r(),t(8,`

      `),i(9,"div"),t(10,`
        `),s(11,"jhi-alert-error"),t(12,`

        `),t(13,`
        `),i(14,"div",4),t(15,`
          `),i(16,"label",5),t(17,"Name"),r(),t(18,`
          `),s(19,"input",6),t(20,`
          `),c(21,W,6,2),r(),t(22,`
      `),r(),t(23,`

      `),i(24,"div"),t(25,`
        `),i(26,"button",7),v("click",function(){return o.previousState()}),t(27,`
          `),s(28,"fa-icon",8),t(29,"\xA0"),i(30,"span",9),t(31,"Cancelar"),r(),t(32,`
        `),r(),t(33,`

        `),i(34,"button",10),t(35,`
          `),s(36,"fa-icon",11),t(37,"\xA0"),i(38,"span",12),t(39,"Guardar"),r(),t(40,`
        `),r(),t(41,`
      `),r(),t(42,`
    `),r(),t(43,`
  `),r(),t(44,`
`),r(),t(45,`
`)),n&2){l(4),d("formGroup",o.editForm);let m=o.editForm.get("name");l(15),d("readonly",o.editForm.get("name").disabled),l(2),h(m.invalid&&(m.dirty||m.touched)?21:-1),l(13),d("disabled",o.editForm.invalid||o.isSaving())}},dependencies:[V,U,E,C,M,k,j,G,T,I,R,D],encapsulation:2})}};export{P as AuthorityUpdate};
