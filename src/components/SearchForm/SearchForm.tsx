import './SearchForm.css';
import {useEffect, useState} from "react";

export const SearchForm = ({onSearch}) => {

    const [form, setForm] = useState({
        request: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
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

    // useEffect(() => {
    //     if (location.pathname === '/movies') {
    //         const searchRequest = JSON.parse(localStorage.getItem('searchRequest'));
    //
    //         // if (searchRequest) {
    //         //     setSwitchState(searchRequest.switch);
    //         //     setForm({
    //         //         request: searchRequest.request,
    //         //     });
    //         // }
    //     }
    // }, []);

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

