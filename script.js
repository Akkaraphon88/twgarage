// ฟังก์ชันที่จะทำให้ล้อหมุนตามการเลื่อนหน้าจอ
window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');
  const scrollPosition = window.scrollY;

  // ปรับการหมุน: ถ้าต้องการหมุนเร็วขึ้น ให้ปรับตัวเลขที่ / 10 (เช่น / 5 หมุนเร็วขึ้น)
  const rotation = scrollPosition / 5; // เพิ่มความเร็วในการหมุน

    // คำนวณตำแหน่งของล้อ
  const offsetY = scrollPosition / 5;  // ทำให้ล้อเคลื่อนที่ในทิศทาง Y ตามการเลื่อน
  wheel.style.transform = `rotate(${rotation}deg)`; // หมุนล้อ
  wheel.style.top = `calc(50% + ${offsetY}px)`; // ปรับตำแหน่งล้อให้เคลื่อนที่ตามการเลื่อน
  
  // ถ้าเลื่อนขึ้น (scrolling up), ให้หมุนทวนเข็มนาฬิกา
  if (scrollPosition < 0) {
    wheel.style.transform = `rotate(${rotation}deg)`; // หมุนตามเข็มนาฬิกา
  } else {
    wheel.style.transform = `rotate(${-rotation}deg)`; // หมุนทวนเข็มนาฬิกา
  }
});
