document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์ม

    // รับค่าจากฟอร์ม
    var userId = document.getElementById("userId").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;

    // ตรวจสอบการยืนยันรหัสผ่าน
    if (password !== rePassword) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
    }

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์ หรือทำอย่างอื่นตามต้องการ

    // ตัวอย่างการแสดงข้อมูล
    alert("ลงทะเบียนสำเร็จ!\n\nUser ID: " + userId + "\nชื่อ: " + firstName + "\nนามสกุล: " + lastName + "\nอีเมล: " + email);
});