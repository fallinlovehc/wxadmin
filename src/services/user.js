import { Fetch } from '@utils/fetch'

const User = {
    login: (data) => Promise.resolve(
        Fetch.post(
            '/auth/loginManage',
            data
        )
    )
}

export default User