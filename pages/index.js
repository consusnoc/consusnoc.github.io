//INDEX PAGE
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import MainContent from '../pages/MainContent'

export default class extends React.Component {
    render() {
        return ( 
            <Layout>
                <Sidebar />
                <MainContent />
            </Layout>
            
        )
    }
}