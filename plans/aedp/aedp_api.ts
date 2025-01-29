type aedp_api = {
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

        // ข้อมูลรายปี จากตาราง 2.2.1 การคำนวณการใช้พลังงานทดแทนและพลังงานทางเลือก
        alt: {
            year: number; // 2567
            elect_sum: number; // ผลรวมของ 1. พลังงานไฟฟ้า
            thermal_sum: number; // ผลรวมของ 2. พลังงานความร้อน
            bio_sum: number; // ผลรวมของ 3. เชื้อเพลิงชีวภาพ
            elect_data: { // ค่าย่อยภายในหัวข้อ 1. พลังงานไฟฟ้า 
                "พลังงานแสงอาทิตย์": number;
                "พลังงานแสงอาทิตย์ทุ่นลอยน้ำ": number;
                "พลังงานลม": number;
                "ชีวมวล": number;
                "ก๊าซชีวภาพ (น้ำเสีย/ของเสีย)": number;
                "ก๊าซชีวภาพ (พืชพลังงาน)": number;
                "ขยะชุมชน ": number;
                "ขยะอุตสาหกรรม": number;
                "พลังน้ำขนาดเล็ก": number;
                "พลังน้ำขนาดใหญ่": number;
                "ความร้อนใต้พิภพ": number;
                "ไฮโดรเจน": number;
                "พลังน้ำนำเข้า": number;
            };
            themal_data: { // ค่าย่อยภายในหัวข้อ 2. พลังงานความร้อน
                "พลังงานแสงอาทิตย์": number;
                "ชีวมวล": number;
                "ก๊าซชีวภาพ": number;
                "พลังงานขยะ": number;
                "อื่นๆ": number;
            };
            bio_data: { // ค่าย่อยภายในหัวข้อ 3. เชื้อเพลิงชีวภาพ
                "เอทานอล": number;
                "ไบโอดีเซล": number;
                "น้ำมันอากาศยานยั่งยืน (SAF)": number;
                "ไฮโดรเจน": number;
            };
        }[];

        // ข้อมูลรายปี จากตาราง 2.2.1 การคำนวณการลดการปล่อย CO2
        co2: {
            year: number; // 2567
            sum: number; // ผลรวมของการลดการปล่อย CO2
            alt: number; // หัวข้อ 1. การลดการปล่อย CO2 จากการใช้ไฟฟ้าจากพลังงานทดแทนและพลังงานทางเลือก
            themal: number; // หัวข้อ 2. การลดการปล่อย CO2 จากการใช้ความร้อนจากพลังงานทดแทนและพลังงานทางเลือก
            bio: number; // หัวข้อ 3. การลดการปล่อย CO2 จากการใช้เชื้อเพลิงชีวภาพจากพลังงานทดแทนและพลังงานทางเลือก
        }[];
    }
}

// ------------------------------------------------------------------------------------------
// types

type aedp_api = {
	summary: aedp_summary[];
	target1: aedp_target;
	target2: aedp_target;
	target3: aedp_target;
    charts: {
        alt: alt_chart;
        co2: co2_chart;
    }
}

type aedp_summary = {
	year: number;
	percentage: number;
	kpi: {
		target: string; 
		kpi: string;
		status: number; 
	}[];
}

type aedp_target = {
	target: string;
	t_title: string;
	kpi: aedp_kpi[];
}

type aedp_kpi = {
	k_title: string;
	k_des: string;
	years: {
		title: string;
		status: number;
		targetDes: string;
		actionDes: string;
	}[];
};

type alt_chart = {
    data: {
        year: number;
        elect_sum: number;
        thermal_sum: number;
        bio_sum: number; 
        elect_data: {
            "พลังงานแสงอาทิตย์": number;
            "พลังงานแสงอาทิตย์ทุ่นลอยน้ำ": number;
            "พลังงานลม": number;
            "ชีวมวล": number;
            "ก๊าซชีวภาพ (น้ำเสีย/ของเสีย)": number;
            "ก๊าซชีวภาพ (พืชพลังงาน)": number;
            "ขยะชุมชน ": number;
            "ขยะอุตสาหกรรม": number;
            "พลังน้ำขนาดเล็ก": number;
            "พลังน้ำขนาดใหญ่": number;
            "ความร้อนใต้พิภพ": number;
            "ไฮโดรเจน": number;
            "พลังน้ำนำเข้า": number;
        };
        themal_data: {
            "พลังงานแสงอาทิตย์": number;
            "ชีวมวล": number;
            "ก๊าซชีวภาพ": number;
            "พลังงานขยะ": number;
            "อื่นๆ": number;
        };
        bio_data: {
            "เอทานอล": number;
            "ไบโอดีเซล": number;
            "น้ำมันอากาศยานยั่งยืน (SAF)": number;
            "ไฮโดรเจน": number;
        };
    }[];
};

type co2_chart = {
    year: number;
    sum: number;
    alt: number; 
    themal: number; 
    bio: number // 
}