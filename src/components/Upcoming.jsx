import './Upcoming.css';

export default function Upcoming({ assignments }) {
    return (
        <div id='upcoming-root'>
            <p id='upcomingLabel'>Upcoming</p>
            {assignments.length > 0 ? (
                <ul id='due-list'>
                    {assignments.map((assignment, index) => (
                        <li key={index}>
                            <p>{assignment.title}</p>
                            <p className='date-container'>{assignment.dueDate}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-assignments">You're All Caught Up!</p>
            )}
        </div>
    );
}
