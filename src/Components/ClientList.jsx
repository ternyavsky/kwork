import ClientListStyles from './ClientList.css'
import ChatIcon from '../ChatIcon.svg'
import Dollar from '../Dollar.svg'
import AWord from '../A.svg'
import WWord from '../W.svg'
import AvaClient from '../images.svg'
import Convert from '../Convert.svg'
import DropDownIcon from '../DropDownIcon.svg'
import Plus from '../Plus.svg'
import Rename from '../rename.svg'
import { getData } from '../api/request'
import { useState } from 'react'
import { useEffect } from 'react'


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('.');
}

export default function ClientList({ toggleId }) {
    const [request, setRequest] = useState([]);
    useEffect(() => {
        getData().then(res => {
            setRequest(res.data)
        })

    }, [])

    console.log(request)
    return (

        <div class="clientlist__container" id='clientlist_oflow'>
            <input type="checkbox" id={toggleId} className='ClientList_checkbox' />
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title-cl modal-title mt-3 fs-5" id="exampleModalLabel">Настройка данных пользователя</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modalclient_stroke row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label-cl form-label">ИНН</label>
                                        <div className="input_rename">
                                            <div class="input_forrename input-group">
                                                <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                            </div>
                                            <img src={Rename} className='rename_icon_inn' alt="" />
                                        </div>
                                    </div>
                                    <div class="modalinput_3 mb-3">
                                        <div>
                                            <label for="basic-url" class="form-label-cl form-label">ИМЯ КОНТАКТА</label>
                                            <div className="input_rename">
                                                <div class=" input-group">
                                                    <input type="text" class="clientlist_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                                </div>
                                                <img src={Rename} className='rename_icon' alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="basic-url" class="form-label-cl form-label">ТЕЛЕФОН</label>
                                            <div className="input_rename">
                                                <div class=" input-group">
                                                    <input type="text" class="clientlist_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                                </div>
                                                <img src={Rename} className='rename_icon' alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="basic-url" class="form-label-cl form-label">ПОЧТА</label>
                                            <div className="input_rename">
                                                <div class=" input-group">
                                                    <input type="text" class="clientlist_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                                </div>
                                                <img src={Rename} className='rename_icon' alt="" />
                                            </div>
                                        </div>
                                        <img src={Plus} alt="" style={{ marginTop: 23, width: 40 }} />
                                    </div>
                                    <div class="modaldropwown-2 mb-3">
                                        <div>
                                            <label htmlFor="#dropdown_cm" class="form-label-cm form-label">МАРКА</label>
                                            <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                                <button class="dropdown_chatmanage btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Выберите
                                                    <img src={DropDownIcon} alt="" />
                                                </button>
                                                <ul class="dd_cm dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="#dropdown_cm" class="form-label-cm form-label">МОДЕЛЬ</label>
                                            <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                                <button class="dropdown_chatmanage btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Выберите
                                                    <img src={DropDownIcon} alt="" />
                                                </button>
                                                <ul class="dd_cm dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img src={Plus} alt="" />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="#dropdown_cm" class="form-label-cm form-label">МОДЕЛЬ</label>
                                        <div class="dropdown mb-4" id='dropdown_cm'>
                                            <button class="dropdown_chatmanage_long btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Выберите
                                                <img src={DropDownIcon} alt="" />
                                            </button>
                                            <ul class=" dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="modal_button_cl">Добавить</button>
                        </div>
                    </div>
                </div>
            </div>


            {request.map((request) =>

            (

                <label htmlFor={toggleId} className='Client_toChat'>
                    <div class="Client">
                        <div class="Client_avatar">
                            <button type="button" class="modal_button_clientlist" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img src={request["avito_user_data"]["user_avatar"]} alt="" />
                            </button>
                        </div>
                        <div class="Client_data">
                            <div class="Client_data_line1">
                                <span className="Client_name">{request["client_data"]["name"]}</span>
                                <span className="Client_CompanyName">{request["client_data"]["company_name"]}</span>
                            </div>
                            <div className="Client_data_line2">
                                <span className="Client_marka">{request["last_message_of_each_chat"][0]["marka"]}</span>
                                <span className="Client_model">{request["last_message_of_each_chat"][0]["model"]}</span>
                            </div>
                            <div class="Client_data_line3">
                                <span className="Client_telephone">{request["client_data"]["phone"]}</span>
                                <span className="Client_email">{request["client_data"]["email"]}</span>
                            </div>
                            <div class="Client_data_line4">
                                <div className="first_line1">
                                    <div className="clientlist__line1">
                                        <span className="Client_date1">{formatDate(request["last_message_of_each_chat"][0]["created"])}</span>
                                        <div className="Client_fordate1_message">
                                            <span className='ClientList_status'>/{request["last_message_of_each_chat"][0]["shop"]}/ </span>
                                            <span className='Clientlist_status_message'>{request["last_message_of_each_chat"][0]["text"]}</span>
                                        </div>
                                    </div>
                                    <div className="clientlist_line_buttons">
                                        <a href="#/" className='ChatIcon_mr'><img src={ChatIcon} className='iconsize' alt="" /></a>
                                        <a href="#/"><img src={Dollar} className='iconsize' alt="" /></a>
                                        <a href="#/"><img src={AWord} className='iconsize' alt="" /></a>
                                    </div>
                                </div>
                                <div className="first_line">
                                    <div className="clientlist__line1">
                                        <span className="Client_date1">20.10.2023</span>
                                        <div className="Client_fordate1_message">
                                            <span className='Clientlist_status_message'>Здравствуйте! Регулятор нужен от cat 318</span>
                                        </div>
                                    </div>
                                    <div className="clientlist_line_buttons">
                                        <a href="#/" className='wwword'><img src={WWord} className='iconsize' alt="" /></a>
                                    </div>
                                </div>
                                <div className="first_line">
                                    <div className="clientlist__line1">
                                        <span className="Client_date1">15.10.2023</span>
                                        <div className="Client_fordate1_message">
                                            <span className='Clientlist_status_message'>Добрый день, интересует цена и срок поставки</span>
                                        </div>
                                    </div>
                                    <div className="clientlist_line_buttons">
                                        <a href="#/" className='ccchat'><img src={Convert} className='iconsize' alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label >
            )
            )
            }



            <div class="Scrollbar_rect"></div>

        </div >
    )
}