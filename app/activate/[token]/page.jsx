"use client"

import { useRouter } from 'next/navigation';

const Activate = ( { params }) => {
    const { token } = params

      return (
        <>
            <div>This is the page to activate an account</div>
            <div>{token}</div>
        </>
    )
}

export default Activate