type oil_api = {
    	// ข้อมูล summary card (กราฟวงกลม)
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

    oilChart: {
        year: string; //2567
        "การขนส่งน้ำมันทางท่อ": number;
        "การขนส่งน้ำมันทั้งหมด": number;
        "น้ำมันดิบ": number;
        "เบนซิน": number;
        "เอทานอล": number;
        "ดีเซล": number;
        "ไบโอดีเซล": number;
        "NGV": number;
        "LPG": number;
        "SAF": number;
        "UCO": number;
        "Jet": number;
        "BioVLSFO": number;
        "FO": number;
    }[];

    charts: {
        co2: {
            title: string; // กราฟการปล่อย CO น้ำมันสำเร็จรูป
			unit: string;
			data: {
				year: number; // ปี
				target: number; // แผน
				result: number; // ผล
			}[];
        }
    }
}