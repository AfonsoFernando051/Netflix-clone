import React, { useEffect, useState } from "react";
import "./App.css";
import TMDB from "./TMDB";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

const App = () => {
	const [movieList, setMovieList] = useState([]);
	console.log("movieList", movieList);
	const [featuredData,] = useState([]);
	useEffect(() => {
		const loadAll = async () => {
			let list = await TMDB.getHomeList();
			setMovieList(list);
			console.log(list);

			let originals = list.filter(i => i.slug === "originals");
			console.log(originals);
			// let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
			let randomChosen = Math.floor(Math.random() * (originals.length));


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