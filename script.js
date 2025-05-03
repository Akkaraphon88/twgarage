window.addEventListener('scroll', function() {
  const carContainer = document.querySelector('.car-container');
  const frontWheel = document.querySelector('.front-wheel');
  const backWheel = document.querySelector('.back-wheel');

  // ตรวจสอบตำแหน่งของรถบนหน้าจอ
  const carPosition = carContainer.getBoundingClientRect().top;

  // ทิศทางการเลื่อน (up = เลื่อนขึ้น, down = เลื่อนลง)
  let scrollDirection = 0;
  if (this.oldScroll > window.scrollY) {
    scrollDirection = -1;  // เลื่อนขึ้น
  } else if (this.oldScroll < window.scrollY) {
    scrollDirection = 1;   // เลื่อนลง
  }
  this.oldScroll = window.scrollY;

  // ปรับการหมุนของล้อตามทิศทางการเลื่อน
  if (scrollDirection === 1) {
    frontWheel.style.animation = 'rotateWheelDown 1s linear infinite'; // หมุนล้อไปข้างหน้า
    backWheel.style.animation = 'rotateWheelDown 1s linear infinite';
  } else if (scrollDirection === -1) {
    frontWheel.style.animation = 'rotateWheelUp 1s linear infinite'; // หมุนล้อย้อนกลับ
    backWheel.style.animation = 'rotateWheelUp 1s linear infinite';
  }

  // ตรวจสอบการเลื่อนหน้าจอ
  if (carPosition <= window.innerHeight * 0.8) {
    carContainer.classList.add('is-visible');
  } else {
    carContainer.classList.remove('is-visible');
  }
});
