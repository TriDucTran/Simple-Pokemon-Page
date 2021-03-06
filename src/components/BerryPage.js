import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import BerryMain from './BerryMain';
import Pagination from './Pagination';

const berriesData = [
    {
        "name": "cheri",
        "firmness": "soft",
        "type": "fire",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cheri_Berry",
        "description": "A Cheri Berry (Japanese: クラボのみ Kurabo Fruit) is a type of Berry. It was introduced in Generation III, and is the first Berry numerically in both Hoenn and Sinnoh. It is the spiritual successor of the PRZCureBerry from Generation II, having an identical effect when used on or by a Pokémon. At a size of 0.8 inches (2 cm), it is also the smallest Berry."
    },
    {
        "name": "chesto",
        "firmness": "super hard",
        "type": "water",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Chesto_Berry",
        "description": "A Chesto Berry (Japanese: カゴのみ Kago Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the Mint Berry from Generation II, having an identical effect when used on or by a Pokémon."
    },
    {
        "name": "pecha",
        "firmness": "very soft",
        "type": "electric",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pecha_Berry",
        "description": "A Pecha Berry (Japanese: モモンのみ Momon Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the PSNCureBerry from Generation II, having an identical effect when used on or by a Pokémon."
    },
    {
        "name": "rawst",
        "firmness": "hard",
        "type": "grass",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rawst_Berry",
        "description": "A Rawst Berry (Japanese: チーゴのみ Chīgo Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the Ice Berry from Generation II, having an identical effect when used on or by a Pokémon."
    },
    {
        "name": "aspear",
        "firmness": "super hard",
        "type": "ice",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Aspear_Berry",
        "description": "An Aspear Berry (Japanese: ナナシのみ Nanashi Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the Burnt Berry from Generation II, having an identical effect when used on or by a Pokémon."
    },
    {
        "name": "leppa",
        "firmness": "very hard",
        "type": "fighting",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Leppa_Berry",
        "description": "A Leppa Berry (Japanese: ヒメリのみ Himeri Fruit) is a type of Berry introduced in Generation III. It is considered a spiritual successor to the MysteryBerry from Generation II, having a nearly identical effect when used on or by a Pokémon."
    },
    {
        "name": "oran",
        "firmness": "super hard",
        "type": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Oran_Berry",
        "description": "An Oran Berry (Japanese: オレンのみ Oran Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the standard Berry from Generation II, having an identical effect when used on or by a Pokémon."
    },
    {
        "name": "persim",
        "firmness": "hard",
        "type": "ground",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Persim_Berry",
        "description": "A Persim Berry (Japanese: キーのみ Kī Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the Bitter Berry from Generation II, having an identical effect when used on or by a Pokémon."
    },
    {
        "name": "lum",
        "firmness": "super hard",
        "type": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lum_Berry",
        "description": "A Lum Berry (Japanese: ラムのみ Lum Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the MiracleBerry from Generation II, having an identical effect when used on or by a Pokémon."
    },
    {
        "name": "sitrus",
        "firmness": "very hard",
        "type": "psychic",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sitrus_Berry",
        "description": "A Sitrus Berry (Japanese: オボンのみ Obon Fruit) is a type of Berry introduced in Generation III. It is the spiritual successor of the Gold Berry from Generation II, initially having an identical effect when used on or by a Pokémon. The effect of the Sitrus Berry was later changed in Generation IV so that it restores 25% of the user's max HP."
    },
    {
        "name": "figy",
        "firmness": "soft",
        "type": "bug",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Figy_Berry",
        "description": "A Figy Berry (Japanese: フィラのみ Fira Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "wiki",
        "firmness": "hard",
        "type": "rock",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wiki_Berry",
        "description": "A Wiki Berry (Japanese: ウイのみ Wi Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "mago",
        "firmness": "hard",
        "type": "ghost",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mago_Berry",
        "description": "A Mago Berry (Japanese: マゴのみ Mago Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "aguav",
        "firmness": "super hard",
        "type": "dragon",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Aguav_Berry",
        "description": "An Aguav Berry (Japanese: バンジのみ Banji Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "iapapa",
        "firmness": "soft",
        "type": "dark",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Iapapa_Berry",
        "description": "An Iapapa Berry (Japanese: イアのみ Ia Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "razz",
        "firmness": "very hard",
        "type": "steel",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Razz_Berry",
        "description": "A Razz Berry (Japanese: ズリのみ Zuri Fruit) is a type of Berry introduced in Generation III. In Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, the Razz Berry also has two variants: the Silver Razz Berry and the Golden Razz Berry."
    },
    {
        "name": "bluk",
        "firmness": "soft",
        "type": "fire",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bluk_Berry",
        "description": "A Bluk Berry (Japanese: ブリーのみ Burī Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "nanab",
        "firmness": "very hard",
        "type": "water",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nanab_Berry",
        "description": "A Nanab Berry (Japanese: ナナのみ Nana Fruit) is a type of Berry introduced in Generation III. In Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, the Nanab Berry also has two variants: the Silver Nanab Berry and the Golden Nanab Berry."
    },
    {
        "name": "wepear",
        "firmness": "super hard",
        "type": "electric",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wepear_Berry",
        "description": "A Wepear Berry (Japanese: セシナのみ Seshina Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "pinap",
        "firmness": "hard",
        "type": "grass",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pinap_Berry",
        "description": "A Pinap Berry (Japanese: パイルのみ Pairu Fruit) is a type of Berry introduced in Generation III. In Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, the Pinap Berry also has two variants: the Silver Pinap Berry and the Golden Pinap Berry."
    },
    {
        "name": "pomeg",
        "firmness": "very hard",
        "type": "ice",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pomeg_Berry",
        "description": "A Pomeg Berry (Japanese: ザロクのみ Zaroku Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "kelpsy",
        "firmness": "hard",
        "type": "fighting",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kelpsy_Berry",
        "description": "A Kelpsy Berry (Japanese: ネコブのみ Nekobu Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "qualot",
        "firmness": "hard",
        "type": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Qualot_Berry",
        "description": "A Qualot Berry (Japanese: タポルのみ Taporu Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "hondew",
        "firmness": "hard",
        "type": "ground",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hondew_Berry",
        "description": "A Hondew Berry (Japanese: ロメのみ Rome Fruit) is a type of Berry introduced in Generation III."
    },
    {
        "name": "grepa",
        "firmness": "soft",
        "type": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Grepa_Berry",
        "description": "A Grepa Berry (Japanese: ウブのみ Ubu Fruit) is a type of Berry introduced in Generation III."
    }
]

const BerryPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentItems = berriesData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <div className="wrapper">
                {BerryMain(currentItems)}
            </div>
            <div>
                <Pagination itemsPerPage={itemsPerPage} totalItems={berriesData.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default BerryPage;