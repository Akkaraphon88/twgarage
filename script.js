// ฟังก์ชันที่จะทำให้ล้อหมุนตามการเลื่อนหน้าจอ
window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');
  const scrollPosition = window.scrollY;

  // ปรับการหมุน: ถ้าต้องการหมุนเร็วขึ้น ให้ปรับตัวเลขที่ / 10 (เช่น / 5 หมุนเร็วขึ้น)
  const rotation = scrollPosition / 5; // เพิ่มความเร็วในการหมุน

  // คำนวณตำแหน่ง Y ของล้อขึ้นอยู่กับตำแหน่งการเลื่อน
  const scrollPercentage = (scrollPosition / document.body.scrollHeight) * 100;

  // ปรับตำแหน่งของล้อให้เคลื่อนไหวตามการเลื่อน
  wheel.style.transform = `rotate(${rotation}deg)`; // หมุนล้อ

  // ตั้งค่าตำแหน่ง Y ของล้อให้เลื่อนตามการเลื่อน
  wheel.style.top = `${scrollPercentage}%`; // ล้อเคลื่อนที่ตามการเลื่อน
});
