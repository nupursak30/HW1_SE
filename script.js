var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');



var token = "token " + "2048a43e53f93d86df007b813ffbfa0c61436e59";
var userId = "nsakhal";
var urlRoot = " https://github.ncsu.edu/api/v3";
var repo_name = "public_HW1"; //Include the name of any existing public repo 
var issue_num = 3;

//Make sure to keep just one function while testing the code and comment out all the other functions
//getYourRepos(userId);
//listBranches(userId,repo_name);
create_repo(userId);
//create_issue(userId,repo_name);
//list_reactions(userId,repo_name,issue_num);
//edit_repo(userId,repo_name); //Wiki support for "public_HW1" repo has been currently disabled 

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

//Funcion to list Branches of an existing public repo
function listBranches(owner,repo)
{
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/branches`,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};
	
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}

//Function to create a new public repo on GitHub
function create_repo(owner)
{
	var options = {
		url: urlRoot + `/user/repos`,
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:{
			"name": "New_repo",
			"description": "New repo created using REST",
			"private": false,
			"has_issues": true,
			"has_projects": true,
			"has_wiki": true,
		}
	};
	
	request(options, function (error, response, body) 
	{
		var obj = body;
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}


//Function to create an issue for an existing public repo
function create_issue(owner,repo)
{
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/issues`,
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:{
			"title": "An error occured",
			"body": "Problem of Merge conflict occured",
			"assignee": owner,
			"labels": [
				"ERROR"
			]
		}
	};
	
	request(options, function (error, response, body) 
	{
		var obj = body;
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}


//Function to edit an existing public repo to enable wiki support
function edit_repo(owner,repo)
{
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}`,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:{
			"name": "public_HW1", //You can write the name of the existing public repo mentioned above in repo_name
			"has_wiki": true,
		}
	};
	
	request(options, function (error, response, body) 
	{
		var obj = body;
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}

//Function to list Reactions for a gihub issue
function list_reactions(owner,repo,issue_number)
{

	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/issues/${issue_number}/reactions`,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			"Accept": "application/vnd.github.squirrel-girl-preview"
		}
	};

	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].content;
			console.log( name );
		}
	});

}

