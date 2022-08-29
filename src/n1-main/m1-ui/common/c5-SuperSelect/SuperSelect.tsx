import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import classes from './SuperSelect.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, className,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => <option key={i} value={o}>{o}</option>) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalSelectClassName = `${classes.select} ${className ? className : ''}`

    return (
        <select onChange={onChangeCallback} {...restProps} className={finalSelectClassName}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
