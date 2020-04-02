'use strict';

let User = {
    Logo: "EC",
    Name: "Eman Curmi",
    ProfilePic: "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/42002897_2086464448335037_3426741529719341056_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=BYbvGrd8Fe8AX8utXiO&oh=046188bebb11ac4f8e2d9bbbaaa1c877&oe=5EA41530",
    Headline: "I am a highly organised and motivated Web Developer professional with a goal of increasing organisation's reachability. ",
    About: "Hey, I am a New York-based Web and Software Developer with a passion for thinking out of the box solutions.<br />I started as a Microsoft Web Technologies developer in 2008, amazed by the new wave of server client websites. I am always looking to learning and reinventing my technology stack and today I am a versatile and prolific developer. I have developed and worked with a range of organization from startups to well esablished businesses around the globe.<br/> This love for technology and sever didn't end there. I have a good hardware knowledge and know how to interface between technologies to make practically anything I set my mind to interconnected, from switches and lightbulbs, home entertainment, to drones and security cameras. My goal is to create a world that can integrate seamlesly with a users day to day schedule, while keeping them in a secure clean enviroment.<br/> Thinking Big Enough ;)", 
    SocialMedia: {
        Email: "emancurmi@gmail.com",
        Facebook: "https://www.facebook.com/emancurm",
        Twitter: "#",
        LinkedIn: "https://www.linkedin.com/in/emancurmi",
        Instagram: "#",
        GitHub: "https://github.com/emancurmi"
    }
};

let Portfolio = [{
    Project_Name: "Html Quiz App",
    Project_Description: "Quiz Application is an applicatoin built with javascript to test your html knowledge",
    Project_Picture: "img/quiz.jpg",
    Project_Tech: "HTML, CSS, JavaScript",
    Live_URL: "https://emancurmi.github.io/Quiz/",
    Repo_URL: "https://github.com/emancurmi/Quiz"
},
{
    Project_Name: "Find Parks App",
    Project_Description: "This app uses API to let the users search for parks by state",
    Project_Picture: "img/park.jpg",
    Project_Tech: "HTML, CSS, JavaScript, JQuery",
    Live_URL: "https://emancurmi.github.io/VacPlanApp/",
    Repo_URL: "https://github.com/emancurmi/VacPlanApp"
}];

let STORE = {
    html: ""
};

function renderheader() {
    STORE.html += "<logo>" + User.Logo + "</logo>";
    STORE.html += "<social>";
    STORE.html += "<a href='" + User.SocialMedia.Facebook + "' target='_blank'><i class='fab fa-facebook'></i></a>";
    STORE.html += "<a href='" + User.SocialMedia.LinkedIn + "'  target='_blank'><i class='fab fa-linkedin'></i></a>";
    STORE.html += "<a href='" + User.SocialMedia.GitHub + "'  target='_blank'><i class='fab fa-github'></i></a>";
    STORE.html += "</social>";
    STORE.html += "<name>" + User.Name + "</name>";
}

function renderprojecthtml(portfolio) {
    STORE.html += "<section id='portfolio' class='portfolio'>";
    STORE.html += "<img src='" + portfolio.Project_Picture + "' alt='" + portfolio.Project_Name + "' class='portfolio_image'/>"
    STORE.html += "<p class='prjname'>" + portfolio.Project_Name + "</p>";
    STORE.html += "<p class='prjdec'>" + portfolio.Project_Description + "</p>";
    STORE.html += "<p class='tech'>" + portfolio.Project_Tech + "</p>";
    STORE.html += "<p class='link'><a href='" + portfolio.Live_URL + "' target='_blank'>Live</a></p>";
    STORE.html += "<p class='glink'><a href='" + portfolio.Repo_URL + "' target='_blank'>Repo</a></p>";
    STORE.html += "</section>";
    STORE.html += "<section class='portfoliobottom'></section>";
}

function renderaboutsection() {
    STORE.html += "<h1 class='dropshadow'>Say Hi!</h1>";
    STORE.html += "<p id='about'>" + User.About + "</p><br />";
    STORE.html += "<p id='email'><a href='mailto:" + User.SocialMedia.Email + "'>" + User.SocialMedia.Email + "</a></p>";
}

function renderformsection() {
    STORE.html += "<h1 class='dropshadow'></h1>";
    STORE.html += "<form action='mailto:emancurmi@gmail.com' method='post' enctype='text/plain'>";
    STORE.html += "<input type='text' name='tbxName' placeholder='Name' class='textbox'><br />";
    STORE.html += "<input type='email' name='tbxEmail' placeholder='E-mail' class='textbox'><br />";
    STORE.html += "<textarea name='tbxMessage' placeholder='Enter Message' rows='10' columns='40' class='textbox'></textarea><br />";
    STORE.html += "<button name='btnSend' class='button'>Send Message</button>";
    STORE.html += "</form>";
}

function renderfooter() {
    STORE.html += "<social>";
    STORE.html += "<a href='" + User.SocialMedia.Facebook + "'  target='_blank'>Facebook</a> &#183; <a href='" + User.SocialMedia.LinkedIn + "' target='_blank'>Linked-in</a> &#183; <a href='" + User.SocialMedia.GitHub + "' target='_blank'>GitHub</a>";
    STORE.html += "</social>";
    STORE.html += "<copyright>Copyright &copy; 2020 " + User.Name + "</copyright>";
}

function start() {
    STORE.html = "";
    renderheader();
    $("#header").append(STORE.html);

    $(".profile").attr("src", User.ProfilePic);

    $("#headline").append("<h3>" + '"' + User.Headline + '"' + "</h3>");

    STORE.html = "";
    Portfolio.forEach(renderprojecthtml)
    $('#jsportfolio').append(STORE.html);

    STORE.html = "";
    renderaboutsection()
    $('#aboutsection').append(STORE.html);

    STORE.html = "";
    renderformsection();
    $('#formsection').append(STORE.html);

    STORE.html = "";
    renderfooter();
    $("footer").append(STORE.html);
}

$(start);