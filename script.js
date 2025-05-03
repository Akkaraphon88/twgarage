window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');
  const scrollPosition = window.scrollY;

  // ปรับการหมุน: ถ้าต้องการหมุนเร็วขึ้น ให้ปรับตัวเลขที่ / 10 (เช่น / 5 หมุนเร็วขึ้น)
  const rotation = scrollPosition / 5; // เพิ่มความเร็วในการหมุน

  // ถ้าเลื่อนขึ้น (scrolling up), ให้หมุนตามเข็มนาฬิกา
  if (scrollPosition < 0) {
    wheel.style.transform = `rotate(${rotation}deg)`; // หมุนตามเข็มนาฬิกา
  } else {
    wheel.style.transform = `rotate(${-rotation}deg)`; // หมุนทวนเข็มนาฬิกา
  }
});
