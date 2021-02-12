
import Link from "next/Link"
import styles from "./Coin.module.css"
const coin = ({ dataCoins }) => {
    return (
        <div className={styles.container}>

            <div className={styles.card}>

                <div className={styles.back_btn}><Link href="/">←</Link></div>
                <img src={dataCoins.image.large} alt={dataCoins.id} />
                <h1 className={styles.coin_name}>{dataCoins.name}</h1>
                <h4 className={styles.coin_sym}>{dataCoins.symbol}</h4>
                <p>$ {dataCoins.market_data.current_price.usd}</p>
                <p> <span className={styles.text_gray}>In Last 7d:</span>



                    {dataCoins.market_data.price_change_percentage_7d < 0 ? (<span className={styles.coin_price_percentage_change_red}>
                        {(dataCoins.market_data.price_change_percentage_7d).toFixed(2)} % ↓
                    </span>) : (<span className={styles.coin_price_percentage_change_green}>
                        {(dataCoins.market_data.price_change_percentage_7d).toFixed(2)} % ↑
                    </span>)
                    }


                </p>




            </div>
        </div >
    )
}


export default coin


export const getServerSideProps = async (context) => {
    const { id } = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `)

    const dataCoins = await res.json()

    return {
        props: {
            dataCoins
        }
    }
}