Package.describe({
  name: 'slacker87:lightstreamer',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A wrapper for the lightstreamer javascript client in meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/slacker87/lightstreamer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lightstreamer.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('slacker87:lightstreamer');
  api.addFiles('lightstreamer-tests.js');
});
