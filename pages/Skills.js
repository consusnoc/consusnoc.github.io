import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

export default class extends React.Component {
    render() {
        return(
            <Layout>
                <Sidebar/>
                <div className="content">
                    <h4>Technical Skills</h4>
                    <div className="sk_Content">HTML5</div>
                    <div className="sk_Content">CSS3</div>
                    <div className="sk_Content">JS / JQuery</div>
                    <div className="sk_Content">React/JSX</div>
                    <div className="sk_Content">Node.js</div>

                    <h4>Other Skills</h4>
                    <div className="sk_Content">Photoshop</div>
                    <div className="sk_Content">Illustrator</div>
                    <div className="sk_Content">UI/UX</div>
                    <div className="sk_Content">Sketch</div>
                </div>
            </Layout>
        )
    }
}