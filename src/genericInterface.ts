interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    relasedYear: string;
  };

  smartWatch: T;
}

// type BrandCharaWatch = {
//     heartRate:string;
//     stopwatch:boolean;
// }

interface BrandCharaWatch {
  heartRate: string;
  stopwatch: boolean;
}

// interface
interface AppleWatch {
  heartRate: string;
  callSuppert: boolean;
  calculator: boolean;
  AiFeature: boolean;
}
// dynamically passed
const poorDeveloper: Developer<{ heartRate: string; stopWatch: boolean }> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    relasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};

// pass interface dynamically
const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "Asus",
    model: "A21",
    relasedYear: "2050",
  },
  smartWatch: {
    heartRate: "100",
    callSuppert: true,
    calculator: true,
    AiFeature: true,
  },
};
console.log(poorDeveloper)
console.log(richDeveloper)