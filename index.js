
function change(billing) {
    var monthly = document.getElementsByClassName('monthly-billing');
    var yearly = document.getElementsByClassName('yearly-billing');
    var togglecheck = document.getElementById('billing');

    if (togglecheck.checked) {
        monthly.style.display = "none";        
    } else {
        yearly.style.display = "none";
    }
};
