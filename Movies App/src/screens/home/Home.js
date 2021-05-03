import React, { Component } from "react";
import Header from "../../common/header/Header.js";
import "./Home.css";
import { withStyles } from '@material-ui/core/styles';
import  { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import moviesData from "../../common/moviesData.js";


const styles = theme => ({
  root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
  },
  upcomingMoviesHeading: {
      textAlign: 'center',
      background: '#ff9999',
      padding: '8px',
      fontSize: '1rem'
  },
  gridListUpcomingMovies: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
      width: '100%'
  },
  gridListMain: {
      transform: 'translateZ(0)',
      cursor: 'pointer',
      margin:'0%'

  },
  title: {
      color: theme.palette.primary.light,
  }
});

class Home extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header baseUrl={this.props.baseU} />
        <div id="upcomeing">
          <span>Upcoming Movies</span>
        </div>
        <div>
        <GridList cols={5} className={classes.gridListUpcomingMovies}>
            {moviesData.map((tile) => (
              <GridListTile key={tile.id} className="a">
                <img
                  src={tile.poster_url}
                  alt={tile.title}
                  className="movie-poster"
                />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div className="flex-container">
            <div className="left">
            <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
              {moviesData.map((movie) => (
                <GridListTile className="released-movie-grid-item"
                  key={"grid" + movie.id}
                >
                  <img
                    src={movie.poster_url}
                    className="movie-poster2"
                    alt={movie.title}
                  />
                  <GridListTileBar
                    title={movie.title}
                    subtitle={
                      <span>
                        Release Date:
                        {new Date(movie.release_date).toDateString()}
                      </span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>

            </div>

        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);