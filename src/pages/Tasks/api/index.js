import {api} from '../../../utils/axios'

const postTask = async (data) =>{
    await api.post("tasks.json", data)
}
export {postTask}