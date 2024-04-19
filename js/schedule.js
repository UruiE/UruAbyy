console.log("run student.js");

function getSchedule() {
  console.log("fetch api get schedule");
  fetch("http://localhost:3002/schedule")
    .then(function (response) {
      // console.log("alo S", response.json())
      return response.json();
    })
    .then(function (schedule) {
      console.log(schedule);

      divAM = document.getElementById("am");
      divPM = document.getElementById("pm");

      var htmls = `

            `;

      document.getElementById("schedule").innerHTML = htmls;
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

getSchedule();

// function convertTime(isoDateString ) {
//     const dateObject = new Date(isoDateString);

//     // Lấy các thành phần của ngày tháng
//     const year = dateObject.getFullYear();
//     const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Cần cộng 1 vì tháng bắt đầu từ 0
//     const day = String(dateObject.getDate()).padStart(2, '0');

//     // Tạo chuỗi ngày tháng mới
//     return ${year}-${month}-${day}
// }
