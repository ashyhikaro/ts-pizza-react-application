import React, {useState} from 'react'
import './styles.css'
import Pizza from '../models/Pizza';

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

interface initState {
    title: string,
    price: string,
    img: string,
}

const AddPizzaForm: React.FC<AddPizzaFormProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] = useState<initState>({title: '', price: '', img: ''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {title, price, img} = newPizza

        if (title && price && img) {
            addPizza({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })

            setNewPizza({title: '', price: '', img: ''})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name='title'
                placeholder='Назва'
                onChange={handleChange}
                value={newPizza.title}
            />
            <input 
                type="text"
                name='price'
                placeholder='Ціна'
                onChange={handleChange}
                value={newPizza.price}
            />
            <input 
                type="text"
                name='img'
                placeholder='Картинка'
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type='submit'>+ ADD</button>
        </form>
    )
}

export default AddPizzaForm;