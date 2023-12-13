import axios from "axios"


export const getData = async () => {
    const res = await axios.get("http://127.0.0.1:5000/chats?group-by-user=1&limit=3")
    return res
}

export const requestData = async () => {
    const res = await axios.get("http://127.0.0.1:5000/chats?limit=5")
    return res
}

export const chatData = async (id) => {
    const res = await axios.get(`http://127.0.0.1:5000/chats/${id}`)
    return res

}

export const PostForm = async() => {
    const res = await 
}