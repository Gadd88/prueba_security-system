import { render, screen } from '@testing-library/react';
import { ProfileCard } from './profile-card'

describe('ProfileCard', () => {
    it('renders the profile card', () => {
        const mockData = {
            userProfile: {
                name: 'Juan Perez',
                profileImage: 'https://example.com/profile.png',
                aboutMe: 'About me:',
                interests: ['Programming', 'Cooking', 'Reading'],
                location: {
                    country: 'United States',
                    province: 'California',
                    city: 'San Francisco'
                },
                contact: {
                    email: 'pC0Jh@example.com',
                    phone: '123-456-7890',
                    linkedin: 'https://www.linkedin.com/in/juan-perez',
                    github: 'https://github.com/juanperez'
                }
            }
        }
        render(<ProfileCard data={mockData} />);
        const interests = screen.getAllByRole('listitem')
        expect(interests).toHaveLength(3)
        expect(screen.getByText(/Juan Perez/i)).toBeInTheDocument();
        expect(screen.getByText(/About me:/i)).toBeInTheDocument();
        expect(screen.getByText(/Programming/i)).toBeInTheDocument();
    })
})