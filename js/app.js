// Link input text + submit to field + button

var form = $('form');
var inputBar = $('#task');
var inputButton = $('#submitTask');
var toDoList = $('#toDoList');
var newListText = null;
var newBullet = null;


var addToDo = function() {
  newListText = inputBar.val();
  newBullet = $('<li>');
  newBullet.text(newListText);
  toDoList.append(newBullet);
  inputBar.val('');
  inputBar.focus();
};







$(document).ready(function() {
  $('form').submit(function(event) {
    addToDo();
    event.preventDefault();
  });
  $('#submitTask').on('click', addToDo);

});
