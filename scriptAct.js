alert("JS Tutorial Challenge 15");

let body = document.querySelector("body");
body.style.textAlign = "Center";


function personalInformation(){
    let decision = document.querySelector("#chkAgree").checked;
    let firstName = document.querySelector("#txtFname").value;
    let lastName = document.querySelector("#txtLname").value;
    let date =  document.querySelector("#txtBday").value;
    let sex = document.querySelector("input[name=sex]:checked").value;
    let slcCountry = document.querySelector("#slcCountry").value;

            
    if(decision){
        document.querySelector("#fName").innerHTML = "Name: " + firstName +' '+lastName;
        console.log(firstName +' '+lastName);
        document.querySelector("#bDay").innerHTML = "Birth date: " + date;
        console.log(date);
        document.querySelector("#sex").innerHTML = "Gender: " + sex;
        console.log(sex);
        document.querySelector("#country").innerHTML = "Country: " + slcCountry;
        console.log(slcCountry);
    }else{
        alert("Please Check the Privacy Policy");
    }
}