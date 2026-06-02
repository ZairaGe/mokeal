import{a as ue}from"./chunk-CTSQYYCT.js";import{c as I,e as m,f as D,g as V,h as H,j as v,k,m as G,n as O,o as Ne,p as qe,r as Le,s as Ae,u as B}from"./chunk-L7QYCLNK.js";import{c as pe}from"./chunk-IGHTKR47.js";import"./chunk-VIDFJCIH.js";import{a as F,b as Me}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as Ie}from"./chunk-CR4G657Q.js";import{b as ce}from"./chunk-PDQY6DJ2.js";import{a as U}from"./chunk-GN5HSKJX.js";import{a as de,e as W}from"./chunk-56XJVXYY.js";import{A as K,B as T,p as je,r as M,z as me}from"./chunk-FINXBEYE.js";import{Ac as Z,Db as L,Jb as A,Lb as x,Qa as o,R as j,Tb as Y,Ub as $,W as u,Yb as e,Za as ye,Zb as ee,aa as N,ba as q,db as y,dc as w,ec as S,fc as b,gc as E,jc as se,ma as g,mc as h,n as Se,nc as C,oa as be,qb as l,rb as s,sa as Ee,sb as Te,ub as Fe,vb as Re,wb as p,xb as a,yb as n,zb as f,zc as Pe}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var fe=class i{constructor(){this.http=u(M);this.applicationConfigService=u(U)}get(r){return this.http.get(this.applicationConfigService.getEndpointFor("api/activate"),{params:new je().set("key",r)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=j({token:i,factory:i.\u0275fac,providedIn:"root"})}};function ze(i,r){i&1&&(e(0,`
        `),a(1,"div",3),e(2,`
          `),a(3,"span",4)(4,"strong"),e(5,"Su cuenta ha sido activada."),n(),e(6," Por favor, "),n(),e(7,`
          `),a(8,"a",5),e(9,"iniciar sesi\xF3n"),n(),e(10,`.
        `),n(),e(11,`
      `))}function He(i,r){i&1&&(e(0,`
        `),a(1,"div",6),e(2,`
          `),a(3,"strong"),e(4,"Su cuenta no pudo ser activada."),n(),e(5,` Por favor, utilice el formulario de inscripci\xF3n para registrarse.
        `),n(),e(6,`
      `))}var te=class i{constructor(){this.error=g(!1);this.success=g(!1);this.activateService=u(fe);this.route=u(de)}ngOnInit(){this.route.queryParams.pipe(Se(r=>this.activateService.get(r.key))).subscribe({next:()=>this.success.set(!0),error:()=>this.error.set(!0)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["jhi-activate"]],decls:14,vars:2,consts:[[1,"d-flex","justify-content-center"],[1,"col-md-8"],["jhiTranslate","activate.title"],[1,"alert","alert-success"],["jhiTranslate","activate.messages.success"],["routerLink","/login","jhiTranslate","global.messages.info.authenticated.link",1,"alert-link"],["jhiTranslate","activate.messages.error",1,"alert","alert-danger"]],template:function(t,d){t&1&&(a(0,"div"),e(1,`
  `),a(2,"div",0),e(3,`
    `),a(4,"div",1),e(5,`
      `),a(6,"h1",2),e(7,"Activaci\xF3n"),n(),e(8,`
      `),l(9,ze,12,0),l(10,He,7,0),n(),e(11,`
  `),n(),e(12,`
`),n(),e(13,`
`)),t&2&&(o(9),s(d.success()?9:-1),o(),s(d.error()?10:-1))},dependencies:[W,F,T],encapsulation:2})}};var Qe={path:"activate",component:te,title:"activate.title"},De=Qe;var z=class i{constructor(){this.passwordToCheck=Pe("");this.colors=["#F00","#F90","#FF0","#9F0","#0F0"];this.renderer=u(ye);this.elementRef=u(Ee);be(()=>{let r=this.passwordToCheck();if(r){let t=this.getColor(this.measureStrength(r)),d=this.elementRef.nativeElement;d.className&&this.renderer.removeClass(d,d.className);let c=d.getElementsByTagName("li");for(let _=0;_<c.length;_++)_<t.idx?this.renderer.setStyle(c[_],"backgroundColor",t.color):this.renderer.setStyle(c[_],"backgroundColor","#DDD")}})}measureStrength(r){let t=0,d=/[$-/:-?{-~!"^_`[\]]/g,c=/[a-z]+/.test(r),_=/[A-Z]+/.test(r),P=/\d+/.test(r),X=d.test(r),le=[c,_,P,X].filter(Boolean).length;return t+=2*r.length+(r.length>=10?1:0),t+=le*10,t=r.length<=6?Math.min(t,10):t,t=le===1?Math.min(t,10):t,t=le===2?Math.min(t,20):t,t=le===3?Math.min(t,40):t,t}getColor(r){let t=0;return r>10&&(r<=20?t=1:r<=30?t=2:r<=40?t=3:t=4),{idx:t+1,color:this.colors[t]}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["jhi-password-strength-bar"]],inputs:{passwordToCheck:[1,"passwordToCheck"]},decls:19,vars:0,consts:[["id","strength"],["jhiTranslate","global.messages.validate.newpassword.strength"],["id","strengthBar"],[1,"point"]],template:function(t,d){t&1&&(a(0,"div",0),e(1,`
  `),a(2,"small",1),e(3,"Seguridad de la contrase\xF1a:"),n(),e(4,`
  `),a(5,"ul",2),e(6,`
    `),f(7,"li",3),e(8,`
    `),f(9,"li",3),e(10,`
    `),f(11,"li",3),e(12,`
    `),f(13,"li",3),e(14,`
    `),f(15,"li",3),e(16,`
  `),n(),e(17,`
`),n(),e(18,`
`))},dependencies:[F,T],styles:["ul#strength[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0 0 0 15px;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]{background:#ddd;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:20px}.point[_ngcontent-%COMP%]:last-child{margin:0!important}"]})}};var xe=class i{constructor(){this.http=u(M);this.applicationConfigService=u(U)}save(r,t){return this.http.post(this.applicationConfigService.getEndpointFor("api/account/change-password"),{currentPassword:t,newPassword:r})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=j({token:i,factory:i.\u0275fac,providedIn:"root"})}};var Ye=i=>({username:i});function $e(i,r){i&1&&(e(0,`
          `),a(1,"div",13)(2,"strong"),e(3,"\xA1La contrase\xF1a ha sido cambiada!"),n()(),e(4,`
        `))}function Ze(i,r){i&1&&(e(0,`
          `),a(1,"div",14),e(2,`
            `),a(3,"strong"),e(4,"\xA1Ha ocurrido un error!"),n(),e(5,` La contrase\xF1a no se ha podido cambiar.
          `),n(),e(6,`
        `))}function We(i,r){i&1&&(e(0,`
          `),a(1,"div",15),e(2,`
            \xA1La contrase\xF1a y la confirmaci\xF3n de contrase\xF1a no coinciden!
          `),n(),e(3,`
        `))}function Je(i,r){i&1&&(e(0,`
                  `),a(1,"small",16),e(2,"Se requiere que ingrese una contrase\xF1a."),n(),e(3,`
                `))}function Xe(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,Je,4,0),n(),e(4,`
            `)),i&2){x();let t=b(22);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1)}}function et(i,r){i&1&&(e(0,`
                  `),a(1,"small",16),e(2,"Se requiere que ingrese una contrase\xF1a."),n(),e(3,`
                `))}function tt(i,r){i&1&&(e(0,`
                  `),a(1,"small",17),e(2,"Se requiere que su contrase\xF1a tenga por lo menos 4 caracteres"),n(),e(3,`
                `))}function it(i,r){i&1&&(e(0,`
                  `),a(1,"small",18),e(2,"Su contrase\xF1a no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function nt(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,et,4,0),l(4,tt,4,0),l(5,it,4,0),n(),e(6,`
            `)),i&2){x();let t=b(34);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function at(i,r){i&1&&(e(0,`
                  `),a(1,"small",19),e(2,"Se requiere que confirme la contrase\xF1a."),n(),e(3,`
                `))}function rt(i,r){i&1&&(e(0,`
                  `),a(1,"small",20),e(2,"Se requiere que su contrase\xF1a de confirmaci\xF3n tenga por lo menos 4 caracteres"),n(),e(3,`
                `))}function ot(i,r){i&1&&(e(0,`
                  `),a(1,"small",21),e(2,"Su contrase\xF1a de confirmaci\xF3n no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function lt(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,at,4,0),l(4,rt,4,0),l(5,ot,4,0),n(),e(6,`
            `)),i&2){x();let t=b(48);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function st(i,r){if(i&1){let t=L();e(0,`
      `),a(1,"div",1),e(2,`
        `),a(3,"h2",2),e(4,`
          Contrase\xF1a de [`),a(5,"strong"),e(6),n(),e(7,`]
        `),n(),e(8,`

        `),l(9,$e,5,0),l(10,Ze,7,0),l(11,We,4,0),a(12,"form",3),A("ngSubmit",function(){N(t);let c=x();return q(c.changePassword())}),e(13,`
          `),a(14,"div",4),e(15,`
            `),a(16,"label",5),e(17,"Contrase\xF1a actual"),n(),e(18,`
            `),f(19,"input",6),h(20,"translate"),e(21,`

            `),w(22),e(23,`
            `),l(24,Xe,5,1),n(),e(25,`

          `),a(26,"div",4),e(27,`
            `),a(28,"label",7),e(29,"Nueva contrase\xF1a"),n(),e(30,`
            `),f(31,"input",8),h(32,"translate"),e(33,`

            `),w(34),e(35,`
            `),l(36,nt,7,3),f(37,"jhi-password-strength-bar",9),e(38,`
          `),n(),e(39,`

          `),a(40,"div",4),e(41,`
            `),a(42,"label",10),e(43,"Confirmaci\xF3n de la nueva contrase\xF1a"),n(),e(44,`
            `),f(45,"input",11),h(46,"translate"),e(47,`

            `),w(48),e(49,`
            `),l(50,lt,7,3),n(),e(51,`

          `),a(52,"button",12),e(53,`
            Guardar
          `),n(),e(54,`
        `),n(),e(55,`
      `),n(),e(56,`
    `)}if(i&2){let t,d,c=x();o(3),p("translateValues",se(26,Ye,(t=c.account())==null?null:t.login)),o(3),ee((d=c.account())==null?null:d.login),o(3),s(c.success()?9:-1),o(),s(c.error()?10:-1),o(),s(c.doNotMatch()?11:-1),o(),p("formGroup",c.passwordForm),o(7),p("placeholder",E(C(20,17,"global.form.currentpassword.placeholder"))),o(3);let _=S(c.passwordForm.get("currentPassword"));o(2),s(_.invalid&&(_.dirty||_.touched)?24:-1),o(7),p("placeholder",E(C(32,20,"global.form.newpassword.placeholder"))),o(3);let P=S(c.passwordForm.get("newPassword"));o(2),s(P.invalid&&(P.dirty||P.touched)?36:-1),o(),p("passwordToCheck",P.value),o(8),p("placeholder",E(C(46,23,"global.form.confirmpassword.placeholder"))),o(3);let X=S(c.passwordForm.get("confirmPassword"));o(2),s(X.invalid&&(X.dirty||X.touched)?50:-1),o(2),p("disabled",c.passwordForm.invalid)}}var ie=class i{constructor(){this.doNotMatch=g(!1);this.error=g(!1);this.success=g(!1);this.account=u(ce).account;this.passwordForm=new H({currentPassword:new v("",{nonNullable:!0,validators:m.required}),newPassword:new v("",{nonNullable:!0,validators:[m.required,m.minLength(4),m.maxLength(50)]}),confirmPassword:new v("",{nonNullable:!0,validators:[m.required,m.minLength(4),m.maxLength(50)]})});this.passwordService=u(xe)}changePassword(){this.error.set(!1),this.success.set(!1),this.doNotMatch.set(!1);let{newPassword:r,confirmPassword:t,currentPassword:d}=this.passwordForm.getRawValue();r===t?this.passwordService.save(r,d).subscribe({next:()=>this.success.set(!0),error:()=>this.error.set(!0)}):this.doNotMatch.set(!0)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["jhi-password"]],decls:7,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-md-8"],["jhiTranslate","password.title",3,"translateValues"],["name","form",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","currentPassword","jhiTranslate","global.form.currentpassword.label",1,"form-label"],["type","password","id","currentPassword","name","currentPassword","formControlName","currentPassword","data-cy","currentPassword",1,"form-control",3,"placeholder"],["for","newPassword","jhiTranslate","global.form.newpassword.label",1,"form-label"],["type","password","id","newPassword","name","newPassword","formControlName","newPassword","data-cy","newPassword",1,"form-control",3,"placeholder"],[3,"passwordToCheck"],["for","confirmPassword","jhiTranslate","global.form.confirmpassword.label",1,"form-label"],["type","password","id","confirmPassword","name","confirmPassword","formControlName","confirmPassword","data-cy","confirmPassword",1,"form-control",3,"placeholder"],["type","submit","data-cy","submit","jhiTranslate","password.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","password.messages.success",1,"alert","alert-success"],["jhiTranslate","password.messages.error",1,"alert","alert-danger"],["jhiTranslate","global.messages.error.dontmatch",1,"alert","alert-danger"],["jhiTranslate","global.messages.validate.newpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.maxlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.maxlength",1,"form-text","text-danger"]],template:function(t,d){t&1&&(a(0,"div"),e(1,`
  `),a(2,"div",0),e(3,`
    `),l(4,st,57,28),n(),e(5,`
`),n(),e(6,`
`)),t&2&&(o(4),s(d.account()?4:-1))},dependencies:[F,T,B,k,I,D,V,O,G,z,K],encapsulation:2})}};var dt={path:"password",component:ie,title:"global.menu.account.password",canActivate:[ue]},Ve=dt;var ve=class i{constructor(){this.http=u(M);this.applicationConfigService=u(U)}save(r,t){return this.http.post(this.applicationConfigService.getEndpointFor("api/account/reset-password/finish"),{key:r,newPassword:t})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=j({token:i,factory:i.\u0275fac,providedIn:"root"})}};var mt=["newPassword"];function ct(i,r){i&1&&(e(0,`
        `),a(1,"div",3),e(2,"Falta la clave de reinicio."),n(),e(3,`
      `))}function ut(i,r){i&1&&(e(0,`
        `),a(1,"div",4),e(2,`
          `),a(3,"span",5),e(4,"Elija una contrase\xF1a nueva"),n(),e(5,`
        `),n(),e(6,`
      `))}function pt(i,r){i&1&&(e(0,`
        `),a(1,"div",6),e(2,`
          `),a(3,"span",7),e(4,`Su contrase\xF1a no puede ser restablecida. Recuerde que una solicitud de reinicio de contrase\xF1a s\xF3lo es v\xE1lida durante 24
            horas.`),n(),e(5,`
        `),n(),e(6,`
      `))}function ft(i,r){i&1&&(e(0,`
        `),a(1,"div",8),e(2,`
          `),a(3,"span",9)(4,"strong"),e(5,"Su contrase\xF1a ha sido restablecida."),n(),e(6," Por favor, "),n(),e(7,`
          `),a(8,"a",10),e(9,"iniciar sesi\xF3n"),n(),e(10,`.
        `),n(),e(11,`
      `))}function xt(i,r){i&1&&(e(0,`
        `),a(1,"div",11),e(2,`
          \xA1La contrase\xF1a y la confirmaci\xF3n de contrase\xF1a no coinciden!
        `),n(),e(3,`
      `))}function gt(i,r){i&1&&(e(0,`
                    `),a(1,"small",20),e(2,"Se requiere que ingrese una contrase\xF1a."),n(),e(3,`
                  `))}function _t(i,r){i&1&&(e(0,`
                    `),a(1,"small",21),e(2,"Se requiere que su contrase\xF1a tenga por lo menos 4 caracteres"),n(),e(3,`
                  `))}function vt(i,r){i&1&&(e(0,`
                    `),a(1,"small",22),e(2,"Su contrase\xF1a no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                  `))}function ht(i,r){if(i&1&&(e(0,`
                `),a(1,"div"),e(2,`
                  `),l(3,gt,4,0),l(4,_t,4,0),l(5,vt,4,0),n(),e(6,`
              `)),i&2){x();let t=b(13);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function Ct(i,r){i&1&&(e(0,`
                    `),a(1,"small",23),e(2,"Se requiere que confirme la contrase\xF1a."),n(),e(3,`
                  `))}function wt(i,r){i&1&&(e(0,`
                    `),a(1,"small",24),e(2,"Se requiere que su contrase\xF1a de confirmaci\xF3n tenga por lo menos 4 caracteres"),n(),e(3,`
                  `))}function St(i,r){i&1&&(e(0,`
                    `),a(1,"small",25),e(2,"Su contrase\xF1a de confirmaci\xF3n no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                  `))}function bt(i,r){if(i&1&&(e(0,`
                `),a(1,"div"),e(2,`
                  `),l(3,Ct,4,0),l(4,wt,4,0),l(5,St,4,0),n(),e(6,`
              `)),i&2){x();let t=b(27);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function Et(i,r){if(i&1){let t=L();e(0,`
        `),a(1,"div"),e(2,`
          `),a(3,"form",12),A("ngSubmit",function(){N(t);let c=x();return q(c.finishReset())}),e(4,`
            `),a(5,"div",13),e(6,`
              `),a(7,"label",14),e(8,"Nueva contrase\xF1a"),n(),e(9,`
              `),f(10,"input",15),h(11,"translate"),e(12,`

              `),w(13),e(14,`
              `),l(15,ht,7,3),f(16,"jhi-password-strength-bar",16),e(17,`
            `),n(),e(18,`

            `),a(19,"div",13),e(20,`
              `),a(21,"label",17),e(22,"Confirmaci\xF3n de la nueva contrase\xF1a"),n(),e(23,`
              `),f(24,"input",18),h(25,"translate"),e(26,`

              `),w(27),e(28,`
              `),l(29,bt,7,3),n(),e(30,`

            `),a(31,"button",19),e(32,`
              Validar la nueva contrase\xF1a
            `),n(),e(33,`
          `),n(),e(34,`
        `),n(),e(35,`
      `)}if(i&2){let t=x();o(3),p("formGroup",t.passwordForm),o(7),p("placeholder",E(C(11,9,"global.form.newpassword.placeholder"))),o(3);let d=S(t.passwordForm.get("newPassword"));o(2),s(d.invalid&&(d.dirty||d.touched)?15:-1),o(),p("passwordToCheck",d.value),o(8),p("placeholder",E(C(25,12,"global.form.confirmpassword.placeholder"))),o(3);let c=S(t.passwordForm.get("confirmPassword"));o(2),s(c.invalid&&(c.dirty||c.touched)?29:-1),o(2),p("disabled",t.passwordForm.invalid)}}var ne=class i{constructor(){this.newPassword=Z.required("newPassword");this.initialized=g(!1);this.doNotMatch=g(!1);this.error=g(!1);this.success=g(!1);this.key=g("");this.passwordForm=new H({newPassword:new v("",{nonNullable:!0,validators:[m.required,m.minLength(4),m.maxLength(50)]}),confirmPassword:new v("",{nonNullable:!0,validators:[m.required,m.minLength(4),m.maxLength(50)]})});this.passwordResetFinishService=u(ve);this.route=u(de)}ngOnInit(){this.route.queryParams.subscribe(r=>{r.key&&this.key.set(r.key),this.initialized.set(!0)})}ngAfterViewInit(){this.newPassword().nativeElement.focus()}finishReset(){this.doNotMatch.set(!1),this.error.set(!1);let{newPassword:r,confirmPassword:t}=this.passwordForm.getRawValue();r===t?this.passwordResetFinishService.save(this.key(),r).subscribe({next:()=>this.success.set(!0),error:()=>this.error.set(!0)}):this.doNotMatch.set(!0)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["jhi-password-reset-finish"]],viewQuery:function(t,d){t&1&&Y(d.newPassword,mt,5),t&2&&$()},decls:18,vars:6,consts:[[1,"d-flex","justify-content-center"],[1,"col-md-4"],["jhiTranslate","reset.finish.title"],["jhiTranslate","reset.finish.messages.keymissing",1,"alert","alert-danger"],[1,"alert","alert-warning"],["jhiTranslate","reset.finish.messages.info"],[1,"alert","alert-danger"],["jhiTranslate","reset.finish.messages.error"],[1,"alert","alert-success"],["jhiTranslate","reset.finish.messages.success"],["routerLink","/login","jhiTranslate","global.messages.info.authenticated.link",1,"alert-link"],["jhiTranslate","global.messages.error.dontmatch",1,"alert","alert-danger"],["name","form",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","newPassword","jhiTranslate","global.form.newpassword.label",1,"form-label"],["type","password","id","newPassword","name","newPassword","formControlName","newPassword","data-cy","resetPassword",1,"form-control",3,"placeholder"],[3,"passwordToCheck"],["for","confirmPassword","jhiTranslate","global.form.confirmpassword.label",1,"form-label"],["type","password","id","confirmPassword","name","confirmPassword","formControlName","confirmPassword","data-cy","confirmResetPassword",1,"form-control",3,"placeholder"],["type","submit","data-cy","submit","jhiTranslate","reset.finish.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","global.messages.validate.newpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.maxlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.maxlength",1,"form-text","text-danger"]],template:function(t,d){t&1&&(a(0,"div"),e(1,`
  `),a(2,"div",0),e(3,`
    `),a(4,"div",1),e(5,`
      `),a(6,"h1",2),e(7,"Restablecer la contrase\xF1a"),n(),e(8,`

      `),l(9,ct,4,0),l(10,ut,7,0),l(11,pt,7,0),l(12,ft,12,0),l(13,xt,4,0),l(14,Et,36,15),n(),e(15,`
  `),n(),e(16,`
`),n(),e(17,`
`)),t&2&&(o(9),s(d.initialized()&&!d.key()?9:-1),o(),s(d.key()&&!d.success()?10:-1),o(),s(d.error()?11:-1),o(),s(d.success()?12:-1),o(),s(d.doNotMatch()?13:-1),o(),s(d.key()&&!d.success()?14:-1))},dependencies:[F,T,W,B,k,I,D,V,O,G,z,K],encapsulation:2})}};var yt={path:"reset/finish",component:ne,title:"global.menu.account.password"},ke=yt;var he=class i{constructor(){this.http=u(M);this.applicationConfigService=u(U)}save(r){return this.http.post(this.applicationConfigService.getEndpointFor("api/account/reset-password/init"),r)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=j({token:i,factory:i.\u0275fac,providedIn:"root"})}};var Tt=["email"];function Ft(i,r){i&1&&(e(0,`
                  `),a(1,"small",10),e(2,"Se requiere un correo electr\xF3nico."),n(),e(3,`
                `))}function Rt(i,r){i&1&&(e(0,`
                  `),a(1,"small",11),e(2,"Su correo electr\xF3nico no es v\xE1lido."),n(),e(3,`
                `))}function Pt(i,r){i&1&&(e(0,`
                  `),a(1,"small",12),e(2,"Se requiere que su correo electr\xF3nico tenga por lo menos 5 caracteres"),n(),e(3,`
                `))}function jt(i,r){i&1&&(e(0,`
                  `),a(1,"small",13),e(2,"Su correo electr\xF3nico no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function Nt(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,Ft,4,0),l(4,Rt,4,0),l(5,Pt,4,0),l(6,jt,4,0),n(),e(7,`
            `)),i&2){x();let t=b(17);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.email?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?5:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?6:-1)}}function qt(i,r){if(i&1){let t=L();e(0,`
        `),a(1,"div",3),e(2,`
          `),a(3,"span",4),e(4,"Introduzca la direcci\xF3n de correo electr\xF3nico que utiliz\xF3 para registrarse"),n(),e(5,`
        `),n(),e(6,`
        `),a(7,"form",5),A("ngSubmit",function(){N(t);let c=x();return q(c.requestReset())}),e(8,`
          `),a(9,"div",6),e(10,`
            `),a(11,"label",7),e(12,"Correo electr\xF3nico"),n(),e(13,`
            `),f(14,"input",8),h(15,"translate"),e(16,`

            `),w(17),e(18,`
            `),l(19,Nt,8,4),n(),e(20,`
          `),a(21,"button",9),e(22,`
            Restablecer la contrase\xF1a
          `),n(),e(23,`
        `),n(),e(24,`
      `)}if(i&2){let t=x();o(7),p("formGroup",t.resetRequestForm),o(7),p("placeholder",E(C(15,5,"global.form.email.placeholder"))),o(3);let d=S(t.resetRequestForm.get("email"));o(2),s(d.invalid&&(d.dirty||d.touched)?19:-1),o(2),p("disabled",t.resetRequestForm.invalid)}}function Lt(i,r){i&1&&(e(0,`
        `),a(1,"div",14),e(2,`
          `),a(3,"span",15),e(4,"Revise su correo electr\xF3nico para obtener m\xE1s informaci\xF3n sobre c\xF3mo restablecer su contrase\xF1a."),n(),e(5,`
        `),n(),e(6,`
      `))}var ae=class i{constructor(){this.email=Z.required("email");this.success=g(!1);this.passwordResetInitService=u(he);this.fb=u(Ae);this.resetRequestForm=this.fb.group({email:["",[m.required,m.minLength(5),m.maxLength(254),m.email]]})}ngAfterViewInit(){this.email().nativeElement.focus()}requestReset(){this.passwordResetInitService.save(this.resetRequestForm.get(["email"]).value).subscribe({next:()=>this.success.set(!0),error(){}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["jhi-password-reset-init"]],viewQuery:function(t,d){t&1&&Y(d.email,Tt,5),t&2&&$()},decls:16,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-md-8"],["jhiTranslate","reset.request.title"],[1,"alert","alert-warning"],["jhiTranslate","reset.request.messages.info"],["name","form",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","email","jhiTranslate","global.form.email.label",1,"form-label"],["type","email","id","email","name","email","formControlName","email","data-cy","emailResetPassword",1,"form-control",3,"placeholder"],["type","submit","data-cy","submit","jhiTranslate","reset.request.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","global.messages.validate.email.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.invalid",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.maxlength",1,"form-text","text-danger"],[1,"alert","alert-success"],["jhiTranslate","reset.request.messages.success"]],template:function(t,d){t&1&&(a(0,"div"),e(1,`
  `),a(2,"div",0),e(3,`
    `),a(4,"div",1),e(5,`
      `),a(6,"h1",2),e(7,"Restablecer su contrase\xF1a"),n(),e(8,`

      `),f(9,"jhi-alert-error"),e(10,`

      `),l(11,qt,25,8)(12,Lt,7,0),n(),e(13,`
  `),n(),e(14,`
`),n(),e(15,`
`)),t&2&&(o(11),s(d.success()?12:11))},dependencies:[F,T,pe,B,k,I,D,V,O,G,K],encapsulation:2})}};var At={path:"reset/request",component:ae,title:"global.menu.account.password"},Ge=At;var we="https://www.jhipster.tech/problem",Oe=`${we}/email-already-used`,Be=`${we}/login-already-used`,Zn=`${we}/invalid-password`;var Ce=class i{constructor(){this.http=u(M);this.applicationConfigService=u(U)}save(r){return this.http.post(this.applicationConfigService.getEndpointFor("api/register"),r)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=j({token:i,factory:i.\u0275fac,providedIn:"root"})}};var Mt=["login"];function It(i,r){i&1&&(e(0,`
        `),a(1,"div",7),e(2,`
          `),a(3,"strong"),e(4,"\xA1Registro guardado!"),n(),e(5,` Por favor, revise su correo electr\xF3nico para confirmar.
        `),n(),e(6,`
      `))}function Dt(i,r){i&1&&(e(0,`
        `),a(1,"div",8),e(2,`
          `),a(3,"strong"),e(4,"\xA1El registro ha fallado!"),n(),e(5,` Por favor, int\xE9ntelo de nuevo m\xE1s tarde.
        `),n(),e(6,`
      `))}function Vt(i,r){i&1&&(e(0,`
        `),a(1,"div",9),e(2,`
          `),a(3,"strong"),e(4,"\xA1El nombre de usuario ya est\xE1 registrado!"),n(),e(5,` Por favor, escoja otro usuario.
        `),n(),e(6,`
      `))}function kt(i,r){i&1&&(e(0,`
        `),a(1,"div",10),e(2,`
          `),a(3,"strong"),e(4,"\xA1El correo electr\xF3nico ya est\xE1 en uso!"),n(),e(5,` Por favor, escoja otro email.
        `),n(),e(6,`
      `))}function Gt(i,r){i&1&&(e(0,`
        `),a(1,"div",11),e(2,`
          \xA1La contrase\xF1a y la confirmaci\xF3n de contrase\xF1a no coinciden!
        `),n(),e(3,`
      `))}function Ot(i,r){i&1&&(e(0,`
                  `),a(1,"small",24),e(2,"Su nombre de usuario es obligatorio."),n(),e(3,`
                `))}function Bt(i,r){i&1&&(e(0,`
                  `),a(1,"small",25),e(2,"Su nombre de usuario debe tener al menos 1 caracter."),n(),e(3,`
                `))}function Ut(i,r){i&1&&(e(0,`
                  `),a(1,"small",26),e(2,"Su nombre de usuario no puede tener m\xE1s de 50 caracteres."),n(),e(3,`
                `))}function Kt(i,r){i&1&&(e(0,`
                  `),a(1,"small",27),e(2,"Su nombre de usuario no es v\xE1lido."),n(),e(3,`
                `))}function zt(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,Ot,4,0),l(4,Bt,4,0),l(5,Ut,4,0),l(6,Kt,4,0),n(),e(7,`
            `)),i&2){x();let t=b(11);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1),o(),s(!(t==null||t.errors==null)&&t.errors.pattern?6:-1)}}function Ht(i,r){i&1&&(e(0,`
                  `),a(1,"small",28),e(2,"Se requiere un correo electr\xF3nico."),n(),e(3,`
                `))}function Qt(i,r){i&1&&(e(0,`
                  `),a(1,"small",29),e(2,"Su correo electr\xF3nico no es v\xE1lido."),n(),e(3,`
                `))}function Yt(i,r){i&1&&(e(0,`
                  `),a(1,"small",30),e(2,"Se requiere que su correo electr\xF3nico tenga por lo menos 5 caracteres"),n(),e(3,`
                `))}function $t(i,r){i&1&&(e(0,`
                  `),a(1,"small",31),e(2,"Su correo electr\xF3nico no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function Zt(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,Ht,4,0),l(4,Qt,4,0),l(5,Yt,4,0),l(6,$t,4,0),n(),e(7,`
            `)),i&2){x();let t=b(23);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.invalid?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?5:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?6:-1)}}function Wt(i,r){i&1&&(e(0,`
                  `),a(1,"small",32),e(2,"Se requiere que ingrese una contrase\xF1a."),n(),e(3,`
                `))}function Jt(i,r){i&1&&(e(0,`
                  `),a(1,"small",33),e(2,"Se requiere que su contrase\xF1a tenga por lo menos 4 caracteres"),n(),e(3,`
                `))}function Xt(i,r){i&1&&(e(0,`
                  `),a(1,"small",34),e(2,"Su contrase\xF1a no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function ei(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,Wt,4,0),l(4,Jt,4,0),l(5,Xt,4,0),n(),e(6,`
            `)),i&2){x();let t=b(35);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function ti(i,r){i&1&&(e(0,`
                  `),a(1,"small",35),e(2,"Se requiere que confirme la contrase\xF1a."),n(),e(3,`
                `))}function ii(i,r){i&1&&(e(0,`
                  `),a(1,"small",36),e(2,"Se requiere que su contrase\xF1a de confirmaci\xF3n tenga por lo menos 4 caracteres"),n(),e(3,`
                `))}function ni(i,r){i&1&&(e(0,`
                  `),a(1,"small",37),e(2,"Su contrase\xF1a de confirmaci\xF3n no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function ai(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,ti,4,0),l(4,ii,4,0),l(5,ni,4,0),n(),e(6,`
            `)),i&2){x();let t=b(49);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function ri(i,r){if(i&1){let t=L();e(0,`
        `),a(1,"form",12),A("ngSubmit",function(){N(t);let c=x();return q(c.register())}),e(2,`
          `),a(3,"div",13),e(4,`
            `),a(5,"label",14),e(6,"Usuario"),n(),e(7,`
            `),f(8,"input",15),h(9,"translate"),e(10,`

            `),w(11),e(12,`
            `),l(13,zt,8,4),n(),e(14,`

          `),a(15,"div",13),e(16,`
            `),a(17,"label",16),e(18,"Correo electr\xF3nico"),n(),e(19,`
            `),f(20,"input",17),h(21,"translate"),e(22,`

            `),w(23),e(24,`
            `),l(25,Zt,8,4),n(),e(26,`

          `),a(27,"div",13),e(28,`
            `),a(29,"label",18),e(30,"Nueva contrase\xF1a"),n(),e(31,`
            `),f(32,"input",19),h(33,"translate"),e(34,`

            `),w(35),e(36,`
            `),l(37,ei,7,3),f(38,"jhi-password-strength-bar",20),e(39,`
          `),n(),e(40,`

          `),a(41,"div",13),e(42,`
            `),a(43,"label",21),e(44,"Confirmaci\xF3n de la nueva contrase\xF1a"),n(),e(45,`
            `),f(46,"input",22),h(47,"translate"),e(48,`

            `),w(49),e(50,`
            `),l(51,ai,7,3),n(),e(52,`

          `),a(53,"button",23),e(54,`
            Crear la cuenta
          `),n(),e(55,`
        `),n(),e(56,`
      `)}if(i&2){let t=x();o(),p("formGroup",t.registerForm),o(7),p("placeholder",E(C(9,15,"global.form.username.placeholder"))),o(3);let d=S(t.registerForm.get("login"));o(2),s(d.invalid&&(d.dirty||d.touched)?13:-1),o(7),p("placeholder",E(C(21,18,"global.form.email.placeholder"))),o(3);let c=S(t.registerForm.get("email"));o(2),s(c.invalid&&(c.dirty||c.touched)?25:-1),o(7),p("placeholder",E(C(33,21,"global.form.newpassword.placeholder"))),o(3);let _=S(t.registerForm.get("password"));o(2),s(_.invalid&&(_.dirty||_.touched)?37:-1),o(),p("passwordToCheck",_.value),o(8),p("placeholder",E(C(47,24,"global.form.confirmpassword.placeholder"))),o(3);let P=S(t.registerForm.get("confirmPassword"));o(2),s(P.invalid&&(P.dirty||P.touched)?51:-1),o(2),p("disabled",t.registerForm.invalid)}}var re=class i{constructor(){this.login=Z.required("login");this.doNotMatch=g(!1);this.error=g(!1);this.errorEmailExists=g(!1);this.errorUserExists=g(!1);this.success=g(!1);this.registerForm=new H({login:new v("",{nonNullable:!0,validators:[m.required,m.minLength(1),m.maxLength(50),m.pattern("^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$")]}),email:new v("",{nonNullable:!0,validators:[m.required,m.minLength(5),m.maxLength(254),m.email]}),password:new v("",{nonNullable:!0,validators:[m.required,m.minLength(4),m.maxLength(50)]}),confirmPassword:new v("",{nonNullable:!0,validators:[m.required,m.minLength(4),m.maxLength(50)]})});this.translateService=u(me);this.registerService=u(Ce)}ngAfterViewInit(){this.login().nativeElement.focus()}register(){this.doNotMatch.set(!1),this.error.set(!1),this.errorEmailExists.set(!1),this.errorUserExists.set(!1);let{password:r,confirmPassword:t}=this.registerForm.getRawValue();if(r===t){let{login:d,email:c}=this.registerForm.getRawValue();this.registerService.save({login:d,email:c,password:r,langKey:this.translateService.getCurrentLang()}).subscribe({next:()=>this.success.set(!0),error:_=>this.processError(_)})}else this.doNotMatch.set(!0)}processError(r){r.status===400&&r.error.type===Be?this.errorUserExists.set(!0):r.status===400&&r.error.type===Oe?this.errorEmailExists.set(!0):this.error.set(!0)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["jhi-register"]],viewQuery:function(t,d){t&1&&Y(d.login,Mt,5),t&2&&$()},decls:39,vars:6,consts:[[1,"d-flex","justify-content-center"],[1,"col-md-8"],["data-cy","registerTitle","jhiTranslate","register.title"],[1,"mt-3","alert","alert-warning"],["jhiTranslate","global.messages.info.authenticated.prefix"],["routerLink","/login","jhiTranslate","global.messages.info.authenticated.link",1,"alert-link"],["jhiTranslate","global.messages.info.authenticated.suffix"],["jhiTranslate","register.messages.success",1,"alert","alert-success"],["jhiTranslate","register.messages.error.fail",1,"alert","alert-danger"],["jhiTranslate","register.messages.error.userexists",1,"alert","alert-danger"],["jhiTranslate","register.messages.error.emailexists",1,"alert","alert-danger"],["jhiTranslate","global.messages.error.dontmatch",1,"alert","alert-danger"],["name","form",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","login","jhiTranslate","global.form.username.label",1,"form-label"],["type","text","id","login","name","login","formControlName","login","data-cy","username",1,"form-control",3,"placeholder"],["for","email","jhiTranslate","global.form.email.label",1,"form-label"],["type","email","id","email","name","email","formControlName","email","data-cy","email",1,"form-control",3,"placeholder"],["for","password","jhiTranslate","global.form.newpassword.label",1,"form-label"],["type","password","id","password","name","password","formControlName","password","data-cy","firstPassword",1,"form-control",3,"placeholder"],[3,"passwordToCheck"],["for","confirmPassword","jhiTranslate","global.form.confirmpassword.label",1,"form-label"],["type","password","id","confirmPassword","name","confirmPassword","formControlName","confirmPassword","data-cy","secondPassword",1,"form-control",3,"placeholder"],["type","submit","data-cy","submit","jhiTranslate","register.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","register.messages.validate.login.required",1,"form-text","text-danger"],["jhiTranslate","register.messages.validate.login.minlength",1,"form-text","text-danger"],["jhiTranslate","register.messages.validate.login.maxlength",1,"form-text","text-danger"],["jhiTranslate","register.messages.validate.login.pattern",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.invalid",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.maxlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.newpassword.maxlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.confirmpassword.maxlength",1,"form-text","text-danger"]],template:function(t,d){t&1&&(a(0,"div"),e(1,`
  `),a(2,"div",0),e(3,`
    `),a(4,"div",1),e(5,`
      `),a(6,"h1",2),e(7,"Registro"),n(),e(8,`

      `),l(9,It,7,0),l(10,Dt,7,0),l(11,Vt,7,0),l(12,kt,7,0),l(13,Gt,4,0),n(),e(14,`
  `),n(),e(15,`

  `),a(16,"div",0),e(17,`
    `),a(18,"div",1),e(19,`
      `),l(20,ri,57,27),a(21,"div",3),e(22,`
        `),a(23,"span",4),e(24,"Si desea "),n(),e(25,`
        `),a(26,"a",5),e(27,"iniciar sesi\xF3n"),n(),a(28,"span",6),e(29,", puede intentar con las cuentas predeterminadas:"),f(30,"br"),e(31,`- Administrador (usuario="admin" y contrase\xF1a="admin")
          `),f(32,"br"),e(33,'- Usuario (usuario="user" y contrase\xF1a="user").'),n(),e(34,`
      `),n(),e(35,`
    `),n(),e(36,`
  `),n(),e(37,`
`),n(),e(38,`
`)),t&2&&(o(9),s(d.success()?9:-1),o(),s(d.error()?10:-1),o(),s(d.errorUserExists()?11:-1),o(),s(d.errorEmailExists()?12:-1),o(),s(d.doNotMatch()?13:-1),o(7),s(d.success()?-1:20))},dependencies:[F,T,W,B,k,I,D,V,O,G,z,K],encapsulation:2})}};var oi={path:"register",component:re,title:"register.title"},Ue=oi;var li=i=>({username:i});function si(i,r){if(i&1&&(e(0,`
        `),a(1,"h2",2),e(2,`
          Ajustes del usuario [`),a(3,"strong"),e(4),n(),e(5,`]
        `),n(),e(6,`
      `)),i&2){let t=x();o(),p("translateValues",se(2,li,t.settingsForm.value.login)),o(3),ee(t.settingsForm.value.login)}}function di(i,r){i&1&&(e(0,`
        `),a(1,"div",3)(2,"strong"),e(3,"\xA1Ajustes guardados!"),n()(),e(4,`
      `))}function mi(i,r){i&1&&(e(0,`
                  `),a(1,"small",13),e(2,"Se requiere que ingrese su nombre."),n(),e(3,`
                `))}function ci(i,r){i&1&&(e(0,`
                  `),a(1,"small",14),e(2,"Se requiere que su nombre tenga por lo menos 1 caracter"),n(),e(3,`
                `))}function ui(i,r){i&1&&(e(0,`
                  `),a(1,"small",15),e(2,"Su nombre no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function pi(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,mi,4,0),l(4,ci,4,0),l(5,ui,4,0),n(),e(6,`
            `)),i&2){x();let t=b(11);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function fi(i,r){i&1&&(e(0,`
                  `),a(1,"small",16),e(2,"Se requiere que ingrese sus apellidos."),n(),e(3,`
                `))}function xi(i,r){i&1&&(e(0,`
                  `),a(1,"small",17),e(2,"Se requiere que sus apellidos tengan por lo menos 1 caracter"),n(),e(3,`
                `))}function gi(i,r){i&1&&(e(0,`
                  `),a(1,"small",18),e(2,"Sus apellidos no pueden tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function _i(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,fi,4,0),l(4,xi,4,0),l(5,gi,4,0),n(),e(6,`
            `)),i&2){x();let t=b(23);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?5:-1)}}function vi(i,r){i&1&&(e(0,`
                  `),a(1,"small",19),e(2,"Se requiere un correo electr\xF3nico."),n(),e(3,`
                `))}function hi(i,r){i&1&&(e(0,`
                  `),a(1,"small",20),e(2,"Su correo electr\xF3nico no es v\xE1lido."),n(),e(3,`
                `))}function Ci(i,r){i&1&&(e(0,`
                  `),a(1,"small",21),e(2,"Se requiere que su correo electr\xF3nico tenga por lo menos 5 caracteres"),n(),e(3,`
                `))}function wi(i,r){i&1&&(e(0,`
                  `),a(1,"small",22),e(2,"Su correo electr\xF3nico no puede tener m\xE1s de 50 caracteres"),n(),e(3,`
                `))}function Si(i,r){if(i&1&&(e(0,`
              `),a(1,"div"),e(2,`
                `),l(3,vi,4,0),l(4,hi,4,0),l(5,Ci,4,0),l(6,wi,4,0),n(),e(7,`
            `)),i&2){x();let t=b(35);o(3),s(!(t==null||t.errors==null)&&t.errors.required?3:-1),o(),s(!(t==null||t.errors==null)&&t.errors.email?4:-1),o(),s(!(t==null||t.errors==null)&&t.errors.minlength?5:-1),o(),s(!(t==null||t.errors==null)&&t.errors.maxlength?6:-1)}}function bi(i,r){if(i&1&&(e(0,`
                  `),a(1,"option",25),e(2),h(3,"findLanguageFromKey"),n(),e(4,`
                `)),i&2){let t=r.$implicit;o(),p("value",t),o(),ee(C(3,2,t))}}function Ei(i,r){if(i&1&&(e(0,`
            `),a(1,"div",5),e(2,`
              `),a(3,"label",23),e(4,"Idioma"),n(),e(5,`
              `),a(6,"select",24),e(7,`
                `),Fe(8,bi,5,4,null,null,Te),n(),e(10,`
            `),n(),e(11,`
          `)),i&2){let t=x(2);o(8),Re(t.languages)}}function yi(i,r){if(i&1){let t=L();e(0,`
        `),a(1,"form",4),A("ngSubmit",function(){N(t);let c=x();return q(c.save())}),e(2,`
          `),a(3,"div",5),e(4,`
            `),a(5,"label",6),e(6,"Nombre"),n(),e(7,`
            `),f(8,"input",7),h(9,"translate"),e(10,`

            `),w(11),e(12,`
            `),l(13,pi,7,3),n(),e(14,`

          `),a(15,"div",5),e(16,`
            `),a(17,"label",8),e(18,"Apellidos"),n(),e(19,`
            `),f(20,"input",9),h(21,"translate"),e(22,`

            `),w(23),e(24,`
            `),l(25,_i,7,3),n(),e(26,`

          `),a(27,"div",5),e(28,`
            `),a(29,"label",10),e(30,"Correo electr\xF3nico"),n(),e(31,`
            `),f(32,"input",11),h(33,"translate"),e(34,`

            `),w(35),e(36,`
            `),l(37,Si,8,4),n(),e(38,`

          `),l(39,Ei,12,0),a(40,"button",12),e(41,`
            Guardar
          `),n(),e(42,`
        `),n(),e(43,`
      `)}if(i&2){let t=x();o(),p("formGroup",t.settingsForm),o(7),p("placeholder",E(C(9,12,"settings.form.firstname.placeholder"))),o(3);let d=S(t.settingsForm.get("firstName"));o(2),s(d.invalid&&(d.dirty||d.touched)?13:-1),o(7),p("placeholder",E(C(21,15,"settings.form.lastname.placeholder"))),o(3);let c=S(t.settingsForm.get("lastName"));o(2),s(c.invalid&&(c.dirty||c.touched)?25:-1),o(7),p("placeholder",E(C(33,18,"global.form.email.placeholder"))),o(3);let _=S(t.settingsForm.get("email"));o(2),s(_.invalid&&(_.dirty||_.touched)?37:-1),o(2),s(t.languages&&t.languages.length>0?39:-1),o(),p("disabled",t.settingsForm.invalid)}}var Q={},oe=class i{constructor(){this.success=g(!1);this.languages=Ie;this.settingsForm=new H({firstName:new v(Q.firstName,{nonNullable:!0,validators:[m.required,m.minLength(1),m.maxLength(50)]}),lastName:new v(Q.lastName,{nonNullable:!0,validators:[m.required,m.minLength(1),m.maxLength(50)]}),email:new v(Q.email,{nonNullable:!0,validators:[m.required,m.minLength(5),m.maxLength(254),m.email]}),langKey:new v(Q.langKey,{nonNullable:!0}),activated:new v(Q.activated,{nonNullable:!0}),authorities:new v(Q.authorities,{nonNullable:!0}),imageUrl:new v(Q.imageUrl,{nonNullable:!0}),login:new v(Q.login,{nonNullable:!0})});this.accountService=u(ce);this.translateService=u(me)}ngOnInit(){this.accountService.identity().subscribe(r=>{r&&this.settingsForm.patchValue(r)})}save(){this.success.set(!1);let r=this.settingsForm.getRawValue();this.accountService.save(r).subscribe({next:()=>{this.success.set(!0),this.accountService.authenticate(r),r.langKey!==this.translateService.getCurrentLang()&&this.translateService.use(r.langKey)},error(){}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["jhi-settings"]],decls:14,vars:3,consts:[[1,"d-flex","justify-content-center"],[1,"col-md-8"],["jhiTranslate","settings.title",3,"translateValues"],["jhiTranslate","settings.messages.success",1,"alert","alert-success"],["name","form","novalidate","",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","firstName","jhiTranslate","settings.form.firstname",1,"form-label"],["type","text","id","firstName","name","firstName","formControlName","firstName","data-cy","firstname",1,"form-control",3,"placeholder"],["for","lastName","jhiTranslate","settings.form.lastname",1,"form-label"],["type","text","id","lastName","name","lastName","formControlName","lastName","data-cy","lastname",1,"form-control",3,"placeholder"],["for","email","jhiTranslate","global.form.email.label",1,"form-label"],["type","email","id","email","name","email","formControlName","email","data-cy","email",1,"form-control",3,"placeholder"],["type","submit","data-cy","submit","jhiTranslate","settings.form.button",1,"btn","btn-primary",3,"disabled"],["jhiTranslate","settings.messages.validate.firstname.required",1,"form-text","text-danger"],["jhiTranslate","settings.messages.validate.firstname.minlength",1,"form-text","text-danger"],["jhiTranslate","settings.messages.validate.firstname.maxlength",1,"form-text","text-danger"],["jhiTranslate","settings.messages.validate.lastname.required",1,"form-text","text-danger"],["jhiTranslate","settings.messages.validate.lastname.minlength",1,"form-text","text-danger"],["jhiTranslate","settings.messages.validate.lastname.maxlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.required",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.invalid",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.minlength",1,"form-text","text-danger"],["jhiTranslate","global.messages.validate.email.maxlength",1,"form-text","text-danger"],["for","langKey","jhiTranslate","settings.form.language"],["id","langKey","name","langKey","formControlName","langKey","data-cy","langKey",1,"form-control"],[3,"value"]],template:function(t,d){t&1&&(a(0,"div"),e(1,`
  `),a(2,"div",0),e(3,`
    `),a(4,"div",1),e(5,`
      `),l(6,si,7,4),l(7,di,5,0),f(8,"jhi-alert-error"),e(9,`

      `),l(10,yi,44,21),n(),e(11,`
  `),n(),e(12,`
`),n(),e(13,`
`)),t&2&&(o(6),s(d.settingsForm.value.login?6:-1),o(),s(d.success()?7:-1),o(3),s(d.settingsForm.value.login?10:-1))},dependencies:[F,T,pe,B,k,qe,Le,I,Ne,D,V,O,G,K,Me],encapsulation:2})}};var Ti={path:"settings",component:oe,title:"global.menu.account.settings",canActivate:[ue]},Ke=Ti;var Fi=[De,Ve,ke,Ge,Ue,Ke],Ia=Fi;export{Ia as default};
