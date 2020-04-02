$(function () {
    var socket = io();

    $('#msg-form').submit(function(e){
      e.preventDefault(); // prevents page reloading
      socket.emit('chat message', $('#msg-input').val());
      $('#msg-input').val('');
      return false;
    });

    socket.on('chat message', function(msg){
        $('.msg-container').append($('<li>').text(msg));
      });
  });