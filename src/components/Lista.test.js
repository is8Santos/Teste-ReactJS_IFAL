import React from 'react'

import { fireEvent, render, waitFor } from '@testing-library/react'

import Lista from './Lista'

describe('Tests para  o componete Lista', () => { // é descrição do que teste
    it('Should add new task when form has been submitted', async () => { // é o que p teste irá fazer
        const { getByTestId, getByText } = render(<Lista/>)

        const checkInput = await waitFor(
            () => getByTestId('form-field')
        )
        const valueTesting = 'testing'
        fireEvent.change(
            checkInput,
            { target: { value: valueTesting}}
        )
        expect(checkInput.value).toEqual(valueTesting)




//Bela
        const checkButton = await waitFor(
            () => getByTestId('form-btn')
        )
        fireEvent.click(checkButton)


//vivi
        const checkTable = await waitFor(
            () => getByText(valueTesting)
        )
        expect(checkTable).toBeDefined()
    })
})