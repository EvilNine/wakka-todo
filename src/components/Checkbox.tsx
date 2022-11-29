import React, {ChangeEvent} from 'react';

type CheckboxPropsType = {
    checked: boolean
    callBack: (isDone: boolean )=> void
}

const Checkbox: React.FC<CheckboxPropsType> = (props) => {
    const onCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
    }

    return <input onChange={onCheckHandler} type="checkbox" checked={props.checked}/>
};

export default Checkbox;