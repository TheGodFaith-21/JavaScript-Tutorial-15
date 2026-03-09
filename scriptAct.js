alert("JS Tutorial Challenge 15");

function personalInformation(){
    let decision = document.querySelector("#chkAgree").checked;
    let firstName = document.querySelector("#txtFname").value;
    let lastName = document.querySelector("#txtLname").value;
    let date =  document.querySelector("#txtBday").value;
    let sex = document.querySelector("input[name=sex]:checked").value;
    let slcCountry = document.querySelector("#slcCountry").value;
        
    if(decision){
        console.log(firstName +' '+lastName);
        console.log(date);
        console.log(sex);
        console.log(slcCountry);
    }else{
        alert("Please Check the Privacy Policy");
    }
}