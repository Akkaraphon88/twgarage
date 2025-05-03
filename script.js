window.addEventListener('scroll', function() {
  const wheelsContainer = document.querySelector('.wheels-container');

  // ตรวจสอบตำแหน่งของล้อบนหน้าจอ
  const wheelsPosition = wheelsContainer.getBoundingClientRect().top;

  // ถ้าล้อเข้ามาในหน้าจอ (เลื่อนถึง)
  if (wheelsPosition <= window.innerHeight * 0.8) {
    wheelsContainer.classList.add('is-visible');
  } else {
    wheelsContainer.classList.remove('is-visible');
  }
});
