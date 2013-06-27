(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['story'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div data-role=\"page\" id=\"story-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"storyPage\">\n\n    <div data-role=\"header\" class=\"header\" onclick=\"goHome()\">\n        <img src=\"img/logo.png\" height=\"50\" width=\"90\" alt=\"DN Logo\"/>\n    </div>\n\n    <div data-role=\"content\">\n        <div id=\"story-date\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        <div id=\"story\">\n            <div id=\"story-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n            <div id=\"story-audio\">\n                <audio controls id=\"audio\">\n                    <source src=\"";
  if (stack1 = helpers.audio_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.audio_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" type=\"audio/mpeg\">\n                    Your browser does not support this audio format.\n                </audio>\n            </div>\n\n            <div id=\"story-video\">\n                <video id=\"video\" width=\"320\" height=\"240\" controls>\n                    <source src=\"";
  if (stack1 = helpers.video_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.video_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" type=\"video/mp4\">\n                </video>\n            </div>\n            <div id=\"story-summary\">";
  if (stack1 = helpers.summary) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.summary; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n            <div id=\"transcript-header\">Transcript</div>\n            <div id=\"story-transcript\">";
  if (stack1 = helpers.transcript) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transcript; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        </div>\n    </div>\n\n    <div data-role=\"footer\" data-position=\"fixed\">\n        <a data-icon=\"arrow-l\" data-rel=\"back\">Back</a>\n        <a onclick=\"goHome()\" data-icon=\"home\">Home</a>\n    </div>\n\n\n</div>\n";
  return buffer;
  });
})();