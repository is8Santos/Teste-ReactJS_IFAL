import React from 'react'

import { fireEvent, render, waitFor } from '@testing-library/react'

import Lista from '../components/Lista'

describe('Testss para  o componete Lista', () => { 
    it('Should add new task when form has been submitted', async () => { 
        const { getByTestId, getByText } = render(<Lista/>)

        const checagem = await waitFor(
            () => getByTestId('form-field')
        )
        const testagem = 'testing'
        fireEvent.change(
            checagem,
            { target: { value: testagem}}
        )
        expect(checagem.value).toEqual(testagem)





        const checkButtonn = await waitFor(
            () => getByTestId('form-btn')
        )
        fireEvent.click(checkButtonn)


//vivi
        const checkTablee = await waitFor(
            () => getByText(testagem)
        )
        expect(checkTablee).toBeDefined()
    })
})
