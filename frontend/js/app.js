(() => {
  const $ = (s) => document.querySelector(s),
    ME = "Shahrul Nizam Bin Shahrin";
  const escapeHtml = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const P = {
    home: "M3 11l9-8 9 8M5 10v11h5v-6h4v6h5V10",
    doc: "M6 2h9l5 5v15H6zM14 2v6h6M9 13h7M9 17h7",
    users:
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21c0-4 3-7 7-7s7 3 7 7M17 4a4 4 0 0 1 0 7M19 14c2 1 3 4 3 7",
    cal: "M4 5h16v16H4zM4 10h16M8 3v4M16 3v4",
    user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.5-7 8-7s8 3 8 7",
    bell: "M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4",
    search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5",
    plus: "M12 5v14M5 12h14",
    ck: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12l3 3 5-6",
    clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 7v5l3 2",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    act: "M3 12h4l3-8 4 16 3-8h4",
    ar: "M5 12h14M13 6l6 6-6 6",
    ch: "M6 9l6 6 6-6",
    lf: "M15 18l-6-6 6-6",
    rt: "M9 18l6-6-6-6",
    ed: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4",
    clip: "M8 12.5l6.8-6.8a3.2 3.2 0 0 1 4.5 4.5l-9.2 9.2a5 5 0 0 1-7.1-7.1l9.2-9.2",
  };
  const i = (n) =>
    `<svg class="i" viewBox="0 0 24 24"><path d="${P[n]}"/></svg>`;
  const MON = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const fd = (s) => {
    const [y, m, d] = s.split("-");
    return +d + " " + MON[m - 1] + " " + y;
  };
  const MEM = [
    {
      n: "Noramierul Shafiq bin Sohpian",
      short: "Shafiq",
      r: "System Analyst & Requirements Engineer",
      e: "",
      b: "pb",
      a: "pk",
      o: null,
    },
    {
      n: "Hudson Oh Tze Yung",
      short: "Hudson",
      r: "Project Manager & Planning Coordinator",
      e: "",
      b: "pp",
      a: "pu",
      o: null,
    },
    {
      n: "Shahrul Nizam Bin Shahrin",
      short: "Nizam",
      r: "Estimation & Quality Assurance Engineer",
      e: "",
      b: "po",
      a: "y",
      o: null,
      you: 1,
    },
  ];
  const PC = {
      Completed: "ok",
      "In Progress": "pg",
      Ongoing: "on",
      "Not Started": "ns",
    },
    SN = ["Not Started", "In Progress", "Completed"];
  let T = [];
  // Initial lecturer task values follow the supplied design reference.
  const lecturerTask = {
    title: "Group & Project Information",
    assigned: "2026-10-02",
    deadline: "2026-10-15",
    status: "Ongoing",
  };
  let lecturerTab = "all",
    lecturerQuery = "",
    lecturerSubmission = null,
    lecturerUploaded = false;
  let tab = "all",
    Q = "",
    inv = [],
    pg = "home",
    teamActivityExpanded = false,
    dashboardTab = "all",
    dashboardSort = "earliest",
    memberQuery = "",
    memberNotice = "";
  const teamActivity = [];
  const teamDirectory = [
    {
      name: "RotiCanai",
      project: "Task management system",
      initials: ["N", "S", "H"],
      description:
        "A simple system to create, assign, track, and manage project task and deadlines",
      members: MEM.map((member) => ({ name: member.n, role: member.r })),
      theme: "peach",
    },
    {
      name: "Binary Brigade",
      project: "Clear Cache management system",
      description:
        "To create a system that detects, organises and clears extra device caches that take up space within the device.",
      initials: ["J", "H", "M"],
      members: [
        { name: "Jonas", role: "Project Manager & Planning Coordinator" },
        { name: "Harken", role: "Estimation & Quality Assurance Engineer" },
        { name: "Max", role: "System Analyst & Requirements Engineer" },
      ],
      ownerMember: "Jonas",
      theme: "lavender",
    },
    {
      name: "Nasi Lemak",
      project: "Library Management System",
      description: "A simple system to manage books, borrowing, returning, and student records.",
      initials: ["C", "V", "S"],
      members: [
        { name: "Chia Jia Jun", role: "Project Manager & Planning Coordinator" },
        { name: "Venessa Bong Chia Xuan", role: "Estimation & Quality Assurance Engineer" },
        { name: "Sydney Vicker", role: "System Analyst & Requirements Engineer" },
      ],
      theme: "mint",
    },
    {
      name: "PeaCock",
      project: "To-do list app",
      description: "application designed to help users manage and organize their daily tasks",
      initials: ["G", "H", "W"],
      members: [
        { name: "GERRAD", role: "System Analyst & Requirements Engineer" },
        { name: "HAZZER", role: "Project Manager & Planning Coordinator" },
        { name: "WESLEY", role: "Estimation & Quality Assurance Engineer" },
      ],
      theme: "rose",
    },
  ];
  let teamsTab = "all",
    currentViewedTeam = null,
    teamsQuery = "";
  const joinRequests = new Set();
  let teamRequests = [];

  const top = () =>
    `<div class="tr"><button class="bl" aria-label="Notifications">${i("bell")}</button><div class="pf"><span class="av" >N</span><div><b>Nizam</b><small>RotiCanai</small></div>${i("ch")}</div></div>`;
  const hd = (t, s) =>
    `<div class="tp"><div><h1>${t}</h1><p class="mu">${s}</p></div>${top()}</div>`;
  const lec = (showLink = true) =>
    `<div class="cd">
      <div class="ch">${i("doc")}<h3>Task from Lecturer</h3>${showLink ? `<a href="#lecturer">View Details ${i("ar")}</a>` : ""}</div>
      <div class="pn">
        <h4>Group &amp; Project Information</h4>
        <div class="ins lecturer-brief">
          <b>Lecturer Instructions</b>
          <p>Please provide the following info:</p>
          <ul class="required-info">
            <li>Group Name:</li>
            <li>Group Members:</li>
            <li>Project Name:</li>
            <li>Project Description:</li>
          </ul>
          <b>Roles:</b>
          <ol>
            <li>System Analyst &amp; Requirements Engineer</li>
            <li>Project Manager &amp; Planning Coordinator</li>
            <li>Estimation &amp; Quality Assurance Engineer</li>
          </ol>
        </div>
      </div>
    </div>`;
  const lecturerDetails = () => `
    <section class="lecturer-full-page" aria-labelledby="lecturer-detail-title">
      <div class="dashboard-topbar lecturer-page-topbar"><div class="dashboard-mobile-brand"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20C4 11 10 4 20 4c0 9-5 15-13 15M5 20c3-5 6-8 10-11"/></svg><b>CPS<span>1043</span></b></div>${top()}</div>
      <header class="lecturer-full-head">
        <a class="lecturer-back" href="#lecturer" aria-label="Back to lecturer tasks">${i("lf")}</a>
        <div class="lecturer-full-title"><h1 id="lecturer-detail-title">${escapeHtml(lecturerTask.title)}</h1><p>View the project details, requirements and submission uploaded by your lecturer.</p></div>
        <span class="lecturer-status"><span aria-hidden="true"></span>${escapeHtml(lecturerTask.status)}</span>
        <div class="lecturer-date"><span>${i("cal")}Assigned Date</span><b>${fd(lecturerTask.assigned)}</b></div>
        <div class="lecturer-date"><span>${i("cal")}Deadline</span><b>${fd(lecturerTask.deadline)}</b></div>
      </header>
      <div class="lecturer-detail-grid">
        <section class="lecturer-info-card">
          <h3>${i("doc")}Lecturer Instructions</h3>
          <div class="lecturer-instructions">
            <p>Please provide the following information:</p>
            <ul><li>Group Name</li><li>Group Members</li><li>Project Name</li><li>Project Description</li></ul>
            <div class="lecturer-role-list"><p><b>Roles:</b></p>
            <ol><li>System Analyst &amp; Requirements Engineer</li><li>Project Manager &amp; Planning Coordinator</li><li>Estimation &amp; Quality Assurance Engineer</li></ol></div>
          </div>
        </section>
        <div class="lecturer-side-cards">
          <section class="lecturer-upload-card" id="lecturer-upload-form">
            <h3>${i("clip")}Submission</h3>
            <label class="lecturer-dropzone" for="lecturer-file">
              <span class="lecturer-upload-icon" aria-hidden="true">${i("doc")}</span>
              <b>Upload your file here</b><span>PDF, DOCX, PPTX (Max 10MB)</span>
              <span class="lecturer-file-name" id="lecturer-file-name">${lecturerSubmission ? escapeHtml(lecturerSubmission.name) : ""}</span>
              <span class="lecturer-choose">Choose File</span>
              <input id="lecturer-file" name="file" type="file" accept=".pdf,.docx,.pptx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation" required>
            </label>
            <p class="lecturer-upload-message" id="lecturer-upload-message" role="status">${lecturerUploaded ? "Fail berjaya direkodkan dalam sesi ini." : lecturerSubmission ? "Fail dipilih. Tekan Hantar Tugasan untuk merekodkannya dalam sesi ini." : ""}</p>
            <button class="lecturer-submit" type="button" data-a="submitLecturerUpload">Hantar Tugasan</button>
          </section>
          <section class="lecturer-notes-card"><h3>${i("doc")}Additional Notes</h3><div class="lecturer-notes-empty">${i("doc")}<p>No additional notes from lecturer.</p></div></section>
        </div>
      </div>
    </section>`;
  const mem3 = () =>
    `<div class="cd"><div class="ch">${i("users")}<h3>Team Members (RotiCanai)</h3></div>${MEM.map((m) => `<div class="tl ${m.you ? "hl" : ""}"><span class="av">${(m.short || m.n)[0]}</span><div><b>${m.n}</b><div class="mu" style="font-size:.8125rem">${m.r}</div></div>${m.you ? '<span class="you">You</span>' : ""}</div>`).join("")}</div>`;

  function dashboardTasks() {
    return [{
      id: "lecturer-group-project",
      title: lecturerTask.title,
      date: lecturerTask.deadline,
      dateLabel: fd(lecturerTask.deadline),
      source: "Lecturer",
      status: lecturerTask.status === "Ongoing" ? "Ongoing" : lecturerTask.status,
      page: "lecturer",
    }];
  }

  function dashboardRows() {
    const matches = dashboardTasks()
      .filter((task) => dashboardTab === "all" || task.status === dashboardTab || (dashboardTab === "In Progress" && task.status === "Ongoing"))
      .sort((a, b) => dashboardSort === "earliest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
    return matches.length
      ? matches.map((task) => `<tr><td><a class="dashboard-task-link" href="#${task.page}">${escapeHtml(task.title)}</a></td><td>${task.source}</td><td><span class="dashboard-date">${i("cal")}${escapeHtml(task.dateLabel)}</span></td><td><span class="dashboard-status dashboard-status-${task.status.toLowerCase().replaceAll(" ", "-")}">${task.status}</span></td><td><a class="dashboard-task-action" href="#${task.page}" aria-label="Open ${escapeHtml(task.title)}">⋮</a></td></tr>`).join("")
      : '<tr><td colspan="5" class="dashboard-no-tasks">No tasks match this filter.</td></tr>';
  }

  function upcomingDashboardTasks() {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const list = [{ title: lecturerTask.title, date: lecturerTask.deadline, source: "Task from Lecturer", page: "lecturer" }];
    return list.filter((task) => new Date(`${task.date}T00:00:00`) >= now).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
  }

  const V = {
    home() {
      const tasks = dashboardTasks();
      const count = (status) => tasks.filter((task) => status === "In Progress" ? ["In Progress", "Ongoing"].includes(task.status) : task.status === status).length;
      const upcoming = upcomingDashboardTasks();
      const filters = [["all", "All", tasks.length], ["To Do", "To Do", count("To Do")], ["In Progress", "In Progress", count("In Progress")], ["Completed", "Completed", count("Completed")]];
      return `<div class="dashboard-topbar"><div class="dashboard-mobile-brand"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20C4 11 10 4 20 4c0 9-5 15-13 15M5 20c3-5 6-8 10-11"/></svg><b>CPS1043</b></div>${top()}</div>
<section class="dashboard-welcome"><div><h1>Welcome back, Nizam</h1><p class="dashboard-project"><b>RotiCanai</b><span></span>${escapeHtml(teamDirectory[0].project)}</p><p class="dashboard-welcome-note">Stay organised and keep track of your tasks and deadlines.</p></div><div class="dashboard-hero-art"><img src="assets/planner.svg" alt="Desk with a calendar, laptop, books and plants"><p>Plan<br>Organise<br>Make it happen</p></div></section>
<section class="dashboard-stats" aria-label="Task summary">${[["doc", "Total Tasks", tasks.length, "green"], ["list", "To Do", count("To Do"), "blue"], ["clock", "In Progress", count("In Progress"), "amber"], ["ck", "Completed", count("Completed"), "green"]].map(([icon, label, value, tone]) => `<article class="dashboard-stat"><span class="dashboard-stat-icon ${tone}">${i(icon)}</span><div><small>${label}</small><strong>${value}</strong></div></article>`).join("")}</section>
<section class="dashboard-content"><article class="dashboard-panel dashboard-my-tasks"><header class="dashboard-panel-heading"><h2>${i("doc")}My Tasks</h2><label class="dashboard-sort"><select id="dashboard-sort" aria-label="Sort tasks by due date"><option value="earliest" ${dashboardSort === "earliest" ? "selected" : ""}>Due Date (Earliest)</option><option value="latest" ${dashboardSort === "latest" ? "selected" : ""}>Due Date (Latest)</option></select></label></header><div class="dashboard-tabs" role="tablist" aria-label="Filter my tasks">${filters.map(([key, label, number]) => `<button type="button" role="tab" aria-selected="${dashboardTab === key}" class="${dashboardTab === key ? "selected" : ""}" data-a="dashboardTab" data-v="${key}">${label} (${number})</button>`).join("")}</div><div class="dashboard-table-scroll"><table class="dashboard-task-table"><thead><tr><th>Task Title</th><th>Source</th><th>Deadline</th><th>Status</th><th>Open</th></tr></thead><tbody id="dashboard-task-rows">${dashboardRows()}</tbody></table></div></article>
<aside class="dashboard-side"><section class="dashboard-panel dashboard-deadlines"><header class="dashboard-panel-heading"><h2>${i("cal")}Upcoming Deadlines</h2></header>${upcoming.length ? upcoming.map((task) => { const [, month, day] = task.date.split("-"); return `<a class="dashboard-deadline" href="#${task.page}"><span class="dashboard-deadline-date"><b>${day}</b><small>${MON[Number(month) - 1]}</small></span><span class="dashboard-deadline-copy"><b>${escapeHtml(task.title)}</b><small>${escapeHtml(task.source)}</small></span>${i("rt")}</a>`; }).join("") : '<p class="dashboard-empty">No upcoming deadlines.</p>'}</section><section class="dashboard-panel dashboard-members"><header class="dashboard-panel-heading"><h2>${i("users")}Team Members (RotiCanai)</h2><a href="#member">Manage</a></header>${MEM.map((member, index) => `<div class="dashboard-member"><span class="dashboard-member-avatar member-tone-${index}">${escapeHtml((member.short || member.n)[0])}</span><div><b>${escapeHtml(member.short || member.n)}</b><small>${escapeHtml(member.r)}</small></div>${member.you ? '<span class="dashboard-you">You</span>' : ""}</div>`).join("")}</section></aside></section>`;
    },

    lecturer() {
      return `<div class="lecturer-mobile-topbar"><b>CPS<span>1043</span></b>${top()}</div>${hd("Lecturer Task", "Tasks assigned by your lecturer")}
        <section class="lecturer-list" aria-label="Lecturer tasks">
          <div class="lecturer-toolbar">
            <div class="lecturer-tabs" role="group" aria-label="Filter by status">
              ${[
                ["all", "All Tasks"],
                ["completed", "Completed"],
              ]
                .map(
                  ([key, label]) =>
                    `<button type="button" data-a="lecturerTab" data-v="${key}" aria-pressed="${lecturerTab === key}" class="${lecturerTab === key ? "selected" : ""}">${label}</button>`,
                )
                .join("")}
            </div>
            <label class="sr lecturer-search">${i("search")}<input id="lecturer-search" type="search" placeholder="Search task..." aria-label="Search lecturer tasks" value="${escapeHtml(lecturerQuery)}"></label>
          </div>
          <div class="lecturer-table-panel">
            <div class="sc"><div class="tw"><table class="lecturer-table">
              <thead><tr><th scope="col">Task Title</th><th scope="col">Assigned Date</th><th scope="col">Deadline</th><th scope="col">Status</th><th scope="col">Action</th></tr></thead>
              <tbody id="lecturer-rows">${lecturerRows()}</tbody>
            </table></div></div>
            <span class="visually-hidden" id="lecturer-result" role="status"></span>
          </div>
</section>`;
    },

    "lecturer-details"() {
      return lecturerDetails();
    },

    team() {
      return `<div class="team-mobile-topbar"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20C4 11 10 4 20 4c0 9-5 15-13 15M5 20c3-5 6-8 10-11"/></svg><b>CPS<span>1043</span></b>${top()}</div>${hd("Team Task", "Manage and track tasks within your group")}<div class="cd pc team-group"><div class="hd"><span class="ib">${i("users")}</span><div><h3>RotiCanai</h3><div class="mu">${escapeHtml(teamDirectory[0].project)}</div></div><div class="team-member-total">${i("users")}<b>${MEM.length}</b><span>Group Members</span></div><a class="bt" href="#member">${i("users")}View Members</a></div></div>
<div class="cd pc team-work-area"><div class="tb2">${[
        ["all", "All Tasks"],
        ["my", "My Tasks"],
        ["on", "Ongoing"],
        ["done", "Completed"],
      ]
        .map(
          (x) =>
            `<button data-a="tab" data-v="${x[0]}" class="${tab === x[0] ? "on" : ""}">${x[1]}</button>`,
        )
        .join(
          "",
        )}<label class="sr team-search">${i("search")}<input id="q" value="${escapeHtml(Q)}" placeholder="Search tasks..." aria-label="Search tasks"></label><button class="bt d team-add" data-a="add">${i("plus")}Add Task</button></div>
<div class="team-table-wrap"><div class="sc"><table class="team-table"><thead><tr><th scope="col">Task Title</th><th scope="col">Assigned To</th><th scope="col">Due Date</th><th scope="col">Status</th><th scope="col">Actions</th></tr></thead><tbody id="rw">${rows()}</tbody></table></div></div></div>
<div class="team-panels"><section class="cd workload-card"><h3>Team Members Workload</h3>${MEM.map(
        (member, index) => {
          const tasks = T.filter((task) => task.w === member.n);
          const counts = [2, 1, 0].map(
            (status) => tasks.filter((task) => task.s === status).length,
          );
          return `<div class="workload-row"><span class="workload-avatar avatar-${index}">${member.n[0]}</span><div class="workload-name"><b>${member.n}</b><span>${tasks.length} tasks assigned</span></div><div class="workload-counts"><span class="workload-completed"><b>${counts[0]}</b><small>Completed</small></span><span class="workload-progress"><b>${counts[1]}</b><small>In Progress</small></span><span class="workload-not-started"><b>${counts[2]}</b><small>Not Started</small></span></div></div>`;
        },
      ).join("")}</section>
<section class="cd team-activity"><div class="ch"><h3>Recent Activity</h3>${teamActivity.length > 5 ? '<button type="button" class="activity-view-all" data-a="showTeamActivity">View all</button>' : ""}</div>${teamActivity.length ? teamActivity
        .slice(0, teamActivityExpanded ? teamActivity.length : 5)
        .map(
          (entry) =>
            `<div class="team-activity-row"><span class="activity-avatar avatar-${MEM.findIndex((member) => member.n === entry.who)}">${escapeHtml(entry.who[0])}</span><span class="activity-message">${escapeHtml(entry.who)} ${escapeHtml(entry.action)} "${escapeHtml(entry.task)}" <b class="activity-${entry.s.toLowerCase().replaceAll(" ", "-")}">${entry.s}</b></span><time>${escapeHtml(entry.when)}</time></div>`,
        )
        .join("") : '<p class="mu">No recent activity.</p>'}</section></div>`;
    },

    teams() {
      const title =
        teamsTab === "all"
          ? "All Teams"
          : teamsTab === "explore"
            ? "Explore Teams"
            : "Invitations";
      const subtitle =
        teamsTab === "all"
          ? "All teams in this class"
          : teamsTab === "explore"
            ? "Discover teams in this class"
            : "Team invitations waiting for your response";
      return `<div class="teams-mobile-topbar"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20C4 11 10 4 20 4c0 9-5 15-13 15M5 20c3-5 6-8 10-11"/></svg><b>CPS<span>1043</span></b>${top()}</div>${hd("Teams", "Manage your teams and collaborate on tasks")}
        <section class="teams-tabs-panel"><div class="teams-tabs" role="group" aria-label="Team views">${[
          ["all", "All Teams"],
        ]
          .map(
            ([key, label]) =>
              `<button type="button" data-a="teamsTab" data-v="${key}" aria-pressed="${teamsTab === key}" class="${teamsTab === key ? "selected" : ""}">${label}</button>`,
          )
          .join(
            "",
          )}</div><button type="button" class="teams-create" data-a="createTeam">${i("plus")}Create Team</button></section>
        <section class="teams-content"><header class="teams-content-head"><div><h2>${title}</h2><p>${subtitle}</p></div>${teamsTab !== "invitations" ? `<label class="sr teams-search">${i("search")}<input id="teams-search" type="search" placeholder="Search teams..." value="${escapeHtml(teamsQuery)}" aria-label="Search teams"></label>` : ""}</header>
          ${teamsTab === "invitations" ? `<div class="teams-empty">${i("users")}<b>No pending team invitations</b><span>Team invitations will appear here.</span></div>` : `<div class="teams-grid" id="teams-grid">${teamCards()}</div><p class="teams-empty-search" id="teams-empty-search" ${filteredTeams().length ? "hidden" : ""}>No teams match your search.</p>`}
        </section>`;
    },

    "team-overview"() {
      return renderTeamOverview();
    },

    "team-manage"() {
      return renderOwnTeamPage();
    },

    member() {
      const roles = [
        ["user", "System Analyst & Requirements Engineer"],
        ["list", "Project Manager & Planning Coordinator"],
        ["ck", "Estimation & Quality Assurance Engineer"],
      ];
      return `<div class="member-mobile-topbar"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20C4 11 10 4 20 4c0 9-5 15-13 15M5 20c3-5 6-8 10-11"/></svg><b>CPS<span>1043</span></b>${top()}</div>${hd("Member", "View and manage your group members")}
      <section class="member-team-card"><div class="member-team-summary"><span class="member-team-icon">${i("users")}</span><div class="member-team-copy"><h2>RotiCanai</h2><p>${escapeHtml(teamDirectory[0].project)}</p><div class="member-team-meta"><span>${i("users")}${MEM.length} members</span><span>${i("doc")}${escapeHtml(teamDirectory[0].project)}</span></div></div><div class="member-team-actions"><button type="button" class="member-invite-button" data-a="inv" aria-label="Invite Member">${i("users")}Invite Member</button><button type="button" class="member-team-more" aria-label="More team options">•••</button></div></div>
        <div class="member-tabs"><button type="button" class="selected" aria-current="page">Group Members</button></div></section>
      ${memberNotice ? `<p class="member-notice" role="status">${escapeHtml(memberNotice)}</p>` : ""}<section class="member-content"><article class="member-roster-card"><header class="member-roster-heading"><h2>${i("users")}Group Members (${MEM.length})</h2><label class="member-search">${i("search")}<input id="member-search" type="search" value="${escapeHtml(memberQuery)}" placeholder="Search member..." aria-label="Search members"></label></header><div class="member-table-scroll"><table class="member-table"><thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Status</th><th>Actions</th></tr></thead><tbody id="member-rows">${memberRows()}</tbody></table></div></article>
      <aside class="member-roles-card"><header><h2>${i("list")}Group Role Distribution</h2></header>${roles.map(([icon, role]) => `<article class="member-role-summary"><span class="member-role-icon">${i(icon)}</span><span class="member-role-title">${role}</span><span class="member-role-count"><b>${MEM.filter((member) => member.r === role).length}</b><small>members</small></span>${i("rt")}</article>`).join("")}</aside></section>`;
    },
  };

  function lecturerRows() {
    const matches =
      (lecturerTab === "all" ||
        lecturerTab === lecturerTask.status.toLowerCase()) &&
      lecturerTask.title
        .toLowerCase()
        .includes(lecturerQuery.trim().toLowerCase());
    return matches
      ? `<tr class="lecturer-task-row">
      <td><div class="lecturer-task-name"><span class="lecturer-doc">${i("doc")}</span><b>${escapeHtml(lecturerTask.title)}</b></div></td>
      <td class="lecturer-date-cell"><span class="lecturer-mobile-label">Assigned Date</span><time datetime="${lecturerTask.assigned}">${fd(lecturerTask.assigned)}</time></td>
      <td class="lecturer-date-cell"><span class="lecturer-mobile-label">Deadline</span><time datetime="${lecturerTask.deadline}">${fd(lecturerTask.deadline)}</time></td>
      <td class="lecturer-status-cell"><span class="lecturer-mobile-label">Status</span><span class="lecturer-status"><span aria-hidden="true"></span>${lecturerTask.status}</span></td>
      <td><button type="button" class="lecturer-open" data-a="lecturerDetails" aria-label="View task detail"><span>View Task Detail</span>${i("rt")}</button></td>
    </tr>`
      : '<tr><td colspan="5" class="lecturer-empty">No tasks found.</td></tr>';
  }

  function filteredTeams() {
    const query = teamsQuery.trim().toLowerCase();
    return teamDirectory.filter(
      (team) =>
        team.name.toLowerCase().includes(query) ||
        team.project.toLowerCase().includes(query),
    );
  }

  function memberRows() {
    const query = memberQuery.trim().toLowerCase();
    const matches = [...MEM].sort((a, b) => Number(!!b.you) - Number(!!a.you)).filter((member) => `${member.n} ${member.short || ""} ${member.r}`.toLowerCase().includes(query));
    return matches.sort((a, b) => Number(Boolean(b.you)) - Number(Boolean(a.you))).map((member) => `<tr><td><div class="member-person"><span class="member-avatar ${member.you ? "member-avatar-you" : ""}">${escapeHtml((member.short || member.n)[0])}</span><b>${escapeHtml(member.n)}${member.you ? ' <small>(You)</small>' : ""}</b></div></td><td><span class="member-role">${escapeHtml(member.r)}</span></td><td>${escapeHtml(member.e || "—")}</td><td>${member.o == null ? "—" : `<span class="member-online ${member.o ? "" : "offline"}"></span>${member.o ? "Online" : "Offline"}`}</td><td><span class="member-action-empty" aria-label="No actions available">—</span></td></tr>`).join("") || '<tr><td colspan="5" class="member-no-results">Tiada ahli sepadan dengan carian.</td></tr>';
  }

  function teamInitials(name) {
    const words = String(name)
      .trim()
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean);
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  function teamCards() {
    return filteredTeams()
      .map(
        (team, index) => `<article class="team-directory-card">
      <div class="directory-card-top"><span class="directory-monogram ${team.theme}">${escapeHtml(
        team.name
          .split(/\s|:/)
          .filter(Boolean)
          .map((word) => word[0])
          .join("")
          .slice(0, 2)
          .toUpperCase(),
      )}</span>${team.owner ? `<span class="directory-owner">♛ <b>Owner</b></span>` : ""}<button type="button" class="directory-more" data-a="viewTeam" data-v="${index}" aria-label="More options for ${escapeHtml(team.name)}" title="${escapeHtml(team.name)}">•••</button></div>
      <h3>${escapeHtml(team.name)}</h3><p class="directory-project">${escapeHtml(team.project)}</p>
      <div class="directory-members"><div class="directory-avatars">${team.initials
        .slice(0, 5)
        .map(
          (initial, memberIndex) =>
            `<span class="directory-avatar avatar-${memberIndex % 3}">${escapeHtml(initial)}</span>`,
        )
        .join("")}</div><span>${team.initials.length} members</span></div>
      <button type="button" class="directory-view" data-a="viewTeam" data-v="${index}">View Team ${i("rt")}</button>
    </article>`,
      )
      .join("");
  }

  function renderTeamOverview() {
    const team = currentViewedTeam || teamDirectory[1];
    const members =
      team.members ||
      team.initials.map((initial) => ({ name: initial, role: "Team Member" }));
    const requested = joinRequests.has(team.name);
    const monogram = team.name
      .split(/\s|:/)
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    return `<div class="overview-topbar"><a class="overview-back" href="#teams">${i("lf")}Back to Teams</a>${top()}</div>
      <header class="overview-heading"><h1>${escapeHtml(team.name)}</h1><p>Team overview</p></header>
      <div class="overview-notice">${i("act")}<span>You are viewing another team's overview. This is a read-only view and changes cannot be made.</span></div>
      <div class="overview-grid">
        <section class="overview-summary"><span class="overview-monogram ${team.theme}">${escapeHtml(monogram)}</span><div class="overview-team-copy"><div class="overview-team-title"><h2>${escapeHtml(team.name)}</h2><span class="read-only-badge">Read Only</span></div><p>${escapeHtml(team.project)}</p><div class="overview-meta"><span>${i("users")}${members.length} members</span><span class="project-active"><i></i>Project Active</span></div></div></section>
        <section class="overview-description"><h2>Project Description</h2><p>${escapeHtml(team.description || "Project description has not been added yet.")}</p></section>
        <section class="overview-members"><h2>Team Members and Roles</h2>${members.map((member, index) => `<article class="overview-member"><span class="overview-member-avatar member-tone-${index % 3}">${escapeHtml(member.name[0])}</span><div><b>${escapeHtml(member.name)}</b><p>${escapeHtml(member.role)}</p></div>${team.ownerMember === member.name ? '<span class="read-only-badge">Leader</span>' : ""}</article>`).join("")}</section>
        <aside class="overview-side"><section class="join-card"><h2><span>${i("plus")}</span>Join this Team</h2><b>Interested in contributing to this project?</b><p>Send a request to join this team. The team owner will review your request.</p><button type="button" class="request-join-button" data-a="requestJoin" ${requested ? "disabled" : ""}>${i("plus")}${requested ? "Request Sent" : "Request to Join Team"}</button></section><section class="team-access-card"><h3>${i("act")}Team Access</h3><p>This is a read-only team page.<br><span>You can request to join if allowed by the team owner.</span></p></section></aside>
      </div>`;
  }

  function renderOwnTeamPage() {
    const team = teamDirectory[0];
    return `<div class="own-team-page">
      <div class="own-team-breadcrumb"><a href="#teams">${i("lf")}Teams</a><span>›</span><b>${escapeHtml(team.name)}</b>${top()}</div>
      <section class="own-team-summary"><span class="own-team-mark">${escapeHtml(teamInitials(team.name))}</span><div class="own-team-title"><div><h1>${escapeHtml(team.name)}</h1><span class="own-team-badge">Your Team</span></div><p>${escapeHtml(team.project)}</p><div class="own-team-avatars">${MEM.map((m, index) => `<span class="own-avatar tone-${index % 5}">${escapeHtml((m.short || m.n)[0])}</span>`).join("")}<small>${MEM.length} members</small></div></div></section>
      <div class="own-team-grid">
        <section class="own-team-card own-description"><h2>Project Description</h2><p>${escapeHtml(team.description)}</p></section>
        <section class="own-team-card own-requests"><h2>Pending Join Requests <span>${teamRequests.length}</span></h2>${teamRequests.length ? teamRequests.map((request, index) => `<div class="own-request"><span class="own-avatar tone-4">${escapeHtml(request.initial)}</span><div><b>${escapeHtml(request.name)}</b><small>${escapeHtml(request.role)}</small></div><button class="own-reject" data-a="rejectTeamRequest" data-v="${index}">Reject</button><button class="own-accept" data-a="acceptTeamRequest" data-v="${index}">Accept</button></div>`).join("") : '<p class="own-empty">Tiada permintaan untuk menyertai pasukan.</p>'}</section>
        <section class="own-team-card own-members"><h2>Members &amp; Roles</h2>${MEM.map((m, index) => `<article class="own-member"><span class="own-avatar tone-${index % 5}">${escapeHtml((m.short || m.n)[0])}</span><div class="own-member-name"><b>${escapeHtml(m.n)}${m.you ? " (You)" : ""}</b><small>${escapeHtml(m.r)}</small></div><button class="own-more" type="button" aria-label="Pilihan untuk ${escapeHtml(m.n)}">•••</button></article>`).join("")}</section>
        <section class="own-team-card own-manage"><h2>Team Management</h2><button data-a="ownInvite">${i("users")}<span>Invite Member</span>${i("rt")}</button><button data-a="ownManageMembers">${i("users")}<span>Manage Members</span>${i("rt")}</button><button data-a="editOwnTeam">${i("ed")}<span>Edit Team Details</span>${i("rt")}</button><button class="own-leave" data-a="leaveOwnTeam">${i("lf")}<span>Leave Team</span>${i("rt")}</button></section>
      </div>
    </div>`;
  }

  function rows() {
    const q = Q.toLowerCase();
    const matching = T.filter(
        (t) =>
          (tab === "all" ||
            (tab === "my"
              ? t.w === ME
              : tab === "on"
                ? t.s === 1
                : t.s === 2)) &&
          t.t.toLowerCase().includes(q),
      );
    if (!matching.length) {
      const noTasksYet = T.length === 0;
      return `<tr class="team-empty-row"><td colspan="5"><div class="team-empty-state"><span class="team-empty-art">${i("doc")}</span><h3>${noTasksYet ? "No tasks found" : "No matching tasks"}</h3><p>${noTasksYet ? "There are no tasks assigned to your group yet. Start by adding a new task." : "Try another status or search term."}</p>${noTasksYet ? `<button type="button" class="bt d" data-a="add">${i("plus")}Add Task</button>` : ""}</div></td></tr>`;
    }
    return matching
        .sort((a, b) => (a.s === 2) - (b.s === 2) || (a.d < b.d ? -1 : 1))
        .map(
          (t) =>
            `<tr><td data-label="Task Title"><span class="team-mobile-label">Task Title</span><span class="team-task-title">${escapeHtml(t.t)}</span></td><td data-label="Assigned To"><span class="team-assignee"><span class="team-mini-avatar avatar-${MEM.findIndex((member) => member.n === t.w)}">${escapeHtml(t.w[0])}</span>${escapeHtml(t.w)}</span></td><td data-label="Due Date"><time datetime="${t.d}">${fd(t.d)}</time></td><td data-label="Status"><select class="team-status-select ${PC[SN[t.s]]}" data-id="${t.id}" aria-label="Status: ${escapeHtml(t.t)}">${SN.map((status, value) => `<option value="${value}" ${t.s === value ? "selected" : ""}>${status}</option>`).join("")}</select></td><td data-label="Actions"><button class="mo" data-a="cy" data-v="${t.id}" aria-label="Cycle status: ${escapeHtml(t.t)}" title="Cycle task status">...</button></td></tr>`,
        )
        .join("");
  }

  function ask(t, body, ok) {
    const df = $("#df");
    df.innerHTML = `<h3>${t}</h3>${body}<div class="ac"><button value="x" formnovalidate>Cancel</button><button class="pm" value="ok">Save</button></div>`;
    df.onsubmit = (e) => {
      if (e.submitter && e.submitter.value === "ok") ok(new FormData(df));
    };
    $("#dg").showModal();
  }
  const A = {
    dashboardTab(value) {
      dashboardTab = value;
      draw();
    },
    teamsTab(value) {
      teamsTab = value;
      draw();
    },
    viewTeam(value) {
      const team = filteredTeams()[Number(value)];
      if (!team) return;
      if (team.name === "RotiCanai") {
        location.hash = "team-manage";
        return;
      }
      currentViewedTeam = team;
      location.hash = "team-overview";
    },
    closeDirectoryTeam() {
      $("#dg").close();
    },
    rejectTeamRequest(value) {
      teamRequests.splice(Number(value), 1);
      draw();
    },
    acceptTeamRequest(value) {
      const [request] = teamRequests.splice(Number(value), 1);
      if (request && !MEM.some((member) => member.n === request.name)) {
        MEM.push({ n: request.name, r: request.role, e: "", b: "pb", a: "pk", o: null });
        teamDirectory[0].initials.push(request.initial);
        teamDirectory[0].members.push({ name: request.name, role: request.role });
      }
      draw();
    },
    ownInvite() { location.hash = "member"; },
    ownManageMembers() { location.hash = "member"; },
    editOwnTeam() {
      const team = teamDirectory[0];
      ask("Edit Team Details", `<label>Team Name<input name="name" required value="${escapeHtml(team.name)}"></label><label>Project Name<input name="project" required value="${escapeHtml(team.project)}"></label><label>Project Description<textarea name="description" required>${escapeHtml(team.description)}</textarea></label>`, (form) => {
        team.name = form.get("name").trim();
        team.project = form.get("project").trim();
        team.description = form.get("description").trim();
        draw();
      });
    },
    leaveOwnTeam() {
      ask("Leave Team", `<p>Are you sure you want to leave RotiCanai?</p>`, () => { location.hash = "teams"; });
    },
    openTeamTasks() {
      location.hash = "team";
    },
    requestJoin() {
      if (!currentViewedTeam) return;
      joinRequests.add(currentViewedTeam.name);
      draw();
    },
    createTeam() {
      const dialog = $("#dg"),
        form = $("#df");
      form.className = "task-add-form";
      form.innerHTML = `<header class="task-add-header"><h2>Create Team</h2><button type="button" class="task-add-close" data-a="closeCreateTeam" aria-label="Close">&times;</button></header><div class="task-add-fields"><label class="task-field task-field-wide"><span>Team Name <b>*</b></span><input name="teamName" maxlength="60" placeholder="Enter team name..." required autofocus><small class="team-name-count"><span id="team-name-count">0</span>/60</small></label><label class="task-field task-field-wide"><span>Project/Topic <b>*</b></span><input name="projectName" maxlength="100" placeholder="Enter your project or system name..." required><small class="team-name-count"><span id="project-name-count">0</span>/100</small></label><label class="task-field task-field-wide"><span>Description <small>(Optional)</small></span><textarea name="teamDescription" maxlength="200" placeholder="Enter team description..."></textarea><small class="team-name-count"><span id="team-description-count">0</span>/200</small></label><div class="task-field task-field-wide"><span>Team Initials</span><small class="team-initial-help">Automatically generated from team name</small><output class="team-initial-preview" id="team-initial-preview">--</output></div></div><div class="ac task-add-actions"><button type="button" data-a="closeCreateTeam">Cancel</button><button type="submit" name="action" value="create-team" class="pm">Create Team</button></div>`;
      form.oninput = (event) => {
        const field = event.target;
        if (field.name === "teamName") {
          $("#team-initial-preview").textContent = teamInitials(field.value) || "--";
          $("#team-name-count").textContent = String(field.value.length);
        } else if (field.name === "projectName") {
          $("#project-name-count").textContent = String(field.value.length);
        } else if (field.name === "teamDescription") {
          $("#team-description-count").textContent = String(field.value.length);
        }
      };
      form.onsubmit = (event) => {
        if (event.submitter?.value !== "create-team") return;
        event.preventDefault();
        const values = new FormData(form),
          name = values.get("teamName").trim(),
          project = values.get("projectName").trim(),
          description = values.get("teamDescription").trim();
        if (!name || !project) return;
        teamDirectory.unshift({
          name,
          project,
          initials: ["N"],
          description,
          owner: true,
          theme: "mint",
        });
        teamsTab = "all";
        teamsQuery = "";
        dialog.close();
        draw();
      };
      dialog.classList.add("task-add-dialog");
      dialog.addEventListener(
        "close",
        () => {
          dialog.classList.remove("task-add-dialog");
          form.classList.remove("task-add-form");
        },
        { once: true },
      );
      dialog.showModal();
    },
    closeCreateTeam() {
      $("#dg").close();
    },
    showTeamActivity() {
      teamActivityExpanded = !teamActivityExpanded;
      draw();
    },
    lecturerTab(value) {
      lecturerTab = value;
      draw();
      $(`[data-a="lecturerTab"][data-v="${value}"]`).focus();
      $("#lecturer-result").textContent = $(".lecturer-task-row")
        ? "1 task found."
        : "No tasks found.";
    },
    lecturerDetails() {
      location.hash = "lecturer-details";
    },
    closeLecturerDetails() {
      location.hash = "lecturer";
    },
    submitLecturerUpload() {
      if (!lecturerSubmission) {
        $("#lecturer-upload-message").textContent =
          "Sila pilih fail sebelum menghantar tugasan.";
        return;
      }
      $("#lecturer-upload-message").textContent =
        "Fail berjaya direkodkan dalam sesi ini. Sistem belum disambungkan ke storan server.";
      lecturerUploaded = true;
    },
    tab(v) {
      tab = v;
      draw();
    },
    cy(v) {
      const t = T[+v];
      t.s = (t.s + 1) % 3;
      draw();
    },
    add() {
      const dialog = $("#dg"),
        form = $("#df");
      form.className = "task-add-form";
      form.innerHTML = `<header class="task-add-header"><h2 id="add-task-title">Add Task</h2><button type="button" class="task-add-close" data-a="closeAddTask" aria-label="Close">&times;</button></header>
        <div class="task-add-fields">
          <label class="task-field task-field-wide"><span>Task Title <b>*</b></span><input name="t" type="text" maxlength="80" placeholder="Enter task title..." required autofocus></label>
          <label class="task-field task-field-wide"><span>Description <small>(Optional)</small></span><textarea name="description" maxlength="500" placeholder="Enter task description or details..."></textarea><small class="task-description-count"><span id="task-description-count">0</span>/500</small></label>
          <label class="task-field"><span>Assign To <b>*</b></span><select name="w" required><option value="" disabled selected>Select member...</option>${MEM.map((member) => `<option value="${escapeHtml(member.n)}">${escapeHtml(member.n)}</option>`).join("")}</select></label>
          <label class="task-field"><span>Due Date <b>*</b></span><input name="d" type="date" required></label>
          <label class="task-field"><span>Status <b>*</b></span><select name="s" required><option value="0" selected>●　Not Started</option><option value="1">●　In Progress</option><option value="2">●　Completed</option></select></label>
        </div>
        <div class="ac task-add-actions"><button type="button" data-a="closeAddTask">Cancel</button><button type="submit" name="action" value="add" class="pm">Add Task</button></div>`;
      form.onsubmit = (event) => {
        if (event.submitter?.value !== "add") return;
        event.preventDefault();
        const values = new FormData(form);
        const title = values.get("t").trim();
        if (!title) {
          form.elements.t.focus();
          return;
        }
        const task = {
          id: Math.max(-1, ...T.map((item) => item.id)) + 1,
          t: title,
          description: values.get("description").trim(),
          w: values.get("w"),
          d: values.get("d"),
          s: Number(values.get("s")),
        };
        T.push(task);
        teamActivity.unshift({
          who: ME,
          action: "created",
          task: task.t,
          s: SN[task.s],
          when: "just now",
        });
        dialog.close();
        draw();
      };
      dialog.classList.add("task-add-dialog");
      dialog.addEventListener(
        "close",
        () => {
          dialog.classList.remove("task-add-dialog");
          form.classList.remove("task-add-form");
        },
        { once: true },
      );
      dialog.showModal();
    },
    closeAddTask() {
      $("#dg").close();
    },
    inv() {
      ask(
        "Invite Member",
        `<label>Email<input name="e" type="email" required placeholder="name@student.edu.my"></label>`,
        (f) => {
          inv.push(f.get("e"));
          memberNotice = `Invitation to ${f.get("e")} saved for this session.`;
          draw();
        },
      );
    },
  };
  function draw() {
    const k = location.hash.slice(1) || "home";
    pg = Object.hasOwn(V, k) ? k : "home";
    document.body.dataset.page = pg;
    $("#nv").innerHTML = [
      ["home", "home", "Dashboard"],
      ["lecturer", "doc", "Lecturer Task"],
      ["team", "users", "Team Task"],
      ["teams", "users", "Teams"],
      ["member", "user", "Member"],
    ]
      .map(
        (x) =>
          `<a href="#${x[0]}" class="${pg === x[0] || (["team-overview", "team-manage"].includes(pg) && x[0] === "teams") || (pg === "lecturer-details" && x[0] === "lecturer") ? "on" : ""}" ${pg === x[0] || (["team-overview", "team-manage"].includes(pg) && x[0] === "teams") || (pg === "lecturer-details" && x[0] === "lecturer") ? 'aria-current="page"' : ""}>${i(x[1])}<span>${x[2]}</span></a>`,
      )
      .join("");
    $("#mn").innerHTML = V[pg]();
    prepareTables();
  }
  // Labels keep every table field readable when rows become mobile cards.
  function prepareTables() {
    document.querySelectorAll("main table").forEach((table) => {
      const headings = [...table.querySelectorAll("tr:first-child th")].map(
        (th) => th.textContent,
      );
      table.querySelectorAll("tr").forEach((row) => {
        row.querySelectorAll("td").forEach((cell, index) => {
          cell.dataset.label = headings[index] || "";
          if (cell.querySelector(":scope > .on2")) {
            const status = document.createElement("span");
            status.className = "member-status";
            while (cell.firstChild) status.append(cell.firstChild);
            cell.append(status);
          }
        });
      });
    });
    document.querySelectorAll(".sc").forEach((region) => {
      region.tabIndex = 0;
      region.setAttribute("role", "region");
      region.setAttribute("aria-label", "Senarai tugasan atau ahli");
    });
  }
  const mn = $("#mn");
  mn.addEventListener("click", (e) => {
    const b = e.target.closest("[data-a]");
    if (b) A[b.dataset.a](b.dataset.v);
  });
  mn.addEventListener("input", (e) => {
    if (e.target.id === "member-search") {
      memberQuery = e.target.value;
      $("#member-rows").innerHTML = memberRows();
      prepareTables();
    }
    if (e.target.id === "teams-search") {
      teamsQuery = e.target.value;
      $("#teams-grid").innerHTML = teamCards();
      $("#teams-empty-search").hidden = filteredTeams().length > 0;
    }
    if (e.target.id === "lecturer-search") {
      lecturerQuery = e.target.value;
      $("#lecturer-rows").innerHTML = lecturerRows();
      prepareTables();
      $("#lecturer-result").textContent = $(".lecturer-task-row")
        ? "1 task found."
        : "No tasks found.";
    }
    if (e.target.id === "q") {
      Q = e.target.value;
      $("#rw").innerHTML = rows();
      prepareTables();
    }
  });
  document.addEventListener("change", (e) => {
    if (e.target.id !== "lecturer-file") return;
    const file = e.target.files[0];
    const message = $("#lecturer-upload-message");
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      e.target.value = "";
      lecturerSubmission = null;
      $("#lecturer-file-name").textContent = "";
      message.textContent = "Fail melebihi had 10 MB. Sila pilih fail lain.";
      return;
    }
    lecturerSubmission = { name: file.name, size: file.size };
    lecturerUploaded = false;
    $("#lecturer-file-name").textContent = file.name;
    message.textContent =
      "Fail dipilih. Tekan Hantar Tugasan untuk merekodkannya dalam sesi ini.";
  });
  $("#df").addEventListener("click", (e) => {
    const button = e.target.closest("[data-a]");
    if (button) A[button.dataset.a]?.(button.dataset.v);
  });
  $("#df").addEventListener("input", (e) => {
    if (e.target.name === "description")
      $("#task-description-count").textContent = String(e.target.value.length);
  });
  mn.addEventListener("keydown", (e) => {
  });
  mn.addEventListener("change", (e) => {
    if (e.target.id === "dashboard-sort") {
      dashboardSort = e.target.value;
      $("#dashboard-task-rows").innerHTML = dashboardRows();
      return;
    }
    if (e.target.matches(".team-status-select")) {
      const task = T.find((item) => item.id === Number(e.target.dataset.id));
      if (!task) return;
      task.s = Number(e.target.value);
      teamActivity.unshift({
        who: ME,
        action: "updated",
        task: task.t,
        s: SN[task.s],
        when: "just now",
      });
      draw();
      return;
    }
    if (e.target.classList.contains("ck")) {
      const t = T[+e.target.dataset.id];
      t.s = e.target.checked ? 2 : t.s === 2 ? 1 : t.s;
      draw();
    }
  });
  addEventListener("hashchange", () => {
    draw();
    scrollTo(0, 0);
  });
  draw();
  const previewNotice = $("#preview-notice");
  const previewNoticeStorageKey = "cps1043-hide-frontend-preview-notice";
  let hidePreviewNotice = false;
  try {
    hidePreviewNotice = localStorage.getItem(previewNoticeStorageKey) === "true";
  } catch {
    // The notice still works in browsers that block local storage.
  }
  if (!hidePreviewNotice) previewNotice.showModal();
  $("#preview-notice-close").addEventListener("click", () => previewNotice.close());
  $("#preview-notice-confirm").addEventListener("click", () => {
    if ($("#preview-notice-no-show").checked) {
      try {
        localStorage.setItem(previewNoticeStorageKey, "true");
      } catch {
        // Closing the notice does not depend on browser storage.
      }
    }
    previewNotice.close();
  });
})();
