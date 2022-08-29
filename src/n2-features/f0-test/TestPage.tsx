import React, {useState} from 'react';
import SuperInputText from '../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText';
import classes from './Test.module.scss';
import SuperButton from '../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../../n1-main/m1-ui/common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperSelect from '../../n1-main/m1-ui/common/c5-SuperSelect/SuperSelect';
import SuperRadio from '../../n1-main/m1-ui/common/c6-SuperRadio/SuperRadio';

export const TestPage = () => {

    const [inputText, setInputText] = useState<string>('')
    const error = inputText ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('type something...')
        } else {
            alert(inputText)
        }
    }

    const [checkboxStatus, setCheckboxStatus] = useState<boolean>(false)
    const [spanValue, setSpanValue] = useState<string>('')

    const arr = ['a', 'ab', 'abc', 'abcd', 'abcde']
    const [value, onChangeOption] = useState(arr[2])

    return (
        <div className={classes.column}>
            <SuperInputText
                value={inputText}
                onChangeText={setInputText}
                onEnter={showAlert}
                error={error}/>
            <div className={classes.row}>
                <SuperButton onClick={showAlert}>
                    default
                </SuperButton>

                <SuperButton red>
                    delete
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>
            </div>
            <SuperCheckbox
                checked={checkboxStatus}
                onChangeChecked={setCheckboxStatus}>
                some text
            </SuperCheckbox>
            <SuperEditableSpan
                value={spanValue}
                onChangeText={setSpanValue}
                spanProps={{children: spanValue ? undefined : 'enter text...'}}
            />
            <SuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
            <div className={classes.row}><SuperRadio
                name={'radio'}
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            /></div>


        </div>
    );
};