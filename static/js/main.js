
// render messages using template
function renderMsg(messages) {
  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, {messages: messages});
  $('#message-list').html(rendered);

  // scroll message window to the bottom
  $(".well").scrollTop($(".well")[0].scrollHeight)
}

// get messages using ajax and render them
function getMessages(){
  $.get("messages", function( data ){
    renderMsg(data)
    setTimeout(getMessages,2000);
  });
}

// send POST request to add message
function sendMessage(message){
  $.ajax({
    "url": "messages",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
    },
    "success": getMessages,
    "data": JSON.stringify(message)
  });
}

$( document ).ready(function() {
    // poll for messages every 5s
    getMessages();

    // register message form handler
    $("#message-form").submit(function(event){
      event.preventDefault();
      var sender = $(this).find("#nickname").val();
      var content = $(this).find("#message").val();
      $(this).find("#message").val('');

      var message = {
                      "content": content,
                      "sender": sender
                    };
      sendMessage(message);

    });
});
