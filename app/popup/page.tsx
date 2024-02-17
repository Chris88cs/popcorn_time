'use client'
import { useState } from "react";

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            {showModal &&
                <div>test<button onClick={() => setShowModal(false)}>Close Modal</button></div> 
            }
        </div>
    )
}