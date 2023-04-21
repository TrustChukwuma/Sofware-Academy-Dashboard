$('#about').on('click', function(a){
    a.preventDefault();
    $('#tools').css({
        border : 'none'

    })
    $('#section').css({
        border : 'none'

    })
    $('#About').css({
        display:'block'

    })
    $('#Learning').css({
        display:'none'

    })
    $('#Section').css({
        display:'none'

    })
    $(this).css({
        borderBottom : ' solid thin black'
    })
   
   
   
})
$('#section').on('click', function(d){
    d.preventDefault();
    $('#tools').css({
        border : 'none'

    })
    $('#about').css({
        border : 'none'

    })

    $('#About').css({
        display:'none'

    })
    $('#Learning').css({
        display:'none'

    })
    $('#Section').css({
        display:'block'

    })
    $(this).css({
        borderBottom : ' solid thin black'
    })
    
   
})
$('#tools').on('click', function(s){
    s.preventDefault();
    $('#section').css({
        border : 'none'

    })
    $('#about').css({
        border : 'none'

    })

    $('#About').css({
        display:'none'

    })
    $('#Learning').css({
        display:'block'

    })
    $('#Section').css({
        display:'none'

    })
    $(this).css({
        borderBottom : ' solid thin black'
    })
   
   
   
})
