
/*=====================================
=            Global App view          =
=====================================*/
App.Views.App = Backbone.View.extend({
  initialize: function() {
    var AddPostView = new App.Views.AddPost({collection: App.posts});
    var allPostView = new App.Views.Posts({collection: App.posts }).render();
  }
});

/*=====================================
=            Add Post view            =
=====================================*/
App.Views.AddPost = Backbone.View.extend({
  el: "#new_post",
  events: {
    'submit': 'addPost'
  },

  addPost: function(e) {
    e.preventDefault();
    var post = this.collection.create({
      title: this.$("#post_title").val(),
      description: this.$("#post_description").val()
    }, {wait: true});

  }
});

/*=====================================
=            All post view            =
=====================================*/
App.Views.Posts = Backbone.View.extend({
  el: 'tbody',
  initialize: function(){
    this.listenTo(this.collection, "add", this.addOne)
  },

  render: function() {
    this.collection.each(this.addOne, this);
    return this;
  },

  addOne: function(post) {

    console.info(arguments)
    var postView = new App.Views.Post({model: post});
    console.log(this)
    console.log(this.$el)
    this.$el.append(postView.render().el);
  }
});

/*=================================
=         Single Post view        =
=================================*/
App.Views.Post = Backbone.View.extend({
  tagName: "tr",
  template: JST["backbone/templates/post"],
  render: function(){
    this.$el.html(this.template( this.model.toJSON() ));
    return this;
  }
});





