"use strict";(self["webpackChunkaplikacja_sor_skok"]=self["webpackChunkaplikacja_sor_skok"]||[]).push([[421],{3839:(e,t,s)=>{s.d(t,{N:()=>l});var a=s(4434);function l(e){a.Z.create({message:`⚠ ${e}`,classes:"full-width text-center bg-negative"})}},9421:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var a=s(3673);const l={class:"q-gutter-y-xl q-col-gutter-md q-pa-xl fit row wrap justify-center items-start content-start q-"},n={class:"col-grow col-sm-9"},o={class:"q-gutter-md"},r=(0,a._)("h3",null,"Logowanie",-1);function u(e,t,s,u,i,c){const d=(0,a.up)("q-input"),p=(0,a.up)("q-btn"),m=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(m,null,{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",n,[(0,a._)("div",o,[r,(0,a.Wm)(d,{modelValue:i.email,"onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),type:"text",label:"login"},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),type:"password",label:"password"},null,8,["modelValue"]),(0,a.Wm)(p,{class:"bg-primary text-white",type:"button",label:"zaloguj się",onClick:t[2]||(t[2]=e=>c.signUp())})])])])])),_:1})}s(6801);var i=s(3839),c=s(2490);const d={data(){return{email:"",password:""}},methods:{signUp(){c.auth.signInWithEmailAndPassword(this.email.trim(),this.password.trim()).then((e=>{const t=c.db.collection("teachers").doc(e.user.uid);t.get().then((e=>{e.exists?this.$router.push("/nauczyciel"):this.$router.push("/uczen")}))})).catch((e=>{(0,i.N)(e)}))}}};var p=s(4260),m=s(4379),h=s(6805),g=s(4607),w=s(7518),k=s.n(w);const b=(0,p.Z)(d,[["render",u]]),f=b;k()(d,"components",{QPage:m.Z,QInput:h.Z,QBtn:g.Z})}}]);