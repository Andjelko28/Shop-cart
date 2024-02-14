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

const sortBtnHigh = document.querySelector("#option1");
const sortBtnLow = document.querySelector("#option2");
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
        </tr>`;
    }
    table.innerHTML = output;
  }
  return { dataTable };
}

function sorting() {
  function sortAZ(param) {
    param.sort(function (a, b) {
      if (a.brand < b.brand) {
        return -1;
      }
      if (a.brand > b.brand) {
        return 1;
      }
      return 0;
    });
  }

  function sortZA(param) {
    param.sort(function (a, b) {
      if (b.brand < a.brand) {
        return -1;
      }
      if (b.brand > a.brand) {
        return 1;
      }
      return 0;
    });
  }

  return { sortAZ,sortZA };
}

const creator = tableCreator();
creator.dataTable();
const sort = sorting();

sortBtnHigh.addEventListener("click", () => {
  sort.sortAZ(data);
  creator.dataTable();
});

sortBtnLow.addEventListener("click", () => {
  sort.sortZA(data);
  creator.dataTable();
});
