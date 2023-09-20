const button = document.getElementById('submit');
const output = document.querySelector('.output');

const fields = {
    fullName: document.getElementById('full-name'),
    phoneNumber: document.getElementById('phone-number'),
    faculty: document.getElementById('faculty'),
    birthDate: document.getElementById('birth-date'),
    address: document.getElementById('address')
}

const regExps = {
    name: /^[А-ЯҐЄІЇ]{1}[а-яґєії]+\s{1}([А-ЯҐЄІЇ]{1}\.){2}$/,
    number: /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
    faculty: /^[А-ЯҐЄІЇ]{4}$/,
    date: /^([0-9]{2}\.){2}[0-9]{4}$/,
    address: /^м\.\s[А-ЯҐЄІЇ]{1}[а-яґєії]+$/
}


const checkFields = (field, regExp, errMsg) => {     
    if (regExp.test(field.value)) {
        field.classList.remove('error');
        return true;
    } else {
        field.classList.add('error');
        alert(errMsg);
        return false;
    } 
}

const showOutput = () => {
    output.style.display = 'none';
    const { fullName, phoneNumber, faculty, birthDate, address } = fields;

    const val1 = checkFields(fullName, regExps.name, 'Введіть ПІБ у форматі ТТТТТТ Т.Т.');
    const val2 = checkFields(phoneNumber, regExps.number, 'Введіть номер телефону у форматі (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ');
    const val3 = checkFields(faculty, regExps.faculty, 'Введіть назву факультету у форматі ТТТТ');
    const val4 = checkFields(birthDate, regExps.date, 'Введіть дату у форматі ЧЧ.ЧЧ.ЧЧЧЧ');
    const val5 = checkFields(address, regExps.address, 'Введіть адресу у форматі м. ТТТТТТ');

    let outputData = `
        <p><span>ПІБ:</span> ${fullName.value}</p>
        <p><span>Номер телефону:</span> ${phoneNumber.value}</p>
        <p><span>Факультет:</span> ${faculty.value}</p>
        <p><span>Дата народження:</span> ${birthDate.value}</p>
        <p><span>Адреса:</span> ${address.value}</p>
    `;

    if (val1 && val2 && val3 && val4 && val5) {
        output.style.display = 'block';
        output.insertAdjacentHTML('beforeend', outputData);
    }
}

button.addEventListener('click', (e) => showOutput());
