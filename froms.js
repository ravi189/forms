
function formSubmit (event) {
    event.preventDefault();
    let firstName = document.getElementById("t1").value
    let lastName = document.getElementById("t2").value
    let exp = document.getElementById("t3").value
    let salary = document.getElementById("t4").value
    if (!firstName) {
        document.getElementById("ferror").innerHTML = "First name is required"
    }else {
        document.getElementById("ferror").innerHTML = ""
    }
    if (!lastName) {
        document.getElementById("lerror").innerHTML = "Last name is required"
    }else {
        document.getElementById("lerror").innerHTML = ""
    }
    if (!exp) {
        document.getElementById("serror").innerHTML = "Exp is required"
    }else {
        document.getElementById("serror").innerHTML = ""
    }
    if (!salary) {
        document.getElementById("serror").innerHTML = "Salary is required"
    }else {
        document.getElementById("serror").innerHTML = ""
    }

    if (firstName && lastName && exp && salary) {
        console.log("Entered Values", firstName, lastName, exp, salary)
    }

}