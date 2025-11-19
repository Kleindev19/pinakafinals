import React from 'react';
import './Dashboard.css'; // Import ng CSS file

// --- HELPER COMPONENTS (Ihiwalay mo ito sa kani-kanilang file kapag lumaki ang project) ---

// 1. Header Component (Para sa Search Bar)
const Header = () => (
    <header className="dashboard-header">
        <div className="search-container">
            <i className="fas fa-search"></i>
            <input 
                type="text" 
                placeholder="Search students, sections..." 
                className="search-bar" 
            />
        </div>
        <div className="header-icons">
            <i className="fas fa-bell"></i>
            <i className="fas fa-user-circle"></i>
        </div>
    </header>
);

// 2. FilterBar Component
const FilterBar = () => {
    const filters = [
        { label: 'Institute', value: 'College of Engineering' },
        { label: 'Year Level', value: '1st Year' },
        { label: 'Section', value: 'All Sections' },
    ];
    return (
        <section className="filters-section">
            {filters.map((filter, index) => (
                <div className="filter-group" key={index}>
                    <label>{filter.label}</label>
                    <select value={filter.value} readOnly>
                        <option>{filter.value}</option>
                    </select>
                </div>
            ))}
        </section>
    );
};

// 3. ClassCard Component
const ClassCard = ({ title, subtitle, color, icon }) => (
    <div className="card class-card">
        <div className={`card-icon ${color}`}>
            <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="card-footer">
            <span className="card-link students"><i className="fas fa-users"></i> Students</span>
            <span className="card-link view">View <i className="fas fa-arrow-right"></i></span>
        </div>
    </div>
);

// 4. StatCard Component
const StatCard = ({ value, label, indicator, indicatorColor, icon, bgColor }) => (
    <div className="stat-card">
        <div className="stat-header">
            <div className={`stat-icon ${bgColor}`}>
                <i className={icon}></i>
            </div>
            <span className={`change-indicator ${indicatorColor}`}>{indicator}</span>
        </div>
        <h3>{value}</h3>
        <p>{label}</p>
    </div>
);


// --- MAIN DASHBOARD COMPONENT ---
function Dashboard() {
    
    // Sample Data (Dapat galing ito sa isang API o state)
    const classData = [
        { title: 'CS 101 - A', subtitle: 'Introduction to Programming', color: 'blue', icon: 'fas fa-laptop-code' },
        { title: 'CS 102 - B', subtitle: 'Data Structures', color: 'purple', icon: 'fas fa-cubes' },
        { title: 'CS 201 - A', subtitle: 'Database Systems', color: 'green', icon: 'fas fa-database' },
        { title: 'CS 202 - C', subtitle: 'Computer Networks', color: 'orange', icon: 'fas fa-server' },
        { title: 'CS 301 - A', subtitle: 'Artificial Intelligence', color: 'pink', icon: 'fas fa-brain' },
        { title: 'S 302 - B', subtitle: 'Security Management', color: 'red', icon: 'fas fa-lock' },
    ];

    const statData = [
        { value: '283', label: 'Total Students', indicator: '+12%', indicatorColor: 'green', icon: 'fas fa-users', bgColor: 'blue' },
        { value: '94.2%', label: 'Average Grade', indicator: '+5%', indicatorColor: 'green', icon: 'fas fa-chart-bar', bgColor: 'green' },
        { value: '87.5%', label: 'Attendance Rate', indicator: '-3%', indicatorColor: 'red', icon: 'fas fa-calendar-check', bgColor: 'purple' },
        { value: '7', label: 'Active Sections', indicator: '+6%', indicatorColor: 'green', icon: 'fas fa-layer-group', bgColor: 'orange' },
    ];

    return (
        <div className="dashboard-main-content">
            <Header />
            <FilterBar />

            {/* My Classes Section */}
            <section className="my-classes-section">
                <div className="section-header">
                    <div className="header-text">
                        <h2>My Classes</h2>
                        <p>Manage your sections and track student progress</p>
                    </div>
                    <button className="add-section-btn">
                        <i className="fas fa-plus"></i> Add Section
                    </button>
                </div>
                
                <div className="class-cards-grid">
                    {classData.map((data, index) => (
                        <ClassCard key={index} {...data} />
                    ))}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
                {statData.map((data, index) => (
                    <StatCard key={index} {...data} />
                ))}
            </section>
        </div>
    );
}

export default Dashboard;