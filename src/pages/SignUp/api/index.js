import {api} from '../../../utils/axios'

const signup = async (data) =>{
    await api.post("/users/json", data)
}
export {signup}