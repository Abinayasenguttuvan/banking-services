// BAR CHART
const bar = document.getElementById("barChart");

new Chart(bar, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Transactions (₹)",
      data: [12000, 19000, 15000, 20000, 22000, 18000],
      backgroundColor: ["#4e79a7", "#59a14f", "#9c755f", "#f28e2c", "#edc948", "#e15759"],
      borderWidth: 1
    }]
  }
});

// PIE CHART
const pie = document.getElementById("pieChart");

new Chart(pie, {
  type: "pie",
  data: {
    labels: ["Food", "Shopping", "Bills", "Travel", "Savings"],
    datasets: [{
      data: [25, 20, 15, 10, 30],
      backgroundColor: ["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f"]
    }]
  }
});
