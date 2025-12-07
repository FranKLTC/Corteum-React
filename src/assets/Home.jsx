import { useState } from 'react'

const Home = () => {
  const [passwordUser, setPasswordUser] = useState('')
  const [message, setMessage] = useState('')

  function cambiarContrasena() {
    const pass = passwordUser.trim()
    if (pass.length >= 6) {
      setMessage('Contraseña válida')
    } else {
      setMessage('Contraseña inválida (mínimo 6 caracteres)')
    }
  }

  return (
    <>
      <h1 className='login'>Login</h1>

      <div className='login-inputs'>
        <input type="text" name="user" placeholder="Usuario" />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={passwordUser}
          onChange={(e) => setPasswordUser(e.target.value)}
        />

        <button
          onClick={cambiarContrasena}
          className='btn-login'
          disabled={passwordUser.trim() === ''}
        >
          Ingresar
        </button>

        <p className='result-password'>{message}</p>
      </div>
    </>
  )
}

export default Home
