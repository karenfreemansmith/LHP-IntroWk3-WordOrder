//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("#sortWords").click(function() {
  var orderedWords = [];
  var yourWords = $("#myWords").val();
  yourWords=yourWords.split(" ");

  yourWords.forEach(function(word) {
    if(orderedWords.indexOf(word)===-1) {
      orderedWords.push(word);
    } else {
      alert(orderedWords.indexOf(word));
    }
  });
  orderedWords.sort();
  orderedWords.forEach(function(word) {
    $("#yourWords").append("<li>" + word + "</li>");
  });
});
