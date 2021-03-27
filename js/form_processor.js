//order form
if (window.location.pathname == "/order.html") {
  let query = window.location.search;

  var form = document.getElementById("order-form");
  var inputs = Array.from(form.elements);
  if (query.length > 1) {
    let value = query.split("=")[1];
    inputs[0].value = value;
  }
  const insVal = document.querySelector("#insurance_value_gp");
  inputs[0].addEventListener("change", (e) => {
    if (e.target.value.includes("medical") || e.target.value.includes("life"))
      insVal.classList.add("hidden");
    else insVal.classList.remove("hidden");
  });

  //submit form
  const submitForm = (targetUrl, inputs) => {
    fetch(targetUrl, { method: "POST", body: inputs })
      .then((res) => res.json())
      .then((response) => {
        console.log("response: ", response);
        const fb = document.querySelector("#feedback");
        fb.textContent = response.message;
        fb.classList.remove("hidden");
        fb.focus();
      })
      .catch((e) => {
        console.error("form_processor.js: ", e);
      });
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData();
    inputs.forEach((input) => {
      let value = input.value;
      if (input.type == "select")
        value = input.options[input.options.selectedIndex].text;
      data.append(input.id, value);
    });
    let target = "../backend/process_order.php";

    submitForm(target, data);
    form.reset();
  });
}
