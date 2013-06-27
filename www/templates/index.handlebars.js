(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div data-role=\"page\" id=\"show\">\n\n    <div data-role=\"header\" class=\"header\">\n        <img src=\"img/logo.png\" height=\"50\" width=\"90\" alt=\"DN Logo\"/>\n    </div>\n\n    <div data-role=\"content\" class=\"ui-content\" role=\"main\">\n    <h3 id=\"date\" class=\"ui-li-heading\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n        <ul data-role=\"listview\" data-split-icon=\"gear\" data-split-theme=\"d\" class=\"ui-listview\">\n            <li onclick=\"goToStory(";
  if (stack1 = helpers.story1id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.story1id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", false)\" class=\"ui-li-has-thumb ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-btn-down-c ui-btn-up-c\" data-theme=\"c\">\n                <a href=\"#\" class=\"ui-link-inherit\">\n                    <img src=\"img/cordova.png\" class=\"ui-li-thumb\">\n                    <h3 class=\"ui-li-heading\">";
  if (stack1 = helpers.story1title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.story1title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n                    <p class=\"ui-li-desc\">summary</p>\n                </a>\n                <a href=\"#\" data-rel=\"dialog\" data-transition=\"slideup\" title=\"Purchase album\" class=\"ui-li-link-alt ui-btn ui-btn-up-c\" data-theme=\"c\"><span class=\"ui-btn-inner ui-li ui-li-has-alt\"><span class=\"ui-btn-text\"></span><span title=\"\" data-theme=\"d\" class=\"ui-btn ui-btn-up-d ui-btn-icon-notext ui-btn-corner-all ui-shadow\"><span class=\"ui-btn-inner ui-btn-corner-all ui-li ui-li-has-alt\"><span class=\"ui-btn-text\"></span><span class=\"ui-icon ui-icon-gear ui-icon-shadow\"></span></span></span></span></a>\n            </li>\n\n            <li onclick=\"goToStory(";
  if (stack1 = helpers.story2id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.story2id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", false)\" class=\"ui-li-has-thumb ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-btn-down-c ui-btn-up-c\" data-theme=\"c\">\n                <a href=\"#\" class=\"ui-link-inherit\">\n                    <img src=\"img/cordova.png\" class=\"ui-li-thumb\">\n                    <h3 class=\"ui-li-heading\">";
  if (stack1 = helpers.story2title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.story2title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n                    <p class=\"ui-li-desc\">summary</p>\n                </a>\n                <a href=\"#\" data-rel=\"dialog\" data-transition=\"slideup\" title=\"Purchase album\" class=\"ui-li-link-alt ui-btn ui-btn-up-c\" data-theme=\"c\"><span class=\"ui-btn-inner ui-li ui-li-has-alt\"><span class=\"ui-btn-text\"></span><span title=\"\" data-theme=\"d\" class=\"ui-btn ui-btn-up-d ui-btn-icon-notext ui-btn-corner-all ui-shadow\"><span class=\"ui-btn-inner ui-btn-corner-all ui-li ui-li-has-alt\"><span class=\"ui-btn-text\"></span><span class=\"ui-icon ui-icon-gear ui-icon-shadow\"></span></span></span></span></a>\n            </li>\n\n            <li onclick=\"goToStory(";
  if (stack1 = helpers.story3id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.story3id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", false)\" class=\"ui-li-has-thumb ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-btn-down-c ui-btn-up-c\" data-theme=\"c\">\n                <a href=\"#\" class=\"ui-link-inherit\">\n                    <img src=\"img/cordova.png\" class=\"ui-li-thumb\">\n                    <h3 class=\"ui-li-heading\">";
  if (stack1 = helpers.story3title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.story3title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n                    <p class=\"ui-li-desc\">summary</p>\n                </a>\n                <a href=\"#\" data-rel=\"dialog\" data-transition=\"slideup\" title=\"Purchase album\" class=\"ui-li-link-alt ui-btn ui-btn-up-c\" data-theme=\"c\"><span class=\"ui-btn-inner ui-li ui-li-has-alt\"><span class=\"ui-btn-text\"></span><span title=\"\" data-theme=\"d\" class=\"ui-btn ui-btn-up-d ui-btn-icon-notext ui-btn-corner-all ui-shadow\"><span class=\"ui-btn-inner ui-btn-corner-all ui-li ui-li-has-alt\"><span class=\"ui-btn-text\"></span><span class=\"ui-icon ui-icon-gear ui-icon-shadow\"></span></span></span></span></a>\n            </li>\n        </ul>\n    </div>\n\n    <div data-role=\"footer\" data-position=\"fixed\">\n        <h3>Welcome to Democracy Now!</h3>\n    </div>\n</div>\n";
  return buffer;
  });
})();