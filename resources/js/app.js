import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

import "../css/app.css";

import route from "ziggy-js";

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue");
        return (await pages[`./Pages/${name}.vue`]()).default;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .mixin({ methods: { route } })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
});
InertiaProgress.init();
