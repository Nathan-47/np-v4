import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../../app/page'
import ProjectsPage from '../../app/projects/page'

// landing page 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})


// projects page 
describe('Projects Page', () => {
  it('render the heading', () => {
    render(<ProjectsPage />)
    const projectHeadings = screen.getAllByRole('heading')
    expect(projectHeadings).toHaveLength(5)
  })

  it('render project thumbnails and alt text', () => {
    render(<ProjectsPage />)
    const projectImage = screen.getAllByRole('img')

    expect(projectImage.length).toBeGreaterThan(0)

    projectImage.forEach((image) => {
      expect(image).toHaveAttribute('alt')
      expect(image.getAttribute('alt')).not.toBe('')
    })
  })


})