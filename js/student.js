console.log("run student.js")

function getStudent(uid) {
    console.log("fetch api get student", uid)
    fetch("../json/student.json")
        
        .then(function (response) {

            // console.log("alo S", response.json())
            return response.json();
        })

        .then(function (student) {
            console.log(student);
            const studentx = student.find(student => student.uid === uid);
            console.log(studentx);
            var htmls = `
                <section
                style="
                    background: url(${studentx.image}) 0 0 no-repeat;
                    background-size: cover;
                    background-position: center;
                "
                >
                <div class="stdcontainer" >
                    <div class="stdname" style="color: #d0bbb9">${studentx.name}</div>
                    <span>${studentx.date}</span>
                    <p >${studentx.character}</p>
                </div>
                </section>
                <section>
                <div class="content">
                    <div class="profile-skills">
                    <div>
                        <ul class="skills skills1">
                        <li class="sk-ly" style="--per: ${studentx.math}"><span>Toán</span></li>
                        <li class="sk-toan" style="--per: ${studentx.physic}"><span>Vật Lý</span></li>
                        <li class="sk-anh" style="--per: ${studentx.english}"><span>Ngoại Ngữ</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </section>
            `

            document.getElementById('thongtin').innerHTML = htmls;
        })
        .catch(function (err) {
            alert('Cos looix', err);
        })

}

// Lấy query string từ URL
const queryString = window.location.search;
// Tạo một đối tượng URLSearchParams từ query string
const urlParams = new URLSearchParams(queryString);
// Lấy giá trị của tham số 'uid'
const uid = urlParams.get('uid');

console.log(uid); // In ra giá trị của uid

getStudent(uid)
