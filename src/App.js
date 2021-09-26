import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { createTheme } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles({
	center: {
		margin: 'auto'
	}
});

function App() {
	const classes = useStyles();
	const [posts, setPosts] = React.useState([]);

	const getData = async () => {
		axios.get('https://smiling-memory-320903-default-rtdb.firebaseio.com/Posts.json').then((response) => {
			setPosts(Object.entries(response.data));
		});
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			{posts.map((post) => {
				console.log(post[1].Picture);
				return (
					<Card
						sx={{ maxWidth: '50%', height: '400px', marginBottom: '20px', marginTop: '20px' }}
						className={classes.center}
						key={post}
					>
						<CardActionArea>
							<CardMedia component='img' height='320' image={post[1].Picture} alt={post[1].Alt} />
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									{post[1].Title}
								</Typography>	
								<Typography variant='body2' color='text.secondary'>
									{post[1].Desc}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				);
			})}
		</div>
	);
}

export default App;
