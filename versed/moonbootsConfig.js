'use strict';
var config = require('getconfig');
var lessitizer = require('lessitizer');
var templatizer = require('templatizer');
var appDir = __dirname + '/client';
var cssDir = __dirname + '/public';

module.exports = {
  // Tell the Hapi server what URLs the application should be served from.
  // Since we're doing clientside routing we want to serve this from some type
  // of wildcard url.
  // examples:
  //     '/{p*}' - match everything that isn't matched by something more specific
  //     '/dashboard/{p*}' - serve the app at all routes starting with '/dashboard'
  appPath: '/{p*}',
  moonboots: {
    // The base name of the javascript file served in the <script src="the_name.*.js">
    jsFileName: 'versed',
    // The base name of the css file served in the <link rel="stylesheet" src="the_name.*.css">
    cssFileName: 'versed',
    main: appDir + '/app.js',
    developmentMode: config.isDev,
    // Specify any non-commonjs libraries we wish to include.
    // You can think of this as your list of <script> tags in your HTML.
    libraries: [],
    stylesheets: [
      cssDir + '/styles/vendor/bootstrap.css',
      cssDir + '/css/app.css'
    ],
    beforeBuildJS: function () {
      if (config.isDev) {
        templatizer(__dirname + '/templates', appDir + '/templates.js');
      }
    },
    beforeBuildCSS: function (done) {
      if (!config.isDev) {
        done();
        return;
      }

      lessitizer({
        files: [
          __dirname + '/public/styles/app.less'
        ],
        outputDir: __dirname + '/public/css',
      }, function(err, files) {
        console.log(err || 'No errors!');
        console.log(files);
      }, done);
    }
  }
};
