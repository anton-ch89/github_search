import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { githubContext } from '../context/github/githubContext'

export const Search = () => {
 const alert = useContext(AlertContext)
 const [value, setValue] = useState('')
 const github = useContext(githubContext)
    const onSubmit = event => {
        if(event.key !== "Enter"){
            return
        }
        github.clearUsers()
        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        }else{
            alert.show('Введите данные пользователя')
        }
    }

    return (
        <div className='form-group'>
            <input 
            type="text" 
            className='form-control'
            placeholder='Введите ник пользователя'
            value={value}
            onChange={event=> setValue(event.target.value)}
            onKeyPress={onSubmit}
            />
        </div>
    )
}
