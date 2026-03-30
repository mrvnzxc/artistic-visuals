import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { a as _imports_0, b as _imports_1 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-5xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12" }, _attrs))}><header data-reveal><p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900/80 dark:text-emerald-300/90"> About me </p><h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"> Joshua Martinez Austria </h1><p class="mt-2 text-sm text-slate-600 dark:text-slate-300"> Photographer based in the Philippines \u2014 Artistic Visuals </p></header><section data-reveal class="mt-6 grid gap-6 rounded-2xl border border-slate-300/90 bg-white/80 p-6 text-sm text-slate-700 shadow-sm shadow-emerald-900/5 ring-1 ring-emerald-900/[0.04] transition-all duration-300 ease-out hover:border-emerald-300/70 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/50 dark:bg-slate-900/35 dark:text-slate-200 dark:ring-emerald-500/10 dark:hover:border-emerald-500/35 lg:grid-cols-[1.4fr_1fr]"><div class="space-y-4 leading-relaxed"><p> Hi, I&#39;m Joshua Martinez Austria \u2014 a photographer based in the Philippines with a passion for capturing real moments and genuine emotions. </p><p> I started my journey in photography during the pandemic using my phone. What began as a simple hobby quickly turned into something deeper, as I explored different places and captured everyday life, including candid shots of strangers. </p><p> Over time, that passion grew, and I began working with clients on special occasions like weddings and birthdays. My style is natural, emotional, and story-driven, focusing on real connections and unplanned moments. </p><p> My goal is to make you feel comfortable, seen, and confident in front of the camera while creating photos you can cherish for years. </p></div><aside data-reveal class="flex items-center justify-center rounded-xl border border-slate-300/90 bg-white p-4 transition-all duration-300 ease-out hover:border-emerald-400/60 dark:border-emerald-950/50 dark:bg-slate-950/40 dark:hover:border-emerald-500/40 lg:p-6"><img${ssrRenderAttr("src", _imports_0)} alt="Artistic Visuals logo" class="max-h-52 w-auto dark:hidden lg:max-h-64" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} alt="Artistic Visuals logo" class="hidden max-h-52 w-auto dark:block lg:max-h-64" loading="lazy"></aside></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-D6Zqel6F.mjs.map
