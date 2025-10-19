'use client'
import { useRouter } from 'next/navigation'


interface Props {
    params: {
        slug: string
    }
}

export default async function ProductPage({params}: Props){
    const { slug } = await params;
    // const router = useRouter();

    // console.log(router);
    
    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID: {slug}</p>
        </div>
    )
}