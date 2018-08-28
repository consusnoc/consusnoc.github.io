import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

export default class extends React.Component {
    render () {
        return ( 
            <Layout>
                <Sidebar/>
                <div className="content">
                <section className="hero">
                    <div class="hero-content">
                        <h1>Hi! I'm Consuelo.</h1>
                        <h3>I'm a web developer and designer</h3>
                        <p>I like to face challenges, work as a team and learn something new every day. I am passionate about front end development, pixel perfect design and its correct use on the web in order to improve browsing experiences and user interfaces.</p>
                    </div>
                </section>
                </div>
            </Layout>
        )
    }
}