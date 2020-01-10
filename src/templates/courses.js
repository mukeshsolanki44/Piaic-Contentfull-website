import React from "react"
// import AppBar from '../components/navbar'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Styles from '../pages/Styles/Artificial.module.scss'
// import git_icon from './../Images/git.png'
// import python_icon from './../Images/python.png'
// import statistics_icon from './../Images/statistics.png'
// import anaconda_icon from './../Images/anaconda.png'
// import datascience_icon from './../Images/datascience.png'
// import keras_icon from './../Images/keras.png'
// import linux_icon from './../Images/linux.png'
// import docker_icon from './../Images/docker.png'
// import microservices_icon from './../Images/microservices.png'
// import container_icon from './../Images/container.png'
// import ai_icon from './../Images/ai.png'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/header'
import { graphql } from "gatsby";
import { LeftQuarters, RightQuarters } from "./../Components/Quarters/Quarters"


const Courses = ({ data }) => {
    const all_Data = data.allContentfulCorses.nodes[0]
    console.log(all_Data, "here")
        return (
            <div>
                <Header />
                <center>
                    <div className={Styles.main}>
        <h1 className={Styles.h1} >{all_Data.title}</h1><br />
        <h6 className={Styles.p}>{all_Data.shortDes}</h6>
                    </div>
                </center>
                <div className={Styles.main2}>
        <h2 className={Styles.main3}>{all_Data.title}</h2>

                </div>
                <Grid justify='center' container>
                {
                  all_Data.quarters.quarters &&
                  all_Data.quarters.quarters.map((v,i)=>{
                    return(
                    
                        <Grid item xs={12} sm={12} md={8} lg={3}>
                            <Paper className={Styles.cardMain} style={{ background: v.background, color:v.color, marginLeft: '25px', }}>
                    <Typography variant='h4' align='center' className={Styles.title} >{v.quarterTitle}</Typography>
                    <Typography variant='p' align='center' className={Styles.text} >{v.quarterDes}</Typography>
                            </Paper>
                        </Grid>
                   
                    )
                  }) 
                }
                 </Grid>
                <br /><br />
                <div className={Styles.main4}>
                    <h2>Detailed Program Structure</h2>
                </div>
                <br />
                <br />
                {/* section 1 */}
                      {/* section 1 */}
      <Grid container justifyContent={"center"}>
        {all_Data.programms.programDetails &&
          all_Data.programms.programDetails.map((v, i) => {
            return (
              <>
                {all_Data.programms.programDetails.length - 1 === i ? (
                  <>
                    {i % 2 !== 1 ? (
                      <LeftQuarters style={{ border: "none" }} data={v} />
                    ) : (
                      <RightQuarters style={{ border: "none" }} data={v} />
                    )}
                  </>
                ) : (
                  <>
                    {i % 2 !== 1 ? (
                      <LeftQuarters
                        // style={{ borderColor: all_Data.sliderColor }}
                        data={v}
                      />
                    ) : (
                      <RightQuarters
                        // style={{ borderColor: all_Data.sliderColor }}
                        data={v}
                      />
                    )}
                  </>
                )}
              </>
            )
          })}
      </Grid>
     
                 <br />
                <br />
                 <div>
                    <Footer />
                 </div>



                </div>
        )
}



export default Courses
export const pageQuery = graphql`
  query($slug: String!) {
    allContentfulCorses(filter: { slug: { eq: $slug } }) {
        nodes {
            quarters {
              quarters {
                quarteDes
                quarterTitle
                color
                background
              }
            }
            programms {
              programDetails {
                programDes
                programTitle
                programImage
              }
            }
            slug
            shortDes
            title
            id
          }
    }
  }
`