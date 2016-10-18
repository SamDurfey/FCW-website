import apikey from '/client/lib/env.js'
import './footer.html'

Template.footer.onRendered(function () {
  initMap();
});

Template.footer.helpers({
  key: apikey
});

