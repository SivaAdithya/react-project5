import {useState} from 'react';

export function Comp1()
{
    const [dt,setDate] = useState('');
    const [age,setAge] = useState('');
    const handleChange = (event) => {
        let x = event.target.value       
        setDate(x);
    }

    const handleClick = () => {
        
        var x = 2023 - parseInt(dt.slice(0,4));
        setAge(x);
    }

    return (
        <div classname="container mx-5 form-group align-content">
            <input type="date"class="form-control" onChange={handleChange} style={{maxWidth:"300px"}} />
            <button type="button" class="btn btn-primary px-5 mx-3 my-2" onClick={handleClick}>Submit</button>
            <p>Date is {dt}</p>
            <p>Age is {age}</p>
        </div>
    )
}