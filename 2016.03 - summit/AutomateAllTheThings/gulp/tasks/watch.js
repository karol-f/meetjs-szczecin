module.exports = function (gulp, config, plugins) {

    gulp.task('watch:src', function() {
        console.log(config.files.html);
        plugins.watch([
                config.files.html
            ],
            function () {
                console.log('reload...');
                plugins.sequence('browser-sync:reload')();
            }
        )
    });

    gulp.task('watch', ['watch:src']);
};
