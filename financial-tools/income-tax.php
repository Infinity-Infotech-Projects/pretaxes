<h3>Income Tax Estimator (FY 2025-26)</h3>

<label>Annual Income (₹)</label>
<input type="range" id="income" min="0" max="5000000" value="1000000">

<h2 id="incomeValue">₹1,000,000</h2>

<label>Total Deductions (₹)</label>
<input type="range" id="deduction" min="0" max="500000" value="150000">

<h2 id="deductionValue">₹150,000</h2>

<div class="result-box">

<h4>ESTIMATED TAX PAYABLE</h4>

<h1 id="taxResult">₹127,500</h1>

</div>

<script>

const income=document.getElementById("income");
const deduction=document.getElementById("deduction");

function calculateTax(){

let inc=parseInt(income.value);
let ded=parseInt(deduction.value);

let taxable=inc-ded;

let tax=0;

if(taxable<=300000) tax=0;
else if(taxable<=600000) tax=(taxable-300000)*0.05;
else if(taxable<=900000) tax=15000+(taxable-600000)*0.10;
else if(taxable<=1200000) tax=45000+(taxable-900000)*0.15;
else tax=90000+(taxable-1200000)*0.20;

document.getElementById("taxResult").innerHTML="₹"+Math.round(tax);

}

income.oninput=calculateTax;
deduction.oninput=calculateTax;

</script>