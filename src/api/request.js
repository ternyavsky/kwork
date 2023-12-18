import axios from "axios"


export const getData = async () => {
    try {
        const res = await axios.get("http://127.0.0.1:5000/chats?group-by-user=1&limit=3")
        return res
    } catch (error) {
        console.log(error)
    }
}

export const requestData = async () => {
    try {

        const res = await axios.get("http://127.0.0.1:5000/chats?limit=5")
        return res
    } catch (error) {
        console.log(error)
    }
}

export const chatData = async (id) => {
    try {
        const res = await axios.get("http://127.0.0.1:5000/chats?limit=5")
        return res

    } catch (error) {
        console.log(error)
    }

}

export const PostForm = async (companyId, inn, contactName, contactPhone, contactEmail, marka, model) => {
    const res = await axios.post(`http://127.0.0.1:5000/contacts/${companyId}`,
        {
            companyId: companyId,
        }
    )
}

export const exclude = async (chatId, ignComment) => {
    console.log("call")
    try {
        const res = await axios.post(`http://127.0.0.1:5000/chats/${chatId}/ignore`, {
            ignoring_comment: ignComment
        })
        return
    } catch (error) {
        console.log(error)
    }
}