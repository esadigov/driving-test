import { useEffect, useState } from "react"
import ReactDom from "react-dom";

export const Error = (/* error: any, message: any*/) => {
    const [hasError, setError] = useState<boolean>(true)

    useEffect(() => {
        // console.log('INSIDE POPUP', error);

    }, [])
    return (
        <>
        </>
    )
}