import { Grid } from '@material-ui/core';
import React, {useContext, useEffect} from 'react'
import {AuthContext} from '../../Provider/context'
import DashboardFinished from './dashboardfinished/dashboardfinished'
import DashboardProgress from './dashboardprogress/dashboardprogress';
import DashboardProfile from './dashboardprofile/dashboardprofile';
import DashboardGoals from './dashboardgoals/dashboardgoals';
import PCMJourneyNav from './pcmjourneynavpage/pcmjourneynavpage';

export default function Dashboard () {
    const ctx = useContext(AuthContext);
    
    if(!ctx.getCookie('isLoggedIn')){
        window.location.replace("/login")
    }else{
        return (
            <div >
                <PCMJourneyNav/>
                {/* <DashboardProfile/>
                <Grid container >
                    <Grid item md={6} sm={12} >
                        <DashboardProgress/>
                        <DashboardFinished/>
                    </Grid>
                    <Grid item md={6} sm={12} >
                        <DashboardGoals/>
                    </Grid>
                
                </Grid> */}     
            </div>
        );
    }
}