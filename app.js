const calculateBtn = document.getElementById('calculate-btn');
const dateOfBirth = document.getElementById('date-of-birth');
const resultMsg = document.getElementById('result');

const calculateAge = () => {
    const birthdayInput = dateOfBirth.value;

    if(birthdayInput === ""){
        alert("Please enter a valid birthday");
    } else {
        const age = getAge(birthdayInput);
        resultMsg.textContent = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

const getAge = (date) => {
    const currentDate = new Date();
    const birthdayDate = new Date(date);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const months = currentDate.getMonth() - birthdayDate.getMonth();

    if(months < 0 || (months === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}
calculateBtn.addEventListener('click', calculateAge);