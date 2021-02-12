import Link from 'next/Link'
import aboutCoinStyle from "./Coins.module.css"

const Coin = ({ data }) => {


    return (
        <Link href={`/coin/${encodeURIComponent(data.id)}`} >
            <tr>
                <td>
                    <div className={aboutCoinStyle.coin_about}>
                        <img src={data.image} alt={data.name} className={aboutCoinStyle.coin_img} />

                        <p> {data.name}</p>
                        <p>{data.symbol}</p>
                    </div>
                </td>
                <td className={aboutCoinStyle.coin_price}>$ {data.current_price}</td>
                <td className={aboutCoinStyle.coin_price_change}>$ {data.price_change_24h}</td>




                {
                    data.price_change_percentage_24h < 0 ? (<td className={aboutCoinStyle.coin_price_percentage_change_red}>
                        {(data.price_change_percentage_24h).toFixed(2)}
                    </td>) : (<td className={aboutCoinStyle.coin_price_percentage_change_green}>
                        {(data.price_change_percentage_24h).toFixed(2)}
                    </td>)
                }





                <td className={aboutCoinStyle.coin_volume}>{(data.total_volume).toLocaleString()}</td>
            </tr >
        </Link>
    )
}

export default Coin
