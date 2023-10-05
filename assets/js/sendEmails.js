console.log("Script file is loaded");

function sendMail(contactForm) {
    emailjs.send("service_9xccee6", "template_97gkps9", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}