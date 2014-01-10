App.Models.Post = Backbone.Model.extend({
  validate: function(attrs) {
    if( !attrs.title ){
      return "title is require"
    }
  }
});