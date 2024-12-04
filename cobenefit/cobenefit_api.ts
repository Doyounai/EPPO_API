type cobenefit_api = {
    // ค่า cobenefit ทั้ง 3 ด้าน และค่ารวมของแต่ละปี

    sum: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
    power: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
    gas: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
    oil: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
    aedp: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
    eep: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
    ev: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
    co2: {
        year: string;
        sum: number;
        economic: number;
        social: number;
        environment: number;
    }[];
}

// -------------------------------------------------
// type

type cobenefit_api = {
  sum: cobenefit[];
  power: cobenefit[];
  gas: cobenefit[];
  oil: cobenefit[];
  aedp: cobenefit[];
  eep: cobenefit[];
  ev: cobenefit[];
  co2: cobenefit[];
};

type cobenefit = {
  year: string;
  sum: number;
  economic: number;
  social: number;
  environment: number;
};