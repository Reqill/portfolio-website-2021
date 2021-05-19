import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

function NotFound({ setScreen }) {
    useEffect(() => {
        setScreen(5)
    }, [])
    return (<div />);
}

export default NotFound;