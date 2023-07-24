import Page from "@/components/layout/Page";
import { Box, Collapse, Container, Grid, Typography } from "@mui/material";

export default function Ko() {

	return (
		<Page title={"Error"}>
			<Box my={15}>
				<Container disableGutters maxWidth="lg">
						<Grid spacing={3} container>
							<Grid item md={12}>
                                <Typography variant="h2">Algo no ha ido bien...</Typography>
                            </Grid>

							<Grid item md={12}>
                                <Typography variant="body1">Ha habido un error en tu compra</Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography variant="body1">Por favor, repite el proceso o ponte en conttacto con nosotros</Typography>
                            </Grid>
						</Grid>
				</Container>
			</Box>
		</Page>
	);
}
