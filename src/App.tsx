import { css } from '@emotion/css'
import './App.css'

import { validationSchema, FormFields } from './utils/validationSchema'

import  { useForm } from 'react-hook-form'

//import { zodResolver } from '@hookform/resolvers/zod'

function App() {
  // const [email, setEmail] = useState('sample@example.com')
  // const [password, setPassword] = useState('xxxxx')
  // const[check, setCheck] = useState(false)
  // const [additionalInput, setAdditionalInput] = useState('ああああ')
  // const [ isDirty, setIsDirty] = useState(false)

  // type FormFields = {
  //   email: string
  //   password: string
  //   check: boolean
  //   additionalInput: string
  // }

  // MEMO: zodResolver使わない場合は独自でバリデーション関数定義してonChangeでコール
  const validateForm = () => {
    const form = {
      email: getValues('email'),
      password: getValues('password'),
      check: getValues('check'),
      additionalInput: getValues('additionalInput'),
    }
    const result = validationSchema.safeParse(form)
    if (result.success) {
      console.log('success')
    } else {
      console.log(result.error)
    }
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty }
  } = useForm<FormFields>({
    mode: 'onChange',
    //resolver: zodResolver(validationSchema), // zodResolverつかってschemaをresolverにかます場合はここに定義
    defaultValues: {
      email: 'sample@example.com',
      password: 'xxxxx',
      check: false,
      additionalInput: 'ああああ'
    }
  })

  return (
    <div className={styles.wrapper}>
      <h1>ログインこんにちは</h1>
      <form
       onChange={validateForm}
       onSubmit={handleSubmit((data) => {
        console.log("フォームのデータだよ！",data)
      })}>
        <div>
          <label htmlFor="email">Email</label>
          <input
           id='email'
           {...register(
            'email',
            // zod使うので不要
            //{ required: true }
           )}
          />
          {errors.email &&<p>必須項目です</p>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
           id='password'
           {...register(
            'password',
            // zod使うので不要
            //{ required: true, maxLength: 20 }
           )}
          />
          {errors.password &&<p>必須項目です</p>}
        </div>
        <div>
          <label>
            <input
             type="checkbox"
             {...register(
              'check'
             )}/>
            ほげほげ
          </label>
          {getValues('check') && (
            <>
              <input
                id='additionalInput'
                {...register(
                  'additionalInput',
                  // zod使うので不要
                  //{ required: true, maxLength: 20 }
                  )
                }
              />
              {errors.additionalInput &&<p>必須項目です</p>}
            </>
          )}
        </div>
        <div>
          <button type="submit" disabled={!isDirty}>ログイン</button>
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
