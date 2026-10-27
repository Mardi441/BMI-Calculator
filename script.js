const heightInput =
    document.getElementById("height");

const weightInput =
    document.getElementById("weight");

const calculateButton =
    document.getElementById("calculateButton");

const clearButton =
    document.getElementById("clearButton");

const informationView =
    document.getElementById("informationView");

const resultView =
    document.getElementById("resultView");

const bmiValue =
    document.getElementById("bmiValue");

const bmiCircle =
    document.getElementById("bmiCircle");

const meterProgress =
    document.getElementById("meterProgress");

const resultCategory =
    document.getElementById("resultCategory");

const resultMessage =
    document.getElementById("resultMessage");




calculateButton.addEventListener(
    "click",
    calculateBMI
);




function calculateBMI() {

    const height =
        parseFloat(heightInput.value);

    const weight =
        parseFloat(weightInput.value);




    if (
        isNaN(height) ||
        isNaN(weight)
    ) {

        alert(
            "Please enter your height and weight."
        );

        return;
    }


 

    if (
        height <= 0 ||
        weight <= 0
    ) {

        alert(
            "Height and weight must be greater than 0."
        );

        return;
    }


  

    const heightMeters =
        height / 100;


 

    const bmi =
        weight /
        (heightMeters * heightMeters);



    bmiValue.textContent =
        bmi.toFixed(1);


 
    let category;
    let message;
    let color;


    if (bmi < 18.5) {

        category =
            "Underweight";

        message =
            "Your BMI is below the standard adult reference range.";

        color =
            "#55a9ff";

    }

    else if (bmi < 25) {

        category =
            "Healthy Weight";

        message =
            "Your BMI is within the standard adult reference range.";

        color =
            "#49d890";

    }

    else if (bmi < 30) {

        category =
            "Overweight";

        message =
            "Your BMI is above the standard adult reference range.";

        color =
            "#f7bd4d";

    }

    else {

        category =
            "Obesity";

        message =
            "Your BMI is in the obesity range of the standard adult classification.";

        color =
            "#ff6376";
    }


    

    resultCategory.textContent =
        category;

    resultMessage.textContent =
        message;


    resultCategory.style.color =
        color;


   

    updateCircle(
        bmi,
        color
    );


   

    updateMeter(bmi);


    

    informationView.classList.add(
        "hidden"
    );

    resultView.classList.remove(
        "hidden"
    );
}




function updateCircle(
    bmi,
    color
) {

    let percentage;


    if (bmi <= 10) {

        percentage = 5;

    }

    else if (bmi >= 40) {

        percentage = 100;

    }

    else {

        percentage =
            ((bmi - 10) / 30) * 100;
    }


    const degrees =
        (percentage / 100) * 360;


    bmiCircle.style.background =
        `conic-gradient(
            ${color} 0deg,
            ${color} ${degrees}deg,
            rgba(255,255,255,0.08)
            ${degrees}deg,
            rgba(255,255,255,0.08)
            360deg
        )`;
}




function updateMeter(bmi) {

    let percentage;




    if (bmi <= 10) {

        percentage = 0;

    }

    else if (bmi >= 40) {

        percentage = 100;

    }

    else {

        percentage =
            ((bmi - 10) / 30) * 100;
    }


 

    meterProgress.style.width =
        (100 - percentage) + "%";
}



clearButton.addEventListener(
    "click",
    clearCalculator
);


function clearCalculator() {

 

    heightInput.value = "";

    weightInput.value = "";


    // Reset BMI

    bmiValue.textContent =
        "--";


    // Reset circle

    bmiCircle.style.background =
        `conic-gradient(
            #8068d8 0deg,
            #8068d8 0deg,
            rgba(255,255,255,0.08)
            0deg
        )`;


    // Reset meter

    meterProgress.style.width =
        "100%";


    // Reset result

    resultCategory.textContent =
        "Healthy Weight";

    resultCategory.style.color =
        "#49d890";


    resultMessage.textContent =
        "Your BMI result will appear here after calculation.";


 
    resultView.classList.add(
        "hidden"
    );

    informationView.classList.remove(
        "hidden"
    );
}



heightInput.addEventListener(
    "keydown",
    handleEnter
);

weightInput.addEventListener(
    "keydown",
    handleEnter
);


function handleEnter(event) {

    if (event.key === "Enter") {

        calculateBMI();
    }
}
