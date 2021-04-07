(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{97:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var i=a(3),n=a(0),r=a.n(n),o=a(107),l=a(111),c=a(109),m=a(16),s=a(113),g=a(98),h=a.n(g),p=[{title:"Object Storage Vendors",imageUrl:"img/vendors.svg",description:r.a.createElement(r.a.Fragment,null,"Vendors can write their own COSI drivers to enable applications to use their object storage system. Learn how to write a COSI driver ",r.a.createElement("a",{href:"https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/how-to-write-a-cosi-driver.md"},"here"),".")},{title:"Application Developers",imageUrl:"img/app_developers.svg",description:r.a.createElement(r.a.Fragment,null,"Make your application COSI compatible and seamlessly switch between object storage providers without any application code changes. Learn more ",r.a.createElement("a",{href:"https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/how-to-make-your-application-cosi-compatible.md"},"here"),".")}],d=[{name:"Sidhartha Mani",imageUrl:"/img/sidhartha_mani.jpg",organizationURL:"https://min.io",organizationName:"MinIO, Inc.",organizationLogo:"/img/minio.svg",github:"wlan0",twitter:"utter_babbage",pinned:!0},{name:"Jeff Vance",imageUrl:"/img/jeff_vance.jpeg",organizationURL:"https://redhat.com",organizationName:"Red Hat, Inc.",organizationLogo:"/img/redhat.png",github:"jeffvance",twitter:"jeffvance",pinned:!0},{name:"Krish Chowdhary",imageUrl:"/img/krish.jpeg",organizationURL:"https://redhat.com",organizationName:"Red Hat, Inc.",organizationLogo:"/img/redhat.png",github:"krishchow",twitter:"krishchow_",pinned:!0},{name:"Rob Rati",imageUrl:"/img/avatar.png",organizationURL:"https://redhat.com",organizationName:"Red Hat, Inc.",organizationLogo:"/img/redhat.png",github:"rrati",twitter:"",pinned:!0},{name:"Srini Brahmaroutu",imageUrl:"/img/avatar.png",organizationURL:"https://ibm.com",organizationName:"IBM",organizationLogo:"/img/ibm.svg",github:"brahmaroutu",twitter:"brahmaroutu",pinned:!0},{name:"Tejas Parikh",imageUrl:"/img/tejas_parikh.jpg",organizationURL:"",organizationName:"",organizationLogo:"/img/1.png",github:"tparikh",twitter:"tejasparikh",pinned:!0}];function b(e){var t=e.imageUrl,a=e.title,i=e.description,n=Object(s.a)(t);return r.a.createElement("div",{className:Object(o.a)("col col--6",h.a.feature)},n&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:h.a.featureImage,src:n,alt:a})),r.a.createElement("div",{className:"text--center"},r.a.createElement("h3",null,a),r.a.createElement("p",null,i)))}function u(e){var t=e.name,a=e.imageUrl,i=e.organizationURL,n=e.organizationName,o=e.organizationLogo,l=e.github,c=e.twitter;e.pinned,Object(s.a)(a);return r.a.createElement("div",{className:"leaderboard",key:t,style:{margin:"auto",alignItems:"center",justifyContents:"center",display:"flex",flexDirection:"row"}},r.a.createElement("a",{href:a,key:t},r.a.createElement("img",{src:a,alt:t,title:t,style:{height:"100px",width:"100px",marginRight:"1px",marginBottom:"0px",padding:"50px"}})),r.a.createElement("div",{className:"leaderboard-details",style:{textAlign:"left"}},r.a.createElement("strong",null,t),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"700",fontColor:"black"}},r.a.createElement("img",{src:o,alt:"org",style:{height:"24px",width:"24px",marginRight:"5px",marginBottom:"5px",padding:"0"}}),r.a.createElement("a",{className:"github",href:i,style:{color:"black"}},n)),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"700",fontColor:"black"}},r.a.createElement("img",{src:"/img/github.svg",alt:"github",style:{height:"24px",width:"24px",marginRight:"5px",marginBottom:"5px",padding:"0"}}),r.a.createElement("a",{className:"github",href:"https://github.com/"+l,style:{color:"black"}},l)),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"700",fontColor:"black"}},r.a.createElement("img",{src:"/img/twitter.png",alt:"twitter",style:{height:"20px",width:"24px",marginRight:"5px",marginBottom:"5px",padding:"0"}}),r.a.createElement("a",{className:"twitter",href:"https://twitter.com/"+c,style:{color:"black"}},c))))}function f(){var e=Object(m.default)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(l.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:Object(o.a)("hero hero--primary",h.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:h.a.buttons},r.a.createElement(c.a,{className:Object(o.a)("button button--outline button--secondary button--lg",h.a.getStarted),to:"https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/deployment-guide.md"},"TRY IT OUT")))),r.a.createElement("main",null,p&&p.length>0&&r.a.createElement("section",{className:h.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},p.map((function(e,t){return r.a.createElement(b,Object(i.a)({key:t},e))}))))),d&&d.length>0&&r.a.createElement("section",{className:h.a.users},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"text--center"},"Who is Behind This?"),r.a.createElement("h3",{className:"text--center"},"SIG Storage COSI is led by these members")),r.a.createElement("div",{className:"row flex-wrap"},d.map((function(e,t){return r.a.createElement(u,Object(i.a)({key:t},e))})))))))}}}]);