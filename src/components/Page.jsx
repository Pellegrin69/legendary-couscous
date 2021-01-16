import React from 'react';
import {useParams} from 'react-router-dom'

const Page = () => {
    let {slug} = useParams()
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    );
};

export default Page;