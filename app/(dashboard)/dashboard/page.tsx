'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from './_components/container/PageContainer';
// components
import SalesOverview from './_components/dashboard/SalesOverview';
import YearlyBreakup from './_components/dashboard/YearlyBreakup';
import RecentTransactions from './_components/dashboard/RecentTransactions';
import ProductPerformance from './_components/dashboard/ProductPerformance';
import Blog from './_components/dashboard/Blog';
import MonthlyEarnings from './_components/dashboard/MonthlyEarnings';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
