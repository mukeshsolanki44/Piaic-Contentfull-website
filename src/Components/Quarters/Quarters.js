import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Styles from "./Quarter.module.scss"

class RightQuarters extends React.Component {
  render() {
    let data = this.props.data
    console.log(data, "alldara")

    return (
      <>
        <Grid
          container
          justifyContent={"center"}
          className={Styles.grid_container}
        >
          {/* left quarter null */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className={Styles.right_quarter_line_a}
            style={this.props.style}
          >
            <span
              className={Styles.counter}
              style={{
                backgroundColor: data.background,
                color: data.fontcolor,
                border: data.border,
              }}
            >
              {}
            </span>
          </Grid>
          {/* right quarter */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className={Styles.right_quarter_line_b}
            style={this.props.style}
          >
            <Grid
              xl={12}
              lg={12}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "40px",
              }}
            >
              <Paper className={Styles.paper}>
                <h6>{data.programTitle}</h6>
                <p className={Styles.discription}>
                  <img src={data.programImage} className={Styles.program_icons} />
                  {data.programDes}
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}

class LeftQuarters extends React.Component {
  render() {
    let data = this.props.data
    return (
      <>
        <Grid
          container
          justifyContent={"center"}
          className={Styles.grid_container}
        >
          {/* left quarter div  */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className={Styles.left_quarters_line_a}
            style={this.props.style}
          >
            <span
              className={Styles.counter}
              style={{
                backgroundColor: data.background,
                color: data.fontcolor,
                border: data.border,
              }}
            >
              {}
            </span>
            <Grid
              xl={12}
              lg={12}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "40px",
              }}
            >
              <Paper className={Styles.paper}>
                <h6>{data.programTitle}</h6>
                <p className={Styles.discription}>
                  <img src={data.programImage} className={Styles.program_icons} />
                  {data.programDes}
                </p>
              </Paper>
            </Grid>
          </Grid>
          {/* right quarter div null */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className={Styles.left_quarters_line_b}
            style={this.props.style}
          ></Grid>
        </Grid>
      </>
    )
  }
}

export { RightQuarters, LeftQuarters }