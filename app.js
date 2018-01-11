'use strict';

function addTask() {
    var $btn = $('.add');
    var $input = $('section input');
    var $list = $('.tasks ul');

    $btn.on('click', function() {
        var val = $input.val();
        $input.val('');
        $list.append('<li>' + val + '</li>');
    });
};

$(document).ready(function() {
    addTask();
});