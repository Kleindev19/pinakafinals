
import './Dashboard.css'; // Import ng CSS file
import React, { useState } from 'react'; // ✅ Idagdag ang { useState } sa curly braces
// ...

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



// ...
const FilterBar = () => {
    // State para i-track ang kasalukuyang pinili (Para gumana ang dropdown)
    const [institute, setInstitute] = useState('College of Engineering');
    const [yearLevel, setYearLevel] = useState('1st Year');
    const [section, setSection] = useState('All Sections');

    // Options Arrays (Para sa mga choices)
    const instituteOptions = [
        { label: 'Institute of Computer Studies', value: 'College of Computer' },
        { label: 'Institute of Education', value: 'College of Education' },
        { label: 'Institute of Business', value: 'College of Business' },
    ];
    
    const yearLevelOptions = [
        { label: '1st Year', value: '1st Year' },
        { label: '2nd Year', value: '2nd Year' },
        { label: '3rd Year', value: '3rd Year' },
        { label: '4th Year', value: '4th Year' },
    ];
    
    const sectionOptions = [
        { label: 'All Sections', value: 'All Sections' },
        { label: 'Section A', value: 'Section A' },
        { label: 'Section B', value: 'Section B' },
        { label: 'Section C', value: 'Section C' },
        { label: 'Section D', value: 'Section D' },
        // ... iba pang sections
    ];

    return (
        <section className="filters-section">
            
            {/* 1. INSTITUTE DROPDOWN */}
            <div className="filter-group">
                <label>Institute</label>
                <select 
                    value={institute} // Naka-link sa state
                    onChange={(e) => setInstitute(e.target.value)} // Ina-update ang state
                >
                    {/* Gumamit ng .map para i-render ang CHOICES */}
                    {instituteOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* 2. YEAR LEVEL DROPDOWN */}
            <div className="filter-group">
                <label>Year Level</label>
                <select
                    value={yearLevel}
                    onChange={(e) => setYearLevel(e.target.value)}
                >
                    {yearLevelOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* 3. SECTION DROPDOWN */}
            <div className="filter-group">
                <label>Section</label>
                <select
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                >
                    {/* NOTE: Palitan ang sectionLevelOptions ng sectionOptions */}
                    {sectionOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
};

// Siguraduhin na i-export ito para magamit sa Dashboard.jsx


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