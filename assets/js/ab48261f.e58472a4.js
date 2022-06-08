"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[613],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Usage with Docker",p={unversionedId:"get-started/with-docker",id:"get-started/with-docker",title:"Usage with Docker",description:"Initial setup (mandatory)",source:"@site/docs/get-started/with-docker.md",sourceDirName:"get-started",slug:"/get-started/with-docker",permalink:"/docs/get-started/with-docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/get-started/with-docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raw installation",permalink:"/docs/get-started/raw-installation"},next:{title:"JavaScript",permalink:"/docs/sdks/javascript"}},s={},u=[{value:"Initial setup (mandatory)",id:"initial-setup-mandatory",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Docker without Compose",id:"docker-without-compose",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage-with-docker"},"Usage with Docker"),(0,o.kt)("h2",{id:"initial-setup-mandatory"},"Initial setup (mandatory)"),(0,o.kt)("p",null,"In your favorite terminal with git installed, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mfrachet/progressively\n")),(0,o.kt)("p",null,"Next, you need to make sure you have a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in both the ",(0,o.kt)("inlineCode",{parentName:"p"},"./packages/frontend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./packages/backend")," directories."),(0,o.kt)("p",null,"When cloning the project, a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," file is created as an example in these packages. Make sure to modify them ",(0,o.kt)("strong",{parentName:"p"},"(there are secrets inside)")," and rename them from ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp ./packages/frontend/.env.example ./packages/frontend/.env\ncp ./packages/backend/.env.example ./packages/backend/.env\n")),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"At the root of the project, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,o.kt)("p",null,"The dashboard is now available on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),", the backend APIs are available on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4000/api"},"http://localhost:4000/api"),"."),(0,o.kt)("h2",{id:"docker-without-compose"},"Docker without Compose"),(0,o.kt)("p",null,"Without compose, you need to install Postgres by yourself. You can have a running instance in a Docker container using the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure to modify the user and password ;)\ndocker run --name progressively-db -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -e POSTGRES_DB=progressively -p 5432:5432 -d postgres\n")),(0,o.kt)("p",null,"Then, prepare the database by creating the tables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# At the root of the project\nnpm install\nnpm run setup         # prepares the mono-repo\nnpm run db:prepare    # creates the tables\n")),(0,o.kt)("p",null,"Now, you can either build the image using the Dockerfile available in the project or directly use the image hosted on Docker Hub:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start the API\ndocker run --env-file .env -p 4000:4000 -p 4001:4001 mfrachet/progressively-backend\n\n# Start the dashboard\ndocker run --env-file .env -p 3000:3000 mfrachet/progressively-frontend\n")))}m.isMDXComponent=!0}}]);