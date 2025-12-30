class Counter {
    static count:number = 0;

    increment(){
        return (Counter.count = Counter.count + 1)
    }
    decrement(){
        return (Counter.count = Counter.count - 1)
    }
}

const instanceOne = new Counter()
console.log(instanceOne.increment())