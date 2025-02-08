import profilepic from '../../public/profilepic.jpg'
import SideNavbar from '../components/CourseNavbar';
export default function Contacts() {
    
    return (
        <>
            <div className='flex -h-screen'>
                <SideNavbar/>
                <div className='flex-1'>
                <header className='text-2xl text-center p-2 pt-8'>Contacts</header>
                <ul className='contacts-list border-0 border-gray-300 rounded-lg p-2'>
                    <li>
                        <ContactCard name={"John Doe"} email={"johndoe@uic.edu"} />
                    </li>
                    <li>
                        <ContactCard name={"John Doe"} email={"johndoe@uic.edu"} />
                    </li>
                    <li>
                        <ContactCard name={"John Doe"} email={"johndoe@uic.edu"} />
                    </li>
                    <li>
                        <ContactCard name={"John Doe"} email={"johndoe@uic.edu"} />
                    </li>
                </ul>
                </div>

                

            </div>
        </>
    );
}

function ContactCard({name, email}) {
    return (
        <div className='flex items-center justify-betwee space-x-3 p-2 hover:bg-gray-100 rounded-md border-b-2 h-38'>
            <img src={profilepic} alt="Profile" className="rounded-full w-10 h-10" />
            <p className="font-semibold text-gray-800">{name}</p>
            <p>{email}</p>
        </div>
    );
}
