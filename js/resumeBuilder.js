/*
This is empty on purpose! Your code to build the resume will go here.
 */
//****************************************
//       bio section
//****************************************
var bio = {
    "name" : "Turki Aldawish",
    "role" : "Front End Web Developer",
    "contacts" : {
        "mobile" : "0500007051",
        "email" : "tf.aldawish@hmail.com",
        "github" : "tfdawish",
        "twitter" : "tfd99",
        "location" : "Riyadh"     
    },
    "welcomeMessage" : "Welcome in my CV and i hope you will satisfy on the work and projects i did it befroe",
    "skills" : ["awessommeness", " programming", " MS-Excel- Advanced", " JS", "MS-Project"],
    "biopic" : "images/fry.jpg",
    "display" : function() {
        // #header
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        
        //#topContacts

		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        
        $("#header").append(HTMLwelcomeMsg.replace("%data%" , bio.welcomeMessage));
        
        if(bio.skills.length != ""){
            $("#header").append(HTMLskillsStart);
            var formattedSkills = "";
            for(var i = 0; i < bio.skills.length; i++){
                formattedSkills = formattedSkills + HTMLskills.replace("%data%", bio.skills[i]);
            }
            $("#skills").append(formattedSkills);
        } 
    }
};
bio.display();

//*************************************
//          Work Experince
//*************************************

var work = {
    "jobs" : [
        {
            "employer" : "Alinma Bank",
            "title" : "IT engineer",
            "location" : "Dammam",
            "dates" : "2008 - 2012",
            "description" : " work on core banking system"
        },
        {
            "employer" : "RSAF",
            "title" : "GIS engineer",
            "location" : "qara mountain",
            "dates" : "2012 - Now",
            "description" : " work on maps and image processing"
        }
    ],
    "display" : function(){
        $("#workExperience").append(HTMLworkStart);
        for(var i = 0; i < work.jobs.length; i++){
            $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
            $(".work-entry").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
            $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
            $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
            $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));

        }
    }
};

work.display();

//****************************************
//                   Projects
//****************************************

var project = {
    "projects" : [
        {
            "title" : "Develop Geo Portal Gate",
            "dates" : "2008 - 2012",
            "description" : "Riyadh - King  Fahad Road",
            "image" : ["http://via.placeholder.com/550x300", "http://via.placeholder.com/550x300"]
        }
    ],
    "display" : function(){
        $("#projects").append(HTMLprojectStart);
        for(var i = 0; i < project.projects.length; i++){
            $(".project-entry").append(HTMLprojectTitle.replace("%data%", project.projects[i].title));
            $(".project-entry").append(HTMLprojectDates.replace("%data%", project.projects[i].dates));
            $(".project-entry").append(HTMLprojectDescription.replace("%data%", project.projects[i].description));
			for(var j= 0; j < project.projects[i].image.length; j++){
				$(".project-entry").append(HTMLprojectImage.replace("%data%", project.projects[i].image[j]));
			}
        }
    }
};
project.display();
//****************************************
//                   Education
//****************************************
var education = {
	"schools" : [
		{
			"name" : "KSU",
			"location" : "King Saud University",
			"degree" : "Bacholar",
			"majors" : "IS",
			"dates" : "2003 - 2008"
		},
		{
			"name" : "PSU",
			"location" : "prince sultan university",
			"degree" : "Bacholar",
			"majors" : "IS",
			"dates" : "2003 - 2008"
		}
	],
	"onlineCourses" : [
		{
			"title" : "FEND",
			"school" : "Udacity",
			"dates" : "Dec 2017 - Feb 2018",
			"url" :"https://www.udacity.com/"
		}
	],
	"display" : function(){
		$('#education').append(HTMLschoolStart);
		for(var i = 0; i < education.schools.length; i++){
			$('.education-entry').append(HTMLschoolName.replace("%data%", education.schools[i].name));
			$('.education-entry').append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			$('.education-entry').append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$('.education-entry').append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			$('.education-entry').append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));			
		}
		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLonlineStart);
		for(var i = 0; i < education.onlineCourses.length; i++){
			var HTMLtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var HTMLschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			$('.online-entry').append(HTMLtitle + HTMLschool);
			$('.online-entry').append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
			$('.online-entry').append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
		}
	}
};

education.display();

//****************************************
//                   Map
//****************************************

$("#mapDiv").append(googleMap);

//****************************************
//                   Footer Contacts
//****************************************

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

