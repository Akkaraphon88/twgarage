window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');

  // ตรวจสอบตำแหน่งของล้อ
  const wheelPosition = wheel.getBoundingClientRect().top;

  // ถ้าล้อเข้ามาในหน้าจอ (เลื่อนถึง)
  if (wheelPosition <= window.innerHeight * 0.8) {
    wheel.classList.add('is-visible');
  } else {
    wheel.classList.remove('is-visible');
  }
});
