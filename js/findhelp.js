var apiKey = require('./../.env').apiKey;

function FindHelp() {
}

FindHelp.prototype.getDoctors = function(symptom, getDoctorList) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom + '&location=47.6062%2C-122.3321%2C100&user_location=47.6062%2C-122.3321&skip=0&limit=10&user_key='+ apiKey).then(function(response) {
    response.data.forEach(function(listing) {
      getDoctorList(listing);
      console.log(JSON.stringify.response);
  });
  }).fail(function(error) {
    console.log("Search failed");
  });
};

exports.findHelpModule = FindHelp;
