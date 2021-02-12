import styles from "./Search.module.css"
const SearchBAr = ({ ...rest }) => {
    return (
        <div className={styles.main_search}>
            <div className={styles.search_text}>Search A currency</div>
            <input className={styles.input_bar}  {...rest} />
        </div>
    )
}

export default SearchBAr
