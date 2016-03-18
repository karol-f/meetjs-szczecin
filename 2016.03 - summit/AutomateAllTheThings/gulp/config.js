module.exports = function (gulp, plugins) {
    const src = plugins.path.join(__dirname, '../');

    return {
        src: src,
        /////////////////////////////////
        // BrowserSync                 //
        /////////////////////////////////
        browserSync: {
            server: {
                baseDir: src
            },
            open: true,
            notify: false
        },
        files: {
            html: src + '*.{htm,html}'
        }
    }
};
