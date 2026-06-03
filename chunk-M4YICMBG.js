import{b as C,c as T,e as u,f as N,g as j,h as k,j as d,k as A,m as I,n as L,u as M}from"./chunk-L7QYCLNK.js";import{a as G}from"./chunk-2NEHG2VC.js";import"./chunk-W7N2MPT6.js";import{a as B}from"./chunk-U3JIWSUT.js";import{b as R}from"./chunk-PDQY6DJ2.js";import"./chunk-GN5HSKJX.js";import{d as _,e as V}from"./chunk-56XJVXYY.js";import{A as D,B as q}from"./chunk-FINXBEYE.js";import{Ac as F,Jb as E,Qa as a,Tb as y,Ub as w,W as l,Yb as e,db as h,gc as p,ma as v,mc as f,nc as g,qb as b,rb as S,wb as m,xb as t,yb as i,zb as s}from"./chunk-T6YFHVDB.js";import"./chunk-C6Q5SG76.js";var P=["username"];function O(o,c){o&1&&(e(0,`
        `),t(1,"div",19),e(2,`
          `),t(3,"strong"),e(4,"\xA1El inicio de sesi\xF3n ha fallado!"),i(),e(5,` Por favor, revise las credenciales e intente de nuevo.
        `),i(),e(6,`
      `))}var x=class o{constructor(){this.username=F.required("username");this.authenticationError=v(!1);this.loginForm=new k({username:new d("",{nonNullable:!0,validators:[u.required]}),password:new d("",{nonNullable:!0,validators:[u.required]}),rememberMe:new d(!1,{nonNullable:!0,validators:[u.required]})});this.accountService=l(R);this.loginService=l(B);this.router=l(_)}ngOnInit(){this.accountService.identity().subscribe(()=>{this.accountService.isAuthenticated()&&this.router.navigate([""])})}ngAfterViewInit(){this.username().nativeElement.focus()}login(){this.loginService.login(this.loginForm.getRawValue()).subscribe({next:()=>{this.authenticationError.set(!1),this.router.currentNavigation()||this.router.navigate([""])},error:()=>this.authenticationError.set(!0)})}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=h({type:o,selectors:[["jhi-login"]],viewQuery:function(n,r){n&1&&y(r.username,P,5),n&2&&w()},decls:63,vars:10,consts:[[1,"d-flex","justify-content-center"],[1,"col-lg-6","col-md-8","col-sm-10"],["data-cy","loginTitle","jhiTranslate","login.title"],[1,"form",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","username","jhiTranslate","global.form.username.label",1,"username-label"],["type","text","name","username","id","username","formControlName","username","data-cy","username",1,"form-control",3,"placeholder"],["for","password","jhiTranslate","login.form.password"],["type","password","name","password","id","password","formControlName","password","data-cy","password",1,"form-control",3,"placeholder"],[1,"form-check"],["for","rememberMe",1,"form-check-label"],["type","checkbox","name","rememberMe","id","rememberMe","formControlName","rememberMe",1,"form-check-input"],["jhiTranslate","login.form.rememberme"],["type","submit","data-cy","submit","jhiTranslate","login.form.button",1,"btn","btn-primary"],[1,"mt-3","alert","alert-warning"],["routerLink","/account/reset/request","data-cy","forgetYourPasswordSelector","jhiTranslate","login.password.forgot",1,"alert-link"],[1,"alert","alert-warning"],["jhiTranslate","global.messages.info.register.noaccount"],["routerLink","/account/register","jhiTranslate","global.messages.info.register.link",1,"alert-link"],["data-cy","loginError","jhiTranslate","login.messages.error.authentication",1,"alert","alert-danger"]],template:function(n,r){n&1&&(t(0,"div"),e(1,`
  `),t(2,"div",0),e(3,`
    `),t(4,"div",1),e(5,`
      `),t(6,"h1",2),e(7,"Iniciar la sesi\xF3n"),i(),e(8,`
      `),b(9,O,7,0),t(10,"form",3),E("ngSubmit",function(){return r.login()}),e(11,`
        `),t(12,"div",4),e(13,`
          `),t(14,"label",5),e(15,"Usuario"),i(),e(16,`
          `),s(17,"input",6),f(18,"translate"),e(19,`
        `),i(),e(20,`

        `),t(21,"div",4),e(22,`
          `),t(23,"label",7),e(24,"Contrase\xF1a"),i(),e(25,`
          `),s(26,"input",8),f(27,"translate"),e(28,`
        `),i(),e(29,`

        `),t(30,"div",9),e(31,`
          `),t(32,"label",10),e(33,`
            `),s(34,"input",11),e(35,`
            `),t(36,"span",12),e(37,"Iniciar la sesi\xF3n autom\xE1ticamente"),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`

        `),t(41,"button",13),e(42,"Iniciar sesi\xF3n"),i(),e(43,`
      `),i(),e(44,`
      `),t(45,"div",14),e(46,`
        `),t(47,"a",15),e(48,"\xBFHa olvidado su contrase\xF1a?"),i(),e(49,`
      `),i(),e(50,`

      `),t(51,"div",16),e(52,`
        `),t(53,"span",17),e(54,"\xBFA\xFAn no tienes una cuenta?"),i(),e(55,`
        `),t(56,"a",18),e(57,"Crea una cuenta"),i(),e(58,`
      `),i(),e(59,`
    `),i(),e(60,`
  `),i(),e(61,`
`),i(),e(62,`
`)),n&2&&(a(9),S(r.authenticationError()?9:-1),a(),m("formGroup",r.loginForm),a(7),m("placeholder",p(g(18,6,"global.form.username.placeholder"))),a(9),m("placeholder",p(g(27,8,"login.form.password.placeholder"))))},dependencies:[G,q,M,A,T,C,N,j,L,I,V,D],encapsulation:2})}};export{x as default};
