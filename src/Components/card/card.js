import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';
import classes from './appbar.module.scss'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// const CardExample = (props) => {
//   return (
//     <div>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//         <Card style={props.style} className={classes.cardMain} >
//           <CardTitle className={classes.title}>{props.title}</CardTitle>
//           <CardText className={classes.text}>{props.text}</CardText>
//         </Card>
//         </Grid>
//         </Grid>
//     </div>
//       );
//     };

// export default CardExample;


const CardExample = (props) => {
  return (
    <div>
      <Grid justify='center' container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={4}>
          <Paper style={props.style} className={classes.cardMain}>
            <Typography variant='p' align='center' className={classes.title} >{props.title}</Typography><br />
            <Typography variant='p' align='center' className={classes.text} >{props.text}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default CardExample