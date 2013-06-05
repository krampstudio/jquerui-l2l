$(document).ready(function(){
               
    //set up code highlight 
    sh_highlightDocument();
    
    //sources toggle
    $('section > article > h2 > a').click(function(event){
        event.preventDefault();
        if($(this).text() === 'show sources'){
            $(this).text('hide sources');
        } else {
            $(this).text('show sources');
        }
        $(this).parents('article').find('pre').toggle();
    })
    
    //theme update
    $('#theme').change(function(){
        $('#jq-theme').attr('href', 'http://code.jquery.com/ui/1.10.3/themes/' +  $(this).val() + '/jquery-ui.css');
    });

    //set up sample lists
    $('#l2l_1').l2l();
    
    $('#l2l_2').l2l({
        interconnect : true,
        width:200
    });
    
    $('#l2l_3').l2l({
        sort : true,
        sortAlg : function(current ,next){
            var currentVal = $(current).text().toUpperCase();
            var nextVal = $(next).text().toUpperCase();
             return (currentVal < nextVal) ? 1 : (currentVal > nextVal) ? -1 : 0;
        }
    });
});
