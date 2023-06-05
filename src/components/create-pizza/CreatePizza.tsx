import React, { useState } from "react"
import Select from 'react-select'
import Pizza from "../../models/Pizza"
import { useCreatePizzaMutation } from "../../store/api/pizza.api"

const defaultValue: Pizza = {
    id: 0,
    title: '',
    price: 0,
    img: '',
    discription: '',
}

const imgOptions: any  = [
    { value: 'pizza-1.jpg', label: 'pizza-1.jpg' },
    { value: 'pizza-2.jpg', label: 'pizza-2.jpg' },
    { value: 'pizza-3.jpg', label: 'pizza-3.jpg' },
    { value: 'pizza-4.jpg', label: 'pizza-4.jpg' },
    { value: 'pizza-5.jpg', label: 'pizza-5.jpg' },
    { value: 'pizza-6.jpg', label: 'pizza-6.jpg' },
]

export default function CreatePizza() {
    const [pizza, setPizza] = useState(defaultValue)
    const [selectedOption, setSelectedOption] = useState<any | null>(null);

    const [createPizza] = useCreatePizzaMutation()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createPizza({...pizza, img: selectedOption.value}).then(() => {
            setPizza(defaultValue)
            setSelectedOption(null)
        })
    }

    return (
        <div>
            <form className="add_pizza__form" onSubmit={handleSubmit}>
                <p>Add new pizza</p>
                <label>
                    <input 
                        type="text" 
                        placeholder="Name..."
                        value={pizza.title}
                        onChange={e => setPizza({
                            ...pizza, title: e.target.value
                        })}
                    />
                </label>
                <label>
                    <input 
                        type="text" 
                        placeholder="Price..."
                        value={String(pizza.price)}
                        onChange={e => setPizza({
                            ...pizza, price: +e.target.value
                        })}
                    />
                </label>
                <label>
                    <input 
                        type="text" 
                        placeholder="Discription..."
                        value={pizza.discription}
                        onChange={e => setPizza({
                            ...pizza, discription: e.target.value
                        })}
                    />
                </label>
                <label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={imgOptions}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}