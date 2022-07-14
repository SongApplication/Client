import React from "react";
import IconButton from '@mui/material/IconButton';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export default function BackButton() {
    const nav = useNavigate();

    return (
        <>
            <IconButton onClick={() => { nav("/") }}>
                <IoArrowBackCircle size={60} />
            </IconButton>
        </>
    )

}