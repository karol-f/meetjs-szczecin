module.exports = function (gulp, config, plugins) {

    gulp.task('dev', ['browser-sync:init', 'watch']);
};
