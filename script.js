window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');

  // ตรวจสอบตำแหน่งของล้อ
  const wheelPosition = wheel.getBoundingClientRect().top;

  // ถ้าล้อเข้ามาในหน้าจอ (เลื่อนถึง)
  if (wheelPosition <= window.innerHeight * 0.8) {
    wheel.classList.add('is-visible'); // เพิ่มคลาสที่ทำให้ล้อหมุน
  } else {
    wheel.classList.remove('is-visible'); // ลบคลาสหากล้อไม่ได้อยู่ในหน้าจอ
  }
});
