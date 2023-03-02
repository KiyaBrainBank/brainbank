import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { LayoutsModule } from './pages/layouts/layouts.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RolerightsComponent } from './pages/brainbank/admininstration/rolerights/rolerights.component';
import { AimlmoduleComponent } from './pages/brainbank/aimlmodule/aimlmodule.component';
import { ProcessconfigurationComponent } from './pages/brainbank/masterconfiguration/processconfiguration/processconfiguration.component';
import { InformativeconfigurationComponent } from './pages/brainbank/masterconfiguration/informativeconfiguration/informativeconfiguration.component';
import { SystemparameterComponent } from './pages/brainbank/masterconfiguration/systemconfiguration/systemparameter/systemparameter.component';
import { ServerconfigurationComponent } from './pages/brainbank/masterconfiguration/systemconfiguration/serverconfiguration/serverconfiguration.component';
import { EodconfigurationComponent } from './pages/brainbank/masterconfiguration/systemconfiguration/eodconfiguration/eodconfiguration.component';
import { HolidayComponent } from './pages/brainbank/masterconfiguration/systemconfiguration/holiday/holiday.component';
import { HolidayweekendComponent } from './pages/brainbank/masterconfiguration/systemconfiguration/holidayweekend/holidayweekend.component';
import { OnboardingriskweightageconfigurationComponent } from './pages/brainbank/masterconfiguration/systemconfiguration/onboardingriskweightageconfiguration/onboardingriskweightageconfiguration.component';
import { ForecasteproductgrowthComponent } from './pages/brainbank/analytics/whatifanalysis/forecasteproductgrowth/forecasteproductgrowth.component';
import { EstimationofproductgrowthdeviationComponent } from './pages/brainbank/analytics/whatifanalysis/estimationofproductgrowthdeviation/estimationofproductgrowthdeviation.component';
import { ProductperformancebasedontargetComponent } from './pages/brainbank/analytics/whatifanalysis/productperformancebasedontarget/productperformancebasedontarget.component';
import { CorrelationofproductComponent } from './pages/brainbank/analytics/whatifanalysis/correlationofproduct/correlationofproduct.component';
// import { RolemaintenanceComponent } from './pages/brainbank/admininstration/rolemaintenance/rolemaintenance.component';
// import { GroupmaintenanceComponent } from './pages/brainbank/admininstration/groupmaintenance/groupmaintenance.component';
// import { AddgroupusersComponent } from './pages/brainbank/admininstration/addgroupusers/addgroupusers.component';
// import { HierarchymaintenanceComponent } from './hierarchymaintenance/hierarchymaintenance.component';
// import { UsermaintenanceComponent } from './administration/usermaintenance/usermaintenance.component';
import 'chartjs-plugin-annotation';
@NgModule({
  declarations: [
    AppComponent,
    RolerightsComponent,
    AimlmoduleComponent,
    ProcessconfigurationComponent,
    InformativeconfigurationComponent,
    SystemparameterComponent,
    ServerconfigurationComponent,
    EodconfigurationComponent,
    HolidayComponent,
    HolidayweekendComponent,
    OnboardingriskweightageconfigurationComponent,
    ForecasteproductgrowthComponent,
    EstimationofproductgrowthdeviationComponent,
    ProductperformancebasedontargetComponent,
    CorrelationofproductComponent,
    // RolemaintenanceComponent,
    // GroupmaintenanceComponent,
    // AddgroupusersComponent,
    // HierarchymaintenanceComponent,
    // UsermaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    AuthModule,
    NgChartsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
