(this.webpackJsonprepositiries=this.webpackJsonprepositiries||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(18),i=c.n(r),j=(c(24),c(9)),o=c(4),a=c.p+"static/media/logo.6ce24c58.svg",b=(c(25),c(19)),u=c.n(b),O=c(0);var d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),i=Object(o.a)(r,2),b=i[0],d=i[1],l=Object(n.useState)(1),h=Object(o.a)(l,2),f=h[0],p=h[1],m=Object(n.useState)(null),x=Object(o.a)(m,2),g=x[0],v=x[1],S=new IntersectionObserver((function(e){e[0].isIntersecting&&(p(f+1),d(!0))}));return Object(n.useRef)(),Object(n.useEffect)((function(){setTimeout((function(){u()({method:"GET",url:"https://api.github.com/search/repositories",params:{q:"javascript",sort:"stars",order:"desc",page:f,limit:120}}).then((function(e){s([].concat(Object(j.a)(c),Object(j.a)(e.data.items))),d(!1)}))}),1e3)}),[f]),Object(n.useEffect)((function(){return g&&S.observe(g),function(){g&&S.unobserve(g)}}),[g]),Object(O.jsx)("div",{className:"App",children:b?Object(O.jsx)("img",{className:"App-logo",src:a}):Object(O.jsxs)("table",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Url"}),Object(O.jsx)("th",{children:"Forks"}),Object(O.jsx)("th",{children:"Owner"})]}),c.map((function(e){return Object(O.jsxs)("tr",{ref:v,children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.url}),Object(O.jsx)("td",{children:e.forks}),Object(O.jsx)("td",{children:e.owner.login})]})}))]})})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(d,{})}),document.getElementById("root")),l()}},[[45,1,2]]]);
//# sourceMappingURL=main.c2184de1.chunk.js.map