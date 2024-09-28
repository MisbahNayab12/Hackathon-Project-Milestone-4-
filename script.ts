const form = document.getElementById('formTemp') as HTMLFormElement;
const generatedElement = document.getElementById('generatedResume') as HTMLDivElement;

form.addEventListener('submit', (event: Event)=> {
    event.preventDefault();

    const firstName = (document.getElementById('FN') as HTMLInputElement).value;
    const lastName = (document.getElementById('LN') as HTMLInputElement).value;
    const email = (document.getElementById('EI') as HTMLInputElement).value;
    const birthdate = (document.getElementById('DOB') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const qualification = (document.getElementById('qualification') as HTMLSelectElement).value;
    const grade = (document.getElementById('grade') as HTMLSelectElement).value;
    const year = (document.getElementById('passingYear') as HTMLSelectElement).value;
    const exp = (document.getElementById('Exp') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resume = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b> First Name:</b><span contenteditable="true">${firstName}</span></p>
    <p><b> Last Name:</b><span contenteditable="true">${lastName}</span></p>
    <p><b> Email I.D:</b><span contenteditable="true">${email}</span></p>
    <p><b> Date of Birth:</b><span contenteditable="true">${birthdate}</span></p>
    <p><b> Gender:</b><span contenteditable="true">${gender}</span></p>

    <h3><b>Education</b></h3>
    <p><b> Qualification: </b> <span contenteditable="true">${qualification}</span></p>
    <p><b> Grade: </b> <span contenteditable="true">${grade}</span></p>
    <p><b> Passing Year: </b> <span contenteditable="true">${year}</span></p>

    <h3><b>Experience</b></h3>
    <p><span contenteditable="true">${exp}</span></p>

    <h3><b>Skills</b></h3>
    <p><span contenteditable="true">${skills}</span></p>
    `;

    if (generatedElement){
        generatedElement.innerHTML = resume;
    } else {
        console.error("Some elements are missing");
    }
});