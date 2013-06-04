$(document).ready(function(){
               
    //set up code highlight 
    sh_highlightDocument();
    
    $('section > article > h1 > a').click(function(event){
        event.preventDefault();
        $(this).parents('article').find('pre').toggle();
    })
    
    //theme update
    $('#theme').change(function(){
        $('#jq-theme').attr('href', 'http://code.jquery.com/ui/1.10.3/themes/' +  $(this).val() + '/jquery-ui.css');
    });

    //set up sample lists
    $('#l2l_1').l2l({
        create: function(){
            console.log("l2l_1created");
        },
        change: function(event, ui){
            console.log(" l2l_1 changed");
            console.log(ui);
        },
        interconnect : true
    });
     $('#l2l_2').l2l({
        create: function(){
            console.log("l2l_2 created");
        },
        change: function(event, ui){
            console.log("l2l_2 changed");
            console.log(ui);
        },
        width:200
    });
});