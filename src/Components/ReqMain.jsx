import ClientList from './ClientList'
import LastChat from './LastChat'
import ReqMainStyles from './ReqMain.css'

export default function ReqMain() {
    const toggleLinkId = "toggleLink";
    return (
        <div className="request__container">
            <input type="checkbox" id="toggleLink" className='checkbox_invis' />
            <div id="div1" className="ClientList___container">
                <ClientList toggleId={toggleLinkId} />
            </div>
            <div id="div2" className="LastChat___container">
                <LastChat toggleId={toggleLinkId} />
            </div>
            <label htmlFor="toggleLink"></label>
        </div>
    )
}