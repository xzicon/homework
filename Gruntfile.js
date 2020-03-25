module.exports = function(grunt){
  grunt.initConfig({ 
    htmlmin:{
      options:{
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      } 
    },
    cssmin: {
      'dist/one.css': 'one.css'
    },
    uglify:{
      release:{
        files:{
          'dist/two.js':'two.js'
        }   
      }
    } 
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('release',['htmlmin','cssmin','uglify']);
};
