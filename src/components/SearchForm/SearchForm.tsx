import './SearchForm.css';
import {useState} from "react";

export const SearchForm = ({onSearch}) => {

    const [form, setForm] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        const nextFormState = {
            ...form,
            [name]: value,
        };

        setForm(nextFormState);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const searchData = {
            request: form.request,
        }
        onSearch(searchData);
    }

    return (
        <article className="search">
            <form
                onSubmit={handleSubmit}
                className="search__form">
                <fieldset className="search__form-fieldset search__form-fieldset_type_input">
                    <label>
                        <input
                            required
                            name="request"
                            placeholder="Название репозитория"
                            value={form.request || ''}
                            onChange={handleChange}
                            className="search__form-input"/>
                        <button className="search__form-button"
                                type="submit"
                                aria-label="Поиск"
                        ></button>
                    </label>

                </fieldset>
            </form>
        </article>
    );
};

