//INDEX PAGE
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default class extends React.Component {
    render() {
        return ( 
            <Layout>
                <Sidebar />
                <Content />
            </Layout>
            
        )
    }
}