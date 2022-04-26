describe("React TodoMVC", () => {
    //Refactor the names of out todos into constants
    const TODO_ITEM_ONE = 'Buy Milk'
    const TODO_ITEM_TWO = 'Pay Rent'
    const TODO_ITEM_THREE = 'Pickup Dry Cleaning'
    //Mocha function that execute code before every test, in this case for URL
    beforeEach(() => {
        cy.visit("http://localhost:8888")
    })

    it("adds a single todo", () => {
        
        cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
        cy.get(".todo-list li").should("have.length", 1)
    })

    it("add three todos", () => {
        cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`)
        cy.get(".todo-list li").should("have.length", 3)
    })
})