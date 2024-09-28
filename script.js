var form = document.getElementById('formTemp');
var generatedElement = document.getElementById('generatedResume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstName = document.getElementById('FN').value;
    var lastName = document.getElementById('LN').value;
    var email = document.getElementById('EI').value;
    var birthdate = document.getElementById('DOB').value;
    var gender = document.getElementById('gender').value;
    var qualification = document.getElementById('qualification').value;
    var grade = document.getElementById('grade').value;
    var year = document.getElementById('passingYear').value;
    var exp = document.getElementById('Exp').value;
    var skills = document.getElementById('skills').value;
    var resume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b> First Name:</b><span contenteditable=\"true\">".concat(firstName, "</span></p>\n    <p><b> Last Name:</b><span contenteditable=\"true\">").concat(lastName, "</span></p>\n    <p><b> Email I.D:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b> Date of Birth:</b><span contenteditable=\"true\">").concat(birthdate, "</span></p>\n    <p><b> Gender:</b><span contenteditable=\"true\">").concat(gender, "</span></p>\n\n    <h3><b>Education</b></h3>\n    <p><b> Qualification: </b> <span contenteditable=\"true\">").concat(qualification, "</span></p>\n    <p><b> Grade: </b> <span contenteditable=\"true\">").concat(grade, "</span></p>\n    <p><b> Passing Year: </b> <span contenteditable=\"true\">").concat(year, "</span></p>\n\n    <h3><b>Experience</b></h3>\n    <p><span contenteditable=\"true\">").concat(exp, "</span></p>\n\n    <h3><b>Skills</b></h3>\n    <p><span contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    if (generatedElement) {
        generatedElement.innerHTML = resume;
    }
    else {
        console.error("Some elements are missing");
    }
});
