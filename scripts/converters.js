function convertToChosenCurrency(number, convertFrom, convertTo) {
    if (number === 0) {
        return 0
    }
    if (convertFrom === convertTo) {
        return number;
    }
    
    return (number * lastCurrencies[convertTo] / lastCurrencies[convertFrom]).toFixed(2);
}

function convertToChosenCurrencyWithDate(number, convertFrom, convertTo, date) {
    if (number === 0) {
        return 0
    }
    if (convertFrom === convertTo) {
        return number;
    }

    return number * getCurrencyObjectByDate(date)[convertTo] / getCurrencyObjectByDate(date)[convertFrom]
}

function convertToChosenForGraph(d, convertFrom, convertTo) {
     return d[convertTo]/ d[convertFrom]
}

function getCurrencyObjectByDate(dateItem) {
    for (let i = 0; i < currencyHistory.length; i++) {
        if (currencyHistory[i].date === dateItem) {
            return currencyHistory[i];
        }
    }
}

function convertComplexPercentage(number, percentage, n) {
    return number * Math.pow(1 + percentage/ 100, n) - number;
}