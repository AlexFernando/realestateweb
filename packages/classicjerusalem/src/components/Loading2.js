import React, { useState, useEffect } from 'react';
import { connect, styled, keyframes } from "frontity";
import logo from '../images/logo.png'
import Image from "@frontity/components/image";

const spinloader = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const spinlogo = keyframes`
	0% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
	}
`;

const LoaderContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 10px solid #fff;
	border-top: 10px solid var(--golden);
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: ${spinloader} 2s linear infinite;
	z-index: 9996;
`;

const LoaderImage = styled(Image)`
	height: 120px;
	width: 120px;
	animation: ${spinlogo} 2s linear infinite;
    background-color: #000;
    border-radius: 50%;
    border: 1px solid var(--golden);
    margin: 1rem;
`;

const Overlay = styled.div`

    width: 100%;
  height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
	background-color: rgba(0, 0, 0, 0.1);
	display: ${({ showOverlay }) => (showOverlay ? 'block' : 'none')};
    z-index: 9998;
`;

const Loader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<>
			<Overlay showOverlay={loading} />
			{loading && (
				<LoaderContainer>
					<LoaderImage alt="logo" src={logo} />
				</LoaderContainer>
			)}
		</>
	);
};

export default Loader;
