var $ = require('jquery');
var handlebars = require('handlebars');

var githubtoken = require('./githubapikey.js');

// if (githubtoken !== undefined){
//
//   $.ajaxSetup({
//     headers: {
//       'Authorization': 'token ' + githubtoken.token
//     }
//   });
// }

var baseUrl = "https://api.github.com"


  var userUrl = baseUrl + "/users/rhc912";
  //Populates Sidebar Profile;
  var sidebarTemplate = $('#sidebarTemplate').html();
  var template = handlebars.compile(sidebarTemplate)




  $.ajax(userUrl).done(function(data){
    console.log(data);

    var sortedData = template(data);
    $('.js-sidebar-data').append(sortedData);

  })
  /*$.ajax(repoUrl).done(function(data){
    console.log(data);
  });
};
fetchData();*/

//Repo Template
var repoUrl = baseUrl + "/users/rhc912/repos";
var repoTemp = $('#repotemplate').html();
var repoform = handlebars.compile(repoTemp);

$.ajax(repoUrl).done(function(repos){
  console.log(repos);
  repos.forEach(function(repo){
    console.log(repo);

    var renderTemplate = repoform(repo);
    $('.js-repo-list').append(renderTemplate);
  });


});
