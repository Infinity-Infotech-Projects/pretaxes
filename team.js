const teamDetails = {
  vaibhav: `
    <img src="img/vaibhav.jpg" alt="Vaibhav Mahidhariya">
    <h3>Vaibhav Mahidhariya</h3>
    <span>GST Practitioner & Insurance Advisor</span>
    <p>
      Mr. Vaibhav Mahidhariya is a GST Practitioner since 2018 with extensive
      experience in taxation, accounting, and insurance advisory services.
      He has worked closely with professionally managed corporates as a consultant,
      assisting them in setting up robust accounting and taxation systems in India.
    </p>
    <p>
      He possesses strong expertise in GST compliance, direct and indirect taxation,
      and has helped numerous organizations streamline their statutory filings,
      tax payments, and regulatory documentation. Alongside taxation, he provides
      comprehensive health and life insurance solutions to both corporate groups
      and individual clients.
    </p>
    <p>
      He is a Certified Entrepreneurship professional and holds a Diploma in Tax
      Management, enabling him to deliver practical, compliant, and growth-oriented
      solutions.
    </p>
  `,

  chetan: `
    <img src="img/chetan.jpg" alt="Chetan Gandhi">
    <h3>Chetan Gandhi</h3>
    <span>Company Secretary, Author, Leadership Coach</span>
    <p>
      Mr. Chetan Gandhi is a practicing Company Secretary and a member of the
      Institute of Company Secretaries of India (ICSI). He has over two decades
      of experience in handling corporate secretarial, legal, and compliance matters.
    </p>
    <p>
      A commerce graduate from Mumbai University, he has managed statutory compliances
      and corporate affairs for various organizations. He also provides consultancy
      and corporate training in leadership, management, legal compliance, and
      governance frameworks.
    </p>
    <p>
      Mr. Gandhi holds a Masters in Law, Masters of Arts in Leadership Science,
      is a certified NLP practitioner, and has authored books on Company Law.
    </p>
  `,

  krupali: `
    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Krupali Vadgama">
    <h3>Krupali Vadgama</h3>
    <span>Investment Advisor & Stock Market Expert</span>
    <p>
      Ms. Krupali Vadgama is an investment consultant specializing in Indian
      stock markets and wealth creation strategies. She advises clients on
      investment planning tailored to their financial goals and risk profiles.
    </p>
    <p>
      Her expertise includes Mutual Funds, Intraday trading, Futures & Options,
      and long-term equity investments. She focuses on disciplined investment
      approaches to deliver sustainable returns.
    </p>
  `,

  hardik: `
    <img src="img/hardik.jpg" alt="Hardik Parmar">
    <h3>Hardik Parmar</h3>
    <span>Chartered Accountant</span>
    <p>
      Mr. Hardik Parmar is a qualified Chartered Accountant and commerce graduate
      from the University of Mumbai. He handles statutory audits, accounting
      examinations, and compliance matters.
    </p>
    <p>
      His expertise spans both direct and indirect taxation, financial reporting,
      and regulatory compliance. He assists clients in ensuring accurate recording,
      reporting, and compliance of financial transactions.
    </p>
  `
};

function openTeamModal(member) {
  document.getElementById("modalData").innerHTML = teamDetails[member];
  document.getElementById("teamModal").style.display = "flex";
}

function closeTeamModal() {
  document.getElementById("teamModal").style.display = "none";
}
