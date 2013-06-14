$(document).ready( function() {

  $.get('http://staging1.democracynow.org/api/1/story/13648?callback=?', function(story) {
  	$("#story-date").html(story.publicationDate.substring(0,10));
    $("#story-title").html(story.title);
    $("#story-summary").html(story.summary);
  	$("#story-transcript").html(story.transcript);
  });
});
