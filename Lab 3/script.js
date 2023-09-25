const downloadBtn = document.getElementById('download');
const status = document.getElementById('status-title');
const peopleInfo = document.querySelector('.info');
const link = 'https://randomuser.me/api';


const getPeopleInfo = async () => {
    let part = '';

    for (let i = 0; i < 5; i++) {
        let result = await fetch(link).then(res => res.json()).catch(e => alert(e));
        let info = result.results[0];
        let personInfo = {
            picture: info.picture.large,
            name: info.name,
            cell: info.cell,
            city: info.location.city,
            email: info.email,
            phone: info.phone
        }

        part += `
        <div class = "person-block">
            <img src=${personInfo.picture}>
            <p>Name: ${personInfo.name.first} ${personInfo.name.last}</p>
            <p>Cell: ${personInfo.cell}</p>
            <p>City: ${personInfo.city}</p>
            <p>Email: ${personInfo.email}</p>
            <p>Phone: ${personInfo.phone}</p>
        </div>
        `;
    }

    status.style.display = "block";
    peopleInfo.innerHTML = part;
}

downloadBtn.addEventListener('click', getPeopleInfo);