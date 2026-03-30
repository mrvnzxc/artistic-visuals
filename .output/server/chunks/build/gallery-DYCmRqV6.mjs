import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryItems = [
      { category: "Portrait", note: "Outdoor golden hour", src: "" },
      { category: "Couple", note: "Candid laughter", src: "" },
      { category: "Family", note: "At\u2011home storytelling", src: "" },
      { category: "Wedding", note: "First dance", src: "" },
      { category: "Details", note: "Rings & florals", src: "" },
      { category: "Ceremony", note: "Walking the aisle", src: "" },
      { category: "Editorial", note: "Moody studio", src: "" },
      { category: "Brand", note: "Workspace story", src: "" }
    ];
    const toLabel = (value) => value.toString().padStart(2, "0");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12" }, _attrs))}><header data-reveal class="max-w-2xl"><p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900/80 dark:text-emerald-300/90"> Gallery </p><h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"> A grid for your favorite photos. </h1><p class="mt-3 text-sm text-slate-600 dark:text-slate-300"> Put your images in \`public/images/gallery/\` and update the \`src\` values in this page. </p></header><section class="mt-10"><div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4"><!--[-->`);
      ssrRenderList(galleryItems, (item, index) => {
        _push(`<div data-reveal class="group relative aspect-[3/4] overflow-hidden rounded-xl border border-slate-300/90 bg-gradient-to-br from-slate-200 via-emerald-100/30 to-slate-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400/55 hover:shadow-md hover:shadow-emerald-900/10 dark:border-emerald-950/45 dark:from-slate-800 dark:via-emerald-950/40 dark:to-slate-950 dark:hover:border-emerald-500/40">`);
        if (item.src) {
          _push(`<img${ssrRenderAttr("src", item.src)} alt="" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">`);
        } else {
          _push(`<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_55%)] opacity-75 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_55%)]"></div>`);
        }
        _push(`<div class="absolute inset-0 flex flex-col justify-between p-3 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-800 dark:text-slate-200"><div class="flex justify-between"><span>${ssrInterpolate(item.category)}</span><span>${ssrInterpolate(index + 1 | toLabel)}</span></div><div class="flex justify-between text-[9px] text-slate-600 dark:text-slate-300"><span>${ssrInterpolate(item.note)}</span><span>${ssrInterpolate(item.src ? "View" : "Add photo")}</span></div></div></div>`);
      });
      _push(`<!--]--></div><p class="mt-6 text-xs text-slate-500 dark:text-slate-400"> Example: if your file is \`public/images/gallery/01-portrait.jpg\`, set \`src\` to \`/images/gallery/01-portrait.jpg\`. </p></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery-DYCmRqV6.mjs.map
