// ---------- Sample data (replace with real API/database data later) ----------

const upcomingEvents = [
  { title: "Internal Assessment 2, Data Structures", date: "Mon, 28 Jul" },
  { title: "Guest Lecture, Seminar Hall", date: "Fri, 4 Aug" },
  { title: "Sports Day, Main Ground", date: "Mon, 7 Aug" },
  { title: "C++ Hackathon, CSE Dept.", date: "Tue, 8 Aug" },
];

const todaysSchedule = [
  { time: "9:00 AM", subject: "Operating Systems" },
  { time: "11:00 AM", subject: "Embedded Systems" },
  { time: "12:00 PM", subject: "Mathematics III" },
  { time: "2:00 PM", subject: "Devops" },
];

// ---------- Render functions ----------

function renderEvents() {
  const list = document.getElementById("eventsList");
  list.innerHTML = "";

  upcomingEvents.forEach(event => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="event-title">${event.title}</span>
      <span class="event-date">${event.date}</span>
    `;
    list.appendChild(li);
  });
}

function renderSchedule() {
  const list = document.getElementById("scheduleList");
  list.innerHTML = "";

  todaysSchedule.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="schedule-time">${item.time}</span>
      <span class="schedule-subject">${item.subject}</span>
    `;
    list.appendChild(li);
  });
}

// ---------- Sidebar navigation (placeholder page switching) ----------

function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item[data-page]");

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const page = item.getAttribute("data-page");
      console.log(`Navigating to: ${page}`);
      // TODO: hook this up to real page routing later
    });
  });
}

// ---------- Init ----------

document.addEventListener("DOMContentLoaded", () => {
  renderEvents();
  renderSchedule();
  setupNavigation();
});