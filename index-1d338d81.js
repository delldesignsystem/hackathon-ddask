(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();const c=[{id:"1",question:"can you confirm if dds 2.0 file input component works on Safari browsers?",answer:"Currently we do not test for Browsers that are either EOL or out of Support. But with that said we do supply our code base so that it can be polyfilled if need be to work in Browser such as IE 11 and Safari 5. If you have any issues trying to support any of these Browsers please use the Feedback form supplied, thanks."},{id:"2",question:"What is the Dell Design System?",answer:"The Dell Design System (DDS) is a unified design language that supports Dell’s digital universe. It ensures that design is accessible, inclusive, and useful."},{id:"3",question:"How can designers access and use the Dell Design System v2 Figma libraries?",answer:"Designers can learn how to access and use the Dell Design System v2 Figma libraries by visiting the Dell Design System website. These libraries are currently only available to Dell employees and contractors."},{id:"4",question:"How can engineers start using the Vanilla components of the Dell Design System v2?",answer:"Engineers can see the Dell Design System v2 documentation on how to start using its Vanilla components by visiting the Dell Design System website."},{id:"5",question:"Where can I find answers to common questions about the Dell Design System?",answer:"You can find answers to common questions by reviewing the Frequently Asked Questions (FAQs) section on the Dell Design System website."},{id:"6",question:"How many components are there in the Dell Design System?",answer:"The exact number of components in the Dell Design System is not specified in my search results. However, you can view all components by visiting the Dell Design System website."},{id:"7",question:"What does every component do?",answer:"Each component in the Dell Design System serves a specific purpose. For example, the Table component contains data arranged in rows and columns and is used to communicate relationships between content and to display references, comparisons, and choices 2. You can learn more about what each component does by visiting the Dell Design System website."},{id:"8",question:"How can I get started with using Vanilla components of the Dell Design System?",answer:"Vanilla components are built without a framework; they are pure HTML, CSS, and JavaScript. This flexibility makes them compatible with any framework, including Angular, React, VUE, and Svelte. You can learn more about how to get started with using Vanilla components by visiting the Dell Design System website"},{id:"9",question:"Why is the Dell Design System important?",answer:"The Dell Design System helps maintain brand consistency, accelerates design and development processes, and improves the overall user experience across Dell's offerings."},{id:"10",question:"Who uses the Dell Design System?",answer:"Designers, developers, and product teams within Dell utilize the Dell Design System to create and maintain a cohesive visual language and user experience."},{id:"11",question:"What are the key components of the Dell Design System?",answer:"The Dell Design System includes design principles, typography guidelines, color palettes, iconography, UI components, and patterns."},{id:"12",question:"Is the Dell Design System publicly available?",answer:"Yes, the Dell Design System is accessible to the public and can be found on Dell's official design system website."},{id:"13",question:"Can the Dell Design System be customized for specific projects?",answer:"Yes, the Dell Design System is flexible and can be tailored to meet the needs of individual projects while maintaining consistency with the overall system."},{id:"14",question:"Does the Dell Design System provide code snippets or templates for developers?",answer:"Yes, the Dell Design System offers a range of pre-built UI components, code snippets, and templates that developers can leverage to accelerate their work."},{id:"15",question:"How frequently is the Dell Design System updated?",answer:"The Dell Design System is regularly updated to incorporate new design patterns, address emerging needs, and align with evolving design trends."},{id:"16",question:"Is the Dell Design System applicable only to Dell hardware products?",answer:"No, the Dell Design System is designed to be platform-agnostic and can be applied to various software applications, websites, and digital experiences."},{id:"17",question:"Are there any specific accessibility guidelines in the Dell Design System?",answer:"Yes, the Dell Design System includes accessibility guidelines to ensure that products and services are usable by people of all abilities."},{id:"18",question:"Can external designers contribute to the DDS?",answer:"Dell welcomes feedback and contributions from external designers and developers to help improve and expand the Dell Design System."},{id:"19",question:"Is there a support community or forum for users of the Dell Design System?",answer:"Yes, Dell maintains a support community and forum where users can ask questions, share best practices, and collaborate with others using the design system."},{id:"20",question:"Does the Dell Design System support responsive design?",answer:"Yes, the Dell Design System provides guidelines and components that support responsive design, ensuring a consistent experience across different devices and screen sizes."},{id:"21",question:"Are there design assets, such as Sketch files or design libraries, available for download?",answer:"Yes, the Dell Design System offers downloadable design assets, including Sketch files, design libraries, and other resources to aid designers in their work."},{id:"22",question:"Can the Dell Design System be integrated into existing design and development workflows?",answer:"Yes, the Dell Design System is designed to seamlessly integrate into existing workflows, allowing teams to adopt the system incrementally and at their own pace."},{id:"23",question:"Does the Dell Design System provide guidelines for animation and motion design?",answer:"Yes, the Dell Design System includes guidelines for animation and motion design, helping create engaging and delightful user experiences."},{id:"24",question:"Is the Dell Design System compatible with popular design tools like Figma or Adobe XD?",answer:"Yes, the Dell Design System can be used with popular design tools like Figma, Adobe XD, and Sketch,"}],p=[{options:["hi","hey","hello"],answer:"Hi, I'm Dan from DDS. How may I help you?"},{options:["thanks","thank you"],answer:"You're welcome"}];var D=lunr(function(){this.ref("id"),this.field("question"),this.field("answer"),c.forEach(function(a){this.add(a)},this)});function w(a){for(let e=0;e<c.length;e++)if(c[e].id===a)return c[e]}function S(a,e){const l=[];for(let t=0;t<a.length;t++)a[t].score>e&&l.push(a[t]);return l}function j(a){for(let e=0;e<p.length;e++)if(p[e].options.includes(a.toLowerCase()))return[{question:a,answer:p[e].answer,exact:!0}]}function x(a){const e=j(a);if(e)return e;const l=D.search(`question:${a}`),t=S(l,1),s=[];return t.forEach(i=>s.push(w(i.ref))),s}const u={search:x},q=()=>{const a=document.querySelector("#input"),e=document.querySelector("#output"),l=document.querySelector(".prompt");function t(){l.hasAttribute("hidden")||l.setAttribute("hidden","")}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".prompt__box").forEach(n=>{n.addEventListener("click",o=>{const d=o.target.innerText.toLowerCase(),_=u.search(d);t(),s(d),i(_[0].answer,_[0].exact)})}),a.addEventListener("keydown",n=>{if(n.code==="Enter"){t();const o=a.value.toLowerCase();a.value="";const d=u.search(o);s(o),d.length?i(d[0].answer,d[0].exact):r()}})});function s(n){const o=document.createElement("div");o.classList.add("bot__response"),o.classList.add("bot__responses__question"),o.innerText=n,e.appendChild(o)}function i(n,o){const d=document.createElement("div");d.classList.add("bot__response"),d.classList.add("bot__responses__answer"),o?d.innerText=n:d.innerText=`We think this may help you: ${n}`,e.appendChild(d)}function r(){const n=document.createElement("div");n.classList.add("bot__response"),n.classList.add("bot__responses__answer"),n.innerHTML=`We are sorry, we don't have an answer for that question. You can try: 
        <ul><li>- asking again in a different way</li>
        <li><a href="https://www.dell.com/community/General/bd-p/dds-general">Ask the question on our Forum</a></li></ul>`,e.appendChild(n)}},C=`
 <div class="footer">
 <ul>
 <li>Copyright @ 2023 Dell Inc.</li>
 <li>Privacy</li>
 <li>Terms of Use</li>
 <li>Accessibility</li>
 </ul>
 </div>
 `,v=document.createElement("div");v.innerHTML=C;const k=v.firstElementChild,E=`
 <div class="header">
 <div class="header__item dell_brand">
 <img src="https://www.delldesignsystem.com/images/DellTech_Logo_mobile.svg" alt="Dell Technologies" class="mobile-logo">
 <h1 class="brand_name" >Dell Design System</h1>
 </div>

 <div class="header__item dds__search" id="search-115509873" data-dds="search" role="search">
 
  <div class="dds__search__wrapper">
    <input
      type="search"
      class="dds__search__control"
      placeholder="Search input"
      name="search-control-115509873"
      id="search-control-115509873"
      aria-labelledby="search-label-115509873"
      autocomplete="off"
    />
  </div>
</div>

<div class="header__item">
<button class="dds__button dds__button--tertiary" type="button">
<i class="dds__icon dds__icon--headset dds__button__icon--start" aria-hidden="true"></i>
Contact
</button>
</div>
 </div>
 `,m=document.createElement("div");m.innerHTML=E;const L=m.firstElementChild,T=`
 <div class="prompt">
    <div class="prompt__header">
        <div class="prompt__header__title"><span class="dds__icon dds__icon--conversation"></span>DDAsk</div>
        <div class="prompt__header__subtitle">Your AI-powered help center for the Dell Design System</div>
    </div>
    <div class="prompt__body">
        <div class="prompt__body__item">
            <div class="prompt__explore"><span class="dds__icon dds__icon--lightbulb"></span> Explore</div>
            <div class="prompt__box">What is the Dell Design System?</div>
        </div>
        <div class="prompt__body__item">
            <div class="prompt__explore"><span class="dds__icon dds__icon--lightbulb"></span> Explore</div>
            <div class="prompt__box">How to access Figma libraries?</div>
        </div>
        <div class="prompt__body__item">
            <div class="prompt__explore"><span class="dds__icon dds__icon--lightbulb"></span> Explore</div>
            <div class="prompt__box">How can I start using the Vanilla components?</div>
        </div>
    </div>
 </div>
 `,h=document.createElement("div");h.innerHTML=T;const A=h.firstElementChild,F=`<nav class="dds__side-nav__wrapper" data-dds="side-nav" id="sidenav-346059066" aria-label="Side Navigation example">
  <section class="dds__side-nav">
    <ul class="dds__side-nav__menu">
      <li class="dds__side-nav__item">
        <a href="javascript:void(0)">
          <span class="dds__icon dds__side-nav__icon dds__icon--home" aria-hidden="true"></span>
          <span>Home</span>
        </a>
      </li>

      <li class="dds__side-nav__group">
        <button type="button" aria-haspopup="true" aria-expanded="false">
          <span class="dds__icon dds__side-nav__icon dds__icon--toolbox" aria-hidden="true"></span>
          <span>Getting Started</span>
        </button>

        <ul class="dds__side-nav__menu">
          <li class="dds__side-nav__group">
            <button type="button" aria-haspopup="true" aria-expanded="false">
              <span class="dds__icon dds__side-nav__icon dds__icon--stack" aria-hidden="true"></span>
              <span>Components</span>
            </button>

            <ul class="dds__side-nav__menu">
              <li class="dds__side-nav__item">
                <a href="javascript:void(0)">
                  <span>Vanilla</span>
                </a>
              </li>
              <li class="dds__side-nav__item">
                <a href="javascript:void(0)">
                  <span>Banner</span>
                </a>
              </li>
              <li class="dds__side-nav__item">
                <a href="javascript:void(0)">
                  <span>Web Components</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Figma</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="dds__side-nav__group">
        <button type="button" aria-haspopup="true" aria-expanded="false">
          <span class="dds__icon dds__side-nav__icon dds__icon--puzzle" aria-hidden="true"></span>
          <span>Updates</span>
        </button>

        <ul class="dds__side-nav__menu">
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Component Status</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="dds__side-nav__group">
        <button type="button" aria-haspopup="true" aria-expanded="false">
          <span class="dds__icon dds__side-nav__icon dds__icon--stack" aria-hidden="true"></span>
          <span>Foundations</span>
        </button>

        <ul class="dds__side-nav__menu">
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Color</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Elevation</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Grid</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Typography</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="dds__side-nav__group">
        <button type="button" aria-haspopup="true" aria-expanded="false">
          <span class="dds__icon dds__side-nav__icon dds__icon--objects" aria-hidden="true"></span>
          <span>Components</span>
        </button>

        <ul class="dds__side-nav__menu">
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Badge</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Banner</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Breadcrumb</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Button</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Card</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Carousel</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Checkbox</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Divider &amp; Container</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Drawer</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Dropdown</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Filter</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Footer</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Form</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Link</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>List</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Loading Icon</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Masthead</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Message Bar</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Modal</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Nav</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Notification</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Pagination</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Popover</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Product Stack</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Progress</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Radio Button</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Rating</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Select</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>ShowHide</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Side Nav</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Slider</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Tab</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Table</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Tag</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Tooltip</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="dds__side-nav__group">
        <button type="button" aria-haspopup="true" aria-expanded="false">
          <span class="dds__icon dds__side-nav__icon dds__icon--puzzle" aria-hidden="true"></span>
          <span>Pattern</span>
        </button>

        <ul class="dds__side-nav__menu">
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Side Navigation</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="dds__side-nav__group">
        <button type="button" aria-haspopup="true" aria-expanded="false">
          <span class="dds__icon dds__side-nav__icon dds__icon--headset" aria-hidden="true"></span>
          <span>Contact</span>
        </button>

        <ul class="dds__side-nav__menu">
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Send Feedback</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Find us on Teams</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Email us</span>
            </a>
          </li>
          <li class="dds__side-nav__item">
            <a href="javascript:void(0)">
              <span>Contribute to DDS</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="dds__side-nav__item">
        <a href="javascript:void(0)">
          <span class="dds__icon dds__side-nav__icon dds__icon--chat-bot" aria-hidden="true"></span>
          <span>DDAsk</span>
        </a>
      </li>
    </ul>
  </section>

  <div class="dds__side-nav__toggle">
    <button type="button" aria-label="collapse side navigation">
      <span class="dds__icon dds__side-nav__icon dds__icon--chevron-left"></span>
    </button>
    <button type="button" aria-label="expand side navigation">
      <span class="dds__icon dds__side-nav__icon dds__icon--chevron-right"></span>
    </button>
  </div>
</nav>`,f=document.createElement("div");f.innerHTML=F;const g=f.firstElementChild;const H=document.querySelector("main"),b=document.querySelector("#app"),I=document.querySelector("#header"),Y=document.querySelector("#footer");b.appendChild(A);I.appendChild(L);H.insertAdjacentElement("beforebegin",g);const y=document.createElement("div");y.innerHTML=`
<div class="bot">
 <div class="bot__responses__container">
       <div class="bot__responses" id="output"></div>
   </div>
   <div class=" bot__input">
      <label>Ask me anything</label>
      <input class="dds__input-text" id="input" />
    </div>
   </div>`;b.appendChild(y.firstElementChild);Y.appendChild(k);q();DDS.SideNav(g);
