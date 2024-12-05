type ev_api = {
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

    charts: {
        // ข้อมูลรายปีจากตาราง ev
        data: {
            year: number; // 2567
            target: number; // แผนจากตาราง ev หัวข้อ 1. หัวอัดประจุยานยนต์ไฟฟ้าสาธารณะ DC Fast charge
            result: number; // ผลจากตาราง ev หัวข้อ 1. หัวอัดประจุยานยนต์ไฟฟ้าสาธารณะ DC Fast charge
        }[];
    }
}

// ------------------------------------------------------------------------------------------
// types

type ev_api = {
	summary: aedp_summary[];
	target1: aedp_target;
	target2: aedp_target;
	target3: aedp_target;
    charts: {
        data: {
            year: number;
            target: number; 
            result: number; 
        }[];
    }
}

type ev_summary = {
	year: number;
	percentage: number;
	kpi: {
		target: string; 
		kpi: string;
		status: number; 
	}[];
}

type ev_target = {
	target: string;
	t_title: string;
	kpi: aedp_kpi[];
}

type ev_kpi = {
	k_title: string;
	k_des: string;
	years: {
		title: string;
		status: number;
		targetDes: string;
		actionDes: string;
	}[];
};