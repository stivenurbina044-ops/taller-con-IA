const FIREBASE_BASE_URL = "https://taller-ia-9cc11-default-rtdb.firebaseio.com.json";
const FIREBASE_NODE = "customers";

const ALLOWED_EMAIL_DOMAINS = ["mailinator.com", "example.com"];

const DEMO_DATA = {
  "TG-0001": {
    "Customer ID": "TG-0001",
    "Name": "Laura Gomez",
    "Email": "laura.gomez1@mailinator.com",
    "Product Purchased": "Auriculares NoiseCancel Pro",
    "Purchase Date": "2025-11-19",
    "Amount Spent ($)": "1858.00",
    "Age": 16,
    "City": "Medellin",
    "Payment Method": "Credit Card",
    "Last Login Date": "2026-01-15",
    "Membership Status": "Platinum"
  },
  "TG-0002": {
    "Customer ID": "TG-0002",
    "Name": "Mateo Garcia",
    "Email": "mateo.garcia2@mailinator.com",
    "Product Purchased": "Laptop UltraBook 14\"",
    "Purchase Date": "2026-04-01",
    "Amount Spent ($)": "559.09",
    "Age": 24,
    "City": "Manizales",
    "Payment Method": "Debit Card",
    "Last Login Date": "2026-06-17",
    "Membership Status": "Platinum"
  },
  "TG-0003": {
    "Customer ID": "TG-0003",
    "Name": "Nicolas Cruz",
    "Email": "nicolas.cruz3@mailinator.com",
    "Product Purchased": "SSD Externo 1TB",
    "Purchase Date": "2025-07-20",
    "Amount Spent ($)": "2026.62",
    "Age": 48,
    "City": "Bucaramanga",
    "Payment Method": "PayPal",
    "Last Login Date": "2025-10-09",
    "Membership Status": "Gold"
  },
  "TG-0004": {
    "Customer ID": "TG-0004",
    "Name": "Isabella Perez",
    "Email": "isabella.perez4@mailinator.com",
    "Product Purchased": "Teclado Mecanico RGB",
    "Purchase Date": "2026-01-27",
    "Amount Spent ($)": "269.88",
    "Age": 56,
    "City": "Cucuta",
    "Payment Method": "PayPal",
    "Last Login Date": "2026-02-20",
    "Membership Status": "Bronze"
  },
  "TG-0005": {
    "Customer ID": "TG-0005",
    "Name": "Alejandro Cruz",
    "Email": "alejandro.cruz5@mailinator.com",
    "Product Purchased": "Camara WebCam HD Pro",
    "Purchase Date": "2026-01-26",
    "Amount Spent ($)": "2433.21",
    "Age": 28,
    "City": "Cartagena",
    "Payment Method": "PayPal",
    "Last Login Date": "2026-02-15",
    "Membership Status": "Silver"
  },
  "TG-0006": {
    "Customer ID": "TG-0006",
    "Name": "Paula Martinez",
    "Email": "paula.martinez6@mailinator.com",
    "Product Purchased": "Drone SkyView 4K",
    "Purchase Date": "2025-12-12",
    "Amount Spent ($)": "1658.57",
    "Age": 18,
    "City": "Barranquilla",
    "Payment Method": "Credit Card",
    "Last Login Date": "2026-01-01",
    "Membership Status": "Platinum"
  },
  "TG-0007": {
    "Customer ID": "TG-0007",
    "Name": "Valeria Cruz",
    "Email": "valeria.cruz7@mailinator.com",
    "Product Purchased": "Cargador Rapido 65W",
    "Purchase Date": "2026-01-14",
    "Amount Spent ($)": "420.02",
    "Age": 59,
    "City": "Cartagena",
    "Payment Method": "Credit Card",
    "Last Login Date": "2026-03-08",
    "Membership Status": "Silver"
  },
  "TG-0008": {
    "Customer ID": "TG-0008",
    "Name": "Emilio Sanchez",
    "Email": "emilio.sanchez8@mailinator.com",
    "Product Purchased": "SSD Externo 1TB",
    "Purchase Date": "2025-12-02",
    "Amount Spent ($)": "1164.24",
    "Age": 33,
    "City": "Manizales",
    "Payment Method": "Debit Card",
    "Last Login Date": "2026-05-14",
    "Membership Status": "Gold"
  },
  "TG-0009": {
    "Customer ID": "TG-0009",
    "Name": "Victoria Rodriguez",
    "Email": "victoria.rodriguez9@mailinator.com",
    "Product Purchased": "Tablet AirView 11\"",
    "Purchase Date": "2025-12-25",
    "Amount Spent ($)": "2057.35",
    "Age": 42,
    "City": "Medellin",
    "Payment Method": "Debit Card",
    "Last Login Date": "2026-04-06",
    "Membership Status": "Gold"
  },
  "TG-0010": {
    "Customer ID": "TG-0010",
    "Name": "Camila Morales",
    "Email": "camila.morales10@mailinator.com",
    "Product Purchased": "Auriculares NoiseCancel Pro",
    "Purchase Date": "2026-06-11",
    "Amount Spent ($)": "2213.54",
    "Age": 63,
    "City": "Cartagena",
    "Payment Method": "Debit Card",
    "Last Login Date": "2026-07-10",
    "Membership Status": "Silver"
  },
  "TG-0011": {
    "Customer ID": "TG-0011",
    "Name": "Alejandro Castro",
    "Email": "alejandro.castro11@mailinator.com",
    "Product Purchased": "Teclado Mecanico RGB",
    "Purchase Date": "2026-02-21",
    "Amount Spent ($)": "1871.57",
    "Age": 46,
    "City": "Barranquilla",
    "Payment Method": "Debit Card",
    "Last Login Date": "2026-06-03",
    "Membership Status": "Platinum"
  },
  "TG-0012": {
    "Customer ID": "TG-0012",
    "Name": "Valentina Rodriguez",
    "Email": "valentina.rodriguez12@mailinator.com",
    "Product Purchased": "Parlante Bluetooth BassBoom",
    "Purchase Date": "2025-10-06",
    "Amount Spent ($)": "395.65",
    "Age": 27,
    "City": "Medellin",
    "Payment Method": "Bank Transfer",
    "Last Login Date": "2026-05-10",
    "Membership Status": "Platinum"
  },
  "TG-0013": {
    "Customer ID": "TG-0013",
    "Name": "Tomas Cruz",
    "Email": "tomas.cruz13@mailinator.com",
    "Product Purchased": "SSD Externo 1TB",
    "Purchase Date": "2025-07-22",
    "Amount Spent ($)": "2428.15",
    "Age": 45,
    "City": "Medellin",
    "Payment Method": "PayPal",
    "Last Login Date": "2026-07-05",
    "Membership Status": "Gold"
  },
  "TG-0014": {
    "Customer ID": "TG-0014",
    "Name": "Santiago Torres",
    "Email": "santiago.torres14@mailinator.com",
    "Product Purchased": "Camara WebCam HD Pro",
    "Purchase Date": "2025-07-18",
    "Amount Spent ($)": "408.85",
    "Age": 68,
    "City": "Cali",
    "Payment Method": "Credit Card",
    "Last Login Date": "2025-11-29",
    "Membership Status": "Gold"
  },
  "TG-0015": {
    "Customer ID": "TG-0015",
    "Name": "Renata Ortiz",
    "Email": "renata.ortiz15@mailinator.com",
    "Product Purchased": "Consola GameStation Mini",
    "Purchase Date": "2025-10-07",
    "Amount Spent ($)": "395.64",
    "Age": 38,
    "City": "Manizales",
    "Payment Method": "Credit Card",
    "Last Login Date": "2026-07-10",
    "Membership Status": "Gold"
  },
  "TG-0016": {
    "Customer ID": "TG-0016",
    "Name": "Julian Garcia",
    "Email": "julian.garcia16@mailinator.com",
    "Product Purchased": "Laptop UltraBook 14\"",
    "Purchase Date": "2025-12-21",
    "Amount Spent ($)": "2323.87",
    "Age": 27,
    "City": "Barranquilla",
    "Payment Method": "Credit Card",
    "Last Login Date": "2026-02-20",
    "Membership Status": "Bronze"
  },
  "TG-0017": {
    "Customer ID": "TG-0017",
    "Name": "Alejandro Morales",
    "Email": "alejandro.morales17@mailinator.com",
    "Product Purchased": "Auriculares NoiseCancel Pro",
    "Purchase Date": "2026-04-15",
    "Amount Spent ($)": "2445.30",
    "Age": 21,
    "City": "Pereira",
    "Payment Method": "Debit Card",
    "Last Login Date": "2026-05-01",
    "Membership Status": "Gold"
  },
  "TG-0018": {
    "Customer ID": "TG-0018",
    "Name": "Daniela Romero",
    "Email": "daniela.romero18@mailinator.com",
    "Product Purchased": "Smartwatch FitTrack 3",
    "Purchase Date": "2026-04-19",
    "Amount Spent ($)": "2411.47",
    "Age": 67,
    "City": "Cartagena",
    "Payment Method": "Bank Transfer",
    "Last Login Date": "2026-07-16",
    "Membership Status": "Gold"
  },
  "TG-0019": {
    "Customer ID": "TG-0019",
    "Name": "Gabriela Ortiz",
    "Email": "gabriela.ortiz19@mailinator.com",
    "Product Purchased": "Teclado Mecanico RGB",
    "Purchase Date": "2025-11-09",
    "Amount Spent ($)": "316.56",
    "Age": 70,
    "City": "Bogota",
    "Payment Method": "Debit Card",
    "Last Login Date": "2025-11-25",
    "Membership Status": "Silver"
  },
  "TG-0020": {
    "Customer ID": "TG-0020",
    "Name": "Sofia Martinez",
    "Email": "sofia.martinez20@mailinator.com",
    "Product Purchased": "Smartphone Pixel X",
    "Purchase Date": "2025-08-02",
    "Amount Spent ($)": "584.68",
    "Age": 20,
    "City": "Manizales",
    "Payment Method": "Debit Card",
    "Last Login Date": "2026-01-18",
    "Membership Status": "Gold"
  },
  "TG-0021": {
    "Customer ID": "TG-0021",
    "Name": "Felipe Morales",
    "Email": "felipe.morales21@mailinator.com",
    "Product Purchased": "Monitor UltraWide 27\"",
    "Purchase Date": "2026-05-05",
    "Amount Spent ($)": "1355.45",
    "Age": 40,
    "City": "Barranquilla",
    "Payment Method": "Bank Transfer",
    "Last Login Date": "2026-07-17",
    "Membership Status": "Platinum"
  },
  "TG-0022": {
    "Customer ID": "TG-0022",
    "Name": "Camila Hernandez",
    "Email": "camila.hernandez22@mailinator.com",
    "Product Purchased": "Mouse Inalambrico ErgoPlus",
    "Purchase Date": "2026-01-14",
    "Amount Spent ($)": "1652.90",
    "Age": 25,
    "City": "Pereira",
    "Payment Method": "Credit Card",
    "Last Login Date": "2026-05-02",
    "Membership Status": "Bronze"
  },
  "TG-0023": {
    "Customer ID": "TG-0023",
    "Name": "Mateo Gomez",
    "Email": "mateo.gomez23@mailinator.com",
    "Product Purchased": "Smartwatch FitTrack 3",
    "Purchase Date": "2025-09-10",
    "Amount Spent ($)": "2004.66",
    "Age": 56,
    "City": "Barranquilla",
    "Payment Method": "Bank Transfer",
    "Last Login Date": "2026-01-15",
    "Membership Status": "Silver"
  },
  "TG-0024": {
    "Customer ID": "TG-0024",
    "Name": "Diego Gonzalez",
    "Email": "diego.gonzalez24@mailinator.com",
    "Product Purchased": "Consola GameStation Mini",
    "Purchase Date": "2025-08-24",
    "Amount Spent ($)": "1165.16",
    "Age": 48,
    "City": "Manizales",
    "Payment Method": "Credit Card",
    "Last Login Date": "2026-04-07",
    "Membership Status": "Bronze"
  },
  "TG-0025": {
    "Customer ID": "TG-0025",
    "Name": "Renata Castro",
    "Email": "renata.castro25@mailinator.com",
    "Product Purchased": "Mouse Inalambrico ErgoPlus",
    "Purchase Date": "2025-11-15",
    "Amount Spent ($)": "2422.98",
    "Age": 14,
    "City": "Pereira",
    "Payment Method": "Bank Transfer",
    "Last Login Date": "2025-12-27",
    "Membership Status": "Silver"
  }
};

let customers = [];
let filteredCustomers = [];

const els = {
  kpiGrid: document.getElementById("kpiGrid"),
  tableBody: document.getElementById("customerTableBody"),
  resultCount: document.getElementById("resultCount"),
  searchInput: document.getElementById("searchInput"),
  membershipFilter: document.getElementById("membershipFilter"),
  membershipBars: document.getElementById("membershipBars"),
  hamburgerBtn: document.getElementById("hamburgerBtn"),
  primaryNav: document.getElementById("primaryNav"),
  refreshBtn: document.getElementById("refreshBtn"),
  lastUpdated: document.getElementById("lastUpdated"),
  addForm: document.getElementById("addCustomerForm"),
  submitBtn: document.getElementById("submitBtn"),
  formMessage: document.getElementById("formMessage"),
  nextIdPreview: document.getElementById("nextIdPreview"),
};

async function fetchCustomers() {
  try {
    const response = await fetch(FIREBASE_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (!data) throw new Error("Firebase devolvió datos vacíos");

    return Object.values(data);
  } catch (error) {

    console.warn(
      "[TrendGear] No se pudo conectar a Firebase, usando dataset demo local.",
      error
    );
    return Object.values(DEMO_DATA);
  }
}

function formatCurrency(value) {
  const n = typeof value === "string" ? parseFloat(value) : value;
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function formatDate(isoString) {
  const d = new Date(isoString + "T00:00:00");
  return d.toLocaleDateString("es-CO", { day: "2-digit", month: "short", year: "numeric" });
}

function renderKPIs(data) {
  const totalRevenue = data.reduce((sum, c) => sum + parseFloat(c["Amount Spent ($)"]), 0);
  const avgTicket = data.length ? totalRevenue / data.length : 0;
  const avgAge = data.length ? data.reduce((s, c) => s + Number(c.Age), 0) / data.length : 0;
  const uniqueCities = new Set(data.map((c) => c.City)).size;

  const kpis = [
    { label: "Ingresos totales", value: formatCurrency(totalRevenue) },
    { label: "Ticket promedio", value: formatCurrency(avgTicket) },
    { label: "Edad promedio", value: `${avgAge.toFixed(1)}`, unit: "años" },
    { label: "Ciudades activas", value: `${uniqueCities}` },
  ];

  els.kpiGrid.innerHTML = kpis
    .map(
      (kpi) => `
      <div class="kpi-card">
        <p class="kpi-label">${kpi.label}</p>
        <p class="kpi-value">${kpi.value}${kpi.unit ? `<span class="unit">${kpi.unit}</span>` : ""}</p>
      </div>
    `
    )
    .join("");
}

function renderTable(data) {
  els.resultCount.textContent = `${data.length} ${data.length === 1 ? "registro" : "registros"}`;

  if (data.length === 0) {
    els.tableBody.innerHTML = `
      <tr class="empty-row">
        <td colspan="7">No hay clientes que coincidan con tu búsqueda.</td>
      </tr>`;
    return;
  }

  let rowsHtml = "";
  data.forEach((customer) => {
    rowsHtml += `
      <tr>
        <td class="cell-name">
          ${customer.Name}
          <span class="cell-email">${customer.Email}</span>
        </td>
        <td>${customer["Product Purchased"]}</td>
        <td>${formatDate(customer["Purchase Date"])}</td>
        <td class="cell-amount">${formatCurrency(customer["Amount Spent ($)"])}</td>
        <td>${customer.City}</td>
        <td>${customer["Payment Method"]}</td>
        <td><span class="badge ${customer["Membership Status"]}">${customer["Membership Status"]}</span></td>
      </tr>
    `;
  });

  els.tableBody.innerHTML = rowsHtml;
}

function renderMembershipBars(data) {
  const counts = {};
  data.forEach((c) => {
    counts[c["Membership Status"]] = (counts[c["Membership Status"]] || 0) + 1;
  });

  const max = Math.max(1, ...Object.values(counts));
  const order = ["Platinum", "Gold", "Silver", "Bronze"];

  els.membershipBars.innerHTML = order
    .filter((status) => counts[status])
    .map(
      (status) => `
      <div class="membership-bar-row">
        <span class="membership-bar-label">${status}</span>
        <div class="membership-bar-track">
          <div class="membership-bar-fill" style="width: ${(counts[status] / max) * 100}%"></div>
        </div>
        <span class="membership-bar-count">${counts[status]}</span>
      </div>
    `
    )
    .join("");
}

function populateMembershipFilter(data) {
  const statuses = [...new Set(data.map((c) => c["Membership Status"]))].sort();
  els.membershipFilter.innerHTML =
    `<option value="">Toda membresía</option>` +
    statuses.map((s) => `<option value="${s}">${s}</option>`).join("");
}

function applyFilters() {
  const query = els.searchInput.value.trim().toLowerCase();
  const membership = els.membershipFilter.value;

  filteredCustomers = customers.filter((c) => {
    const matchesQuery =
      !query ||
      c.Name.toLowerCase().includes(query) ||
      c.City.toLowerCase().includes(query) ||
      c["Product Purchased"].toLowerCase().includes(query);
    const matchesMembership = !membership || c["Membership Status"] === membership;
    return matchesQuery && matchesMembership;
  });

  renderTable(filteredCustomers);
}

function setupHamburger() {
  els.hamburgerBtn.addEventListener("click", () => {
    const isOpen = els.primaryNav.classList.toggle("open");
    els.hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    els.hamburgerBtn.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  els.primaryNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      els.primaryNav.classList.remove("open");
      els.hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function generateNextId(data) {
  const nums = data
    .map((c) => parseInt(String(c["Customer ID"] || "").replace("TG-", ""), 10))
    .filter((n) => !isNaN(n));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return `TG-${String(next).padStart(4, "0")}`;
}

function updateNextIdPreview() {
  if (els.nextIdPreview) {
    els.nextIdPreview.textContent = generateNextId(customers);
  }
}

function validateNewCustomer(record) {
  const errors = [];
  const today = new Date().toISOString().slice(0, 10);

  if (!record.Name || !record.Name.trim()) {
    errors.push("El nombre es obligatorio.");
  }

  const email = record.Email || "";
  const domain = email.split("@")[1] || "";
  if (!email.includes("@") || !ALLOWED_EMAIL_DOMAINS.includes(domain)) {
    errors.push(`El correo debe usar un dominio seguro de pruebas (${ALLOWED_EMAIL_DOMAINS.join(" o ")}).`);
  }

  const age = Number(record.Age);
  if (!Number.isInteger(age) || age < 13 || age > 100) {
    errors.push("La edad debe ser un numero entero entre 13 y 100.");
  }

  const amount = Number(record["Amount Spent ($)"]);
  if (isNaN(amount) || amount < 0) {
    errors.push("El monto gastado debe ser un numero mayor o igual a 0.");
  }

  const purchaseDate = record["Purchase Date"];
  const lastLogin = record["Last Login Date"];
  if (!purchaseDate || !lastLogin) {
    errors.push("Las dos fechas (compra y ultimo login) son obligatorias.");
  } else {
    if (purchaseDate > today || lastLogin > today) {
      errors.push("Ninguna fecha puede ser futura.");
    }
    if (purchaseDate > lastLogin) {
      errors.push("La fecha de compra no puede ser posterior al ultimo inicio de sesion.");
    }
  }

  if (!record["Product Purchased"]) errors.push("Selecciona un producto.");
  if (!record.City) errors.push("Selecciona una ciudad.");
  if (!record["Payment Method"]) errors.push("Selecciona un metodo de pago.");
  if (!record["Membership Status"]) errors.push("Selecciona un nivel de membresia.");

  return errors;
}

function showFormMessage(text, type) {
  els.formMessage.textContent = text;
  els.formMessage.className = `form-message ${type}`;
}

async function handleAddCustomer(event) {
  event.preventDefault();
  showFormMessage("", "");

  const formData = new FormData(els.addForm);
  const record = {
    "Customer ID": generateNextId(customers),
    "Name": (formData.get("Name") || "").trim(),
    "Email": (formData.get("Email") || "").trim().toLowerCase(),
    "Product Purchased": formData.get("Product Purchased") || "",
    "Purchase Date": formData.get("Purchase Date") || "",
    "Amount Spent ($)": Number(formData.get("Amount Spent ($)")).toFixed(2),
    "Age": Number(formData.get("Age")),
    "City": formData.get("City") || "",
    "Payment Method": formData.get("Payment Method") || "",
    "Last Login Date": formData.get("Last Login Date") || "",
    "Membership Status": formData.get("Membership Status") || "",
  };

  const errors = validateNewCustomer(record);
  if (errors.length) {
    showFormMessage(errors.join(" "), "error");
    return;
  }

  els.submitBtn.disabled = true;
  els.submitBtn.textContent = "Guardando…";

  try {
  
    const response = await fetch(`${FIREBASE_BASE_URL}${FIREBASE_NODE}/${record["Customer ID"]}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    customers.push(record);
    filteredCustomers = customers;

    renderKPIs(customers);
    populateMembershipFilter(customers);
    applyFilters();
    renderMembershipBars(customers);
    updateNextIdPreview();

    showFormMessage(`Cliente ${record["Customer ID"]} agregado correctamente.`, "success");
    els.addForm.reset();
  } catch (error) {

    console.warn("[TrendGear] No se pudo guardar el cliente en Firebase.", error);
    showFormMessage(
      "No se pudo guardar en Firebase. Verifica que las reglas de escritura (.write) esten habilitadas y que la URL del proyecto sea correcta.",
      "error"
    );
  } finally {
    els.submitBtn.disabled = false;
    els.submitBtn.textContent = "Agregar cliente";
  }
}

async function init() {
  setupHamburger();

  customers = await fetchCustomers();
  filteredCustomers = customers;

  renderKPIs(customers);
  populateMembershipFilter(customers);
  renderTable(filteredCustomers);
  renderMembershipBars(customers);
  updateNextIdPreview();

  els.lastUpdated.textContent = `Última actualización: ${new Date().toLocaleTimeString("es-CO")}`;

  els.searchInput.addEventListener("input", applyFilters);
  els.membershipFilter.addEventListener("change", applyFilters);
  els.addForm.addEventListener("submit", handleAddCustomer);
  els.refreshBtn.addEventListener("click", async () => {
    els.refreshBtn.textContent = "Actualizando…";
    customers = await fetchCustomers();
    applyFilters();
    renderKPIs(customers);
    renderMembershipBars(customers);
    updateNextIdPreview();
    els.lastUpdated.textContent = `Última actualización: ${new Date().toLocaleTimeString("es-CO")}`;
    els.refreshBtn.textContent = "Actualizar datos";
  });
}

document.addEventListener("DOMContentLoaded", init);
