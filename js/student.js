console.log("run student.js");

function getStudent(uid) {
  console.log("fetch api get student", uid);
  fetch("http://localhost:3002/data/"+ uid)
    .then(function (response) {
      return response.json();
    })

    .then(function (student) {
      //console.log(student);
      //const student = student.find((student) => student.uid === uid);
      //console.log(student);
      var htmls = `
                <section
                style="
                    background: url(${student.image}) 0 0 no-repeat;
                    background-size: 200px;
                    background-position: center;
                    background-color: #1a1a1a !important;
                "
                >
                <div class="stdcontainer" >
                    <div class="stdname" style="color: #d0bbb9">${student.name}</div>
                    <span>${student.date}</span>
                    <p >${student.character}</p>
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
            `;

      document.getElementById("thongtin").innerHTML = htmls;
    })
    .catch(function (err) {
      alert("Có lỗi xảy ra", err);
    });
}

// Lấy query string từ URL
const queryString = window.location.search;
// Tạo một đối tượng URLSearchParams từ query string
const urlParams = new URLSearchParams(queryString);
// Lấy giá trị của tham số 'uid'
const uid = urlParams.get("uid");

console.log(uid); // In ra giá trị của uid

getStudent(uid);
