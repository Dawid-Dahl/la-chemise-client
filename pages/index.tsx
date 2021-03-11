import Head from "next/head";
import styled from "styled-components";

export default function Main() {
	return (
		<Wrapper>
			<Head>
				<title>La Chemise</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>MÖSSOR!</h1>
		</Wrapper>
	);
}

const Wrapper = styled.div``;
