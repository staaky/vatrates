module.exports = function(grunt) {

  // Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* TODO: Move towards having only vatrates.json in 'src' and build
       all other files from it, much easier to maintain */
    copy:    {
      main: {
        options: {
          processContent: function (content, srcpath) {
            return grunt.template.process(content);
          }
        },
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: './'}
        ]
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Tasks
  grunt.registerTask('default', [
    'copy'
  ]);
};
