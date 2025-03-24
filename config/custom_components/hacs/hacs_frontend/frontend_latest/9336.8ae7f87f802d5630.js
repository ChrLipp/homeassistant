export const ids=["9336"];export const modules={65744:function(e,t,r){var i=r(44249),s=r(72621),a=(r(75656),r(50100),r(18084),r(57243)),o=r(50778),n=r(11297),l=r(30137),d=(r(17949),r(530)),h=r(49672);(0,i.Z)([(0,o.Mo)("ha-hls-player")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"entityid",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"url",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"poster-url"})],key:"posterUrl",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"playsinline"})],key:"playsInline",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("video")],key:"_videoEl",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_errorIsFatal",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_url",value:void 0},{kind:"field",key:"_hlsPolyfillInstance",value:void 0},{kind:"field",key:"_exoPlayer",value:()=>!1},{kind:"field",static:!0,key:"streamCount",value:()=>0},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(i,"connectedCallback",this,3)([]),i.streamCount+=1,this.hasUpdated&&(this._resetError(),this._startHls())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)(i,"disconnectedCallback",this,3)([]),i.streamCount-=1,this._cleanUp()}},{kind:"method",key:"render",value:function(){return a.dy` ${this._error?a.dy`<ha-alert alert-type="error" class="${this._errorIsFatal?"fatal":"retry"}"> ${this._error} </ha-alert>`:""} ${this._errorIsFatal?"":a.dy`<video .poster="${this.posterUrl}" ?autoplay="${this.autoPlay}" .muted="${this.muted}" ?playsinline="${this.playsInline}" ?controls="${this.controls}" @loadeddata="${this._loadedData}"></video>`} `}},{kind:"method",key:"updated",value:function(e){(0,s.Z)(i,"updated",this,3)([e]);const t=e.has("entityid"),r=e.has("url");t?this._getStreamUrlFromEntityId():r&&this.url&&(this._cleanUp(),this._resetError(),this._url=this.url,this._startHls())}},{kind:"method",key:"_getStreamUrlFromEntityId",value:async function(){if(this._cleanUp(),this._resetError(),(0,h.p)(this.hass,"stream")){if(this.entityid)try{const{url:e}=await(0,d.Lr)(this.hass,this.entityid);this._url=e,this._cleanUp(),this._resetError(),this._startHls()}catch(e){console.error(e),(0,n.B)(this,"streams",{hasAudio:!1,hasVideo:!1})}}else this._setFatalError("Streaming component is not loaded.")}},{kind:"method",key:"_startHls",value:async function(){const e=fetch(this._url),t=(await Promise.all([r.e("3895"),r.e("4768")]).then(r.bind(r,17231))).default;if(!this.isConnected)return;let i=t.isSupported();if(i||(i=""!==this._videoEl.canPlayType("application/vnd.apple.mpegurl")),!i)return void this._setFatalError(this.hass.localize("ui.components.media-browser.video_not_supported"));const s=this.allowExoPlayer&&this.hass.auth.external?.config.hasExoPlayer,a=await(await e).text();if(!this.isConnected)return;const o=/#EXT-X-STREAM-INF:.*?(?:CODECS=".*?([^.]*)?\..*?,([^.]*)?\..*?".*?)?(?:\n|\r\n)(.+)/g,n=o.exec(a),l=o.exec(a);let d;if(null!==n&&null===l){let e;try{e=new URL(this._url).href}catch(t){e=new URL(this._url,window.location.href).href}d=new URL(n[3],e).href}else d=this._url;const h=n?`${n[1]},${n[2]}`:void 0;this._reportStreams(h),s&&(h?.includes("hevc")||h?.includes("hev1"))?this._renderHLSExoPlayer(d):t.isSupported()?this._renderHLSPolyfill(this._videoEl,t,d):this._renderHLSNative(this._videoEl,d)}},{kind:"method",key:"_renderHLSExoPlayer",value:async function(e){this._exoPlayer=!0,window.addEventListener("resize",this._resizeExoPlayer),this.updateComplete.then((()=>(0,l.y)())).then(this._resizeExoPlayer),this._videoEl.style.visibility="hidden",await this.hass.auth.external.fireMessage({type:"exoplayer/play_hls",payload:{url:new URL(e,window.location.href).toString(),muted:this.muted}})}},{kind:"field",key:"_resizeExoPlayer",value(){return()=>{if(!this._videoEl)return;const e=this._videoEl.getBoundingClientRect();this.hass.auth.external.fireMessage({type:"exoplayer/resize",payload:{left:e.left,top:e.top,right:e.right,bottom:e.bottom}})}}},{kind:"method",key:"_isLLHLSSupported",value:function(){if(i.streamCount<=2)return!0;if(!("performance"in window)||0===performance.getEntriesByType("resource").length)return!1;const e=performance.getEntriesByType("resource")[0];return"nextHopProtocol"in e&&"h2"===e.nextHopProtocol}},{kind:"method",key:"_renderHLSPolyfill",value:async function(e,t,r){const i=new t({backBufferLength:60,fragLoadingTimeOut:3e4,manifestLoadingTimeOut:3e4,levelLoadingTimeOut:3e4,maxLiveSyncPlaybackRate:2,lowLatencyMode:this._isLLHLSSupported()});this._hlsPolyfillInstance=i,i.attachMedia(e),i.on(t.Events.MEDIA_ATTACHED,(()=>{this._resetError(),i.loadSource(r)})),i.on(t.Events.FRAG_LOADED,((e,t)=>{this._resetError()})),i.on(t.Events.ERROR,((e,r)=>{if(r.fatal)if(r.type===t.ErrorTypes.NETWORK_ERROR){switch(r.details){case t.ErrorDetails.MANIFEST_LOAD_ERROR:{let e="Error starting stream, see logs for details";void 0!==r.response&&void 0!==r.response.code&&(r.response.code>=500?e+=" (Server failure)":r.response.code>=400?e+=" (Stream never started)":e+=" ("+r.response.code+")"),this._setRetryableError(e);break}case t.ErrorDetails.MANIFEST_LOAD_TIMEOUT:this._setRetryableError("Timeout while starting stream");break;default:this._setRetryableError("Stream network error")}i.startLoad()}else r.type===t.ErrorTypes.MEDIA_ERROR?(this._setRetryableError("Error with media stream contents"),i.recoverMediaError()):this._setFatalError("Error playing stream")}))}},{kind:"method",key:"_renderHLSNative",value:async function(e,t){e.src=t,e.addEventListener("loadedmetadata",(()=>{e.play()}))}},{kind:"method",key:"_cleanUp",value:function(){this._hlsPolyfillInstance&&(this._hlsPolyfillInstance.destroy(),this._hlsPolyfillInstance=void 0),this._exoPlayer&&(window.removeEventListener("resize",this._resizeExoPlayer),this.hass.auth.external.fireMessage({type:"exoplayer/stop"}),this._exoPlayer=!1),this._videoEl&&(this._videoEl.removeAttribute("src"),this._videoEl.load())}},{kind:"method",key:"_resetError",value:function(){this._error=void 0,this._errorIsFatal=!1}},{kind:"method",key:"_setFatalError",value:function(e){this._error=e,this._errorIsFatal=!0,(0,n.B)(this,"streams",{hasAudio:!1,hasVideo:!1})}},{kind:"method",key:"_setRetryableError",value:function(e){this._error=e,this._errorIsFatal=!1,(0,n.B)(this,"streams",{hasAudio:!1,hasVideo:!1})}},{kind:"method",key:"_reportStreams",value:function(e){const t=e?.split(",");(0,n.B)(this,"streams",{hasAudio:t?.includes("mp4a")??!1,hasVideo:t?.includes("mp4a")?t?.length>1:Boolean(t?.length)})}},{kind:"method",key:"_loadedData",value:function(){(0,n.B)(this,"load")}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host,video{display:block}video{width:100%;max-height:var(--video-max-height,calc(100vh - 97px))}.fatal{display:block;padding:100px 16px}.retry{display:block}`}}]}}),a.oi)},7433:function(e,t,r){r.a(e,(async function(e,i){try{r.r(t),r.d(t,{FlowPreviewGeneric:function(){return y}});var s=r(44249),a=r(72621),o=r(57243),n=r(50778),l=r(44699),d=r(80917),h=r(56587),u=r(11297),c=(r(17949),e([d]));d=(c.then?(await c)():c)[0];let y=(0,s.Z)([(0,n.Mo)("flow-preview-generic")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"flowType",value:void 0},{kind:"field",key:"handler",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"stepId",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"flowId",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"stepData",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_preview",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(r,"disconnectedCallback",this,3)([]),this._unsub&&(this._unsub.then((e=>e())),this._unsub=void 0)}},{kind:"method",key:"willUpdate",value:function(e){e.has("stepData")&&this._debouncedSubscribePreview()}},{kind:"method",key:"render",value:function(){return this._error?o.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:o.dy`<entity-preview-row .hass="${this.hass}" .stateObj="${this._preview}"></entity-preview-row>`}},{kind:"field",key:"_setPreview",value(){return e=>{const t=(new Date).toISOString();this._preview={entity_id:`${this.stepId}.___flow_preview___`,last_changed:t,last_updated:t,context:{id:"",parent_id:null,user_id:null},...e}}}},{kind:"field",key:"_debouncedSubscribePreview",value(){return(0,h.D)((()=>{this._subscribePreview()}),250)}},{kind:"method",key:"_subscribePreview",value:async function(){if(this._unsub&&((await this._unsub)(),this._unsub=void 0),"repair_flow"!==this.flowType)try{this._unsub=(0,l.H)(this.hass,this.domain,this.flowId,this.flowType,this.stepData,this._setPreview),(0,u.B)(this,"set-flow-errors",{errors:{}})}catch(e){"string"==typeof e.message?this._error=e.message:(this._error=void 0,(0,u.B)(this,"set-flow-errors",e.message)),this._unsub=void 0,this._preview=void 0}}}]}}),o.oi);i()}catch(e){i(e)}}))},96738:function(e,t,r){r.a(e,(async function(e,i){try{r.r(t);var s=r(44249),a=r(57243),o=r(50778),n=r(7433),l=(r(65744),r(90977),e([n]));n=(l.then?(await l)():l)[0];(0,s.Z)([(0,o.Mo)("flow-preview-generic_camera")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){if(!this._preview)return a.Ld;if(this._error)return a.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`;const e=this._preview.attributes.still_url,t=this._preview.attributes.stream_url;return a.dy` ${e?a.dy`<p>Still image:</p> <p> <img src="${e}" alt="Still preview"> </p>`:""} ${t?a.dy`<p>Stream:</p> <ha-circular-progress class="render-spinner" id="hls-load-spinner" indeterminate size="large"></ha-circular-progress> <ha-hls-player autoplay playsinline .hass="${this.hass}" .url="${t}" @load="${this._videoLoaded}"></ha-hls-player>`:""}`}},{kind:"method",key:"_videoLoaded",value:function(){this.shadowRoot.getElementById("hls-load-spinner")?.remove()}}]}}),n.FlowPreviewGeneric);i()}catch(e){i(e)}}))}};
//# sourceMappingURL=9336.8ae7f87f802d5630.js.map