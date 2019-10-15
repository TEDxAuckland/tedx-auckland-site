(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ticket-offer-application"],{1556:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.event.soldOut&&"purchased"!==e.ticketOffer.status?i("ticket-offer-spaces-full"):e.event.ticketSalesActive||"purchased"===e.ticketOffer.status?"pending"===e.ticketOffer.status&&e.ticketOffer.invitedBy&&!e.ticketOffer.invitePaidFor&&e.needsDetails?i("ticket-offer-purchased-update-details",{on:{recalcNeeded:function(t){return e.recalcNeedsDetails()}}}):"pending"===e.ticketOffer.status?i("ticket-offer-pending"):"purchased"===e.ticketOffer.status&&e.needsDetails?i("ticket-offer-purchased-update-details",{on:{recalcNeeded:function(t){return e.recalcNeedsDetails()}}}):"purchased"===e.ticketOffer.status?i("ticket-offer-purchased"):e._e():i("ticket-sales-closed")},s=[],r=i("cebc"),a=i("1f95"),o=i("3218"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"section"},[i("page-content",{attrs:{contentId:e.contentId}},[i("template",{slot:"afterContent"},[i("CopyTicketOffer",{attrs:{"ticket-offer":e.ticketOffer,event:e.event}})],1)],2),i("ticket-offer-form",{on:{submitForm:e.proceedToPurchase}})],1)},l=[],u=(i("7514"),i("b858")),d=i("f568"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.invitedBy&&e.paidFor?[e.invitedBy&&e.paidFor?i("p",[i("strong",{staticClass:"has-text-primary"},[e._v("\n        "+e._s(e.invitedByName)+"\n      ")]),e._v("\n      has bought you a ticket.\n    ")]):e._e(),i("p",[e._v("\n      Update your details below to claim it.\n    ")])]:e.invitedBy?i("p",[e._v("\n    You have been invited by\n    "),i("strong",{staticClass:"has-text-primary"},[e._v(" "+e._s(e.invitedByName)+" ")]),e._v(". This\n    means you got to skip the application process.\n  ")]):e._e(),e.paidFor?e._e():i("p",[e._v("\n    You have the opportunity to purchase\n    "),i("strong",{staticClass:"has-text-primary"},[e._v("\n      "+e._s(e.ticketOffer.ticketCount)+"\n    ")]),e._v("\n    "+e._s(e.plural?"tickets":"ticket")+" for\n    "),i("strong",{staticClass:"has-text-primary"},[e._v(e._s(e.formattedTicketPrice))]),e._v("\n    "+e._s(e.plural?"each":null)+". There "+e._s(e.pluralTickets?"are":"is")+"\n    "),i("strong",{staticClass:"has-text-primary"},[e._v(e._s(e.ticketsLeft))]),e._v("\n    "+e._s(e.pluralTickets?"tickets":"ticket")+" left, please complete the form\n    below and buy your "+e._s(e.plural?"tickets":"ticket")+" now.\n  ")])],2)},p=[],v={name:"CopyTicketOffer",props:{ticketOffer:{type:Object,required:!0},event:{type:Object,required:!0}},computed:{plural:function(){return this.ticketOffer.ticketCount>1},formattedTicketPrice:function(){return"$".concat(this.ticketOffer.costAfterDiscountCents/100)},paidFor:function(){return this.ticketOffer.invitePaidFor},invitedBy:function(){return this.ticketOffer.invitedBy},invitedByName:function(){return"".concat(this.invitedBy.firstName," ").concat(this.invitedBy.lastName)},pluralTickets:function(){return this.ticketsLeft>1},ticketsLeft:function(){return this.event.standardTicketsLeft>3?3:this.event.standardTicketsLeft}}},m=v,h=i("2877"),b=Object(h["a"])(m,f,p,!1,null,null,null),k=b.exports,y=i("6c3f"),_=i("323e"),O=i.n(_),$=i("75cd"),C=i("5003"),g=i("2f62"),N={name:"TicketOfferPending",components:{CopyTicketOffer:k,TicketOfferForm:u["a"],PageContent:d["a"]},mixins:[$["a"],C["a"]],data:function(){return{contentName:"ticket_offer_page_content"}},computed:Object(r["a"])({},Object(g["b"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]},applicationQuestions:function(){return this.person.data},ticketQuestions:function(){return this.person.data},pageTitle:function(){return this.substituteContent(this.content(this.contentName).title,this.person,this.event)},pageSubTitle:function(){return this.substituteContent(this.content(this.contentName).subtitle,this.person,this.event)},pageContent:function(){return this.substituteContent(this.content(this.contentName).body,this.person,this.event)}}),methods:{proceedToPurchase:function(){var e=this;y["a"].updateProfile(this.person.id,{person:{firstName:this.person.firstName,lastName:this.person.lastName,email:this.person.email},profile:Object(r["a"])({},this.applicationQuestions,this.ticketQuestions)}).then(function(){e.$router.push({name:"ticket-offer-purchase",params:{eventSlug:e.event.slug,id:e.ticketOffer.id}}),O.a.done()}).catch(function(e){O.a.done(),console.log("ERROR",e)})}}},w=N,q=(i("61cf"),Object(h["a"])(w,c,l,!1,null,null,null)),x=q.exports,T=i("5a0b"),I=i("8cd8"),P={name:"BuyTickets",components:{TicketOfferSpacesFull:a["a"],TicketSalesClosed:o["a"],TicketOfferPending:x,TicketOfferPurchasedUpdateDetails:T["a"],TicketOfferPurchased:I["a"]},beforeMount:function(){this.needsDetails=this.calcNeedsDetails()},data:function(){return{needsDetails:null}},computed:Object(r["a"])({},Object(g["b"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"})),methods:{recalcNeedsDetails:function(){var e=this;this.$store.dispatch("people/getPerson",this.person.id).then(function(){e.calcNeedsDetails()})},calcNeedsDetails:function(){return!this.person.lastName||!this.person.data.educationLevel||!this.person.data.foundedYesNo}}},R=P,A=Object(h["a"])(R,n,s,!1,null,null,null);t["default"]=A.exports},3882:function(e,t,i){},"612c":function(e,t,i){"use strict";var n=i("7f61"),s=i.n(n);s.a},"61cf":function(e,t,i){"use strict";var n=i("fbd8"),s=i.n(n);s.a},6794:function(e,t,i){"use strict";var n=i("7e58"),s=i.n(n);s.a},"723e":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("page-content",{attrs:{contentId:e.contentId,titleColumns:9,bodyColumns:8}},[e.event.has_applications?i("CopyInviteAndBuy",{attrs:{slot:"afterContent",allocationLeft:e.allocationLeft,event:e.event},slot:"afterContent"}):e._e()],1),i("section",{staticClass:"container"},[i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column is-9"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-8"},[i("div",{staticClass:"ticket-container"},[i("h2",{staticClass:"title is-3"},[e._v("Your Ticket Details")]),i("TicketPreview",{attrs:{person:e.person,"ticket-offer":e.ticketOffer,event:e.event}})],1),e.allocationReached?e._e():i("div",{staticClass:"ticket-container columns"},[i("div",{staticClass:"column"},[i("h2",{staticClass:"title is-3"},[e._v("Invite Your Friends and Family")]),i("NewInviteForm",{attrs:{newInvite:e.newInvite,allocationReached:e.allocationReached},on:{"add-invite":function(t){return e.addInvite(t)}}})],1)])]),i("div",{staticClass:"column is-4"},[i("OrderTally",{attrs:{person:e.person,invites:e.invites,paidInviteCount:e.paidInviteCount,ticketPrice:1*e.ticketOffer.costAfterDiscountCents},on:{"remove-invite":function(t){return e.removeInvite(t)},"toggle-invite-paid":function(t){return e.toggleInvitePaid(t)},checkout:e.checkout}})],1)])])])])],1)},s=[],r=(i("7514"),i("cebc")),a=i("b5ae"),o=i("f568"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("p",[e._v("\n    You have\n    "),i("strong",{staticClass:"has-text-primary"},[e._v("\n      "+e._s(e.allocationLeft)+"\n    ")]),e._v("\n    "+e._s(e.plural?"opportunities":"opportunity")+"\n    left to purchase tickets for others, or invite them to purchase their own.\n    There\n    "+e._s(e.pluralTickets?"are":"is")+" currently\n    "),i("strong",{staticClass:"has-text-primary"},[e._v(e._s(e.ticketsLeft))]),e._v("\n    "+e._s(e.pluralTickets?"tickets":"ticket")+" left. Don't miss out!\n  ")])])},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("span",{staticClass:"is-size-5"},[e._v("\n      You're almost there!\n    ")])])}],u=(i("c5f6"),{name:"CopyInviteAndBuy",props:{allocationLeft:{type:Number,required:!0},event:{type:Object,required:!0}},computed:{plural:function(){return 1!==this.allocationLeft},pluralTickets:function(){return this.ticketsLeft>1},ticketsLeft:function(){return this.event.standardTicketsLeft>3?3:this.event.standardTicketsLeft}}}),d=u,f=i("2877"),p=Object(f["a"])(d,c,l,!1,null,null,null),v=p.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ticket-preview column"},[i("h3",{staticClass:"title is-4"},[e._v(e._s(e.person.firstName)+" "+e._s(e.person.lastName))]),i("h3",{staticClass:"subtitle is-4"},[e._v(e._s(e.person.email))])])},h=[],b={name:"TicketPreview",props:{person:{type:Object,required:!0},ticketOffer:{type:Object,required:!0},event:{type:Object,required:!0}},computed:{plural:function(){return this.ticketOffer.ticketCount>1}}},k=b,y=(i("6794"),Object(f["a"])(k,m,h,!1,null,null,null)),_=y.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ticket-preview column is-clearfix"},[i("b-field",{attrs:{label:"First Name",horizontal:"",type:{"is-danger":e.$v.invite.firstName.$error},message:e.$v.invite.firstName.$error?"Please enter your first name":""}},[i("b-input",{attrs:{placeholder:"Leslie",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.firstName.$touch()}},model:{value:e.invite.firstName,callback:function(t){e.$set(e.invite,"firstName",t)},expression:"invite.firstName"}})],1),i("b-field",{attrs:{label:"Last Name",horizontal:"",type:{"is-danger":e.$v.invite.lastName.$error},message:e.$v.invite.lastName.$error?"Please enter your last name":""}},[i("b-input",{attrs:{placeholder:"Miles",disabled:e.allocationReached,type:"text",icon:"account"},on:{blur:function(t){return e.$v.invite.lastName.$touch()}},model:{value:e.invite.lastName,callback:function(t){e.$set(e.invite,"lastName",t)},expression:"invite.lastName"}})],1),i("b-field",{attrs:{label:"Email",horizontal:"",type:{"is-danger":e.$v.invite.email.$error},message:e.$v.invite.email.$error?"Please enter your email":""}},[i("b-input",{attrs:{placeholder:"francis@example.com",disabled:e.allocationReached,type:"email",icon:"email"},on:{blur:function(t){return e.$v.invite.email.$touch()}},model:{value:e.invite.email,callback:function(t){e.$set(e.invite,"email",t)},expression:"invite.email"}})],1),i("b-field",{attrs:{label:"Paid For?",horizontal:""}},[i("b-checkbox",{attrs:{disabled:e.allocationReached,size:"is-medium"},model:{value:e.invite.paidFor,callback:function(t){e.$set(e.invite,"paidFor",t)},expression:"invite.paidFor"}},[e._v("\n      I will pay for this ticket\n    ")])],1),i("button",{staticClass:"add-button button is-primary is-medium is-pulled-right",attrs:{type:"button",disabled:e.allocationReached},on:{click:function(t){return t.preventDefault(),e.addInvite(t)}}},[e._v("\n    Add Invite\n  ")])],1)},$=[],C={name:"NewInviteForm",props:{newInvite:{type:Object,required:!0},allocationReached:{type:Boolean,required:!0}},data:function(){return{invite:Object(r["a"])({},this.newInvite)}},validations:{invite:{firstName:{required:a["required"]},lastName:{required:a["required"]},email:{required:a["required"],email:a["email"]},paidFor:{}}},methods:{addInvite:function(){this.$v.$touch(),this.$v.$invalid||(this.$emit("add-invite",this.invite),this.invite=Object(r["a"])({},this.newInvite),this.$v.$reset())}}},g=C,N=(i("eddd"),Object(f["a"])(g,O,$,!1,null,null,null)),w=N.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",[i("h3",{staticClass:"title is-4"},[e._v("Order Tally")]),i("h4",{staticClass:"title is-5"},[e._v("Tickets")]),i("OrderTallyRow",{attrs:{invite:e.person,price:e.formattedTicketPrice,forPurchaser:""}}),e._l(e.invites,function(t,n){return i("div",[t.paidFor?i("OrderTallyRow",{key:t.email,attrs:{invite:t,price:e.formattedTicketPrice,position:"paid"},on:{"remove-tally-row":function(i){return e.$emit("remove-invite",t.id)},"toggle-invite-paid":function(i){return e.$emit("toggle-invite-paid",t.id)}}}):e._e()],1)}),i("h4",{staticClass:"title is-5"},[e._v("Invites")]),e._l(e.invites,function(t,n){return i("div",[t.paidFor?e._e():i("OrderTallyRow",{key:t.email,attrs:{invite:t,price:e.formattedTicketPrice,position:"unpaid"},on:{"remove-tally-row":function(i){return e.$emit("remove-invite",t.id)},"toggle-invite-paid":function(i){return e.$emit("toggle-invite-paid",t.id)}}})],1)}),i("div",{staticClass:"tally-row"},[i("div",{staticClass:"tally-row__name"},[e._v("\n      total:\n    ")]),i("div",{staticClass:"tally-row__price"},[e._v("\n      "+e._s(e.formattedOrderTotal)+"\n    ")])]),i("button",{staticClass:"button is-primary is-medium is-fullwidth",attrs:{type:"button",role:"link"},on:{click:function(t){return t.preventDefault(),e.$emit("checkout")}}},[e._v("\n    Checkout\n  ")])],2)},x=[],T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tally-row"},[i("div",{staticClass:"tally-row__name"},[e.forPurchaser?e._e():i("b-tooltip",{staticClass:"tally-row__button",attrs:{label:"Remove "+e.invite.firstName}},[i("b-icon",{attrs:{icon:"close"},nativeOn:{click:function(t){return e.$emit("remove-tally-row")}}})],1),e.forPurchaser?e._e():i("b-tooltip",{staticClass:"tally-row__button",attrs:{label:"Move "+e.invite.firstName+" to "+e.moveText}},[i("b-icon",{attrs:{icon:e.moveIcon},nativeOn:{click:function(t){return e.$emit("toggle-invite-paid")}}})],1),e._v("\n\n    "+e._s(e.invite.firstName)+"\n  ")],1),i("div",{staticClass:"tally-row__price"},[e.invite.paidFor||e.forPurchaser?i("span",[e._v("\n      "+e._s(e.price)+"\n    ")]):i("span",[e._v("\n      free\n    ")])])])},I=[],P={name:"OrderTallyRow",props:{invite:{type:Object,required:!0},price:{type:String,required:!0},position:{type:String,default:"paid"},forPurchaser:{type:Boolean,default:!1}},computed:{moveText:function(){return{paid:"unpaid",unpaid:"paid"}[this.position]},moveIcon:function(){return{paid:"arrow-down-bold-outline",unpaid:"arrow-up-bold-outline"}[this.position]}}},R=P,A=(i("8d90"),Object(f["a"])(R,T,I,!1,null,null,null)),j=A.exports,F={name:"OrderTally",components:{OrderTallyRow:j},props:{person:{type:Object,required:!0},paidInviteCount:{type:Number,required:!0},invites:{type:Array,required:!0},ticketPrice:{type:Number,required:!0}},computed:{formattedTicketPrice:function(){return"$".concat(this.ticketPrice/100)},orderTotal:function(){return(1+this.paidInviteCount)*this.ticketPrice},formattedOrderTotal:function(){return"$".concat(this.orderTotal/100)},plural:function(){return this.ticketOffer.ticketCount>1}}},D=F,L=Object(f["a"])(D,q,x,!1,null,null,null),E=L.exports,B=i("3c34"),S=i("323e"),Y=i.n(S),z=i("75cd"),M=i("2f62"),U={name:"TicketOfferPurchase",components:{PageContent:o["a"],CopyInviteAndBuy:v,TicketPreview:_,NewInviteForm:w,OrderTally:E},props:{existingInvites:{type:Array,required:!0},newInvite:{type:Object,required:!0}},mixins:[z["a"]],data:function(){return{isRejectModalActive:!1,invites:this.existingInvites,invitesOld:[],contentName:"invite_page_content"}},computed:Object(r["a"])({},Object(M["b"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer",content:"content/contentByField"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]},paidInvites:function(){return this.invites.filter(function(e){return e.paidFor})},paidInviteCount:function(){return this.paidInvites.length},allocationLeft:function(){return this.ticketOffer.ticketCount-1-this.invites.length},allocationReached:function(){return this.allocationLeft<=0}}),validations:{invites:{required:a["required"],$each:{firstName:{required:a["required"]},lastName:{required:a["required"]},email:{required:a["required"],email:a["email"]},paidFor:{}}}},methods:{addInvite:function(e){var t=this;if(this.allocationReached)return null;e.ticketOfferId=this.ticketOffer.id,B["a"].createInvite(this.event.slug,this.ticketOffer.id,e).then(function(e){t.invites=e.data.invites,e.data.error&&t.$snackbar.open({message:e.data.error,type:"is-danger",position:"is-bottom-left"})}).catch(function(e){console.log("create invite error",e)})},removeInvite:function(e){var t=this;B["a"].deleteInvite(e).then(function(e){t.invites=e.data.invites}).catch(function(e){console.log("delete invite error",e)})},toggleInvitePaid:function(e){var t=this,i=this.invites.find(function(t){return t.id===e});B["a"].updateInvite(e,Object(r["a"])({},i,{paidFor:!i.paidFor})).then(function(e){t.invites=e.data.invites}).catch(function(e){console.log("update invite error",e)})},checkout:function(){Y.a.start(),B["a"].createStripeSession({ticketOfferId:this.ticketOffer.id,eventId:this.event.id}).then(function(e){var t="pk_live_nYT6MXu8PbzNd1UyYNyUsrDC00FIoSi0hH",i=Stripe(t);i.redirectToCheckout({sessionId:e.data.stripeSessionId}).then(function(e){})})}}},Q=U,V=(i("612c"),Object(f["a"])(Q,n,s,!1,null,"0db62ff8",null));t["default"]=V.exports},"7e58":function(e,t,i){},"7f61":function(e,t,i){},"8d90":function(e,t,i){"use strict";var n=i("ac3c"),s=i.n(n);s.a},"8f9c":function(e,t,i){},ac3c:function(e,t,i){},ac42:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.event.soldOut&&"purchased"!==e.ticketOffer.status?i("ticket-offer-spaces-full"):"pending"===e.ticketOffer.status?i("vip-invite-pending"):"purchased"===e.ticketOffer.status?i("ticket-offer-purchased"):e._e()},s=[],r=i("cebc"),a=i("1f95"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"section"},[i("page-content",{attrs:{contentId:e.contentId}}),e.$v.person?i("section",{staticClass:"container"},[i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column is-6"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[i("h2",{staticClass:"title has-text-poppins is-5 has-red-stripe"},[e._v("\n            let's first confirm a few details about you\n          ")]),i("b-field",{attrs:{label:"First Name",type:{"is-danger":e.$v.person.firstName.$error},message:e.$v.person.firstName.$error?"Please enter your first name":""}},[i("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account"},on:{blur:function(t){return e.$v.person.firstName.$touch()}},model:{value:e.person.firstName,callback:function(t){e.$set(e.person,"firstName",t)},expression:"person.firstName"}})],1),i("b-field",{attrs:{label:"Last Name",type:{"is-danger":e.$v.person.lastName.$error},message:e.$v.person.lastName.$error?"Please enter your last name":""}},[i("b-input",{attrs:{placeholder:"Miles",type:"text",icon:"account"},on:{blur:function(t){return e.$v.person.lastName.$touch()}},model:{value:e.person.lastName,callback:function(t){e.$set(e.person,"lastName",t)},expression:"person.lastName"}})],1),i("b-field",{attrs:{label:"Email",type:{"is-danger":e.$v.person.email.$error||e.errors.email},message:e.errors.email?e.errors.email:""}},[i("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email"},on:{blur:function(t){return e.$v.person.email.$touch()}},model:{value:e.person.email,callback:function(t){e.$set(e.person,"email",t)},expression:"person.email"}})],1),i("fieldset",[i("legend",{staticClass:"label"},[e._v("\n              Do you have any Dietary Requirements?\n            ")]),i("div",{staticClass:"checkbox-row"},e._l(e.dietaryRequirements,function(t){return i("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.person.data.dietaryRequirements,callback:function(t){e.$set(e.person.data,"dietaryRequirements",t)},expression:"person.data.dietaryRequirements"}},[e._v("\n                "+e._s(t)+"\n              ")])}),1)]),i("fieldset",[i("legend",{staticClass:"label"},[e._v("\n              Do you have any Accessibility Requirements?\n            ")]),i("div",{staticClass:"checkbox-row"},e._l(e.accessabilityRequirements,function(t){return i("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.person.data.accessabilityRequirements,callback:function(t){e.$set(e.person.data,"accessabilityRequirements",t)},expression:"person.data.accessabilityRequirements"}},[e._v("\n                "+e._s(t)+"\n              ")])}),1)]),e._m(0)],1)])])]):e._e()],1)},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"actions-row buttons is-pulled-right"},[i("input",{staticClass:"button is-medium is-primary",attrs:{type:"submit",value:"Proceed to Invites and Purchase"}})])}],l=(i("7514"),i("f568")),u=i("6c3f"),d=i("323e"),f=i.n(d),p=i("b5ae"),v=i("5003"),m=i("2f62"),h={name:"VipInvitePending",components:{PageContent:l["a"]},validations:{person:{firstName:{required:p["required"]},lastName:{required:p["required"]},email:{required:p["required"],email:p["email"]}}},mixins:[v["a"]],data:function(){return{contentName:"partner_registration_page_content",errors:{}}},methods:{register:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(f.a.start(),u["a"].updateProfile(this.person.id,{person:this.person,profile:this.person.data}).then(function(){f.a.done(),e.$router.push({name:"ticket-offer-purchase",params:{eventSlug:e.event.slug,id:e.ticketOffer.id}})}).catch(function(e){console.log(e)}))}},computed:Object(r["a"])({},Object(m["b"])(["dietaryRequirements","accessabilityRequirements"]),Object(m["b"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]}})},b=h,k=(i("de4f"),i("2877")),y=Object(k["a"])(b,o,c,!1,null,"392e18d0",null),_=y.exports,O=i("8cd8"),$={name:"VipInvite",components:{TicketOfferSpacesFull:a["a"],VipInvitePending:_,TicketOfferPurchased:O["a"]},data:function(){return{status:{pending:"partner-registration"}}},computed:Object(r["a"])({},Object(m["b"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"}))},C=$,g=Object(k["a"])(C,n,s,!1,null,null,null);t["default"]=g.exports},d3e5:function(e,t,i){},de4f:function(e,t,i){"use strict";var n=i("8f9c"),s=i.n(n);s.a},dfb5:function(e,t,i){"use strict";var n=i("3882"),s=i.n(n);s.a},eddd:function(e,t,i){"use strict";var n=i("d3e5"),s=i.n(n);s.a},fbd8:function(e,t,i){},ff89:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"section"},[i("section",{staticClass:"container section-spacing"},[i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column is-8"},[i("h1",{staticClass:"title is-1"},[e._v("Update Ticket Details")]),i("h1",{staticClass:"subtitle is-2"},[e._v(e._s(e.event.title))])])])]),i("section",{staticClass:"container section-spacing content"},[i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column is-7"},[i("p",{staticClass:"is-size-4"},[e._v("\n          Hi\n          "),i("span",{staticClass:"has-text-primary"},[e._v(e._s(e.personName))])]),i("p",[e._v("\n          Please update your Ticket information.\n        ")]),e._m(0)])])]),i("section",{staticClass:"container"},[i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column is-6"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.updateInfo(t)}}},[i("h2",{staticClass:"title has-text-poppins is-5 has-red-stripe"},[e._v("\n            Your Contact Info\n          ")]),i("b-field",{attrs:{label:"First Name",type:{"is-danger":e.$v.personAnswers.firstName.$error},message:e.$v.personAnswers.firstName.$error?"Please enter your first name":""}},[i("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account"},on:{blur:function(t){return e.$v.personAnswers.firstName.$touch()}},model:{value:e.personAnswers.firstName,callback:function(t){e.$set(e.personAnswers,"firstName",t)},expression:"personAnswers.firstName"}})],1),i("b-field",{attrs:{label:"Last Name",type:{"is-danger":e.$v.personAnswers.lastName.$error},message:e.$v.personAnswers.lastName.$error?"Please enter your last name":""}},[i("b-input",{attrs:{placeholder:"Miles",type:"text",icon:"account"},on:{blur:function(t){return e.$v.personAnswers.lastName.$touch()}},model:{value:e.personAnswers.lastName,callback:function(t){e.$set(e.personAnswers,"lastName",t)},expression:"personAnswers.lastName"}})],1),i("b-field",{attrs:{label:"Email",type:{"is-danger":e.$v.personAnswers.email.$error||e.errors.email},message:e.errors.email?e.errors.email:""}},[i("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email"},on:{blur:function(t){return e.$v.personAnswers.email.$touch()}},model:{value:e.personAnswers.email,callback:function(t){e.$set(e.personAnswers,"email",t)},expression:"personAnswers.email"}})],1),i("fieldset",[i("legend",{staticClass:"label"},[e._v("\n              Do you have any Dietary Requirements?\n            ")]),i("div",{staticClass:"checkbox-row"},e._l(e.dietaryRequirements,function(t){return i("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.personAnswers.data.dietaryRequirements,callback:function(t){e.$set(e.personAnswers.data,"dietaryRequirements",t)},expression:"personAnswers.data.dietaryRequirements"}},[e._v("\n                "+e._s(t)+"\n              ")])}),1)]),i("fieldset",[i("legend",{staticClass:"label"},[e._v("\n              Do you have any Accessibility Requirements?\n            ")]),i("div",{staticClass:"checkbox-row"},e._l(e.accessabilityRequirements,function(t){return i("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.personAnswers.data.accessabilityRequirements,callback:function(t){e.$set(e.personAnswers.data,"accessabilityRequirements",t)},expression:"personAnswers.data.accessabilityRequirements"}},[e._v("\n                "+e._s(t)+"\n              ")])}),1)]),i("input",{staticClass:"button is-medium is-pulled-right is-primary",attrs:{type:"submit",value:"Update info"}})],1)])])])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("strong",{staticClass:"has-text-primary"},[e._v("\n            The TEDxAuckland team\n          ")])])}],r=i("6c3f"),a=i("323e"),o=i.n(a),c=i("b5ae"),l=i("75cd"),u={name:"TicketDetails",props:{person:{type:Object,required:!0},ticketOffer:{type:Object,required:!0},event:{type:Object,required:!0}},mixins:[l["a"]],validations:{personAnswers:{firstName:{required:c["required"]},lastName:{required:c["required"]},email:{required:c["required"],email:c["email"]}}},data:function(){return{personAnswers:this.person,errors:{}}},methods:{snackbar:function(){this.$snackbar.open("Default, positioned bottom-right with a green 'OK' button")},updateInfo:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(o.a.start(),r["a"].updateProfile(this.person.id,{person:{firstName:this.personAnswers.firstName,lastName:this.personAnswers.lastName,email:this.personAnswers.email},profile:this.personAnswers.data}).then(function(){o.a.done(),e.$snackbar.open("Successfully updated Ticket Details")}).catch(function(e){o.a.done(),console.log("ERROR",e)}))}},computed:{dietaryRequirements:function(){return this.$store.state.dietaryRequirements},accessabilityRequirements:function(){return this.$store.state.accessabilityRequirements}}},d=u,f=(i("dfb5"),i("2877")),p=Object(f["a"])(d,n,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=ticket-offer-application.628994a8.js.map