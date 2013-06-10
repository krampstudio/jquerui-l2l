module.exports = function(grunt){
    'use strict';
    
    var packageJson = grunt.file.readJSON('package.json'),
        paths = {
            build : 'build/',
            src : 'src/*.js',
            css : 'src/*.css' 
        };
    
	grunt.initConfig({
        
        pkg : packageJson,
        
        banner :    '/* <%= pkg.name %> \n' + 
                    ' <%= pkg.author.name %> <%= pkg.author.email %> copyright <%= grunt.template.today("yyyy") %> \n' + 
                    ' @license <%= pkg.licenses[0].type %> <%= pkg.licenses[0].url %> \n*/\n',
        
        clean : [ paths.build, 'site/doc' ],
        
        qunit: {
            all: ['test/**/*.html']
        },
        
        jsdoc : {
            dist: {
                src : paths.src,
                options : {
                    destination : paths.build + 'doc'
                }
            }
        },
        
        uglify : {
            options : {
                banner : '<%=banner%>'
            },
            build : {
                src : paths.src,
                dest : 'l2l.min.js'
            }
        },
        
        cssmin: {
            dist: {
                src :  paths.css,
                dest : 'l2l.min.css',
                options : {
                    banner : '<%=banner%>',
                    report : 'gzip'
                } 
            }
        },

        copy: {
            dist : {
                files : [
                    {src : 'l2l.min.js' , dest : 'site/'},
                    {src : 'l2l.min.css' , dest : 'site/'},
                    {src : ['**'], cwd : paths.build + 'doc/', dest : 'site/doc', expand : true}
                ]
            }  
        },

        jshint : {
            src : paths.src,
            options : {
                camelcase : true,
                smarttabs : true,
                eqnull : true,
                browser : true,
                globals : {
                    jQuery : true
                }
            }
        },
        
        jquerymanifest: {
            options: {
                source: packageJson,
                overrides : {
                    docs : "https://github.com/krampstudio/jquerui-l2l",
                    download : "https://github.com/krampstudio/jquerui-l2l",
                    dependencies: {
                        "jquery": ">=1.8",
                        "jquery-ui" : ">=1.10"
                    }
                }
            }
        }
	});
    
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-jquerymanifest');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('default', ['clean', 'jshint', 'qunit', 'jsdoc', 'uglify', 'cssmin', 'copy', 'jquerymanifest']);
};
