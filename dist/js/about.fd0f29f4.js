(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{6411:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a4d3"),n("e01a");var o=n("7a23"),c={class:"row justify-content-center"},i={class:"col-md-5"},u=Object(o["e"])("h3",{class:"text-center"},"Update Subscription",-1),r={class:"form-group"},l=Object(o["e"])("label",null,"Name",-1),s={class:"form-group"},a=Object(o["e"])("label",null,"Description",-1),p={class:"form-group"},b=Object(o["e"])("label",null,"Amount",-1),d={class:"form-group"},m=Object(o["e"])("label",null,"Payment Frequency",-1),f=Object(o["f"])('<option value="weekly">Weekly</option><option value="bimonthly">Bi-monthly</option><option value="monthly">Monthly</option><option value="quarterly">Quarterly</option><option value="biannually">Bi-annually</option><option value="annually">Annually</option>',6),j=[f],O=Object(o["e"])("div",{class:"form-group"},[Object(o["e"])("button",{class:"btn btn-primary btn-block"},"Update Subscription")],-1);function y(t,e,n,f,y,v){return Object(o["q"])(),Object(o["d"])("div",c,[Object(o["e"])("div",i,[u,Object(o["e"])("form",{onSubmit:e[4]||(e[4]=Object(o["G"])((function(){return v.onUpdateForm&&v.onUpdateForm.apply(v,arguments)}),["prevent"]))},[Object(o["e"])("div",r,[l,Object(o["F"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return y.subscription.name=t}),required:""},null,512),[[o["C"],y.subscription.name]])]),Object(o["e"])("div",s,[a,Object(o["F"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return y.subscription.description=t}),required:""},null,512),[[o["C"],y.subscription.description]])]),Object(o["e"])("div",p,[b,Object(o["F"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return y.subscription.amount=t}),required:""},null,512),[[o["C"],y.subscription.amount]])]),Object(o["e"])("div",d,[m,Object(o["F"])(Object(o["e"])("select",{id:"frequency",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return y.subscription.frequency=t})},j,512),[[o["B"],y.subscription.frequency]])]),O],32)])])}var v=n("88b8"),h={data:function(){return{subscription:{}}},created:function(){var t=this,e=v["a"].collection("subscriptions").doc(this.$route.params.id);e.get().then((function(e){t.subscription=e.data()})).catch((function(t){console.log(t)}))},methods:{onUpdateForm:function(t){var e=this;t.preventDefault(),v["a"].collection("subscriptions").doc(this.$route.params.id).update(this.subscription).then((function(){console.log("Subscription successfully updated!"),e.$router.push("/")})).catch((function(t){console.log(t)}))}}},q=n("d959"),F=n.n(q);const g=F()(h,[["render",y]]);e["default"]=g},eeea:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a4d3"),n("e01a");var o=n("7a23"),c={class:"row justify-content-center"},i={class:"col-md-5"},u=Object(o["e"])("h3",{class:"text-center"},"Add Subscription",-1),r={class:"form-group"},l=Object(o["e"])("label",null,"Name",-1),s={class:"form-group"},a=Object(o["e"])("label",null,"Description",-1),p={class:"form-group"},b=Object(o["e"])("label",null,"Amount",-1),d={class:"form-group"},m=Object(o["e"])("label",null,"Payment Frequency",-1),f=Object(o["f"])('<option value="weekly">Weekly</option><option value="bimonthly">Bi-monthly</option><option value="monthly">Monthly</option><option value="quarterly">Quarterly</option><option value="biannually">Bi-annually</option><option value="annually">Annually</option>',6),j=[f],O=Object(o["e"])("div",{class:"form-group"},[Object(o["e"])("button",{class:"btn btn-primary btn-block"},"Add Subscription")],-1);function y(t,e,n,f,y,v){return Object(o["q"])(),Object(o["d"])("div",c,[Object(o["e"])("div",i,[u,Object(o["e"])("form",{onSubmit:e[4]||(e[4]=Object(o["G"])((function(){return v.onFormSubmit&&v.onFormSubmit.apply(v,arguments)}),["prevent"]))},[Object(o["e"])("div",r,[l,Object(o["F"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return y.subscription.name=t}),required:""},null,512),[[o["C"],y.subscription.name]])]),Object(o["e"])("div",s,[a,Object(o["F"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return y.subscription.description=t}),required:""},null,512),[[o["C"],y.subscription.description]])]),Object(o["e"])("div",p,[b,Object(o["F"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return y.subscription.amount=t}),required:""},null,512),[[o["C"],y.subscription.amount]])]),Object(o["e"])("div",d,[m,Object(o["F"])(Object(o["e"])("select",{id:"frequency",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return y.subscription.frequency=t})},j,512),[[o["B"],y.subscription.frequency]])]),O],32)])])}var v=n("88b8"),h={name:"Create",data:function(){return{subscription:{}}},methods:{onFormSubmit:function(t){var e=this;t.preventDefault(),v["a"].collection("subscriptions").add(this.subscription).then((function(){alert("Subscription successfully created!"),e.subscription.name="",e.subscription.description="",e.subscription.amount="",e.subscription.frequency=""})).catch((function(t){console.log(t)}))}}},q=n("d959"),F=n.n(q);const g=F()(h,[["render",y]]);e["default"]=g}}]);
//# sourceMappingURL=about.fd0f29f4.js.map