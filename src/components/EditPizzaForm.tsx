import React, {useState} from 'react'
import './styles.css'
import Pizza from '../models/Pizza';

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    handleToggleEdit: () => void;
}

const EditPizzaForm: React.FC<EditPizzaFormProps> = ({data, updatePizza, handleToggleEdit}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {title, price, img} = editPizza

        if (title && price && img) {
            updatePizza(editPizza)
            handleToggleEdit()
        }
    }

    return (
        <form onSubmit={handleSubmit} className='edit-form'>
            <input 
                type="text"
                name='title'
                placeholder='Назва'
                onChange={handleChange}
                value={editPizza.title}
            />
            <input 
                type="text"
                name='price'
                placeholder='Ціна'
                onChange={handleChange}
                value={editPizza.price}
            />
            <input 
                type="text"
                name='img'
                placeholder='Картинка'
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type='submit'>+ SUBMIT</button>
        </form>
    )
}

export default EditPizzaForm;