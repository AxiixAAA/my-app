import React from "react"
import s from "./FormsControls.module.css"


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
        return <div className={s.FormsControl + " " + (hasError ? s.error : "")}>
        <div> <textarea {...input} {...props}/> </div>
        {/* Если этот элемент был тронут touched и meta.error то покажет спан*/}
        { hasError && <span>{meta.error}</span> }
        </div>
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
        return <div className={s.FormsControl + " " + (hasError ? s.error : "")}>
        <div> <input {...input} {...props}/> </div>
        {/* Если этот элемент был тронут touched и meta.error то покажет спан*/}
        { hasError && <span>{meta.error}</span> }
        </div>
}