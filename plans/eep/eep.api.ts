type eep_api = {
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

    standard_charts: { // ข้อมูลจาก eep ในส่วนของ 4.มาตรการภาคบังคับ 5.มาตรการภาคส่งเสริม (รวมกันมาทั้ง 4, 5)
        year: number; // 2567
        "มาตรการจัดการพลังงานในโรงงาน/อาคารควบคุม": number;
        "มาตรการเกณฑ์มาตรฐานด้านพลังงาน": number;
        "มาตรการอนุรักษ์พลังงานในภาคขนส่ง": number;
        "มาตรการเกณฑ์มาตรฐานและการติดฉลากแสดงประสิทธิภาพอุปกรณ์": number;
        "มาตรการสนับสนุนทางด้านการเงิน": number;
        "มาตรการส่งเสริมนวัตกรรม": number;
        "มาตรการอนุรักษ์พลังงานภาคขนส่ง": number;
        "มาตรการอนุรักษ์พลังงานภาคเกษตรกรรม": number;
        "มาตรการอนุรักษ์พลังงานภาคบ้านอยู่อาศัย": number;
        "มาตรการเพิ่มประสิทธิภาพอุปกรณ์ในระบบพลังงานทดแทน": number;
        "มาตรการส่งเสริมการเพิ่มประสิทธิภาพการใช้พลังงาน ในการผลิตไฟฟ้า ระบบโครงข่ายไฟฟ้า และการใช้ไฟฟ้า": number;
    }[];

    charts: {
		co2: {
			title: string; // 2.2.3 ตารางแสดงผลตามการลด CO2
			unit: string;
			data: {
				year: number; // ปี
				target: number; // แผน
				result: number; // ผล
			}[];
		};
    }
}

// ------------------------------------------------------------------------------------------
// type
type eep_api = {
    summary: eep_summary;
    target1: eep_target;
    target2: eep_target;
    target3: eep_target;
    standard_charts: eep_standard;
    charts: {
		co2: {
			title: string;
			unit: string;
			data: {
				year: number;
				target: number;
				result: number;
			}[];
		};
    }
}

type eep_summary = {
    year: number;
	count_actual_greater_than_0: number;
	percentage: number;
	kpi: {
		target: string; 
		kpi: string;
		status: number; 
	}[];
}

type eep_target = {
	target: string;
	t_title: string;
	kpi: eep_kpi[];
};

type eep_kpi = {
	k_title: string;
	k_des: string;
	years: {
		title: string;
		status: number;
		targetDes: string;
		actionDes: string;
	}[];
}

type eep_standard = {
    year: number;
    "มาตรการจัดการพลังงานในโรงงาน/อาคารควบคุม": number;
    "มาตรการเกณฑ์มาตรฐานด้านพลังงาน": number;
    "มาตรการอนุรักษ์พลังงานในภาคขนส่ง": number;
    "มาตรการเกณฑ์มาตรฐานและการติดฉลากแสดงประสิทธิภาพอุปกรณ์": number;
    "มาตรการสนับสนุนทางด้านการเงิน": number;
    "มาตรการส่งเสริมนวัตกรรม": number;
    "มาตรการอนุรักษ์พลังงานภาคขนส่ง": number;
    "มาตรการอนุรักษ์พลังงานภาคเกษตรกรรม": number;
    "มาตรการอนุรักษ์พลังงานภาคบ้านอยู่อาศัย": number;
    "มาตรการเพิ่มประสิทธิภาพอุปกรณ์ในระบบพลังงานทดแทน": number;
    "มาตรการส่งเสริมการเพิ่มประสิทธิภาพการใช้พลังงาน ในการผลิตไฟฟ้า ระบบโครงข่ายไฟฟ้า และการใช้ไฟฟ้า": number;
}