import React, { useEffect, useState } from "react";
import "./App.css";
import TMDB from "./TMDB";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

const App = () => {
	const [movieList, setMovieList] = useState([]);
	console.log("movieList", movieList);
	// eslint-disable-next-line no-unused-vars
	const [featuredData, setFeaturedData] = useState([]);
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

	return (
		<div className="page">

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
		</div>
	);
};

export default App;