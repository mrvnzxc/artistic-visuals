import { _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "The Wedding Story",
        tagline: "Full\u2011day coverage \u2022 Documentary style",
        priceHint: "Example: from $1,800",
        description: "Designed for full wedding days, from getting ready through the dance floor. Replace this text with how you actually work and what moments you focus on most.",
        included: [
          "Example: 8\u201310 hours coverage",
          "Example: 2 photographers",
          "Example: Online gallery & highlight slideshow",
          "Example: Timeline planning support"
        ],
        note: "Edit hours, number of shooters, and delivery details to match your real offer."
      },
      {
        title: "Portrait & Lifestyle",
        tagline: "Couples \u2022 Families \u2022 Individuals",
        priceHint: "Example: from $250",
        description: "For portraits that feel natural, relaxed, and true to you. Use this section to describe your approach to posing, locations, and how you help people feel comfortable.",
        included: [
          "Example: 60\u201390 minute session",
          "Example: 1\u20132 locations within your area",
          "Example: Online gallery with curated favorites",
          "Example: Outfit guidance & prep tips"
        ],
        note: "You can add different portrait tiers here (mini sessions, extended sessions, etc.)."
      },
      {
        title: "Brand & Content",
        tagline: "Small businesses \u2022 Artists \u2022 Creators",
        priceHint: "Example: custom quote",
        description: "Tell future clients how you help them show up online with consistent, on\u2011brand imagery. Mention studio options, product photos, or on\u2011location storytelling.",
        included: [
          "Example: Strategy call to plan your shoot",
          "Example: Mix of portraits, behind\u2011the\u2011scenes, and details",
          "Example: Commercial usage license options",
          "Example: Delivery optimized for web & social"
        ],
        note: "If you specialize in a certain niche (salons, restaurants, artists), highlight that here."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-5xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12" }, _attrs))}><header data-reveal class="max-w-2xl"><p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900/80 dark:text-emerald-300/90"> Services </p><h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"> Photography packages you can customize later. </h1><p class="mt-3 text-sm text-slate-600 dark:text-slate-300"> These are placeholder packages for weddings, portraits, and branding. Change titles, pricing, and details to match what Artistic Visuals actually offers. </p></header><section class="mt-10 space-y-6"><!--[-->`);
      ssrRenderList(services, (service) => {
        var _a;
        _push(`<article data-reveal class="rounded-2xl border border-slate-300/90 bg-white/95 p-5 text-slate-800 shadow-sm shadow-emerald-900/5 ring-1 ring-emerald-900/[0.04] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-300/70 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/50 dark:bg-slate-900/35 dark:text-slate-200 dark:ring-emerald-500/10 dark:hover:border-emerald-500/35 dark:hover:bg-slate-900/50 sm:p-6"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-lg font-semibold">${ssrInterpolate(service.title)}</h2><p class="mt-1 text-xs uppercase tracking-[0.25em] text-emerald-800/70 dark:text-emerald-300/70">${ssrInterpolate(service.tagline)}</p></div><div class="text-right text-sm"><p class="text-emerald-950 dark:text-emerald-50">${ssrInterpolate(service.priceHint)}</p><p class="text-xs text-slate-500 dark:text-slate-400"> Swap this with your real pricing. </p></div></div><p class="mt-4 text-sm text-slate-700 dark:text-slate-200">${ssrInterpolate(service.description)}</p>`);
        if ((_a = service.included) == null ? void 0 : _a.length) {
          _push(`<ul class="mt-4 grid gap-2 text-xs text-slate-700 dark:text-slate-200 sm:grid-cols-2"><!--[-->`);
          ssrRenderList(service.included, (item) => {
            _push(`<li class="flex items-start gap-2"><span class="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400"></span><span>${ssrInterpolate(item)}</span></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs"><p class="text-slate-500 dark:text-slate-400">${ssrInterpolate(service.note)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "rounded-full border border-emerald-700/35 px-4 py-2 font-semibold uppercase tracking-[0.25em] text-emerald-900 hover:border-emerald-600 hover:bg-emerald-50/90 dark:border-emerald-500/35 dark:text-emerald-100 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-950/50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ask about this package `);
            } else {
              return [
                createTextVNode(" Ask about this package ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-CZZnKC6r.mjs.map
