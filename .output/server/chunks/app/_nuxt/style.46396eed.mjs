import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "" + globalThis.__buildAssetsURL("sprite.16d36f1d.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))}><div class="container flex">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="logo"${_scopeId}>Oculus</h4>`);
      } else {
        return [
          createVNode("h4", { class: "logo" }, "Oculus")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="list flex"><li class="list--item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/sunglasses",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`sunglasses`);
      } else {
        return [
          createTextVNode("sunglasses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="list--item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/sunglasses",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`eyeglasses`);
      } else {
        return [
          createTextVNode("eyeglasses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="list--item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`stores`);
      } else {
        return [
          createTextVNode("stores")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><div class="icon--container flex"><svg class="icon--image"><use${ssrRenderAttr("href", _imports_0 + "#icon-shopping_bag")}></use></svg></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer section" }, _attrs))} data-v-fbf2485e><div class="container" data-v-fbf2485e><div class="flex" data-v-fbf2485e><div class="footer--details" data-v-fbf2485e><h3 class="heading--tertiary" data-v-fbf2485e>oculus</h3><p class="paragraph" data-v-fbf2485e> Oculus is conceptual project based on learning design ,development with nuxt3 (vue typescript). It is a simple e-commerce project to display minimalistic design to for a better user experience </p></div><div class="footer--list" data-v-fbf2485e><h4 class="heading--quad" data-v-fbf2485e>Contact</h4><span data-v-fbf2485e><a href="#" data-v-fbf2485e>temidayo26@gmail.com</a></span></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fbf2485e"]]);

export { Footer as F, Navbar as N };
//# sourceMappingURL=style.46396eed.mjs.map
