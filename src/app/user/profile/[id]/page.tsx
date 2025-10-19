interface Props {
    params: {
        id: string
    }
}

export default async function UserDetail({params}: Props){
    const {id} = await params;
    return (
        <div>
            <h1>User Detail</h1>
            <p>user id is: {id}</p>
        </div>
    )
}