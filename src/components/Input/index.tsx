import { InputHTMLAttributes } from "react"
import { InputBlock, InputLabel, InputStyled } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    value?: any
}

function Input({name, label, value, ...props}:InputProps) {
    return(
        <InputBlock>
            {label && (
                <InputLabel htmlFor={name}>
                    {label}
                </InputLabel>
            )}
            <InputStyled
                className="input"
                type="text"
                name={name}
                id={name}
                value={value} 
                {...props}
            />
        </InputBlock>
    )
}

export default Input