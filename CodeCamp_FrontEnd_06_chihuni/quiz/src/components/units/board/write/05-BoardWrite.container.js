import BoardWriteUI from './05-BoardWrite.presenter'
import {useRouter} from "next/router"


export default function BoardWrite() {
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/06-06-routed/83")
    }
    const onClickMove2 = () => {
        router.push("/06-06-routed/1212")
    }
    const onClickMove3 = () => {
        router.push("/06-06-routed/83013")
    }


    return (
        <BoardWriteUI 
        onClickMove1={onClickMove1} 
        onClickMove2={onClickMove2}
        onClickMove3={onClickMove3} 
        />
    )
}