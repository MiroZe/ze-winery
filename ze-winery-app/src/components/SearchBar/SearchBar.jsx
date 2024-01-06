import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import styles from './SearchBar.module.css'

const SearchBar = ({searchValue,updateSearchValue}) => {

    return (
        <div className={styles['search-container']}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"> <FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name='search'
                    value={searchValue}
                    onChange={(e) => updateSearchValue(e.target.value)}
                />
            </InputGroup>
        </div>
    )

}
export default SearchBar