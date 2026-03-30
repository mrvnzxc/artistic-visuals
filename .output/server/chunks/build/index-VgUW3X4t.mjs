import { _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Icon } from '@iconify/vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _imports_0 = publicAssetsURL("/images/index/portrait.jpg");
const _imports_1 = publicAssetsURL("/images/index/details.jpg");
const _imports_2 = publicAssetsURL("/images/index/wedding.jpg");
const _imports_3 = publicAssetsURL("/images/index/editorial.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const itemLabels = {
      portrait: "Portraits",
      details: "Details",
      weddings: "Weddings",
      editorial: "Editorial"
    };
    const services = [
      {
        title: "Wedding Day Story",
        description: "Full\u2011day coverage with a focus on candid, documentary\u2011style storytelling. Replace with your real package details.",
        note: "Best for full weddings & big events."
      },
      {
        title: "Portrait Session",
        description: "Couples, families, graduates, or personal branding portraits. You can list session length, locations, and outfit changes.",
        note: "Perfect for memories & milestones."
      },
      {
        title: "Brand & Content",
        description: "Visuals for small businesses, artists, and creators. Update this section with your brand work or studio offerings.",
        note: "Ideal for creatives & entrepreneurs."
      }
    ];
    const activeImage = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-reveal class="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center lg:px-6 lg:pb-24 lg:pt-12"><div class="flex-1 space-y-6"><p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900/80 dark:text-emerald-300/90"> Photography \u2022 Portraits \u2022 Events </p><h1 class="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl"> Timeless portraits, <span class="block bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent dark:from-emerald-200 dark:via-teal-200 dark:to-emerald-100">honest stories.</span></h1><p class="max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base"> Hi, I&#39;m <span class="font-medium text-emerald-900 dark:text-emerald-100">Joshua Martinez Austria</span> \u2014 a photographer in the Philippines focused on real moments, genuine emotions, and story-driven images. </p><div class="flex flex-wrap items-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "rounded-full border border-emerald-700/30 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md shadow-emerald-900/20 transition hover:brightness-110 dark:border-emerald-400/25 dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-700 dark:shadow-emerald-950/35"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book a session `);
          } else {
            return [
              createTextVNode(" Book a session ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/gallery",
        class: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-900/90 hover:text-emerald-950 dark:text-emerald-200/90 dark:hover:text-emerald-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>View gallery</span>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "solar:arrow-right-outline",
              class: "text-base"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "View gallery"),
              createVNode(unref(Icon), {
                icon: "solar:arrow-right-outline",
                class: "text-base"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><dl class="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-300 sm:max-w-md"><div><dt class="font-semibold text-emerald-900 dark:text-emerald-100"> Weddings &amp; Events </dt><dd>Prenups, weddings, birthdays, reunions, and special life moments.</dd></div><div><dt class="font-semibold text-emerald-900 dark:text-emerald-100"> Portrait Sessions </dt><dd>Families, couples, and personal branding.</dd></div><div><dt class="font-semibold text-emerald-900 dark:text-emerald-100"> On\u2011location </dt><dd>General Santos City, Philippines.</dd></div></dl></div><div class="flex-1"><div class="grid grid-cols-2 gap-3 sm:gap-4"><div class="space-y-3 sm:space-y-4"><div data-reveal data-reveal-delay="60" role="button" tabindex="0"${ssrRenderAttr("aria-label", `Open ${itemLabels.portrait}`)} class="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-300/90 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/45 dark:bg-slate-900/40 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-950/30 cursor-zoom-in"><img${ssrRenderAttr("src", _imports_0)} alt="Portraits" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-black/15"></div><div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100"><span>Portrait</span><span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span></div></div><div data-reveal data-reveal-delay="120" role="button" tabindex="0"${ssrRenderAttr("aria-label", `Open ${itemLabels.details}`)} class="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-300/90 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/45 dark:bg-slate-900/40 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-950/30 cursor-zoom-in"><img${ssrRenderAttr("src", _imports_1)} alt="Details" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-black/15"></div><div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100"><span>Details</span><span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span></div></div></div><div class="mt-6 space-y-3 sm:space-y-4"><div data-reveal data-reveal-delay="180" role="button" tabindex="0"${ssrRenderAttr("aria-label", `Open ${itemLabels.weddings}`)} class="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-300/90 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/45 dark:bg-slate-900/40 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-950/30 cursor-zoom-in"><img${ssrRenderAttr("src", _imports_2)} alt="Weddings" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-black/15"></div><div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100"><span>Weddings</span><span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span></div></div><div data-reveal data-reveal-delay="240" role="button" tabindex="0"${ssrRenderAttr("aria-label", `Open ${itemLabels.editorial}`)} class="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-300/90 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/45 dark:bg-slate-900/40 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-950/30 cursor-zoom-in"><img${ssrRenderAttr("src", _imports_3)} alt="Editorial" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-black/15"></div><div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100"><span>Editorial</span><span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span></div></div></div></div></div></section><section data-reveal class="mx-auto max-w-6xl px-4 pb-16 lg:px-6"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><h2 class="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl"> Services at a glance </h2><p class="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300"> A quick overview of popular packages. Edit names, pricing, and descriptions to match your real offers. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-xs font-semibold uppercase tracking-[0.25em] text-emerald-900/90 hover:text-emerald-950 dark:text-emerald-200/90 dark:hover:text-emerald-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all services `);
          } else {
            return [
              createTextVNode(" View all services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 grid gap-4 md:grid-cols-3"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<article class="flex flex-col justify-between rounded-2xl border border-slate-300/90 bg-white/95 p-5 text-sm text-slate-700 shadow-sm shadow-emerald-900/5 ring-1 ring-emerald-900/[0.04] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-300/70 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/50 dark:bg-slate-900/35 dark:text-slate-200 dark:ring-emerald-500/10 dark:hover:border-emerald-500/35 dark:hover:bg-slate-900/50" data-reveal><div><h3 class="text-sm font-semibold text-emerald-950 dark:text-emerald-50">${ssrInterpolate(service.title)}</h3><p class="mt-2 text-xs text-slate-600 dark:text-slate-300">${ssrInterpolate(service.description)}</p></div><p class="mt-4 text-xs font-semibold text-emerald-800 dark:text-emerald-200">${ssrInterpolate(service.note)}</p></article>`);
      });
      _push(`<!--]--></div></section>`);
      if (activeImage.value) {
        _push(`<div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"><div class="relative max-w-5xl w-full rounded-2xl border border-emerald-400/20 bg-black/40 p-2 shadow-2xl shadow-emerald-950/40"><button class="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-2 text-sm text-white hover:bg-black/80" type="button" aria-label="Close"> \u2715 </button><img${ssrRenderAttr("src", activeImage.value)} alt="Selected" class="max-h-[80vh] w-full rounded-xl object-contain" loading="eager"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-VgUW3X4t.mjs.map
