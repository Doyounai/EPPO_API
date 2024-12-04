// http://10.110.23.233:8092/mrv/plans/[plan]/
// http://10.110.23.233:8092/mrv/plans/power/
type pdp_api =  {
	// ข้อมูล summary card (กราฟวงกลม)
	summary: {
		year: number; // 2566
		count_actual_greater_than_0: number;
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

	// ข้อมูล Fuel Mix (ถ้าค่าไม่มีให้ใส่ 0)
	fuel_mix: {
		year: number,
		"พลังน้ำต่างประเทศ": number,
		"พลังน้ำในประเทศ": number,
		"Diesel": number,
		"พลังงานหมุนเวียนอื่นๆ": number,
		"พลังงานแสงอาทิตย์": number,
		"พลังงานแสงอาทิตย์ทุ่นลอยน้ำ": number,
		"ถ่านหิน": number,
		"ก๊าซธรรมชาติ": number,
		"NuclearSMR": number,
		"HDVC": number,
		"DemandResponse": number,
	}[];

	// ข้อมูล charts
	charts: {
		// กราฟ lole
		lole: {
			title: string; // ดัชนีโอกาสเกิดไฟฟ้าดับ (LOLE)
			unit: string;
			data: {
				year: number; // ปี
				target: number; // แผน
				result: number; // ผล
			}[];
		};

		// กราฟ saifi
		saifi_bkk: {
			title: string; // ค่าเฉลี่ยของจำนวนครั้งที่ไฟฟ้าดับ (SAIFI) พื้นที่กรุงเทพและปริมณฑล
			unit: string;
			data: {
				year: number; // ปี
				target: number; // แผน
				result: number; // ผล
			}[];
		}
		saifi_etc: ...
		saifi_marine: ...

		// กราฟ saidi
		saidi_bkk: ...
		saidi_etc: ...
		saidi_marine: ...
	};
};

// ------------------------------------------------------------------------------------------
// plans types
type pdp_api = {
	summary: plans_summary[];
	target1: plans_target;
	target2: plans_target;
	target3: plans_target;
	fuel_mix: fuel_mix[];
	charts: {
		lole: plans_charts;
		saifi_bkk: plans_charts;
		saifi_etc: plans_charts;
		saifi_marine: plans_charts;
		saidi_bkk: plans_charts;
		saidi_etc: plans_charts;
		saidi_marine: plans_charts;
	};
};

type plans_summary = {
	year: number;
	count_actual_greater_than_0: number;
	percentage: number;
	kpi: {
		target: string; 
		kpi: string;
		status: number; 
	}[];
};

type plans_target = {
	target: string;
	t_title: string;
	kpi: plans_kpi[];
};

type plans_kpi = {
	k_title: string;
	k_des: string;
	years: {
		title: string;
		status: number;
		targetDes: string;
		actionDes: string;
	}[];
};

type fuel_mix = {
	year: number,
	"พลังน้ำต่างประเทศ": number,
	"พลังน้ำในประเทศ": number,
	"Diesel": number,
	"พลังงานหมุนเวียนอื่นๆ": number,
	"พลังงานแสงอาทิตย์": number,
	"พลังงานแสงอาทิตย์ทุ่นลอยน้ำ": number,
	"ถ่านหิน": number,
	"ก๊าซธรรมชาติ": number,
	"NuclearSMR": number,
	"HDVC": number,
	"DemandResponse": number,
};

type plans_charts = {
	title: string;
	unit: string;
	data: {
		year: number;
		target: number;
		result: number;
	}[];
};