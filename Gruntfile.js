module.exports = function(grunt){
    'use strict';
    
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc: {
            dist: {
                src : 'src/*.js',
                options: {
                    destination: 'doc'
                }
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> \n'
                        + ' <%= pkg.author.name %> <%= pkg.author.email %> copyright <%= grunt.template.today("yyyy") %> \n'
                        + ' @license <%= pkg.licenses[0].type %> <%= pkg.licenses[0].url %> \n*/\n'
            },
            build: {
                src: 'src/js/l2l.js',
                dest: 'src/js/l2l.min.js'
            }
        },
        jshint: {
            src : 'src/js/l2l.js',
            options: {
                camelcase: true,
                smarttabs: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        }
	});
    
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
