// ฟังก์ชันที่จะทำให้ล้อหมุนตามการเลื่อนหน้าจอ
window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');
  const scrollPosition = window.scrollY;

  // คำนวณการหมุนของล้อโดยใช้ความเร็วในการเลื่อนหน้าจอ
  const rotation = scrollPosition / 10; // ปรับสัดส่วนนี้เพื่อเพิ่มหรือลดความเร็วในการหมุน

  // เปลี่ยนการหมุนของล้อให้ตรงกับการเลื่อนหน้า
  wheel.style.transform = `rotate(${rotation}deg)`;
});
