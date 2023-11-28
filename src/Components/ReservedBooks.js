import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h  className='reservedbooks-title'>Upcoming releases </h>
            
            <table className='reservedbooks-table'>
                <tr>
                    <th>BOOK</th>
                    <th>AUTHOR</th>
                    <th>DATE</th>
                </tr>
                <tr>
                    <td>Yellowface</td>
                    <td>R.F.kaung</td>
                    <td>28/11/2023</td>
                </tr>
                <tr>
                    <td>Spare</td>
                    <td>Prince Harry</td>
                    <td>03/12/2023</td>
                </tr>
                <tr>
                    <td>Hell Bent</td>
                    <td> Leigh Bardugo</td>
                    <td>06/12/2023</td>
                </tr>
                <tr>
                    <td>Divine Rivals</td>
                    <td>Rebecca Ross</td>
                    <td>09/12/2023</td>
                </tr>
                <tr>
                    <td>Only one left</td>
                    <td>Riley Sager</td>
                    <td>15/12/2023</td>
                </tr>
                <tr>
                    <td>Daughter's of Madhuri</td>
                    <td>Rajasree Variyar</td>
                    <td>18/12/2023</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks