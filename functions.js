var myTimer;

$(document).ready
(
	function()
	{
		initialize();

		$(".menuhead").hover
		(
			function()
			{
				$(this).children().slideDown("fast");
			},
			function()
			{
				$(this).children().slideUp("fast");
			}
		);
	}
);

function autoSetPageSize()
{
	var intWidth = 0, intHeight = 0;

	if (window.innerWidth != null)
	{
		intWidth = window.innerWidth;
		intHeight = window.innerHeight; 
	}
	else if (document.body.clientWidth != null)
	{
		intWidth = document.body.clientWidth;
		intHeight = document.body.clientHeight;
	}
	else
	{
		intWidth = 800;
		intWidth = 600;
	}

	$("body").width((intWidth - 30) + "px");
	$("body").height((intHeight - 30) + "px");
}

function breakFrames()
{
	if (self.parent.frames.length != 0)
		self.parent.location = document.location;
}

function displaySubPage(strPageName)
{
	$(".page_content").load(strPageName);
}

function displayClock()
{
	var footers = $(".page_footer");
	for (var i = 0; i < footers.length; i++) { footers[i].innerHTML = "<h1>" + showDateTime() + "</h1>"; }
}

function displayLogo()
{
	var headers = $(".page_header");
	for (var i = 0; i < headers.length; i++) { headers[i].innerHTML = "<img class=\"logo\" src=\"/img/logo.png\" alt=\"Logo Banner\" />"; }
}

function externalizeLinks()
{
	var links = $("a");

	for (var i = 0; i < links.length; i++)
	{
		if (links[i].getAttribute("href") && (links[i].getAttribute("rel") == "external"))
			links[i].target = "_blank";
	}
}

function initialize()
{
	breakFrames();
	displayLogo();
	myTimer = setInterval("timerThread()", 333);
}

function showDateTime()
{
	var DateObj = new Date();
	var thisDay = DateObj.getDay();
	var thisDate = DateObj.getDate();
	var thisMonth = DateObj.getMonth();
	var thisYear = DateObj.getFullYear();
	var mName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December");
	var dName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var hours = DateObj.getHours();
	var minutes = DateObj.getMinutes();
	var seconds = DateObj.getSeconds();

	ampm = hours >=12 ? "PM" : "AM";
	hours = hours > 12 ? hours-12 : hours;
	minutes = minutes < 10 ? "0"+minutes : minutes;
	seconds = seconds < 10 ? "0"+seconds : seconds;

	return (dName[thisDay] + ", " + mName[thisMonth] + " " + thisDate + ", " + thisYear + ", " + hours + ":" + minutes + ":" + seconds + " " + ampm);
}

function timerThread()
{
	autoSetPageSize();
	displayClock();
	externalizeLinks();
}