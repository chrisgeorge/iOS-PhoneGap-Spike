$(document).ready( function() {

  $.get('http://staging1.democracynow.org/api/1/story/13648?callback=?', function(story) {
  	$("#story-date").html(story.publicationDate);
    $("#story-title").html(story.title);
  	$("#story-body").html(story.transcript);
  });
});
