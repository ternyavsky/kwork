import ChatStyles from './Chat.css'
import mngstyles from "./ChatManage.css"
import ChatManageStyles from './ChatManage.css'
import Attachphoto from '../attachphoto.svg'
import SendMessage from '../sendmessage.svg'
import Rename from '../rename.svg'
import { chatData } from '../api/request'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'



export default function Chat({ toggleListId, toggleBotId }) {
    const [chatId, setChatId] = useState("");
    const { pathname } = useLocation();
    function formatDate(date) {
        var d = new Date(date)
        var minutes = '' + d.getMinutes()
        var hour = '' + d.getHours();

        return [hour, minutes];
    }

    const [request, setRequest] = useState([]);

    useEffect(() => {

        chatData(pathname.slice(1)).then(res => {
            setRequest(res.data)
        })
    }, [])
    console.log(request)
    console.log(formatDate(request["created"]))

    return (
        <>

            <div className="Chat__container">
                {request.map(res => (
                    <>
                        {res["direction"] === "in" ? (
                            <div className="message">
                                <div className="message_contentc">
                                    <span className="sender">{res["user_name"]}</span>
                                    <span className="timestampc">{formatDate(res["created"])[0]}:{formatDate(res["created"])[1]}</span>
                                    <p className="message_text">{res["text"]}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="message my_message">
                                <div className="message_contento">
                                    <span className="sender">{res["user_name"]}</span>
                                    <span className="timestampo">{formatDate(res["created"])[0]}:{formatDate(res["created"])[1]}</span>
                                    <p className="message_text">{res["text"]}</p>
                                </div>
                            </div>
                        )}  
                        <div className="ButtonType__container">
                            <div className="ButtonList">
                                <input type="checkbox" id={toggleListId} className='Chat_checkbox' />
                                <label htmlFor={toggleListId}>К списку</label>
                            </div>
                            <div className="ButtonChat">
                                <input type="checkbox" id={toggleBotId} className='Chat_checkbox' />
                                <label htmlFor={toggleBotId}>Бот</label>
                            </div>
                        </div>
                        <div className="chat_rect_invis"></div>
                    </>
                )
                )}

            </div>
            <div className="ChatManage__container">

                <div class="modal fade" id="putbot" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title-cm modal-title mt-2 fs-5" id="staticBackdropLabel">Перевод на бота</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label htmlFor="#dropdown_cm" class="form-label-cm form-label">ТИП КЛИЕНТ</label>
                                <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                    <button class="dropdown_chatmanage btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Выберите
                                    </button>
                                    <ul class="dd_cm dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <label htmlFor="#dropdown_cm" class="form-label-cm form-label">ТИП КЛИЕНТ</label>
                                <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                    <button class="dropdown_chatmanage btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Выберите
                                    </button>
                                    <ul class="dd_cm dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="ButtonAccept mb-5">Перевод</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal fade" id="putcheck" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title-cm modal-title mt-2 fs-5" id="staticBackdropLabel">Перевод на бота</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="basic-url" class="form-label-cm form-label">Клиент ИНН</label>
                                    <div className="input_rename">
                                        <div class=" input-group">
                                            <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        </div>
                                        <img src={Rename} className='rename_icon_inn' alt="" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="basic-url" class="form-label-cm form-label">Имя клиента</label>
                                    <div className="input_rename">
                                        <div class=" input-group">
                                            <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        </div>
                                        <img src={Rename} className='rename_icon_inn' alt="" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="basic-url" class="form-label-cm form-label">Telephone</label>
                                    <div className="input_rename">
                                        <div class=" input-group">
                                            <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        </div>
                                        <img src={Rename} className='rename_icon_inn' alt="" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="basic-url" class="form-label-cm form-label">EMAIL</label>
                                    <div className="input_rename">
                                        <div class="input_forrename input-group">
                                            <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        </div>
                                        <img src={Rename} className='rename_icon_inn' alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="ButtonAccept mb-5">Выставить</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal fade" id="userdisable" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title-cm modal-title mt-2 fs-5" id="staticBackdropLabel">Отключение</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <label for="basic-url" class="form-label-cm form-label mb-2 ">Причина</label>
                                    <div class="input-group-cm input-group">
                                        <input type="text" class="chatmanage_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="ButtonAccept mb-5">Отключить</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="chat_tools">
                    <input class="input_chattools" type="text" placeholder="Введите текст" />
                    <a href="#/"><img src={Attachphoto} className=' img_sendmessage' alt="" /></a>
                    <a href="#/"><img src={SendMessage} className='img_chattools img_attachphoto' alt="" /></a>
                </div>
                <div className="ChangeDealStatus">
                    <button className="ButtonChange" type='button' data-bs-toggle="modal" data-bs-target="#putcheck">Выставить счет</button>
                    <button className="ButtonChange" type='button' data-bs-toggle="modal" data-bs-target="#putbot">Перевести на бота</button>
                    <button className="ButtonChange" type='button' data-bs-toggle="modal" data-bs-target="#userdisable">Отключить</button>
                </div>
                <div class="menu-container">
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" class="menu-button">
                        <div className='ButtonChange_open'>Открыть</div>
                    </label>
                    <ul class="menu-items">
                        <button className="ButtonChange_small">Выставить счет</button>
                        <button className="ButtonChange_small">Перевести на бота</button>
                        <button className="ButtonChange_small">Отключить</button>
                    </ul>
                </div>
            </div>
        </>

    )
}