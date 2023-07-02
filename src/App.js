import React from 'react'
import './App.css';
import { Header, Blog, Features, Possibility, WhatGPT3, Footer } from './containers';
import { Navbar, CTA, Brand } from './components';


const App = () => {
	return (
		<div className="app">
			<div className="gradient__bg">
				<Navbar />
				<Header />
				<Brand />
				<WhatGPT3 />
				<Features />
				<Possibility />
				<CTA />
				<Blog />
				<Footer />
			</div>
		</div>
	)
}

export default App