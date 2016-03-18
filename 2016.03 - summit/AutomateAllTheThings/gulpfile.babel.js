import gulp from 'gulp';

const plugins = require('gulp-load-plugins')({
        pattern: [
          '*gulp*',
          'require-all',
          'browser-sync',
          'del',
          'path'
        ]
    }),
    config = require('./gulp/config')(gulp, plugins),
    utils = {
        errorLogger: require('./gulp/util/errorLogger')(gulp, plugins)
    };

/////////////////////////////////
// Load tasks                  //
/////////////////////////////////
plugins.requireAll({
  dirname: __dirname + '/gulp/tasks',
  resolve: function (dependency) {
    if (typeof dependency === 'function') {
      return dependency(gulp, config, plugins, utils);
    }
  }
});
