import Coin from "./Coin"
import styles from "./Coins.module.css"

const CoinList = ({ filterCoins }) => {
    return (
        <div className={styles.table100}>

            <table>
                <thead>
                    <tr className={styles.row100}>
                        <th className={styles.cell100}>Name</th>
                        <th className={styles.cell100}>Price</th>
                        <th className={styles.cell100}>Price Change(24h)</th>

                        <th className={styles.cell100}>Price Change(24h)%</th>

                        <th className={styles.cell100}>Total volume</th>
                    </tr>
                </thead>
                <tbody className={styles.table100_body}>
                    {filterCoins.map(coin => {
                        return (
                            <Coin key={coin.id} data={coin} />
                        )
                    })}</tbody>
            </table>
        </div>
    )
}

export default CoinList
