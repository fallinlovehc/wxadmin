import { Fetch } from '@utils/fetch'

const Magazine = {
    list: (data) => Promise.resolve(
        Fetch.get(
            '/ebookManage/getEbookList',
            data
        )
    ),
    detail: (data) => Promise.resolve(
        Fetch.get(
            '/ebookManage/getEbookInfo',
            data
        )
    ),
}

export default Magazine