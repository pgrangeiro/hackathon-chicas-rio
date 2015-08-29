module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({

        watch: {
            options: {
                livereload: true
            },
        },
        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 9000,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect', 'watch']);
}
