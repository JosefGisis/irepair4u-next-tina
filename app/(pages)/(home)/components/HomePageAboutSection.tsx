import { Box, Container, Typography } from "@mui/material"
import { colorTheme } from "../../../../styles/colorTheme"
import { widths } from "../../../../styles/widths"

export default function HomePageAboutSection(props: {
	__typename: "HomeBlocksHomePageAbout"
	cards?:
		| ({
				__typename: "HomeBlocksHomePageAboutCards"
				title?: string | null | undefined
				text?: string | null | undefined
				image?: string | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	const { redAccentContrast, grayAccent } = colorTheme
	const { sixColumn } = widths

	return (
		<section
			id="about-detailed"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "4rem",
				paddingBottom: "4rem",
				background: `linear-gradient(to bottom right, ${redAccentContrast}, ${grayAccent})`,
			}}>
			<Container maxWidth="lg">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Typography
						textAlign="center"
						variant="h1"
						maxWidth={sixColumn}
						marginBlock="2.5rem">
						ABOUT US
					</Typography>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "3rem",
						}}>
						{props.cards?.map((card, index) => (
							<Box
								key={index}
								sx={{
									display: "flex",
									flexDirection: {
										xs: "column",
										md: "row",
									},
									gap: "3rem",
									order: 1,
								}}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "1rem",
										alignItems: "center",
										maxWidth: sixColumn,
										order: 2,
									}}>
									<div
										style={{
											padding: "1rem",
											width: "100%",
											marginBottom: "1rem",
											background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) )`,
										}}>
										<Typography
											variant="h4"
											textAlign="center"
											color={redAccentContrast}>
											{card?.title}
										</Typography>
									</div>

									<div style={{ paddingInline: 15 }}>
										<Typography variant="body1">
											{card?.text}
										</Typography>
									</div>
								</div>
								<Box
									sx={{
										order: {
											xs: 3,
											// alternate order
											md: index % 2 === 0 ? 3 : 1,
										},
									}}>
									<img
										src={card?.image || ""}
										width="460"
										height="307"
									/>
								</Box>
							</Box>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
