(this.webpackJsonpbarchartrace=this.webpackJsonpbarchartrace||[]).push([[0],{115:function(a){a.exports=JSON.parse('[{"label":"Electricity","options":[{"value":"hv108","label":"Generation"},{"value":"Education","label":"Demand"},{"value":"hv243a","label":"Price"}]}]')},127:function(a,e,t){},243:function(a,e,t){a.exports=t(450)},249:function(a){a.exports=JSON.parse("{}")},450:function(a,e,t){"use strict";t.r(e);var n=t(1),l=t.n(n),o=t(32),i=t.n(o),r=t(192),u=(t(127),t(15)),c=t(34),s=t.n(c),b=t(177),d=t(46),v=t(8),_=t(85),p=(t(249),t(115)),g=t(83),m=t(9),h=t.n(m),S=t(29),f=t(59),y=t.n(f),M=t(11),E=t(188),w=t(190),C=t.n(w),N=(t(449),function(a){var e=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"".concat((100*a).toFixed(e),"%")},t=Object(M.e)(),o=Object(M.d)(),i=Object(E.a)(),r=Object(d.a)(i,2),c=r[0],m=r[1],f=m.ref,w=(m.isLoading,Object(n.useCallback)(Object(b.a)(s.a.mark((function a(){var e;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c();case 2:(e=a.sent)&&C.a.saveAs(e,"myChart.png");case 4:case"end":return a.stop()}}),a)}))),[c]),[]),N=""===t.search?"Global":y.a.parse(t.search).country;"string"===typeof N?w.push({value:N,label:N}):N.map((function(a){return w.push({value:a,label:a})}));var A=""===t.search?"hv108":y.a.parse(t.search).type,x=(p.map((function(a){return a.value===A?a.label:null})),Object(n.useState)([{value:"Global",label:"Global"}])),L=Object(d.a)(x,2),G=(L[0],L[1]),B=Object(n.useState)({value:"hv108",label:"Generation"}),I=Object(d.a)(B,2),j=I[0],F=I[1],z=Object(n.useState)("renewable"),K=Object(d.a)(z,2),R=K[0],T=K[1],U={hv108:["Malawi 2012","Madagascar 2011","Madagascar 2013","Angola 2011","Madagascar 2016","Burkina Faso 2014","Angola 2006","Burkina Faso 2017","Malawi 2014","Uganda 2009","Malawi 2017","Ghana 2019","Mali 2010","Liberia 2009","Mali 2015","Liberia 2016","Mozambique 2018","Uganda 2014","Rwanda 2008","Kenya 2015","Senegal 2008","Uganda 2018","Sierra Leone 2016","Liberia 2011","Tanzania 2017","Ghana 2016","Togo 2017"],hv206:["Mali 2010"],hv207:["Mali 2010"],hv208:["Mali 2010"],hv209:["Ethiopia 2000","Malawi 2000","Mali 2010"],hv210:["Mali 2010"],hv211:["Mali 2010"],hv212:["Mali 2010"],hv225:["Mali 2010","Tanzania 2003","Senegal 2008","Angola 2011","Nigeria 2010","Liberia 2009","Angola 2006","Uganda 2009"],hv243a:["Kenya 2003","Guinea 2005","Uganda 2000","Benin 2001","Lesotho 2004","Cameroon 2004","Malawi 2000","Egypt 2003","Malawi 2004","Egypt 2005","Ethiopia 2000","Ethiopia 2005","Mali 2001","Tanzania 2003","Mali 2010","Egypt 2000","Morocco 2003","Ghana 2003","Namibia 2000","Senegal 2005","Nigeria 2003","Burkina Faso 2003","Rwanda 2005"],hv247:["Kenya 2008","Uganda 2011","Lesotho 2004","Angola 2011","Liberia 2009","Burkina Faso 2003","Malawi 2000","Democratic Republic of the Congo 2007","Uganda 2006","Malawi 2004","Egypt 2000","Mali 2001","Egypt 2005","Mali 2006","Mali 2010","Uganda 2000","Morocco 2003","Ghana 2003","Mozambique 2009","Kenya 2003","Namibia 2000","Benin 2001","Nigeria 2003","Egypt 2003","Nigeria 2010","Ethiopia 2005","Rwanda 2005","Angola 2006","Rwanda 2008","Ethiopia 2000","Senegal 2005","Cameroon 2004","Senegal 2008","Guinea 2005","South Africa 2017"],Education:["Malawi 2012","Madagascar 2011","Madagascar 2013","Angola 2011","Madagascar 2016","Burkina Faso 2017","Angola 2006","Malawi 2014","Malawi 2017","Ghana 2016","Mali 2010","Kenya 2015","Mali 2015","Liberia 2011","Mozambique 2018","Uganda 2018","Rwanda 2008","Uganda 2014","Senegal 2008","Liberia 2009","Sierra Leone 2016","Burkina Faso 2014","Tanzania 2017","Liberia 2016","Togo 2017","Ghana 2019","Uganda 2009"]};g.map((function(a){return U[j.value].includes(a.value)?a.isDisabled=!0:a.isDisabled=!1}));var D=[];w.map((function(a){return D.push(a.value)}));var P={menu:function(a,e){return Object(u.a)({},a,{backgroundColor:"#ffffff",borderRadius:0,boxShadow:0,height:"572px"})},option:function(a,e){e.isDisabled,e.isFocused;var t=e.isSelected;return Object(u.a)({},a,{backgroundColor:t?"#a70000":null,":active":{}})},menuList:function(a,e){return Object(u.a)({},a,{maxHeight:"none",height:"100%"})},dropdownIndicator:function(a,e){return Object(u.a)({},a)},control:function(a,e){return Object(u.a)({},a,{isHidden:!0,boxShadow:"none",backgroundColor:"none",borderStyle:"solid",borderColor:"#449999",borderWidth:"0px",color:"none","&:hover":{}})},singleValue:function(a,e){return Object(u.a)({},a,{fontSize:"2rem",fontWeight:"600",color:"#212529"})},input:function(a,e){return Object(u.a)({},a,{fontSize:"2rem",fontWeight:"900",color:"#212529"})}},H={menu:function(a,e){return Object(u.a)({},a,{backgroundColor:"white",borderRadius:0,boxShadow:0})},menuList:function(a,e){return Object(u.a)({},a)},control:function(a,e){return Object(u.a)({},a,{isHidden:!0,boxShadow:"none",backgroundColor:"none",borderStyle:"solid",borderColor:"#449999",borderWidth:"0px",color:"none","&:hover":{}})},singleValue:function(a,e){return Object(u.a)({},a,{color:"#212529",textAlign:"right"})},input:function(a,e){return Object(u.a)({},a,{color:"#212529"})},multiValue:function(a,e){return Object(u.a)({},a,{color:"#212529",textAlign:"right",backgroundColor:"#ffffff"})}},J=l.a.createElement(S.d,{height:"100%",ref:f},l.a.createElement(S.b,{width:500,height:400,data:[{month:"2015.01",a:4e3,b:2400,c:2400},{month:"2015.02",a:3e3,b:1398,c:2210},{month:"2015.03",a:2e3,b:9800,c:2290},{month:"2015.04",a:2780,b:3908,c:2e3},{month:"2015.05",a:1890,b:4800,c:2181},{month:"2015.06",a:2390,b:3800,c:2500},{month:"2015.07",a:3490,b:4300,c:2100}],stackOffset:"expand",margin:{top:10,right:30,left:0,bottom:0}},l.a.createElement(S.c,{strokeDasharray:"3 3"}),l.a.createElement(S.f,{dataKey:"month"}),l.a.createElement(S.g,{tickFormatter:e}),l.a.createElement(S.e,null),l.a.createElement(S.a,{type:"monotone",dataKey:"a",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),l.a.createElement(S.a,{type:"monotone",dataKey:"b",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),l.a.createElement(S.a,{type:"monotone",dataKey:"c",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}))),V=l.a.createElement("div",{className:h.a.buttonGroup},l.a.createElement("div",{className:h.a.datagroup},l.a.createElement("button",{className:"renewable"===R?h.a.buttonActive:h.a.button,onClick:function(){return O("renewable",T,o,N,A)}},"Renewable energy"),l.a.createElement("button",{className:"patents"===R?h.a.buttonActive:h.a.button,onClick:function(){return O("patents",T,o,N,A)}},"Patents"),l.a.createElement("button",{className:"startup"===R?h.a.buttonActive:h.a.button,onClick:function(){return O("startup",T,o,N,A)}},"Start-ups"),l.a.createElement("button",{className:"google"===R?h.a.buttonActive:h.a.button,onClick:function(){return O("google",T,o,N,A)}},"Google Trends")));return l.a.createElement("div",{class:h.a.Layout},l.a.createElement("div",{class:h.a.Mixer},l.a.createElement("div",{className:h.a.Large},l.a.createElement("div",{className:h.a.SearchBar},l.a.createElement(_.a,{styles:P,options:g,isSearchable:!1,isMulti:!0,value:w,onChange:function(a,e){return k(a,e,o,j,G,A,R)},menuIsOpen:!0,hideSelectedOptions:!1,components:{Control:function(){return null}}})),l.a.createElement("div",{className:h.a.Sm_Md},"Mobile view"))),l.a.createElement("div",{className:h.a.Visualisation},l.a.createElement("div",{className:h.a.KeyFigure__Md_Lg},V,l.a.createElement("div",{className:h.a.KeyFiguresWrapper},l.a.createElement(_.a,{styles:H,options:p,className:h.a.KeyFigures,value:j,onChange:function(a,e){return function(a,e,t,n,l){if(null===a)return;console.log(l);var o;o="string"===typeof l?l:[l[l.length-1]],n(a),console.log(o),t.push({pathname:t.pathname,search:y.a.stringify({country:o,type:a.value})})}(a,0,o,F,N)},components:{IndicatorsContainer:function(a){return l.a.createElement("div",{className:h.a.Control},l.a.createElement("div",{className:h.a.ControlInfo},l.a.createElement("i",{className:h.a["material-icons"]}," info "),l.a.createElement("div",{className:h.a.InfoTooltip},"indicator explanation")),l.a.createElement(v.f.IndicatorsContainer,a))}}})),l.a.createElement("div",{className:h.a.Sm_Md},l.a.createElement(_.a,{className:h.a.KeyFigures,styles:H,options:g,isMulti:!0,value:w,onChange:function(a,e){return k(a,e,o,j,G,A,R)},hideSelectedOptions:!0,isClearable:!1}))),l.a.createElement("div",{className:h.a.LineGraph},J),l.a.createElement("div",{className:h.a.downloadbuttons},l.a.createElement("button",{className:h.a.buttonActivedownload},"Download chart data"),l.a.createElement("button",{className:h.a.buttonActivedownload2},"Get the full dataset"))))});function k(a,e,t,n,l,o,i){if(a){if(0===a.length)return;var r=(a=[a[a.length-1]]).map((function(a){return a.value}));t.push({pathname:t.pathname,search:y.a.stringify({country:r,type:o})})}}function O(a,e,t,n,l){var o="string"===typeof n?n:n[n.length-1];e(a),t.push({pathname:t.pathname,search:y.a.stringify({country:o,type:l,class:a})})}i.a.render(l.a.createElement(r.a,null,l.a.createElement(N,null)),document.getElementById("app"))},83:function(a){a.exports=JSON.parse('[{"value":"Global","label":"Global"},{"value":"Argentina","label":"Argentina"},{"value":"Australia","label":"Australia"},{"value":"Austria","label":"Austria"},{"value":"Belgium","label":"Belgium"},{"value":"Bulgaria","label":"Bulgaria"},{"value":"Bosnia and Herzegovina","label":"Bosnia and Herzegovina"},{"value":"Bolivia","label":"Bolivia"},{"value":"Brazil","label":"Brazil"},{"value":"Switzerland","label":"Switzerland"},{"value":"Chile","label":"Chile"},{"value":"Colombia","label":"Colombia"},{"value":"Costa Rica","label":"Costa Rica"},{"value":"Cyprus","label":"Cyprus"},{"value":"Czech Republic","label":"Czech Republic"},{"value":"Germany","label":"Germany"},{"value":"Denmark","label":"Denmark"},{"value":"Spain","label":"Spain"},{"value":"Estonia","label":"Estonia"},{"value":"Finland","label":"Finland"},{"value":"France","label":"France"},{"value":"United Kingdom","label":"United Kingdom"},{"value":"Greece","label":"Greece"},{"value":"Croatia","label":"Croatia"},{"value":"Hungary","label":"Hungary"},{"value":"Ireland","label":"Ireland"},{"value":"Italy","label":"Italy"},{"value":"Japan","label":"Japan"},{"value":"Lithuania","label":"Lithuania"},{"value":"Luxembourg","label":"Luxembourg"},{"value":"Latvia","label":"Latvia"},{"value":"Moldova","label":"Moldova"},{"value":"Mexico","label":"Mexico"},{"value":"FYROM","label":"FYROM"},{"value":"Montenegro","label":"Montenegro"},{"value":"Malaysia","label":"Malaysia"},{"value":"Nigeria","label":"Nigeria"},{"value":"Netherlands","label":"Netherlands"},{"value":"Norway","label":"Norway"},{"value":"New Zealand","label":"New Zealand"},{"value":"Peru","label":"Peru"},{"value":"Philippines","label":"Philippines"},{"value":"Poland","label":"Poland"},{"value":"Portugal","label":"Portugal"},{"value":"Romania","label":"Romania"},{"value":"Russia","label":"Russia"},{"value":"Serbia","label":"Serbia"},{"value":"Slovak Republic","label":"Slovak Republic"},{"value":"Slovenia","label":"Slovenia"},{"value":"Sweden","label":"Sweden"},{"value":"Turkey","label":"Turkey"},{"value":"Ukraine","label":"Ukraine"},{"value":"United States","label":"United States"},{"value":"South Africa","label":"South Africa"}]')},9:function(a,e,t){a.exports={downloadbuttons:"Site_downloadbuttons__7gdxv",KeyFiguresWrapper:"Site_KeyFiguresWrapper__15ehG",socialgroup:"Site_socialgroup__O1D-N",socialgroupSM:"Site_socialgroupSM__1GIpP",Control:"Site_Control__2RJnA",ControlInfo:"Site_ControlInfo__2zile","material-icons":"Site_material-icons__2TOs4",InfoTooltip:"Site_InfoTooltip__3KO1t",download:"Site_download__3gOfN",fullstory:"Site_fullstory__23vxB","download-icon":"Site_download-icon__2v_oR",span:"Site_span__3N-Gh",ControlInfoS:"Site_ControlInfoS__2U5WT",InfoTooltipS:"Site_InfoTooltipS__1ygIs",KeyFigures:"Site_KeyFigures__2zev1",LineGraph:"Site_LineGraph__1SmN9",Visualisation:"Site_Visualisation__37KdB",textgroup:"Site_textgroup__3UDlv",Layout:"Site_Layout__2re9a",Mixer:"Site_Mixer__1AFz7",Sm_Md:"Site_Sm_Md__3eQDz",Large:"Site_Large__1BjKJ",SearchBar:"Site_SearchBar__2M5Y2",datagroup:"Site_datagroup__1MDw8",SearchBar__Sm:"Site_SearchBar__Sm__3TLuw",buttonGroup:"Site_buttonGroup__3beEl",keybutton:"Site_keybutton__2MgHS",header:"Site_header__3eabk",title:"Site_title__3JPvq",box:"Site_box__lfDpe",TableHeader:"Site_TableHeader__2ZyIy",button:"Site_button__yzVVc",TableSearch:"Site_TableSearch__1SMJz",mapContainer:"Site_mapContainer__2vyGm",legend:"Site_legend__1m2rE",Tooltip:"Site_Tooltip__y2-WU",popup:"Site_popup__2VawH",buttondist:"Site_buttondist__87ZIL",buttonActive:"Site_buttonActive__DvDaW",buttonActivedownload:"Site_buttonActivedownload__1FUeK",buttonActivedownload2:"Site_buttonActivedownload2__3E5Z9",topleft:"Site_topleft__28VNt",table:"Site_table__27zvs",tooltip:"Site_tooltip__2X4Yn",logo:"Site_logo__2Iq7E"}}},[[243,1,2]]]);
//# sourceMappingURL=main.f8b4f85a.chunk.js.map