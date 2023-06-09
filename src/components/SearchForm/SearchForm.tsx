import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import "./SearchForm.css";

interface SearchFormProps {
    onSearch: (searchData: { request: string }) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [form, setForm] = useState<{ request: string }>({ request: "" });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = e.target;
        const nextFormState = {
            ...form,
            [name]: value,
        };

        setForm(nextFormState);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const searchData = {
            request: form.request,
        };
        onSearch(searchData);
    };

    useEffect(() => {
        const searchRequestData = localStorage.getItem('searchRequest');

        if (searchRequestData) {
                setForm({
                    request: searchRequestData,
                });
            }

    }, []);

    return (
        <article className="search">
            <form onSubmit={handleSubmit} className="search__form">
                <fieldset className="search__form-fieldset search__form-fieldset_type_input">
                    <label>
                        <input
                            required
                            name="request"
                            placeholder="Название репозитория"
                            value={form.request}
                            onChange={handleChange}
                            className="search__form-input"
                        />
                        <button
                            className="search__form-button"
                            type="submit"
                            aria-label="Поиск"
                        ></button>
                    </label>
                </fieldset>
            </form>
        </article>
    );
};
