module.exports = {
    files: [
        "**/*.html",
        "**/*.css",
        "**/*.js",
        "**/*.jpg",
        "**/*.png",
        "**/*.gif"
    ],
    ignore: [
        "node_modules"
    ],
    reloadDelay: 0,
    ui: false,
    notify: false,
    port: 3000,
    server: {
        baseDir: "./"
    },
    host: "0.0.0.0",
    open: true,
    ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
    },
    codeSync: true
}; 