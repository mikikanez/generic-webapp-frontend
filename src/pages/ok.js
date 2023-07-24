import Page from "@/components/layout/Page";
import { Box, Collapse, Container, Grid, Typography } from "@mui/material";

export default function Ok() {

	return (
		<Page title={"Compra finalizada con éxito!"}>
			<Box my={15}>
				<Container disableGutters maxWidth="lg">
						<Grid spacing={3} container>
							<Grid item md={12}>
                                <Typography variant="h2">Thank You For Shopping With Us!</Typography>
                            </Grid>

							<Grid item md={12}>
                                <Typography variant="body1">Your order was completed successfully</Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography variant="body1">An email receipt including your order details has been sent to the email address provided. Check it out !</Typography>
                            </Grid>
						</Grid>
				</Container>
			</Box>
		</Page>
	);
}
