import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <h1>Welcome to Name</h1>
            <Link to="/Store">Store</Link>
        </>
    );
}