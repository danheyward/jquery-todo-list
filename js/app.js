
var form = $('form');
var inputBar = $('#task');
var inputButton = $('#submitTask');
var toDoList = $('ul');
var newListText = null;
var newBullet = null;

var addToDo = function() {
  if (inputBar.val() !== '') {
    newListText = inputBar.val();
    newBullet = $('<li>');
    newBullet.html('<button>x</button>&nbsp;' + newListText);
    toDoList.append(newBullet);
    inputBar.val('');
    inputBar.focus();
  }
};


$(document).ready(function() {
  $('form').submit(function(event) {
    addToDo();
    event.preventDefault();
  });

  $('#submitTask').on('click', addToDo);

  toDoList.on('click', 'button', function() {
    $(this).parent().remove();
  });
});
