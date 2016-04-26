//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("#sortWords").click(function() {
  var orderedWords = [];
  var yourWords = $("#myWords").val();
  yourWords=yourWords.split(" ");
  yourWords=yourWords.sort();
  yourWords.forEach(function(word) {
    $("#yourWords").append("<li>" + word + "</li>");
  });
});
