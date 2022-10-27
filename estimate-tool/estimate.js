const usSelection = document.getElementById("UnitedState")
const esSelection = document.getElementById("European")
const asSelection = document.getElementById("Asian")

let basicRate = 1;

usSelection.addEventListener('click', ()=>{
    basicRate = 1.3;
})

esSelection.addEventListener('click', ()=>{
    basicRate = 1.5;
})

asSelection.addEventListener('click', ()=>{
    basicRate = 1.8;
})

const priceMap = {
        "VirtualMachines": 100,
        "ObjectStorage": 100,
        "DataWarehouse": 150,
        "RelationalDatabase": 130,
        "AITraining": 230,
        "CloudGPUs": 158,
        "CloudCDN":78,
        "AdvancedProtection": 200,
        "Operation": 230
        };

setInterval(update, 500)
function update(){
    let totalPrice = 0;
    let productForm = document.querySelector(".products-form")

    totalPrice += getThePrice(productForm.VirtualMachines.checked, "VirtualMachines");
    if(productForm.VirtualMachines.checked){
        document.getElementById("core").style.visibility = 'visible';
    }else{
        document.getElementById("core").style.visibility = 'hidden';
    }
    if(document.getElementById("core").style.visibility === 'visible'){
        totalPrice +=  parseInt(document.getElementById("core").value);
    }


    totalPrice += getThePrice(productForm.ObjectStorage.checked, "ObjectStorage");
    if(productForm.ObjectStorage.checked){
        document.getElementById("space").style.visibility = 'visible';
    }else{
        document.getElementById("space").style.visibility = 'hidden';
    }
    if(document.getElementById("space").style.visibility === 'visible'){
        totalPrice +=  parseInt(document.getElementById("space").value);
    }

    totalPrice += getThePrice(productForm.DataWarehouse.checked, "DataWarehouse");

    totalPrice += getThePrice(productForm.RelationalDatabase.checked, "RelationalDatabase");
    if(productForm.RelationalDatabase.checked){
        document.getElementById("database").style.visibility = 'visible';
    }else{
        document.getElementById("database").style.visibility = 'hidden';
    }
    if(document.getElementById("database").style.visibility === 'visible'){
        totalPrice +=  parseInt(document.getElementById("database").value);
    }

    totalPrice += getThePrice(productForm.AITraining.checked, "AITraining");
    totalPrice += getThePrice(productForm.CloudGPUs.checked, "CloudGPUs");
    totalPrice += getThePrice(productForm.CloudCDN.checked, "CloudCDN");
    totalPrice += getThePrice(productForm.CloudCDN.checked, "CloudCDN");
    totalPrice += getThePrice(productForm.AdvancedProtection.checked, "AdvancedProtection");
    totalPrice += getThePrice(productForm.Operation.checked, "Operation");

    totalPrice *= basicRate;
    document.querySelector(".total").textContent = "Total: $" + Math.floor(totalPrice);
}


function getThePrice(isChecked, product){
    return isChecked === true ? priceMap[product] : 0;
}
