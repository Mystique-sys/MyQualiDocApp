import React from 'react'

export default function LoadUserData() {
    const data = [
        {
            id:"hjkdaf-dasfjkd-dfknksdf-dsajkhsa-sadfsa",
            name: "Julia",
            surname: "Nhlapho",
            phone: '0786040934',
            sex: 'Female',
            dob: '07/08/1978',
            Children: [{
                id: "hjkdaf-dasfjkd-dfk45612-dsajkhsa-sadfsa",
                name: "Mandla",
                surname: "Nhlapho",
                phone: '0000000000',
                sex: 'Male',
                dob: '07/08/1994',
            }, {
                id: "hjkdaf-dasfjkd-dfknksdf-dsa54646sa-sadfsa",
                name: "Susan",
                surname: "Nhlapho",
                phone: '0000000000',
                sex: 'Female',
                dob: '07/08/2000',
            }]
        }
    ]
    return (
        <div>LoadUserData</div>
    )
}
