let $input = $('input');

$(' #Submit').click(function(){
    const text = 'Thank you for submiting this file';           // alerts the input value of submit form
    alert($input.val());
});

$('<div class="outputText">').appendTo('body'); 
$('<h2>').appendTo('div');

function output() {
    var $inputVal = $('#inputText').val();
   var h2 = $('<h2>' + $inputVal + '</h2>');
    h2.appendTo('.outputText');

    h2.mouseover(function () {
               h2.css({
                "background-color": "blue",
                "border-style": "solid",
               "border-radius": ".5em",
            });
         });
    
 };

 $('<ul class="list" ></ul>').appendTo('body');

 var colors = ['red', 'blue', 'green', 'purple', 'teal',];

function output() {
    var ranNum = Math.floor(Math.random() * colors.length);
    var inputVal = $('#inputText').val();
    var li = $('<li>' + inputVal + '</li>');
    li.appendTo('ul');

    li.click(function() {
        li.css('color', colors[ranNum]);
    });

    li.dblclick(function() {
        li.remove();
    });
};