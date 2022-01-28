(self.webpackChunktulsa_remote_application_client=self.webpackChunktulsa_remote_application_client||[]).push([[147],{3147:(e,s,t)=>{"use strict";t.r(s),t.d(s,{ApplicationResponseModule:()=>w});var n=t(8583),i=t(665),o=t(7770),a=t(4330),r=t(4762),p=t(7716),l=t(8191),c=t(1681),u=t(8832);const d=[{id:"pending",name:"Pending",class:"text-warning"},{id:"submitted",name:"Submitted",class:"text-success"},{id:"rejected",name:"Rejected",class:"text-danger"}];let h=(()=>{class e{constructor(e,s,t){this.http=e,this.searchService=s,this.modalService=t,this.applicationResponseStatuses=d}searchApplicationResponses(e){return this.searchService.search("/response",e)}getApplicationResponseById(e){return this.http.get(`/response/${e}`)}saveApplicationResponse(e){return this.http.post("/response",e)}deleteApplicationResponseById(e){return this.http.delete(`/response/${e}`)}applicationResponseStatusRenderer(e){const s=this.applicationResponseStatuses.find(s=>s.id===e);return s?`<span class="${s.class}">${s.name}</span>`:`${e}`}applicationResponseStatusName(e){const s=this.applicationResponseStatuses.find(s=>s.id===e);return s?s.name:`${e}`}applicationResponseStatusClass(e){const s=this.applicationResponseStatuses.find(s=>s.id===e);return s?s.class:`${e}`}getResponseQuestionAnswer(e,s){const t=e.questionAnswers.find(e=>e.questionKey===s);return t?t.answer:"[none]"}}return e.\u0275fac=function(s){return new(s||e)(p.LFG(l.O),p.LFG(c.o),p.LFG(u.FF))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=t(6546),m=t(6891);function f(e,s){if(1&e&&(p.TgZ(0,"option",17),p._uU(1),p.qZA()),2&e){const e=s.$implicit;p.Q6J("value",e.id),p.xp6(1),p.Oqu(e.name)}}function Z(e,s){if(1&e&&(p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td"),p._uU(4),p.qZA(),p.qZA()),2&e){const e=s.$implicit;p.xp6(2),p.Oqu(e.questionKey),p.xp6(2),p.Oqu(e.answer)}}function A(e,s){if(1&e){const e=p.EpF();p.TgZ(0,"form",null,1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"h2",4),p._uU(5,"ApplicationResponse Detail"),p.qZA(),p.TgZ(6,"div",5),p.TgZ(7,"div",6),p.TgZ(8,"label",7),p._uU(9,"Applicant Name"),p.qZA(),p._UZ(10,"input",8),p.qZA(),p.TgZ(11,"div",6),p.TgZ(12,"label",7),p._uU(13,"Status"),p.qZA(),p.TgZ(14,"select",9),p.NdJ("ngModelChange",function(s){return p.CHM(e),p.oxw().response.status=s}),p.YNc(15,f,2,2,"option",10),p.qZA(),p.qZA(),p.TgZ(16,"div",11),p.TgZ(17,"label",7),p._uU(18,"Create Date"),p.qZA(),p._UZ(19,"input",12),p.ALo(20,"date"),p.qZA(),p.TgZ(21,"div",11),p.TgZ(22,"label",7),p._uU(23,"BH Candidate ID"),p.qZA(),p._UZ(24,"input",13),p.qZA(),p.TgZ(25,"div",11),p.TgZ(26,"label",7),p._uU(27,"IP Address"),p.qZA(),p._UZ(28,"input",14),p.qZA(),p.qZA(),p.TgZ(29,"table",15),p.TgZ(30,"thead"),p.TgZ(31,"tr"),p.TgZ(32,"th"),p._uU(33,"Key"),p.qZA(),p.TgZ(34,"th"),p._uU(35,"Answer"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(36,"tbody"),p.YNc(37,Z,5,2,"tr",16),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&e){const e=p.oxw();p.xp6(10),p.Q6J("value",e.fullName),p.xp6(4),p.Q6J("ngModel",e.response.status),p.xp6(1),p.Q6J("ngForOf",e.responseService.applicationResponseStatuses),p.xp6(4),p.Q6J("value",p.xi3(20,7,e.response.createDate,"short")),p.xp6(5),p.Q6J("value",e.response.bullhornCandidateId||""),p.xp6(4),p.Q6J("value",e.response.ipAddress||""),p.xp6(9),p.Q6J("ngForOf",e.response.questionAnswers)}}let v=(()=>{class e{constructor(e,s,t,n,i){this.responseService=e,this.route=s,this.router=t,this.alertService=n,this.confirmService=i,this.readonly=!1,this.fullName=""}ngOnInit(){return(0,r.mG)(this,void 0,void 0,function*(){const e=this.route.snapshot.params.applicationResponseId;console.log("ApplicationResponseDetailPageComponent: applicationResponseId=%o",e),this.response="new"===e?{}:yield this.responseService.getApplicationResponseById(e);const s=this.responseService.getResponseQuestionAnswer(this.response,"firstName"),t=this.responseService.getResponseQuestionAnswer(this.response,"lastName");this.fullName=`${s} ${t}`})}get isNew(){var e;return!(null===(e=this.response)||void 0===e?void 0:e._id)}onSaveBtn(){return(0,r.mG)(this,void 0,void 0,function*(){this.response=yield this.responseService.saveApplicationResponse(this.response),this.alertService.info("ApplicationResponse saved."),this.router.navigate(["/applicationResponse/search"])})}onDeleteBtn(){return(0,r.mG)(this,void 0,void 0,function*(){this.confirmService.confirm({text:"Are you sure you want to delete this applicationResponse?"}).then(e=>(0,r.mG)(this,void 0,void 0,function*(){e&&(yield this.responseService.deleteApplicationResponseById(this.response._id),this.alertService.warning("ApplicationResponse deleted."),this.router.navigate(["/applicationResponse/search"]))}))})}renderName(e){}}return e.\u0275fac=function(s){return new(s||e)(p.Y36(h),p.Y36(a.gz),p.Y36(a.F0),p.Y36(g.c),p.Y36(m.z))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-application-response-detail-page"]],decls:1,vars:1,consts:[[4,"ngIf"],["form","ngForm"],[1,"card","bg-light","mt-3","mb-3"],[1,"card-body"],[1,"card-title"],[1,"row","mb-3"],[1,"col-md-3"],[1,"form-label"],["name","fullName","disabled","",1,"form-control",3,"value"],["name","status","disabled","",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-2"],["name","createDate","disabled","",1,"form-control",3,"value"],["name","bullhornCandidateId","disabled","",1,"form-control",3,"value"],["name","ipAddress","disabled","",1,"form-control",3,"value"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(e,s){1&e&&p.YNc(0,A,38,10,"form",0),2&e&&p.Q6J("ngIf",s.response)},directives:[n.O5,i._Y,i.JL,i.F,i.EJ,i.JJ,i.On,n.sg,i.YN,i.Kr],pipes:[n.uU],styles:[""]}),e})();var T=t(3252),q=t(1839);const R=["searchTable"];function b(e,s){if(1&e&&(p.TgZ(0,"option",10),p._uU(1),p.qZA()),2&e){const e=s.$implicit;p.Q6J("value",e.id),p.xp6(1),p.Oqu(e.name)}}const S=[{path:"",redirectTo:"search"},{path:"search",component:(()=>{class e{constructor(e,s){this.router=e,this.responseService=s}ngOnInit(){this.searchTable.searchUrl="/response",this.searchTable.columns=[{field:"name",header:"Applicant Name",renderer:e=>this.renderName(e)},{field:"status",header:"Status",hide:"sm",renderer:e=>this.responseService.applicationResponseStatusRenderer(e.status)},{field:"createDate",header:"Create Date",renderer:"date:short"},{field:"ipAddress",header:"IP Address",hide:"sm"}],this.searchTable.onRowClick=e=>this.onRowClick(e),this.searchTable.defaultFilter={type:null}}renderName(e){return`${this.responseService.getResponseQuestionAnswer(e,"firstName")} ${this.responseService.getResponseQuestionAnswer(e,"lastName")}`}onRowClick(e){this.router.navigate(["/admin/application-response",e._id])}}return e.\u0275fac=function(s){return new(s||e)(p.Y36(a.F0),p.Y36(h))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-applicationResponse-search-page"]],viewQuery:function(e,s){if(1&e&&p.Gf(R,7),2&e){let e;p.iGM(e=p.CRH())&&(s.searchTable=e.first)}},decls:20,vars:5,consts:[[1,"mt-2"],[1,"row"],[1,"col-md-3"],[1,"form-label"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","status",1,"form-select",3,"ngModel","ngModelChange"],[3,"ngValue"],[3,"value",4,"ngFor","ngForOf"],["searchTable",""],[3,"searchTable"],[3,"value"]],template:function(e,s){if(1&e){const e=p.EpF();p.TgZ(0,"h1",0),p._uU(1,"ApplicationResponse Search"),p.qZA(),p._UZ(2,"hr"),p.TgZ(3,"div"),p.TgZ(4,"form"),p.TgZ(5,"div",1),p.TgZ(6,"div",2),p.TgZ(7,"label",3),p._uU(8,"Applicant Name"),p.qZA(),p.TgZ(9,"input",4),p.NdJ("ngModelChange",function(s){return p.CHM(e),p.MAs(18).params.filter.name=s})("ngModelChange",function(){return p.CHM(e),p.MAs(18).onFilterChange()}),p.qZA(),p.qZA(),p.TgZ(10,"div",2),p.TgZ(11,"label",3),p._uU(12,"Status"),p.qZA(),p.TgZ(13,"select",5),p.NdJ("ngModelChange",function(s){return p.CHM(e),p.MAs(18).params.filter.status=s})("ngModelChange",function(){return p.CHM(e),p.MAs(18).onFilterChange(!0)}),p.TgZ(14,"option",6),p._uU(15,"ALL"),p.qZA(),p.YNc(16,b,2,2,"option",7),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p._UZ(17,"search-table",null,8),p._UZ(19,"search-footer",9)}if(2&e){const e=p.MAs(18);p.xp6(9),p.Q6J("ngModel",e.params.filter.name),p.xp6(4),p.Q6J("ngModel",e.params.filter.status),p.xp6(1),p.Q6J("ngValue",null),p.xp6(2),p.Q6J("ngForOf",s.responseService.applicationResponseStatuses),p.xp6(3),p.Q6J("searchTable",e)}},directives:[i._Y,i.JL,i.F,i.Fj,i.JJ,i.On,i.EJ,i.YN,i.Kr,n.sg,T.D,q.s],styles:[""]}),e})()},{path:":applicationResponseId",component:v}];let _=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[a.Bz.forChild(S)],a.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[n.ez,o.t,i.u5,_]]}),e})()}}]);