module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/**/*.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      },
      nyc_mocha:{
        
        target:  {
          src: "src/**/*.spec.js", // test suites to run...
        
          
        }
      }
})

  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks( "grunt-nyc-mocha" );

    // Register extra tasks and aliases
    grunt.registerTask( "test", [ "nyc_mocha:target" ])
    grunt.registerTask( "build", [ "uglify" ])
    grunt.registerTask('default', ['test']);
  
   
  
  };