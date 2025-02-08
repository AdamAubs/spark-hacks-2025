import './Upcoming.css'

export default function Upcoming() {
    return (
        <>
            <div id='upcoming-root'>
                
                <p id='upcomingLabel'>Upcoming</p>
                <ul id='due-list'>
                    <li className='due-item'>
                        <p>Homework 1: Using Figma</p>
                        <p className='date-container'>2/7/25</p>
                    </li>
                    <li className='due-item'>
                        <p>Homework 2: Creating Layouts With HTML & CSS!</p>
                        <p className='date-container'>2/7/25</p>
                    </li>
                    <li className='due-item'>
                        <p>Project 1 Part 1: Collab Prototype</p>
                        <p className='date-container'>2/7/25</p>
                    </li>
                    <li className='due-item'>
                        <p>Homework 3: Adding Functionality With Events</p>
                        <p className='date-container'>2/7/25</p>    
                    </li>
                    <li className='due-item'>
                        <p>Homework 4: More Styling....Colors!</p>
                        <p className='date-container'>2/7/25</p>
                    </li>
                    <li className='due-item'>
                        <p>Project 1 Part 2: Putting It All Together</p>
                        <p className='date-container'>2/7/25</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

function DueDate({date}) {
    return (
        <div className='date-container'>
            <p>{date}</p>
        </div>
    );
}