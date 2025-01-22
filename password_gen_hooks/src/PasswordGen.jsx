import Options from './Options'
import './PasswordGen.css'
import { useState, useEffect, useCallback, useRef } from 'react'

function PasswordGen() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(6)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasSpecialChar, setHasSpecialChar] = useState(false)

  const generatePassword = useCallback(() =>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(hasNumber) str += '0123456789'
    if(hasSpecialChar) str += '!@#$%^&*()_+'

    let new_pass = ''
    for(let i=0;i<length;i++) {
      const random = Math.floor(Math.random() * str.length)
      new_pass += str[random]
    }
    setPassword(new_pass)
  }, [length, hasNumber, hasSpecialChar])

  useEffect(()=>{
    generatePassword()
  }, [length, hasNumber, hasSpecialChar])

  const passwordRef = useRef(null)

  const copyToClipboard = () => {
    passwordRef.current.select()
  }

  return (
    <div className='password-gen'>
        <h1>Password Generator</h1>
        <div>
          <input 
            type="text"
            placeholder="Generated Password"
            readOnly
            className='passwordField'
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyToClipboard}>Copy</button>
        </div>
        <Options length={length} hasNumber={hasNumber} hasSpecialChar={hasSpecialChar} setHasNumber={setHasNumber} setHasSpecialChar={setHasSpecialChar} setLength={setLength}/>
    </div>
  )
}

export default PasswordGen
