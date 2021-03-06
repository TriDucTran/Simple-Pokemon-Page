import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import PokemonMain from './PokemonMain';
import Pagination from './Pagination';

const pokemonsData = [
    {
        "name": "bulbasaur",
        "japanese_name": "fushigidane",
        "height": 0.7,
        "type1": "grass",
        "type2": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
        "description": "Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."
    },
    {
        "name": "ivysaur",
        "japanese_name": "fushigisou",
        "height": 1,
        "type1": "grass",
        "type2": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)",
        "description": "Ivysaur is a quadrupedal Pokémon that has blue-green skin with darker patches. On top of its head are pointed ears with black insides and it has narrow red eyes. Ivysaur has a short, rounded snout with a wide mouth and two pointed teeth in its upper jaw. Each of its feet has three claws on them. The bulb on its back has bloomed into a large pink bud. A short brown trunk surrounded by leafy green fronds supports the bud."
    },
    {
        "name": "venusaur",
        "japanese_name": "fushigibana",
        "height": 2,
        "type1": "grass",
        "type2": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)",
        "description": "Venusaur is a squat, quadrupedal Pokémon with bumpy, blue-green skin. It has small, circular red eyes; a short, blunt snout; and a wide mouth with two pointed teeth in the upper jaw and four in the lower jaw. On top of its head are small, pointed ears with reddish pink insides. It has three clawed toes on each foot. The bud on its back has bloomed into a large pink, white-spotted flower. The flower is supported by a thick, brown trunk surrounded by green fronds. A female Venusaur will have a seed in the center of its flower."
    },
    {
        "name": "charmander",
        "japanese_name": "hitokage",
        "height": 0.6,
        "type1": "fire",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
        "description": "Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain."
    },
    {
        "name": "charmeleon",
        "japanese_name": "lizardo",
        "height": 1.1,
        "type1": "fire",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)",
        "description": "Charmeleon is a bipedal, reptilian Pokémon. It has dark red scales and a cream underside from the chest down. It has blue eyes and a long snout with a slightly hooked tip. On the back of its head is a single horn-like protrusion. It has relatively long arms with three sharp claws. Its short legs have plantigrade feet with three claws and cream-colored soles. The tip of its long, powerful tail has a flame burning on it. The temperature rises to unbearable levels if Charmeleon swings its tail."
    },
    {
        "name": "charizard",
        "japanese_name": "lizardon",
        "height": 1.7,
        "type1": "fire",
        "type2": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
        "description": "Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."
    },
    {
        "name": "squirtle",
        "japanese_name": "zenigame",
        "height": 0.5,
        "type1": "water",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
        "description": "Squirtle is a small Pokémon that resembles a light-blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves."
    },
    {
        "name": "wartortle",
        "japanese_name": "kameil",
        "height": 1,
        "type1": "water",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)",
        "description": "Wartortle is a bipedal, indigo Pokémon similar to a turtle. It has brown eyes, a dark blue streak on each cheek, and two sharp teeth protruding from its upper jaw. It has three clawed fingers and pointed toes. On each side of its head are feather-like ears covered in pale blue fur. A brown shell with a pale yellow underside encases its body. A thick, white rim separates the upper and lower halves of the shell. An older Wartortle may have scars and algae growing on its shell. Poking out of the bottom of the shell is a thick, wavy tail that also has light blue fur and cannot be fully withdrawn into its shell. Its tail fur will darken with age. Its tail is a popular symbol of longevity and good luck, making this Pokémon popular with the elderly."
    },
    {
        "name": "blastoise",
        "japanese_name": "kamex",
        "height": 1.6,
        "type1": "water",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)",
        "description": "Blastoise is a large, bipedal turtle-like Pokémon. Its body is blue and is mostly hidden by its tough, brown shell. This shell has a cream-colored underside and a white ridge encircling its arms and separating the upper and lower halves. Two powerful water cannons reside at the top of its shell over its shoulders. These cannons can be extended or withdrawn. Blastoise's head has triangular ears that are black on the inside, small brown eyes, and a cream-colored lower jaw. Its arms are thick, and it has three claws on each hand. Its feet have three claws on the front and one on the back. Poking out of the bottom of its shell is a stubby tail."
    },
    {
        "name": "caterpie",
        "japanese_name": "caterpie",
        "height": 0.3,
        "type1": "bug",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)",
        "description": "Caterpie is a Pokémon that resembles a green caterpillar with a yellow underside and teardrop-shaped tail. There are yellow ring-shaped markings down the sides of its segmented body, which resemble its eyes and are meant to scare off predators. Its most notable characteristic is the bright red antenna (osmeterium) on its head, which releases a stench to repel predators. Despite these features and its camouflage in green foliage, Caterpie is often preyed upon by Flying-type Pokémon. Its four tiny feet are tipped with suction cups, permitting this Pokémon to scale most surfaces with minimal effort."
    },
    {
        "name": "metapod",
        "japanese_name": "transel",
        "height": 0.7,
        "type1": "bug",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pok%C3%A9mon)",
        "description": "Metapod is a Pokémon that resembles a green chrysalis. Its body is crescent-shaped with several segments making up the lower point. The front of Metapod's shell resembles a face with heavy-lidded eyes and a sharply pointed nose. The back of its shell consists of several geometrically shaped portions and projections."
    },
    {
        "name": "butterfree",
        "japanese_name": "butterfree",
        "height": 1.1,
        "type1": "bug",
        "type2": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pok%C3%A9mon)",
        "description": "Butterfree is a Pokémon which resembles a vaguely anthropomorphic butterfly with a purple body. Unlike true insects, it only has two body segments and four light blue legs. The upper pair of legs resemble small, three-fingered hands, while the lower pair resembles long, digit-less feet. Butterfree has two black antennae, a light blue snout with two fangs underneath, and large, red compound eyes. The red compound eyes at a closer look are reveled to be myriad of tiny eyes. Its two pairs of wings are white with black venation. Two oval scales on a female Butterfree's lower wings are black, but they are white on a male."
    },
    {
        "name": "weedle",
        "japanese_name": "beedle",
        "height": 0.3,
        "type1": "bug",
        "type2": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)",
        "description": "Weedle is a larval Pokémon with a segmented body ranging in color from yellow to reddish-brown. Each segment of its body is a sphere. It has a bulbous red nose, two small, black eyes on its face and two spherical feet on each body segment. The combination of red and yellow in its color scheme creates a bright warning to predators that it is poisonous. Weedle has a conical, two-inch (five centimeter) venomous stinger on its head and a barbed one on its tail. Weedle can retaliate against attackers and those who step on it with its strong toxin. It can distinguish its favorite kinds of leaves using its acute sense of smell. As a young Bug-type Pokémon, its daily appetite for leaves matches its weight. Weedle can be found in temperate forests and usually hides in grass, bushes, and under the leaves it eats."
    },
    {
        "name": "kakuna",
        "japanese_name": "cocoon",
        "height": 0.6,
        "type1": "bug",
        "type2": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pok%C3%A9mon)",
        "description": "Kakuna is a yellow, cocoon-like Pokémon. Kakuna has a dome-shaped head and black, triangular eyes with glowing white pupils. It has two scythe-like arms in the middle of its body. When it comes close to evolving, its body gives off heat that makes it warm to the touch. Kakuna remains virtually immobile and waits for evolution, often hanging from tree branches by long strands of silk. When attacked, however, it can extend its poison barbs. Kakuna nests in temperate forests and misty wooded areas. Occasionally, it will also nest at the mouth of tunnels and caves, as seen in Pokémon Snap."
    },
    {
        "name": "beedrill",
        "japanese_name": "spear",
        "height": 1,
        "type1": "bug",
        "type2": "poison",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pok%C3%A9mon)",
        "description": "Beedrill is a Pokémon which mostly resembles a bipedal, yellow wasp; however, it only has four legs instead of six and lacks pigment pits. Beedrill's head is round with a slightly pointed mouth, large, red eyes, and black antennae with a sharp bend in the middle. Its forelegs are tipped with long, conical stingers. It stands on its other two legs, which are long, segmented, and insectoid in shape. Beedrill has two pairs of rounded, veined wings, and another stinger on its yellow-and-black striped abdomen."
    },
    {
        "name": "pidgey",
        "japanese_name": "poppo",
        "height": 0.3,
        "type1": "normal",
        "type2": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pok%C3%A9mon)",
        "description": "Pidgey is a small, plump-bodied avian Pokémon. It is primarily brown with a cream-colored face, underside, and flight feathers. On top of its head is a short crest of three tufts. The center crest feathers are brown and the outer two tufts are cream-colored. Just under its crest are its narrow eyes which have white sclera and pupil along with its black irises. Angular black marking extend from behind its eyes and continue down its cheeks. It has a short, stubby beak and feet with two toes in front and one in back. Both its beak and feet are a grayish-pink. It has a short, brown tail made of three feathers."
    },
    {
        "name": "pidgeotto",
        "japanese_name": "pigeon",
        "height": 1.1,
        "type1": "normal",
        "type2": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)",
        "description": "Pidgeotto is a raptor-like avian Pokémon. It is covered with brown feathers, has a cream-colored face, underside, and flight feathers. It has a crest of pinkish-red feathers on its head and black, angular markings behind its black eyes. The plumage of its tail has alternating red and yellow feathers with ragged tips. Pidgeotto's beak and legs are pink. Two of its toes point forward, while one points backward. Additionally, it has powerful, sharp talons that it uses to grasp prey."
    },
    {
        "name": "pidgeot",
        "japanese_name": "pigeot",
        "height": 1.5,
        "type1": "normal",
        "type2": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)",
        "description": "Pidgeot is an avian Pokémon with large wings, sharp talons, and a short, hooked beak. Its glossy plumage is mostly brown with cream-colored underparts and flight feathers. Its head has a decorated crest that is nearly as long as its body. The center feathers of its crest are yellow, while the outer feathers are red. The fan-like feathers of its tail are red or brown. Its beak and legs are pink, and there are three forward-facing toes and one backward-facing toe on each foot. Behind each eye is an angular black marking."
    },
    {
        "name": "rattata",
        "japanese_name": "koratta",
        "height": 0.3,
        "type1": "normal",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)",
        "description": "Rattata is a small, quadrupedal rodent Pokémon. It has purple fur with a cream-colored face, paws, and underbelly. It has narrow eyes containing white sclera and pupil with red irises, rounded ears with cream-colored insides, and a single whisker on each cheek. Its long tail is tightly curled at the end. Its most notable feature is its large teeth. Like most rodents, its teeth grow continuously throughout its life and must be worn down by gnawing. A female Rattata will have shorter whiskers and lighter fur."
    },
    {
        "name": "raticate",
        "japanese_name": "ratta",
        "height": 0.7,
        "type1": "normal",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)",
        "description": "Raticate is a large, rodent-like Pokémon. Although it is often depicted on its hind legs, it is a quadruped. It is primarily tawny-colored with a cream underside. It has narrow black eyes, ears with ragged edges and dark insides, and large incisors that grow constantly. There are three whiskers on each side of its face, which it uses to maintain balance. It has short arms with three-fingered hands and webbed feet with three toes. The webbing on its feet allows it to swim. Its tail is long and scaly. A female will have shorter whiskers and lighter fur."
    },
    {
        "name": "spearow",
        "japanese_name": "onisuzume",
        "height": 0.3,
        "type1": "normal",
        "type2": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pok%C3%A9mon)",
        "description": "Spearow is an avian Pokémon that is very small. It has rough, brown plumage on its head and three brown tail feathers. It has narrow, dark brown eyes with white pupils and a short, hooked beak that is light pink. The feathers covering its wings are pinkish-red with lighter tips, and it has a beige underside with two thin, horizontal stripes. Its light pink feet have two toes in front and one in the back. Black feathers cover its back."
    },
    {
        "name": "fearow",
        "japanese_name": "onidrill",
        "height": 1.2,
        "type1": "normal",
        "type2": "flying",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pok%C3%A9mon)",
        "description": "Fearow is a large, mostly brown avian Pokémon with a vulturine neck and broad, powerful wings. It has a long, pointed, pink beak and a decorative red coxcomb on top of its head. Its narrow eyes have very small pupils and do not appear to have colored irises. It has shaggy, feathers at the base of its neck and covering the upper portion of its wings. These feathers are cream-colored, as are the tips of its flight feathers. Its sharp-clawed talons are pink, with three toes pointing forward and one pointing backward."
    },
    {
        "name": "ekans",
        "japanese_name": "arbo",
        "height": 2,
        "type1": "poison",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
        "description": "Ekans is a purple, serpentine Pokémon. Its eyes, underbelly, the thick stripe around its neck, and rattle are yellow. Ekans has three pairs of black lines encircling its body, as well as another line that connects to each slit-pupiled eye and curves toward its nose. Its large mouth has a round, pink tongue and no visible teeth. While painful, a newborn Ekans's bite is not venomous. This Pokémon grows longer with age."
    },
    {
        "name": "arbok",
        "japanese_name": "arbok",
        "height": 3.5,
        "type1": "poison",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)",
        "description": "Arbok is a serpentine Pokémon that resembles a cobra. It has narrow eyes and several sharp teeth. Just below its head is a large hood with a face-like pattern. This pattern has over 20 possible variations. The pattern typically has two red and yellow eyespots outlined in black, a wide black streak resembling an upturned mouth, and a black V-shaped stripe above the eyespots."
    },
    {
        "name": "pikachu",
        "japanese_name": "pikachu",
        "height": 0.4,
        "type1": "electric",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
        "description": "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, and brown eyes. Each cheek is a red circle that contains a pouch for electricity storage. It has short forearms with five fingers on each paw, and its feet each have three toes. At the base of its lightning bolt-shaped tail is a patch of brown fur. A female will have a V-shaped notch at the end of its tail, which looks like the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs."
    },
    {
        "name": "raichu",
        "japanese_name": "raichu",
        "height": 0.8,
        "type1": "electric",
        "type2": "",
        "url": "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)",
        "description": "Raichu is a bipedal, rodent-like Pokémon. Raichu is covered in dark orange fur with a white belly. Its bifurcated ears are brown on the outside, yellow on the insides, and end in a distinctive curl. There is a circular yellow marking on each cheek where its electric sacs are, and it has a triangular, dark brown nose. Its arms and feet have patches of brown fur at the end, and the soles of its long feet are tan with a circular orange pad in the center. On its back are two horizontal brown stripes. Its long, thin tail has a lightning bolt-shaped end. This lightning bolt is chipped on females. Raichu exudes a weak electrical charge from all its body and glows slightly in the dark."
    }
]

const PokemonPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentItems = pokemonsData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <div className="wrapper">
                {PokemonMain(currentItems)}
            </div>
            <div>
                <Pagination itemsPerPage={itemsPerPage} totalItems={pokemonsData.length} paginate={paginate} />
            </div>
            
        </div>
    )
}

export default PokemonPage;