Meteor.methods({
  'submitPost': function  ( title , body ) {
    console.log(title);
    console.log(body);

    Blogs.insert({
      title: title,
      body: body
    })
  }
});