import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/guards/auth.guard';
import { NoAuthGuard } from './pages/auth/guards/noAuth.guard';
import { LayoutsComponent } from './pages/layouts/layouts.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutsComponent,
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'login', loadChildren: () => import('./pages/brainbank/pre-login/login/login.module').then((m) => m.LoginModule) },
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutsComponent,
    data: {
      layout: 'classic'
    },
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/brainbank/dashboard/dashboard.module').then((m) => m.DashboardModule) },
      { path: 'atm', loadChildren: () => import('./pages/brainbank/atmdetails/atmdetails.module').then(m => m.AtmdetailsModule) },
      { path: 'digitalpayment', loadChildren: () => import('./pages/brainbank/digitalpayment/digitalpayment.module').then(m => m.DigitalpaymentModule) },
      { path: 'poscardusage', loadChildren: () => import('./pages/brainbank/POS/pos-card-usage/pos-card-usage.module').then(m => m.PosCardUsageModule) },
      { path: 'posmainmenu', loadChildren: () => import('./pages/brainbank/POS/pos-main-menu/pos-main-menu.module').then(m => m.PosMainMenuModule) },
      { path: 'posmerchantanalysis', loadChildren: () => import('./pages/brainbank/POS/pos-merchant-analysis/pos-merchant-analysis.module').then(m => m.PosMerchantAnalysisModule) },
      {path:'atmManagement',loadChildren: () => import('./pages/brainbank/analytics/decisionanalysis/atm-management/atm-management.module').then(m => m.AtmManagementModule) },
      {path:'fundsInvestment',loadChildren: () => import('./pages/brainbank/analytics/decisionanalysis/funds-investment/funds-investment.module').then(m => m.FundsInvestmentModule) },
      {path:'rewardPointsRecommendation',loadChildren: () => import('./pages/brainbank/analytics/decisionanalysis/reward-points-recommendation/reward-points-recommendation.module').then(m => m.RewardPointsRecommendationModule) },
      {path:'surveyFeedbackAnalysis',loadChildren: () => import('./pages/brainbank/analytics/feedbackanalysis/survey-feedback-analysis/survey-feedback-analysis.module').then(m => m.SurveyFeedbackAnalysisModule) },
      {path:'botAnalysis',loadChildren: () => import('./pages/brainbank/analytics/feedbackanalysis/bot-analysis/bot-analysis.module').then(m => m.BotAnalysisModule) },
      {path:'rateofInterestDeviation',loadChildren: () => import('./pages/brainbank/analytics/whatifanalysis/rate-of-interest-deviation/rate-of-interest-deviation.module').then(m => m.RateOfInterestDeviationModule) },
      {path:'corporateCustomerAnalysis',loadChildren: () => import('./pages/brainbank/analytics/customeranalysis/corporate-customer-analysis/corporate-customer-analysis.module').then(m => m.CorporateCustomerAnalysisModule) },
      {path:'crossSell',loadChildren: () => import('./pages/brainbank/analytics/customeranalysis/cross-sell/cross-sell.module').then(m => m.CrossSellModule) },
      {path:'customerRisk',loadChildren: () => import('./pages/brainbank/analytics/customeranalysis/customer-risk/customer-risk.module').then(m => m.CustomerRiskModule) },
      {path:'corporateThreeSixty',loadChildren: () => import('./pages/brainbank/analytics/customeranalysis/customer360/customer360.module').then(m => m.Customer360Module) },
      {path:'individualCustomerAnalysis',loadChildren: () => import('./pages/brainbank/analytics/customeranalysis/individual-customer-analysis/individual-customer-analysis.module').then(m => m.IndividualCustomerAnalysisModule) },
      {path:'transactionAnalysisDashboard',loadChildren: () => import('./pages/brainbank/analytics/customeranalysis/transaction-analysis-dashboard/transaction-analysis-dashboard.module').then(m => m.TransactionAnalysisDashboardModule) },
      {path:'upSell',loadChildren: () => import('./pages/brainbank/analytics/customeranalysis/up-sell/up-sell.module').then(m => m.UpSellModule) },
      {path:'geogriphicalLoanDistribution',loadChildren: () => import('./pages/brainbank/analytics/debtanalysis/geogriphical-loan-distribution/geogriphical-loan-distribution.module').then(m => m.GeogriphicalLoanDistributionModule) },
      {path:'loanForecasting',loadChildren: () => import('./pages/brainbank/analytics/debtanalysis/loan-forecasting/loan-forecasting.module').then(m => m.LoanForecastingModule) },
      {path:'sanctionAndMaturityAnalysis',loadChildren: () => import('./pages/brainbank/analytics/debtanalysis/sanction-maturity-analysis/sanction-maturity-analysis.module').then(m => m.SanctionMaturityAnalysisModule) },
      {path:'atmAnalysis',loadChildren: () => import('./pages/brainbank/analytics/digitaltransaction/atm-analysis/atm-analysis.module').then(m => m.AtmAnalysisModule) },
      {path:'hourlyMobileAppTransactionAnalysis',loadChildren: () => import('./pages/brainbank/analytics/digitaltransaction/hourly-mobile-app-transaction-analysis/hourly-mobile-app-transaction-analysis.module').then(m => m.HourlyMobileAppTransactionAnalysisModule) },
      {path:'mobileAppPeakVolumeAnalysis',loadChildren: () => import('./pages/brainbank/analytics/digitaltransaction/mobile-app-peak-volume-analysis/mobile-app-peak-volume-analysis.module').then(m => m.MobileAppPeakVolumeAnalysisModule) },
      {path:'mobileAppTransactionAnalysis',loadChildren: () => import('./pages/brainbank/analytics/digitaltransaction/mobile-app-transaction-analysis/mobile-app-transaction-analysis.module').then(m => m.MobileAppTransactionAnalysisModule) },
      {path:'mobileAppTransactionMarketShare',loadChildren: () => import('./pages/brainbank/analytics/digitaltransaction/mobile-app-transaction-market-share/mobile-app-transaction-market-share.module').then(m => m.MobileAppTransactionMarketShareModule) },
      {path:'omniChannelTransactionSummary',loadChildren: () => import('./pages/brainbank/analytics/digitaltransaction/omni-channel-transaction-summary/omni-channel-transaction-summary.module').then(m => m.OmniChannelTransactionSummaryModule) },
      {path:'realTimeMobileAppTransactionAnalysis',loadChildren: () => import('./pages/brainbank/analytics/digitaltransaction/real-time-mobile-app-transaction-analysis/real-time-mobile-app-transaction-analysis.module').then(m => m.RealTimeMobileAppTransactionAnalysisModule) },
      { path:'atmprofile', loadChildren: () => import('./pages/brainbank/ATM/atmprofile/atmprofile.module').then(m => m.AtmprofileModule) },
      { path:'atmplacement', loadChildren: () => import('./pages/brainbank/ATM/atmplacement/atmplacement.module').then(m => m.AtmplacementModule) },
      { path:'atmtransaction-analysis', loadChildren: () => import('./pages/brainbank/ATM/atmtransaction-analysis/atmtransaction-analysis.module').then(m => m.AtmtransactionAnalysisModule) },
      { path:'usermaintenance', loadChildren: () => import('./pages/brainbank/admininstration/usermaintenance/usermaintenance.module').then(m => m.UsermaintenanceModule) },
      { path:'rolemaintenance', loadChildren: () => import('./pages/brainbank/admininstration/rolemaintenance/rolemaintenance.module').then(m => m.RolemaintenanceModule) },
      { path:'groupmaintenance', loadChildren: () => import('./pages/brainbank/admininstration/groupmaintenance/groupmaintenance-routing.module').then(m=> m.GroupmaintenanceRoutingModule)},
      { path:'addgroupusers', loadChildren: () => import('./pages/brainbank/admininstration/addgroupusers/addgroupusers-routing.module').then(m=> m.AddgroupusersRoutingModule)},
      { path:'hierarchymaintenance', loadChildren: () => import('./pages/brainbank/admininstration/hierarchymaintenance/hierarchymaintenance-routing.module').then(m=> m.HierarchymaintenanceRoutingModule)},
      { path:'rolerights', loadChildren: () => import('./pages/brainbank/admininstration/rolerights/rolerights-routing.module').then(m=> m.RolerightsRoutingModule)},
      { path:'processconfiguration', loadChildren: () => import('./pages/brainbank/masterconfiguration/processconfiguration/processconfiguration.module').then(m=> m.ProcessconfigurationModule)},
      { path:'informativeconfiguration', loadChildren: () => import('./pages/brainbank/masterconfiguration/informativeconfiguration/informativeconfiguration.module').then(m=> m.InformativeconfigurationModule)},
      { path:'systemparameter', loadChildren: () => import('./pages/brainbank/masterconfiguration/systemconfiguration/systemparameter/systemparameter.module').then(m=> m.SystemparameterModule)},
      { path:'serverconfiguration', loadChildren: () => import('./pages/brainbank/masterconfiguration/systemconfiguration/serverconfiguration/serverconfiguration.module').then(m=> m.ServerconfigurationModule)},
      { path:'eodconfiguration', loadChildren: () => import('./pages/brainbank/masterconfiguration/systemconfiguration/eodconfiguration/eodconfiguration.module').then(m=> m.EodconfigurationModule)},
      { path:'holiday', loadChildren: () => import('./pages/brainbank/masterconfiguration/systemconfiguration/holiday/holiday.module').then(m=> m.HolidayModule)},
      { path:'holidayweekend', loadChildren: () => import('./pages/brainbank/masterconfiguration/systemconfiguration/holidayweekend/holidayweekend.module').then(m=> m.HolidayweekendModule)},
      { path:'onboardingriskweightageconfiguration', loadChildren: () => import('./pages/brainbank/masterconfiguration/systemconfiguration/onboardingriskweightageconfiguration/onboardingriskweightageconfiguration.module').then(m=> m.OnboardingriskweightageconfigurationModule)},
      { path:'forecasteproductgrowth', loadChildren: () => import('./pages/brainbank/analytics/whatifanalysis/forecasteproductgrowth/forecasteproductgrowth.module').then(m=> m.ForecasteproductgrowthModule)},
      { path:'estimationofproductgrowthdeviation', loadChildren: () => import('./pages/brainbank/analytics/whatifanalysis/estimationofproductgrowthdeviation/estimationofproductgrowthdeviation.module').then(m=> m.EstimationofproductgrowthdeviationModule)},
      { path:'productperformancebasedontarget', loadChildren: () => import('./pages/brainbank/analytics/whatifanalysis/productperformancebasedontarget/productperformancebasedontarget.module').then(m=> m.ProductperformancebasedontargetModule)},
      { path:'correlationofproduct', loadChildren: () => import('./pages/brainbank/analytics/whatifanalysis/correlationofproduct/correlationofproduct.module').then(m=> m.CorrelationofproductModule)},
      { path:'estimationofproductgrowthdeviation', loadChildren: () => import('./pages/brainbank/analytics/whatifanalysis/estimationofproductgrowthdeviation/estimationofproductgrowthdeviation.module').then(m=> m.EstimationofproductgrowthdeviationModule)},
      { path:'socialmediaanalysis', loadChildren: () => import('./pages/brainbank/analytics/feedbackanalysis/social-media-analysis/social-media-analysis.module').then(m=> m.SocialMediaAnalysisModule)},
      { path:'notificationengine', loadChildren: () => import('./pages/brainbank/notification-engine/notification-engine.module').then(m=> m.NotificationEngineModule)},
      { path:'microservice', loadChildren: () => import('./pages/brainbank/micro-service/micro-service-routing.module').then(m=> m.MicroServiceRoutingModule)}
     
        ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
