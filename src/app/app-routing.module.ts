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
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
