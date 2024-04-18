console.log("run student.js")

function getStudent(uid) {
    console.log("fetch api get student", uid)
    fetch("http://localhost:3002/data/" + uid)
        .then(function (response) {

            // console.log("alo S", response.json())
            return response.json();
        })
        .then(function (student) {
            console.log(student)
            var htmls = `
                <section
                style="
                    background: url(${student.img}) 0 0 no-repeat;
                    background-size: cover;
                    background-position: center;
                "
                >
                <div class="stdcontainer">
                    <div class="stdname" style="color: #d0bbb9">${student.name}</div>
                    <span>${student.date}</span>
                    <p>${student.character}</p>
                </div>
                </section>
                <section>
                <div class="content">
                    <div class="profile-skills">
                    <div>
                        <ul class="skills skills1">
                        <li class="sk-ly" style="--per: ${student.math}"><span>Toán</span></li>
                        <li class="sk-toan" style="--per: ${student.physic}"><span>Vật Lý</span></li>
                        <li class="sk-anh" style="--per: ${student.english}"><span>Ngoại Ngữ</span></li>
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

// function convertTime(isoDateString ) {
//     const dateObject = new Date(isoDateString);

//     // Lấy các thành phần của ngày tháng
//     const year = dateObject.getFullYear();
//     const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Cần cộng 1 vì tháng bắt đầu từ 0
//     const day = String(dateObject.getDate()).padStart(2, '0');

//     // Tạo chuỗi ngày tháng mới
//     return ${year}-${month}-${day}
// }