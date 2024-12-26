type home_api = {
    // summary
    summary: {
        year: number; // 2567
        percent: number;
        kpi: { // kpi ภายในแผน power ทั้งหมด รวมทุก target
			target: string; // 1
			kpi: string; // 1.1.1
			status: number; // 0 = ยังไม่ได้ทำ 1 = ทำเสร็จแล้ว 2 = กำลังทำ
		}[];
        // จำนวนของแผนงานในสถานนะตรงๆ
        reportStatus: {
            complete: number; // แล้วเสร็จ
            inprogress: number; // อยู่ระหว่างดำเนินงาน
            noprogress: number; // ยังไม่ดำเนินงาน
            noreport: number; // ยังไม่มีข้อมูล
        }

        // co-benefit ประจำปี
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
        progress: number; // ความก้าวหน้าของ target 0 - 100
        kpi: {
            kpi: string; // 1.1.1
            name: string; // ปริมาณพลังงานเพียงพอต่อความต้องการใช้พลังงานในประเทศ
            targetdes: string; //ระบบการผลิตไฟฟ้ามีความมั่นคง
            unitdes: string; //ดัชนีการเกิดไฟฟ้าดับ
            data: {
                year: string; // 2567-2570
                progress: number; // 0 - 100
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