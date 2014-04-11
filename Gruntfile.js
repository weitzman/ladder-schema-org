var path = require("path");

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-gitbook');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    'gitbook': {
      development: {
        output: path.join(__dirname, ".grunt/gitbook"),
        input: "./",
        title: "Schema.org Drupal Ladder",
        description: "A Gitbook version of the Schema.org ladder for Drupal Ladder.",
        github: "weitzman/ladder-schema-org"
      }
    },
    'gh-pages': {
      options: {
        base: '.grunt/gitbook'
      },
      src: ['**']
    },
    'clean': {
      files: '.grunt'
    }
  });

  grunt.registerTask('publish', [
    'gitbook',
    'gh-pages',
    'clean'
  ]);
  grunt.registerTask('default', 'gitbook');
};
