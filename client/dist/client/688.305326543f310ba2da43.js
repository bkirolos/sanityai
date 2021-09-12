(self.webpackChunktulsa_remote_application_client=self.webpackChunktulsa_remote_application_client||[]).push([[688],{6688:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ProductModule:()=>F});var r=n(8583),o=n(665),c=n(7770),i=n(4330),a=n(4762),l=n(7716),d=n(8832),s=n(3252),u=n(1839);const p=["searchTable"];function g(e,t){if(1&e&&(l.TgZ(0,"option",17),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.Q6J("value",e.id),l.xp6(1),l.Oqu(e.name)}}let h=(()=>{class e{constructor(e,t){this.productService=e,this.modalRef=t}ngOnInit(){this.searchTable.searchUrl="/product",this.searchTable.columns=[{field:"company.name",header:"Company"},{field:"sku",header:"Product SKU"},{field:"name",header:"Product Name"},{field:"type",header:"Product Type",hide:"sm",renderer:e=>this.productService.productTypeRenderer(e.type)}],this.searchTable.onRowClick=e=>this.onRowClick(e),this.searchTable.noRouting=!0,this.searchTable.defaultFilter={type:null}}onRowClick(e){this.modalRef.close(e)}onCancelBtn(){this.modalRef.close(null)}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(T),l.Y36(d.Kz))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-product-search-modal"]],viewQuery:function(e,t){if(1&e&&l.Gf(p,7),2&e){let e;l.iGM(e=l.CRH())&&(t.searchTable=e.first)}},decls:29,vars:6,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn","btn-sm","pull-right",3,"click"],[1,"fa","fa-times"],[1,"modal-body"],[1,"row","mb-3"],[1,"col-md-3"],[1,"form-label"],["type","text","name","sku",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","type",1,"form-select",3,"ngModel","ngModelChange"],[3,"ngValue"],[3,"value",4,"ngFor","ngForOf"],["searchTable",""],[3,"searchTable"],[1,"modal-footer","justify-content-between"],[1,"btn","btn-primary",3,"click"],[3,"value"]],template:function(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",0),l.TgZ(1,"h4",1),l._uU(2,"Product Search"),l.qZA(),l.TgZ(3,"button",2),l.NdJ("click",function(){return t.onCancelBtn()}),l._UZ(4,"i",3),l.qZA(),l.qZA(),l.TgZ(5,"div",4),l.TgZ(6,"form"),l.TgZ(7,"div",5),l.TgZ(8,"div",6),l.TgZ(9,"label",7),l._uU(10,"Product SKU"),l.qZA(),l.TgZ(11,"input",8),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.MAs(24).params.filter.sku=t})("ngModelChange",function(){return l.CHM(e),l.MAs(24).onFilterChange()}),l.qZA(),l.qZA(),l.TgZ(12,"div",6),l.TgZ(13,"label",7),l._uU(14,"Product Name"),l.qZA(),l.TgZ(15,"input",9),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.MAs(24).params.filter.name=t})("ngModelChange",function(){return l.CHM(e),l.MAs(24).onFilterChange()}),l.qZA(),l.qZA(),l.TgZ(16,"div",6),l.TgZ(17,"label",7),l._uU(18,"Product Type"),l.qZA(),l.TgZ(19,"select",10),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.MAs(24).params.filter.type=t})("ngModelChange",function(){return l.CHM(e),l.MAs(24).onFilterChange(!0)}),l.TgZ(20,"option",11),l._uU(21,"ALL"),l.qZA(),l.YNc(22,g,2,2,"option",12),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(23,"search-table",null,13),l._UZ(25,"search-footer",14),l.qZA(),l.TgZ(26,"div",15),l.TgZ(27,"button",16),l.NdJ("click",function(){return t.onCancelBtn()}),l._uU(28,"Cancel"),l.qZA(),l.qZA()}if(2&e){const e=l.MAs(24);l.xp6(11),l.Q6J("ngModel",e.params.filter.sku),l.xp6(4),l.Q6J("ngModel",e.params.filter.name),l.xp6(4),l.Q6J("ngModel",e.params.filter.type),l.xp6(1),l.Q6J("ngValue",null),l.xp6(2),l.Q6J("ngForOf",t.productService.productTypes),l.xp6(3),l.Q6J("searchTable",e)}},directives:[o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,o.EJ,o.YN,o.Kr,r.sg,s.D,u.s],styles:[""]}),e})();var f=n(8191),m=n(1681);const Z=[{id:"kit",name:"Kit",class:""},{id:"sample",name:"Sample",class:""},{id:"report",name:"Report",class:""}];let T=(()=>{class e{constructor(e,t,n){this.http=e,this.searchService=t,this.modalService=n,this.productTypes=Z}searchProducts(e){return this.searchService.search("/product",e)}getProductById(e){return this.http.get(`/product/${e}`)}saveProduct(e){return this.http.post("/product",e)}deleteProductById(e){return this.http.delete(`/product/${e}`)}productTypeRenderer(e){const t=this.productTypes.find(t=>t.id===e);return t?`<span class="${t.class}">${t.name}</span>`:`${e}`}productTypeName(e){const t=this.productTypes.find(t=>t.id===e);return t?t.name:`${e}`}productTypeClass(e){const t=this.productTypes.find(t=>t.id===e);return t?t.class:`${e}`}openProductSearchModal(e={}){let t=null;return new Promise((n,r)=>{const o=this.modalService.open(h,{size:"lg"});o.componentInstance.defaultParams=e,t=o.closed.subscribe(e=>{t.unsubscribe(),n(e)})})}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(f.O),l.LFG(m.o),l.LFG(d.FF))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=n(915),M=n(4382);function A(e,t){if(1&e&&(l.TgZ(0,"option",16),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.Q6J("value",e.id),l.xp6(1),l.Oqu(e.name)}}function b(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"button",17),l.NdJ("click",function(){return l.CHM(e),l.oxw(2).onDeleteBtn()}),l._uU(1,"Delete"),l.qZA()}}function y(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"form",null,1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"h2",4),l._uU(5,"Product Detail"),l.qZA(),l.TgZ(6,"div",5),l.TgZ(7,"div",6),l.TgZ(8,"label",7),l._uU(9,"Product SKU"),l.qZA(),l.TgZ(10,"input",8),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.oxw().product.sku=t}),l.qZA(),l.qZA(),l.TgZ(11,"div",9),l.TgZ(12,"label",7),l._uU(13,"Product Name"),l.qZA(),l.TgZ(14,"input",10),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.oxw().product.name=t}),l.qZA(),l.qZA(),l.TgZ(15,"div",6),l.TgZ(16,"label",7),l._uU(17,"Product Type"),l.qZA(),l.TgZ(18,"select",11),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.oxw().product.type=t}),l.YNc(19,A,2,2,"option",12),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",13),l.TgZ(21,"button",14),l.NdJ("click",function(){return l.CHM(e),l.oxw().onSaveBtn()}),l._uU(22,"Save"),l.qZA(),l.YNc(23,b,2,0,"button",15),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=l.MAs(1),t=l.oxw();l.xp6(10),l.Q6J("ngModel",t.product.sku)("disabled",t.readonly),l.xp6(4),l.Q6J("ngModel",t.product.name)("disabled",t.readonly),l.xp6(4),l.Q6J("ngModel",t.product.type),l.xp6(1),l.Q6J("ngForOf",t.productService.productTypes),l.xp6(2),l.Q6J("disabled",!e.valid||e.pristine),l.xp6(2),l.Q6J("ngIf",!t.isNew)}}let C=(()=>{class e{constructor(e,t,n,r,o){this.productService=e,this.route=t,this.router=n,this.alertService=r,this.confirmService=o,this.readonly=!1}ngOnInit(){return(0,a.mG)(this,void 0,void 0,function*(){const e=this.route.snapshot.params.productId;console.log("ProductDetailPageComponent: productId=%o",e),this.product="new"===e?{}:yield this.productService.getProductById(e)})}get isNew(){var e;return!(null===(e=this.product)||void 0===e?void 0:e._id)}onSaveBtn(){return(0,a.mG)(this,void 0,void 0,function*(){this.product=yield this.productService.saveProduct(this.product),this.alertService.info("Product saved."),this.router.navigate(["/product/search"])})}onDeleteBtn(){return(0,a.mG)(this,void 0,void 0,function*(){this.confirmService.confirm({text:"Are you sure you want to delete this product?"}).then(e=>(0,a.mG)(this,void 0,void 0,function*(){e&&(yield this.productService.deleteProductById(this.product._id),this.alertService.warning("Product deleted."),this.router.navigate(["/product/search"]))}))})}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(T),l.Y36(i.gz),l.Y36(i.F0),l.Y36(v.c),l.Y36(M.z))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-product-detail-page"]],decls:1,vars:1,consts:[[4,"ngIf"],["form","ngForm"],[1,"card","bg-light","mt-3","mb-3"],[1,"card-body"],[1,"card-title"],[1,"row","mb-3"],[1,"col-md-3"],[1,"form-label"],["name","productSku","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],[1,"col-md-6"],["name","productName","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["name","productType","required","",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"card-footer","d-flex","justify-content-between"],[1,"btn","btn-primary",3,"disabled","click"],["class","btn btn-danger",3,"click",4,"ngIf"],[3,"value"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&l.YNc(0,y,24,8,"form",0),2&e&&l.Q6J("ngIf",t.product)},directives:[r.O5,o._Y,o.JL,o.F,o.Fj,o.Q7,o.JJ,o.On,o.EJ,r.sg,o.YN,o.Kr],styles:[""]}),e})();const q=["searchTable"];function J(e,t){if(1&e&&(l.TgZ(0,"option",11),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.Q6J("value",e.id),l.xp6(1),l.Oqu(e.name)}}const _=[{path:"",redirectTo:"search"},{path:"search",component:(()=>{class e{constructor(e,t){this.router=e,this.productService=t}ngOnInit(){this.searchTable.searchUrl="/product",this.searchTable.columns=[{field:"sku",header:"Product SKU"},{field:"name",header:"Product Name"},{field:"type",header:"Product Type",hide:"sm",renderer:e=>this.productService.productTypeRenderer(e.type)}],this.searchTable.onRowClick=e=>this.onRowClick(e),this.searchTable.defaultFilter={type:null},this.searchTable.addNewUrl="/product/new"}onRowClick(e){this.router.navigate(["/product",e._id])}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(i.F0),l.Y36(T))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-product-search-page"]],viewQuery:function(e,t){if(1&e&&l.Gf(q,7),2&e){let e;l.iGM(e=l.CRH())&&(t.searchTable=e.first)}},decls:24,vars:6,consts:[[1,"mt-2"],[1,"row"],[1,"col-md-3"],[1,"form-label"],["type","text","name","sku",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","type",1,"form-select",3,"ngModel","ngModelChange"],[3,"ngValue"],[3,"value",4,"ngFor","ngForOf"],["searchTable",""],[3,"searchTable"],[3,"value"]],template:function(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"h1",0),l._uU(1,"Product Search"),l.qZA(),l._UZ(2,"hr"),l.TgZ(3,"div"),l.TgZ(4,"form"),l.TgZ(5,"div",1),l.TgZ(6,"div",2),l.TgZ(7,"label",3),l._uU(8,"Product SKU"),l.qZA(),l.TgZ(9,"input",4),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.MAs(22).params.filter.sku=t})("ngModelChange",function(){return l.CHM(e),l.MAs(22).onFilterChange()}),l.qZA(),l.qZA(),l.TgZ(10,"div",2),l.TgZ(11,"label",3),l._uU(12,"Product Name"),l.qZA(),l.TgZ(13,"input",5),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.MAs(22).params.filter.name=t})("ngModelChange",function(){return l.CHM(e),l.MAs(22).onFilterChange()}),l.qZA(),l.qZA(),l.TgZ(14,"div",2),l.TgZ(15,"label",3),l._uU(16,"Product Type"),l.qZA(),l.TgZ(17,"select",6),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.MAs(22).params.filter.type=t})("ngModelChange",function(){return l.CHM(e),l.MAs(22).onFilterChange(!0)}),l.TgZ(18,"option",7),l._uU(19,"ALL"),l.qZA(),l.YNc(20,J,2,2,"option",8),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(21,"search-table",null,9),l._UZ(23,"search-footer",10)}if(2&e){const e=l.MAs(22);l.xp6(9),l.Q6J("ngModel",e.params.filter.sku),l.xp6(4),l.Q6J("ngModel",e.params.filter.name),l.xp6(4),l.Q6J("ngModel",e.params.filter.type),l.xp6(1),l.Q6J("ngValue",null),l.xp6(2),l.Q6J("ngForOf",t.productService.productTypes),l.xp6(3),l.Q6J("searchTable",e)}},directives:[o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,o.EJ,o.YN,o.Kr,r.sg,s.D,u.s],styles:[""]}),e})()},{path:":productId",component:C}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.Bz.forChild(_)],i.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.ez,c.t,o.u5,w]]}),e})()}}]);