import{a as le}from"./chunk-FTI4DTWR.js";import{a as ae}from"./chunk-NOJ2MZEG.js";import{b as D,c as G,e as u,f as O,g as q,h as B,j as p,k as $,m as z,n as P,o as Z,p as H,q as J,r as Q,u as W}from"./chunk-L7QYCLNK.js";import{c as ne}from"./chunk-BRYFIDPH.js";import"./chunk-VIDFJCIH.js";import{a as ee,b as te}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import"./chunk-RTHAFQWU.js";import"./chunk-Z4UJQH5K.js";import{a as ie}from"./chunk-CR4G657Q.js";import{b as K,c as R}from"./chunk-KCR5TJTV.js";import"./chunk-GN5HSKJX.js";import{a as X}from"./chunk-56XJVXYY.js";import{B as Y}from"./chunk-FINXBEYE.js";import{Jb as T,Lb as f,Qa as l,W as y,Yb as e,Zb as F,db as A,dc as _,ec as h,fc as S,ic as g,ma as j,mc as w,nc as V,pb as I,qb as o,rb as m,sb as U,tc as k,ub as N,vb as M,wb as s,xb as n,yb as a,zb as c}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var L=()=>({max:"50"}),oe=()=>({max:"100"}),me=()=>({min:"5"});function de(t,r){t&1&&(e(0,`
              `),n(1,"small",28),e(2,"Este campo es obligatorio."),a(),e(3,`
            `))}function se(t,r){t&1&&(e(0,`
              `),n(1,"small",29),e(2,"Este campo no puede superar m\xE1s de 50 caracteres."),a(),e(3,`
            `)),t&2&&(l(),s("translateValues",g(1,L)))}function ce(t,r){t&1&&(e(0,`
              `),n(1,"small",30),e(2,"This field can only contain letters, digits and e-mail addresses."),a(),e(3,`
            `))}function ue(t,r){if(t&1&&(e(0,`
          `),n(1,"div"),e(2,`
            `),o(3,de,4,0),o(4,se,4,2),o(5,ce,4,0),a(),e(6,`
        `)),t&2){f();let i=S(26);l(3),m(!(i==null||i.errors==null)&&i.errors.required?3:-1),l(),m(!(i==null||i.errors==null)&&i.errors.maxlength?4:-1),l(),m(!(i==null||i.errors==null)&&i.errors.pattern?5:-1)}}function pe(t,r){t&1&&(e(0,`
              `),n(1,"small",29),e(2,"Este campo no puede superar m\xE1s de 50 caracteres."),a(),e(3,`
            `)),t&2&&(l(),s("translateValues",g(1,L)))}function xe(t,r){if(t&1&&(e(0,`
          `),n(1,"div"),e(2,`
            `),o(3,pe,4,2),a(),e(4,`
        `)),t&2){f();let i=S(37);l(3),m(!(i==null||i.errors==null)&&i.errors.maxlength?3:-1)}}function fe(t,r){t&1&&(e(0,`
              `),n(1,"small",29),e(2,"Este campo no puede superar m\xE1s de 50 caracteres."),a(),e(3,`
            `)),t&2&&(l(),s("translateValues",g(1,L)))}function ge(t,r){if(t&1&&(e(0,`
          `),n(1,"div"),e(2,`
            `),o(3,fe,4,2),a(),e(4,`
        `)),t&2){f();let i=S(48);l(3),m(!(i==null||i.errors==null)&&i.errors.maxlength?3:-1)}}function ve(t,r){t&1&&(e(0,`
              `),n(1,"small",28),e(2,"Este campo es obligatorio."),a(),e(3,`
            `))}function _e(t,r){t&1&&(e(0,`
              `),n(1,"small",29),e(2,"Este campo no puede superar m\xE1s de 100 caracteres."),a(),e(3,`
            `)),t&2&&(l(),s("translateValues",g(1,oe)))}function he(t,r){t&1&&(e(0,`
              `),n(1,"small",31),e(2,"Este campo requiere al menos 5 caracteres."),a(),e(3,`
            `)),t&2&&(l(),s("translateValues",g(1,me)))}function Se(t,r){t&1&&(e(0,`
              `),n(1,"small",32),e(2,"Su correo electr\xF3nico no es v\xE1lido."),a(),e(3,`
            `))}function ye(t,r){if(t&1&&(e(0,`
          `),n(1,"div"),e(2,`
            `),o(3,ve,4,0),o(4,_e,4,2),o(5,he,4,2),o(6,Se,4,0),a(),e(7,`
        `)),t&2){f();let i=S(59);l(3),m(!(i==null||i.errors==null)&&i.errors.required?3:-1),l(),m(!(i==null||i.errors==null)&&i.errors.maxlength?4:-1),l(),m(!(i==null||i.errors==null)&&i.errors.minlength?5:-1),l(),m(!(i==null||i.errors==null)&&i.errors.email?6:-1)}}function Ce(t,r){if(t&1&&(e(0,`
              `),n(1,"option",35),e(2),w(3,"findLanguageFromKey"),a(),e(4,`
            `)),t&2){let i=r.$implicit;l(),s("value",i),l(),F(V(3,2,i))}}function be(t,r){if(t&1&&(e(0,`
        `),n(1,"div",7),e(2,`
          `),n(3,"label",33),e(4,"Idioma"),a(),e(5,`
          `),n(6,"select",34),e(7,`
            `),N(8,Ce,5,4,null,null,U),a(),e(10,`
        `),a(),e(11,`
      `)),t&2){let i=f();l(8),M(i.languages)}}function Ee(t,r){if(t&1&&(e(0,`
            `),n(1,"option",35),e(2),a(),e(3,`
          `)),t&2){let i=r.$implicit;l(),s("value",i),l(),F(i)}}var x={},Ue={langKey:"es",activated:!0},re=class t{constructor(){this.languages=ie;this.isSaving=j(!1);this.editForm=new B({id:new p(x.id),login:new p(x.login,{nonNullable:!0,validators:[u.required,u.minLength(1),u.maxLength(50),u.pattern("^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$")]}),firstName:new p(x.firstName,{validators:[u.maxLength(50)]}),lastName:new p(x.lastName,{validators:[u.maxLength(50)]}),email:new p(x.email,{nonNullable:!0,validators:[u.minLength(5),u.maxLength(254),u.email]}),activated:new p(x.activated,{nonNullable:!0}),langKey:new p(x.langKey,{nonNullable:!0}),authorities:new p(x.authorities,{nonNullable:!0})});this.authorityService=y(ae);this.authorities=k(()=>this.authorityService.authorities().map(r=>r.name));this.userService=y(le);this.route=y(X);this.authorityService.authoritiesParams.set({})}ngOnInit(){this.route.data.subscribe(({userManagement:r})=>{r?this.editForm.reset(r):this.editForm.reset(Ue)})}previousState(){globalThis.history.back()}save(){this.isSaving.set(!0);let r=this.editForm.getRawValue();r.id===null?this.userService.create(r).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()}):this.userService.update(r).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.isSaving.set(!1),this.previousState()}onSaveError(){this.isSaving.set(!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["jhi-user-management-update"]],decls:105,vars:13,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","novalidate","",3,"ngSubmit","formGroup"],["id","myUserLabel","data-cy","UserManagementCreateUpdateHeading","jhiTranslate","userManagement.home.createOrEditLabel"],[1,"mb-3",3,"hidden"],["for","field_id","jhiTranslate","global.field.id",1,"form-label"],["type","text","id","field_id","name","id","formControlName","id","readonly","",1,"form-control"],[1,"mb-3"],["for","field_login","jhiTranslate","userManagement.login",1,"form-label"],["type","text","id","field_login","name","login","formControlName","login","data-cy","login",1,"form-control"],["for","field_firstName","jhiTranslate","userManagement.firstName",1,"form-label"],["type","text","id","field_firstName","name","firstName","formControlName","firstName","data-cy","firstName",1,"form-control"],["for","field_lastName","jhiTranslate","userManagement.lastName",1,"form-label"],["type","text","id","field_lastName","name","lastName","formControlName","lastName","data-cy","lastName",1,"form-control"],["for","field_email","jhiTranslate","userManagement.email",1,"form-label"],["type","email","id","field_email","name","email","formControlName","email","data-cy","email",1,"form-control"],[1,"form-check"],["for","activated",1,"form-check-label"],["type","checkbox","id","activated","name","activated","formControlName","activated","data-cy","activated",1,"form-check-input"],["jhiTranslate","userManagement.activated"],["for","field_authority","jhiTranslate","userManagement.profiles",1,"form-label"],["id","field_authority","multiple","","name","authority","formControlName","authorities",1,"form-control"],["type","button","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"],["jhiTranslate","entity.validation.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","entity.validation.patternLogin",1,"form-text","text-danger"],["jhiTranslate","entity.validation.minlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","global.messages.validate.email.invalid",1,"form-text","text-danger"],["for","langKey","jhiTranslate","userManagement.langKey",1,"form-label"],["id","langKey","name","langKey","formControlName","langKey","data-cy","langKey",1,"form-control"],[3,"value"]],template:function(i,d){if(i&1&&(n(0,"div",0),e(1,`
  `),n(2,"div",1),e(3,`
    `),n(4,"form",2),T("ngSubmit",function(){return d.save()}),e(5,`
      `),n(6,"h2",3),e(7,`
        Crear o editar un usuario
      `),a(),e(8,`

      `),c(9,"jhi-alert-error"),e(10,`

      `),n(11,"div",4),e(12,`
        `),n(13,"label",5),e(14,"ID"),a(),e(15,`
        `),c(16,"input",6),e(17,`
      `),a(),e(18,`

      `),n(19,"div",7),e(20,`
        `),n(21,"label",8),e(22,"Login"),a(),e(23,`
        `),c(24,"input",9),e(25,`

        `),_(26),e(27,`
        `),o(28,ue,7,3),a(),e(29,`

      `),n(30,"div",7),e(31,`
        `),n(32,"label",10),e(33,"Nombre"),a(),e(34,`
        `),c(35,"input",11),e(36,`

        `),_(37),e(38,`
        `),o(39,xe,5,1),a(),e(40,`

      `),n(41,"div",7),e(42,`
        `),n(43,"label",12),e(44,"Apellidos"),a(),e(45,`
        `),c(46,"input",13),e(47,`

        `),_(48),e(49,`
        `),o(50,ge,5,1),a(),e(51,`

      `),n(52,"div",7),e(53,`
        `),n(54,"label",14),e(55,"Email"),a(),e(56,`
        `),c(57,"input",15),e(58,`

        `),_(59),e(60,`
        `),o(61,ye,8,4),a(),e(62,`

      `),n(63,"div",16),e(64,`
        `),n(65,"label",17),e(66,`
          `),c(67,"input",18),e(68,`
          `),n(69,"span",19),e(70,"Activado"),a(),e(71,`
        `),a(),e(72,`
      `),a(),e(73,`

      `),o(74,be,12,0),n(75,"div",7),e(76,`
        `),n(77,"label",20),e(78,"Perfiles"),a(),e(79,`
        `),n(80,"select",21),e(81,`
          `),N(82,Ee,4,2,null,null,U),a(),e(84,`
      `),a(),e(85,`
      `),n(86,"button",22),T("click",function(){return d.previousState()}),e(87,`
        `),c(88,"fa-icon",23),e(89,"\xA0"),n(90,"span",24),e(91,"Cancelar"),a(),e(92,`
      `),a(),e(93,`

      `),n(94,"button",25),e(95,`
        `),c(96,"fa-icon",26),e(97,"\xA0"),n(98,"span",27),e(99,"Guardar"),a(),e(100,`
      `),a(),e(101,`
    `),a(),e(102,`
  `),a(),e(103,`
`),a(),e(104,`
`)),i&2){l(4),s("formGroup",d.editForm),l(7),s("hidden",!d.editForm.value.id),l(15);let v=h(d.editForm.get("login"));l(2),m(v.invalid&&(v.dirty||v.touched)?28:-1),l(9);let C=h(d.editForm.get("firstName"));l(2),m(C.invalid&&(C.dirty||C.touched)?39:-1),l(9);let b=h(d.editForm.get("lastName"));l(2),m(b.invalid&&(b.dirty||b.touched)?50:-1),l(9);let E=h(d.editForm.get("email"));l(2),m(E.invalid&&(E.dirty||E.touched)?61:-1),l(6),I("disabled",d.editForm.value.id===void 0?"disabled":null),l(7),m(d.languages&&d.languages.length>0?74:-1),l(8),M(d.authorities()),l(12),s("disabled",d.editForm.invalid||d.isSaving())}},dependencies:[ee,Y,R,K,ne,W,$,H,Q,G,D,Z,J,O,q,P,z,te],encapsulation:2})}};export{re as UserManagementUpdate};
