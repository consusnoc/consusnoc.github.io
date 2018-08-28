import Link from 'next/link'

export default class extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <img src="../static/img/me.jpg" alt="Personal photo"/>
                <nav>
                    <ul>
                        <Link href="/MainContent" as={ process.env.BACKEND_URL + '/MainContent'}>
                            <li><a href="#">About me</a></li>
                        </Link>
                        <Link href="/Portfolio" as={ process.env.BACKEND_URL + '/Portfolio'}>
                            <li><a href="#">Portfolio</a></li>
                        </Link>
                        <Link href="/Skills" as={ process.env.BACKEND_URL + '/Skills'}>
                            <li><a href="#">Skills</a></li>
                        </Link>
                    </ul>
                </nav>
                <div className="contact-icons">
                    <p>Contact me at<br/>
                    consueloleusnoc@gmail.com</p>
                    <ul>
                        <li><a href="https://www.behance.net/consusnoc" target="_blank"><i class="contact-icon fab fa-behance"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/consuelo-romano/" target="_blank"><i class="contact-icon fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/consusnoc" target="_blank"><i class="contact-icon fab fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/consusnoc/" target="_blank"><i class="contact-icon fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}