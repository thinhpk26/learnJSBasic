for(let i = 0; i < 2; ++i) {
    let boolen = true;
    let a;
    let b
    if(boolen) {
        b = [4, 5];
        a = b[0];
    }
    let c = a;
    if(boolen) {
        c = b[1]
    }
    console.log(c)
} 