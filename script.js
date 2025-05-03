window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel'); // เลือกตัวล้อ
  const wheelPosition = wheel.getBoundingClientRect().top; // ตรวจสอบตำแหน่งของล้อ

  // ถ้าล้ออยู่ในหน้าจอ
  if (wheelPosition <= window.innerHeight * 0.8) {
    wheel.classList.add('is-visible'); // เพิ่มคลาส is-visible เพื่อหมุนล้อ
  } else {
    wheel.classList.remove('is-visible'); // ลบคลาส is-visible เมื่อเลื่อนออกจากหน้าจอ
  }
});
