// ฟังก์ชันที่จะทำให้ล้อหมุนตามการเลื่อนหน้าจอ
window.addEventListener('scroll', function() {
  const wheel = document.querySelector('.wheel');
  const scrollPosition = window.scrollY;

  // คำนวณการหมุน: หมุนล้อให้สัมพันธ์กับการเลื่อน
  const rotation = scrollPosition / 5; // การหมุนล้อ

  // คำนวณตำแหน่ง Y ของล้อให้เคลื่อนไหวตามการเลื่อน
  const scrollPercentage = (scrollPosition / document.body.scrollHeight) * 100;

  // ปรับตำแหน่งของล้อให้เคลื่อนไหวตามการเลื่อน
  wheel.style.top = `${scrollPercentage}%`; // ให้ล้อเคลื่อนที่ตามการเลื่อนขึ้นลง

  // คำนวณตำแหน่งของล้อตามการเลื่อน
  const offsetY = scrollPosition / 5;  // คำนวณตำแหน่ง Y ของล้อ
  wheel.style.transform = `rotate(${rotation}deg)`; // หมุนล้อให้หมุนตามการเลื่อน
  
  // ถ้าเลื่อนขึ้น (scrolling up), ให้หมุนทวนเข็มนาฬิกา
  if (scrollPosition < 0) {
    wheel.style.transform = `rotate(${rotation}deg)`; // หมุนตามเข็มนาฬิกา
  } else {
    wheel.style.transform = `rotate(${-rotation}deg)`; // หมุนทวนเข็มนาฬิกา
  }
});
