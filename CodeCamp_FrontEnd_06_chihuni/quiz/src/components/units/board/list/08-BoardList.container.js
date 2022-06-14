import BoardReadeUI from './08-BoardList.presenter'
import { FETCH_BOARD } from './08-BoardList.queries'

import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'


export default function BoardRead() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    console.log(data)

    return (
        <BoardReadeUI data={data}/>
    )

}
