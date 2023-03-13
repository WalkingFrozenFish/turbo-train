let studentName = document.querySelector(".studentName");
const generateReviewButton = document.querySelector(".generate-review");



const studentReview = {
    name: "",
    recomendation: [],
    error: [],
    result: [],
    resultPoint: 0
}



const recomendationMessages = [
    { message: "Recomendation 1", point: 0.1 },
    { message: "Recomendation 2", point: 0.2 },
    { message: "Recomendation 3", point: 0.3 },
]

const errorMessages = [
    { message: "Error 1", point: 1.1 },
    { message: "Error 2", point: 1.2 },
    { message: "Error 3", point: 1.3 },
]

const resultMessages = [
    { message: "Result 1", point: 2.1 },
    { message: "Result 2", point: 2.2 },
    { message: "Result 3", point: 2.3 },
]

function createDataObjects(messages) {
    const data = [];

    messages.forEach(item => {
        const obj = {
            ...item,
            id: Date.now() + Math.random()
        }

        data.push(obj);
    });

    return data;
}




function createItemHandler(targetParent, messageText, points) {
    const messageTd = document.createElement("td");
    messageTd.classList.add("message-cell");
    messageTd.innerText = messageText;


    const pointTd = document.createElement("td");
    pointTd.classList.add("point-cell");
    const pointSpan = document.createElement("span");
    pointSpan.innerText = points + " " + "баллов";
    pointTd.append(pointSpan);


    const checkboxTd = document.createElement("td");
    checkboxTd.classList.add("checkbox-cell");
    const inputTd = document.createElement("input");
    inputTd.type = "checkbox";
    checkboxTd.append(inputTd);


    const tr = document.createElement("tr");
    const table = document.createElement("table");
    const itemWrapper = document.createElement("div");

    itemWrapper.classList.add("item");

    tr.append(messageTd, pointTd, checkboxTd);
    table.append(tr);
    itemWrapper.append(table);

    targetParent.append(itemWrapper);
}


// for (const key in recomendations) {
//     createItemHandler(document.querySelector(".recomendation-block"), recomendations[key], 10)
// }



// studentName.addEventListener("keyup", (e) => {
//     studentReview.name = e.target.value;
// })

generateReviewButton.addEventListener("click", (e) => {
    const selectedItems = document.querySelectorAll("input[type=checkbox]");

    selectedItems.forEach(element => {
        console.log(element.checked);
    });
})
