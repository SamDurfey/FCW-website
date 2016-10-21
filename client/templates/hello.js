// TODO: figure out if you need to be using spacebars.
Template.hello.onCreated(function() {
  // counter starts at 0
  // this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function() {
  /** (this SHOULD work...)
   * Parallax:
   * $('.parallax').parallax();
   * ???
   * Profit!

   Thanks Materialize!
   */
  $('.parallax').parallax();
});

Template.hello.helpers({
  // counter() {
  //   return Template.instance().counter.get();
  // },
});

Template.hello.events({
  // 'click button'(event, instance) {
  // },
});
