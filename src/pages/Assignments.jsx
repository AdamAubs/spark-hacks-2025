export default function Assignments() {
    
    return (
        <>
            <div>
                <ul>
                    <li>
                        <AssignmentCard />
                    </li>
                </ul>
            </div>
        </>
    );
}

function AssignmentCard({assignment}) {
    return (
        <div>
            <p>Assignment 1</p>
        </div> 
    );
}