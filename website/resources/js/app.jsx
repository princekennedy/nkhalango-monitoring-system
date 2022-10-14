import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import "react-animated-css";

InertiaProgress.init({
    color: "#198d19",
    showSpinner: true,
});

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "NMS";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});
