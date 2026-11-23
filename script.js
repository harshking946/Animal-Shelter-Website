function checkAdoption() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name == "" || email == "" || phone == "") {
        alert("Please fill in all the details");
    } 
    else {
        alert("Your application has been submitted successfully!");
    }

}
function checkContact() {

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all the details");
    }
    else {
        alert("Your message has been received!");
    }

}
function adoptPet() {

    let answer = confirm("Are you sure you want to adopt this pet?");

    if (answer == true) {
        alert("Thank you for choosing adoption!");
    }
    else {
        alert("You cancelled the adoption.");
    }

}
function selectPet() {
    let category = document.getElementById("petCategory").value;

    switch (category) {
        case "dog":
            document.getElementById("result").innerHTML = "You selected Dogs!";
            break;

        case "cat":
            document.getElementById("result").innerHTML = "You selected Cats!";
            break;

        case "other":
            document.getElementById("result").innerHTML = "You selected Other Pets!";
            break;
    }
}
function sendMessage(){
    document.getElementById("message").innerHTML = "Your message is sent!";
}
function submitApplication(){
    document.getElementById("application").innerHTML = "Your application is submitted!";
}