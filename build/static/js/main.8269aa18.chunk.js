(this["webpackJsonpuser-sign-selfie-validator"]=this["webpackJsonpuser-sign-selfie-validator"]||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),a=c(30),n=c.n(a),o=(c(41),c(18)),i=c(2),l=c(4),u=c(7),d=c(6),m=c(5),j=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return null}}]),c}(s.a.Component),h=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return null}}]),c}(s.a.Component);var b=Object(i.f)((function(e){var t=e.history;return Object(r.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}})),null})),p=c(0);var O=function(e){return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(j,{}),e.children,Object(p.jsx)(h,{})]})]})},f=c(8),x=c.n(f),g=c(13),v=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(l.a)(this,c);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).getErrors=function(t){return e.state.errors.filter((function(e){return t===e.field}))},e}return c}(s.a.Component),A=c(32),N=c.n(A),S="https://financiaonline.com.ar/validacion-usuario/api/";function w(){return(w=Object(g.a)(x.a.mark((function e(t){var c,r,s,a=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,N.a.create({baseURL:S,headers:{"Content-Type":"application/json;charset=UTF-8"}});case 3:r=e.sent,s=function(e){if(!e.response)return Promise.reject(e);switch(e.response.status){case 401:window.location.href="/logout";break;default:console.error(e.response.status,e.message)}return Promise.reject(e)},r.interceptors.response.use(null,s),e.t0=c.method,e.next="GET"===e.t0?9:"POST"===e.t0?18:"PUT"===e.t0?21:"DELETE"===e.t0?24:27;break;case 9:if(!c.parameter){e.next=15;break}return e.next=12,r.get("".concat(t,"?").concat(c.parameter));case 12:return e.abrupt("return",e.sent);case 15:return e.next=17,r.get("".concat(t));case 17:return e.abrupt("return",e.sent);case 18:return e.next=20,r.post(t,JSON.parse(c.body));case 20:return e.abrupt("return",e.sent);case 21:return e.next=23,r.put(t,JSON.parse(c.body));case 23:return e.abrupt("return",e.sent);case 24:return e.next=26,r.delete("".concat(t).concat(c.parameter));case 26:return e.abrupt("return",e.sent);case 27:return e.abrupt("break",28);case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y={pdfs:{create:function(e){return function(e){return w.apply(this,arguments)}("/addPdf/",{method:"POST",body:JSON.stringify(e)})}}},k=function(){function e(){return(e=Object(g.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.pdfs.create(t);case 3:return c=e.sent,e.abrupt("return",{loading:!1,pdfs:c.data.response,error:null});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{loading:!1,pdfs:[],error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return{add:function(t){return e.apply(this,arguments)}}}(),C="Por favor complete este campo",D=function(e){return void 0===e||null===e||0===e.length},I=function(e){var t=[];return D(e.name)&&t.push({field:"name",message:C}),D(e.surname)&&t.push({field:"surname",message:C}),t},U=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(e){var r;return Object(l.a)(this,c),(r=t.call(this,e)).name=s.a.createRef(),r.surname=s.a.createRef(),r.documentType=s.a.createRef(),r.documentNumber=s.a.createRef(),r.capital=s.a.createRef(),r.plazo=s.a.createRef(),r.cuota=s.a.createRef(),r.neto=s.a.createRef(),r.getUserData=function(){return{name:r.name.current.value,surname:r.surname.current.value,documentType:r.documentType.current.value,documentNumber:r.documentNumber.current.value,capital:r.capital.current.value,plazo:r.plazo.current.value,cuota:r.cuota.current.value,neto:r.neto.current.value}},r.showSelfie=function(){r.setState({showSelfie:!0})},r.hideSelfie=function(){r.setState({showSelfie:!1})},r.showSignature=function(){r.setState({showSignature:!0})},r.hideSignature=function(){r.setState({showSignature:!1})},r.showUploadImages=function(){var e=r.getUserData(),t=I(e);0===t.length?(localStorage.setItem("userData",JSON.stringify(e)),r.setState({showUploadImages:!0})):r.setState({errors:t})},r.hideUploadImages=function(){r.setState({showUploadImages:!1})},r.buttonSelfieOnClick=function(){r.hideSelfie(),r.showSignature()},r.buttonSignatureOnClick=function(){r.hideSignature(),r.setState({allInfoOk:!0,userData:r.getUserData()})},r.buttonUploadImagesOnClick=function(){r.hideUploadImages(),r.showSelfie()},r.createPdf=Object(g.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={signature:localStorage.getItem("userSignature"),selfie:localStorage.getItem("userSelfie"),documentFront:localStorage.getItem("userDocumentFront"),documentBack:localStorage.getItem("userDocumentBack"),userData:localStorage.getItem("userData")},r.setState({loading:!0}),e.next=4,k.add(t);case 4:r.setState({showThanks:!0});case 5:case"end":return e.stop()}}),e)}))),r.state={loading:!1,showSignature:!1,showSelfie:!1,showThanks:!1,allInfoOk:!1,showUploadImages:!1,errors:[],userData:[]},r}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userSignature"),localStorage.removeItem("userSelfie"),localStorage.removeItem("userDocumentFront"),localStorage.removeItem("userDocumentBack"),localStorage.removeItem("userData");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),c}(v),R=c(33),E=c.n(R),F=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(l.a)(this,c);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={trimmedDataURL:null},e.sigPad={},e.clear=function(){e.sigPad.clear(),localStorage.removeItem("userSignature")},e.saveSignature=function(){localStorage.setItem("userSignature",e.sigPad.getCanvas().toDataURL("image/png")),e.props.buttonSignatureOnClick()},e}return Object(u.a)(c,[{key:"render",value:function(){var e=this;return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("div",{className:"topContainer col-12 col-md-6",children:[Object(p.jsx)("div",{className:"row m-2",children:Object(p.jsxs)("div",{className:"col-12 col-md-12",children:[Object(p.jsx)("p",{children:"Ingresa tu firma"}),Object(p.jsx)("p",{children:'Cuando est\xe9s de acuerdo presiona "Guardar firma"'})]})}),Object(p.jsx)("div",{className:"row justify-content-center m-2",children:Object(p.jsx)(E.a,{canvasProps:{className:"signaturePad"},ref:function(t){e.sigPad=t}})}),Object(p.jsxs)("div",{className:"row justify-content-center m-2",children:[Object(p.jsx)("div",{className:"col-6 col-md-3",children:Object(p.jsx)("button",{className:"btn btn-block btn-outline-secondary",onClick:this.clear,children:"Limpiar"})}),Object(p.jsx)("div",{className:"col-6 col-md-3",children:Object(p.jsx)("button",{className:"btn btn-block btn-outline-success",onClick:this.saveSignature,children:"Guardar firma"})})]})]})})}}]),c}(r.Component),J=c(34),T=c.n(J),Q=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(l.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={imgURL:null},e.webcamRef=s.a.createRef(),e.clear=function(){e.setState({imgURL:null})},e.capture=function(){var t=e.webcamRef.current.getScreenshot(),c=e.webcamRef.current.video.srcObject;c&&(e.webcamRef.current.video.srcObject=null,c.getTracks().forEach((function(e){c.removeTrack(e),e.stop()})),c=null),e.setState({imgURL:t})},e.saveImage=function(){localStorage.setItem("userSelfie",e.state.imgURL),e.props.buttonSelfieOnClick()},e}return Object(u.a)(c,[{key:"render",value:function(){var e=this.state.imgURL;return Object(p.jsxs)(p.Fragment,{children:[e?null:Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("div",{className:"topContainer col-12 col-md-6",children:[Object(p.jsx)("div",{className:"row m-2",children:Object(p.jsxs)("div",{className:"col-12 col-md-12",children:[Object(p.jsx)("p",{children:"Te sacaremos una foto"}),Object(p.jsx)("p",{children:'Cuando est\xe9s de acuerdo presiona "Capturar foto" y luego "Guardar foto"'})]})}),Object(p.jsxs)("div",{className:"row justify-content-center m-2",children:[Object(p.jsx)(T.a,{audio:!1,height:380,ref:this.webcamRef,screenshotFormat:"image/jpeg",width:380,videoConstraints:{width:400,height:400,facingMode:"user"}}),Object(p.jsx)("button",{className:"btn btn-block btn-outline-success mt-2",onClick:this.capture,children:"Capturar foto"})]})]})}),e?Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("div",{className:"topContainer col-12 col-md-6",children:[Object(p.jsx)("div",{className:"row justify-content-center m-2",children:Object(p.jsx)("img",{src:e,alt:"Foto"})}),Object(p.jsxs)("div",{className:"row justify-content-center m-2",children:[Object(p.jsx)("div",{className:"col-6 col-md-3",children:Object(p.jsx)("button",{className:"btn btn-block btn-outline-secondary",onClick:this.clear,children:"Tomar otra foto"})}),Object(p.jsx)("div",{className:"col-6 col-md-3",children:Object(p.jsx)("button",{className:"btn btn-block btn-outline-success",onClick:this.saveImage,children:"Guardar foto"})})]})]})}):null]})}}]),c}(r.Component),K=c(35),z=c(36),B=c.n(z),P=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(l.a)(this,c);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={errors:[],maxFileSize:2097152,maxWidthOrHeight:1600,imgDocumentFront:null,imgDocumentBack:null},e.resizeFile=function(){var e=Object(g.a)(x.a.mark((function e(t,c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){B.a.imageFileResizer(t,c,c,"PNG",100,0,(function(t){e(t)}),"base64")})));case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),e.uploadAndResizeImage=function(){var t=Object(g.a)(x.a.mark((function t(c){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.target.files[0],t.t0=e,t.t1=K.a,t.t2={},t.t3=c.target.name,t.next=7,e.resizeFile(r,e.state.maxWidthOrHeight);case 7:t.t4=t.sent,t.t5=(0,t.t1)(t.t2,t.t3,t.t4),t.t0.setState.call(t.t0,t.t5);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.saveDocuments=function(){localStorage.setItem("userDocumentFront",e.state.imgDocumentFront),localStorage.setItem("userDocumentBack",e.state.imgDocumentBack),e.props.buttonUploadImagesOnClick()},e}return Object(u.a)(c,[{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("div",{className:"topContainer col-12 col-md-6",children:[Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-10",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Seleccione una imagen del frente de tu DNI"}),Object(p.jsxs)("div",{className:"row justify-content-center m-4 border rounded",style:{height:"200px"},children:[!this.state.imgDocumentFront&&Object(p.jsx)("input",{style:{paddingTop:"80px"},type:"file",name:"imgDocumentFront",onChange:this.uploadAndResizeImage}),this.state.imgDocumentFront&&Object(p.jsx)("img",{src:this.state.imgDocumentFront,alt:"Imagen",style:{border:"0px",maxHeight:"180px",marginTop:"10px"}})]})]})})}),Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-10",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Seleccione una imagen del dorso de tu DNI"}),Object(p.jsxs)("div",{className:"row justify-content-center m-4 border rounded",style:{height:"200px"},children:[!this.state.imgDocumentBack&&Object(p.jsx)("input",{style:{paddingTop:"80px"},type:"file",name:"imgDocumentBack",onChange:this.uploadAndResizeImage}),this.state.imgDocumentBack&&Object(p.jsx)("img",{src:this.state.imgDocumentBack,alt:"Imagen",style:{border:"0px",maxHeight:"180px",marginTop:"10px"}})]})]})})}),Object(p.jsx)("div",{className:"row justify-content-center m-2",children:Object(p.jsx)("div",{className:"col-6 col-md-3",children:Object(p.jsx)("button",{onClick:this.saveDocuments,children:"Continuar"})})})]})})}}]),c}(r.Component),V="text",L="checkbox",H="textarea",W="number",G="password",Y=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var e=this.props,t=e.type,c=e.forwardRef,r=e.defaultValue,a=e.placeholder,n=e.step,o=void 0===n?1:n,i=e.min,l=void 0===i?0:i,u=this.props.err?this.props.err:[],d=0===u.length?"":"border-danger";return Object(p.jsxs)(s.a.Fragment,{children:[(t===V||t===L||t===G||t===W)&&Object(p.jsx)("input",{className:d,defaultValue:r,type:t,ref:c,placeholder:a,min:l,step:o}),t===H&&Object(p.jsx)("textarea",{className:"form-control",ref:c}),Object(p.jsxs)("small",{className:"text-small text-danger",children:[u.map((function(e){return e.message})),"\xa0"]})]})}}]),c}(s.a.Component),Z=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var e=this.state,t=e.showSignature,c=e.showSelfie,r=e.showThanks,a=e.allInfoOk,n=e.loading,o=e.showUploadImages,i=e.userData;return r?Object(p.jsx)(s.a.Fragment,{children:Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-6 text-center",children:Object(p.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:"\xa1Muchas gracias!"})}),Object(p.jsx)("p",{children:"\xa0"}),Object(p.jsx)("p",{children:"Te contactaremos a la brevedad para finalizar con las validaciones."})]})})})}):Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"row align-items-center",children:[Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)("img",{src:"data:image/jpeg;base64,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",style:{border:"solid 0px"},alt:"Logo"})}),Object(p.jsx)("div",{className:"col-md-9 text-center d-none d-sm-block",children:Object(p.jsx)("h3",{children:"Validaci\xf3n de identidad"})})]})})}),t&&Object(p.jsx)(F,{buttonSignatureOnClick:this.buttonSignatureOnClick}),c&&Object(p.jsx)(Q,{buttonSelfieOnClick:this.buttonSelfieOnClick}),o&&Object(p.jsx)(P,{buttonUploadImagesOnClick:this.buttonUploadImagesOnClick}),a&&Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)("div",{className:"row justify-content-center mt-4 text-center",children:Object(p.jsx)("div",{className:"col-12 col-md-12",children:Object(p.jsxs)("button",{type:"button",className:"btn btn-block btn-outline-success",onClick:n?void 0:this.createPdf,children:[n&&Object(p.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status"}),!n&&"Enviar informaci\xf3n"]})})}),Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Pr\xe9stamo solicitado"}),Object(p.jsxs)("ul",{className:"list-group list-group-flush text-left m-4",children:[Object(p.jsxs)("p",{children:["Nombre: ",i.name+" "+i.surname]}),Object(p.jsxs)("p",{children:["Documento: ",i.documentNumber]}),Object(p.jsxs)("p",{children:["Capital: ",i.capital]}),Object(p.jsxs)("p",{children:["Plazo: ",i.plazo]}),Object(p.jsxs)("p",{children:["Cuota: ",i.cuota]}),Object(p.jsxs)("p",{children:["Neto: ",i.neto]})]})]})})}),Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Tu imagen"}),Object(p.jsx)("ul",{className:"list-group list-group-flush text-center",children:Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsx)("img",{src:localStorage.getItem("userSelfie"),alt:"Foto"})})})]})})}),Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Tu firma"}),Object(p.jsx)("ul",{className:"list-group list-group-flush text-center",children:Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsx)("img",{src:localStorage.getItem("userSignature"),alt:"Selfie"})})})]})})})]}),!t&&!c&&!a&&!o&&Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Informaci\xf3n del solicitante"}),Object(p.jsxs)("div",{className:"row ml-2 mr-2",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(Y,{placeholder:"Nombre(s)",type:V,forwardRef:this.name,err:this.getErrors("name")})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(Y,{placeholder:"Apellido(s)",type:V,forwardRef:this.surname,err:this.getErrors("surname")})})]}),Object(p.jsxs)("div",{className:"row ml-2 mr-2",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("select",{ref:this.documentType,children:[Object(p.jsx)("option",{value:"",children:"Seleccione tipo de documento ..."}),Object(p.jsx)("option",{value:"1",children:"DNI"}),Object(p.jsx)("option",{value:"2",children:"CI"}),Object(p.jsx)("option",{value:"3",children:"LE"})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(Y,{placeholder:"Nro. Documento",type:V,forwardRef:this.documentNumber,err:this.getErrors("documentNumber")})})]})]})})}),Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Informaci\xf3n del pr\xe9stamo"}),Object(p.jsxs)("div",{className:"row ml-2 mr-2",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(Y,{placeholder:"Capital",type:W,forwardRef:this.capital,err:this.getErrors("capital")})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(Y,{placeholder:"Plazo",type:W,forwardRef:this.plazo,err:this.getErrors("plazo")})})]}),Object(p.jsxs)("div",{className:"row ml-2 mr-2",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(Y,{placeholder:"Cuota",type:W,forwardRef:this.cuota,err:this.getErrors("cuota")})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(Y,{placeholder:"Neto",type:W,forwardRef:this.neto,err:this.getErrors("neto")})})]})]})})}),Object(p.jsx)("div",{className:"row justify-content-center mt-4",children:Object(p.jsx)("div",{className:"col-12 col-md-6",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"T\xe9rminos y condiciones"}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsx)("div",{className:"row justify-content-center m-4",children:Object(p.jsx)("div",{className:"col-md-10",children:Object(p.jsx)("textarea",{disabled:!0,value:"Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos Ac\xe1 los t\xe9rminos"})})}),Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsx)("div",{className:"form-check form-check-inline",children:Object(p.jsxs)("div",{className:"custom-switch",children:[Object(p.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"acceptTerms",ref:this.acceptTerms}),Object(p.jsx)("label",{className:"custom-control-label",htmlFor:"acceptTerms",children:"Acepto haber le\xeddo los t\xe9rminos y condiciones"})]})})})]})]})})}),Object(p.jsx)("div",{className:"row justify-content-center mt-4 text-center mb-4",children:Object(p.jsx)("div",{className:"col-6 col-md-3",children:Object(p.jsx)("button",{type:"button",onClick:this.showUploadImages,children:"Continuar"})})})]})]})}}]),c}(U);c(69);var X=function(){return Object(p.jsx)(o.a,{children:Object(p.jsx)(O,{children:Object(p.jsx)(i.c,{children:Object(p.jsx)(i.a,{exact:!0,path:"/validacion-usuario/",component:Z})})})})};n.a.render(Object(p.jsx)(X,{}),document.getElementById("root"))}},[[70,1,2]]]);