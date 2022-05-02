import React, { useEffect, useState } from "react";
import "./App.css";
import TMDB from "./TMDB";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import index from "./components/Header/index";
import Header from "./components/Header/index";

const App = () => {
	const [movieList, setMovieList] = useState([]);
	console.log("movieList", movieList);
	// eslint-disable-next-line no-unused-vars
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false);

	useEffect(() => {
		const loadAll = async () => {
			let list = await TMDB.getHomeList();
			setMovieList(list);
			console.log(list);

			let originals = list.filter(i => i.slug === "originals");
			console.log(originals);
			let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
			// eslint-disable-next-line no-unused-vars
			let chosen = originals[0].items.results[randomChosen];
			// eslint-disable-next-line no-unused-vars
			let chosenInfo = await TMDB.getMovieInfo(chosen.id, "tv");
			setFeaturedData(chosenInfo);
			console.log("randomChosen", randomChosen);

		};

		loadAll();
	}, []);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 10) {
				setBlackHeader(true);
			}
			else {
				setBlackHeader(false);
			}
		}

		window.addEventListener(`scroll`, scrollListener);
		return () => {
			window.removeEventListener(`scroll`, scrollListener);
		}
	}, [])

	return (
		<div className="page">

			<Header black={blackHeader} />

			{featuredData &&
				<FeaturedMovie item={featuredData} />
			}
			{<section className="lists">
				{movieList.length && movieList.map((item, key) => (
					<>
						<MovieRow key={key} title={item.title} items={item.items} />

					</>
				))}
			</section>}

			<footer>
				Feito com <span role="img" aria-label="coração">❤</span> por Fernando Afonso.
				Direitos de imagem para Netflix <br />
				Dados pegos pelo site Themoviedv.org
			</footer>

			{movieList.length <= 0 &&
				<div className="loading">
					<img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
				</div>
			}
		</div>


	);
};

export default App;