document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Остановить отправку формы для проверки

    // Получение значений полей
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const age = document.getElementById("age");

    let valid = true;

    // Проверка электронной почты
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        valid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    // Проверка номера телефона (для России, формат +7XXXXXXXXXX)
    const phonePattern = /^\+7\d{10}$/;
    if (!phonePattern.test(phone.value)) {
        phone.classList.add("is-invalid");
        valid = false;
    } else {
        phone.classList.remove("is-invalid");
    }

    // Проверка возраста (диапазон от 18 до 90 лет)
    const ageValue = parseInt(age.value);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 90) {
        age.classList.add("is-invalid");
        valid = false;
    } else {
        age.classList.remove("is-invalid");
    }

    // Если все поля валидны, можно отправить форму или выполнить другие действия
    if (valid) {
        alert("Регистрация успешно завершена!");
        // Здесь можно отправить данные формы на сервер, если это необходимо
    }
});