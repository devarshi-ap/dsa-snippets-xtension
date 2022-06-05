exports.selectionSort = function(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
};

exports.insertionSort = function(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
};

exports.bubbleSort = function(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

exports.shellSort = function(inputArr) {
    let n = inputArr.length;
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))   {
        for (let i = gap; i < n; i += 1)  {
            let temp = inputArr[i];
            let j;
            for (j = i; j >= gap && inputArr[j-gap] > temp; j-=gap)  {
                inputArr[j] = inputArr[j-gap];
            }
            inputArr[j] = temp;
        }
    }
    return inputArr;
};

exports.countingSort = function(arr, min, max) {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) count[i] = 0;
    for (i = 0; i < len; i++) count[arr[i]] += 1;
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

exports.radixSort = function(arr) {

    const getDigitAtPosition = (num, atPosition) => Math.floor(Math.abs(num) / Math.pow(10, atPosition)) % 10;

    if (!arr.length || arr.length === 1) return arr

    let biggestNumber = arr[arr.length-1]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNumber) biggestNumber = arr[i]
    }
    const biggestNumberPositionsCount = biggestNumber.toString().length
  
    for (let position = 0; position < biggestNumberPositionsCount; position++) {
        let buckets = Array.from({length:10}, () => []) 
    
        for (let i = 0; i < arr.length; i++) {
            buckets[getDigitAtPosition(arr[i], position)].push(arr[i])
        }
        arr = [].concat(...buckets)
    }
    return arr
};

exports.linearSearch = function(arr, value) {
    let found = false;
    let position = -1;
    let index = 0;
  
    while(!found && index < arr.length) {
        if(arr[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
};

exports.binarySearch = function(sortedArray, target) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === target) {
            return middle;
        } else if (sortedArray[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
};

exports.jumpSearch = function(sortedArr, target) {
    let len = sortedArr.length
    let step = Math.floor(Math.sqrt(len));
    let blockStart = 0, currentStep = step;

    while (sortedArr[Math.min(currentStep, len) - 1] < target) {
        blockStart = currentStep;
        currentStep += step;
        if (blockStart >= len) return -1;
    }
    while (sortedArr[blockStart] < target) {
        blockStart++;
        if (blockStart == Math.min(currentStep, len)) return -1;
    }
    return (sortedArr[blockStart] == target) ? blockStart : -1
};

exports.interpolationSearch = function(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    while (left <= right) {
        const rangeDelta = sortedArr[right] - sortedArr[left];
        const indexDelta = right - left;
        const valueDelta = target - sortedArr[left];
        
        if (valueDelta < 0) return -1;
        if (!rangeDelta) return sortedArr[left] === target ? left : -1;
        
        const middleIndex = left + Math.floor((valueDelta * indexDelta) / rangeDelta);
        
        if (sortedArr[middleIndex] === target) return middleIndex;
        if (sortedArr[middleIndex] < target)
            left = middleIndex + 1;
        else
            right = middleIndex - 1;
    }
    return -1;
};

exports.fibMonaccianSearch = function(arr, target, n) {
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;
  
    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }
    let offset = -1;
    
    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, n-1);
        if (arr[i] < target) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > target) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        }
        else return i;
    }

    if (fibMMm1 && arr[n-1] == target) return n-1;
  
    // element not found. return -1
    return -1;
};

exports.getUniqueValues = function(arrOfNum) {
    const set = new Set(arrOfNum);
    return [...set];
};

exports.findPrimes = (num = 10) => {
    const numArr = new Array(num + 1);
    numArr.fill(true);
    numArr[0] = numArr[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        for (let j = 2; i * j <= num; j++){
            numArr[i * j] = false;
        }
    }
    return numArr.reduce((acc, val, ind) => {
        if(val){
            return acc.concat(ind);
        }else{
            return acc;
        };
    },[]);
}

exports.primeFactors = function(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

exports.ModularExponentiation = (a, b, n) => {
    a = a % n;
    var result = 1;
    var x = a;

    while(b > 0) {
        var leastSignificantBit = b % 2;
        b = Math.floor(b / 2);

        if (leastSignificantBit == 1) {
        result = result * x;
        result = result % n;
        }

        x = x * x;
        x = x % n;
    }
    return result;
};

exports.ItrFact = function(num) {
    var result = 1;
    for (var i = 2; i <= num; i++)
        result *= i;
    return result;
}

exports.euclideanDistance = (a, b) => {
    return Math.hypot(...Object.keys(a).map(k => b[k] - a[k]));
}