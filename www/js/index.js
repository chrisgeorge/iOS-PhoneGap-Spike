var registerSwipeEvents = function () {
  $(document).on('swipeleft swiperight',function(event){
    if (event.type == "swipeleft") {
      var nextPageId = $.mobile.activePage.next('div[data-role="page"]').attr('id');
      $.mobile.changePage("#" + nextPageId, {transition: "slide", changeHash: true, reverse: false});
    }

    if (event.type == "swiperight") {
      var prevPageId = $.mobile.activePage.prev('div[data-role="page"]').attr('id');
      if (prevPageId != 'show') {
        $.mobile.changePage("#" + prevPageId, {transition: "slide", changeHash: true, reverse: true});
      }
    }
    event.preventDefault();
  });
}

var goHome = function () {
  $.mobile.changePage("#show", {transition: "slide", changeHash: true, reverse: true});
}

var goToStory = function (storyId, reverseDirection) {
  $.mobile.changePage("#story-" + storyId, {transition: "slide", changeHash: true, reverse: reverseDirection});
}

var appendStories = function() {
  var show = JSON.parse(window.localStorage.getItem('show'));
  var context;
  $.each(show.items, function(index, story) {
    if(story.itemType == 'story') {
      context = {
        date: story.publicationDate.substring(0,10),
        title: story.title,
        summary: story.summary,
        transcript: story.transcript,
        id: story.id,
        audio_url: story.media[0].src,
        video_url: story.media[1].src
      };

      template = Handlebars.templates.story;
      var html = template(context);
      $("body").append(html);
    }
  });
}

var getCurrentShow = function () {
  $.mobile.showPageLoadingMsg();

  $.get('http://staging1.democracynow.org/api/1/current_show/', function(show) {
    window.localStorage.setItem('show', JSON.stringify(show));
  })
  .fail(function () {
    alert('unable to connect to internet, going to offline mode');
  });

  var show = JSON.parse(window.localStorage.getItem('show'));
  var context = {
    date: show.publicationDate.substring(0,10),
    story1title: show.items[1].title,
    story1id: show.items[1].id,
    story2title: show.items[2].title,
    story2id: show.items[2].id,
    story3title: show.items[3].title,
    story3id: show.items[3].id}

    template = Handlebars.templates.index;
    var html = template(context);
    $("body").append(html);
    $.mobile.hidePageLoadingMsg();
    $.mobile.changePage("#show", {transition: "pop", changeHash: true});
}

$(document).ready( function() {
  getCurrentShow();
  appendStories();
  registerSwipeEvents();

  });

