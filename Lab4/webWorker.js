const startTime =()=>{
    const date = new Date();
    postMessage(date)
    setTimeout(startTime, 1000);
}

startTime()