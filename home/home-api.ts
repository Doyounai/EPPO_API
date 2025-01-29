type home_api = {
    // summary
    summary: {
        year: number; // 2567
        percent: number;
        kpi: { // kpi ภายในแผน power ทั้งหมด รวมทุก target
			target: string;
			kpi: string; // 1.1.1
			status: number; // 0 = ยังไม่ได้ทำ 1 = ทำเสร็จแล้ว 2 = กำลังทำ
            plan: string; // แผนงาน
            own: string; // หน่วยงานที่รับผิดชอบ
		}[];

        // จำนวนของแผนย่อยในสถานนะต่างๆ 
        reportStatus: {
            complete: number; // แล้วเสร็จ
            inprogress: number; // อยู่ระหว่างดำเนินงาน
            noprogress: number; // ยังไม่ดำเนินงาน
            noreport: number; // ยังไม่มีข้อมูล
        }

        // co-benefit ประจำปี รวมจากทุกแผนย่อย
        cobenefit: {
            sum: number;
            economic: number;
            social: number;
            environment: number;
        };
    }[];

    // kpi target
    target1: {
        target: number; // 1    
        progress: number; // ความก้าวหน้าของ target จาก api target ปีล่าสุด
        kpi: {
            kpi: string; // 1.1.1
            kpiname: string; // ปริมาณพลังงานเพียงพอต่อความต้องการใช้พลังงานในประเทศ
            targetname: string; //ระบบการผลิตไฟฟ้ามีความมั่นคง
            unit: string; // ex. ดัชนีการเกิดไฟฟ้าดับ
            data: {
                year: string; // 2567
                progress: number; // นำ (แผน / ผล) * 100
            }[];
        }[];
    }
    target2: ...;
    target3: ...;

    // ความก้าวหน้าของแผนงาน
    planProgress: {
        Power: number;
        Gas:  number;
        Oil:  number;
        AEDP:  number;
        EEP:  number;
        EV:  number;
        Co2:  number;
      },
}