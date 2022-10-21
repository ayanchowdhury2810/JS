const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
    // console.log(counter)
    counter.innerHTML =0
    
    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target')
        // console.log(targetCounter)
        
        const startingCount = Number(counter.innerHTML) 

        const incr = targetCount / 100
        if(startingCount<targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`
            setTimeout(updateCounter, 10)
        }else{
            counter.innerHTML = targetCount
        }
    }

    updateCounter()
})

// for converting string to number, there are 3 ways:

// 1.  Using the unary plus operator:
// var n = +str

// 2.  the number constructor:
// var n = Number(str)

// 3.  the parseFloat function:
// var n = parseFloat(str)
