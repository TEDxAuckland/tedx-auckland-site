(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["partner-registration"],{"11e9":function(e,t,n){var s=n("52a7"),r=n("4630"),i=n("6821"),a=n("6a99"),o=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?l:function(e,t){if(e=i(e),t=a(t,!0),c)try{return l(e,t)}catch(n){}if(o(e,t))return r(!s.f.call(e,t),e[t])}},"456d":function(e,t,n){var s=n("4bf8"),r=n("0d58");n("5eda")("keys",function(){return function(e){return r(s(e))}})},"5dbc":function(e,t,n){var s=n("d3f4"),r=n("8b97").set;e.exports=function(e,t,n){var i,a=t.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&s(i)&&r&&r(e,i),e}},"5eda":function(e,t,n){var s=n("5ca1"),r=n("8378"),i=n("79e5");e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],a={};a[e]=t(n),s(s.S+s.F*i(function(){n(1)}),"Object",a)}},"75cd":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var s={computed:{personName:function(){return this.person.lastName?"".concat(this.person.firstName," ").concat(this.person.lastName):this.person.firstName}}}},8324:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"pending"===e.ticketOffer.status||"purchased"===e.ticketOffer.status?n("partner-registration-pending",{attrs:{event:e.event,person:e.person,ticketOffer:e.ticketOffer}}):"surrendered"===e.ticketOffer.status?n("partner-registration-surrendered",{attrs:{event:e.event,person:e.person}}):e._e()},r=[],i=n("cebc"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("page-content",{attrs:{contentId:e.contentId}}),n("section",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-6"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[n("h2",{staticClass:"title has-text-poppins is-5 has-red-stripe"},[e._v("\n            let's first confirm a few details about you\n          ")]),n("b-field",{attrs:{label:"First Name",type:{"is-danger":e.$v.personAnswers.firstName.$error},message:e.$v.personAnswers.firstName.$error?"Please enter your first name":""}},[n("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account"},on:{blur:function(t){return e.$v.personAnswers.firstName.$touch()}},model:{value:e.personAnswers.firstName,callback:function(t){e.$set(e.personAnswers,"firstName",t)},expression:"personAnswers.firstName"}})],1),n("b-field",{attrs:{label:"Last Name",type:{"is-danger":e.$v.personAnswers.lastName.$error},message:e.$v.personAnswers.lastName.$error?"Please enter your last name":""}},[n("b-input",{attrs:{placeholder:"Miles",type:"text",icon:"account"},on:{blur:function(t){return e.$v.personAnswers.lastName.$touch()}},model:{value:e.personAnswers.lastName,callback:function(t){e.$set(e.personAnswers,"lastName",t)},expression:"personAnswers.lastName"}})],1),n("b-field",{attrs:{label:"Email",type:{"is-danger":e.$v.personAnswers.email.$error||e.errors.email},message:e.errors.email?e.errors.email:""}},[n("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email"},on:{blur:function(t){return e.$v.personAnswers.email.$touch()}},model:{value:e.personAnswers.email,callback:function(t){e.$set(e.personAnswers,"email",t)},expression:"personAnswers.email"}})],1),n("fieldset",[n("legend",{staticClass:"label"},[e._v("\n              Do you have any Dietary Requirements?\n            ")]),n("div",{staticClass:"checkbox-row"},e._l(e.dietaryRequirements,function(t){return n("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.personAnswers.data.dietaryRequirements,callback:function(t){e.$set(e.personAnswers.data,"dietaryRequirements",t)},expression:"personAnswers.data.dietaryRequirements"}},[e._v("\n                "+e._s(t)+"\n              ")])}),1)]),n("fieldset",[n("legend",{staticClass:"label"},[e._v("\n              Do you have any Accessability Requirements?\n            ")]),n("div",{staticClass:"checkbox-row"},e._l(e.accessabilityRequirements,function(t){return n("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.personAnswers.data.accessabilityRequirements,callback:function(t){e.$set(e.personAnswers.data,"accessabilityRequirements",t)},expression:"personAnswers.data.accessabilityRequirements"}},[e._v("\n                "+e._s(t)+"\n              ")])}),1)]),e.alreadyRegistered?n("div",{staticClass:"has-text-right has-text-success is-success already-registered"},[n("b-icon",{attrs:{icon:"check-circle",type:"is-success",size:"is-small"}}),e._v("\n            You've already registerd\n          ")],1):e._e(),n("div",{staticClass:"actions-row buttons is-pulled-right"},[n("button",{staticClass:"button is-medium",on:{click:function(t){t.preventDefault(),e.rejectModalActive=!0}}},[e._v("\n              "+e._s(e.rejectText)+"\n            ")]),n("input",{staticClass:"button is-medium is-primary",attrs:{type:"submit"},domProps:{value:e.acceptText}})])],1)])])]),n("b-modal",{attrs:{active:e.rejectModalActive},on:{"update:active":function(t){e.rejectModalActive=t}}},[n("div",{staticClass:"modal-card center-modal"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("Are You Sure")]),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(t){t.preventDefault(),e.rejectModalActive=!1}}})]),n("section",{staticClass:"modal-card-body"},[n("p",[e._v("\n          The person who invited you will be notified so they can invite\n          someone else.\n        ")])]),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button is-primary",on:{click:function(t){t.preventDefault(),e.rejectModalActive=!1}}},[e._v("\n          cancel\n        ")]),n("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.rejectTicket()}}},[e._v("\n          Give Up Ticket\n        ")])])])])],1)},o=[],c=(n("7514"),n("f568")),l=n("3c34"),u=n("6c3f"),p=n("323e"),f=n.n(p),d=n("b5ae"),m=n("5003"),v=n("2f62"),b={name:"PartnerRegistrationPending",components:{PageContent:c["a"]},validations:{personAnswers:{firstName:{required:d["required"]},lastName:{required:d["required"]},email:{required:d["required"],email:d["email"]}}},mixins:[m["a"]],data:function(){return{personAnswers:this.person,rejectModalActive:!1,contentName:"partner_registration_page_content",errors:{}}},props:{event:{type:Object,required:!0},person:{type:Object,required:!0},ticketOffer:{type:Object,required:!0}},methods:{register:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(f.a.start(),u["a"].updateProfile(this.person.id,{person:{firstName:this.personAnswers.firstName,lastName:this.personAnswers.lastName,email:this.personAnswers.email},profile:this.personAnswers.data}).then(function(){return f.a.done()}).catch(function(e){console.log(e)}),this.alreadyRegistered||l["a"].registerPartner(this.ticketOffer.id).then(function(){e.$store.dispatch("ticketOffers/getTicketOffer",e.ticketOffer.id),f.a.done(),e.$snackbar.open({message:"Successfully Registered: Thank you",position:"is-bottom-left"})}).catch(function(e){console.log(e)}))},rejectTicket:function(){this.$store.dispatch("ticketOffers/rejectTicketOffer",this.ticketOffer.id)}},computed:Object(i["a"])({},Object(v["b"])(["dietaryRequirements","accessabilityRequirements"]),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]},alreadyRegistered:function(){return"purchased"===this.ticketOffer.status},acceptText:function(){return this.alreadyRegistered?"Update Details":"Yes, I'm Coming"},rejectText:function(){return this.alreadyRegistered?"I can't make it anymore":"No, I'm Not Coming"}})},h=b,g=(n("b33f"),n("2877")),y=Object(g["a"])(h,a,o,!1,null,"31b3ba64",null),_=y.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("section",{staticClass:"container section-spacing"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-8"},[n("h1",{staticClass:"title is-1"},[e._v("\n          "+e._s(e.event.title)+"\n        ")]),n("h2",{staticClass:"subtitle is-4 is-primary"},[e._v("\n          Invite Declined\n        ")])])])]),n("section",{staticClass:"container section-spacing content"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-7"},[n("p",[e._v("\n          Thank you "),n("span",{staticClass:"has-text-primary"},[e._v(e._s(e.personName))]),e._v("\n          for indicating you will not be able to attend\n          "),n("strong",[e._v(" "+e._s(e.event.title)+". ")])]),n("p",[e._v("\n          We hope to see you at a future event\n        ")]),e._m(0)])])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",{staticClass:"has-text-primary"},[e._v("\n            TEDxAuckland\n          ")])])}],N=n("75cd"),w={name:"PartnerRegistrationSurrendered",props:{event:{type:Object,required:!0},person:{type:Object,required:!0}},mixins:[N["a"]]},A=w,O=Object(g["a"])(A,C,k,!1,null,null,null),x=O.exports,$={name:"PartnerRegistration",components:{PartnerRegistrationPending:_,PartnerRegistrationSurrendered:x},data:function(){return{status:{pending:"partner-registration"}}},computed:Object(i["a"])({},Object(v["b"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"}))},j=$,I=Object(g["a"])(j,s,r,!1,null,null,null);t["default"]=I.exports},"8b97":function(e,t,n){var s=n("d3f4"),r=n("cb7c"),i=function(e,t){if(r(e),!s(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,s){try{s=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),s(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:s(e,n),e}}({},!1):void 0),check:i}},9093:function(e,t,n){var s=n("ce10"),r=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return s(e,r)}},aa77:function(e,t,n){var s=n("5ca1"),r=n("be13"),i=n("79e5"),a=n("fdef"),o="["+a+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),p=function(e,t,n){var r={},o=i(function(){return!!a[e]()||c[e]()!=c}),l=r[e]=o?t(f):a[e];n&&(r[n]=l),s(s.P+s.F*o,"String",r)},f=p.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},b33f:function(e,t,n){"use strict";var s=n("f236"),r=n.n(s);r.a},c5f6:function(e,t,n){"use strict";var s=n("7726"),r=n("69a8"),i=n("2d95"),a=n("5dbc"),o=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,p=n("86cc").f,f=n("aa77").trim,d="Number",m=s[d],v=m,b=m.prototype,h=i(n("2aeb")(b))==d,g="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():f(t,3);var n,s,r,i=t.charCodeAt(0);if(43===i||45===i){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+t}for(var a,c=t.slice(2),l=0,u=c.length;l<u;l++)if(a=c.charCodeAt(l),a<48||a>r)return NaN;return parseInt(c,s)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(h?c(function(){b.valueOf.call(n)}):i(n)!=d)?a(new v(y(t)),n,m):y(t)};for(var _,C=n("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)r(v,_=C[k])&&!r(m,_)&&p(m,_,u(v,_));m.prototype=b,b.constructor=m,n("2aba")(s,d,m)}},f236:function(e,t,n){},f568:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.content?e.contentPresent?n("div",{staticClass:"section"},[e.content.title||e.content.subtitle?n("section",{staticClass:"container section-spacing"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column",class:"is-"+e.titleColumns},[n("Markdown",{staticClass:"title is-1",attrs:{input:e.pageTitle,tag:"h1"}}),n("Markdown",{staticClass:"subtitle is-4",attrs:{input:e.pageSubTitle,tag:"h2"}})],1)])]):e._e(),n("section",{staticClass:"container section-spacing content"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column",class:"is-"+e.bodyColumns},[e._t("beforeContent"),n("Markdown",{attrs:{input:e.pageContent}}),e._t("afterContent")],2)])])]):e._e():n("loading")},r=[],i=(n("ac6a"),n("456d"),n("cebc")),a=(n("c5f6"),n("3a5e")),o=n("e6e0"),c=n("abbb"),l=n("5003"),u=n("2f62"),p={name:"PageContent",components:{Markdown:o["a"],Loading:a["a"]},mixins:[l["a"]],props:{contentId:{type:String,required:!0},titleColumns:{type:Number,default:8},bodyColumns:{type:Number,default:6}},data:function(){return{content:null}},created:function(){var e=this;c["a"].getContent(this.contentId).then(function(t){e.content=t.data.content})},computed:Object(i["a"])({},Object(u["b"])({event:"events/event",person:"people/person"}),{contentPresent:function(){var e=!1;return this.content&&(e=!!this.content.title||!!this.content.subtitle||!!this.content.body||Object.keys(this.$slots).length>0),e},pageTitle:function(){return this.substituteContent(this.content.title,this.person,this.event)},pageSubTitle:function(){return this.substituteContent(this.content.subtitle,this.person,this.event)},pageContent:function(){return this.substituteContent(this.content.body,this.person,this.event)}})},f=p,d=n("2877"),m=Object(d["a"])(f,s,r,!1,null,null,null);t["a"]=m.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=partner-registration.778be81c.js.map