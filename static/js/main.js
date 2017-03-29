

function renderMsg(messages) {
  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, {messages: messages});
  $('#message-list').html(rendered);

  // scroll message window to the bottom
  $(".well").scrollTop($(".well")[0].scrollHeight)
}

function getMessages(){
  $.get("messages", function( data ){
    renderMsg(data)
    setTimeout(getMessages,5000);
  });
}

$( document ).ready(function() {
    getMessages();
});
