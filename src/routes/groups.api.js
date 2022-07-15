import testBase from "../config/testBase.service";

const CreateGroup = `/api/group/add`
const ListGroup = `/api/groups`
const groupId = localStorage.getItem('GroupsId')
const InvalidId = `7d349b74-a9cc-4d9f-b1f3-c9fd7d4e4123`

const groups = {
    POST: (data) => testBase.post(`${CreateGroup}`, data),
    GET: () => testBase.get(`${ListGroup}/${groupId}`),
    INVALIDGET: () => testBase.get(`${ListGroup}/${InvalidId}`),
    UPDATE: (data) => testBase.put(`${path}/${groupId}`, data),
    DELETE: () => testBase.delete(`${path}/${groupId}`)
}

export default groups;