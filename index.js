const data = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2016,
    price: 33000,
    fuel: "Diesel",
  },
  {
    brand: "Citroen",
    model: "C3",
    year: 2015,
    price: 12000,
    fuel: "Diesel",
  },
  {
    brand: "Audi",
    model: "A4",
    year: 2020,
    price: 30000,
    fuel: "Petrol",
  },
];

const table = document.querySelector("#data-output");

function tableCreator() {
  function dataTable() {
    let output = "";
    for (d of data) {
      output += `<tr>
        <td>${d.brand}</td>
        <td>${d.model}</td>
        <td>${d.year}</td>
        <td>${d.price}</td>
        <td>${d.fuel}</td>
        <td><button>Add to cart</button></td>
        <td><button class='remove'>Clear</button></td>
        </tr>`;
    }
    table.innerHTML = output;
  }
  return { dataTable };
}

function sort() {
  function sorting(data, sortBy) {
    if (sortBy === "brand") {
      return data.sort((a, b) => (a.brand > b.brand ? 1 : -1));
    } else if (sortBy === "year") {
      return data.sort((a, b) => a.year - b.year);
    } else if (sortBy === "price") {
      return data.sort((a, b) => b.price - a.price);
    }
  }
  return { sorting };
}

const creator = tableCreator();
creator.dataTable();
const sortTable = sort();

const selectElement = document
  .querySelector("#sort")
  .addEventListener("change", (event) => {
    sortTable.sorting(data, event.target.value);
    creator.dataTable();
  });

const clearBtn = document.querySelectorAll(".remove");

clearBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    row.remove();
  });
});
