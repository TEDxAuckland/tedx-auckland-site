(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["purchase"],{"0ba8":function(e,t,n){"use strict";n("64f4")},1330:function(e,t,n){"use strict";n("45ab")},"16d0":function(e,t,n){},"36f4":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.event.soldOut?n("ticket-offer-spaces-full"):e.event.ticketSalesActive?n("div",[n("page-content",{attrs:{contentId:e.contentId,titleColumns:9,bodyColumns:8}}),n("section",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-9"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.purchase()}}},[n("h2",{staticClass:"title is-3 mx-3"},[e._v("Number of Tickets")]),n("b-field",{staticClass:"column is-5",attrs:{label:"How many tickets would you like to buy?"}},[n("b-numberinput",{attrs:{min:1,max:e.event.maxTicketCount,size:"is-large"},model:{value:e.ticketCount,callback:function(t){e.ticketCount=t},expression:"ticketCount"}})],1),n("TicketTotal",{staticClass:"mx-3",attrs:{count:e.ticketCount,price:e.event.ticketPriceCents,discountPercent:e.discountPercent}}),n("person-details-form",{attrs:{$v:e.$v},model:{value:e.person,callback:function(t){e.person=t},expression:"person"}}),n("promo-code-form",{on:{"valid-code":function(t){return e.applyCode(t)}}}),n("b-field",{staticClass:"column is-6"},[n("b-button",{staticClass:"mt-5",attrs:{"native-type":"submit",size:"is-large",type:"is-primary"}},[e._v("Purchase")])],1)],1)])])])],1):n("ticket-sales-closed")},r=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),s=(n("7514"),n("bd86")),o=n("323e"),c=n.n(o),l=n("b5ae"),u=n("2f62"),p=n("1f95"),d=n("3218"),f=n("f568"),m=n("3c34"),v=n("6c3f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("strong",[e._v("\n  "+e._s(e.formatted)+"\n")])},h=[],y=(n("c5f6"),{name:"TicketTotal",components:{},props:{count:{type:Number,required:!0},price:{type:Number,required:!0},discountPercent:{type:Number,required:!0}},computed:{total:function(){var e=this.count*this.price;return this.discountPercent?(100-this.discountPercent)/100*e:e},formatted:function(){return"$".concat(Math.round(this.total)/100)}},methods:{}}),O=y,k=n("2877"),g=Object(k["a"])(O,b,h,!1,null,"2af3c698",null),C=g.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-field",{staticClass:"column is-8",attrs:{label:"First Name",type:{"is-danger":e.$v.person.firstName.$error},message:e.$v.person.firstName.$error?"Please enter your first name":""}},[n("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account",size:"is-medium"},on:{blur:function(t){return e.$v.person.firstName.$touch()},input:e.onInput},model:{value:e.details.firstName,callback:function(t){e.$set(e.details,"firstName",t)},expression:"details.firstName"}})],1),n("b-field",{staticClass:"column is-8",attrs:{label:"Email",type:{"is-danger":e.$v.person.email.$error},message:e.$v.person.email.$error?"Please enter your email":""}},[n("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email",size:"is-medium"},on:{blur:function(t){return e.$v.person.email.$touch()},input:e.onInput},model:{value:e.details.email,callback:function(t){e.$set(e.details,"email",t)},expression:"details.email"}})],1)],1)},_=[];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={name:"PersonDetails",components:{},props:{value:{type:Object,required:!0},$v:{type:Object,required:!0}},data:function(){return{details:$({},this.value)}},methods:{onInput:function(){this.$emit("input",this.details)}}},N=w,x=Object(k["a"])(N,j,_,!1,null,"11e427fe",null),q=x.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{staticClass:"column is-8",attrs:{label:"Promo Code",message:e.message,type:e.validationClasses}},[n("b-input",{attrs:{type:"text",icon:"ticket",size:"is-medium"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),n("p",{staticClass:"control"},[n("b-button",{attrs:{type:e.validationClasses,label:"check code",loading:e.isLoading,disabled:e.code.length<1,size:"is-medium",outlined:""},on:{click:e.onCheck}})],1)],1)},I=[],T=n("bc3a"),D=n.n(T),E="https://tedxauckland-profiles.herokuapp.com/api/v1",S=D.a.create({baseURL:E,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),F={checkPromoCode:function(e){return S.get("/promo_codes/"+e)}},B={name:"PromoCodeForm",beforeMount:function(){var e=this.$route.query.promoCode;e&&(this.code=e,this.onCheck())},data:function(){return{code:"",codeIsValid:null,isLoading:!1,message:""}},methods:{onInput:function(){this.$emit("input",this.details)},onCheck:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,F.checkPromoCode(this.code);case 4:t=e.sent,n=t.data.promoCode,n.isValid?this.validCode(n.discountPercent):this.invalidCode(),console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.invalidCode();case 13:this.isLoading=!1;case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),validCode:function(e){this.codeIsValid=!0,this.message="code is valid.",this.$emit("valid-code",{code:this.code,discountPercent:e})},invalidCode:function(){this.codeIsValid=!1,this.message="code is invalid"}},computed:{validationClasses:function(){return{"is-success":!0===this.codeIsValid,"is-danger":!1===this.codeIsValid}}}},U=B,Q=Object(k["a"])(U,R,I,!1,null,"94de2308",null),z=Q.exports;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M="direct_buy_page_content",H={name:"Purchase",components:{TicketOfferSpacesFull:p["a"],TicketSalesClosed:d["a"],PageContent:f["a"],TicketTotal:C,PersonDetailsForm:q,PromoCodeForm:z},data:function(){return{contentName:M,ticketCount:1,promoCode:null,discountPercent:0,person:{firstName:"",email:""}}},validations:{person:{firstName:{required:l["required"]},email:{required:l["required"],email:l["email"]}}},computed:V(V({},Object(u["c"])({event:"events/event",content:"content/contentByField"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]}}),methods:{applyCode:function(e){this.promoCode=e.code,this.discountPercent=e.discountPercent},purchase:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=12;break}return t={firstName:this.person.firstName,email:this.person.email},e.next=5,v["a"].createOrUpdateProfile(t);case 5:return n=e.sent,i=n.data.person.id,e.next=9,m["a"].createTicketOffer(this.event.slug,{personId:i,ticketCount:this.ticketCount,purchaseQuantity:this.ticketCount});case 9:r=e.sent,a=r.data.ticketOffer.id,this.checkout(a);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkout:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.a.start(),e.next=3,m["a"].createStripeSessionPurchaseQuantity({ticketOfferId:t,eventId:this.event.id,promoCode:this.promoCode});case 3:return n=e.sent,i="pk_live_nYT6MXu8PbzNd1UyYNyUsrDC00FIoSi0hH",r=Stripe(i),e.next=8,r.redirectToCheckout({sessionId:n.data.stripeSessionId});case 8:e.sent;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},Y=H,A=(n("7c94"),Object(k["a"])(Y,i,r,!1,null,"71bb61cd",null));t["default"]=A.exports},"39a9":function(e,t,n){"use strict";n("e536")},"39c9":function(e,t,n){},"43b9":function(e,t,n){},"45ab":function(e,t,n){},"64f4":function(e,t,n){},6719:function(e,t,n){"use strict";n("39c9")},"7c94":function(e,t,n){"use strict";n("889b")},8710:function(e,t,n){"use strict";n("caa2")},"889b":function(e,t,n){},9703:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("upper-nav",{attrs:{ticketOffer:e.ticketOffer}}),n("ticket",{attrs:{person:e.person,event:e.event,ticketOffer:e.ticketOffer}}),n("section",{staticClass:"section"},[n("page-content",{staticClass:"hide-print",attrs:{contentId:e.contentId}}),n("section",{staticClass:"container hide-print"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-6"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.updateInfo(t)}}},[n("fieldset",[n("legend",{staticClass:"label"},[e._v("\n                Dietary Requirements\n              ")]),n("div",{staticClass:"checkbox-row"},e._l(e.dietaryRequirements,(function(t){return n("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.person.data.dietaryRequirements,callback:function(t){e.$set(e.person.data,"dietaryRequirements",t)},expression:"person.data.dietaryRequirements"}},[e._v("\n                  "+e._s(t)+"\n                ")])})),1)]),n("fieldset",[n("legend",{staticClass:"label"},[e._v("\n                Accessibility Requirements\n              ")]),n("div",{staticClass:"checkbox-row"},e._l(e.accessabilityRequirements,(function(t){return n("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.person.data.accessabilityRequirements,callback:function(t){e.$set(e.person.data,"accessabilityRequirements",t)},expression:"person.data.accessabilityRequirements"}},[e._v("\n                  "+e._s(t)+"\n                ")])})),1)]),e._m(0)])])])])],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-5 buttons is-medium is-pulled-right"},[n("input",{staticClass:"button",attrs:{type:"submit",value:"Update info"}})])}],a=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),s=n("323e"),o=n.n(s),c=n("3382"),l=n("f568"),u=n("6c3f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ticketOffer.invitedBy?n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"update-profile",params:e.$route.params}}},[e._v("\n    Back\n  ")])],1):n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"manage-tickets",params:e.$route.params}}},[e._v("\n    Back\n  ")])],1)},d=[],f={name:"UpperNav",props:{ticketOffer:{type:Object,required:!0}}},m=f,v=(n("1330"),n("2877")),b=Object(v["a"])(m,p,d,!1,null,"2e1ddfe4",null),h=b.exports,y=n("75cd"),O=n("b5ae"),k=n("2f62");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"TicketOfferPurchased",components:{PageContent:l["a"],Ticket:c["a"],UpperNav:h},mixins:[y["a"]],validations:{person:{firstName:{required:O["required"]},lastName:{required:O["required"]},email:{required:O["required"],email:O["email"]}}},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!1)},data:function(){return{contentName:"purchased_page_content"}},computed:C(C(C({},Object(k["c"])(["dietaryRequirements","accessabilityRequirements"])),Object(k["c"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]},paidFor:function(){return this.ticketOffer.invitePaidFor},invitedBy:function(){return this.ticketOffer.invitedBy},invitedByName:function(){return"".concat(this.invitedBy.firstName," ").concat(this.invitedBy.lastName)}}),methods:{updateInfo:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(o.a.start(),u["a"].updateProfile(this.person.id,{profile:this.person.data}).then((function(){o.a.done(),e.$snackbar.open("Successfully updated special requirements")})).catch((function(e){o.a.done(),console.log("ERROR",e)})))}}},_=j,P=Object(v["a"])(_,i,r,!1,null,null,null);t["default"]=P.exports},caa2:function(e,t,n){},cc2f:function(e,t,n){"use strict";n("16d0")},cdd1:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[e.ticketOffer.invitedBy?e._e():n("upper-nav"),e.needsDetails?n("section",{staticClass:"section"},[e._m(0)]):e._e(),n("page-content",{attrs:{contentId:e.contentId}},[e.ticketOffer.invitePaidFor?n("template",{slot:"beforeContent"},[n("p",[e._v("\n        Hi "+e._s(e.personName)+", "+e._s(e.invitedByName)+" has bought you a ticket to\n        "+e._s(e.event.title)+", we just need a few details before you can claim\n        your ticket.\n      ")]),n("p",[e._v("Please fill in the form below")])]):n("template",{slot:"beforeContent"},[n("p",[e._v("\n        Hi "),n("strong",[e._v(e._s(e.personName))]),e._v(", Please update your details below to receive your ticket for\n        "),n("strong",[e._v("\n        "+e._s(e.event.title)+"\n        ")]),e._v(".\n      ")])])],2),n("ticket-offer-form",{attrs:{submitText:"update profile"},on:{submitForm:e.proceedToTicket}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content has-text-centered"},[n("p",[e._v("Please fill in your details to get your ticket")])])}],a=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),s=n("f568"),o=n("b858"),c=n("6c3f"),l=n("323e"),u=n.n(l),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"manage-tickets",params:e.$route.params}}},[e._v("\n    Back\n  ")])],1)},d=[],f={name:"UpperNav"},m=f,v=(n("fb96"),n("2877")),b=Object(v["a"])(m,p,d,!1,null,"fd8f815c",null),h=b.exports,y=n("75cd"),O=n("5003"),k=n("2f62");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"Profile",components:{PageContent:s["a"],TicketOfferForm:o["a"],UpperNav:h},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!0)},mixins:[y["a"],O["a"]],props:{needsDetails:{type:Boolean,default:!1}},data:function(){return{contentName:"ticket_offer_page_content"}},computed:C(C({},Object(k["c"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]},invitedByName:function(){var e=this.ticketOffer.invitedBy,t=e.firstName,n=e.lastName;return n?"".concat(t," ").concat(n):t},redirectedFromTicket:function(){return this.$router},applicationQuestions:function(){return this.person.data},ticketQuestions:function(){return this.person.data}}),methods:{proceedToTicket:function(){var e=this;c["a"].updateProfile(this.person.id,{person:{firstName:this.person.firstName,lastName:this.person.lastName,email:this.person.email},profile:C(C({},this.applicationQuestions),this.ticketQuestions)}).then((function(){e.$emit("recalcNeeded"),u.a.done(),e.$router.push({name:"ticket",params:e.$route.params})})).catch((function(e){u.a.done(),console.log("ERROR",e)}))}}},_=j,P=(n("0ba8"),Object(v["a"])(_,i,r,!1,null,null,null));t["default"]=P.exports},e25a:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("page-content",{attrs:{contentId:e.contentId,titleColumns:9,bodyColumns:8}},[n("template",{slot:"beforeContent"},[n("p",[e._v("\n        You purchased "),n("strong",[e._v(e._s(e.purchaseQuantity))]),e._v(" tickets\n        and "),n("strong",[e._v(e._s(e.allocatedQuantity))]),e._v(" are allocated.\n      ")])])],2),n("upper-nav",{attrs:{ticketOffer:e.ticketOffer}}),n("div",{staticClass:"ticket-preview column mb-6"},[n("h2",{staticClass:"title is-2"},[e._v("Your Ticket")]),n("purchaser-ticket",{attrs:{person:e.person}})],1),e.ticketOffer.ticketCount>1?n("div",{staticClass:"ticket-preview column is-clearfix"},[n("h2",{staticClass:"title is-2"},[e._v("Shared Tickets")]),e._l(e.invites,(function(e){return n("ticket-preview",{key:e.id,attrs:{person:e}})})),e.allocationReached?e._e():n("recipient-details-form",{staticClass:"mt-6",attrs:{allocationReached:e.allocationReached},on:{"add-invite":function(t){return e.offerTicket(t)}}})],2):e._e()],1)},r=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),s=n("b5ae"),o=n("2f62"),c=n("f568"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview columns"},[n("div",{staticClass:"column"},[n("h3",{staticClass:"title is-4"},[e._v(e._s(e.person.firstName)+" "+e._s(e.person.lastName))]),n("h3",{staticClass:"subtitle is-4"},[e._v(e._s(e.person.email))])]),n("div",{staticClass:"column"},[n("router-link",{staticClass:"button is-primary is-large is-pulled-right",attrs:{to:{name:"ticket",params:e.$route.params}}},[e._v("\n      Ticket Link\n    ")])],1)])},u=[],p={name:"PurchaserTicket",props:{person:{type:Object,required:!0}}},d=p,f=(n("cc2f"),n("2877")),m=Object(f["a"])(d,l,u,!1,null,null,null),v=m.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview column"},[n("h3",{staticClass:"title is-4"},[e._v(e._s(e.person.firstName)+" "+e._s(e.person.lastName))]),n("h3",{staticClass:"subtitle is-4"},[e._v(e._s(e.person.email))])])},h=[],y={name:"TicketPreview",props:{person:{type:Object,required:!0}}},O=y,k=(n("6719"),Object(f["a"])(O,b,h,!1,null,null,null)),g=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview column is-clearfix"},[n("h3",{staticClass:"title is-4"},[e._v("Share Ticket To")]),n("b-field",{attrs:{label:"First Name",horizontal:"",type:{"is-danger":e.$v.invite.firstName.$error},message:e.$v.invite.firstName.$error?"Please enter your first name":""}},[n("b-input",{attrs:{placeholder:"Leslie",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.firstName.$touch()}},model:{value:e.invite.firstName,callback:function(t){e.$set(e.invite,"firstName",t)},expression:"invite.firstName"}})],1),n("b-field",{attrs:{label:"Last Name",horizontal:"",type:{"is-danger":e.$v.invite.lastName.$error},message:e.$v.invite.lastName.$error?"Please enter your last name":""}},[n("b-input",{attrs:{placeholder:"Miles",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.lastName.$touch()}},model:{value:e.invite.lastName,callback:function(t){e.$set(e.invite,"lastName",t)},expression:"invite.lastName"}})],1),n("b-field",{attrs:{label:"Email",horizontal:"",type:{"is-danger":e.$v.invite.email.$error},message:e.$v.invite.email.$error?"Please enter your email":""}},[n("b-input",{attrs:{placeholder:"francis@example.com",disabled:e.allocationReached,type:"email",icon:"email"},on:{blur:function(t){return e.$v.invite.email.$touch()}},model:{value:e.invite.email,callback:function(t){e.$set(e.invite,"email",t)},expression:"invite.email"}})],1),n("button",{staticClass:"add-button button is-primary is-medium is-pulled-right",attrs:{type:"button",disabled:e.allocationReached},on:{click:function(t){return t.preventDefault(),e.addInvite(t)}}},[e._v("\n    Send Ticket\n  ")])],1)},j=[];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={name:"RecipientDetailsForm",props:{allocationReached:{type:Boolean,required:!0}},data:function(){return{invite:P(P({},this.newInvite),{},{paidFor:!0})}},validations:{invite:{firstName:{required:s["required"]},lastName:{required:s["required"]},email:{required:s["required"],email:s["email"]},paidFor:{}}},computed:P({},Object(o["d"])({newInvite:"invites/newInvite"})),methods:{addInvite:function(){this.$v.$touch(),this.$v.$invalid||(this.$emit("add-invite",this.invite),this.invite=P(P({},this.newInvite),{},{paidFor:!0}),this.$v.$reset())}}},w=$,N=(n("8710"),Object(f["a"])(w,C,j,!1,null,null,null)),x=N.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"update-profile",params:e.$route.params}}},[e._v("\n    Update Profile\n  ")]),e.ticketOffer.invitePaidFor?e._e():n("a",{staticClass:"button is-secondary is-large",attrs:{href:e.receiptUrl,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n    GST Receipt\n  ")])],1)},R=[],I={name:"UpperNav",props:{ticketOffer:{type:Object,required:!0}},computed:{receiptUrl:function(){var e="https://tedxauckland-profiles.herokuapp.com";return"".concat(e,"/receipts/").concat(this.ticketOffer.id)}}},T=I,D=(n("39a9"),Object(f["a"])(T,q,R,!1,null,"db2997d8",null)),E=D.exports;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B="invite_page_content",U={name:"SendTickets",components:{PageContent:c["a"],PurchaserTicket:v,TicketPreview:g,RecipientDetailsForm:x,UpperNav:E},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!0)},data:function(){return{contentName:B}},validations:{person:{firstName:{required:s["required"]},email:{required:s["required"],email:s["email"]}}},methods:F(F({},Object(o["b"])({addInvite:"invites/addInvite"})),{},{offerTicket:function(e){if(!this.allocationReached){console.log(e);try{this.addInvite(e)}catch(t){this.$snackbar.open({message:t,type:"is-danger",position:"is-bottom-left"})}}}}),computed:F(F({},Object(o["c"])({event:"events/event",ticketOffer:"ticketOffers/ticketOffer",content:"content/contentByField",invites:"invites/invites",allocationReached:"invites/allocationReached",person:"people/person",purchaseQuantity:"invites/purchaseQuantity",allocatedQuantity:"invites/allocatedQuantity"})),{},{contentId:function(){var e=this;return this.event.pageContent.find((function(t){return t[0]===e.contentName}))[1]}})},Q=U,z=Object(f["a"])(Q,i,r,!1,null,"a3d88f4a",null);t["default"]=z.exports},e536:function(e,t,n){},fb96:function(e,t,n){"use strict";n("43b9")}}]);
//# sourceMappingURL=purchase.babed6ac.js.map