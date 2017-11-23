// const search = require("../index.ejs");

<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js'></script>

<script type='text/javascript'>
$(document).ready(function(){
    $('ul.list li a').click(function() {
    var filterText = $(this).text().replace(/\s/g,"-");
    if(filterText == 'All')
    {
        $('div.filter div.hidden').fadeIn('slow').removeClass('hidden');
    }
    else
    {
        $('.filter div').each(function()
        {
            if(!$(this).hasClass(filterText))
            {
                $(this).fadeOut('normal').addClass('hidden');
            }
            else
            {
                $(this).fadeIn('slow').removeClass('hidden');
            }
        });
    }
    return false;
    });
});
</script>
