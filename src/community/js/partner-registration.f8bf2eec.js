(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["partner-registration"],{8324:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return"pending"===e.ticketOffer.status||"purchased"===e.ticketOffer.status?s("partner-registration-pending",{attrs:{event:e.event,person:e.person,ticketOffer:e.ticketOffer}}):"surrendered"===e.ticketOffer.status?s("partner-registration-surrendered",{attrs:{event:e.event,person:e.person}}):e._e()},r=[],i=s("cebc"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.alreadyRegistered?s("ticket",{attrs:{person:e.person,event:e.event,ticketOffer:e.ticketOffer}}):e._e(),e.alreadyRegistered?s("section",{staticClass:"section hide-print"},[e._m(0)]):e._e(),s("div",{staticClass:"section"},[s("page-content",{staticClass:"hide-print",attrs:{contentId:e.contentId}}),s("section",{staticClass:"section container hide-print"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-6"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[s("b-field",{attrs:{label:"First Name",type:{"is-danger":e.$v.personAnswers.firstName.$error},message:e.$v.personAnswers.firstName.$error?"Please enter your first name":""}},[s("b-input",{attrs:{placeholder:"Leslie",type:"text",icon:"account"},on:{blur:function(t){return e.$v.personAnswers.firstName.$touch()}},model:{value:e.personAnswers.firstName,callback:function(t){e.$set(e.personAnswers,"firstName",t)},expression:"personAnswers.firstName"}})],1),s("b-field",{attrs:{label:"Last Name",type:{"is-danger":e.$v.personAnswers.lastName.$error},message:e.$v.personAnswers.lastName.$error?"Please enter your last name":""}},[s("b-input",{attrs:{placeholder:"Miles",type:"text",icon:"account"},on:{blur:function(t){return e.$v.personAnswers.lastName.$touch()}},model:{value:e.personAnswers.lastName,callback:function(t){e.$set(e.personAnswers,"lastName",t)},expression:"personAnswers.lastName"}})],1),s("b-field",{attrs:{label:"Email",type:{"is-danger":e.$v.personAnswers.email.$error||e.errors.email},message:e.errors.email?e.errors.email:""}},[s("b-input",{attrs:{placeholder:"francis@example.com",type:"email",icon:"email"},on:{blur:function(t){return e.$v.personAnswers.email.$touch()}},model:{value:e.personAnswers.email,callback:function(t){e.$set(e.personAnswers,"email",t)},expression:"personAnswers.email"}})],1),s("fieldset",[s("legend",{staticClass:"label"},[e._v("\n                Do you have any Dietary Requirements?\n              ")]),s("div",{staticClass:"checkbox-row"},e._l(e.dietaryRequirements,function(t){return s("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.personAnswers.data.dietaryRequirements,callback:function(t){e.$set(e.personAnswers.data,"dietaryRequirements",t)},expression:"personAnswers.data.dietaryRequirements"}},[e._v("\n                  "+e._s(t)+"\n                ")])}),1)]),s("fieldset",[s("legend",{staticClass:"label"},[e._v("\n                Do you have any Accessibility Requirements?\n              ")]),s("div",{staticClass:"checkbox-row"},e._l(e.accessabilityRequirements,function(t){return s("b-checkbox",{key:t,staticClass:"checkbox-column",attrs:{"native-value":t},model:{value:e.personAnswers.data.accessabilityRequirements,callback:function(t){e.$set(e.personAnswers.data,"accessabilityRequirements",t)},expression:"personAnswers.data.accessabilityRequirements"}},[e._v("\n                  "+e._s(t)+"\n                ")])}),1)]),e.alreadyRegistered?s("div",{staticClass:"has-text-right has-text-success is-success already-registered"},[s("b-icon",{attrs:{icon:"check-circle",type:"is-success",size:"is-small"}}),e._v("\n              You're attending\n            ")],1):e._e(),s("div",{staticClass:"actions-row buttons is-pulled-right"},[e.ticketOffer.id?s("button",{staticClass:"button is-medium",on:{click:function(t){t.preventDefault(),e.rejectModalActive=!0}}},[e._v("\n                "+e._s(e.rejectText)+"\n              ")]):e._e(),s("input",{staticClass:"button is-medium is-primary",attrs:{type:"submit"},domProps:{value:e.acceptText}})])],1)])])]),s("b-modal",{attrs:{active:e.rejectModalActive},on:{"update:active":function(t){e.rejectModalActive=t}}},[s("div",{staticClass:"modal-card center-modal"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v("Are You Sure")]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(t){t.preventDefault(),e.rejectModalActive=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("p",[e._v("\n            The person who invited you will be notified so they can invite\n            someone else.\n          ")])]),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-primary",on:{click:function(t){t.preventDefault(),e.rejectModalActive=!1}}},[e._v("\n            cancel\n          ")]),s("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.rejectTicket()}}},[e._v("\n            Give Up Ticket\n          ")])])])])],1)],1)},c=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-6 content"},[s("h4",[e._v("Great! You're attending.")]),s("p",[e._v("Your ticket is below. Please bring it on the day, either on your phone or printed out.")]),s("p",[e._v("See you on the day!")])])])])}],o=(s("7514"),s("96cf"),s("3b8d")),l=s("3382"),u=s("f568"),d=(s("3c34"),s("6c3f"),s("323e"),s("b5ae")),p=s("5003"),m=s("2f62"),f={name:"PartnerRegistrationPending",components:{PageContent:u["a"],Ticket:l["a"]},validations:{personAnswers:{firstName:{required:d["required"]},lastName:{required:d["required"]},email:{required:d["required"],email:d["email"]}}},beforeMount:function(){this.$store.dispatch("layouts/setBannerVisibility",!1)},mixins:[p["a"]],data:function(){return{personAnswers:this.person,rejectModalActive:!1,contentName:"partner_registration_page_content",errors:{}}},props:{event:{type:Object,required:!0},person:{type:Object,required:!0},ticketOffer:{type:Object,required:!0}},methods:{register:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=9;break}return e.next=4,this.$store.dispatch("people/createPerson",{person:{firstName:this.personAnswers.firstName,lastName:this.personAnswers.lastName,email:this.personAnswers.email},profile:this.personAnswers.data});case 4:if(this.alreadyRegistered){e.next=9;break}return e.next=7,this.$store.dispatch("ticketOffers/registerPartner");case 7:this.$snackbar.open({message:"Successfully Registered: Thank you",position:"is-bottom-left"}),this.$router.push({name:"partner-registration",params:{id:this.$store.getters["ticketOffers/ticketOffer"].id}});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),rejectTicket:function(){this.$store.dispatch("ticketOffers/rejectTicketOffer",this.ticketOffer.id)}},computed:Object(i["a"])({},Object(m["b"])(["dietaryRequirements","accessabilityRequirements"]),Object(m["b"])({organisation:"organisations/organisation"}),{contentId:function(){var e=this;return this.event.pageContent.find(function(t){return t[0]===e.contentName})[1]},alreadyRegistered:function(){return"purchased"===this.ticketOffer.status},acceptText:function(){return this.alreadyRegistered?"Update Details":"Yes, I'm Coming"},rejectText:function(){return this.alreadyRegistered?"I can't make it anymore":"No, I'm Not Coming"}})},v=f,b=(s("a934"),s("2877")),h=Object(b["a"])(v,a,c,!1,null,"4b5e556e",null),y=h.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section"},[s("section",{staticClass:"container section-spacing"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-8"},[s("h1",{staticClass:"title is-1"},[e._v("\n          "+e._s(e.event.title)+"\n        ")]),s("h2",{staticClass:"subtitle is-4 is-primary"},[e._v("\n          Invite Declined\n        ")])])])]),s("section",{staticClass:"container section-spacing content"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-7"},[s("p",[e._v("\n          Thank you "),s("span",{staticClass:"has-text-primary"},[e._v(e._s(e.personName))]),e._v("\n          for indicating you will not be able to attend\n          "),s("strong",[e._v(" "+e._s(e.event.title)+". ")])]),s("p",[e._v("\n          We hope to see you at a future event\n        ")]),e._m(0)])])])])},k=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",{staticClass:"has-text-primary"},[e._v("\n            TEDxAuckland\n          ")])])}],_=s("75cd"),w={name:"PartnerRegistrationSurrendered",props:{event:{type:Object,required:!0},person:{type:Object,required:!0}},mixins:[_["a"]]},C=w,A=Object(b["a"])(C,g,k,!1,null,null,null),$=A.exports,x={name:"PartnerRegistration",components:{PartnerRegistrationPending:y,PartnerRegistrationSurrendered:$},data:function(){return{status:{pending:"partner-registration"}}},computed:Object(i["a"])({},Object(m["b"])({event:"events/event",person:"people/person",ticketOffer:"ticketOffers/ticketOffer"}))},O=x,R=Object(b["a"])(O,n,r,!1,null,null,null);t["default"]=R.exports},a934:function(e,t,s){"use strict";var n=s("c6be"),r=s.n(n);r.a},c6be:function(e,t,s){}}]);
//# sourceMappingURL=partner-registration.f8bf2eec.js.map