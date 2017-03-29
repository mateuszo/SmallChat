function printMessages(list){
  var all_messages = "";
  list.forEach(function(element) {
    all_messages += "<dt>"+element.sender+"</dt>" + "<dd>"+element.content+"</dd>";
  });
  $(".dl-horizontal").html(all_messages);
}


function getMessages() {
  console.log("sample text");
  $.ajax({
    method: "GET",
    url: "/messages"
  }).done(function( msg ) {
      printMessages(msg);
    });
  setTimeout(getMessages, 3000);
}

  getMessages();
function getform() {
  $(".form-horizontal").submit( function(e){
    var message = {
	"content": $("#message").val(),
	"sender": $("#nickname").val()
  }
    var settings = {
      "url": "/messages",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "7c8c32b3-5633-8a30-2661-037b47164918"
      },
      "data": JSON.stringify(message)
    }
    e.preventDefault();
    $.ajax(settings).done(function (response) {

      console.log(response);
    });
  });
}
getform();
