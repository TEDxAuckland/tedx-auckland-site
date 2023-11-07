(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["purchase"],{"0527":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",[n("b-field",{attrs:{label:"First Name",type:{"is-danger":e.$v.person.firstName.$error},message:e.$v.person.firstName.$error?"Please enter your first name":""}},[n("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account"},on:{blur:function(t){return e.$v.person.firstName.$touch()}},model:{value:e.person.firstName,callback:function(t){e.$set(e.person,"firstName",t)},expression:"person.firstName"}})],1),n("b-field",{attrs:{label:"Last Name",type:{"is-danger":e.$v.person.lastName.$error},message:e.$v.person.lastName.$error?"Please enter your last name":""}},[n("b-input",{attrs:{placeholder:"Miles",type:"text",icon:"account"},on:{blur:function(t){return e.$v.person.lastName.$touch()}},model:{value:e.person.lastName,callback:function(t){e.$set(e.person,"lastName",t)},expression:"person.lastName"}})],1),n("b-field",{attrs:{label:"Email",type:{"is-danger":e.$v.person.email.$error},message:e.$v.person.email.$error?"Please enter your email":""}},[n("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email"},on:{blur:function(t){return e.$v.person.email.$touch()}},model:{value:e.person.email,callback:function(t){e.$set(e.person,"email",t)},expression:"person.email"}})],1)],1)},r=[],s={name:"PersonInfo",props:{person:{type:Object,required:!0},$v:{type:Object,required:!1}},methods:{}},a=s,o=n("2877"),c=Object(o["a"])(a,i,r,!1,null,"73ba3ac4",null);t["a"]=c.exports},"085c":function(e,t,n){"use strict";n("c552")},"0ba8":function(e,t,n){"use strict";n("64f4")},"16c3":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u}));var i=n("b5ae"),r={data:function(){return{person:{id:this.personInit?this.personInit.id:"",firstName:this.personInit?this.personInit.firstName:"",lastName:this.personInit?this.personInit.lastName:"",email:this.personInit?this.personInit.email:"",data:this.personInit?this.personInit.data:{}}}}},s={firstName:{required:i["required"]},lastName:{required:i["required"]},email:{required:i["required"],email:i["email"]}},a={yearOfBirth:{required:i["required"],integer:i["integer"]},gender:{required:i["required"]},eventsAttendedBool:{},occupation:{required:i["required"]}},o=[{dietaryRequirements:{},accessabilityRequirements:{}},{dietaryRequirements:{},accessabilityRequirements:{}}],c={data:function(){return{ticketDetails:{dietaryRequirements:this.personInit&&this.personInit.data&&this.personInit.data.dietaryRequirements?this.personInit.data.dietaryRequirements:[]}}}},u={dietaryRequirements:{}}},"16d0":function(e,t,n){},"25e8":function(e,t,n){"use strict";n("a409")},2964:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",[n("b-field",{attrs:{label:"Year of Birth",type:{"is-danger":e.validations.yearOfBirth.$error}}},[n("b-select",{attrs:{type:"text",expanded:""},on:{blur:function(t){return e.validations.gender.$touch()}},model:{value:e.value.yearOfBirth,callback:function(t){e.$set(e.value,"yearOfBirth",e._n(t))},expression:"value.yearOfBirth"}},[n("option",{attrs:{selected:"",disabled:""}},[e._v("Choose One")]),e._l(e.birthYears,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2)],1),n("b-field",{attrs:{label:"Gender",type:{"is-danger":e.validations.gender.$error}}},[n("b-select",{attrs:{type:"text",expanded:""},on:{blur:function(t){return e.validations.gender.$touch()}},model:{value:e.value.gender,callback:function(t){e.$set(e.value,"gender",e._n(t))},expression:"value.gender"}},[n("option",{attrs:{selected:"",disabled:""}},[e._v("Choose One")]),e._l(e.genders,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2)],1),n("b-field",{attrs:{label:"What is your occupation?",type:{"is-danger":e.validations.occupation.$error}}},[n("b-input",{attrs:{type:"text"},on:{blur:function(t){return e.validations.occupation.$touch()}},model:{value:e.value.occupation,callback:function(t){e.$set(e.value,"occupation",e._n(t))},expression:"value.occupation"}})],1),n("fieldset",[n("b-field",{attrs:{label:"Have you attended TEDxAuckland before?"}},[n("div",{staticClass:"checkbox-row"},[n("b-radio",{staticClass:"checkbox-column",attrs:{"native-value":"true"},model:{value:e.value.eventsAttendedBool,callback:function(t){e.$set(e.value,"eventsAttendedBool",t)},expression:"value.eventsAttendedBool"}},[e._v("\n            Yes\n          ")]),n("b-radio",{staticClass:"checkbox-column",attrs:{"native-value":"false"},model:{value:e.value.eventsAttendedBool,callback:function(t){e.$set(e.value,"eventsAttendedBool",t)},expression:"value.eventsAttendedBool"}},[e._v("\n            No\n          ")])],1)])],1)],1)},r=[],s={name:"ApplicationQuestions",props:{value:{type:Object,required:!0},validations:{type:Object,required:!0}},computed:{birthYears:function(){return this.$store.state.birthYears},genders:function(){return this.$store.state.genders}},methods:{}},a=s,o=n("2877"),c=Object(o["a"])(a,i,r,!1,null,null,null);t["a"]=c.exports},"36f4":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.event.soldOut?n("ticket-offer-spaces-full"):e.event.ticketSalesActive?n("div",[n("page-content",{attrs:{contentId:e.contentId,titleColumns:9,bodyColumns:8}}),n("section",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-9"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.purchase()}}},[n("h2",{staticClass:"title is-3 mx-3"},[e._v("Number of Tickets")]),n("b-field",{staticClass:"column is-5",attrs:{label:"How many tickets would you like to buy?"}},[n("b-numberinput",{attrs:{min:1,max:e.event.maxTicketCount,size:"is-large"},model:{value:e.ticketCount,callback:function(t){e.ticketCount=t},expression:"ticketCount"}})],1),n("TicketTotal",{staticClass:"mx-3",attrs:{count:e.ticketCount,price:e.event.ticketPriceCents,discountPercent:e.discountPercent}}),n("person-details-form",{attrs:{$v:e.$v},model:{value:e.person,callback:function(t){e.person=t},expression:"person"}}),n("promo-code-form",{on:{"valid-code":function(t){return e.applyCode(t)}}}),n("b-field",{staticClass:"column is-6"},[n("b-button",{staticClass:"mt-5",attrs:{"native-type":"submit",size:"is-large",type:"is-primary"}},[e._v("Purchase")])],1)],1)])])])],1):n("ticket-sales-closed")},r=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),a=(n("7514"),n("bd86")),o=n("323e"),c=n.n(o),u=n("b5ae"),l=n("2f62"),p=n("1f95"),d=n("3218"),f=n("f568"),m=n("3c34"),v=n("6c3f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.totalWithoutDiscount?n("p",{staticClass:"strike-through"},[e._v(" \n    "+e._s(e.formatPrice(e.totalWithoutDiscount))+" ("+e._s(e.formatPrice(e.price))+" x "+e._s(e.count)+" tickets)\n  ")]):e._e(),n("p",[n("strong",[e._v("\n      "+e._s(e.formatPrice(e.total))+" \n    ")]),n("span",[e._v(" \n      ("+e._s(e.formatPrice(e.singlePriceWithDiscount))+" x "+e._s(e.count)+" tickets) \n    ")])])])},b=[],y=(n("c5f6"),{name:"TicketTotal",components:{},props:{count:{type:Number,required:!0},price:{type:Number,required:!0},discountPercent:{type:Number,required:!0}},computed:{singlePriceWithDiscount:function(){var e=this.price,t=this.discountPercent;return t?(100-t)/100*e:e},totalWithoutDiscount:function(){var e=this.count,t=this.price,n=this.discountPercent;return n?e*t:null},total:function(){var e=this.count*this.price;return this.discountPercent?(100-this.discountPercent)/100*e:e}},methods:{formatPrice:function(e){return"$".concat(Math.round(e)/100)}}}),O=y,k=(n("085c"),n("2877")),g=Object(k["a"])(O,h,b,!1,null,"3b834850",null),_=g.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-field",{staticClass:"column is-8",attrs:{label:"First Name",type:{"is-danger":e.$v.person.firstName.$error},message:e.$v.person.firstName.$error?"Please enter your first name":""}},[n("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account",size:"is-medium"},on:{blur:function(t){return e.$v.person.firstName.$touch()},input:e.onInput},model:{value:e.details.firstName,callback:function(t){e.$set(e.details,"firstName",t)},expression:"details.firstName"}})],1),n("b-field",{staticClass:"column is-8",attrs:{label:"Last Name",type:{"is-danger":e.$v.person.lastName.$error},message:e.$v.person.lastName.$error?"Please enter your last name":""}},[n("b-input",{attrs:{placeholder:"Knox",type:"text",icon:"account",size:"is-medium"},on:{blur:function(t){return e.$v.person.lastName.$touch()},input:e.onInput},model:{value:e.details.lastName,callback:function(t){e.$set(e.details,"lastName",t)},expression:"details.lastName"}})],1),n("b-field",{staticClass:"column is-8",attrs:{label:"Email",type:{"is-danger":e.$v.person.email.$error},message:e.$v.person.email.$error?"Please enter your email":""}},[n("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email",size:"is-medium"},on:{blur:function(t){return e.$v.person.email.$touch()},input:e.onInput},model:{value:e.details.email,callback:function(t){e.$set(e.details,"email",t)},expression:"details.email"}})],1)],1)},C=[];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={name:"PersonDetails",components:{},props:{value:{type:Object,required:!0},$v:{type:Object,required:!0}},data:function(){return{details:P({},this.value)}},methods:{onInput:function(){this.$emit("input",this.details)}}},x=N,q=Object(k["a"])(x,$,C,!1,null,"fe43a866",null),w=q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{staticClass:"column is-8",attrs:{label:"Promo Code",message:e.message,type:e.validationClasses}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onCheck(t)}}},[n("b-input",{attrs:{type:"text",icon:"ticket",size:"is-medium"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),n("p",{staticClass:"control"},[n("b-button",{attrs:{type:e.validationClasses,label:"check code",loading:e.isLoading,disabled:e.code.length<1,size:"is-medium",outlined:""},on:{click:e.onCheck}})],1)])},T=[],R=n("bc3a"),D=n.n(R),E="https://tedxauckland-profiles.herokuapp.com/api/v1",S=D.a.create({baseURL:E,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),B={checkPromoCode:function(e){return S.get("/promo_codes/"+e)}},Q={name:"PromoCodeForm",beforeMount:function(){var e=this.$route.query.promoCode;e&&(this.code=e,this.onCheck())},data:function(){return{code:"",codeIsValid:null,isLoading:!1,message:""}},methods:{onInput:function(){this.$emit("input",this.details)},onCheck:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,B.checkPromoCode(this.code);case 4:t=e.sent,n=t.data.promoCode,n.isValid?this.validCode(n.discountPercent):this.invalidCode(),console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.invalidCode();case 13:this.isLoading=!1;case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),validCode:function(e){this.codeIsValid=!0,this.message="code is valid.",this.$emit("valid-code",{code:this.code,discountPercent:e})},invalidCode:function(){this.codeIsValid=!1,this.message="code is invalid"}},computed:{validationClasses:function(){return{"is-success":!0===this.codeIsValid,"is-danger":!1===this.codeIsValid}}}},F=Q,A=Object(k["a"])(F,I,T,!1,null,"70c2741f",null),M=A.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{action:""}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("Login")]),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.$emit("close")}}})]),n("section",{staticClass:"modal-card-body"},[n("div",{staticClass:"content"},[e.hasTicket?[n("p",[e._v(e._s(e.personEmail)+" already has a ticket to this event.")])]:e._e(),e.hasInvitedByTicketOffer?[n("p",[n("strong",[e._v(e._s(e.invitedBy))]),e._v(" has already bought and shared a ticket\n            to this email, "+e._s(e.personEmail)+".\n          ")]),n("p",[e._v("\n            Check your email (and spam folder) for your ticket.\n          ")])]:e._e(),e._m(0)],2)]),n("footer",{staticClass:"modal-card-foot"},[n("b-button",{attrs:{label:"Ok"},on:{click:function(t){return e.$emit("close")}}})],1)])])},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n          If you have any problems email "),n("a",{attrs:{href:"mailto:events@tedxauckland.com"}},[e._v("events@tedxauckland.com")])])}],Y={name:"Modal",props:{purchaseStatus:{type:Object,required:!0},personEmail:{type:String,required:!0}},computed:{hasTicket:function(){return this.purchaseStatus.hasTicket},hasInvitedByTicketOffer:function(){return this.purchaseStatus.hasInvitedByTicketOffer},invitedBy:function(){return this.purchaseStatus.invitedBy},hasTicketOffer:function(){return this.purchaseStatus.hasTicketOffere}}},z=Y,V=Object(k["a"])(z,U,L,!1,null,"fdc23960",null),H=V.exports;function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J="direct_buy_page_content",K={name:"Purchase",components:{TicketOfferSpacesFull:p["a"],TicketSalesClosed:d["a"],PageContent:f["a"],TicketTotal:_,PersonDetailsForm:w,PromoCodeForm:M,Modal:H},data:function(){return{contentName:J,ticketCount:1,promoCode:null,discountPercent:0,isModalActive:!1,person:{firstName:"",lastName:"",email:""}}},validations:{person:{firstName:{required:u["required"]},lastName:{required:u["required"]},email:{required:u["required"],email:u["email"]}}},computed:G(G({},Object(l["c"])({event:"events/event",content:"content/contentByField"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]}}),methods:{applyCode:function(e){this.promoCode=e.code,this.discountPercent=e.discountPercent},purchase:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,i,r,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=19;break}return t={person:{firstName:this.person.firstName,lastName:this.person.lastName,email:this.person.email}},e.next=5,v["a"].createOrUpdateProfile(t);case 5:return n=e.sent,i=n.data.person.id,e.next=9,m["a"].createTicketOffer(this.event.slug,{personId:i,ticketCount:this.ticketCount,purchaseQuantity:this.ticketCount});case 9:return r=e.sent,s=r.data.ticketOffer.id,e.next=13,v["a"].checkPurchaseStatus(i,this.event.id);case 13:if(a=e.sent,o=a.data.purchaseStatus,!o.hasInvitedByTicketOffer&&!o.hasTicket){e.next=18;break}return this.cardModal(o,t.email),e.abrupt("return");case 18:this.checkout(s);case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkout:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.a.start(),e.next=3,m["a"].createStripeSessionPurchaseQuantity({ticketOfferId:t,eventId:this.event.id,promoCode:this.promoCode});case 3:return n=e.sent,i="pk_live_nYT6MXu8PbzNd1UyYNyUsrDC00FIoSi0hH",r=Stripe(i),e.next=8,r.redirectToCheckout({sessionId:n.data.stripeSessionId});case 8:e.sent;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cardModal:function(e,t){this.$buefy.modal.open({parent:this,component:H,hasModalCard:!0,trapFocus:!0,props:{purchaseStatus:e,personEmail:t}})}}},X=K,Z=(n("25e8"),Object(k["a"])(X,i,r,!1,null,"731a77fd",null));t["default"]=Z.exports},"39c9":function(e,t,n){},"43b9":function(e,t,n){},"64f4":function(e,t,n){},6719:function(e,t,n){"use strict";n("39c9")},"6f36":function(e,t,n){"use strict";n("c7f0")},"753a":function(e,t,n){"use strict";n("da28")},7599:function(e,t,n){},8710:function(e,t,n){"use strict";n("caa2")},9703:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"refunded"===e.ticketOffer.status?n("section",{staticClass:"containter"},[n("h1",{staticClass:"title is-1 has-text-centered mt-6"},[e._v(e._s(e.person.firstName)+", Your Ticket Has Been Refunded.")])]):n("section",{staticClass:"container"},[n("upper-nav",{attrs:{ticketOffer:e.ticketOffer}}),n("ticket",{attrs:{person:e.person,event:e.event,ticketOffer:e.ticketOffer}}),n("section",{staticClass:"section"},[n("page-content",{staticClass:"hide-print",attrs:{contentId:e.contentId}})],1)],1)},r=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),a=n("3382"),o=n("f568"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"update-profile",params:e.$route.params}}},[e._v("\n    Update Profile\n  ")]),e.ticketOffer.invitedBy?e._e():n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"manage-tickets",params:e.$route.params}}},[e._v("\n    Manage Tickets\n  ")])],1)},u=[],l={name:"UpperNav",props:{ticketOffer:{type:Object,required:!0}}},p=l,d=(n("753a"),n("2877")),f=Object(d["a"])(p,c,u,!1,null,"0c02edde",null),m=f.exports,v=n("75cd"),h=n("b5ae"),b=n("2f62");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={name:"TicketOfferPurchased",components:{PageContent:o["a"],Ticket:a["a"],UpperNav:m},mixins:[v["a"]],validations:{person:{firstName:{required:h["required"]},lastName:{required:h["required"]},email:{required:h["required"],email:h["email"]}}},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!1)},data:function(){return{contentName:"purchased_page_content"}},computed:O(O(O({},Object(b["c"])(["dietaryRequirements","accessabilityRequirements"])),Object(b["c"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]},paidFor:function(){return this.ticketOffer.invitePaidFor},invitedBy:function(){return this.ticketOffer.invitedBy},invitedByName:function(){return"".concat(this.invitedBy.firstName," ").concat(this.invitedBy.lastName)}})},g=k,_=Object(d["a"])(g,i,r,!1,null,null,null);t["default"]=_.exports},a409:function(e,t,n){},b2a3:function(e,t,n){"use strict";n("7599")},b858:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-6"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.validateAndEmit(t)}}},[n("h2",{staticClass:"title is-3"},[e._v("Your Information")]),n("PersonInfo",{staticClass:"section-spacing",attrs:{person:e.person,$v:e.$v}}),n("hr",{staticStyle:{"margin-top":"3rem"}}),n("TicketQuestions",{staticClass:"section-spacing",attrs:{questions:e.ticketQuestions,$v:e.$v}}),n("hr",{staticStyle:{"margin-top":"3rem"}}),n("ApplicationQuestions",{staticClass:"section-spacing",attrs:{validations:e.$v.applicationQuestions},model:{value:e.applicationQuestions,callback:function(t){e.applicationQuestions=t},expression:"applicationQuestions"}}),n("div",{staticClass:"buttons has-addons is-right",staticStyle:{"margin-top":"3rem"}},[n("input",{staticClass:"button is-primary is-medium",attrs:{type:"submit"},domProps:{value:e.submitText}})])],1)])])])},r=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("323e"),o=n.n(a),c=n("0527"),u=n("2964"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",[n("fieldset",[n("legend",{staticClass:"label"},[e._v("Do you have any Dietary Requirements?")]),n("div",{staticClass:"checkbox-row"},e._l(e.dietaryRequirements,(function(t){return n("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.questions.dietaryRequirements,callback:function(t){e.$set(e.questions,"dietaryRequirements",t)},expression:"questions.dietaryRequirements"}},[e._v("\n          "+e._s(t)+"\n        ")])})),1)]),n("fieldset",[n("legend",{staticClass:"label"},[e._v("\n        Do you have any Accessibility Requirements?\n      ")]),n("div",{staticClass:"checkbox-row"},e._l(e.accessabilityRequirements,(function(t){return n("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.questions.accessabilityRequirements,callback:function(t){e.$set(e.questions,"accessabilityRequirements",t)},expression:"questions.accessabilityRequirements"}},[e._v("\n          "+e._s(t)+"\n        ")])})),1)])])},p=[],d={name:"TicketQuestions",components:{},props:{questions:{type:Object,required:!0},$v:{type:Object,required:!0}},computed:{dietaryRequirements:function(){return this.$store.state.dietaryRequirements},accessabilityRequirements:function(){return this.$store.state.accessabilityRequirements}}},f=d,m=(n("b2a3"),n("2877")),v=Object(m["a"])(f,l,p,!1,null,null,null),h=v.exports,b=n("16c3"),y=n("2f62");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={name:"TicketOfferForm",components:{PersonInfo:c["a"],ApplicationQuestions:u["a"],TicketQuestions:h},props:{submitText:{type:String,default:"Submit"}},computed:k(k({},Object(y["c"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"})),{},{applicationQuestions:function(){return this.person.data},ticketQuestions:function(){return this.person.data}}),validations:function(){return{person:b["c"],applicationQuestions:b["a"],ticketQuestions:b["f"][0]}},methods:{validateAndEmit:function(){this.$v.$touch(),this.$v.$invalid||(o.a.start(),this.$emit("submitForm"))}}},_=g,$=Object(m["a"])(_,i,r,!1,null,null,null);t["a"]=$.exports},c552:function(e,t,n){},c7f0:function(e,t,n){},caa2:function(e,t,n){},cc2f:function(e,t,n){"use strict";n("16d0")},cdd1:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[e.ticketOffer.invitedBy?e._e():n("upper-nav"),e.needsDetails?n("section",{staticClass:"section"},[e._m(0)]):e._e(),n("page-content",{attrs:{contentId:e.contentId}},[e.ticketOffer.invitePaidFor?n("template",{slot:"beforeContent"},[n("p",[e._v("\n        Hi "+e._s(e.personName)+", "+e._s(e.invitedByName)+" has bought you a ticket to\n        "+e._s(e.event.title)+". We just need a few details before you can claim\n        your ticket.\n      ")]),n("p",[e._v("Please fill in the form below:")])]):n("template",{slot:"beforeContent"},[n("p",[e._v("\n        Hi "),n("strong",[e._v(e._s(e.personName))]),e._v(", please update your details below to receive your ticket for\n        "),n("strong",[e._v("\n        "+e._s(e.event.title)+"\n        ")]),e._v(".\n      ")])])],2),n("ticket-offer-form",{attrs:{submitText:"update profile"},on:{submitForm:e.proceedToTicket}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content has-text-centered"},[n("p",[e._v("Please fill in your details to get your ticket")])])}],s=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),a=n("f568"),o=n("b858"),c=n("6c3f"),u=n("323e"),l=n.n(u),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"manage-tickets",params:e.$route.params}}},[e._v("\n    Back\n  ")])],1)},d=[],f={name:"UpperNav"},m=f,v=(n("fb96"),n("2877")),h=Object(v["a"])(m,p,d,!1,null,"fd8f815c",null),b=h.exports,y=n("75cd"),O=n("5003"),k=n("2f62");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={name:"Profile",components:{PageContent:a["a"],TicketOfferForm:o["a"],UpperNav:b},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!0)},mixins:[y["a"],O["a"]],props:{needsDetails:{type:Boolean,default:!1}},data:function(){return{contentName:"ticket_offer_page_content"}},computed:_(_({},Object(k["c"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]},invitedByName:function(){var e=this.ticketOffer.invitedBy,t=e.firstName,n=e.lastName;return n?"".concat(t," ").concat(n):t},redirectedFromTicket:function(){return this.$router},applicationQuestions:function(){return this.person.data},ticketQuestions:function(){return this.person.data}}),methods:{proceedToTicket:function(){var e=this;c["a"].updateProfile(this.person.id,{person:{firstName:this.person.firstName,lastName:this.person.lastName,email:this.person.email},profile:_(_({},this.applicationQuestions),this.ticketQuestions)}).then((function(){e.$emit("recalcNeeded"),l.a.done(),e.$router.push({name:"ticket",params:e.$route.params})})).catch((function(e){l.a.done(),console.log("ERROR",e)}))}}},C=$,j=(n("0ba8"),Object(v["a"])(C,i,r,!1,null,null,null));t["default"]=j.exports},da28:function(e,t,n){},e25a:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("page-content",{attrs:{contentId:e.contentId,titleColumns:9,bodyColumns:8}},[n("template",{slot:"beforeContent"},[n("p",[e._v("\n        You purchased "),n("strong",[e._v(e._s(e.purchaseQuantity))]),e._v(" tickets\n        and "),n("strong",[e._v(e._s(e.allocatedQuantity))]),e._v(" are allocated.\n      ")])])],2),n("upper-nav",{attrs:{ticketOffer:e.ticketOffer}}),"refunded"===e.ticketOffer.status?n("section",{staticClass:"containter"},[n("h1",{staticClass:"title is-1 has-text-centered mt-6"},[e._v(e._s(e.person.firstName)+", Your Ticket/s Have Been Refunded.")])]):[n("div",{staticClass:"ticket-preview column mb-6"},[n("h2",{staticClass:"title is-2"},[e._v("Your Ticket")]),n("purchaser-ticket",{attrs:{person:e.person}})],1),e.ticketOffer.purchaseQuantity>1?n("div",{staticClass:"ticket-preview column is-clearfix"},[n("h2",{staticClass:"title is-2"},[e._v("Shared Tickets")]),e._l(e.invites,(function(e){return n("ticket-preview",{key:e.id,attrs:{person:e}})})),e.allocationReached?e._e():n("recipient-details-form",{staticClass:"mt-6",attrs:{allocationReached:e.allocationReached},on:{"add-invite":function(t){return e.offerTicket(t)}}})],2):e._e()]],2)},r=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),a=n("b5ae"),o=n("2f62"),c=n("f568"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview columns"},[n("div",{staticClass:"column"},[n("h3",{staticClass:"title is-4"},[e._v(e._s(e.person.firstName)+" "+e._s(e.person.lastName))]),n("h3",{staticClass:"subtitle is-4"},[e._v(e._s(e.person.email))])]),n("div",{staticClass:"column"},[n("router-link",{staticClass:"button is-primary is-large is-pulled-right",attrs:{to:{name:"ticket",params:e.$route.params}}},[e._v("\n      Ticket Link\n    ")])],1)])},l=[],p={name:"PurchaserTicket",props:{person:{type:Object,required:!0}}},d=p,f=(n("cc2f"),n("2877")),m=Object(f["a"])(d,u,l,!1,null,null,null),v=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview column"},[n("h3",{staticClass:"title is-4"},[e._v(e._s(e.person.firstName)+" "+e._s(e.person.lastName))]),n("h3",{staticClass:"subtitle is-4"},[e._v(e._s(e.person.email))])])},b=[],y={name:"TicketPreview",props:{person:{type:Object,required:!0}}},O=y,k=(n("6719"),Object(f["a"])(O,h,b,!1,null,null,null)),g=k.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview column is-clearfix"},[n("h3",{staticClass:"title is-4"},[e._v("Share Ticket To")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.sendInvite(t)}}},[n("b-field",{attrs:{label:"First Name",horizontal:"",type:{"is-danger":e.$v.invite.firstName.$error},message:e.$v.invite.firstName.$error?"Please enter the first name of the person you're inviting":""}},[n("b-input",{attrs:{placeholder:"Leslie",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.firstName.$touch()}},model:{value:e.invite.firstName,callback:function(t){e.$set(e.invite,"firstName",t)},expression:"invite.firstName"}})],1),n("b-field",{attrs:{label:"Last Name",horizontal:"",type:{"is-danger":e.$v.invite.lastName.$error},message:e.$v.invite.lastName.$error?"Please enter the last name of the person you're inviting":""}},[n("b-input",{attrs:{placeholder:"Miles",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.lastName.$touch()}},model:{value:e.invite.lastName,callback:function(t){e.$set(e.invite,"lastName",t)},expression:"invite.lastName"}})],1),n("b-field",{attrs:{label:"Email",horizontal:"",type:{"is-danger":e.$v.invite.email.$error},message:e.$v.invite.email.$error?"Please enter the email of the person you're inviting":""}},[n("b-input",{attrs:{placeholder:"francis@example.com",disabled:e.allocationReached,type:"email",icon:"email"},on:{blur:function(t){return e.$v.invite.email.$touch()}},model:{value:e.invite.email,callback:function(t){e.$set(e.invite,"email",t)},expression:"invite.email"}})],1),n("button",{staticClass:"add-button button is-primary is-medium is-pulled-right",attrs:{type:"submit",disabled:e.allocationReached}},[e._v("\n      Send Ticket\n    ")])],1)])},$=[];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){return e!==this.$parent.person.email}var N={name:"RecipientDetailsForm",props:{allocationReached:{type:Boolean,required:!0}},data:function(){return{invite:j(j({},this.newInvite),{},{paidFor:!0})}},validations:{invite:{firstName:{required:a["required"]},lastName:{required:a["required"]},email:{required:a["required"],email:a["email"],notOwnerEmail:P}}},computed:j({},Object(o["d"])({newInvite:"invites/newInvite"})),methods:{sendInvite:function(){this.$v.$touch(),this.$v.$invalid||(this.$emit("add-invite",this.invite),this.invite=j(j({},this.newInvite),{},{paidFor:!0}),this.$v.$reset())}}},x=N,q=(n("8710"),Object(f["a"])(x,_,$,!1,null,null,null)),w=q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"update-profile",params:e.$route.params}}},[e._v("\n    Update Profile\n  ")]),e.ticketOffer.invitePaidFor||"refunded"===e.ticketOffer.status?e._e():n("a",{staticClass:"button is-secondary is-large",attrs:{href:e.receiptUrl,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n    GST Receipt\n  ")])],1)},T=[],R={name:"UpperNav",props:{ticketOffer:{type:Object,required:!0}},computed:{receiptUrl:function(){var e="https://tedxauckland-profiles.herokuapp.com";return"".concat(e,"/receipts/").concat(this.ticketOffer.id)}}},D=R,E=(n("6f36"),Object(f["a"])(D,I,T,!1,null,"dd4dc0a8",null)),S=E.exports;function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F="invite_page_content",A={name:"SendTickets",components:{PageContent:c["a"],PurchaserTicket:v,TicketPreview:g,RecipientDetailsForm:w,UpperNav:S},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!0)},data:function(){return{contentName:F}},validations:{person:{firstName:{required:a["required"]},email:{required:a["required"],email:a["email"]}}},methods:Q(Q({},Object(o["b"])({addInvite:"invites/addInvite"})),{},{offerTicket:function(e){if(!this.allocationReached)try{this.addInvite(e)}catch(t){this.$snackbar.open({message:t,type:"is-danger",position:"is-bottom-left"})}}}),computed:Q(Q({},Object(o["c"])({event:"events/event",ticketOffer:"ticketOffers/ticketOffer",content:"content/contentByField",invites:"invites/invites",allocationReached:"invites/allocationReached",person:"people/person",purchaseQuantity:"invites/purchaseQuantity",allocatedQuantity:"invites/allocatedQuantity"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]}})},M=A,U=Object(f["a"])(M,i,r,!1,null,"98eac916",null);t["default"]=U.exports},fb96:function(e,t,n){"use strict";n("43b9")}}]);
//# sourceMappingURL=purchase.4197c60b.js.map