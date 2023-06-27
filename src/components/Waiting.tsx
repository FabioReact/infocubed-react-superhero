import Spinner from './Spinner/Spinner'

type WaitingProps = {
  isLoading: boolean
  children: React.ReactNode
}

const Waiting = ({ children, isLoading }: WaitingProps) => {
  if (isLoading) return <Spinner />
  return children
}

export default Waiting