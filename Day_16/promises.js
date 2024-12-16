new Promise((resolve) => setTimeout(() => resolve("Step 1"), 1000))

    .then((result) => {
        console.log(result);
        return new Promise((resolve) => setTimeout(() => resolve("Step 2"), 1000));
    })

    .then((result) => {
        console.log(result);
        return new Promise((resolve) => setTimeout(() => resolve("Step 3"), 1000));
    })
    
    .then((result) => console.log(result));
