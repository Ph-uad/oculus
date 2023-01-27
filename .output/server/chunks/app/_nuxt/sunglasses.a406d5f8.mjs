import { defineComponent, useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { N as Navbar, F as Footer } from './style.46396eed.mjs';
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

const _sfc_main$3 = {
  items: [
    {
      id: 1,
      name: "jaden google's",
      image: "",
      color: ["red"],
      type: "Eyeglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 2,
      name: "Kulos",
      image: "",
      type: "Eyeglasses",
      color: ["blue"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 3,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 4,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 5,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 6,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 7,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 8,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 9,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 10,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 11,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 12,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 13,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 14,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 15,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 16,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 17,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 18,
      name: "Dok ki",
      color: ["red", "blue", "yellow"],
      type: "Eyeglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 19,
      name: "ook ki",
      color: ["red", "blue", "yellow"],
      type: "Eyeglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 20,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 21,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 22,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 23,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 24,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 25,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 26,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 27,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 28,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 29,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 30,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 31,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 32,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 33,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 34,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 35,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 36,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 37,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 38,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    },
    {
      id: 39,
      name: "Look ki",
      image: "",
      type: "sunglasses",
      color: ["red", "blue", "yellow"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
    }
  ]
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("data/data.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  components: { items: _sfc_main$3 },
  data() {
    return {
      isPreviwedItem: false,
      previewedItem: {},
      items: [
        {
          id: 1,
          name: "jaden google's",
          image: "",
          color: ["red"],
          type: "Eyeglasses",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 2,
          name: "Kulos",
          image: "",
          type: "Eyeglasses",
          color: ["blue"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 3,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 4,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 5,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 6,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 7,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 8,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 9,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 10,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 11,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 12,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 13,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 14,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 15,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 16,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 17,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 18,
          name: "Dok ki",
          color: ["red", "blue", "yellow"],
          type: "Eyeglasses",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 19,
          name: "ook ki",
          color: ["red", "blue", "yellow"],
          type: "Eyeglasses",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 20,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 21,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 22,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 23,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 24,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 25,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 26,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 27,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 28,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 29,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 30,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 31,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 32,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 33,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 34,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 35,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 36,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 37,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 38,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        },
        {
          id: 39,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!"
        }
      ]
    };
  },
  methods: {
    previewItemHandler(item) {
      this.previewedItem = item;
      this.isPreviwedItem = true;
      console.log(this.previewedItem);
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-5331f1f5><h2 class="heading--secondary title--margin" data-v-5331f1f5>Listing</h2><ul class="grid list__container" data-v-5331f1f5><!--[-->`);
  ssrRenderList($data.items, (item) => {
    _push(`<li class="item" data-v-5331f1f5><div class="" data-v-5331f1f5><figure class="picture" data-v-5331f1f5><img${ssrRenderAttr("src", "")} alt="glasses" class="img" data-v-5331f1f5></figure><h2 data-v-5331f1f5>${ssrInterpolate(item.name)}</h2><!--[-->`);
    ssrRenderList(item.color, (color) => {
      _push(`<span class="" data-v-5331f1f5><span data-v-5331f1f5>${ssrInterpolate(color)}</span></span>`);
    });
    _push(`<!--]--></div></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sunglasses.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-5331f1f5"]]);
const _sfc_main$1 = {
  data() {
    return {};
  },
  methods: {
    tryMe() {
      fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/cart").then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(_attrs)}>Click</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PostList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: { Navbar, Sunglasses: __nuxt_component_0, PostList, Footer },
  setup() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = resolveComponent("Navbar");
  const _component_Sunglasses = __nuxt_component_0;
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_Sunglasses, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sunglasses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sunglasses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { sunglasses as default };
//# sourceMappingURL=sunglasses.a406d5f8.mjs.map
