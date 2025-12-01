// BAR CHART
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Amount Spent",
            data: [12000, 8000, 15000, 9000, 11000, 14000],
            backgroundColor: ["#4e73df"],
        }]
    }
});

// PIE CHART
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Shopping", "Food", "Travel", "Bills"],
        datasets: [{
            data: [45, 25, 15, 15],
            backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"]
        }]
    }
});

// LINE CHART
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: "Usage Trend",
            data: [3000, 1800, 2400, 3500, 4000, 3200, 2100],
            borderColor: "#6a5acd",
            fill: false,
            tension: 0.3
        }]
    }
});
