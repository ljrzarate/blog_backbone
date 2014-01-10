// GO AFTER THE REQUIRES BELOW.
//

//= require_tree ./models
//= require_tree ./collections
//= require_tree ./routes
//= require_tree ./templates
//= require_tree ./views

$(function(){
  window.vent = _.extend({}, Backbone.Events);

  window.template = function (id) {
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };
    var template = _.template($("#" + id).html());
    return template;
  }

  new App.Router();
  Backbone.history.start();

  App.posts = new App.Collections.Posts();
  App.posts.fetch().then(function(){
    new App.Views.App({collection: App.posts});
  });
});


