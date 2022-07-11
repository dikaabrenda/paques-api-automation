import testBase from "../config/testBase.service";

const path = `/api/group`
const groupId = localStorage.getItem('GroupId')
const InvalidId = ``

const groups = {
    POST: (data) => testBase.post(`${path}/add`, data),
    GET: () => testBase.get(`${path}/${groupId}`),
    INVALIDGET: () => testBase.get(`${path}/${InvalidId}`),
    UPDATE: (data) => testBase.put(`${path}/${groupId}`, data),
    DELETE: () => testBase.delete(`${path}/${groupId}`)
}

export default groups;