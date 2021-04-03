import { render, screen } from '@testing-library/react'
import App from './App'

test('should render the developer name', () => {
    render(<App />)
    const name = screen.getByText(/Wanderson Silva/i)
    expect(name).toBeInTheDocument()
})
