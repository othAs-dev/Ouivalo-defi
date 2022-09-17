export function handleForm(event) {
  // Prevent the form from submitting.
  event.preventDefault();
  const form = document.querySelector("#form");
  // Set url for submission and collect data.
  const url =
    "https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec";
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        cle: "CLE-TEST-IOT",
        donnees: data,
      },
      null,
      2
    ),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
