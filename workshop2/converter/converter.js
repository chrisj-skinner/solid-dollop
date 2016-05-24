function convert() {
    
    var currency,
        originalAmountValue,
        convertedCurrency,
        currencyChoice = document.getElementById("converter-currency"),
        converterInput = document.getElementById("converter-input"),
        originalAmount = document.getElementById("original-amount"),
        resultAmount = document.getElementById("result-amount");

    originalAmountValue = converterInput.value;
    currency = currencyChoice.value;

    if (currency === "eur") {
        convertedCurrency = originalAmountValue * 1.27;
    } else if (currency === "usd") {
        convertedCurrency = originalAmountValue * 1.47;
    } else if (currency === "yen") {
        convertedCurrency = originalAmountValue * 155.62;
    }

    originalAmount.textContent = originalAmountValue;
    resultAmount.textContent = convertedCurrency + " " + currency;

}

var button = document.getElementById("converter-action");

var rates = {
	eur: 1.27,
	usd: 1.47,
	yen: 155.62
};

button.addEventListener(
    "click",
    function (event) {
        event.stopPropagation();
        convert();
    }
);

var myApp = {
	text: "World",
	config: {
		language: "en",
		debug: false
	},
	doStuff: function () {
		console.log("Hello " + this.text);
	}
};
// Using the module properties/methods
myApp.text; // World
myApp.doStuff(); // Hello World!
myApp.config.language; // en