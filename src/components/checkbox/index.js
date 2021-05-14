import React, { useState } from 'react'
import {Cbox} from "../../styles/component";

export default function Checkbox({label, cB, id, checked}) {
    return (
        <Cbox checked={checked} onClick={()=> cB(id)}>{label}</Cbox>
    )
}
