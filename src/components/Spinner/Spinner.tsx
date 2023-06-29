import styles from './spinner.module.css'

const Spinner = () => {
	return (
		<div className='flex justify-center' aria-label='spinner'>
			<div className={styles.loader}></div>
		</div>
	)
}

export default Spinner