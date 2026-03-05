<div class="dsc-container">

    <!-- LEFT SIDE -->
    <div class="dsc-left">

        <h3 class="dsc-title">DSC Charges Calculator</h3>

        <label>Select Product</label>

        <select id="dscProduct" class="dsc-input">

            <option value="dgft_1">DGFT 1 Yr</option>
            <option value="dgft_2">DGFT 2 Yr</option>
            <option value="dgft_3">DGFT 3 Yr</option>

            <option value="general_1">Class 3 General 1 Yr</option>
            <option value="general_2">Class 3 General 2 Yr</option>
            <option value="general_3">Class 3 General 3 Yr</option>

            <option value="combo_1">Class 3 General Combo 1 Yr</option>
            <option value="combo_2">Class 3 General Combo 2 Yr</option>
            <option value="combo_3">Class 3 General Combo 3 Yr</option>

        </select>


        <label>User Type</label>

        <div class="user-type">

            <button type="button" id="individualBtn" class="user-btn active">
                Individual
            </button>

            <button type="button" id="orgBtn" class="user-btn">
                Organization
            </button>

        </div>


        <label class="usb-check">

            <input type="checkbox" id="usbToken" checked>

            <span>Include USB Token (₹500)</span>

        </label>

    </div>


    <!-- RIGHT SIDE SUMMARY -->
    <div class="dsc-summary">

        <div class="summary-row">

            <span>Certificate + L1 Support</span>

            <span id="certPrice">₹0</span>

        </div>

        <div class="summary-row">

            <span>USB Token</span>

            <span id="usbPrice">₹0</span>

        </div>

        <div class="summary-row">

            <span>GST (18%)</span>

            <span id="gstPrice">₹0</span>

        </div>

        <hr>

        <div class="summary-row total">

            <span>Total Payable</span>

            <span id="totalPrice">₹0</span>

        </div>

    </div>

</div>