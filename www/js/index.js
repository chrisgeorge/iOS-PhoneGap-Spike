registerAudioEvents = function(url){
    var audio = new Media(url,
        function() {
            console.log("playAudio():Audio Success");
        },
        function(err) {
            console.log("playAudio():Audio Error: "+err);
        });
    
    $("#story-audio").click(function() {
        audio.play({playAudioWhenScreenIsLocked : true});
     });

    $("#story-audio-pause").click(function() {
        audio.pause();
    });
}

$(document).ready( function() {
  $.get('http://staging1.democracynow.org/api/1/story/13648', function(story) {
  	$("#story-date").html(story.publicationDate.substring(0,10));
    $("#story-title").html(story.title);
  	$("#story-summary").html(story.summary);
  	$("#story-transcript").html(story.transcript);

    registerAudioEvents(story.media[0].src);
  });
});
