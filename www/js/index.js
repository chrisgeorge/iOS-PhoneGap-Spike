var myAudio = function(url){
    var myaudio = new Audio(url);
    myaudio.id = 'playerMyAudio';

    this.pauseStream = function(){
        try{
            myaudio.pause();
        } catch (e){
            alert('problem pausing audio');
        }
    }

    this.playStream = function() {
      try {
        myaudio.play();
      } catch (e) {
        alert('no audio support!');
      }
    }
}

registerAudioEvents = function(audio){
    $("#story-audio a").click(function() {
        audio.playStream();
        return false;
     });

    $("#story-audio-pause a").click(function() {
        audio.pauseStream();
        return false;
    });
}

$(document).ready( function() {

  $.get('http://staging1.democracynow.org/api/1/story/13648', function(story) {
  	$("#story-date").html(story.publicationDate.substring(0,10));
    $("#story-title").html(story.title);
  	$("#story-summary").html(story.summary);
  	$("#story-transcript").html(story.transcript);

    audioSource = story.media[0].src;
    audio = new myAudio(audioSource);
    registerAudioEvents(audio);
  });
});
