type target_api = {
    // ข้อมูลความคืนหน้ารายปี
    summary: {
        year: string; // 2566
        progress: number; // ความคืบหน้าของปีนั้นๆ
        target: number; // เป้าหมายความคืนหน้าของปีนั้นๆ
        kpi: { // kpi ภายใน target นั้นๆ 
            kpi: string; // 1.1.1 
            des: string; // ปริมาณพลังงานเพียงพอต่อความต้องการใช้พลังงานในประเทศ
            progress: number;
        }[];
    }[];

    // kpi ราย 5 ปีของ target นั้นๆ
    kpi: {
        k_title: string; // target 1.1.2
        years: {
            year: string; // 2567-2570
            status: number; // 0 = ยังไม่ได้ทำ 1 = ทำเสร็จแล้ว 2 = กำลังทำ
            targetDes: string; // การเกิดไฟฟ้าดับที่ระบบผลิตไฟฟ้าไม่เกิน 0.7 วัน/ปี 
            actionDes: string; // มีความก้าวหน้าที่ต้องเร่งดำเนินการ และให้ความสำคัญในการขับเคลื่อน  ||  N/A (ในกรณีที่ยังไม่ได้ทำ)
        }[];
    }[]
}