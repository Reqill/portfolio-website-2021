import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

function Contact({ setScreen }) {
    useEffect(() => {
        setScreen(3)
    }, [])
    return (<div />);
}

export default Contact;