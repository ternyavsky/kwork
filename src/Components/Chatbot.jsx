import ChatBotStyles from './Chatbot.css'
import SendMessage from '../sendmessage.svg'
import photo from '../chatbot_photo.jpg'

export default function Chatbot() {
    return (
        <div>
            <div className="ChatBot__container">
                <div className="futurecont1"></div>
                <div className="message my_message">
                    <div className="message_content_chatbot">
                        <span className="sender">Бот</span>
                        <p className="message_text_chatbot">Lorem ipsum dolor sit amet elit.</p>
                    </div>
                    <div className="ChatBotButtonSend">
                        <div></div>
                        <img src={SendMessage} className='img_chattools' alt="" />
                    </div>
                </div>
                <div className="message my_message">
                    <div className="message_content_chatbot">
                        <span className="sender">Бот</span>
                        <p className="message_text_chatbot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum</p>
                    </div>
                    <div className="ChatBotButtonSend">
                        <div></div>
                        <img src={SendMessage} className='img_chattools' alt="" />
                    </div>
                </div>
                <div className="message my_message">
                    <div className="message_content_chatbot">
                        <span className="sender">Бот</span>
                        <p className="message_text_chatbot">Сообщение</p>
                        <p className="message_text_chatbot"><img src={photo} alt="" /></p>
                    </div>
                    <div className="ChatBotButtonSend">
                        <div></div>
                        <img src={SendMessage} className='img_chattools' alt="" />
                    </div>
                </div>
                <div class="Scrollbar_rect1"></div>
            </div>
        </div>
    )
}