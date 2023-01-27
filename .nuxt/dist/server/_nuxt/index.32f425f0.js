import { mergeProps, useSSRContext, withCtx, createVNode, resolveComponent, defineComponent } from "vue";
import { N as Navbar, F as Footer } from "./style.46396eed.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const Header_vue_vue_type_style_index_0_scoped_f932900a_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: "header",
    id: "header"
  }, _attrs))} data-v-f932900a><div class="container header__container" data-v-f932900a><div class="header__details center--text" data-v-f932900a><h2 class="heading--secondary" data-v-f932900a>The Best style</h2><p class="heading--sub" data-v-f932900a>for every occasion</p><button class="btn" data-v-f932900a>shop now</button></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-f932900a"]]);
const Categories_vue_vue_type_style_index_0_scoped_c7721710_lang = "";
const _sfc_main$2 = {
  data() {
    return {
      user: "data"
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "category section" }, _attrs))} data-v-c7721710><div class="container categroy__container" data-v-c7721710><h2 class="heading--secondary title--margin" data-v-c7721710>categories</h2><div class="flex" data-v-c7721710>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/sunglasses",
    class: "link category__block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="" data-v-c7721710${_scopeId}><h3 class="category__label heading--tertiary" data-v-c7721710${_scopeId}>sunlasses</h3></div>`);
      } else {
        return [
          createVNode("div", { class: "" }, [
            createVNode("h3", { class: "category__label heading--tertiary" }, "sunlasses")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/sunglasses",
    class: "link category__block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="" data-v-c7721710${_scopeId}><h3 class="category__label heading--tertiary" data-v-c7721710${_scopeId}>eyeglasses</h3></div>`);
      } else {
        return [
          createVNode("div", { class: "" }, [
            createVNode("h3", { class: "category__label heading--tertiary" }, "eyeglasses")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Categories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Categories = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c7721710"]]);
const swiper_min = "";
const pagination_min = "";
const navigation_min = "";
const Gallery_vue_vue_type_style_index_0_scoped_c93a715e_lang = "";
const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-c93a715e><div class="gallery__container" data-v-c93a715e><h2 class="heading--secondary title--margin" data-v-c93a715e>Gallery</h2>`);
  _push(ssrRenderComponent(_component_swiper, {
    spaceBetween: 3,
    centeredSlides: true,
    autoplay: {
      delay: 3e3,
      disableOnInteraction: false
    },
    modules: $setup.modules,
    class: "swiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<picture class="picture" data-v-c93a715e${_scopeId2}><img src="https://images.unsplash.com/photo-1617373310678-e6f25a2d452a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2342&amp;q=80" alt="" class="img" data-v-c93a715e${_scopeId2}></picture>`);
            } else {
              return [
                createVNode("picture", { class: "picture" }, [
                  createVNode("img", {
                    src: "https://images.unsplash.com/photo-1617373310678-e6f25a2d452a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
                    alt: "",
                    class: "img"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<picture class="picture" data-v-c93a715e${_scopeId2}><img src="https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2336&amp;q=80" alt="" class="img" data-v-c93a715e${_scopeId2}></picture>`);
            } else {
              return [
                createVNode("picture", { class: "picture" }, [
                  createVNode("img", {
                    src: "https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80",
                    alt: "",
                    class: "img"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<picture class="picture" data-v-c93a715e${_scopeId2}><img src="https://images.unsplash.com/photo-1550607326-2df38662b7dc?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80" alt="" class="img" data-v-c93a715e${_scopeId2}></picture>`);
            } else {
              return [
                createVNode("picture", { class: "picture" }, [
                  createVNode("img", {
                    src: "https://images.unsplash.com/photo-1550607326-2df38662b7dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
                    alt: "",
                    class: "img"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("picture", { class: "picture" }, [
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1617373310678-e6f25a2d452a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
                  alt: "",
                  class: "img"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("picture", { class: "picture" }, [
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80",
                  alt: "",
                  class: "img"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("picture", { class: "picture" }, [
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1550607326-2df38662b7dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
                  alt: "",
                  class: "img"
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layout/Gallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c93a715e"]]);
const _sfc_main = defineComponent({
  components: { Navbar, Header, Categories, Gallery, Footer },
  setup() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = resolveComponent("Navbar");
  const _component_Header = resolveComponent("Header");
  const _component_Categories = resolveComponent("Categories");
  const _component_Gallery = resolveComponent("Gallery");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Categories, null, null, _parent));
  _push(ssrRenderComponent(_component_Gallery, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.32f425f0.js.map
