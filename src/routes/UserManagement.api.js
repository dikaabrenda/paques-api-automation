import testBase from "../config/testBase.service"

PATH = ``

const USER_MANAGEMENT = {
    POST: (data) => testBase.post(`${PATH}`, data)
}

export default USER_MANAGEMENT;