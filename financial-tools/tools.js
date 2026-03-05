const toolContent = document.getElementById("toolContent")
const resultValue = document.getElementById("resultValue")


function formatINR(num) {
    return "₹" + Math.round(num).toLocaleString("en-IN")
}


function loadTool(tool, btn) {

    document.querySelectorAll(".tool-btn").forEach(b => b.classList.remove("active"))
    if (btn) btn.classList.add("active")



    /* ================= TAX ================= */

    if (tool === "tax") {

        toolContent.innerHTML = `

<h3>Income Tax Estimator</h3>

<label>Annual Income (₹)</label>
<input type="range" id="incomeSlider" min="0" max="5000000" step="50000" value="1000000">
<p id="incomeValue">₹10,00,000</p>

<label>Total Deductions (₹)</label>
<input type="range" id="deductionSlider" min="0" max="200000" step="10000" value="50000">
<p id="deductionValue">₹50,000</p>

<p class="final-tax">ESTIMATED TAX PAYABLE</p>
<h2 id="taxResult">₹0</h2>
`

        let incomeSlider = document.getElementById("incomeSlider")
        let deductionSlider = document.getElementById("deductionSlider")

        let incomeValue = document.getElementById("incomeValue")
        let deductionValue = document.getElementById("deductionValue")

        let taxResult = document.getElementById("taxResult")


        function calculateTax() {

            let income = parseInt(incomeSlider.value)
            let deduction = parseInt(deductionSlider.value)

            incomeValue.innerText = formatINR(income)
            deductionValue.innerText = formatINR(deduction)

            let taxable = income - deduction

            let tax = taxable * 0.1

            taxResult.innerText = formatINR(tax)
            resultValue.innerText = formatINR(tax)

        }

        incomeSlider.oninput = calculateTax
        deductionSlider.oninput = calculateTax

        calculateTax()

    }



    /* ================= EMI ================= */

    if (tool === "emi") {

        toolContent.innerHTML = `

<h3>Loan EMI Calculator</h3>

<label>Loan Amount (₹)</label>
<input type="range" id="loanSlider" min="50000" max="5000000" step="50000" value="500000">
<p id="loanValue">₹5,00,000</p>

<label>Interest Rate (%)</label>
<input type="range" id="rateSlider" min="5" max="15" step="0.5" value="8">
<p id="rateValue">8%</p>

<label>Tenure (Years)</label>
<input type="range" id="tenureSlider" min="1" max="30" step="1" value="10">
<p id="tenureValue">10 Years</p>

`

        let loanSlider = document.getElementById("loanSlider")
        let rateSlider = document.getElementById("rateSlider")
        let tenureSlider = document.getElementById("tenureSlider")

        let loanValue = document.getElementById("loanValue")
        let rateValue = document.getElementById("rateValue")
        let tenureValue = document.getElementById("tenureValue")


        function calculateEMI() {

            let P = parseInt(loanSlider.value)
            let r = parseFloat(rateSlider.value) / 12 / 100
            let n = parseInt(tenureSlider.value) * 12

            loanValue.innerText = formatINR(P)
            rateValue.innerText = rateSlider.value + "%"
            tenureValue.innerText = tenureSlider.value + " Years"

            let emi = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1)

            resultValue.innerText = formatINR(emi)

        }

        loanSlider.oninput = calculateEMI
        rateSlider.oninput = calculateEMI
        tenureSlider.oninput = calculateEMI

        calculateEMI()

    }



    /* ================= SIP ================= */

    if (tool === "sip") {

        toolContent.innerHTML = `

<h3>SIP Investment Planner</h3>

<label>Monthly Investment</label>
<input type="range" id="sipSlider" min="1000" max="100000" step="1000" value="10000">
<p id="sipValue">₹10,000</p>

<label>Return Rate (%)</label>
<input type="range" id="sipRate" min="5" max="20" step="0.5" value="12">
<p id="sipRateValue">12%</p>

<label>Years</label>
<input type="range" id="sipYears" min="1" max="30" step="1" value="10">
<p id="sipYearValue">10 Years</p>

`

        let sipSlider = document.getElementById("sipSlider")
        let sipRate = document.getElementById("sipRate")
        let sipYears = document.getElementById("sipYears")

        let sipValue = document.getElementById("sipValue")
        let sipRateValue = document.getElementById("sipRateValue")
        let sipYearValue = document.getElementById("sipYearValue")


        function calculateSIP() {

            let P = parseInt(sipSlider.value)
            let r = parseFloat(sipRate.value) / 100 / 12
            let n = parseInt(sipYears.value) * 12

            sipValue.innerText = formatINR(P)
            sipRateValue.innerText = sipRate.value + "%"
            sipYearValue.innerText = sipYears.value + " Years"

            let future = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)

            resultValue.innerText = formatINR(future)

        }

        sipSlider.oninput = calculateSIP
        sipRate.oninput = calculateSIP
        sipYears.oninput = calculateSIP

        calculateSIP()

    }



    /* ================= GST ================= */

    if (tool === "gst") {

        toolContent.innerHTML = `

<h3>GST Calculator</h3>

<label>Calculation Type</label>

<div class="gst-toggle">
<button id="addGST" class="gst-btn active">Add GST</button>
<button id="removeGST" class="gst-btn">Remove GST</button>
</div>

<label>Amount (₹)</label>
<input type="number" id="gstAmount" value="10000">

<label>GST Rate (%)</label>

<div class="gst-rates">
<button class="rate-btn" data-rate="5">5%</button>
<button class="rate-btn" data-rate="12">12%</button>
<button class="rate-btn active" data-rate="18">18%</button>
<button class="rate-btn" data-rate="28">28%</button>
</div>

<div class="gst-result-box">

<div class="gst-row">
<span>Net Amount</span>
<span id="netAmount">₹0</span>
</div>

<div class="gst-row">
<span>GST (<span id="gstRateLabel">18</span>%)</span>
<span id="gstValue">₹0</span>
</div>

<div class="gst-row total">
<span>Total Amount</span>
<span id="totalAmount">₹0</span>
</div>

</div>

`

        let amountInput = document.getElementById("gstAmount")
        let rateBtns = document.querySelectorAll(".rate-btn")

        let addBtn = document.getElementById("addGST")
        let removeBtn = document.getElementById("removeGST")

        let net = document.getElementById("netAmount")
        let gst = document.getElementById("gstValue")
        let total = document.getElementById("totalAmount")

        let rateLabel = document.getElementById("gstRateLabel")

        let rate = 18
        let mode = "add"


        function calculateGST() {

            let amount = parseFloat(amountInput.value) || 0

            let gstAmount = 0
            let totalAmount = 0
            let netAmount = 0

            if (mode === "add") {

                netAmount = amount
                gstAmount = amount * (rate / 100)
                totalAmount = amount + gstAmount

            } else {

                totalAmount = amount
                netAmount = amount / (1 + rate / 100)
                gstAmount = totalAmount - netAmount

            }

            net.innerText = formatINR(netAmount)
            gst.innerText = formatINR(gstAmount)
            total.innerText = formatINR(totalAmount)

            resultValue.innerText = formatINR(totalAmount)

            rateLabel.innerText = rate

        }

        rateBtns.forEach(btn => {
            btn.onclick = function() {

                rateBtns.forEach(b => b.classList.remove("active"))
                btn.classList.add("active")

                rate = parseFloat(btn.dataset.rate)

                calculateGST()

            }
        })

        addBtn.onclick = function() {
            mode = "add"
            addBtn.classList.add("active")
            removeBtn.classList.remove("active")
            calculateGST()
        }

        removeBtn.onclick = function() {
            mode = "remove"
            removeBtn.classList.add("active")
            addBtn.classList.remove("active")
            calculateGST()
        }

        amountInput.oninput = calculateGST

        calculateGST()

    }

}



loadTool("tax")
let userType = "individual";

const product = document.getElementById("dscProduct");

const indBtn = document.getElementById("individualBtn");

const orgBtn = document.getElementById("orgBtn");

const usb = document.getElementById("usbToken");

const certPrice = document.getElementById("certPrice");

const usbPrice = document.getElementById("usbPrice");

const gstPrice = document.getElementById("gstPrice");

const totalPrice = document.getElementById("totalPrice");



function formatINR(num) {

    return "₹" + Math.round(num).toLocaleString("en-IN");

}
/* ================= DSC ================= */

if (tool === "dsc") {

    fetch("financial-tools/dsc.php")
        .then(res => res.text())
        .then(data => {

            toolContent.innerHTML = data

            // wait for html to render
            setTimeout(() => {
                initDSC()
            }, 100)

        })

}

function initDSC() {

    let product = document.getElementById("dscProduct")
    let usb = document.getElementById("usbToken")

    let indBtn = document.getElementById("individualBtn")
    let orgBtn = document.getElementById("orgBtn")

    let certPrice = document.getElementById("certPrice")
    let usbPrice = document.getElementById("usbPrice")
    let gstPrice = document.getElementById("gstPrice")
    let totalPrice = document.getElementById("totalPrice")

    let result = document.getElementById("resultValue")

    let userType = "individual"


    function calculateDSC() {

        fetch(`financial-tools/get_dsc_data.php?product=${product.value}&user=${userType}`)
            .then(res => res.json())
            .then(data => {

                if (!data || data.status !== "success") return

                let certificate = parseFloat(data.certificate) || 0
                let support = parseFloat(data.support) || 0
                let usbCost = usb.checked ? parseFloat(data.usb) : 0

                let base = certificate + support
                let subtotal = base + usbCost
                let gst = subtotal * 0.18
                let total = subtotal + gst

                certPrice.innerText = formatINR(base)
                usbPrice.innerText = formatINR(usbCost)
                gstPrice.innerText = formatINR(gst)
                totalPrice.innerText = formatINR(total)

                if (result) result.innerText = formatINR(total)

            })

    }

    product.addEventListener("change", calculateDSC)
    usb.addEventListener("change", calculateDSC)

    indBtn.addEventListener("click", function() {

        userType = "individual"
        indBtn.classList.add("active")
        orgBtn.classList.remove("active")

        calculateDSC()

    })

    orgBtn.addEventListener("click", function() {

        userType = "organization"
        orgBtn.classList.add("active")
        indBtn.classList.remove("active")

        calculateDSC()

    })

    calculateDSC()

}

function initDSC() {

    let product = document.getElementById("dscProduct")
    let usb = document.getElementById("usbToken")

    let indBtn = document.getElementById("individualBtn")
    let orgBtn = document.getElementById("orgBtn")

    let certPrice = document.getElementById("certPrice")
    let usbPrice = document.getElementById("usbPrice")
    let gstPrice = document.getElementById("gstPrice")
    let totalPrice = document.getElementById("totalPrice")

    let result = document.getElementById("resultValue")

    let userType = "individual"


    function calculateDSC() {

        fetch(`financial-tools/get_dsc_data.php?product=${product.value}&user=${userType}`)
            .then(res => res.json())
            .then(data => {

                if (!data || data.status !== "success") return

                let certificate = parseFloat(data.certificate) || 0
                let support = parseFloat(data.support) || 0
                let usbCost = usb.checked ? parseFloat(data.usb) : 0

                let base = certificate + support
                let subtotal = base + usbCost
                let gst = subtotal * 0.18
                let total = subtotal + gst

                certPrice.innerText = formatINR(base)
                usbPrice.innerText = formatINR(usbCost)
                gstPrice.innerText = formatINR(gst)
                totalPrice.innerText = formatINR(total)

                if (result) result.innerText = formatINR(total)

            })

    }

    product.addEventListener("change", calculateDSC)
    usb.addEventListener("change", calculateDSC)

    indBtn.addEventListener("click", function() {

        userType = "individual"
        indBtn.classList.add("active")
        orgBtn.classList.remove("active")

        calculateDSC()

    })

    orgBtn.addEventListener("click", function() {

        userType = "organization"
        orgBtn.classList.add("active")
        indBtn.classList.remove("active")

        calculateDSC()

    })

    calculateDSC()

}