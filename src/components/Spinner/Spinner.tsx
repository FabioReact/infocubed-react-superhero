import styles from './spinner.module.css'

const Spinner = () => {
	return (
		<div className='flex justify-center'>
			<div className={styles.loader}></div>
		</div>
	)
}

export default Spinner