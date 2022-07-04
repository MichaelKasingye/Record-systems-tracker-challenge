/* eslint-disable no-undef */
describe('login into the admin area', () => {
    it('should login sucessfully into the admin area', () => {
        // cy.visit('https://edu-evets-admin.netlify.app/')
        cy.visit('http://localhost:3000/')

        cy.get('input[type=email]').type('admin@gmail.com')
        cy.get('input[type=password]').type('123456')
        cy.findByRole('button', { name: /login/i }).click()
        cy.wait(5000)
        cy.url().should('include', '/dashboard')
    })
})

describe('login error', () => {
    it('should show login error', () => {
        cy.visit('http://localhost:3000/')
        cy.findByRole('button', { name: /login/i }).click()
        cy.findByRole('heading', {name: /error/i }).contains('Error')
    })
})