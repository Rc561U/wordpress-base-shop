(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[50],{146:function(e,t,n){"use strict";var c=n(0);n(215),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},147:function(e,t,n){"use strict";var c=n(0),o=n(1),a=n(4),s=n.n(a),r=(n(218),n(146));t.a=e=>{let{children:t,className:n,screenReaderLabel:a,showSpinner:l=!1,isLoading:i=!0}=e;return Object(c.createElement)("div",{className:s()(n,{"wc-block-components-loading-mask":i})},i&&l&&Object(c.createElement)(r.a,null),Object(c.createElement)("div",{className:s()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},t),i&&Object(c.createElement)("span",{className:"screen-reader-text"},a||Object(o.__)("Loading…","woocommerce")))}},19:function(e,t,n){"use strict";var c=n(0),o=n(4),a=n.n(o);t.a=e=>{let t,{label:n,screenReaderLabel:o,wrapperElement:s,wrapperProps:r={}}=e;const l=null!=n,i=null!=o;return!l&&i?(t=s||"span",r={...r,className:a()(r.className,"screen-reader-text")},Object(c.createElement)(t,r,o)):(t=s||c.Fragment,l&&i&&n!==o?Object(c.createElement)(t,r,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},o)):Object(c.createElement)(t,r,n))}},215:function(e,t){},218:function(e,t){},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(0),o=n(6),a=n(3);n(293);const s=e=>{let{errorMessage:t="",propertyName:n="",elementId:s=""}=e;const{validationError:r,validationErrorId:l}=Object(o.useSelect)(e=>{const t=e(a.VALIDATION_STORE_KEY);return{validationError:t.getValidationError(n),validationErrorId:t.getValidationErrorId(s)}});if(!t||"string"!=typeof t){if(null==r||!r.message||null!=r&&r.hidden)return null;t=r.message}return Object(c.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(c.createElement)("p",{id:l},t))};t.b=s},293:function(e,t){},297:function(e,t,n){"use strict";var c=n(12),o=n.n(c),a=n(0),s=n(4),r=n.n(s);n(298),t.a=e=>{let{children:t,className:n,headingLevel:c,...s}=e;const l=r()("wc-block-components-title",n),i="h"+c;return Object(a.createElement)(i,o()({className:l},s),t)}},298:function(e,t){},299:function(e,t,n){"use strict";var c=n(0),o=n(4),a=n.n(o),s=n(300);t.a=e=>{let{checked:t,name:n,onChange:o,option:r}=e;const{value:l,label:i,description:d,secondaryLabel:p,secondaryDescription:m}=r;return Object(c.createElement)("label",{className:a()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${n}-${l}`},Object(c.createElement)("input",{id:`${n}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:n,value:l,onChange:e=>o(e.target.value),checked:t,"aria-describedby":a()({[`${n}-${l}__label`]:i,[`${n}-${l}__secondary-label`]:p,[`${n}-${l}__description`]:d,[`${n}-${l}__secondary-description`]:m})}),Object(c.createElement)(s.a,{id:`${n}-${l}`,label:i,secondaryLabel:p,description:d,secondaryDescription:m}))}},300:function(e,t,n){"use strict";var c=n(0);t.a=e=>{let{label:t,secondaryLabel:n,description:o,secondaryDescription:a,id:s}=e;return Object(c.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(c.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(c.createElement)("span",{id:s&&s+"__label",className:"wc-block-components-radio-control__label"},t),n&&Object(c.createElement)("span",{id:s&&s+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},n)),Object(c.createElement)("div",{className:"wc-block-components-radio-control__description-group"},o&&Object(c.createElement)("span",{id:s&&s+"__description",className:"wc-block-components-radio-control__description"},o),a&&Object(c.createElement)("span",{id:s&&s+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},a)))}},303:function(e,t){},304:function(e,t,n){"use strict";var c=n(1);t.a=e=>{let{defaultTitle:t=Object(c.__)("Step","woocommerce"),defaultDescription:n=Object(c.__)("Step description text.","woocommerce"),defaultShowStepNumber:o=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:n},showStepNumber:{type:"boolean",default:o}}}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(1),o=n(6),a=n(3),s=n(23),r=n(38);const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:n}=Object(r.a)(),{createErrorNotice:l}=Object(o.useDispatch)("core/notices"),{createNotice:i}=Object(o.useDispatch)("core/notices"),{setValidationErrors:d}=Object(o.useDispatch)(a.VALIDATION_STORE_KEY),{applyCoupon:p,removeCoupon:m,isApplyingCoupon:u,isRemovingCoupon:b}=Object(o.useSelect)((e,t)=>{let{dispatch:n}=t;const c=e(a.CART_STORE_KEY),o=n(a.CART_STORE_KEY);return{applyCoupon:o.applyCoupon,removeCoupon:o.removeCoupon,isApplyingCoupon:c.isApplyingCoupon(),isRemovingCoupon:c.isRemovingCoupon(),receiveApplyingCoupon:o.receiveApplyingCoupon}},[l,i]),h=t=>{p(t).then(n=>{!0===n&&i("info",Object(c.sprintf)(
/* translators: %s coupon code. */
Object(c.__)('Coupon code "%s" has been applied to your cart',"woocommerce"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(e=>{d({coupon:{message:Object(s.decodeEntities)(e.message),hidden:!1}}),receiveApplyingCoupon("")})},g=t=>{m(t).then(n=>{!0===n&&i("info",Object(c.sprintf)(
/* translators: %s coupon code. */
Object(c.__)('Coupon code "%s" has been removed from your cart',"woocommerce"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(t=>{l(t.message,{id:"coupon-form",context:e}),receiveApplyingCoupon("")})};return{appliedCoupons:t,isLoading:n,applyCoupon:h,removeCoupon:g,isApplyingCoupon:u,isRemovingCoupon:b}}},312:function(e,t){},317:function(e,t,n){"use strict";var c=n(12),o=n.n(c),a=n(0),s=n(4),r=n.n(s);const l=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var i=e=>{let{id:t,src:n=null,alt:c=""}=e;return n?Object(a.createElement)("img",{className:l(t),src:n,alt:c}):null},d=n(46);const p=[{id:"alipay",alt:"Alipay",src:d.l+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:d.l+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:d.l+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:d.l+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:d.l+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:d.l+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:d.l+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:d.l+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:d.l+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:d.l+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:d.l+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:d.l+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:d.l+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:d.l+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:d.l+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:d.l+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:d.l+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:d.l+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:d.l+"payment-methods/wechat.svg"}];var m=n(30);n(312),t.a=e=>{let{icons:t=[],align:n="center",className:c}=e;const s=(e=>{const t={};return e.forEach(e=>{let n={};"string"==typeof e&&(n={id:e,alt:e,src:null}),"object"==typeof e&&(n={id:e.id||"",alt:e.alt||"",src:e.src||null}),n.id&&Object(m.a)(n.id)&&!t[n.id]&&(t[n.id]=n)}),Object.values(t)})(t);if(0===s.length)return null;const l=r()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===n,"wc-block-components-payment-method-icons--align-right":"right"===n},c);return Object(a.createElement)("div",{className:l},s.map(e=>{const t={...e,...(n=e.id,p.find(e=>e.id===n)||{})};var n;return Object(a.createElement)(i,o()({key:"payment-method-icon-"+e.id},t))}))}},322:function(e,t,n){"use strict";var c=n(0),o=n(4),a=n.n(o),s=n(11),r=n(299);n(323);const l=e=>{let{className:t="",id:n,selected:o,onChange:i,options:d=[]}=e;const p=Object(s.useInstanceId)(l),m=n||p;return d.length?Object(c.createElement)("div",{className:a()("wc-block-components-radio-control",t)},d.map(e=>Object(c.createElement)(r.a,{key:`${m}-${e.value}`,name:"radio-control-"+m,checked:e.value===o,option:e,onChange:t=>{i(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=l},323:function(e,t){},330:function(e,t,n){"use strict";var c=n(0),o=n(4),a=n.n(o),s=n(297);n(303);const r=e=>{let{title:t,stepHeadingContent:n}=e;return Object(c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(c.createElement)(s.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&Object(c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},n))};t.a=e=>{let{id:t,className:n,title:o,legend:s,description:l,children:i,disabled:d=!1,showStepNumber:p=!0,stepHeadingContent:m=(()=>{})}=e;const u=s||o?"fieldset":"div";return Object(c.createElement)(u,{className:a()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":p,"wc-block-components-checkout-step--disabled":d}),id:t,disabled:d},!(!s&&!o)&&Object(c.createElement)("legend",{className:"screen-reader-text"},s||o),!!o&&Object(c.createElement)(r,{title:o,stepHeadingContent:m()}),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(c.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},351:function(e,t){},352:function(e,t,n){"use strict";var c=n(17),o=n.n(c),a=n(0),s=n(1),r=n(8),l=n(2),i=n(138),d=n(65);class p extends r.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return{errorMessage:e.message,hasError:!0}}render(){const{hasError:e,errorMessage:t}=this.state,{isEditor:n}=this.props;if(e){let e=Object(s.__)("We are experiencing difficulties with this payment method. Please contact us for assistance.","woocommerce");(n||l.CURRENT_USER_IS_ADMIN)&&(e=t||Object(s.__)("There was an error with this payment method. Please verify it's configured correctly.","woocommerce"));const c=[{id:"0",content:e,isDismissible:!1,status:"error"}];return Object(a.createElement)(i.a,{additionalNotices:c,context:d.noticeContexts.PAYMENTS})}return this.props.children}}p.defaultProps={isEditor:!1},t.a=p},372:function(e,t,n){"use strict";var c=n(9),o=n(0),a=n(4),s=n.n(a),r=n(11),l=n(41);t.a=function({icon:e,children:t,label:n,instructions:a,className:i,notices:d,preview:p,isColumnLayout:m,...u}){const[b,{width:h}]=Object(r.useResizeObserver)();let g;"number"==typeof h&&(g={"is-large":h>=480,"is-medium":h>=160&&h<480,"is-small":h<160});const v=s()("components-placeholder",i,g),O=s()("components-placeholder__fieldset",{"is-column-layout":m});return Object(o.createElement)("div",Object(c.a)({},u,{className:v}),b,d,p&&Object(o.createElement)("div",{className:"components-placeholder__preview"},p),Object(o.createElement)("div",{className:"components-placeholder__label"},Object(o.createElement)(l.a,{icon:e}),n),!!a&&Object(o.createElement)("div",{className:"components-placeholder__instructions"},a),Object(o.createElement)("div",{className:O},t))}},410:function(e,t,n){"use strict";var c=n(0),o=n(15);const a=Object(c.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(o.Path,{fillRule:"evenodd",d:"M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",clipRule:"evenodd"}));t.a=a},423:function(e,t){},432:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var c=n(1),o=n(40),a=n(0),s=n(4),r=n.n(s),l=n(15),i=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(a.createElement)("path",{d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{fill:"#000",fillRule:"nonzero",d:"M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z"}),Object(a.createElement)("path",{stroke:"#000",strokeLinecap:"round",d:"M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8"}))),d=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(l.Path,{fillRule:"evenodd",d:"M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",clipRule:"evenodd"})),p=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(l.Path,{d:"M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"})),m=n(410),u=n(114),b=n(30),h=n(20);n(351);const g={bank:d,bill:p,card:m.a,checkPayment:i};var v=e=>{let{icon:t="",text:n=""}=e;const c=!!t,o=Object(a.useCallback)(e=>c&&Object(b.a)(e)&&Object(h.b)(g,e),[c]),s=r()("wc-block-components-payment-method-label",{"wc-block-components-payment-method-label--with-icon":c});return Object(a.createElement)("span",{className:s},o(t)?Object(a.createElement)(u.a,{icon:g[t]}):t,n)},O=n(317),y=n(2),j=n(21),_=n.n(j),E=n(147),k=n(6),w=n(3),S=n(291),f=n(38),C=n(311),P=n(43),N=n(88),M=n(122),T=n(89),R=n(90);const A=(e,t)=>{const n=[],o=(t,n)=>{const c=n+"_tax",o=Object(h.b)(e,n)&&Object(b.a)(e[n])?parseInt(e[n],10):0;return{key:n,label:t,value:o,valueWithTax:o+(Object(h.b)(e,c)&&Object(b.a)(e[c])?parseInt(e[c],10):0)}};return n.push(o(Object(c.__)("Subtotal:","woocommerce"),"total_items")),n.push(o(Object(c.__)("Fees:","woocommerce"),"total_fees")),n.push(o(Object(c.__)("Discount:","woocommerce"),"total_discount")),n.push({key:"total_tax",label:Object(c.__)("Taxes:","woocommerce"),value:parseInt(e.total_tax,10),valueWithTax:parseInt(e.total_tax,10)}),t&&n.push(o(Object(c.__)("Shipping:","woocommerce"),"total_shipping")),n};var x=n(119);const I=()=>{const{onCheckoutBeforeProcessing:e,onCheckoutValidationBeforeProcessing:t,onCheckoutAfterProcessingWithSuccess:n,onCheckoutAfterProcessingWithError:s,onSubmit:r}=Object(N.b)(),{isCalculating:l,isComplete:i,isIdle:d,isProcessing:p,customerId:m}=Object(k.useSelect)(e=>{const t=e(w.CHECKOUT_STORE_KEY);return{isComplete:t.isComplete(),isIdle:t.isIdle(),isProcessing:t.isProcessing(),customerId:t.getCustomerId(),isCalculating:t.isCalculating()}}),{currentStatus:u,activePaymentMethod:b,shouldSavePayment:h}=Object(k.useSelect)(e=>{const t=e(w.PAYMENT_STORE_KEY);return{currentStatus:t.getCurrentStatus(),activePaymentMethod:t.getActivePaymentMethod(),shouldSavePayment:t.getShouldSavePaymentMethod()}}),{__internalSetExpressPaymentError:g}=Object(k.useDispatch)(w.PAYMENT_STORE_KEY),{onPaymentProcessing:j}=Object(M.b)(),{shippingErrorStatus:I,shippingErrorTypes:D,onShippingRateSuccess:Y,onShippingRateFail:L,onShippingRateSelectSuccess:z,onShippingRateSelectFail:$}=Object(T.b)(),{shippingRates:V,isLoadingRates:K,selectedRates:H,isSelectingRate:F,selectShippingRate:B,needsShipping:W}=Object(x.a)(),{billingAddress:U,shippingAddress:G,setShippingAddress:J}=Object(R.b)(),{cartItems:q,cartFees:Q,cartTotals:X,extensions:Z}=Object(f.a)(),{appliedCoupons:ee}=Object(C.a)(),te=Object(a.useRef)(A(X,W)),ne=Object(a.useRef)({label:Object(c.__)("Total","woocommerce"),value:parseInt(X.total_price,10)});Object(a.useEffect)(()=>{te.current=A(X,W),ne.current={label:Object(c.__)("Total","woocommerce"),value:parseInt(X.total_price,10)}},[X,W]);const ce=Object(a.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";_()("setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",{alternative:"",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228"}),g(e)}),[g]);return{activePaymentMethod:b,billing:{appliedCoupons:ee,billingAddress:U,billingData:U,cartTotal:ne.current,cartTotalItems:te.current,currency:Object(o.getCurrencyFromPriceResponse)(X),customerId:m,displayPricesIncludingTax:Object(y.getSetting)("displayCartPricesIncludingTax",!1)},cartData:{cartItems:q,cartFees:Q,extensions:Z},checkoutStatus:{isCalculating:l,isComplete:i,isIdle:d,isProcessing:p},components:{LoadingMask:E.a,PaymentMethodIcons:O.a,PaymentMethodLabel:v,ValidationInputError:S.a},emitResponse:{noticeContexts:P.d,responseTypes:P.e},eventRegistration:{onCheckoutAfterProcessingWithError:s,onCheckoutAfterProcessingWithSuccess:n,onCheckoutBeforeProcessing:e,onCheckoutValidationBeforeProcessing:t,onPaymentProcessing:j,onShippingRateFail:L,onShippingRateSelectFail:$,onShippingRateSelectSuccess:z,onShippingRateSuccess:Y},onSubmit:r,paymentStatus:u,setExpressPaymentError:ce,shippingData:{isSelectingRate:F,needsShipping:W,selectedRates:H,setSelectedRates:B,setShippingAddress:J,shippingAddress:G,shippingRates:V,shippingRatesLoading:K},shippingStatus:{shippingErrorStatus:I,shippingErrorTypes:D},shouldSavePayment:h}}},469:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(4),a=n.n(o),s=n(38),r=n(134),l=n(330),i=n(6),d=n(3),p=n(1),m=n(19),u=n(372),b=n(44),h=n(98),g=n(114),v=n(410),O=n(2),y=n(36);n(423);const j=()=>Object(c.createElement)(u.a,{icon:Object(c.createElement)(g.a,{icon:v.a}),label:Object(p.__)("Payment methods","woocommerce"),className:"wc-block-checkout__no-payment-methods-placeholder"},Object(c.createElement)("span",{className:"wc-block-checkout__no-payment-methods-placeholder-description"},Object(p.__)("Your store does not have any payment methods that support the Checkout block. Once you have configured a compatible payment method it will be displayed here.","woocommerce")),Object(c.createElement)(b.a,{isSecondary:!0,href:O.ADMIN_URL+"admin.php?page=wc-settings&tab=checkout",target:"_blank",rel:"noopener noreferrer"},Object(p.__)("Configure Payment Methods","woocommerce"))),_=()=>Object(c.createElement)(h.a,{isDismissible:!1,className:a()("wc-block-checkout__no-payment-methods-notice","woocommerce-message","woocommerce-error")},Object(p.__)("There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.","woocommerce"));var E=()=>{const{isEditor:e}=Object(y.a)();return e?Object(c.createElement)(j,null):Object(c.createElement)(_,null)},k=n(432),w=n(70),S=n(11),f=n(299),C=Object(S.withInstanceId)(e=>{let{className:t,instanceId:n,id:o,selected:s,onChange:r,options:l=[]}=e;const i=o||n;return l.length&&Object(c.createElement)("div",{className:a()("wc-block-components-radio-control",t)},l.map(e=>{const t="object"==typeof e&&"content"in e,n=e.value===s;return Object(c.createElement)("div",{className:"wc-block-components-radio-control-accordion-option",key:e.value},Object(c.createElement)(f.a,{name:"radio-control-"+i,checked:n,option:e,onChange:t=>{r(t),"function"==typeof e.onChange&&e.onChange(t)}}),t&&n&&Object(c.createElement)("div",{className:a()("wc-block-components-radio-control-accordion-content",{"wc-block-components-radio-control-accordion-content-hide":!n})},e.content))}))}),P=n(18),N=n(10),M=n(352),T=e=>{let{children:t,showSaveOption:n}=e;const{isEditor:o}=Object(y.a)(),{shouldSavePaymentMethod:a,customerId:s}=Object(i.useSelect)(e=>{const t=e(d.PAYMENT_STORE_KEY),n=e(d.CHECKOUT_STORE_KEY);return{shouldSavePaymentMethod:t.getShouldSavePaymentMethod(),customerId:n.getCustomerId()}}),{__internalSetShouldSavePaymentMethod:r}=Object(i.useDispatch)(d.PAYMENT_STORE_KEY);return Object(c.createElement)(M.a,{isEditor:o},t,s>0&&n&&Object(c.createElement)(N.CheckboxControl,{className:"wc-block-components-payment-methods__save-card-info",label:Object(p.__)("Save payment information to my account for future purchases.","woocommerce"),checked:a,onChange:()=>r(!a)}))},R=n(43),A=n(108),x=()=>{const{activeSavedToken:e,activePaymentMethod:t,isExpressPaymentMethodActive:n,savedPaymentMethods:o,availablePaymentMethods:s}=Object(i.useSelect)(e=>{const t=e(A.a);return{activeSavedToken:t.getActiveSavedToken(),activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive(),savedPaymentMethods:t.getSavedPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),{__internalSetActivePaymentMethod:r}=Object(i.useDispatch)(A.a),l=Object(P.getPaymentMethods)(),{...d}=Object(k.a)(),{removeNotice:p}=Object(i.useDispatch)("core/notices"),{dispatchCheckoutEvent:m}=Object(w.a)(),{isEditor:u}=Object(y.a)(),b=Object.keys(s).map(e=>{const{edit:t,content:n,label:o,supports:a}=l[e],s=u?t:n;return{value:e,label:"string"==typeof o?o:Object(c.cloneElement)(o,{components:d.components}),name:"wc-saved-payment-method-token-"+e,content:Object(c.createElement)(T,{showSaveOption:a.showSaveOption},Object(c.cloneElement)(s,{__internalSetActivePaymentMethod:r,...d}))}}),h=Object(c.useCallback)(e=>{r(e),p("wc-payment-error",R.d.PAYMENTS),m("set-active-payment-method",{value:e})},[m,p,r]),g=0===Object.keys(o).length&&1===Object.keys(l).length,v=a()({"disable-radio-control":g});return n?null:Object(c.createElement)(C,{id:"wc-payment-method-options",className:v,selected:e?null:t,onChange:h,options:b})},I=n(322);const D=e=>{let{method:t,expires:n}=e;return Object(p.sprintf)(
/* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
Object(p.__)("%1$s ending in %2$s (expires %3$s)","woocommerce"),t.brand,t.last4,n)},Y=e=>{let{method:t}=e;return t.brand&&t.last4?Object(p.sprintf)(
/* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */
Object(p.__)("%1$s ending in %2$s","woocommerce"),t.brand,t.last4):Object(p.sprintf)(
/* translators: %s is the name of the payment method gateway. */
Object(p.__)("Saved token for %s","woocommerce"),t.gateway)};var L=()=>{var e,t;const{activeSavedToken:n,activePaymentMethod:o,savedPaymentMethods:a}=Object(i.useSelect)(e=>e(d.PAYMENT_STORE_KEY).getState()),{__internalSetActivePaymentMethod:s}=Object(i.useDispatch)(d.PAYMENT_STORE_KEY),r=Object(P.getPaymentMethods)(),l=Object(k.a)(),{removeNotice:p}=Object(i.useDispatch)("core/notices"),{dispatchCheckoutEvent:m}=Object(w.a)(),u=Object(c.useMemo)(()=>Object.keys(a).flatMap(e=>a[e].map(t=>{const n="cc"===e||"echeck"===e,c=t.method.gateway;return{name:"wc-saved-payment-method-token-"+c,label:n?D(t):Y(t),value:t.tokenId.toString(),onChange:e=>{s(c,{token:e,payment_method:c,[`wc-${c}-payment-token`]:e.toString(),isSavedToken:!0}),p("wc-payment-error",R.d.PAYMENTS),m("set-active-payment-method",{paymentMethodSlug:c})}}})).filter(Boolean),[a,s,p,m]),b=n&&r[o]&&null!==(e=r[o])&&void 0!==e&&e.savedTokenComponent?Object(c.cloneElement)(null===(t=r[o])||void 0===t?void 0:t.savedTokenComponent,{token:n,...l}):null;return u.length>0?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(I.a,{id:"wc-payment-method-saved-tokens",selected:n,options:u,onChange:()=>{}}),b):null},z=()=>{const{paymentMethodsInitialized:e,availablePaymentMethods:t,savedPaymentMethods:n}=Object(i.select)(d.PAYMENT_STORE_KEY).getState();return e&&0===Object.keys(t).length?Object(c.createElement)(E,null):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(L,null),Object.keys(n).length>0&&Object(c.createElement)(m.a,{label:Object(p.__)("Use another payment method.","woocommerce"),screenReaderLabel:Object(p.__)("Other available payment methods","woocommerce"),wrapperElement:"p",wrapperProps:{className:["wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned"]}}),Object(c.createElement)(x,null))},$=()=>Object(c.createElement)(z,null),V=n(304),K={...Object(V.a)({defaultTitle:Object(p.__)("Payment options","woocommerce"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},H=n(138);t.default=Object(r.withFilteredAttributes)(K)(e=>{let{title:t,description:n,showStepNumber:o,children:r,className:p}=e;const m=Object(i.useSelect)(e=>e(d.CHECKOUT_STORE_KEY).isProcessing()),{cartNeedsPayment:u}=Object(s.a)();return u?Object(c.createElement)(l.a,{id:"payment-method",disabled:m,className:a()("wc-block-checkout__payment-method",p),title:t,description:n,showStepNumber:o},Object(c.createElement)(H.a,{context:R.d.PAYMENTS}),Object(c.createElement)($,null),r):null})},65:function(e,t,n){}}]);