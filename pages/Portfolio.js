import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

export default class extends React.Component {
    render() {
        return(
            <Layout>
                <Sidebar/>
                <div className="content">
                    <h4>Web</h4>
                    <a href="https://www.behance.net/consusnoc" target="_blank">Check out my Behance Portfolio</a>
                    <h4>UI/UX</h4>
                    <a href="https://github.com/consusnoc" target="_blank">Check out my Github Projects</a>
                </div>
            </Layout>
        )
    }
}