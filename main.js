let allCustomers = [];

function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}
async function fetchCustomers() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = `<tr class="state-row"><td colspan="8">Conectando con Firebase...</td></tr>`;

  try {
    const response = await fetch(`${const_URL}${DB_NODE}.json`);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status} al consultar ${DB_NODE}`);
    }

    const data = await response.json();

    if (!data) {
      tableBody.innerHTML = `<tr class="state-row"><td colspan="8">
        No se encontraron datos en el nodo "${DB_NODE}". Importa data/dataset.json
        a tu Firebase Realtime Database para poblar el dashboard.
      </td></tr>`;
      return;
    }

    allCustomers = Object.keys(data).map((key) => data[key]);

    renderStats(allCustomers);
    renderTable(allCustomers);
  } catch (err) {
    console.error("Error al conectar con Firebase:", err);
    tableBody.innerHTML = `<tr class="state-row"><td colspan="8">
      No fue posible cargar los datos (${err.message}). Verifica la URL en config.js
      y las reglas de lectura de tu Firebase Realtime Database.
    </td></tr>`;
  }
}

function renderStats(customers) {
  const total = customers.length;
  const revenue = customers.reduce((sum, c) => sum + Number(c["Amount Spent"] || 0), 0);
  const avgTicket = total ? revenue / total : 0;
  const avgAge = total ? customers.reduce((sum, c) => sum + Number(c["Age"] || 0), 0) / total : 0;

  document.getElementById("statTotal").textContent = total.toLocaleString("es-CO");
  document.getElementById("statRevenue").textContent = formatCurrency(revenue);
  document.getElementById("statAvg").textContent = formatCurrency(avgTicket);
  document.getElementById("statAge").textContent = `${avgAge.toFixed(1)} anios`;
}

function renderTable(customers) {
  const tableBody = document.getElementById("tableBody");
  const resultCount = document.getElementById("resultCount");

  if (customers.length === 0) {
    tableBody.innerHTML = `<tr class="state-row"><td colspan="8">Ningun cliente coincide con el filtro aplicado.</td></tr>`;
    resultCount.textContent = "0 resultados";
    return;
  }

  let rowsHtml = "";

  customers.forEach((c) => {
    const badgeClass = (c["Membership Status"] || "").toLowerCase();

    rowsHtml += `
      <tr>
        <td class="cell-id">${c["Customer ID"]}</td>
        <td>${c["Name"]}</td>
        <td>${c["City"]}</td>
        <td>${c["Product Purchased"]}</td>
        <td>${c["Purchase Date"]}</td>
        <td class="cell-amount">${formatCurrency(c["Amount Spent"])}</td>
        <td>${c["Payment Method"]}</td>
        <td><span class="badge ${badgeClass}">${c["Membership Status"]}</span></td>
      </tr>
    `;
  });

  tableBody.innerHTML = rowsHtml;
  resultCount.textContent = `${customers.length} resultado${customers.length === 1 ? "" : "s"}`;
}

function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  const membership = document.getElementById("membershipFilter").value;

  const filtered = allCustomers.filter((c) => {
    const matchesSearch =
      !searchTerm ||
      c["Name"].toLowerCase().includes(searchTerm) ||
      c["City"].toLowerCase().includes(searchTerm);

    const matchesMembership = !membership || c["Membership Status"] === membership;

    return matchesSearch && matchesMembership;
  });

  renderTable(filtered);
}

function setupFilters() {
  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("membershipFilter").addEventListener("change", applyFilters);
  document.getElementById("refreshLink").addEventListener("click", (e) => {
    e.preventDefault();
    fetchCustomers();
  });
}

function formatCurrency(value) {
  return Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();
  setupFilters();
  fetchCustomers();
});
