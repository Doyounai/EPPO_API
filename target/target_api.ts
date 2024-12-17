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
        // จำนวนของแผนงานในสถานนะตรงๆ
        reportStatus: {
            complete: number; // แล้วเสร็จ
            inprogress: number; // อยู่ระหว่างดำเนินงาน
            noprogress: number; // ยังไม่ดำเนินงาน
            noreport: number; // ยังไม่มีข้อมูล
        }
    }[];

    // kpi ราย 5 ปีของ target นั้นๆ
    kpi: {
        k_title: string; // target 1.1.2
        k_des: string; // เป้าหมายของ kpi เช่น ระบบการผลิตไฟฟ้ามีความมั่นคง
        years: {
            year: string; // 2567-2570
            status: number; // 0 = ยังไม่ได้ทำ 1 = ทำเสร็จแล้ว 2 = กำลังทำ
            targetDes: string; // การเกิดไฟฟ้าดับที่ระบบผลิตไฟฟ้าไม่เกิน 0.7 วัน/ปี 
            actionDes: string; // มีความก้าวหน้าที่ต้องเร่งดำเนินการ และให้ความสำคัญในการขับเคลื่อน  ||  N/A (ในกรณีที่ยังไม่ได้ทำ)
        }[];
    }[];
}


//----------------------------------------------------------------------------------
// type
type target_api = {
    summary: target_summary[];
    kpi: target_kpi[];
    reportStatus: {
        complete: number;
        inprogress: number;
        noprogress: number; 
        noreport: number;
    }
}

type target_summary = {
    year: string;
    progress: number; 
    target: number; 
    kpi: { 
        kpi: string;
        des: string;
        progress: number;
    }[];
}

type target_kpi = {
	k_title: string;
	k_des: string;
	years: {
		title: string;
		status: number;
		targetDes: string;
		actionDes: string;
	}[];
};