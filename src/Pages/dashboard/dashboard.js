import { Grid } from '@material-ui/core';
import React from 'react'
import DashboardFinished from './dashboardfinished/dashboardfinished'
import DashboardProgress from './dashboardprogress/dashboardprogress';
import DashboardHeader from './dashboardheader/dashboardheader';
import DashboardProfile from './dashboardprofile/dashboardprofile';
import DashboardGoals from './dashboardgoals/dashboardgoals';

export default function Dashboard () {

    return (
        <div >
            <DashboardHeader/>
            <DashboardProfile/>
            <Grid container >
                <Grid item md={6} sm={12} >
                    <DashboardProgress/>
                    <DashboardFinished/>
                </Grid>
                <Grid item md={6} sm={12} >
                    <DashboardGoals/>
                </Grid>
               
            </Grid>

            
                        
        </div>
    );
}