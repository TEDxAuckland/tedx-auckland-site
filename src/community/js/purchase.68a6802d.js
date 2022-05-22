(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["purchase"],{"0b71":function(e,t,n){},"0ba8":function(e,t,n){"use strict";var i=n("64f4"),a=n.n(i);a.a},"112a":function(e,t,n){},"14e4":function(e,t,n){},2663:function(e,t,n){},"36f4":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.event.soldOut?n("ticket-offer-spaces-full"):e.event.ticketSalesActive?n("div",[n("page-content",{attrs:{contentId:e.contentId,titleColumns:9,bodyColumns:8}}),n("section",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-9"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.purchase()}}},[n("h2",{staticClass:"title is-3 mx-3"},[e._v("Number of Tickets")]),n("b-field",{staticClass:"column is-5",attrs:{label:"How many tickets would you like to buy?"}},[n("b-numberinput",{attrs:{min:1,max:e.event.maxTicketCount,size:"is-large"},model:{value:e.ticketCount,callback:function(t){e.ticketCount=t},expression:"ticketCount"}})],1),n("TicketTotal",{staticClass:"mx-3",attrs:{count:e.ticketCount,price:e.event.ticketPriceCents,discountPercent:e.discountPercent}}),n("person-details-form",{attrs:{$v:e.$v},model:{value:e.person,callback:function(t){e.person=t},expression:"person"}}),n("promo-code-form",{on:{"valid-code":function(t){return e.applyCode(t)}}}),n("b-field",{staticClass:"column is-6"},[n("b-button",{staticClass:"mt-5",attrs:{"native-type":"submit",size:"is-large",type:"is-primary"}},[e._v("Purchase")])],1)],1)])])])],1):n("ticket-sales-closed")},a=[],s=(n("96cf"),n("3b8d")),r=(n("7514"),n("cebc")),o=n("323e"),c=n.n(o),l=n("b5ae"),u=n("2f62"),d=n("1f95"),f=n("3218"),p=n("f568"),m=n("3c34"),v=n("6c3f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("strong",[e._v("\n  "+e._s(e.formatted)+"\n")])},b=[],k=(n("c5f6"),{name:"TicketTotal",components:{},props:{count:{type:Number,required:!0},price:{type:Number,required:!0},discountPercent:{type:Number,required:!0}},computed:{total:function(){var e=this.count*this.price;return this.discountPercent?(100-this.discountPercent)/100*e:e},formatted:function(){return"$".concat(Math.round(this.total)/100)}},methods:{}}),_=k,y=n("2877"),C=Object(y["a"])(_,h,b,!1,null,"04fafc7c",null),O=C.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-field",{staticClass:"column is-8",attrs:{label:"First Name",type:{"is-danger":e.$v.person.firstName.$error},message:e.$v.person.firstName.$error?"Please enter your first name":""}},[n("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account",size:"is-medium"},on:{blur:function(t){return e.$v.person.firstName.$touch()},input:e.onInput},model:{value:e.details.firstName,callback:function(t){e.$set(e.details,"firstName",t)},expression:"details.firstName"}})],1),n("b-field",{staticClass:"column is-8",attrs:{label:"Email",type:{"is-danger":e.$v.person.email.$error},message:e.$v.person.email.$error?"Please enter your email":""}},[n("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email",size:"is-medium"},on:{blur:function(t){return e.$v.person.email.$touch()},input:e.onInput},model:{value:e.details.email,callback:function(t){e.$set(e.details,"email",t)},expression:"details.email"}})],1)],1)},g=[],N={name:"PersonDetails",components:{},props:{value:{type:Object,required:!0},$v:{type:Object,required:!0}},data:function(){return{details:Object(r["a"])({},this.value)}},methods:{onInput:function(){this.$emit("input",this.details)}}},x=N,T=Object(y["a"])(x,$,g,!1,null,"71578084",null),P=T.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{staticClass:"column is-8",attrs:{label:"Promo Code",message:e.message,type:e.validationClasses}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onCheck(t)}}},[n("b-input",{attrs:{type:"text",icon:"ticket",size:"is-medium"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),n("p",{staticClass:"control"},[n("b-button",{attrs:{type:e.validationClasses,label:"check code",loading:e.isLoading,disabled:e.code.length<1,size:"is-medium",outlined:""},on:{click:e.onCheck}})],1)])},I=[],w=n("bc3a"),q=n.n(w),R="https://tedxauckland-profiles.herokuapp.com/api/v1",B=q.a.create({baseURL:R,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),E={checkPromoCode:function(e){return B.get("/promo_codes/"+e)}},S={name:"PromoCodeForm",beforeMount:function(){var e=this.$route.query.promoCode;e&&(this.code=e,this.onCheck())},data:function(){return{code:"",codeIsValid:null,isLoading:!1,message:""}},methods:{onInput:function(){this.$emit("input",this.details)},onCheck:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,E.checkPromoCode(this.code);case 4:t=e.sent,n=t.data.promoCode,n.isValid?this.validCode(n.discountPercent):this.invalidCode(),console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.invalidCode();case 13:this.isLoading=!1;case 14:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}(),validCode:function(e){this.codeIsValid=!0,this.message="code is valid.",this.$emit("valid-code",{code:this.code,discountPercent:e})},invalidCode:function(){this.codeIsValid=!1,this.message="code is invalid"}},computed:{validationClasses:function(){return{"is-success":!0===this.codeIsValid,"is-danger":!1===this.codeIsValid}}}},F=S,M=Object(y["a"])(F,j,I,!1,null,"ff51cf20",null),U=M.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{action:""}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("Login")]),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.$emit("close")}}})]),n("section",{staticClass:"modal-card-body"},[n("div",{staticClass:"content"},[e.hasTicket?[n("p",[e._v(e._s(e.personEmail)+" already has a ticket to this event.")])]:e._e(),e.hasInvitedByTicketOffer?[n("p",[n("strong",[e._v(e._s(e.invitedBy))]),e._v(" has already bought and shared a\n            ticket to this email, "+e._s(e.personEmail)+".\n          ")]),n("p",[e._v("\n            Check your email (and spam folder) for your ticket.\n          ")])]:e._e(),e._m(0)],2)]),n("footer",{staticClass:"modal-card-foot"},[n("b-button",{attrs:{label:"Ok"},on:{click:function(t){return e.$emit("close")}}})],1)])])},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n          If you have any problems email\n          "),n("a",{attrs:{href:"mailto:events@tedxauckland.com"}},[e._v("events@tedxauckland.com")])])}],D={name:"Modal",props:{purchaseStatus:{type:Object,required:!0},personEmail:{type:String,required:!0}},computed:{hasTicket:function(){return this.purchaseStatus.hasTicket},hasInvitedByTicketOffer:function(){return this.purchaseStatus.hasInvitedByTicketOffer},invitedBy:function(){return this.purchaseStatus.invitedBy},hasTicketOffer:function(){return this.purchaseStatus.hasTicketOffere}}},L=D,V=Object(y["a"])(L,Q,z,!1,null,"f1798b60",null),H=V.exports,Y="direct_buy_page_content",A={name:"Purchase",components:{TicketOfferSpacesFull:d["a"],TicketSalesClosed:f["a"],PageContent:p["a"],TicketTotal:O,PersonDetailsForm:P,PromoCodeForm:U,Modal:H},data:function(){return{contentName:Y,ticketCount:1,promoCode:null,discountPercent:0,isModalActive:!1,person:{firstName:"",email:""}}},validations:{person:{firstName:{required:l["required"]},email:{required:l["required"],email:l["email"]}}},computed:Object(r["a"])({},Object(u["c"])({event:"events/event",content:"content/contentByField"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]}}),methods:{applyCode:function(e){this.promoCode=e.code,this.discountPercent=e.discountPercent},purchase:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,i,a,s,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=19;break}return t={firstName:this.person.firstName,email:this.person.email},e.next=5,v["a"].createOrUpdateProfile(t);case 5:return n=e.sent,i=n.data.person.id,e.next=9,m["a"].createTicketOffer(this.event.slug,{personId:i,ticketCount:this.ticketCount,purchaseQuantity:this.ticketCount});case 9:return a=e.sent,s=a.data.ticketOffer.id,e.next=13,v["a"].checkPurchaseStatus(i,this.event.id);case 13:if(r=e.sent,o=r.data.purchaseStatus,!o.hasInvitedByTicketOffer&&!o.hasTicket){e.next=18;break}return this.cardModal(o,t.email),e.abrupt("return");case 18:this.checkout(s);case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),checkout:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c.a.start(),e.next=3,m["a"].createStripeSessionPurchaseQuantity({ticketOfferId:t,eventId:this.event.id,promoCode:this.promoCode});case 3:return n=e.sent,i="pk_live_nYT6MXu8PbzNd1UyYNyUsrDC00FIoSi0hH",a=Stripe(i),e.next=8,a.redirectToCheckout({sessionId:n.data.stripeSessionId});case 8:e.sent;case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),cardModal:function(e,t){this.$buefy.modal.open({parent:this,component:H,hasModalCard:!0,trapFocus:!0,props:{purchaseStatus:e,personEmail:t}})}}},J=A,G=(n("98fb"),Object(y["a"])(J,i,a,!1,null,"e90360d4",null));t["default"]=G.exports},"49a1":function(e,t,n){"use strict";var i=n("2663"),a=n.n(i);a.a},"51ac":function(e,t,n){"use strict";var i=n("c0b2"),a=n.n(i);a.a},"64f4":function(e,t,n){},6719:function(e,t,n){"use strict";var i=n("dbc5"),a=n.n(i);a.a},8710:function(e,t,n){"use strict";var i=n("112a"),a=n.n(i);a.a},9703:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"refunded"===e.ticketOffer.status?n("section",{staticClass:"containter"},[n("h1",{staticClass:"title is-1 has-text-centered mt-6"},[e._v("\n    "+e._s(e.person.firstName)+", Your Ticket Has Been Refunded.\n  ")])]):n("section",{staticClass:"container"},[n("upper-nav",{attrs:{ticketOffer:e.ticketOffer}}),n("ticket",{attrs:{person:e.person,event:e.event,ticketOffer:e.ticketOffer}}),n("section",{staticClass:"section"},[n("page-content",{staticClass:"hide-print",attrs:{contentId:e.contentId}})],1)],1)},a=[],s=(n("7514"),n("cebc")),r=(n("323e"),n("3382")),o=n("f568"),c=(n("6c3f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"update-profile",params:e.$route.params}}},[e._v("\n    Update Profile\n  ")]),e.ticketOffer.invitedBy?e._e():n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"manage-tickets",params:e.$route.params}}},[e._v("\n    Manage Tickets\n  ")])],1)}),l=[],u={name:"UpperNav",props:{ticketOffer:{type:Object,required:!0}}},d=u,f=(n("49a1"),n("2877")),p=Object(f["a"])(d,c,l,!1,null,"57fb3bfb",null),m=p.exports,v=n("75cd"),h=n("b5ae"),b=n("2f62"),k={name:"TicketOfferPurchased",components:{PageContent:o["a"],Ticket:r["a"],UpperNav:m},mixins:[v["a"]],validations:{person:{firstName:{required:h["required"]},lastName:{required:h["required"]},email:{required:h["required"],email:h["email"]}}},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!1)},data:function(){return{contentName:"purchased_page_content"}},computed:Object(s["a"])({},Object(b["c"])(["dietaryRequirements","accessabilityRequirements"]),Object(b["c"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]},paidFor:function(){return this.ticketOffer.invitePaidFor},invitedBy:function(){return this.ticketOffer.invitedBy},invitedByName:function(){return"".concat(this.invitedBy.firstName," ").concat(this.invitedBy.lastName)}})},_=k,y=Object(f["a"])(_,i,a,!1,null,null,null);t["default"]=y.exports},"98fb":function(e,t,n){"use strict";var i=n("ffb5"),a=n.n(i);a.a},c0b2:function(e,t,n){},cc2f:function(e,t,n){"use strict";var i=n("0b71"),a=n.n(i);a.a},cdd1:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[e.ticketOffer.invitedBy?e._e():n("upper-nav"),e.needsDetails?n("section",{staticClass:"section"},[e._m(0)]):e._e(),n("page-content",{attrs:{contentId:e.contentId}},[e.ticketOffer.invitePaidFor?n("template",{slot:"beforeContent"},[n("p",[e._v("\n        Hi "+e._s(e.personName)+", "+e._s(e.invitedByName)+" has bought you a ticket to\n        "+e._s(e.event.title)+", we just need a few details before you can claim\n        your ticket.\n      ")]),n("p",[e._v("Please fill in the form below")])]):n("template",{slot:"beforeContent"},[n("p",[e._v("\n        Hi "),n("strong",[e._v(e._s(e.personName))]),e._v(", Please update your details below to receive your ticket for\n        "),n("strong",[e._v(" "+e._s(e.event.title)+" ")]),e._v(".\n      ")])])],2),n("ticket-offer-form",{attrs:{submitText:"update profile"},on:{submitForm:e.proceedToTicket}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content has-text-centered"},[n("p",[e._v("Please fill in your details to get your ticket")])])}],s=(n("7514"),n("cebc")),r=n("f568"),o=n("b858"),c=n("6c3f"),l=n("323e"),u=n.n(l),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"manage-tickets",params:e.$route.params}}},[e._v("\n    Back\n  ")])],1)},f=[],p={name:"UpperNav"},m=p,v=(n("e687"),n("2877")),h=Object(v["a"])(m,d,f,!1,null,"2fa748a4",null),b=h.exports,k=n("75cd"),_=n("5003"),y=n("2f62"),C={name:"Profile",components:{PageContent:r["a"],TicketOfferForm:o["a"],UpperNav:b},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!0)},mixins:[k["a"],_["a"]],props:{needsDetails:{type:Boolean,default:!1}},data:function(){return{contentName:"ticket_offer_page_content"}},computed:Object(s["a"])({},Object(y["c"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]},invitedByName:function(){var e=this.ticketOffer.invitedBy,t=e.firstName,n=e.lastName;return n?"".concat(t," ").concat(n):t},redirectedFromTicket:function(){return this.$router},applicationQuestions:function(){return this.person.data},ticketQuestions:function(){return this.person.data}}),methods:{proceedToTicket:function(){var e=this;c["a"].updateProfile(this.person.id,{person:{firstName:this.person.firstName,lastName:this.person.lastName,email:this.person.email},profile:Object(s["a"])({},this.applicationQuestions,this.ticketQuestions)}).then(function(){e.$emit("recalcNeeded"),u.a.done(),e.$router.push({name:"ticket",params:e.$route.params})}).catch(function(e){u.a.done(),console.log("ERROR",e)})}}},O=C,$=(n("0ba8"),Object(v["a"])(O,i,a,!1,null,null,null));t["default"]=$.exports},dbc5:function(e,t,n){},e25a:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("page-content",{attrs:{contentId:e.contentId,titleColumns:9,bodyColumns:8}},[n("template",{slot:"beforeContent"},[n("p",[e._v("\n        You purchased "),n("strong",[e._v(e._s(e.purchaseQuantity))]),e._v(" tickets and\n        "),n("strong",[e._v(e._s(e.allocatedQuantity))]),e._v(" are allocated.\n      ")])])],2),n("upper-nav",{attrs:{ticketOffer:e.ticketOffer}}),"refunded"===e.ticketOffer.status?n("section",{staticClass:"containter"},[n("h1",{staticClass:"title is-1 has-text-centered mt-6"},[e._v("\n      "+e._s(e.person.firstName)+", Your Ticket/s Have Been Refunded.\n    ")])]):[n("div",{staticClass:"ticket-preview column mb-6"},[n("h2",{staticClass:"title is-2"},[e._v("Your Ticket")]),n("purchaser-ticket",{attrs:{person:e.person}})],1),e.ticketOffer.purchaseQuantity>1?n("div",{staticClass:"ticket-preview column is-clearfix"},[n("h2",{staticClass:"title is-2"},[e._v("Shared Tickets")]),e._l(e.invites,function(e){return n("ticket-preview",{key:e.id,attrs:{person:e}})}),e.allocationReached?e._e():n("recipient-details-form",{staticClass:"mt-6",attrs:{allocationReached:e.allocationReached},on:{"add-invite":function(t){return e.offerTicket(t)}}})],2):e._e()]],2)},a=[],s=(n("7514"),n("cebc")),r=n("b5ae"),o=n("2f62"),c=n("f568"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview columns"},[n("div",{staticClass:"column"},[n("h3",{staticClass:"title is-4"},[e._v(e._s(e.person.firstName)+" "+e._s(e.person.lastName))]),n("h3",{staticClass:"subtitle is-4"},[e._v(e._s(e.person.email))])]),n("div",{staticClass:"column"},[n("router-link",{staticClass:"button is-primary is-large is-pulled-right",attrs:{to:{name:"ticket",params:e.$route.params}}},[e._v("\n      Ticket Link\n    ")])],1)])},u=[],d={name:"PurchaserTicket",props:{person:{type:Object,required:!0}}},f=d,p=(n("cc2f"),n("2877")),m=Object(p["a"])(f,l,u,!1,null,null,null),v=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview column"},[n("h3",{staticClass:"title is-4"},[e._v(e._s(e.person.firstName)+" "+e._s(e.person.lastName))]),n("h3",{staticClass:"subtitle is-4"},[e._v(e._s(e.person.email))])])},b=[],k={name:"TicketPreview",props:{person:{type:Object,required:!0}}},_=k,y=(n("6719"),Object(p["a"])(_,h,b,!1,null,null,null)),C=y.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticket-preview column is-clearfix"},[n("h3",{staticClass:"title is-4"},[e._v("Share Ticket To")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.sendInvite(t)}}},[n("b-field",{attrs:{label:"First Name",horizontal:"",type:{"is-danger":e.$v.invite.firstName.$error},message:e.$v.invite.firstName.$error?"Please enter the first name of the person you're inviting":""}},[n("b-input",{attrs:{placeholder:"Leslie",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.firstName.$touch()}},model:{value:e.invite.firstName,callback:function(t){e.$set(e.invite,"firstName",t)},expression:"invite.firstName"}})],1),n("b-field",{attrs:{label:"Last Name",horizontal:"",type:{"is-danger":e.$v.invite.lastName.$error},message:e.$v.invite.lastName.$error?"Please enter the last name of the person you're inviting":""}},[n("b-input",{attrs:{placeholder:"Miles",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.lastName.$touch()}},model:{value:e.invite.lastName,callback:function(t){e.$set(e.invite,"lastName",t)},expression:"invite.lastName"}})],1),n("b-field",{attrs:{label:"Email",horizontal:"",type:{"is-danger":e.$v.invite.email.$error},message:e.$v.invite.email.$error?"Please enter the email of the person you're inviting":""}},[n("b-input",{attrs:{placeholder:"francis@example.com",disabled:e.allocationReached,type:"email",icon:"email"},on:{blur:function(t){return e.$v.invite.email.$touch()}},model:{value:e.invite.email,callback:function(t){e.$set(e.invite,"email",t)},expression:"invite.email"}})],1),n("button",{staticClass:"add-button button is-primary is-medium is-pulled-right",attrs:{type:"submit",disabled:e.allocationReached}},[e._v("\n      Send Ticket\n    ")])],1)])},$=[];function g(e){return e!==this.$parent.person.email}var N={name:"RecipientDetailsForm",props:{allocationReached:{type:Boolean,required:!0}},data:function(){return{invite:Object(s["a"])({},this.newInvite,{paidFor:!0})}},validations:{invite:{firstName:{required:r["required"]},lastName:{required:r["required"]},email:{required:r["required"],email:r["email"],notOwnerEmail:g}}},computed:Object(s["a"])({},Object(o["d"])({newInvite:"invites/newInvite"})),methods:{sendInvite:function(){this.$v.$touch(),this.$v.$invalid||(this.$emit("add-invite",this.invite),this.invite=Object(s["a"])({},this.newInvite,{paidFor:!0}),this.$v.$reset())}}},x=N,T=(n("8710"),Object(p["a"])(x,O,$,!1,null,null,null)),P=T.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"update-profile",params:e.$route.params}}},[e._v("\n    Update Profile\n  ")]),e.ticketOffer.invitePaidFor||"refunded"===e.ticketOffer.status?e._e():n("a",{staticClass:"button is-secondary is-large",attrs:{href:e.receiptUrl,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n    GST Receipt\n  ")])],1)},I=[],w={name:"UpperNav",props:{ticketOffer:{type:Object,required:!0}},computed:{receiptUrl:function(){var e="https://tedxauckland-profiles.herokuapp.com";return"".concat(e,"/receipts/").concat(this.ticketOffer.id)}}},q=w,R=(n("51ac"),Object(p["a"])(q,j,I,!1,null,"22f4898a",null)),B=R.exports,E="invite_page_content",S={name:"SendTickets",components:{PageContent:c["a"],PurchaserTicket:v,TicketPreview:C,RecipientDetailsForm:P,UpperNav:B},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!0)},data:function(){return{contentName:E}},validations:{person:{firstName:{required:r["required"]},email:{required:r["required"],email:r["email"]}}},methods:Object(s["a"])({},Object(o["b"])({addInvite:"invites/addInvite"}),{offerTicket:function(e){if(!this.allocationReached)try{this.addInvite(e)}catch(t){this.$snackbar.open({message:t,type:"is-danger",position:"is-bottom-left"})}}}),computed:Object(s["a"])({},Object(o["c"])({event:"events/event",ticketOffer:"ticketOffers/ticketOffer",content:"content/contentByField",invites:"invites/invites",allocationReached:"invites/allocationReached",person:"people/person",purchaseQuantity:"invites/purchaseQuantity",allocatedQuantity:"invites/allocatedQuantity"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]}})},F=S,M=Object(p["a"])(F,i,a,!1,null,"28f8522a",null);t["default"]=M.exports},e687:function(e,t,n){"use strict";var i=n("14e4"),a=n.n(i);a.a},ffb5:function(e,t,n){}}]);
//# sourceMappingURL=purchase.68a6802d.js.map