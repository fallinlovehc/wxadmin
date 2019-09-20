import { Fetch } from '@utils/fetch'

const Order = {
    list: (data) => Promise.resolve(
        Fetch.get(
            '/orderManage/getOrderSystemList',
            data
        )
    )
}

export default Order