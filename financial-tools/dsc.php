<h3 class="tool-title">DSC Charges Calculator</h3>

<!-- PRODUCT -->

<label>Select Product</label>

<select id="dscProduct" class="tool-input">

<option value="Class 3 General 1 Yr">Class 3 General 1 Yr</option>
<option value="Class 3 General 2 Yr">Class 3 General 2 Yr</option>
<option value="Class 3 General 3 Yr">Class 3 General 3 Yr</option>

<option value="Class 3 General Combo 1 Yr">Class 3 General Combo 1 Yr</option>
<option value="Class 3 General Combo 2 Yr">Class 3 General Combo 2 Yr</option>
<option value="Class 3 General Combo 3 Yr">Class 3 General Combo 3 Yr</option>

<option value="Foreign - Class 3 General 1 Yr">Foreign - Class 3 General 1 Yr</option>
<option value="Foreign - Class 3 General 2 Yr">Foreign - Class 3 General 2 Yr</option>
<option value="Foreign - Class 3 General 3 Yr">Foreign - Class 3 General 3 Yr</option>

<option value="DGFT 1 Yr">DGFT 1 Yr</option>
<option value="DGFT 2 Yr">DGFT 2 Yr</option>
<option value="DGFT 3 Yr">DGFT 3 Yr</option>

</select>


<!-- USER TYPE -->

<label>User Type</label>

<div class="user-type-toggle">

<button id="individualBtn" class="toggle-btn active">
Individual
</button>

<button id="orgBtn" class="toggle-btn">
Organization
</button>

</div>


<!-- USB TOKEN -->

<label class="checkbox-row">

<input type="checkbox" id="usbToken" checked>

Include USB Token (₹500)

</label>


<!-- RESULT BREAKDOWN -->

<div class="dsc-result-box">

<div class="dsc-row">

<span>Certificate + L1 Support</span>

<span id="certPrice">₹0</span>

</div>

<div class="dsc-row">

<span>USB Token</span>

<span id="usbPrice">₹0</span>

</div>

<div class="dsc-row">

<span>GST (18%)</span>

<span id="gstPrice">₹0</span>

</div>

<hr>

<div class="dsc-row total">

<span>Total Payable</span>

<span id="totalPrice">₹0</span>

</div>

</div>


<!-- APPLY BUTTON -->

<button class="apply-dsc-btn">

Apply for DSC

</button>