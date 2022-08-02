var btn = document.getElementById("submit");

let table_data = [];



function action() {

    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var Address = document.getElementById("Address").value;
    var Pincode = document.getElementById("Pincode").value;
    var country = document.getElementById("Country").value;

    // gender
    var gender;
    if (document.getElementById("male").checked) {
        gender = "male";
    } else if (document.getElementById("female").checked) {
        gender = "female";
    }

    // food choices
    var food_choices = document.getElementsByClassName("food_choice");
    var selected_food_choice = [];
    for (var i = 0; i < food_choices.length; i++) {
        if (food_choices[i].checked) {
            selected_food_choice.push(food_choices[i].value);
        }
    }

    // state
    var state_values = document.getElementsByClassName("state_option");
    var selected_state;
    for (var i = 0; i < state_values.length; i++) {
        if (state_values[i].selected) {
            selected_state = state_values[i].value;
        }
    }


    var table_body_data = {
        first_name,
        last_name,
        Address,
        Pincode,
        gender,
        selected_food_choice,
        selected_state,
        country
    }

    if (selected_food_choice.length < 2) {
        alert("Select atleast two food choices")
    } else if ((first_name || last_name || Address || Pincode || gender || selected_state || country) === ("" || undefined || null)) {
        alert("Please fill all input values")
    } else {
        table_data.push(table_body_data);
    }

    show()
}

btn.addEventListener("click", function (e) {
    e.preventDefault();
    action();
    document.getElementById("form_entry").reset();
})

function show() {
    let table_body = document.getElementById("table_body");
    let single_row = "";
    for (let i = 0; i < table_data.length; i++) {
        single_row += `
            <tr>
                <td>${i + 1}</td>
                <td>${table_data[i].first_name}</td>
                <td>${table_data[i].last_name}</td>
                <td>${table_data[i].Address}</td>
                <td>${table_data[i].Pincode}</td>
                <td>${table_data[i].gender}</td>
                <td>${table_data[i].selected_food_choice}</td>
                <td>${table_data[i].selected_state}</td>
                <td>${table_data[i].country}</td>
            </tr>
        `;
    }
    table_body.innerHTML = single_row;
}