import Navbar from './Navbar'
import ReqMain from './ReqMain'
import Menu from './Menu'
import RequestsStyles from './Requests.css'

export default function Requests() {
    return (
        <div>
            <Menu />
            <Navbar />
            <div className="reqmain___container">
                <ReqMain />
            </div>
        </div>
    )
}