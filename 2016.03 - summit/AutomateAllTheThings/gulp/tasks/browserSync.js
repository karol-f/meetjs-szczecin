module.exports = function (gulp, config, plugins) {
  'use strict';

    const browserSyncInstance = plugins.browserSync.create();

    gulp.task('browser-sync:init', function() {
        browserSyncInstance.init(config.browserSync);
    });

    gulp.task('browser-sync:reload', function() {
        console.log('browser-sync:reload');
        browserSyncInstance.reload();
    });
};
