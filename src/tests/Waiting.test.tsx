import { render, screen } from '@testing-library/react'
import Waiting from '../components/Waiting'

// Afficher le spinner si isLoading est true
// Afficher le result si isLoading est false

describe('Testing Waiting Component', () => {
  it('should show Content Loaded if isLoading is false', () => {
    render(
      <Waiting isLoading={false}>
        <h1>Content Loaded</h1>
      </Waiting>,
    )
    const title = screen.getByRole('heading', { name: 'Content Loaded' })
    expect(title).toBeInTheDocument()
  })
  // Red => Green => Refactor

  it('should show Spinner Loaded if isLoading is true', () => {
    render(
      <Waiting isLoading={true}>
        <h1>Content Loaded</h1>
      </Waiting>,
    )
    const title = screen.queryByRole('heading', { name: 'Content Loaded' })
    const spinner = screen.getByLabelText('spinner')
    expect(title).not.toBeInTheDocument()
    expect(spinner).toBeInTheDocument()
  })
})
