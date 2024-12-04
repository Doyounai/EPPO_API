type co2_api = {
  // ข้อมูลจาก co2 ตารางที่ 3.2.1 การแสดงผล CO2 ต่อการใช้พลังงาน
  consumption: {
    year: string; // 2567
    co_emision: number; // ค่าของผลจากตารางในหัวข้อ (ปริมาณการปล่อยก๊าซคาร์บอนไดออกไซด์จากภาคพลังงาน)
    co_growth: number; // ค่าของการเปลี่ยนแปลงผล คิดเป็นเปอร์เซ็น (ปริมาณการปล่อยก๊าซคาร์บอนไดออกไซด์จากภาคพลังงาน)
    final_usage: number; // ค่าของผลจากตารางในหัวข้อ (การใช้พลังงานขั้นสุดท้าย)
    final_growth: number; // ค่าของการเปลี่ยนแปลงผล คิดเป็นเปอร์เซ็น (การใช้พลังงานขั้นสุดท้าย)
  }[];

  // ข้อมูลจาก ตารางที่ 3.3.3 การปล่อย CO2 จากการใช้พลังงานรายสาขาเศรษฐกิจ 
  co_econ: {
    year: string; // 2567
    "น้ำมันสำเร็จรูป": number;
    "ก๊าซธรรมชาติ": number;
    "ถ่านหิน/ลิกไนต์": number;
  }[];

    // ข้อมูลจาก ตารางที่ 3.3.2 การปล่อย CO2 จากการใช้พลังงานรายชนิดเชื้อเพลิง
  co_fuel: {
    year: string;
    "ผลิตไฟฟ้า": number;
    "ขนส่ง": number;
    "อุตสาหกรรม": number;
    "อื่น ๆ": number;
  }[],
};

// -----------------------------------------------------------------
// type

type co2_api = {
  consumption: co2_consumption[];
  co_econ: co2_econ[];
  co_fuel: co2_fuel[];
}

type co2_consumption = {
  year: string;
  co_emision: number;
  co_growth: number;
  final_usage: number;
  final_growth: number;
}

type co2_econ = {
  year: string;
  "น้ำมันสำเร็จรูป": number;
  "ก๊าซธรรมชาติ": number;
  "ถ่านหิน/ลิกไนต์": number;
}

type co2_fuel = {
  year: string;
  "ผลิตไฟฟ้า": number;
  "ขนส่ง": number;
  "อุตสาหกรรม": number;
  "อื่น ๆ": number;
}