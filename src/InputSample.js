import React, {useState, useRef} from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    const {name, nickname} = inputs
    const nameInput = useRef()
    
    const onChange = (e) => {
        const { name, value } = e.target
        

        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus()
    }

    return (
        <div>
            <input placeholder="name" name="name" onChange={onChange} value={name} ref={nameInput} />
            <input placeholder="nickname" name="nickname" onChange={onChange} value={nickname} />
            <button onClick={onReset}>reset</button>
            <div>
                <b>name: {name}({nickname})</b>
            </div>
        </div>
    )
}

export default InputSample