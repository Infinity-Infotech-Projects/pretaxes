let pieChart, barChart;

/* ================= DOM ELEMENTS ================= */
const pieChartEl = document.getElementById("pieChart");
const barChartEl = document.getElementById("barChart");

/* ================= EMI CALCULATION ================= */
function calculateEMI() {
  const P = Number(loanAmount.value);
  const r = Number(interestRate.value) / 12 / 100;
  const n = Number(loanTenure.value) * 12;

  if (!P || !r || !n) return;

  const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  /* ===== UPDATE SUMMARY ===== */
  rLoan.innerText = format(P);
  rEmi.innerText = format(emi);
  rInterest.innerText = format(totalInterest);
  rTotal.innerText = format(totalPayment);
  rMonths.innerText = `${n} months`;

  const start = startDate.value ? new Date(startDate.value) : new Date();
  const end = new Date(start);
  end.setMonth(end.getMonth() + n);
  rLastDate.innerText = end.toDateString();

  /* ===== TABLE + CHARTS ===== */
  buildTable(P, emi, r, n);
  buildPie(P, totalInterest);
}

/* ================= AMORTIZATION TABLE ================= */
function buildTable(balance, emi, rate, months) {
  tableBody.innerHTML = "";

  let yearlyPrincipal = 0;
  let yearlyInterest = 0;

  let principalArr = [];
  let interestArr = [];

  for (let i = 1; i <= months; i++) {
    const interest = balance * rate;
    const principal = emi - interest;
    balance -= principal;

    yearlyPrincipal += principal;
    yearlyInterest += interest;

    if (i % 12 === 0) {
      principalArr.push(yearlyPrincipal);
      interestArr.push(yearlyInterest);
      yearlyPrincipal = yearlyInterest = 0;
    }

    tableBody.innerHTML += `
      <tr>
        <td>${i}</td>
        <td>${format(emi)}</td>
        <td>${format(principal)}</td>
        <td>${format(interest)}</td>
        <td>${format(Math.max(balance, 0))}</td>
      </tr>
    `;
  }

  drawBar(principalArr, interestArr);
}

/* ================= PIE CHART (REPAYMENT CHART) ================= */
function buildPie(principal, interest) {
  if (pieChart) pieChart.destroy();

  pieChart = new Chart(pieChartEl, {
    type: "pie",
    data: {
      labels: ["Principal", "Interest"],
      datasets: [{
        data: [principal, interest],
        backgroundColor: ["#4988c4", "#1c4d8d"]
      }]
    },
    options: {
  responsive: false,
  plugins: {
    legend: {
      position: "top"
    }
  },
  layout: {
    padding: 10
  }
}

  });
}

/* ================= BAR CHART (PAYMENT DISTRIBUTION) ================= */
function drawBar(principalArr, interestArr) {
  if (barChart) barChart.destroy();

  barChart = new Chart(barChartEl, {
    type: "bar",
    data: {
      labels: principalArr.map((_, i) => i + 1),
      datasets: [
        {
          label: "Principal",
          data: principalArr,
          backgroundColor: "#4988c4"
        },
        {
          label: "Interest",
          data: interestArr,
          backgroundColor: "#1c4d8d"
        }
      ]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year"
          }
        },
        y: {
          title: {
            display: true,
            text: "Share in EMI (₹)"
          },
          ticks: {
            callback: value => "₹ " + value.toLocaleString("en-IN")
          }
        }
      }
    }
  });
}

/* ================= FORMAT ₹ ================= */
function format(n) {
  return "₹ " + Math.round(n).toLocaleString("en-IN");
}

/* ================= AUTO LOAD ================= */
window.addEventListener("load", calculateEMI);

function calculateGST() {
  const amount = Number(document.getElementById("amount").value);
  const rate = Number(document.getElementById("gstRate").value);
  const type = document.getElementById("gstType").value;

  let base = 0, gst = 0, total = 0;

  if (type === "add") {
    base = amount;
    gst = (amount * rate) / 100;
    total = base + gst;
  } else {
    total = amount;
    base = (amount * 100) / (100 + rate);
    gst = total - base;
  }

  const cgst = gst / 2;
  const sgst = gst / 2;

  document.getElementById("baseAmount").innerText = format(base);
  document.getElementById("gstAmount").innerText = format(gst);
  document.getElementById("cgst").innerText = format(cgst);
  document.getElementById("sgst").innerText = format(sgst);
  document.getElementById("totalAmount").innerText = format(total);
}

function format(n) {
  return "₹ " + Math.round(n).toLocaleString("en-IN");
}

/* AUTO CALCULATE ON LOAD */
window.addEventListener("load", calculateGST);

/* gst 2nd */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
/* ================= TABS & STEPS ================= */

const tabs = document.querySelectorAll(".tab");
const steps = document.querySelectorAll(".it-step");

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    const current = btn.closest(".it-step");
    const next = current.nextElementSibling;
    if (!next || !next.classList.contains("it-step")) return;

    current.classList.remove("active");
    next.classList.add("active");
    updateTabs(next.id);
  });
});

document.querySelectorAll(".back").forEach(btn => {
  btn.addEventListener("click", () => {
    const current = btn.closest(".it-step");
    const prev = current.previousElementSibling;
    if (!prev || !prev.classList.contains("it-step")) return;

    current.classList.remove("active");
    prev.classList.add("active");
    updateTabs(prev.id);
  });
});

function updateTabs(stepId) {
  tabs.forEach(tab => tab.classList.remove("active"));
  if (stepId === "step-1") tabs[0].classList.add("active");
  if (stepId === "step-2") tabs[1].classList.add("active");
  if (stepId === "step-3") tabs[2].classList.add("active");
}

/* ================= VIEW CALCULATION ================= */

function viewCalculation() {

  /* ===== READ INPUTS ===== */
  const salary = +document.getElementById("salary")?.value || 0;
  const interest = +document.getElementById("interest")?.value || 0;
  const rent = +document.getElementById("rent")?.value || 0;
  const otherIncome = +document.getElementById("otherIncome")?.value || 0;

  const d80c = +document.getElementById("d80c")?.value || 0;
  const d80d = +document.getElementById("d80d")?.value || 0;
  const homeLoan = +document.getElementById("homeLoan")?.value || 0;
  const otherDeduction = +document.getElementById("otherDeduction")?.value || 0;

  /* ===== CALCULATIONS ===== */
  const gross = salary + interest + rent + otherIncome;

  const deductions =
    Math.min(d80c, 150000) +
    Math.min(d80d, 25000) +
    Math.min(homeLoan, 200000) +
    otherDeduction;

  const oldTaxable = Math.max(0, gross - deductions);
  const newTaxable = Math.max(0, gross - 50000);

  const oldTax = oldRegimeTax(oldTaxable);
  const newTax = newRegimeTax(newTaxable);

  const oldTotal = Math.round(oldTax * 1.04);
  const newTotal = Math.round(newTax * 1.04);

  /* ===== UPDATE RESULT UI ===== */
  document.getElementById("oldGross").innerText = money(gross);
  document.getElementById("oldDeduction").innerText = money(deductions);
  document.getElementById("oldTaxable").innerText = money(oldTaxable);
  document.getElementById("oldTotal").innerText = money(oldTotal);

  document.getElementById("newGross").innerText = money(gross);
  document.getElementById("newTotal").innerText = money(newTotal);

  document.getElementById("oldFinal").innerText = money(oldTotal);
  document.getElementById("newFinal").innerText = money(newTotal);

  const save = oldTotal - newTotal;
  document.getElementById("youSave").innerText = money(Math.abs(save));

  document.getElementById("bestRegime").innerText =
    save > 0
      ? "New Regime is better for you 🎉"
      : "Old Regime is better for you 🎉";

  /* ===== SHOW RESULT PAGE ===== */
  document.getElementById("taxResultPage").style.display = "block";
  document.getElementById("taxResultPage")
    .scrollIntoView({ behavior: "smooth" });
}

/* ================= TAX SLABS ================= */

function oldRegimeTax(i) {
  let t = 0;
  if (i > 1000000) t += (i - 1000000) * 0.3;
  if (i > 500000) t += (Math.min(i, 1000000) - 500000) * 0.2;
  if (i > 250000) t += (Math.min(i, 500000) - 250000) * 0.05;
  return t;
}

function newRegimeTax(i) {
  let t = 0;
  if (i > 1500000) t += (i - 1500000) * 0.3;
  if (i > 1200000) t += (Math.min(i,1500000)-1200000) * 0.2;
  if (i > 900000) t += (Math.min(i,1200000)-900000) * 0.15;
  if (i > 600000) t += (Math.min(i,900000)-600000) * 0.1;
  if (i > 300000) t += (Math.min(i,600000)-300000) * 0.05;
  return t;
}

function money(n) {
  return "₹ " + Math.round(n).toLocaleString("en-IN");
}
function calculate() {
  fetch("calculate.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      nationality: nationality.value,
      category: category.value,
      type: type.value,
      year: year.value,
      usb: usb.value,         // yes / no
      support: support.value // yes / no
    })
  })
  .then(res => res.json())
  .then(d => {
    document.getElementById("dsc").innerText = "₹" + d.dsc;
    document.getElementById("usbCost").innerText = "₹" + d.usb;
    document.getElementById("supportCost").innerText = "₹" + d.support;
    document.getElementById("total").innerText = "₹" + d.total;
  });
}
document.querySelector("#calculateBtn").addEventListener("click", () => {
  const data = {
    nationality: document.getElementById("nationality").value,
    dsc_type: document.getElementById("dscType").value,
    certificate_type: document.getElementById("certType").value,
    validity: document.getElementById("validity").value,
    usb: document.getElementById("usb").value,
    support: document.getElementById("support").value
  };

  fetch("calculate.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    document.getElementById("dscCost").innerText = "₹" + res.dsc;
    document.getElementById("usbCost").innerText = "₹" + res.usb;
    document.getElementById("supportCost").innerText = "₹" + res.support;
    document.getElementById("totalCost").innerText = "₹" + res.total;
  });
});
