// ฟังก์ชันที่จะทำให้ล้อหมุนตามการเลื่อนหน้าจอ
window.addEventListener('scroll', function () {
  const wheels = document.querySelectorAll('.wheel');
  const scrollPosition = window.scrollY;

  // ปรับการหมุน: ถ้าต้องการหมุนเร็วขึ้น ให้ปรับตัวเลขที่ / 10 (เช่น / 5 หมุนเร็วขึ้น)
  const rotation = scrollPosition / 5; // ความเร็วในการหมุน

  // ถ้าเลื่อนขึ้น (scrolling up), ให้หมุนทวนเข็มนาฬิกา
  if (scrollPosition < 0) {
    wheels.forEach(wheel => {
      wheel.style.transform = `rotate(${rotation}deg)`; // หมุนตามเข็มนาฬิกา
    });
  } else {
    wheels.forEach(wheel => {
      wheel.style.transform = `rotate(${-rotation}deg)`; // หมุนทวนเข็มนาฬิกา
    });
  }
});
