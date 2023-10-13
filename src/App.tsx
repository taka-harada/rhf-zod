import { css } from '@emotion/css'
import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: React.FormEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log({ email, password })
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id='email' name='email' value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id='password' name='password' value={password} onChange={handleChangePassword} />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  )
}

export default App

const styles = {
  wrapper: css`
    display: block;
  `
}
