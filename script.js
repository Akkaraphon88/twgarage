// ฟังก์ชันที่จะทำให้ล้อหมุนตามการเลื่อนหน้าจอ
window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');
  const scrollPosition = window.scrollY;

  // ปรับการหมุน: ถ้าต้องการหมุนเร็วขึ้น ให้ปรับตัวเลขที่ / 10 (เช่น / 5 หมุนเร็วขึ้น)
  const rotation = scrollPosition / 5; // เพิ่มความเร็วในการหมุน

  // เปลี่ยนการหมุนของล้อให้ตรงกับการเลื่อนหน้า
  wheel.style.transform = `rotate(${rotation}deg)`;
});
