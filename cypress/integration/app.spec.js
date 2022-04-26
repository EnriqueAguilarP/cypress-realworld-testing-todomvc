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
        //Get the first li element from todo list and within that li element look for label element
        //Finally, make sure that this label contains the text of our TODO item one
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
    })

    it("should append new items to the botton of the list", () => {
        cy.createDefaultTodos()
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
        cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)
        cy.get(".todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE)
    })

    it("add three todos", () => {
        cy.createDefaultTodos()
        cy.get(".todo-list li").should("have.length", 3)
    })
})