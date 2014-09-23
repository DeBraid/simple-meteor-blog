Template.blog.events({

  'submit #blogForm': function (e, tmpl) {
    e.preventDefault();

    var title = tmpl.find('#blogTitle').value,
        body = tmpl.find('#blogBody').value;

    Meteor.call('submitPost', title, body);

  }
})

Template.listBlogs.blogs = function () {
  return Blogs.find();
}