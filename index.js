let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {

    let person = {
        fullname: document.getElementById('fullname').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    console.log(person)
    alert(`
    ${person.fullname}
    ${person.phone}
    ${person.email}
    ${person.password}`)
});