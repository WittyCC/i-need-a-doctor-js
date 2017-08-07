var FindHelp = require('./../js/findhelp.js').findHelpModule;

var getDoctorList = function(listing) {
  var docName = listing.profile.first_name + " " + listing.profile.last_name + ", " + listing.profile.title;
  var docProfile = listing.profile.bio;
  var healthgradesURL = "http://www.healthgrades.com/usearch?what=" + listing.profile.first_name + "%20" + listing.profile.last_name + "%2C%20" + listing.profile.title;

  $('#results').append('<div class="thumbnail">'+'<div class="row">'+'<div class="col-sm-10">'+'<a href="'+healthgradesURL+'" target="_blank">'+'<h4>'+docName+'</h4>'+'</a>'+'<p>'+docProfile+'</p>'+'</div>'+'<div class="col-sm-2">'+'<img class="profile-pic" height=100% width=100% src="'+listing.profile.image_url+'">'+'</div>'+'</div>'+'</div>');
};

$(document).ready(function() {
  var newFindHelp = new FindHelp();
  $('#ailment-form').submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    var symptom = $('#booboo').val();
    console.log(symptom);
    $('#booboo').val("");
    $('#results').show();
    newFindHelp.getDoctors(booboo, getDoctorList);
  });
});