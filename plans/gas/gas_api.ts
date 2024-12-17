type gas_api = {
    summary: {
		year: number; // 2567
		percentage: number;
		kpi: { // kpi ภายในแผน power ทั้งหมด รวมทุก target
			target: string; // 1
			kpi: string; // 1.1.1
			status: number; // 0 = ยังไม่ได้ทำ 1 = ทำเสร็จแล้ว 2 = กำลังทำ
		}[];
	}[];

    // ข้อมูล target ในส่วนของ target card (ตารางสถานนะการดำเนินการณ์)
	target1: {
		target: string; // T1
		t_title: string; // เสริมสร้างพลังงานมั่นคง
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
	};
	target2: ...
	target3: ...

    gas: { // ข้อมูลจากตารางกรอกข้อมูล table gas ตั้งแต่ข้อ 1.1 - 1.10
        year: number; // 2567
        "Gulf Gas ": number;
        "Onshore": number;
        "Potential A": number;
        "Potential B": number;
        "Swing Gas": number;
        "Myanmar": number;
        "H2": number;
        "LNG LT": number;
        "LNG ST": number;
        "Uncontracted LNG": number;
    }[];

    charts: {
        LNG:{ // ข้อมูลจากตาราง 2.1 ตารางคำนวณสำหรับ target 1.2.1
            title: string; // LNG ที่ต้องจัดหาเพิ่ม
            unit: string;
            data:{ 
                year: number;
                target: number;
                result: number;
            }[];
        }
    }
}