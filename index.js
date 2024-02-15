const cars = [
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

function setGetCars() {
  let currentCars = [];

  function setCurrentCars(param) {
    currentCars = param;
  }

  function getCurrentCars() {
    return currentCars;
  }

  function newCarsArray(param, key, value){
    return sortTable.filterData(param, key, value)
  }

  return { setCurrentCars, getCurrentCars, newCarsArray };
}



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
  function filterData(param,key, value,) {
    const newCars = param.filter((el) => el[key] === value);
    setGetCarsTable.setCurrentCars(newCars);
    return newCars;
  }
  return { sorting, filterData };
}

const setGetCarsTable = setGetCars();
const creator = tableCreator();
creator.dataTable(cars);
const sortTable = sortAndFilter();

const filterElements = document
  .querySelector("#filter") 
  .addEventListener("change", (event) => {
    const [key, value] = event.target.value.split("-");
    creator.dataTable(setGetCarsTable.newCarsArray(cars, key, value));
  });

const sortElements = document
  .querySelector("#sort")
  .addEventListener("change", (event) => {
    sortTable.sorting(cars, event.target.value);
    creator.dataTable(cars);
  });

const clearBtn = document.querySelectorAll(".remove");

clearBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    row.remove();
  });
});
