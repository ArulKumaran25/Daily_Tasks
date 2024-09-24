// Function to demonstrate all control flow statements

function controlFlowDemo() {
    let number:number = 15; 

    // if…else
    if(number%2=== 0) {
        console.log(`${number} is even`);
    }
    else{
        console.log(`${number} is odd`);
    }

    // switch…case
    switch(true) {
        case number>0:
            console.log(`${number} is positive`);
            break;
        case number<0:
            console.log(`${number} is negative`);
            break;
        default:
            console.log(`${number} is zero`);
    }

    // for loop
    console.log("Using for loop:");
    for(let i=1;i<=10;i++) {
        if(i===5) {
            console.log("Breaking loop at 5");
            break; 
        }
        console.log(i);
    }

    //  while loop
    let count=15;
    console.log("Using while loop:");
    while(count<=20) {
        if(count===18) {
            count++; 
            continue; 
        }
        console.log(count);
        count++;
    }

    //  do…while loop
    console.log("Using do…while loop:");
    let doCount=10;
    do {
        console.log(doCount);
        doCount--;
    } while (doCount>=5);
}

// Calling the function
controlFlowDemo();
