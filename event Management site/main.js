let events = [
    {
        id: 1,
        title: "Tech Conference 2023",
        description: "Annual tech conference featuring the latest technology trends, expert speakers, and networking opportunities. Join us for workshops, panel discussions, and product demonstrations.",
        startDateTime: "2023-09-20T09:00",
        endDateTime: "2023-09-22T17:00",
        location: "Tech Center, San Francisco",
        category: "Conference",
        organizer: "TechEvents Inc.",
        maxAttendees: 500,
        attendees: ["user1", "user2", "user3", "user4"],
        isAttending: false,
        isOrganizing: false
    },
    {
        id: 2,
        title: "Web Development Workshop",
        description: "Hands-on workshop covering modern web development techniques including JavaScript frameworks, responsive design, and performance optimization.",
        startDateTime: "2023-09-15T10:00",
        endDateTime: "2023-09-15T16:00",
        location: "Innovation Hub, Seattle",
        category: "Workshop",
        organizer: "Code Academy",
        maxAttendees: 30,
        attendees: ["user1", "user5"],
        isAttending: true,
        isOrganizing: false
    },
    {
        id: 3,
        title: "Startup Networking Mixer",
        description: "Evening networking event for startup founders, investors, and industry professionals. Connect with like-minded entrepreneurs and potential partners.",
        startDateTime: "2023-09-25T18:00",
        endDateTime: "2023-09-25T21:00",
        location: "Downtown Lounge, Austin",
        category: "Networking",
        organizer: "Startup Community",
        maxAttendees: 100,
        attendees: ["user2", "user3"],
        isAttending: false,
        isOrganizing: false
    },
    {
        id: 4,
        title: "Summer Concert Series",
        description: "Outdoor concert featuring local bands and artists. Food trucks and beverages available. Bring your own blanket or lawn chair.",
        startDateTime: "2023-09-18T17:00",
        endDateTime: "2023-09-18T22:00",
        location: "Central Park, New York",
        category: "Concert",
        organizer: "City Events",
        maxAttendees: null,
        attendees: ["user1", "user2", "user3", "user4", "user5"],
        isAttending: true,
        isOrganizing: false
    },
    {
        id: 5,
        title: "Data Science Symposium",
        description: "Academic symposium on advances in data science, machine learning, and artificial intelligence. Research presentations and panel discussions.",
        startDateTime: "2023-10-05T08:30",
        endDateTime: "2023-10-07T16:30",
        location: "University Conference Center, Boston",
        category: "Conference",
        organizer: "Data Science Association",
        maxAttendees: 200,
        attendees: ["user5"],
        isAttending: false,
        isOrganizing: false
    },
    {
        id: 6,
        title: "Charity 5K Run/Walk",
        description: "Annual charity run/walk supporting local community programs. All fitness levels welcome. Registration includes t-shirt and refreshments.",
        startDateTime: "2023-09-24T08:00",
        endDateTime: "2023-09-24T12:00",
        location: "Riverside Park, Chicago",
        category: "Sports",
        organizer: "Community Foundation",
        maxAttendees: null,
        attendees: ["user1", "user4"],
        isAttending: false,
        isOrganizing: true
    },
    {
        id: 7,
        title: "Product Management Workshop",
        description: "One-day intensive workshop on product management methodologies, user research, and product roadmap development.",
        startDateTime: "2023-09-28T09:00",
        endDateTime: "2023-09-28T17:00",
        location: "Business Center, Denver",
        category: "Workshop",
        organizer: "PM Academy",
        maxAttendees: 25,
        attendees: ["user3"],
        isAttending: false,
        isOrganizing: true
    },
    {
        id: 8,
        title: "Wine Tasting Social",
        description: "Social event featuring wine tasting from local vineyards, paired with artisanal cheeses and chocolates. Network with professionals in a relaxed setting.",
        startDateTime: "2023-09-22T19:00",
        endDateTime: "2023-09-22T22:00",
        location: "Wine Cellar, Napa Valley",
        category: "Social",
        organizer: "Wine Enthusiasts",
        maxAttendees: 50,
        attendees: ["user2", "user5"],
        isAttending: true,
        isOrganizing: false
    }
];

// DOM Elements
const createEventBtn = document.getElementById("createEventBtn");
const mobilePlusBtn = document.getElementById("mobilePlusBtn");
const createEventModal = document.getElementById("createEventModal");
const closeCreateEventModal = document.getElementById("closeCreateEventModal");
const createEventForm = document.getElementById("createEventForm");
const eventsGrid = document.getElementById("eventsGrid");
const searchEvents = document.getElementById("searchEvents");
const categoryFilter = document.getElementById("categoryFilter");
const dateFilter = document.getElementById("dateFilter");
const emptyState = document.getElementById("emptyState");
const emptyStateCreateBtn = document.getElementById("emptyStateCreateBtn");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const myEventsList = document.getElementById("myEventsList");
const myEventsFilters = document.querySelectorAll(".my-events-filter");
const emptyMyEvents = document.getElementById("emptyMyEvents");
const emptyMyEventsCreateBtn = document.getElementById("emptyMyEventsCreateBtn");
const calendarGrid = document.getElementById("calendarGrid");
const calendarTitle = document.getElementById("calendarTitle");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const calendarEventsTitle = document.getElementById("calendarEventsTitle");
const calendarEventsList = document.getElementById("calendarEventsList");
const noCalendarEvents = document.getElementById("noCalendarEvents");
const eventDetailsModal = document.getElementById("eventDetailsModal");
const eventDetailsContent = document.getElementById("eventDetailsContent");
const confirmationModal = document.getElementById("confirmationModal");
const confirmationTitle = document.getElementById("confirmationTitle");
const confirmationMessage = document.getElementById("confirmationMessage");
const confirmationOkBtn = document.getElementById("confirmationOkBtn");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const themeToggle = document.getElementById("themeToggle");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

// State variables
let currentSearch = "";
let currentCategoryFilter = "";
let currentDateFilter = "";
let currentMyEventsFilter = "all";
let currentCalendarDate = new Date();
let selectedCalendarDate = new Date();

// Event Category Colors
const categoryColors = {
    "Conference": { bg: "bg-blue-100", text: "text-blue-800", darkBg: "dark:bg-blue-900", darkText: "dark:text-blue-200" },
    "Workshop": { bg: "bg-green-100", text: "text-green-800", darkBg: "dark:bg-green-900", darkText: "dark:text-green-200" },
    "Networking": { bg: "bg-purple-100", text: "text-purple-800", darkBg: "dark:bg-purple-900", darkText: "dark:text-purple-200" },
    "Social": { bg: "bg-pink-100", text: "text-pink-800", darkBg: "dark:bg-pink-900", darkText: "dark:text-pink-200" },
    "Concert": { bg: "bg-yellow-100", text: "text-yellow-800", darkBg: "dark:bg-yellow-900", darkText: "dark:text-yellow-200" },
    "Sports": { bg: "bg-red-100", text: "text-red-800", darkBg: "dark:bg-red-900", darkText: "dark:text-red-200" }
};

// Initialize theme
function initTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.documentElement.classList.add('dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    });
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
});

// Format date for display
function formatDate(dateString) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Format time for display
function formatTime(dateString) {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Date(dateString).toLocaleTimeString('en-US', options);
}

// Format date range for display
function formatDateRange(startDateString, endDateString) {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    const startOptions = { month: 'short', day: 'numeric' };
    const endOptions = { month: 'short', day: 'numeric', year: 'numeric' };

    if (startDate.getFullYear() !== endDate.getFullYear()) {
        // Different years
        return `${startDate.toLocaleDateString('en-US', endOptions)} - ${endDate.toLocaleDateString('en-US', endOptions)}`;
    } else if (startDate.getMonth() !== endDate.getMonth() || startDate.getDate() !== endDate.getDate()) {
        // Same year, different month or day
        return `${startDate.toLocaleDateString('en-US', startOptions)} - ${endDate.toLocaleDateString('en-US', endOptions)}`;
    } else {
        // Same day
        return startDate.toLocaleDateString('en-US', endOptions);
    }
}

// Check if date is today
function isToday(dateString) {
    const date = new Date(dateString);
    const today = new Date();

    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

// Check if date is tomorrow
function isTomorrow(dateString) {
    const date = new Date(dateString);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return date.getDate() === tomorrow.getDate() &&
        date.getMonth() === tomorrow.getMonth() &&
        date.getFullYear() === tomorrow.getFullYear();
}

// Check if date is within this week
function isThisWeek(dateString) {
    const date = new Date(dateString);
    const today = new Date();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday

    return date >= startOfWeek && date <= endOfWeek;
}

// Check if date is within this month
function isThisMonth(dateString) {
    const date = new Date(dateString);
    const today = new Date();

    return date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

// Filter events based on search, category, and date
function filterEvents() {
    let filteredEvents = events;

    // Apply search filter
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filteredEvents = filteredEvents.filter(event =>
            event.title.toLowerCase().includes(searchLower) ||
            event.description.toLowerCase().includes(searchLower) ||
            event.location.toLowerCase().includes(searchLower)
        );
    }

    // Apply category filter
    if (currentCategoryFilter) {
        filteredEvents = filteredEvents.filter(event => event.category === currentCategoryFilter);
    }

    // Apply date filter
    if (currentDateFilter) {
        if (currentDateFilter === "today") {
            filteredEvents = filteredEvents.filter(event => isToday(event.startDateTime));
        } else if (currentDateFilter === "tomorrow") {
            filteredEvents = filteredEvents.filter(event => isTomorrow(event.startDateTime));
        } else if (currentDateFilter === "week") {
            filteredEvents = filteredEvents.filter(event => isThisWeek(event.startDateTime));
        } else if (currentDateFilter === "month") {
            filteredEvents = filteredEvents.filter(event => isThisMonth(event.startDateTime));
        }
    }

    return filteredEvents;
}

// Display events in the grid
function displayEvents() {
    const filteredEvents = filterEvents();

    if (filteredEvents.length === 0) {
        eventsGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        eventsGrid.classList.remove('hidden');
        emptyState.classList.add('hidden');

        eventsGrid.innerHTML = "";

        filteredEvents.forEach(event => {
            const categoryStyle = categoryColors[event.category] || { bg: "bg-gray-100", text: "text-gray-800", darkBg: "dark:bg-gray-700", darkText: "dark:text-gray-200" };

            // Create event card
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in';
            eventCard.innerHTML = `
            <div class="relative">
                <div class="h-32 bg-gradient-to-r from-primary-light to-primary"></div>
                <div class="absolute top-2 right-2">
                    <span class="category-badge ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.darkBg} ${categoryStyle.darkText}">
                        ${event.category}
                    </span>
                </div>
                <div class="absolute bottom-0 left-4 transform translate-y-1/2">
                    <div class="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-primary dark:text-primary-light border-4 border-white dark:border-gray-700">
                        <span class="text-sm font-bold">${new Date(event.startDateTime).getDate()}</span>
                    </div>
                </div>
            </div>
            <div class="p-4 pt-8">
                <h3 class="font-medium text-lg mb-2 line-clamp-1">${event.title}</h3>
                <div class="flex items-start mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-sm text-gray-600 dark:text-gray-400">
                        ${formatDateRange(event.startDateTime, event.endDateTime)}
                    </span>
                </div>
                <div class="flex items-start mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">${event.location}</span>
                </div>
                <div class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="text-sm text-gray-600 dark:text-gray-400">
                        ${event.attendees.length} ${event.attendees.length === 1 ? 'attendee' : 'attendees'}
                        ${event.maxAttendees ? ` / ${event.maxAttendees}` : ''}
                    </span>
                </div>
                <button class="view-event-btn mt-4 w-full py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition" data-id="${event.id}">
                    View Details
                </button>
            </div>
        `;

            eventsGrid.appendChild(eventCard);

            // Add click event for view button
            eventCard.querySelector('.view-event-btn').addEventListener('click', () => {
                showEventDetails(event);
            });
        });
    }
}

// Filter My Events
function filterMyEvents() {
    let filteredEvents = events;

    if (currentMyEventsFilter === "organizing") {
        filteredEvents = filteredEvents.filter(event => event.isOrganizing);
    } else if (currentMyEventsFilter === "attending") {
        filteredEvents = filteredEvents.filter(event => event.isAttending && !event.isOrganizing);
    } else {
        filteredEvents = filteredEvents.filter(event => event.isAttending || event.isOrganizing);
    }

    // Sort by date (upcoming first)
    filteredEvents.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));

    return filteredEvents;
}

// Display My Events
function displayMyEvents() {
    const filteredEvents = filterMyEvents();

    if (filteredEvents.length === 0) {
        myEventsList.classList.add('hidden');
        emptyMyEvents.classList.remove('hidden');
    } else {
        myEventsList.classList.remove('hidden');
        emptyMyEvents.classList.add('hidden');

        myEventsList.innerHTML = "";

        filteredEvents.forEach(event => {
            const categoryStyle = categoryColors[event.category] || { bg: "bg-gray-100", text: "text-gray-800", darkBg: "dark:bg-gray-700", darkText: "dark:text-gray-200" };

            // Create event item
            const eventItem = document.createElement('div');
            eventItem.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in';
            eventItem.innerHTML = `
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-32 bg-primary p-4 flex flex-row md:flex-col items-center justify-center text-white">
                    <div class="text-center md:mb-2">
                        <div class="text-sm font-medium">${new Date(event.startDateTime).toLocaleDateString('en-US', { month: 'short' })}</div>
                        <div class="text-2xl font-bold">${new Date(event.startDateTime).getDate()}</div>
                    </div>
                    <div class="ml-4 md:ml-0 text-center">
                        <div class="text-xs">${formatTime(event.startDateTime)}</div>
                    </div>
                </div>
                <div class="p-4 flex-grow">
                    <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 class="font-medium text-lg">${event.title}</h3>
                        <span class="category-badge ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.darkBg} ${categoryStyle.darkText} mt-1 md:mt-0">
                            ${event.category}
                        </span>
                    </div>
                    <div class="flex items-start mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="text-sm text-gray-600 dark:text-gray-400">${event.location}</span>
                    </div>
                    <div class="flex items-center mt-4">
                        ${event.isOrganizing ?
                    '<span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Organizing</span>' :
                    '<span class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Attending</span>'
                }
                        <button class="view-event-btn ml-auto text-sm text-primary dark:text-primary-light hover:underline" data-id="${event.id}">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;

            myEventsList.appendChild(eventItem);

            // Add click event for view button
            eventItem.querySelector('.view-event-btn').addEventListener('click', () => {
                showEventDetails(event);
            });
        });
    }
}

// Build and display calendar
function buildCalendar() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    // Update calendar title
    calendarTitle.textContent = currentCalendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); // Day of week (0 = Sunday)

    // Clear calendar grid
    calendarGrid.innerHTML = "";

    // Add empty cells for days before the first day of month
    for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day p-1';
        calendarGrid.appendChild(emptyCell);
    }

    // Get today's date for highlighting
    const today = new Date();

    // Add calendar days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isToday = date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

        // Check if there are events on this day
        const eventsOnDay = events.filter(event => {
            const eventDate = new Date(event.startDateTime);
            return eventDate.getDate() === day &&
                eventDate.getMonth() === month &&
                eventDate.getFullYear() === year;
        });

        const hasEvents = eventsOnDay.length > 0;

        // Check if this is the selected date
        const isSelected = date.getDate() === selectedCalendarDate.getDate() &&
            date.getMonth() === selectedCalendarDate.getMonth() &&
            date.getFullYear() === selectedCalendarDate.getFullYear();

        const dayCell = document.createElement('div');
        dayCell.className = `calendar-day p-1 relative ${isToday ? 'today' : ''} ${hasEvents ? 'has-event' : ''}`;
        dayCell.innerHTML = `
        <button class="w-full h-full flex items-center justify-center rounded-full ${isSelected ? 'bg-primary text-white' : isToday ? 'font-bold' : ''} hover:bg-gray-200 dark:hover:bg-gray-700">
            ${day}
        </button>
    `;

        // Add click event to show events for this day
        dayCell.querySelector('button').addEventListener('click', () => {
            // Update selected date
            selectedCalendarDate = new Date(year, month, day);

            // Rebuild calendar to update selected date
            buildCalendar();

            // Show events for selected date
            showCalendarEvents(selectedCalendarDate);
        });

        calendarGrid.appendChild(dayCell);
    }

    // Show events for the selected date
    showCalendarEvents(selectedCalendarDate);
}

// Show events for a specific calendar date
function showCalendarEvents(date) {
    // Update events title
    calendarEventsTitle.textContent = `Events on ${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`;

    // Get events for the selected date
    const eventsOnDay = events.filter(event => {
        const eventDate = new Date(event.startDateTime);
        return eventDate.getDate() === date.getDate() &&
            eventDate.getMonth() === date.getMonth() &&
            eventDate.getFullYear() === date.getFullYear();
    });

    // Sort events by start time
    eventsOnDay.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));

    // Clear events list
    calendarEventsList.innerHTML = "";

    if (eventsOnDay.length === 0) {
        calendarEventsList.classList.add('hidden');
        noCalendarEvents.classList.remove('hidden');
    } else {
        calendarEventsList.classList.remove('hidden');
        noCalendarEvents.classList.add('hidden');

        // Add events to list
        eventsOnDay.forEach(event => {
            const categoryStyle = categoryColors[event.category] || { bg: "bg-gray-100", text: "text-gray-800", darkBg: "dark:bg-gray-700", darkText: "dark:text-gray-200" };

            const eventItem = document.createElement('div');
            eventItem.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-3 animate-fade-in';
            eventItem.innerHTML = `
            <div class="flex items-start">
                <div class="mr-3 flex-shrink-0">
                    <div class="w-12 text-center p-1 rounded-md bg-primary-light/10 dark:bg-primary-light/20">
                        <div class="text-xs text-primary dark:text-primary-light font-medium">${formatTime(event.startDateTime)}</div>
                    </div>
                </div>
                <div class="flex-grow">
                    <div class="flex flex-wrap items-start justify-between">
                        <h4 class="font-medium text-sm mb-1">${event.title}</h4>
                        <span class="category-badge ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.darkBg} ${categoryStyle.darkText} ml-1">
                            ${event.category}
                        </span>
                    </div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">${event.location}</div>
                    <button class="view-event-btn text-xs text-primary dark:text-primary-light hover:underline" data-id="${event.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;

            calendarEventsList.appendChild(eventItem);

            // Add click event for view button
            eventItem.querySelector('.view-event-btn').addEventListener('click', () => {
                showEventDetails(event);
            });
        });
    }
}

// Show event details
function showEventDetails(event) {
    const categoryStyle = categoryColors[event.category] || { bg: "bg-gray-100", text: "text-gray-800", darkBg: "dark:bg-gray-700", darkText: "dark:text-gray-200" };

    eventDetailsContent.innerHTML = `
    <div class="relative">
        <div class="h-32 bg-gradient-to-r from-primary-light to-primary"></div>
        <div class="absolute top-4 right-4">
            <button id="closeEventDetails" class="text-white hover:text-gray-200 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    
    <div class="p-6">
        <h2 class="text-xl font-bold mb-4">${event.title}</h2>
        
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="category-badge ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.darkBg} ${categoryStyle.darkText}">
                ${event.category}
            </span>
            
            ${event.isOrganizing ?
            '<span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-medium px-2.5 py-0.5 rounded-full">You\'re organizing</span>' :
            (event.isAttending ?
                '<span class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded-full">You\'re attending</span>' : '')
        }
        </div>
        
        <div class="space-y-4 mb-6">
            <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                    <div class="text-sm font-medium">${formatDate(event.startDateTime)}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                        ${formatTime(event.startDateTime)} - ${formatTime(event.endDateTime)}
                    </div>
                </div>
            </div>
            
            <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="text-sm">${event.location}</div>
            </div>
            
            <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div class="text-sm">Organized by ${event.organizer}</div>
            </div>
            
            <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div class="text-sm">
                    ${event.attendees.length} ${event.attendees.length === 1 ? 'attendee' : 'attendees'}
                    ${event.maxAttendees ? ` / ${event.maxAttendees}` : ''}
                </div>
            </div>
        </div>
        
        <div class="mb-6">
            <h3 class="text-md font-medium mb-2">About this event</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">${event.description}</p>
        </div>
        
        <div class="flex justify-end">
            ${!event.isOrganizing && !event.isAttending ? `
                <button id="rsvpButton" class="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition" data-id="${event.id}">
                    RSVP to Event
                </button>
            ` : (!event.isOrganizing ? `
                <button id="cancelRsvpButton" class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-6 rounded-lg transition" data-id="${event.id}">
                    Cancel RSVP
                </button>
            ` : `
                <button id="manageEventButton" class="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition" data-id="${event.id}">
                    Manage Event
                </button>
            `)}
        </div>
    </div>
`;

    // Show modal
    eventDetailsModal.classList.remove('hidden');

    // Add event listeners for buttons
    document.getElementById('closeEventDetails').addEventListener('click', () => {
        eventDetailsModal.classList.add('hidden');
    });

    document.querySelector('.modal-overlay').addEventListener('click', () => {
        eventDetailsModal.classList.add('hidden');
    });

    // RSVP button
    const rsvpButton = document.getElementById('rsvpButton');
    if (rsvpButton) {
        rsvpButton.addEventListener('click', () => {
            // Set attending to true
            const eventId = rsvpButton.dataset.id;
            const eventIndex = events.findIndex(e => e.id === parseInt(eventId));

            if (eventIndex !== -1) {
                events[eventIndex].isAttending = true;
                events[eventIndex].attendees.push('user1'); // Simulate adding current user

                // Update the UI
                eventDetailsModal.classList.add('hidden');
                displayEvents();
                displayMyEvents();
                buildCalendar();

                // Show confirmation
                showConfirmation("RSVP Successful", "You've been added to the attendee list for this event.");
            }
        });
    }

    // Cancel RSVP button
    const cancelRsvpButton = document.getElementById('cancelRsvpButton');
    if (cancelRsvpButton) {
        cancelRsvpButton.addEventListener('click', () => {
            // Set attending to false
            const eventId = cancelRsvpButton.dataset.id;
            const eventIndex = events.findIndex(e => e.id === parseInt(eventId));

            if (eventIndex !== -1) {
                events[eventIndex].isAttending = false;
                // Remove user from attendees (simulate)
                events[eventIndex].attendees = events[eventIndex].attendees.filter(a => a !== 'user1');

                // Update the UI
                eventDetailsModal.classList.add('hidden');
                displayEvents();
                displayMyEvents();
                buildCalendar();

                // Show confirmation
                showConfirmation("RSVP Cancelled", "You've been removed from the attendee list for this event.");
            }
        });
    }

    // Manage Event button (just a placeholder for now)
    const manageEventButton = document.getElementById('manageEventButton');
    if (manageEventButton) {
        manageEventButton.addEventListener('click', () => {
            // Close modal
            eventDetailsModal.classList.add('hidden');

            // Show toast notification
            showToast("Management functionality coming soon!");
        });
    }
}

// Create new event
function createEvent(eventData) {
    // Generate a new ID
    const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;

    // Create new event object
    const newEvent = {
        id: newId,
        title: eventData.title,
        description: eventData.description,
        startDateTime: eventData.startDateTime,
        endDateTime: eventData.endDateTime,
        location: eventData.location,
        category: eventData.category,
        organizer: "You", // Simulating current user as organizer
        maxAttendees: eventData.maxAttendees ? parseInt(eventData.maxAttendees) : null,
        attendees: [], // Start with empty attendees
        isAttending: false,
        isOrganizing: true // User is organizing this event
    };

    // Add to events array
    events.push(newEvent);

    // Update UI
    displayEvents();
    displayMyEvents();
    buildCalendar();

    // Show confirmation
    showConfirmation("Event Created", "Your event has been created successfully.");
}

// Show confirmation modal
function showConfirmation(title, message) {
    confirmationTitle.textContent = title;
    confirmationMessage.textContent = message;

    confirmationModal.classList.remove('hidden');
}

// Show toast notification
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.remove('hidden');

    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Initialize event listeners
function initEventListeners() {
    // Create Event Buttons
    createEventBtn.addEventListener('click', () => {
        createEventModal.classList.remove('hidden');
    });

    mobilePlusBtn.addEventListener('click', () => {
        createEventModal.classList.remove('hidden');
    });

    closeCreateEventModal.addEventListener('click', () => {
        createEventModal.classList.add('hidden');
    });

    // Create Event Form
    createEventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const eventData = {
            title: document.getElementById('eventTitle').value,
            description: document.getElementById('eventDescription').value,
            startDateTime: document.getElementById('eventStartDateTime').value,
            endDateTime: document.getElementById('eventEndDateTime').value,
            location: document.getElementById('eventLocation').value,
            category: document.getElementById('eventCategory').value,
            maxAttendees: document.getElementById('maxAttendees').value
        };

        // Create event
        createEvent(eventData);

        // Reset form
        createEventForm.reset();

        // Close modal
        createEventModal.classList.add('hidden');
    });

    // Search
    searchEvents.addEventListener('input', () => {
        currentSearch = searchEvents.value.trim();
        displayEvents();
    });

    // Category Filter
    categoryFilter.addEventListener('change', () => {
        currentCategoryFilter = categoryFilter.value;
        displayEvents();
    });

    // Date Filter
    dateFilter.addEventListener('change', () => {
        currentDateFilter = dateFilter.value;
        displayEvents();
    });

    // Empty State Create Button
    emptyStateCreateBtn.addEventListener('click', () => {
        createEventModal.classList.remove('hidden');
    });

    emptyMyEventsCreateBtn.addEventListener('click', () => {
        createEventModal.classList.remove('hidden');
    });

    // Tab Buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs
            tabButtons.forEach(btn => {
                btn.classList.remove('text-primary', 'dark:text-primary-light', 'border-primary', 'dark:border-primary-light');
                btn.classList.add('text-gray-500', 'dark:text-gray-400', 'border-transparent');
            });

            // Add active class to clicked tab
            button.classList.remove('text-gray-500', 'dark:text-gray-400', 'border-transparent');
            button.classList.add('text-primary', 'dark:text-primary-light', 'border-primary', 'dark:border-primary-light');

            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Show corresponding tab content
            const tabId = button.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });

    // My Events Filters
    myEventsFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filters
            myEventsFilters.forEach(f => {
                f.classList.remove('bg-primary', 'text-white');
                f.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            });

            // Add active class to clicked filter
            filter.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            filter.classList.add('bg-primary', 'text-white');

            // Update filter value
            currentMyEventsFilter = filter.dataset.filter;

            // Update display
            displayMyEvents();
        });
    });

    // Calendar Navigation
    prevMonth.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        buildCalendar();
    });

    nextMonth.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        buildCalendar();
    });

    // Confirmation OK Button
    confirmationOkBtn.addEventListener('click', () => {
        confirmationModal.classList.add('hidden');
    });
}

// Initialize app
function init() {
    // Initialize theme
    initTheme();

    // Initialize event listeners
    initEventListeners();

    // Display events
    displayEvents();

    // Display my events
    displayMyEvents();

    // Build calendar
    buildCalendar();

    // Set form date defaults
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(nextHour.getHours() + 1);
    nextHour.setMinutes(0);

    const endTime = new Date(nextHour);
    endTime.setHours(endTime.getHours() + 2);

    // Format for datetime-local input
    const formatDateTimeForInput = (date) => {
        return date.toISOString().slice(0, 16);
    };

    document.getElementById('eventStartDateTime').value = formatDateTimeForInput(nextHour);
    document.getElementById('eventEndDateTime').value = formatDateTimeForInput(endTime);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
