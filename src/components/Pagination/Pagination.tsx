import React  from "react";
import './Pagination.css';
import {useSelector} from "react-redux";

interface Props {
    repositoriesPerPage: number;
    currentPage: number;
    setPaginate: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ repositoriesPerPage , currentPage, setPaginate}) => {
    const pageNumbers: number[] = [];
    const totalPages = useSelector(state => state.search.items)

    for (let i = 1; i <= Math.ceil(totalPages.length / repositoriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div>
            <ul className="pagination__list">
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a href="#"
                               className={`${
                                   number === currentPage ? "paginator__selected-item" : ""
                               }`}
                               onClick={() => setPaginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


//
// export const Pagination = ({ repositoriesPerPage, totalRepositories }) => {
//     const pageNumbers = [];
//
//     for (let i = 1; 1 <= Math.ceil(100 / repositoriesPerPage); i++) {
//         pageNumbers.push(i);
//     }
//
//     return(
//         <div>
//             <ul>
//                 {
//                     pageNumbers.map(number => (
//                         <li key={number}>
//                             <a href="#">{number}</a>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }


//
// export const Pagination: React.FC<SearchFormProps> = ({ onSearch }) => {
//     const [form, setForm] = useState<{ request: string }>({ request: "" });
//
//     const handleChange = (
//         e: ChangeEvent<HTMLInputElement>
//     ): void => {
//         const { name, value } = e.target;
//         const nextFormState = {
//             ...form,
//             [name]: value,
//         };
//
//         setForm(nextFormState);
//     };
//
//     const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//         e.preventDefault();
//         const searchData = {
//             request: form.request,
//         };
//         onSearch(searchData);
//     };
//
//     return (
//         <article className="search">
//             <form onSubmit={handleSubmit} className="search__form">
//                 <fieldset className="search__form-fieldset search__form-fieldset_type_input">
//                     <label>
//                         <input
//                             required
//                             name="request"
//                             placeholder="Название репозитория"
//                             value={form.request}
//                             onChange={handleChange}
//                             className="search__form-input"
//                         />
//                         <button
//                             className="search__form-button"
//                             type="submit"
//                             aria-label="Поиск"
//                         ></button>
//                     </label>
//                 </fieldset>
//             </form>
//         </article>
//     );
// };
