(this["webpackJsonpjunyi-dashboard"]=this["webpackJsonpjunyi-dashboard"]||[]).push([[0],{206:function(e,a,t){e.exports=t(396)},211:function(e,a,t){},396:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(70),l=t.n(c),o=(t(211),t(108)),i=t.n(o),s=t(75),m=t(109),u=t(167),E=t(17),d=t(5),h=t(415),g=t(418),p=t(419),f=t(420),y=t(83),_=Object(n.memo)((function(e){var a=e.setTooltipContent,t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.ComposableMap,{"data-tip":"",projection:"geoAzimuthalEqualArea",projectionConfig:{rotate:[239,-23.5,0],scale:8e3}},r.a.createElement(y.Geographies,{geography:"https://storageaccountazure88f7.blob.core.windows.net/dashboard-json/counties.json"},(function(e){return e.geographies.map((function(e){return r.a.createElement(y.Geography,{key:e.rsmKey,geography:e,onMouseEnter:function(){var n,r,c,l,o=e.properties.name,i=null===(n=t.find((function(e){return e.index===o.slice(0,2)})))||void 0===n?void 0:n.student.toLocaleString("en"),s=null===(r=t.find((function(e){return e.index===o.slice(0,2)})))||void 0===r?void 0:r.teacher.toLocaleString("en"),m=null===(c=t.find((function(e){return e.index===o.slice(0,2)})))||void 0===c?void 0:c.parent.toLocaleString("en"),u=null===(l=t.find((function(e){return e.index===o.slice(0,2)})))||void 0===l?void 0:l.others.toLocaleString("en");a("".concat(o.slice(0,2),": \u5b78\u751f ").concat(i,", \u8001\u5e2b ").concat(s,", \u5bb6\u9577 ").concat(m,", \u5176\u4ed6 ").concat(u))},onMouseLeave:function(){a("")},style:{default:{fill:"#3399FF",outline:"#none"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}})}))}))))})),b=t(182),v=Math.PI/180,j=Object(h.a)((function(e){return{root:{flexGrow:1,margin:50,marginLeft:50},paper:{padding:e.spacing(2),margin:"auto",maxWidth:"100%"}}})),k=["#880e4f","#311b92","#0d47a1","#006064"],w=["#ff7961","#ff6090","#d05ce3","#9a67ea","#757de8","#6ec6ff","#67daff","#62efff","#52c7b8","#80e27e","#bef67a","#629749","#b4a647","#ffb04c","#ff833a","#ff8a50","#a98274","#cfcfcf","#8eacbb","#484848"];var x=function(){var e=j(),a=Object(n.useState)(""),t=Object(E.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)([]),h=Object(E.a)(o,2),y=h[0],x=h[1],O=Object(n.useState)([]),S=Object(E.a)(O,2),K=S[0],L=S[1],N=Object(n.useState)([]),A=Object(E.a)(N,2),W=A[0],F=A[1],M=Object(n.useState)([]),D=Object(E.a)(M,2),R=D[0],U=D[1],C=Object(n.useState)([]),z=Object(E.a)(C,2),q=z[0],B=z[1],G=Object(n.useState)([]),I=Object(E.a)(G,2),J=I[0],T=I[1],P=Object(n.useState)([]),$=Object(E.a)(P,2),H=$[0],Q=$[1],V=Object(n.useState)([]),X=Object(E.a)(V,2),Y=X[0],Z=X[1],ee=Object(n.useState)({"WAU_week_by_week.json":!0,"last_week_WAU_by_city.json":!0,"reg_user_category.json":!0,"content_type.json":!0,"last_week_WAU_by_hour.json":!0,"content_usage_by_month.json":!0,"reg_user_by_month.json":!0,"reg_user_by_city.json":!0}),ae=Object(E.a)(ee,2),te=ae[0],ne=ae[1];Object(n.useEffect)((function(){var e={"WAU_week_by_week.json":x,"last_week_WAU_by_city.json":L,"reg_user_category.json":F,"content_type.json":U,"last_week_WAU_by_hour.json":B,"content_usage_by_month.json":T,"reg_user_by_month.json":Q,"reg_user_by_city.json":Z},a=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://storageaccountazure88f7.blob.core.windows.net/dashboard-json/"+t).then((function(e){if(e.ok)return e.json()})).then((function(a){e[t](a),ne((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(s.a)({},t,!1))}))})).catch((function(e){return console.error(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();Object.keys(e).forEach((function(e){return a(e)}))}),[]);var re=function(e){var a=e.cx,t=e.cy,n=e.midAngle,c=e.innerRadius,l=e.outerRadius,o=e.percent,i=e.user_role,s=c+.5*(l-c),m=a+s*Math.cos(-n*v)-15,u=t+s*Math.sin(-n*v);return r.a.createElement("text",{x:m,y:u,fill:"white",textAnchor:m>a?"start":"end",dominantBaseline:"central"},"".concat(i,"\uff1a").concat((100*o).toFixed(0),"%"))},ce=Object(n.useCallback)((function(e){return e.city_total_student_cnt>1e4?e.city+"\uff1a"+(100*e.city_total_student_cnt/W.reduce((function(e,a){return e+a.count}),0)).toFixed(2)+"%":void 0}),[W]);return Object.values(te).filter((function(e){return!0===e})).length>0?r.a.createElement("div",null,r.a.createElement("p",null,"Loading...")):r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{variant:"h4",paragraph:!0},"\u5747\u4e00\u6559\u80b2\u5e73\u53f0\u7db2\u7ad9\u516c\u958b\u6578\u64da"),r.a.createElement(f.a,{variant:"h5",paragraph:!0,color:"secondary"},"\u4e0a\u9031\u6578\u64da(",y&&y.length>1?y[y.length-1].week:"Loading",")"),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(f.a,{variant:"h6"},"\u4e0a\u903124\u5c0f\u6642\u5404\u6642\u6bb5\u5e73\u5747\u6d3b\u8e8d\u4eba\u6578"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(d.k,{width:"100%",height:250},r.a.createElement(d.h,{data:q},r.a.createElement(d.g,{name:"\u5e73\u5747\u6d3b\u8e8d\u4eba\u6578",type:"monotone",dataKey:"avg_user_cnt",stroke:w[0],dot:!0}),r.a.createElement(d.c,{stroke:"#ccc",strokeDasharray:"3 3",vertical:!1}),r.a.createElement(d.m,{dataKey:"hour"}),r.a.createElement(d.n,null),r.a.createElement(d.l,null))))),r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(f.a,{variant:"h6"},"\u4e0a\u903124\u5c0f\u6642\u5404\u6642\u6bb5\u5e73\u5747\u4f7f\u7528\u6642\u9593(\u5206\u9418)"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(d.k,{width:"100%",height:250},r.a.createElement(d.h,{data:q},r.a.createElement(d.g,{name:"\u5e73\u5747\u4f7f\u7528\u6642\u9593(\u5206\u9418)",type:"monotone",dataKey:"avg_time_minute",stroke:w[2],dot:!0}),r.a.createElement(d.c,{stroke:"#ccc",strokeDasharray:"3 3",vertical:!1}),r.a.createElement(d.m,{dataKey:"hour"}),r.a.createElement(d.n,null),r.a.createElement(d.l,null)))))),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(f.a,{variant:"h6"},"\u4e0a\u9031\u5404\u7e23\u5e02\u6d3b\u8e8d\u4eba\u6578"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(d.k,{width:"100%",height:250},r.a.createElement(d.b,{data:K},r.a.createElement(d.c,{stroke:"#ccc",strokeDasharray:"3 3",vertical:!1}),r.a.createElement(d.m,{dataKey:"city"}),r.a.createElement(d.n,null),r.a.createElement(d.l,null),r.a.createElement(d.a,{name:"\u4e0a\u9031\u5404\u7e23\u5e02\u6d3b\u8e8d\u4eba\u6578",dataKey:"active_student_cnt",fill:w[4]})))))),r.a.createElement("div",null,"\u200d"),r.a.createElement("div",null,"\u200d"),r.a.createElement(f.a,{variant:"h5",paragraph:!0,color:"secondary"},"\u9577\u671f\u6578\u64da (2012-10 ~ ",y&&y.length>1?y[y.length-1].week:[],")"),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(f.a,{variant:"h6"},"\u6bcf\u9031\u6d3b\u8e8d\u4f7f\u7528\u8005\u4eba\u6578"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(d.k,{width:"100%",height:250},r.a.createElement(d.h,{data:y},r.a.createElement(d.g,{name:"\u9031\u6d3b\u8e8d\u4eba\u6578",type:"monotone",dataKey:"unique_user_cnt",stroke:w[8],dot:!1}),r.a.createElement(d.c,{stroke:"#ccc",strokeDasharray:"3 3",vertical:!1}),r.a.createElement(d.m,{dataKey:"week",tickFormatter:function(e){return e.substring(0,7)}}),r.a.createElement(d.n,null),r.a.createElement(d.l,null)))))),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(f.a,{variant:"h6"},"\u6bcf\u6708\u5167\u5bb9\u4f7f\u7528\u4eba\u6b21"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(d.k,{width:"100%",height:250},r.a.createElement(d.h,{data:J},r.a.createElement(d.g,{name:"\u5f71\u7247\u4f7f\u7528\u4eba\u6b21",type:"monotone",dataKey:"video_cnt",stroke:w[11],dot:!1}),r.a.createElement(d.g,{name:"\u7fd2\u984c\u4f7f\u7528\u4eba\u6b21",type:"monotone",dataKey:"exercise_cnt",stroke:w[12],dot:!1}),r.a.createElement(d.c,{stroke:"#ccc",strokeDasharray:"3 3",vertical:!1}),r.a.createElement(d.m,{dataKey:"year_month"}),r.a.createElement(d.n,null),r.a.createElement(d.l,null),r.a.createElement(d.f,{verticalAlign:"top",height:36})))))),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(f.a,{variant:"h6"},"\u5404\u7e23\u5e02\u4e0d\u540c\u8eab\u5206\u8a3b\u518a\u4f7f\u7528\u8005\u7d71\u8a08"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(_,{setTooltipContent:l,data:Y}),r.a.createElement(b.a,null,c))),r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(f.a,{variant:"h6"},"\u7db2\u7ad9\u5167\u5bb9\u7d71\u8a08"),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(p.a,{className:e.paper},r.a.createElement(f.a,{variant:"h4",paragraph:!0,align:"center"},R&&R.length>0?R[0].exercise.toLocaleString("en"):"Loading..."),r.a.createElement(f.a,{variant:"h5",paragraph:!0,align:"center"},"\u77e5\u8b58\u9ede\u500b\u6578")))),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(p.a,{className:e.paper},r.a.createElement(f.a,{variant:"h4",paragraph:!0,align:"center"},R&&R.length>0?R[0].quiz.toLocaleString("en"):"Loading..."),r.a.createElement(f.a,{variant:"h5",paragraph:!0,align:"center"},"\u7df4\u7fd2\u984c\u7e3d\u6578")))),r.a.createElement(g.a,{container:!0,spacing:3},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(p.a,{className:e.paper},r.a.createElement(f.a,{variant:"h4",paragraph:!0,align:"center"},R&&R.length>0?R[0].video.toLocaleString("en"):"Loading..."),r.a.createElement(f.a,{variant:"h5",paragraph:!0,align:"center"},"\u5f71\u7247\u7e3d\u6578")))))),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(f.a,{variant:"h6"},"\u6bcf\u6708\u65b0\u589e\u8a3b\u518a\u4eba\u6578"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(d.k,{width:"100%",height:250},r.a.createElement(d.h,{data:H},r.a.createElement(d.g,{name:"\u55ae\u6708\u65b0\u589e\u8a3b\u518a\u4eba\u6578",type:"monotone",dataKey:"monthly_register_count",stroke:w[14],dot:!1}),r.a.createElement(d.c,{stroke:"#ccc",strokeDasharray:"3 3",vertical:!1}),r.a.createElement(d.m,{dataKey:"date",tickFormatter:function(e){return e.substring(0,7)}}),r.a.createElement(d.n,null),r.a.createElement(d.l,null)))))),r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(f.a,{variant:"h6"},"\u6240\u6709\u8a3b\u518a\u4f7f\u7528\u8005\u7e23\u5e02/\u8eab\u5206\u5360\u6bd4"),r.a.createElement(p.a,{className:e.paper},r.a.createElement(d.k,{width:"100%",height:600},r.a.createElement(d.j,null,r.a.createElement(d.i,{data:W,dataKey:"count",nameKey:"user_role",cx:"50%",cy:"50%",innerRadius:100,outerRadius:230,fill:"#8884d8",labelLine:!1,label:re||!1},W.map((function(e,a){return r.a.createElement(d.d,{key:"cell-".concat(a),fill:k[a]})})),r.a.createElement(d.e,{value:"\u8a3b\u518a\u4f7f\u7528\u8005\uff1a"+W.reduce((function(e,a){return e+a.count}),0).toLocaleString("en"),position:"center"})),r.a.createElement(d.i,{data:K,dataKey:"city_total_student_cnt",nameKey:"city",cx:"50%",cy:"50%",innerRadius:230,outerRadius:280,fill:"#82ca9d",label:ce,labelLine:!1},K.map((function(e,a){return r.a.createElement(d.d,{key:"cell-".concat(a),fill:w[a]})}))),r.a.createElement(d.l,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.21235c17.chunk.js.map