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
  function dataTable(param) {
    let output = "";
    for (d of param) {
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

function sortAndFilter() {
  function sorting(data, sortBy) {
    if (sortBy === "brand") {
      return data.sort((a, b) => (a.brand > b.brand ? 1 : -1));
    } else if (sortBy === "year") {
      return data.sort((a, b) => a.year - b.year);
    } else if (sortBy === "price") {
      return data.sort((a, b) => b.price - a.price);
    }
  }


  // Filtriranje tabele po kategorijama
  function filterData(data, selectedValue) {
    if (selectedValue === "Toyota" || selectedValue === "Audi") {
      return data.filter(data => data.brand === selectedValue);
    } else if (selectedValue === "Diesel" || selectedValue === "Petrol") {
      return data.filter(data => data.fuel === selectedValue);
    } else {
      return data;
    }
  }
  return { sorting, filterData };
}

const creator = tableCreator();
creator.dataTable(data);
const sortTable = sortAndFilter();

const filterElements = document
  .querySelector("#filter") // Kreiranje varijable sa filtriranim podacima i update tabele samtim podacima
  .addEventListener("change", (event) => {
    const filteredData = sortTable.filterData(data, event.target.value);
    creator.dataTable(filteredData);
  });

const sortElements = document
  .querySelector("#sort")
  .addEventListener("change", (event) => {
    sortTable.sorting(data, event.target.value);
    creator.dataTable(data);
  });

const clearBtn = document.querySelectorAll(".remove");

clearBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    row.remove();
  });
});
