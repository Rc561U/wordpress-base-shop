(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[68],{20:function(t,e,c){"use strict";c.d(e,"a",(function(){return n})),c.d(e,"b",(function(){return o}));const n=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return n(t)&&e in t}},216:function(t,e,c){"use strict";c.d(e,"a",(function(){return o})),c(100);var n=c(46);const o=()=>n.m>1},217:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(30),o=c(20);const r=t=>Object(n.a)(t)?JSON.parse(t)||{}:Object(o.a)(t)?t:{}},277:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var n=c(111),o=c(216),r=c(20),s=c(217);const a=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},c=Object(s.a)(e.style);return Object(n.__experimentalUseBorderProps)({...e,style:c})}},292:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var n=c(111),o=c(216),r=c(20),s=c(217);const a=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},c=Object(s.a)(e.style);return Object(n.__experimentalUseColorProps)({...e,style:c})}},301:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(20),o=c(217);const r=t=>{const e=Object(n.a)(t)?t:{},c=Object(o.a)(e.style),r=Object(n.a)(c.typography)?c.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:e.fontFamily}}}},321:function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var n=c(0),o=c(6),r=c(3),s=c(23),a=c(38);const i=(t,e)=>{const c=t.find(t=>{let{id:c}=t;return c===e});return c?c.quantity:0},l=t=>{const{addItemToCart:e}=Object(o.useDispatch)(r.CART_STORE_KEY),{cartItems:c,cartIsLoading:l}=Object(a.a)(),{createErrorNotice:u,removeNotice:d}=Object(o.useDispatch)("core/notices"),[b,p]=Object(n.useState)(!1),y=Object(n.useRef)(i(c,t));return Object(n.useEffect)(()=>{const e=i(c,t);e!==y.current&&(y.current=e)},[c,t]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:b,cartIsLoading:l,addToCart:function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),e(t,c).then(()=>{d("add-to-cart")}).catch(t=>{u(Object(s.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}},326:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var n=c(111),o=c(216),r=c(20),s=c(217);const a=t=>{if(!Object(o.a)()||"function"!=typeof n.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(r.a)(t)?t:{},c=Object(s.a)(e.style);return Object(n.__experimentalGetSpacingClassesAndStyles)({...e,style:c})}},343:function(t,e){},363:function(t,e,c){"use strict";c.r(e),c.d(e,"Block",(function(){return g}));var n=c(12),o=c.n(n),r=c(0),s=c(4),a=c.n(s),i=c(1),l=c(70),u=c(321),d=c(292),b=c(277),p=c(301),y=c(326),f=c(23),O=c(46),j=c(2),m=c(50),_=c(134);c(343);const g=t=>{const{className:e}=t,{parentClassName:c}=Object(m.useInnerBlockLayoutContext)(),{product:n}=Object(m.useProductDataContext)(),o=Object(d.a)(t),s=Object(b.a)(t),i=Object(p.a)(t),l=Object(y.a)(t);return Object(r.createElement)("div",{className:a()(e,"wp-block-button","wc-block-components-product-button",{[c+"__product-add-to-cart"]:c})},n.id?Object(r.createElement)(S,{product:n,colorStyles:o,borderStyles:s,typographyStyles:i,spacingStyles:l}):Object(r.createElement)(w,{colorStyles:o,borderStyles:s,typographyStyles:i,spacingStyles:l}))},S=t=>{let{product:e,colorStyles:c,borderStyles:n,typographyStyles:s,spacingStyles:d}=t;const{id:b,permalink:p,add_to_cart:y,has_options:m,is_purchasable:_,is_in_stock:g}=e,{dispatchStoreEvent:S}=Object(l.a)(),{cartQuantity:w,addingToCart:h,addToCart:k}=Object(u.a)(b,"woocommerce/single-product/"+(b||0)),v=Number.isFinite(w)&&w>0,N=!m&&_&&g,C=Object(f.decodeEntities)((null==y?void 0:y.description)||""),E=v?Object(i.sprintf)(
/* translators: %s number of products in cart */
Object(i._n)("%d in cart","%d in cart",w,"woocommerce"),w):Object(f.decodeEntities)((null==y?void 0:y.text)||Object(i.__)("Add to cart","woocommerce")),x=N?"button":"a",T={};return N?T.onClick=async()=>{await k(),S("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(j.getSetting)("productsSettings");t&&(window.location.href=O.c)}:(T.href=p,T.rel="nofollow",T.onClick=()=>{S("product-view-link",{product:e})}),Object(r.createElement)(x,o()({"aria-label":C,className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",c.className,n.className,{loading:h,added:v}),style:{...c.style,...n.style,...s.style,...d.style},disabled:h},T),E)},w=t=>{let{colorStyles:e,borderStyles:c,typographyStyles:n,spacingStyles:o}=t;return Object(r.createElement)("button",{className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,c.className),style:{...e.style,...c.style,...n.style,...o.style},disabled:!0})};e.default=Object(_.withProductDataContext)(g)}}]);