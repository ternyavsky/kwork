import LastChatStyles from './LastChat.css'

export default function LastChat({ toggleId }) {
    return (
        <div className="LastChat__container">
            <div className="Button__Back">
                <input type="checkbox" id={toggleId} className='ClientList_checkbox' />
                <label htmlFor={toggleId}>Вернуться назад</label>
            </div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Текст сообщения</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Длинное сообщениие с большой длинной</p>
                </div>
            </div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Длинное сообщениие с очень большой длиной, переносящихся сразу на три строки</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Очень длинное сообщениие с еще больше длиной чем в предыдущем сообщении, переносящихся сразу на четыре строки</p>
                </div>
            </div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Текст сообщения</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Мое сообщение</p>
                </div>
            </div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Текст сообщения</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Мое сообщение</p>
                </div>
            </div>
            <div class="Scrollbar_rect1"></div>
        </div>
    )
}