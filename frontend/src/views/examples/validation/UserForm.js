import React from 'react'
import useValidatedForm from 'react-valida-hook'
//https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196
const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

const validations = [
  {
    name: 'firstName',
    type: 'required',
    stateMap: 'firstName'
  },
  {
    name: 'lastName',
    type: 'required',
    stateMap: 'lastName'
  },
  {
    name: 'email',
    type: 'required',
    stateMap: 'email'
  },
  {
    name: 'email',
    type: 'isEmail',
    stateMap: 'email'
  }
]

function UserForm () {
  const [formData, validation, validateForm, getData] = useValidatedForm(initialState, validations)
  const submit = (event) => {
    event.preventDefault()
    const valid = validateForm()
    console.log(getData())
  }
  return (
    <form className='validated-form' noValidate={true} onSubmit={submit}>
      <div className={ validation.errors.firstName.length > 0 ? 'validated-form__control error': 'validated-form__control' }>
        <label htmlFor='first-name'>First name</label>
        <input name='first-name' id='first-name' { ...formData.firstName.input } />
        <div className='validated-form__errors'>
          { validation.errors.firstName.join(', ')}
        </div>
      </div>
      <div className={ validation.errors.lastName.length > 0 ? 'validated-form__control error': 'validated-form__control' }>
        <label htmlFor='last-name'>Last name</label>
        <input name='last-name' id='last-name' { ...formData.lastName.input } />
        <div className='validated-form__errors'>
          { validation.errors.lastName.join(', ')}
        </div>
      </div>
      <div className={ validation.errors.email.length > 0 ? 'validated-form__control error': 'validated-form__control' }>
        <label htmlFor='email'>Email</label>
        <input name='email' id='email' { ...formData.email.input } />
        <div className='validated-form__errors'>
          { validation.errors.email.join(', ')}
        </div>
      </div>
      <div className='validated-form__actions'>
        <input disabled={!validation.valid} className='btn' type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default UserForm