const getUser = (input:string | null)=>{
    if(input){
        console.log(`From DB: ${input}`)
    }
    else{
        console.log(`From Db: All USER`)
    }
}

getUser("Sakif")

//unknkown data type
const discountCalculator = (input:unknown)=>{
    if(typeof input === "number"){
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);

    }else if (typeof input === "string"){
        const [discountedPrice] = input.split(" ")
        console.log(Number(discountedPrice)*0.1)
    }
}

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);


const kgToGMConverter = (input: string | number) : string | number | undefined =>{
    if (typeof input === "number"){
        return input * 1000;
    }else if (typeof input === 'string'){
        const [value] = input.split(" ")
        return `Converted output is: ${Number(value)*1000}`
    }
}

const resultOne = kgToGMConverter(20);
const resultTwo = kgToGMConverter('20 kg')

// type assertion
const resultThree = kgToGMConverter(5) as number;
console.log(resultThree)

console.log(resultOne);
console.log(resultTwo)