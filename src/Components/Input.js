import styles from '../styles/components/input.module.css'

const Input = ({ register, error, ...rest }) => {
  return (
    <div className={styles.customInput}>
      <input
        style={rest.width ? { width: rest.width } : { width: '217px' }}
        {...rest}
        {...register}
      />
      <p>{error?.message}</p>
    </div>
  )
}

export default Input
