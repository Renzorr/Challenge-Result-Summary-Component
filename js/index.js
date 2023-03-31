const summaryList = document.getElementById("list");
const arrayClass = ["red", "yellow", "green", "purple"];
const DATA_URL = "./data.json";

const fetchData = async () => {
  const response = await fetch(DATA_URL);
  const data = await response.json();
  setData(data);
};

const setData = (data) => {
  let fill = "";
  data.forEach(({ icon, category, score }, index) => {
    fill += `
      <li class="sum_item" id="item">
        <div class="left">
          <img src="${icon}" alt="" aria-hidden="true" />
          <span class="sum_area ${arrayClass[index]}">${category}</span>
        </div>
        <div class="total_score">
          <p>${score} <span>/ 100</span></p>
        </div>
      </li>
    `;
  });
  summaryList.innerHTML += fill;
};

fetchData();
