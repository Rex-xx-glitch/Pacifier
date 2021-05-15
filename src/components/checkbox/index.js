import React from 'react'
import {Cbox} from "../../styles/component";

export default function Checkbox({label, cB, id, checked, isCorrect, disabled}) {
    return (
        <Cbox checked={checked} onClick={ ()=> disabled === false && cB(id)} disabled={disabled} correct={isCorrect}>{label}</Cbox>
    )
}
