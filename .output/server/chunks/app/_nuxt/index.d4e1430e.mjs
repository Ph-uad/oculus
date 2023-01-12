import { defineComponent, useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _imports_0 = "" + globalThis.__buildAssetsURL("sprite.16d36f1d.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))}><div class="container flex"><h4 class="logo">Oculus</h4><ul class="list flex"><li class="list--item"><a href="" class="link">sunglasses</a></li><li class="list--item"><a href="" class="link">eyeglasses</a></li><li class="list--item"><a href="" class="link">stores</a></li></ul><div class="icon--container flex"><svg class="icon--image"><use${ssrRenderAttr("href", _imports_0 + "#icon-shopping_bag")}></use></svg></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Navbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: "header",
    id: "header"
  }, _attrs))} data-v-c78ecb51><div class="container header__container" data-v-c78ecb51><div class="header__details center--text" data-v-c78ecb51><h2 class="heading--secondary" data-v-c78ecb51>The Best style</h2><p class="paragraph" data-v-c78ecb51>for every occasion</p><button class="btn" data-v-c78ecb51>shop now</button></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c78ecb51"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "category section" }, _attrs))} data-v-720a796c><div class="container categroy__container" data-v-720a796c><h2 class="heading--secondary title--margin" data-v-720a796c>categories</h2><div class="flex" data-v-720a796c><div class="category__block" data-v-720a796c><a href="" class="link" data-v-720a796c><h3 class="category__label heading--tertiary" data-v-720a796c>sunlasses</h3></a></div><div class="category__block" data-v-720a796c><a href="" class="link" data-v-720a796c><h3 class="category__label heading--tertiary" data-v-720a796c>eyeglasses</h3></a></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Categories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Categories = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-720a796c"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-ef0a40dd><div class="gallery__container" data-v-ef0a40dd><h2 class="heading--secondary title--margin" data-v-ef0a40dd>Gallery</h2><div class="slider" data-v-ef0a40dd><div class="grid" data-v-ef0a40dd><picture class="picture" data-v-ef0a40dd><img src="https://images.unsplash.com/photo-1617373310678-e6f25a2d452a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2342&amp;q=80" alt="" class="img" data-v-ef0a40dd></picture><picture class="picture" data-v-ef0a40dd><img src="https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2336&amp;q=80" alt="" class="img" data-v-ef0a40dd></picture><picture class="picture" data-v-ef0a40dd><img src="https://images.unsplash.com/photo-1550607326-2df38662b7dc?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80" alt="" class="img" data-v-ef0a40dd></picture></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Gallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ef0a40dd"]]);
const _sfc_main = defineComponent({
  components: { Navbar, Header, Categories, Gallery },
  setup() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = resolveComponent("Navbar");
  const _component_Header = resolveComponent("Header");
  const _component_Categories = resolveComponent("Categories");
  const _component_Gallery = resolveComponent("Gallery");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Categories, null, null, _parent));
  _push(ssrRenderComponent(_component_Gallery, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.d4e1430e.mjs.map
