(()=>{
    const inputs =  document.querySelectorAll("input[value='1']")
    const commnetAreas = document.querySelectorAll("textarea");

    inputs.forEach(i=>i.checked=true);
    commnetAreas.forEach(area=>area.value="No Comments")
})()