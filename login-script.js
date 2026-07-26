// ---------- Role-based field label/placeholder ----------

const roleSelect = document.getElementById("role");
const identifierLabel = document.getElementById("identifierLabel");
const identifierInput = document.getElementById("identifier");

const roleConfig = {
  student: {
    label: "Registration Number",
    placeholder: "Enter your registration number",
  },
  faculty: {
    label: "Registration Number",
    placeholder: "Enter your registration number",
  },
  admin: {
    // Placeholder until you decide what admins log in with
    label: "Admin ID",
    placeholder: "Enter your admin ID",
  },
};

roleSelect.addEventListener("change", () => {
  const config = roleConfig[roleSelect.value];
  if (config) {
    identifierLabel.textContent = config.label;
    identifierInput.placeholder = config.placeholder;
  }
});

// ---------- Password show/hide toggle ----------

const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleBtn.textContent = isHidden ? "🙈" : "👁";
  toggleBtn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
});

// ---------- Form submit (placeholder logic) ----------

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const role = roleSelect.value;
  const identifier = identifierInput.value.trim();
  const password = passwordInput.value;
  const rememberMe = document.getElementById("rememberMe").checked;

  if (!role || !identifier || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // TODO: replace this with a real authentication call (API/backend)
// TODO: replace this with a real authentication call (API/backend)
  console.log("Login attempt:", { role, identifier, rememberMe });
  window.location.href = "index.html";
});