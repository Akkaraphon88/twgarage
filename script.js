// ฟังก์ชันที่จะทำให้ล้อหมุนตามการเลื่อนหน้าจอ
window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');
  const scrollPosition = window.scrollY; // รับค่าการเลื่อนหน้า

  // ปรับการหมุน: เพิ่มความเร็วในการหมุนด้วยการหารค่าการเลื่อน
  const rotation = scrollPosition / 5; // เพิ่มความเร็วในการหมุน (ปรับตามต้องการ)

  // คำนวณตำแหน่งของล้อ
  const offsetY = scrollPosition / 5;  // ทำให้ล้อเคลื่อนที่ในทิศทาง Y ตามการเลื่อน
  wheel.style.transform = `rotate(${rotation}deg)`; // หมุนล้อ
  wheel.style.top = `calc(50% + ${offsetY}px)`; // ปรับตำแหน่งล้อให้เคลื่อนที่ตามการเลื่อน
});
