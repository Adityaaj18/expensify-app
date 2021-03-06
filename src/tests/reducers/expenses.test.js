import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expenseby id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add an expenseby', () => {
    const expense = {
        id: '69',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 30000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense by id', () => {
    const amount = 200
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state[0].amount).toBe(amount)
})

test('should not edit an expense by id', () => {
    const amount = 200
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})