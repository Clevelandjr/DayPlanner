window.onload = function(){
var today = new this.Date();
date = moment().format('LL'); 
$('#currentDay').html(date);
} 

var workHours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM',];
var $container = $(".container");

$.each(workHours, function (index, value){
var $newRow = $('<div>').addClass('row');
var $newCol1 = $('<div>' + value + '</div>').addClass('col-sm-1 hour');
var $newCol2 = $('<div></div>').addClass('col-sm-1 hour');
var $newCol3 = $('<button></button>').addClass('col-sm-1 saveBtn');
var textArea = $('<textarea></textarea>').addClass('col-sm-12');
var icon = $(<i class="far fa-save fa-3x" style="margin:auto; padding: 10px"></i>);
$newRow.append($newCol1);
$newRow.append($newCol2);
$newCol2.append($textarea);
$newRow.append($newCol3);
$newCol3.append($icon);
$container.append($newRow);
});