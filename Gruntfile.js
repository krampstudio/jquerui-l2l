module.exports = function(grunt){
    'use strict';
    
	grunt.initConfig({
        
        pkg : grunt.file.readJSON('package.json'),
        
        path : {
            build : 'build/',
            src : 'src/*.js',
            css : 'src/*.css' 
        },
        
        banner :    '/* <%= pkg.name %> \n' + 
                    ' <%= pkg.author.name %> <%= pkg.author.email %> copyright <%= grunt.template.today("yyyy") %> \n' + 
                    ' @license <%= pkg.licenses[0].type %> <%= pkg.licenses[0].url %> \n*/\n',
        
        clean : ['<%=path.build%>'],
        
        jsdoc : {
            dist: {
                src : '<%=path.src%>',
                options : {
                    destination : '<%=path.build%>doc'
                }
            }
        },
        
        uglify : {
            options : {
                banner : '<%=banner%>'
            },
            build : {
                src : '<%=path.src%>',
                dest : 'l2l.min.js'
            }
        },
        
        cssmin: {
            dist: {
                src : '<%=path.css%>',
                dest : 'l2l.min.css',
                options : {
                    banner : '<%=banner%>',
                    report : 'gzip'
                } 
            }
        },
        
        jshint : {
            src : '<%=path.src%>',
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
                source: grunt.file.readJSON('package.json'),
                overrides : {
                    dependencies: {
                        "jquery": ">=1.8",
                        "jquery-ui" : ">=1.10"
                    }
                }
            }
        }
	});
    
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jquerymanifest');
    
    grunt.registerTask('default', ['clean', 'jshint', 'jsdoc', 'uglify', 'cssmin'])
};